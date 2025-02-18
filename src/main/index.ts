//main
import { app, shell, BrowserWindow, ipcMain, systemPreferences, Notification } from 'electron'
import { join } from 'path'
import { is } from '@electron-toolkit/utils'
import icon from '../../resources/floatcam-circle.png?asset'

let camWindow: BrowserWindow | null = null
let originalCamSize: { width: number; height: number } | null = null
let borderStyleWindow: BrowserWindow | null = null
let borderColorWindow: BrowserWindow | null = null
let filterWindow: BrowserWindow | null = null

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
    width: 140,
    height: 140,
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

  originalCamSize = { width: 140, height: 140 }

  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    camWindow.loadURL(`${process.env['ELECTRON_RENDERER_URL']}/cam.html`)
  } else {
    camWindow.loadFile(join(__dirname, '../renderer/cam.html'))
  }

  return camWindow
}

function createBorderStyleWindow(): BrowserWindow {
  borderStyleWindow = new BrowserWindow({
    width: 123,
    height: 304,
    resizable: false,
    frame: false,
    transparent: true,
    webPreferences: {
      preload: join(__dirname, '../preload/index.js')
    }
  })

  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    borderStyleWindow.loadURL(`${process.env['ELECTRON_RENDERER_URL']}/borderstyle.html`)
  } else {
    borderStyleWindow.loadFile(join(__dirname, '../renderer/borderstyle.html'))
  }

  borderStyleWindow.on('closed', () => {
    borderStyleWindow = null
  })
  return borderStyleWindow
}

function createBorderColorWindow(): BrowserWindow {
  borderColorWindow = new BrowserWindow({
    width: 164,
    height: 182,
    resizable: false,
    frame: false,
    transparent: true,
    webPreferences: {
      preload: join(__dirname, '../preload/index.js')
    }
  })

  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    borderColorWindow.loadURL(`${process.env['ELECTRON_RENDERER_URL']}/bordercolor.html`)
  } else {
    borderColorWindow.loadFile(join(__dirname, '../renderer/bordercolor.html'))
  }

  borderColorWindow.on('closed', () => {
    borderColorWindow = null
  })
  return borderColorWindow
}

function createFilterWindow(): BrowserWindow {
  filterWindow = new BrowserWindow({
    width: 164,
    height: 448,
    resizable: false,
    frame: false,
    transparent: true,
    webPreferences: {
      preload: join(__dirname, '../preload/index.js')
    }
  })

  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    filterWindow.loadURL(`${process.env['ELECTRON_RENDERER_URL']}/filter.html`)
  } else {
    filterWindow.loadFile(join(__dirname, '../renderer/filter.html'))
  }

  filterWindow.on('closed', () => {
    filterWindow = null
  })
  return filterWindow
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

  ipcMain.on('close-window', () => {
    BrowserWindow.getAllWindows().forEach((window) => window.close())
  })

  ipcMain.on('change-camera-size', (_event, size) => {
    if (!camWindow) return
    camWindow.setSize(size.width + 40, size.height + 40)
    camWindow.webContents.send('update-size', size)
  })

  ipcMain.on('toggle-flip-camera', (_event) => {
    if (!camWindow) return
    camWindow.webContents.send('toggle-flip-camera')
  })

  ipcMain.on('change-camera-shape', (_event, shape) => {
    if (!camWindow || !originalCamSize) return
    camWindow.setSize(originalCamSize.width, originalCamSize.height)
    camWindow.webContents.send('update-shape', shape)
  })

  ipcMain.on('change-camera-width', (_event, width) => {
    if (!camWindow) return
    camWindow.webContents.send('update-width', width)
  })

  ipcMain.on('change-camera-style', (_event, style) => {
    if (!camWindow) return
    camWindow.webContents.send('update-style', style)
  })

  ipcMain.on('change-camera-color', (_event, color) => {
    if (!camWindow) return
    camWindow.webContents.send('update-color', color)
  })
  ipcMain.on('change-camera-filter', (_event, filter) => {
    if (!camWindow) return
    camWindow.webContents.send('update-filter', filter)
  })

  ipcMain.on('reset-camera-settings', (_event) => {
    if (!camWindow) return
    camWindow.webContents.send('reset-camera-settings')
  })

  ipcMain.on('open-border-style-window', (_event) => {
    if (borderStyleWindow) {
      borderStyleWindow.focus()
    } else {
      createBorderStyleWindow()
    }
  })

  ipcMain.on('open-border-color-window', (_event) => {
    if (borderColorWindow) {
      borderColorWindow.focus()
    } else {
      createBorderColorWindow()
    }
  })
  ipcMain.on('open-filter-window', (_event) => {
    if (filterWindow) {
      filterWindow.focus()
    } else {
      createFilterWindow()
    }
  })

  ipcMain.on('close-border-style-window', () => {
    if (borderStyleWindow) {
      borderStyleWindow.close()
      borderStyleWindow = null
    }
  })

  ipcMain.on('close-border-color-window', () => {
    if (borderColorWindow) {
      borderColorWindow.close()
      borderColorWindow = null
    }
  })

  ipcMain.on('close-filter-window', () => {
    if (filterWindow) {
      filterWindow.close()
      filterWindow = null
    }
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
