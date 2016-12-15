'use strict';
const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

// require('electron-context-menu')({
//   prepend: (params, browserWindow) => [{
//     label: 'Rainbow',
//     // only show it when right-clicking images
//     visible: params.mediaType === 'image'
//   }]
// });

app.on('ready', () => {
  const win = new BrowserWindow({width: 1024, height: 768});

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'app/index.html'),
    protocol: 'file:',
    slashes: true
  }));
});

app.on('window-all-closed', () => {
  app.quit();
});
