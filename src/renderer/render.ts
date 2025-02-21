const videoPlayer = document.getElementById('video-player') as HTMLVideoElement | null

if (!videoPlayer) {
  console.error('Video element not found!')
} else {
  async function startCamera(deviceId?: string) {
    try {
      const constraints: MediaStreamConstraints = {
        video: deviceId ? { deviceId: { exact: deviceId } } : true
      }
      const stream = await navigator.mediaDevices.getUserMedia(constraints)
      videoPlayer.srcObject = stream
      videoPlayer.play()
    } catch (error) {
      console.error('Error accessing camera:', error)
    }
  }

  startCamera()
}

// Listen for camera device changes
window.electron.ipcRenderer.on('set-camera-device', (_event, deviceId) => {
  if (deviceId === null) {
    if (videoPlayer && videoPlayer.srcObject) {
      const stream = videoPlayer.srcObject as MediaStream
      stream.getTracks().forEach((track) => track.stop())
      videoPlayer.srcObject = null
    }
  } else {
    startCamera(deviceId)
  }
})

let latestSize = { width: 140, height: 140 }

// Change size
window.electron.ipcRenderer.on('update-size', (_event, size) => {
  if (!videoPlayer) return

  latestSize = size
  videoPlayer.style.width = `${size.width}px`
  videoPlayer.style.height = `${size.height}px`
})

// Change shape
window.electron.ipcRenderer.on('update-shape', (_event, shape) => {
  if (!videoPlayer) return

  if (shape === 'circle') {
    videoPlayer.style.borderRadius = '100%'
    videoPlayer.style.width = `${latestSize.width}px`
    videoPlayer.style.height = `${latestSize.height}px`
  } else if (shape === 'square') {
    videoPlayer.style.borderRadius = '0'
    videoPlayer.style.width = `${latestSize.width}px`
    videoPlayer.style.height = `${latestSize.height}px`
  } else if (shape === 'rectangle') {
    videoPlayer.style.borderRadius = '0'
    videoPlayer.style.width = `${latestSize.width}px`
    videoPlayer.style.height = `${latestSize.height + 50}px`
  }
})

// Flip camera
let isFlipped = false

window.electron.ipcRenderer.on('toggle-flip-camera', () => {
  isFlipped = !isFlipped
  if (!videoPlayer) return
  videoPlayer.style.transform = isFlipped ? 'scaleX(-1)' : 'scaleX(1)'
})

let latestBorderStyle = 'solid'

// Change width
window.electron.ipcRenderer.on('update-width', (_event, width) => {
  if (!videoPlayer) return

  videoPlayer.style.borderWidth = width
  videoPlayer.style.borderStyle = latestBorderStyle
})

// Change style
window.electron.ipcRenderer.on('update-style', (_event, style) => {
  if (!videoPlayer) return
  latestBorderStyle = style
  videoPlayer.style.borderStyle = style
})

// Change color
window.electron.ipcRenderer.on('update-color', (_event, color) => {
  if (!videoPlayer) return
  videoPlayer.style.borderColor = color
})

// Change filter
window.electron.ipcRenderer.on('update-filter', (_event, filter) => {
  if (!videoPlayer) return
  videoPlayer.style.filter = filter
  videoPlayer.style['-webkit-filter'] = `-webkit-${filter}`
})

// Reset camera settings
window.electron.ipcRenderer.on('reset-camera-settings', () => {
  if (!videoPlayer) return

  videoPlayer.style.borderRadius = '100%'
  videoPlayer.style.width = '100px'
  videoPlayer.style.height = '100px'
  videoPlayer.style.transform = 'scaleX(1)'
  videoPlayer.style.borderColor = '#000000'
  videoPlayer.style.borderWidth = '0px'
  videoPlayer.style.borderStyle = 'solid'
})
