import * as jose from 'jose';

describe('jose/signJWT', () => {
  test('app', async () => {
    const alg = 'RS256';
    const keys = await jose.generateKeyPair(alg);
    const jwt = await new jose.SignJWT({ payloadKey: 'payloadValue' })
      .setProtectedHeader({ alg })
      .setIssuedAt(new Date())
      .setIssuer('http://openid.com')
      .setAudience('http://example.com')
      .setSubject('uid')
      .setExpirationTime('30d')
      .sign(keys.privateKey);

    expect(jwt).toMatch(/^eyJ/);
  });
});
