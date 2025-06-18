import { contextBridge, ipcRenderer } from 'electron';
const electron = require('electron');

contextBridge.exposeInMainWorld('electron', {
  // Exponer APIs seguras aquí
  sendMessage: (message: string) => ipcRenderer.send('message', message),
  onResponse: (callback: (response: any) => void) => {
    ipcRenderer.on('response', (_, data) => callback(data));
  }
});