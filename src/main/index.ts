//main
import { app, shell, BrowserWindow, ipcMain, systemPreferences, Notification } from 'electron'
import { join } from 'path'
import { is } from '@electron-toolkit/utils'
import icon from '../../resources/floatcam-circle.png?asset'

let camWindow: BrowserWindow | null = null

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
  camWindow = new BrowserWindow({
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

  mainWindow.show()
  camWindow.setAlwaysOnTop(true, 'floating', 1)

  // Close all windows
  ipcMain.on('close-window', () => {
    const allWindows = BrowserWindow.getAllWindows()
    allWindows.forEach((window) => {
      window.close()
    })
  })

  // Change shape
  ipcMain.on('change-camera-shape', (_event, shape) => {
    if (!camWindow) return

    const [currentWidth, currentHeight] = camWindow.getSize()

    if (shape === 'circle' || shape === 'square') {
      camWindow.setSize(currentWidth, currentWidth)
    } else if (shape === 'rectangle') {
      camWindow.setSize(currentWidth, currentHeight + 50)
    }

    camWindow.webContents.send('update-shape', shape)
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
