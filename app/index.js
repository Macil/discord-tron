'use strict';
(function() {
  const {shell} = require('electron');
  const Kefir = require('kefir');
  const url = require('url');
  const electronContextMenu = require('electron-context-menu');

  document.addEventListener('DOMContentLoaded', () => {
    const webview = document.getElementById('discord');

    webview.addEventListener('new-window', e => {
      const {protocol} = url.parse(e.url);
      if (protocol === 'http:' || protocol === 'https:') {
        shell.openExternal(e.url);
      }
    });

    Kefir.fromEvents(webview, 'dom-ready')
      .take(1)
      .onValue(() => {
        electronContextMenu({window: webview});
      });
  });
})();
