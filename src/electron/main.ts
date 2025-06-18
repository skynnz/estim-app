import { app, BrowserWindow } from 'electron';
import { ipcMain } from 'electron';

app.on('ready', () => {
  const mainWindow = new BrowserWindow({
    webPreferences: {
      preload: './preload.cjs', // Asegúrate de que este archivo exista
    }
  });

  // En desarrollo, carga desde el servidor de desarrollo
  if (process.env.NODE_ENV === 'development') {
    mainWindow.loadURL('http://localhost:5173');
  } else {
    // En producción, carga el archivo HTML construido
    mainWindow.loadFile('dist/index.html');
  }
});

ipcMain.on('message', (event, message) => {
  // Manejar mensajes del proceso de renderizado
  event.reply('response', { received: message });
});