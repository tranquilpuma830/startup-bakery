const _pr = require('bluebird');
const path = require('path');
const { exec } = require('child_process');
const _fs = require('fs-extra');

const { FileService } = require('./file.service');

const fs = _pr.promisifyAll(_fs);

const PDF_SIGN_CERTIFICATE_PASS = 'seals_mafia';

const scriptDirectory = path.resolve('./app/server/crypto-sign');
const certificateFileName = 'XXXXXX';
const certificatePath = path.join(scriptDirectory, certificateFileName);
const scriptPath = path.join(scriptDirectory, '/signer.py');
console.info('Crypto-sign script directory - ', scriptDirectory);

if (!fs.existsSync(scriptDirectory)) {
  console.error('Crypto-sign script directory was not found');
  throw new Error('Crypto-sign script directory was not found');
}
if (!fs.existsSync(scriptPath)) {
  console.error('Crypto-sign script was not found');
  throw new Error('Crypto-sign script was not found');
}

module.exports = class EncryptionService {
  static async addSign(mergedFilePath, tmpFolderPath) {
    console.info('Started to crypto sign pdf document');

    await EncryptionService.checkExistsCertificate();

    return EncryptionService._executeEncrypt(mergedFilePath)
      .then(() => path.join(tmpFolderPath, 'merged-signed.pdf'));
  }
  static async checkExistsCertificate() {
    if (!fs.existsSync(certificatePath)) {
      await EncryptionService._generateCertificate();
    }
  }
  static async _generateCertificate() {
    console.info('Started generate certificate');
    const certificate = await AzureBlobManager.downloadFile(certificateFileName, AZURE_BLOB_CONTAINER_NAMES.CERTS);
    await FileService.saveFile(certificate, certificatePath);
  }
  static async _executeEncrypt(mergedFilePath) {
    const strForExec = `python3 ${scriptPath} ${certificatePath} ${PDF_SIGN_CERTIFICATE_PASS} ${mergedFilePath}`;
    console.info(`Executing cryptoSigning command: ${strForExec}`);

    await new Promise(((resolve, reject) => {
      exec(strForExec, { timeout: 10 * 1000, maxBuffer: 20 * 1024 * 1024 }, (error) => {
        if (error) {
          console.error('CryptoSigning error', error);
          reject(new Error(`Document encrypted failed. ${error}`));
        } else {
          console.log('info', 'Documents successfully cryptoSigned');
          resolve();
        }
      });
    }));
  }
}
