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

// Unified IPC Usage
window.electron.ipcRenderer.on('update-shape', (_event, shape) => {
  if (!videoPlayer) return

  if (shape === 'circle') {
    videoPlayer.style.borderRadius = '50%'
  } else {
    videoPlayer.style.borderRadius = '0'
  }
})
