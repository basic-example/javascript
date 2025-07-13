import * as jose from 'jose';

describe('jose/exportSPKI', () => {
  test('app', async () => {
    const alg = 'RS256';
    const { publicKey } = await jose.generateKeyPair(alg, {
      extractable: true,
    });
    const publicPem = await jose.exportSPKI(publicKey);

    expect(publicKey.constructor).toBe(CryptoKey);
    expect(publicPem.constructor).toBe(String);
  });
});
