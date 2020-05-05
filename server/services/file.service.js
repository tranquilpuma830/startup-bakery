const _pr = require('bluebird');
const _fs = require('fs-extra');
const fs = _pr.promisifyAll(_fs);

const rimraf = require('rimraf');
const { join } = require('path');
const rp = require('request-promise');

const PDF_FILES_TEMP_DIRECTORY = '/tmp';
console.log('TMP FOLDER PATH IS', PDF_FILES_TEMP_DIRECTORY);

module.exports = class FileService {
  static async createFolder(path) {
    try {
      if (!fs.existsSync(path)) {
        // @ts-ignore
        await fs.mkdirAsync(path);
      }
    } catch (e) {
      console.error('Problems occurred while creating directory, at ' + path, e);
      throw e;
    }
  }

  static async getTmpFolderPath(folderName = '') {
    const folderPath = join(PDF_FILES_TEMP_DIRECTORY, folderName);
    try {
      await fs.ensureDir(folderPath);
      return folderPath;
    } catch (e) {
      console.error('Problems occurred while creating tmp directories for merging process for document, at ' + folderPath, e);
      throw e;
    }
  }

  static async removeFolder(folderPath) {
    try {
      if (fs.existsSync(folderPath)) {
        rimraf(folderPath, () =>
          console.log('info', 'Tmp directory removed: ' + folderPath));
      }
    } catch (e) {
      console.error(`Problems occurred while deleting tmp by path ${folderPath}`, e);
      throw e;
    }
  }

  static async downloadAndSavePdfFile(documentUrl, path) {
    console.log('info', `Started downloading document with url ${documentUrl} from blob`);
    const documentBuffer = await FileService.getPdfFile(documentUrl);

    await FileService.createFolder(path);
    
    const fileName = `blob-${Date.now()}.pdf`;
    const fullFilePath = join(path, fileName);
    console.log('info', 'Ready to save downloaded file to local storage');
    return await FileService.saveFile(documentBuffer, fullFilePath);
  }

  static saveFile(buffer, path) {
    return new Promise((resolve, reject) => {
      try {
        const writeStream = fs.createWriteStream(path);
        writeStream.write(buffer);
        writeStream.end();
        writeStream.on('close', () => {
          resolve(path);
        });

        writeStream.on('error', (e) => {
          reject(e);
        });

        console.log('info', `File successfully saved to ${path}`);
      } catch (e) {
        reject(e);
        console.error(`Failed to save to ${path}.`, e);
        throw e;
      }
    });
  }

  static async getPdfFile(documentUrl) {
    console.log('info', 'Getting pdf file...');
    const pdfFileRequest = await rp({
      method: 'GET',
      uri: documentUrl,
      encoding: null,
    });
    return new Buffer(pdfFileRequest);
  }

  static async listFolder(folderPath) {
    // @ts-ignore
    return fs.readdirAsync(folderPath)
      .then((files) => {
        console.info(files);
      });
  }

  static async readFileToBuffer(fullFilePath) {
    return await new Promise((resolve, reject) => {
      try {
        const chunks = [];

        const readStream = fs.createReadStream(fullFilePath);


        readStream.on('error', (e) => {
          reject(e);
        });

        readStream.once('end', () => {
          console.log('info', `File successfully read from path ${fullFilePath}.`);
          resolve(Buffer.concat(chunks));
        });

        readStream.on('data', (chunk) => {
          chunks.push(chunk);
        });

      } catch (e) {
        console.error(`Failed to  read from path ${fullFilePath}.`, e);
        reject(e);
        throw e;
      }
    });
  }
}
