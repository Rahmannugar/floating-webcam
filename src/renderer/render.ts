//render
const videoPlayer = document.getElementById('video-player') as HTMLVideoElement | null

if (!videoPlayer) {
  console.error('Video element not found!')
} else {
  async function startCamera() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true })
      videoPlayer.srcObject = stream
      videoPlayer.play()
    } catch (error) {
      console.error('Error accessing camera:', error)
    }
  }

  startCamera()
}

let latestSize = { width: 140, height: 140 }

//change size
window.electron.ipcRenderer.on('update-size', (_event, size) => {
  if (!videoPlayer) return

  latestSize = size
  videoPlayer.style.width = `${size.width}px`
  videoPlayer.style.height = `${size.height}px`
})

//change shape
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

//flip camera
let isFlipped = false

window.electron.ipcRenderer.on('toggle-flip-camera', (_event) => {
  isFlipped = !isFlipped
  if (!videoPlayer) return
  if (videoPlayer) {
    videoPlayer.style.transform = isFlipped ? 'scaleX(-1)' : 'scaleX(1)'
  }
})

let latestBorderStyle = 'solid'

//change width
window.electron.ipcRenderer.on('update-width', (_event, width) => {
  if (!videoPlayer) return

  videoPlayer.style.borderWidth = width
  videoPlayer.style.borderStyle = latestBorderStyle
})

//change style
window.electron.ipcRenderer.on('update-style', (_event, style) => {
  if (!videoPlayer) return
  latestBorderStyle = style
  videoPlayer.style.borderStyle = style
})

//change color
window.electron.ipcRenderer.on('update-color', (_event, color) => {
  if (!videoPlayer) return
  videoPlayer.style.borderColor = color
})

let defaultSize = { width: 140, height: 140 }

//reset camera settings
window.electron.ipcRenderer.on('reset-camera-settings', (_event) => {
  videoPlayer.style.borderRadius = '100%'
  videoPlayer.style.width = '100px'
  videoPlayer.style.height = '100px'
  videoPlayer.style.transform = 'scaleX(1)'
  videoPlayer.style.borderColor = '#000000'
  videoPlayer.style.borderWidth = '0px'
  videoPlayer.style.borderStyle = 'solid'
})
