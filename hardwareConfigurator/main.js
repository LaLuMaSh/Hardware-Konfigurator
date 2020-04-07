const { app, BrowserWindow } = require('electron');

let win;

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({
    width: 1920,
    height: 1080,
    backgroundColor: '#ffffff',
  });

  win.removeMenu();

  win.loadURL(`file://${__dirname}/dist/hardwareConfigurator/index.html`);

  win.on('closed', () => win = null);

  win.webContents.openDevTools();

  win.on('resize', () => win.webContents.openDevTools());
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
});
