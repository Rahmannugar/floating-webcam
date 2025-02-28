import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import '../../assets/main.css'

interface CameraDevice {
  deviceId: string
  label: string
}

const CameraMenu = () => {
  const [cameraDevices, setCameraDevices] = useState<CameraDevice[]>([])
  const [selectedDevice, setSelectedDevice] = useState<string>('')

  useEffect(() => {
    const getCameraDevices = async () => {
      try {
        const devices = await navigator.mediaDevices.enumerateDevices()
        const videoDevices = devices
          .filter((device) => device.kind === 'videoinput')
          .map((device) => ({
            deviceId: device.deviceId,
            label: device.label || `Camera ${device.deviceId.slice(0, 5)}...`
          }))
        setCameraDevices(videoDevices)

        if (videoDevices.length > 0) {
          const defaultDevice = videoDevices[0].deviceId
          setSelectedDevice(defaultDevice)
          window.electron.ipcRenderer.send('camera-device-selected', defaultDevice)
        }
      } catch (error) {
        console.error('Error enumerating devices:', error)
      }
    }

    getCameraDevices()
  }, [])

  const handleDeviceSelect = (deviceId: string) => {
    let newDevice = selectedDevice === deviceId ? '' : deviceId
    setSelectedDevice(newDevice)

    if (!newDevice && cameraDevices.length > 0) {
      newDevice = cameraDevices[0].deviceId
      setSelectedDevice(newDevice)
    }

    window.electron.ipcRenderer.send('camera-device-selected', newDevice)
  }

  return (
    <div className="window-menu w-[213px] h-auto min-h-[88px] flex flex-col bg-[#293845] relative p-3">
      {/* Draggable title bar */}
      <div
        style={{ WebkitAppRegion: 'drag' } as React.CSSProperties}
        className="h-6 absolute top-0 left-0 right-0"
      />
      <div className="space-y-2">
        {cameraDevices.map((device) => (
          <label
            key={device.deviceId}
            className="flex items-center space-x-2 text-white text-sm cursor-pointer"
          >
            <input
              type="checkbox"
              name="camera"
              value={device.deviceId}
              checked={selectedDevice === device.deviceId}
              onChange={() => handleDeviceSelect(device.deviceId)}
            />
            <span>{device.label}</span>
          </label>
        ))}
      </div>
    </div>
  )
}

const root = document.getElementById('cam-root')
if (root) {
  createRoot(root).render(<CameraMenu />)
}
