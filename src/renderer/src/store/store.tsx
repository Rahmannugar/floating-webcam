import React, { createContext, useContext, useState } from 'react'

interface CameraSettingsContextType {
  borderColor: string
  setBorderColor: (color: string) => void
  width: string
  setWidth: (width: string) => void
  borderStyle: string
  setBorderStyle: (style: string) => void
  size: string
  setSize: (size: string) => void
  shape: string
  setShape: (shape: string) => void
}

const CameraContext = createContext<CameraSettingsContextType | undefined>(undefined)

const CameraProvider = ({ children }: { children: React.ReactNode }) => {
  const [borderColor, setBorderColor] = useState('#000000')
  const [width, setWidth] = useState('none')
  const [borderStyle, setBorderStyle] = useState('solid')
  const [size, setSize] = useState('S')
  const [shape, setShape] = useState('circle')

  return (
    <CameraContext.Provider
      value={{
        borderColor,
        setBorderColor,
        width,
        setWidth,
        borderStyle,
        setBorderStyle,
        size,
        setSize,
        shape,
        setShape
      }}
    >
      {children}
    </CameraContext.Provider>
  )
}

const useCamera = () => {
  const context = useContext(CameraContext)
  if (context === undefined) {
    throw new Error('useCamera must be used within a CameraProvider')
  }
  return context
}

export { CameraProvider, useCamera }
