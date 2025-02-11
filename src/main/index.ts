import { app, shell, BrowserWindow, ipcMain, systemPreferences, Notification } from 'electron'
import { join } from 'path'
import { is } from '@electron-toolkit/utils'
import icon from '../../resources/floatcam-circle.png?asset'

function createMainWindow(): BrowserWindow {
  const mainWindow = new BrowserWindow({
    width: 62,
    maxHeight: 393,
    maximizable: false,
    resizable: false,
    show: false,
    frame: false,
    transparent: true,
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })

  mainWindow.setBackgroundColor('#00000000')

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }

  return mainWindow
}

function createCameraWindow(): BrowserWindow {
  const camWindow = new BrowserWindow({
    maxWidth: 500,
    maxHeight: 500,
    resizable: false,
    transparent: true,
    darkTheme: false,
    hasShadow: false,
    frame: false,
    alwaysOnTop: true,
    webPreferences: {
      preload: join(__dirname, '../preload/index.js')
    }
  })

  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    camWindow.loadURL(`${process.env['ELECTRON_RENDERER_URL']}/cam.html`)
  } else {
    camWindow.loadFile(join(__dirname, '../renderer/src/cam.html'))
  }
  return camWindow
}

app.whenReady().then(async () => {
  let camAllowed = true
  // Only check camera permission on macOS
  if (process.platform === 'darwin') {
    camAllowed = await systemPreferences.askForMediaAccess('camera').then((access) => {
      if (!access) {
        new Notification({
          title: 'Camera Access',
          body: 'Camera access is required to use this app'
        }).show()
        return false
      }
      return true
    })
  }

  if (!camAllowed) {
    app.quit()
    return
  }

  const mainWindow = createMainWindow()
  const camWindow = createCameraWindow()

  camWindow.setAlwaysOnTop(true, 'floating', 1)

  ipcMain.on('shared-window-channel', (event, arg) => {
    camWindow.webContents.send('shared-window-channel', arg)

    if (arg.type === 'set-webcams') {
      mainWindow.webContents.send('shared-window-channel', arg)
    }

    if (arg.type === 'set-camera-resolution') {
      let { width, height } = arg.payload
      width = Number(width.replace('px', '')) + 20
      height = Number(height.replace('px', '')) + 20
      camWindow.setSize(width, height)
    }

    event.returnValue = true
  })

  // Close all windows
  ipcMain.on('close-window', () => {
    const allWindows = BrowserWindow.getAllWindows()
    allWindows.forEach((window) => {
      window.close()
    })
  })

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) {
      createMainWindow()
      createCameraWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
