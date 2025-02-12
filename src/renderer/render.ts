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

let originalHeight: number | null = null

window.electron.ipcRenderer.on('update-shape', (_event, shape) => {
  if (!videoPlayer) return

  if (!originalHeight) {
    originalHeight = videoPlayer.clientHeight
  }

  if (shape === 'circle') {
    videoPlayer.style.borderRadius = '50%'
    videoPlayer.style.height = `${originalHeight}px`
  } else if (shape === 'square') {
    videoPlayer.style.borderRadius = '0'
    videoPlayer.style.height = `${originalHeight}px`
  } else if (shape === 'rectangle') {
    videoPlayer.style.borderRadius = '0'
    videoPlayer.style.height = `${originalHeight + 50}px`
  }
})

window.electron.ipcRenderer.on('update-size', (_event, size) => {
  if (!videoPlayer) return

  videoPlayer.style.width = `${size.width}px`
  videoPlayer.style.height = `${size.height}px`
})
