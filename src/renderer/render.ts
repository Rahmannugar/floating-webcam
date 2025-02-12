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

let latestSize = { width: 120, height: 120 }

window.electron.ipcRenderer.on('update-size', (_event, size) => {
  if (!videoPlayer) return

  latestSize = size

  videoPlayer.style.width = `${size.width}px`
  videoPlayer.style.height = `${size.height}px`
})

window.electron.ipcRenderer.on('update-shape', (_event, shape) => {
  if (!videoPlayer) return

  if (shape === 'circle') {
    videoPlayer.style.borderRadius = '50%'
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
