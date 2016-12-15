'use strict';
(function() {
  const Kefir = require('kefir');
  const electronContextMenu = require('electron-context-menu');

  document.addEventListener('DOMContentLoaded', () => {
    const webview = document.getElementById('discord');
    Kefir.fromEvents(webview, 'dom-ready')
      .take(1)
      .onValue(() => {
        electronContextMenu({window: webview});
      });
  });
})();
