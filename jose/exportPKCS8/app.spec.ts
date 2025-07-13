import * as jose from 'jose';

describe('jose/exportPKCS8', () => {
  test('app', async () => {
    const alg = 'RS256';
    const { privateKey } = await jose.generateKeyPair(alg, {
      extractable: true,
    });
    const privatePem = await jose.exportPKCS8(privateKey);

    expect(privateKey.constructor).toBe(CryptoKey);
    expect(privatePem.constructor).toBe(String);
  });
});
