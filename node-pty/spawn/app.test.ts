const os = require('os');
const pty = require('node-pty');
const shell = os.platform() === 'win32' ? 'cmd.exe' : 'bash';

describe('node-pty', () => {
  let ptyProcess;
  afterAll(async () => {
    await new Promise((resolve) => setTimeout(() => resolve(null), 3000));

    ptyProcess._agent._inSocket.end();
    ptyProcess._agent._outSocket.end();
    ptyProcess.kill();
  });
  test('spawn', (done) => {
    ptyProcess = pty.spawn(shell, [], {
      name: 'xterm-color',
      cols: 80,
      rows: 30,
      cwd: process.env.HOME,
      env: process.env,
    });
    ptyProcess.on('data', (data) => {
      process.stdout.write(data);
      expect(data).toBeTruthy();
      done();
    });

    ptyProcess.write('ls\r');
  });
});
