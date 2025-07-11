import * as asn1 from 'asn1.js';
import * as fs from 'node:fs';

describe('asn1/define', () => {
  test('app', async () => {
    const pkcs1Pem = fs.readFileSync('fixture_pkcs1.pem', 'utf8');
    const pkcs8Pem = fs.readFileSync('fixture_pkcs8.pem', 'utf8');
    const RSA_OID = [1, 2, 840, 113549, 1, 1, 1];
    const RSAPrivateKey = asn1.define('RSAPrivateKey', function (this) {
      this.seq().obj(
        this.key('version').int(),
        this.key('modulus').int(),
        this.key('publicExponent').int(),
        this.key('privateExponent').int(),
        this.key('prime1').int(),
        this.key('prime2').int(),
        this.key('exponent1').int(),
        this.key('exponent2').int(),
        this.key('coefficient').int(),
      );
    });
    const PrivateKeyInfo = asn1.define('PrivateKeyInfo', function (this) {
      this.seq().obj(
        this.key('version').int(),
        this.key('privateKeyAlgorithm')
          .seq()
          .obj(this.key('algorithm').objid(), this.key('parameters').null_()),
        this.key('privateKey').octstr(),
      );
    });
    const pkcs1Der = Buffer.from(
      pkcs1Pem
        .replace(/-----(BEGIN|END) RSA PRIVATE KEY-----/g, '')
        .replace(/\s+/g, ''),
      'base64',
    );
    const rsaKey = RSAPrivateKey.decode(pkcs1Der, 'der');
    const pkcs1DerReEncoded = RSAPrivateKey.encode(rsaKey, 'der');
    const pkcs8Der = PrivateKeyInfo.encode(
      {
        version: 0,
        privateKeyAlgorithm: {
          algorithm: RSA_OID,
          parameters: null,
        },
        privateKey: pkcs1DerReEncoded, // same as pkcs1Der,
      },
      'der',
    );
    const base64 = pkcs8Der.toString('base64');
    const lines = base64.match(/.{1,64}/g)?.join('\n') ?? '';
    const result = `-----BEGIN PRIVATE KEY-----\n${lines}\n-----END PRIVATE KEY-----\n`;

    expect(result).toBe(pkcs8Pem);
  });
});
