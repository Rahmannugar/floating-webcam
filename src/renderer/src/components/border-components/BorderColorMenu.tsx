import ReactDOM from 'react-dom'
import '../../assets/main.css'
import { useState } from 'react'

const BorderColorMenu = () => {
  const [borderColor, setBorderColor] = useState('')
  const handleChangeColor = () => {}
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
          className={`bg-[#FFFFFF] w-[30px] h-[30px] cursor-pointer hover:border-[#212339] hover:border-[3px] rounded-full`}
        ></button>
        {/* #0D6EE0 button */}
        <button
          className={`bg-[#0D6EE0] w-[30px] h-[30px] cursor-pointer hover:border-[#212339] hover:border-[3px] rounded-full`}
        ></button>
        {/* #000000 button */}
        <button
          className={`bg-[#000000] w-[30px] h-[30px] cursor-pointer hover:border-[#212339] hover:border-[3px] rounded-full`}
        ></button>
        {/* #FFA619 button */}
        <button
          className={`bg-[#FFA619] w-[30px] h-[30px] cursor-pointer hover:border-[#212339] hover:border-[3px] rounded-full`}
        ></button>

        {/* #FA233B button */}
        <button
          className={`bg-[#FA233B] w-[30px] h-[30px] cursor-pointer hover:border-[#212339] hover:border-[3px] rounded-full`}
        ></button>
        {/* #FFF041 button */}
        <button
          className={`bg-[#FFF041] w-[30px] h-[30px] cursor-pointer hover:border-[#212339] hover:border-[3px] rounded-full`}
        ></button>
        {/* #39C6FB button */}
        <button
          className={`bg-[#39C6FB] w-[30px] h-[30px] cursor-pointer hover:border-[#212339] hover:border-[3px] rounded-full`}
        ></button>
        {/* #FF7AA4 button */}
        <button
          className={`bg-[#FF7AA4] w-[30px] h-[30px] cursor-pointer hover:border-[#212339] hover:border-[3px] rounded-full`}
        ></button>

        {/* #46DF33 button */}
        <button
          className={`bg-[#46DF33] w-[30px] h-[30px] cursor-pointer hover:border-[#212339] hover:border-[3px] rounded-full`}
        ></button>
        {/* #C45FEE button */}
        <button
          className={`bg-[#C45FEE] w-[30px] h-[30px] cursor-pointer hover:border-[#212339] hover:border-[3px] rounded-full`}
        ></button>
        {/* #982222 button */}
        <button
          className={`bg-[#982222] w-[30px] h-[30px] cursor-pointer hover:border-[#212339] hover:border-[3px] rounded-full`}
        ></button>
        {/* #009B61 button */}
        <button
          className={`bg-[#009B61] w-[30px] h-[30px] cursor-pointer hover:border-[#212339] hover:border-[3px] rounded-full`}
        ></button>

        {/* #D45050 button */}
        <button
          className={`bg-[#D45050] w-[30px] h-[30px] cursor-pointer hover:border-[#212339] hover:border-[3px] rounded-full`}
        ></button>
        {/* #18151554 button */}
        <button
          className={`bg-[#18151554] w-[30px] h-[30px] cursor-pointer hover:border-[#212339] hover:border-[3px] rounded-full`}
        ></button>
        {/* #5A81BB button */}
        <button
          className={`bg-[#5A81BB] w-[30px] h-[30px] cursor-pointer hover:border-[#212339] hover:border-[3px] rounded-full`}
        ></button>
        {/* #7804CC button */}
        <button
          className={`bg-[#7804CC] w-[30px] h-[30px] cursor-pointer hover:border-[#212339] hover:border-[3px] rounded-full`}
        ></button>
      </div>
    </div>
  )
}

ReactDOM.render(<BorderColorMenu />, document.getElementById('border-color-root'))
