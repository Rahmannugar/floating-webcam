const video = document.querySelector('video') as HTMLVideoElement | null
const videoPlayer = document.getElementById('video-player') as HTMLVideoElement | null

if (!video || !videoPlayer) {
  console.error('Video elements not found!')
} else {
  async function startCamera() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true })
      if (video) {
        video.srcObject = stream
        video.play()
      }
    } catch (error) {
      console.error('Error accessing camera:', error)
    }
  }

  startCamera()

  function handleSetCameraResolution(style) {
    if (!videoPlayer) return
    videoPlayer.style.width = style.width
    videoPlayer.style.height = style.height
  }

  function handleSetCameraShape(style) {
    if (!videoPlayer) return
    videoPlayer.style.borderRadius = style.borderRadius
    videoPlayer.style.width = style.width
    videoPlayer.style.height = style.height
  }

  function handleSetCameraMirror(style) {
    if (!videoPlayer) return
    videoPlayer.style.transform = style.transform
    videoPlayer.style['-webkit-transform'] = style['-webkit-transform']
  }

  function handleSetBorderWidth(borderWidth) {
    if (!videoPlayer) return
    videoPlayer.style.borderWidth = borderWidth
  }

  function handleSetBorderStyle(borderStyle) {
    if (!videoPlayer) return
    videoPlayer.style.borderStyle = borderStyle
  }

  function handleSetBorderColor(borderColor) {
    if (!videoPlayer) return
    videoPlayer.style.borderColor = borderColor
  }

  function handleSetVideoStream(constraints) {
    renderCamera(constraints)
  }

  function handleSetVideoFilter(data) {
    if (!videoPlayer) return
    videoPlayer.style.filter = data.filter
    videoPlayer.style['-webkit-filter'] = `-webkit-${data.filter}`
  }

  const eventHandlers = {
    'set-camera-resolution': handleSetCameraResolution,
    'set-camera-shape': handleSetCameraShape,
    'set-camera-mirror': handleSetCameraMirror,
    'set-border-width': handleSetBorderWidth,
    'set-border-style': handleSetBorderStyle,
    'set-border-color': handleSetBorderColor,
    'set-video-stream': handleSetVideoStream,
    'set-video-filter': handleSetVideoFilter
  }

  function renderCamera(constraints) {
    if (!video) return
    if (video.srcObject) {
      ;(video.srcObject as MediaStream).getTracks().forEach((track) => track.stop())
    }
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then((stream) => {
        if (video) {
          video.srcObject = stream
          video.play()
        }
      })
      .catch((err) => {
        console.error(err.name + ': ' + err.message)
      })
  }

  window.addEventListener('DOMContentLoaded', function () {
    navigator.mediaDevices.enumerateDevices().then((devices) => {
      const cams = devices.filter((device) => device.kind === 'videoinput')
      window.electronAPI.sendSync('shared-window-channel', {
        type: 'set-webcams',
        payload: JSON.stringify(cams)
      })

      if (cams.length > 0) {
        const videoSource = cams[0].deviceId
        const constraints = {
          video: {
            deviceId: {
              exact: videoSource
            }
          }
        }
        renderCamera(constraints)
      }
    })

    window.electronAPI.onMessageReceived('shared-window-channel', (_, message) => {
      const handler = eventHandlers[message.type]
      if (handler) {
        handler(message.payload)
      }
    })
  })
}
