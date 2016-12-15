'use strict';
const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

app.on('ready', () => {
  const win = new BrowserWindow({
    width: 1024,
    height: 768,
    icon: path.join(__dirname, 'extern/icon.png'),
    title: 'Discord'
  });

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'app/index.html'),
    protocol: 'file:',
    slashes: true
  }));
});

app.on('window-all-closed', () => {
  app.quit();
});
