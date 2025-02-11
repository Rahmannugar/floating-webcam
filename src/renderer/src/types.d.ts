declare global {
  interface Window {
    electronAPI: {
      sendSync: (channel: string, data: any) => any
      onMessageReceived: (channel: string, callback: (event: any, message: any) => void) => void
    }
    api: {
      requestCameraAccess: () => Promise<MediaStream | null>
    }
  }
}

interface CSSProperties extends React.CSSProperties {
  WebkitAppRegion?: 'drag' | 'no-drag'
}

export {}
