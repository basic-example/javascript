import * as jose from 'jose';

describe('jose/jwtVerify', () => {
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

    const { payload, protectedHeader } = await jose.jwtVerify(
      jwt,
      keys.publicKey,
      {
        issuer: 'http://openid.com',
        audience: 'http://example.com',
      },
    );

    expect(Object.keys(payload)).toContain('payloadKey');
    expect(payload['payloadKey']).toBe('payloadValue');
    expect(Object.keys(protectedHeader)).toContain('alg');
    expect(protectedHeader['alg']).toBe(alg);
  });
});
