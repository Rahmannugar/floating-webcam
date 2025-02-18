import { createRoot } from 'react-dom/client'
import '../../assets/main.css'
import { CameraProvider, useCamera } from '@renderer/store/store'

const BorderColorMenu = () => {
  const { borderColor, setBorderColor } = useCamera()
  const handleChangeColor = (
    color:
      | '#FFFFFF'
      | '#0D6EE0'
      | '#000000'
      | '#FFA619 '
      | '#FA233B'
      | '#FFF041'
      | '#39C6FB'
      | '#FF7AA4'
      | '#46DF33'
      | '#C45FEE'
      | '#982222'
      | '#009B61'
      | '#D45050'
      | '#18151554'
      | '#5A81BB'
      | '#7804CC'
  ) => {
    window.electron.ipcRenderer.send('change-camera-color', color)
    setBorderColor(color)
  }

  return (
    <div className="w-[164px] h-[182px] flex justify-center items-center bg-[#293845] relative">
      {/* Draggable title bar */}
      <div
        style={{ WebkitAppRegion: 'drag' } as React.CSSProperties}
        className="h-6 absolute top-0 left-0 right-0"
      />
      <div className="grid grid-cols-4 gap-2">
        {/* #FFFFFF button */}
        <button
          onClick={() => {
            handleChangeColor('#FFFFFF')
          }}
          className={`bg-[#FFFFFF] ${borderColor === '#FFFFFF' ? 'border-[3px] border-[#0D6EE0]' : ''} w-[30px] h-[30px] cursor-pointer hover:border-[#212339] hover:border-[3px] rounded-full`}
        ></button>
        {/* #0D6EE0 button */}
        <button
          onClick={() => {
            handleChangeColor('#0D6EE0')
          }}
          className={`bg-[#0D6EE0] ${borderColor === '#0D6EE0' ? 'border-[3px] border-[#000000]' : ''} w-[30px] h-[30px] cursor-pointer hover:border-[#212339] hover:border-[3px] rounded-full`}
        ></button>
        {/* #000000 button */}
        <button
          onClick={() => {
            handleChangeColor('#000000')
          }}
          className={`bg-[#000000] ${borderColor === '#000000' ? 'border-[3px] border-[#0D6EE0]' : ''} w-[30px] h-[30px] cursor-pointer hover:border-[#212339] hover:border-[3px] rounded-full`}
        ></button>
        {/* #FFA619 button */}
        <button
          onClick={() => {
            handleChangeColor('#FFA619 ')
          }}
          className={`bg-[#FFA619] ${borderColor === '#FFA619 ' ? 'border-[3px] border-[#0D6EE0]' : ''} w-[30px] h-[30px] cursor-pointer hover:border-[#212339] hover:border-[3px] rounded-full`}
        ></button>

        {/* #FA233B button */}
        <button
          onClick={() => {
            handleChangeColor('#FA233B')
          }}
          className={`bg-[#FA233B] ${borderColor === '#FA233B' ? 'border-[3px] border-[#0D6EE0]' : ''} w-[30px] h-[30px] cursor-pointer hover:border-[#212339] hover:border-[3px] rounded-full`}
        ></button>
        {/* #FFF041 button */}
        <button
          onClick={() => {
            handleChangeColor('#FFF041')
          }}
          className={`bg-[#FFF041] ${borderColor === '#FFF041' ? 'border-[3px] border-[#0D6EE0]' : ''} w-[30px] h-[30px] cursor-pointer hover:border-[#212339] hover:border-[3px] rounded-full`}
        ></button>
        {/* #39C6FB button */}
        <button
          onClick={() => {
            handleChangeColor('#39C6FB')
          }}
          className={`bg-[#39C6FB] ${borderColor === '#39C6FB' ? 'border-[3px] border-[#0D6EE0]' : ''} w-[30px] h-[30px] cursor-pointer hover:border-[#212339] hover:border-[3px] rounded-full`}
        ></button>
        {/* #FF7AA4 button */}
        <button
          onClick={() => {
            handleChangeColor('#FF7AA4')
          }}
          className={`bg-[#FF7AA4] ${borderColor === '#FF7AA4' ? 'border-[3px] border-[#0D6EE0]' : ''} w-[30px] h-[30px] cursor-pointer hover:border-[#212339] hover:border-[3px] rounded-full`}
        ></button>

        {/* #46DF33 button */}
        <button
          onClick={() => {
            handleChangeColor('#46DF33')
          }}
          className={`bg-[#46DF33] ${borderColor === '#46DF33' ? 'border-[3px] border-[#0D6EE0]' : ''} w-[30px] h-[30px] cursor-pointer hover:border-[#212339] hover:border-[3px] rounded-full`}
        ></button>
        {/* #C45FEE button */}
        <button
          onClick={() => {
            handleChangeColor('#C45FEE')
          }}
          className={`bg-[#C45FEE] ${borderColor === '#C45FEE' ? 'border-[3px] border-[#0D6EE0]' : ''} w-[30px] h-[30px] cursor-pointer hover:border-[#212339] hover:border-[3px] rounded-full`}
        ></button>
        {/* #982222 button */}
        <button
          onClick={() => {
            handleChangeColor('#982222')
          }}
          className={`bg-[#982222] ${borderColor === '#982222' ? 'border-[3px] border-[#0D6EE0]' : ''} w-[30px] h-[30px] cursor-pointer hover:border-[#212339] hover:border-[3px] rounded-full`}
        ></button>
        {/* #009B61 button */}
        <button
          onClick={() => {
            handleChangeColor('#009B61')
          }}
          className={`bg-[#009B61] ${borderColor === '#009B61' ? 'border-[3px] border-[#0D6EE0]' : ''} w-[30px] h-[30px] cursor-pointer hover:border-[#212339] hover:border-[3px] rounded-full`}
        ></button>

        {/* #D45050 button */}
        <button
          onClick={() => {
            handleChangeColor('#D45050')
          }}
          className={`bg-[#D45050] ${borderColor === '#D45050' ? 'border-[3px] border-[#0D6EE0]' : ''} w-[30px] h-[30px] cursor-pointer hover:border-[#212339] hover:border-[3px] rounded-full`}
        ></button>
        {/* #18151554 button */}
        <button
          onClick={() => {
            handleChangeColor('#18151554')
          }}
          className={`bg-[#18151554] ${borderColor === '#18151554' ? 'border-[3px] border-[#0D6EE0]' : ''} w-[30px] h-[30px] cursor-pointer hover:border-[#212339] hover:border-[3px] rounded-full`}
        ></button>
        {/* #5A81BB button */}
        <button
          onClick={() => {
            handleChangeColor('#5A81BB')
          }}
          className={`bg-[#5A81BB] ${borderColor === '#5A81BB' ? 'border-[3px] border-[#0D6EE0]' : ''} w-[30px] h-[30px] cursor-pointer hover:border-[#212339] hover:border-[3px] rounded-full`}
        ></button>
        {/* #7804CC button */}
        <button
          onClick={() => {
            handleChangeColor('#7804CC')
          }}
          className={`bg-[#7804CC] ${borderColor === '#7804CC' ? 'border-[3px] border-[#0D6EE0]' : ''} w-[30px] h-[30px] cursor-pointer hover:border-[#212339] hover:border-[3px] rounded-full`}
        ></button>
      </div>
    </div>
  )
}

const root = document.getElementById('border-color-root')
if (root) {
  createRoot(root).render(
    <CameraProvider>
      <BorderColorMenu />
    </CameraProvider>
  )
}
