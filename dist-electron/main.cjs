"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const electron_2 = require("electron");
electron_1.app.on('ready', () => {
    const mainWindow = new electron_1.BrowserWindow({
        webPreferences: {
            preload: '../src/electron/preload.js',
        }
    });
    // En desarrollo, carga desde el servidor de desarrollo
    if (process.env.NODE_ENV === 'development') {
        mainWindow.loadURL('http://localhost:5173');
    }
    else {
        // En producción, carga el archivo HTML construido
        mainWindow.loadFile('dist/index.html');
    }
});
electron_2.ipcMain.on('message', (event, message) => {
    // Manejar mensajes del proceso de renderizado
    event.reply('response', { received: message });
});
