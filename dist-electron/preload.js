"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const electron = require('electron');
electron_1.contextBridge.exposeInMainWorld('electron', {
    // Exponer APIs seguras aquí
    sendMessage: (message) => electron_1.ipcRenderer.send('message', message),
    onResponse: (callback) => {
        electron_1.ipcRenderer.on('response', (_, data) => callback(data));
    }
});
