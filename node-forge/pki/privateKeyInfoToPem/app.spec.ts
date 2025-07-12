import * as forge from 'node-forge';
import * as fs from 'node:fs';

const pkcs1Pem = fs.readFileSync('fixture_pkcs1.pem', 'utf8');
const pkcs8Pem = fs.readFileSync('fixture_pkcs8.pem', 'utf8');

describe('node-forge/pki/privateKeyInfoToPem', () => {
  test('app', async () => {
    const rsaPrivateKey = forge.pki.privateKeyToAsn1(
      forge.pki.privateKeyFromPem(pkcs1Pem),
    );
    const privateKeyInfo = forge.pki.wrapRsaPrivateKey(rsaPrivateKey);
    const result = forge.pki.privateKeyInfoToPem(privateKeyInfo);

    expect(result.replaceAll(/\r\n/g, '\n')).toBe(pkcs8Pem);
  });
});
