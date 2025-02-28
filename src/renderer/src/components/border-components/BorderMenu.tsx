import { useCamera } from '@renderer/store/store'
import { useState } from 'react'

interface BorderMenuProps {
  setOpenBorderMenu: (open: boolean) => void
  setDefaultMenu: (open: boolean) => void
}

const BorderMenu = ({ setDefaultMenu, setOpenBorderMenu }: BorderMenuProps) => {
  const { width, setWidth } = useCamera()
  const [borderStyleOpen, setBorderStyleOpen] = useState(false)
  const [borderColorOpen, setBorderColorOpen] = useState(false)

  const handleMenu = () => {
    setDefaultMenu(true)
    setOpenBorderMenu(false)
    setBorderStyleOpen(!borderStyleOpen)
    window.electron.ipcRenderer.send('close-border-style-window')
    window.electron.ipcRenderer.send('close-border-color-window')
    setBorderColorOpen(!borderColorOpen)
  }

  const handleBorderWidth = (width: 'none' | 'thin' | 'medium' | 'thick') => {
    window.electron.ipcRenderer.send('change-camera-width', width)
    setWidth(width)
  }
  const toggleBorderStyleWindow = () => {
    if (borderStyleOpen) {
      window.electron.ipcRenderer.send('close-border-style-window')
    } else {
      window.electron.ipcRenderer.send('open-border-style-window')
    }
    setBorderStyleOpen(!borderStyleOpen)
  }

  const toggleBorderColorWindow = () => {
    if (borderColorOpen) {
      window.electron.ipcRenderer.send('close-border-color-window')
    } else {
      window.electron.ipcRenderer.send('open-border-color-window')
    }
    setBorderColorOpen(!borderColorOpen)
  }

  return (
    <div className=" space-y-2">
      <div className="text-white w-[44px]  text-[20px] bg-[#3B4956] rounded-[8px] font-bold flex flex-col">
        {/* no width  button*/}
        <button
          onClick={() => {
            handleBorderWidth('none')
          }}
          className={`${width === 'none' ? 'bg-[#0D6EE0]' : ''} mb-[2px] rounded-[8px] py-3 hover:bg-[#212339]  h-[44px] transition-all duration-200 flex justify-center items-center`}
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 28.4375C7.5875 28.4375 1.5625 22.4125 1.5625 15C1.5625 7.5875 7.5875 1.5625 15 1.5625C22.4125 1.5625 28.4375 7.5875 28.4375 15C28.4375 22.4125 22.4125 28.4375 15 28.4375ZM15 3.4375C8.625 3.4375 3.4375 8.625 3.4375 15C3.4375 21.375 8.625 26.5625 15 26.5625C21.375 26.5625 26.5625 21.375 26.5625 15C26.5625 8.625 21.375 3.4375 15 3.4375Z"
              fill="white"
            />
            <path
              d="M6.1248 24.1873C6.01276 24.1873 5.90465 24.1475 5.81586 24.0588C5.64862 23.8915 5.64862 23.6081 5.81586 23.4409L23.3159 5.94086C23.4831 5.77362 23.7665 5.77362 23.9338 5.94086C24.101 6.1081 24.101 6.39151 23.9338 6.55875L24.2873 6.91231L23.9338 6.55875L6.43375 24.0588C6.34496 24.1475 6.23685 24.1873 6.1248 24.1873Z"
              fill="white"
              stroke="white"
            />
          </svg>
        </button>

        {/* thin width  button*/}
        <button
          onClick={() => {
            handleBorderWidth('thin')
          }}
          className={`${width === 'thin' ? 'bg-[#0D6EE0]' : ''} hover:bg-[#212339] my-[2px] py-3 rounded-[8px]  h-[44px] transition-all duration-200 flex justify-center items-center`}
        >
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.1755 0.561629L1.06014 15.6918C0.474642 16.2778 0.475106 17.2276 1.06118 17.8131C1.64725 18.3986 2.597 18.3981 3.1825 17.812L18.2978 2.68191C18.8833 2.09584 18.8829 1.14609 18.2968 0.560592C17.7107 -0.0249077 16.761 -0.0244446 16.1755 0.561629Z"
              fill="white"
            />
          </svg>
        </button>
        <div className="bg-[#4A5C6C] w-[30px] mx-auto h-[1.5px]"></div>

        {/* medium width button */}
        <button
          onClick={() => {
            handleBorderWidth('medium')
          }}
          className={`${width === 'medium' ? 'bg-[#0D6EE0]' : ''} hover:bg-[#212339] my-[2px] py-3 rounded-[8px]  h-[44px] transition-all duration-200 flex justify-center items-center`}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.1176 1.49553L1.12028 14.5056C-0.0507166 15.6777 -0.0497885 17.5772 1.12236 18.7482C2.2945 19.9192 4.194 19.9183 5.365 18.7461L18.3623 5.7361C19.5333 4.56395 19.5324 2.66446 18.3603 1.49346C17.1881 0.322455 15.2886 0.323381 14.1176 1.49553Z"
              fill="white"
            />
          </svg>
        </button>
        <div className="bg-[#4A5C6C] w-[30px] mx-auto h-[1.5px]"></div>

        {/* thick width button */}
        <button
          onClick={() => {
            handleBorderWidth('thick')
          }}
          className={`${width === 'thick' ? 'bg-[#0D6EE0]' : ''} hover:bg-[#212339] py-3 mt-[2px] rounded-[8px]  h-[44px] transition-all duration-200 flex justify-center items-center`}
        >
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.4109 1.69809L1.82704 13.2932C0.265711 14.8561 0.266948 17.3888 1.82981 18.9501L2.53726 19.6569C4.10012 21.2182 6.63278 21.217 8.19411 19.6541L19.7779 8.05895C21.3393 6.49609 21.338 3.96343 19.7752 2.40209L19.0677 1.69533C17.5049 0.134 14.9722 0.135235 13.4109 1.69809Z"
              fill="white"
            />
          </svg>
        </button>
        <button
          onClick={toggleBorderStyleWindow}
          className="hover:bg-[#212339] py-3 mt-[2px] rounded-[8px]  h-[44px] transition-all duration-200 flex justify-center items-center"
        >
          <svg
            width="30"
            height="31"
            viewBox="0 0 30 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.13557 6.82638C2.09224 6.95346 2.07647 7.08833 2.08933 7.22198C2.10219 7.35564 2.14337 7.48502 2.21014 7.60152C2.27691 7.71801 2.36774 7.81895 2.47656 7.8976C2.58539 7.97625 2.70972 8.03082 2.84129 8.05766C2.97172 8.08176 3.10577 8.07813 3.23472 8.04702C3.36366 8.01591 3.48461 7.958 3.58971 7.87708C3.69481 7.79615 3.7817 7.69402 3.84473 7.5773C3.90777 7.46059 3.94553 7.33192 3.95557 7.19966C4.14838 6.38569 4.61032 5.66063 5.26656 5.1419C5.9228 4.62318 6.73493 4.34116 7.57143 4.34152H22.4286C23.2653 4.34126 24.0776 4.62354 24.7339 5.14263C25.3902 5.66172 25.852 6.3872 26.0444 7.20152C26.0545 7.33378 26.0922 7.46245 26.1553 7.57916C26.2183 7.69587 26.3052 7.79801 26.4103 7.87894C26.5154 7.95986 26.6363 8.01776 26.7653 8.04888C26.8942 8.07999 27.0283 8.08361 27.1587 8.05952C27.2905 8.03272 27.415 7.97811 27.524 7.89933C27.633 7.82056 27.724 7.71944 27.7908 7.60272C27.8575 7.486 27.8987 7.35638 27.9114 7.2225C27.9241 7.08862 27.9081 6.95357 27.8644 6.82638C27.5851 5.59342 26.895 4.49204 25.9072 3.70304C24.9194 2.91405 23.6928 2.48431 22.4286 2.48438H7.57143C6.30714 2.48397 5.08032 2.91359 4.09248 3.70264C3.10465 4.49169 2.41456 5.59326 2.13557 6.82638ZM2.13557 24.1424C2.09224 24.0153 2.07647 23.8804 2.08933 23.7468C2.10219 23.6131 2.14337 23.4837 2.21014 23.3672C2.27691 23.2507 2.36774 23.1498 2.47656 23.0711C2.58539 22.9925 2.70972 22.9379 2.84129 22.9111C2.97172 22.887 3.10577 22.8906 3.23472 22.9217C3.36366 22.9528 3.48461 23.0107 3.58971 23.0917C3.69481 23.1726 3.7817 23.2747 3.84473 23.3914C3.90777 23.5082 3.94553 23.6368 3.95557 23.7691C4.14838 24.5831 4.61032 25.3081 5.26656 25.8268C5.9228 26.3456 6.73493 26.6276 7.57143 26.6272H22.4286C23.2653 26.6275 24.0776 26.3452 24.7339 25.8261C25.3902 25.307 25.852 24.5816 26.0444 23.7672C26.0545 23.635 26.0922 23.5063 26.1553 23.3896C26.2183 23.2729 26.3052 23.1707 26.4103 23.0898C26.5154 23.0089 26.6363 22.951 26.7653 22.9199C26.8942 22.8888 27.0283 22.8851 27.1587 22.9092C27.2905 22.936 27.415 22.9906 27.524 23.0694C27.633 23.1482 27.724 23.2493 27.7908 23.366C27.8575 23.4827 27.8987 23.6124 27.9114 23.7463C27.9241 23.8801 27.9081 24.0152 27.8644 24.1424C27.5851 25.3753 26.895 26.4767 25.9072 27.2657C24.9194 28.0547 23.6928 28.4844 22.4286 28.4844H7.57143C6.30714 28.4848 5.08032 28.0552 4.09248 27.2661C3.10465 26.4771 2.41456 25.3755 2.13557 24.1424ZM27.0714 19.1987C26.8252 19.1987 26.589 19.1008 26.4148 18.9267C26.2407 18.7525 26.1429 18.5164 26.1429 18.2701V12.6987C26.1429 12.4524 26.2407 12.2162 26.4148 12.0421C26.589 11.8679 26.8252 11.7701 27.0714 11.7701C27.3177 11.7701 27.5539 11.8679 27.728 12.0421C27.9022 12.2162 28 12.4524 28 12.6987V18.2701C28 18.5164 27.9022 18.7525 27.728 18.9267C27.5539 19.1008 27.3177 19.1987 27.0714 19.1987ZM2 18.2701C2 18.5164 2.09783 18.7525 2.27197 18.9267C2.44611 19.1008 2.6823 19.1987 2.92857 19.1987C3.17484 19.1987 3.41103 19.1008 3.58517 18.9267C3.75931 18.7525 3.85714 18.5164 3.85714 18.2701V12.6987C3.85714 12.4524 3.75931 12.2162 3.58517 12.0421C3.41103 11.8679 3.17484 11.7701 2.92857 11.7701C2.6823 11.7701 2.44611 11.8679 2.27197 12.0421C2.09783 12.2162 2 12.4524 2 12.6987V18.2701Z"
              fill="white"
            />
          </svg>
        </button>
        <button
          onClick={toggleBorderColorWindow}
          className="hover:bg-[#212339] py-3 mt-[2px] rounded-[8px]  h-[44px] transition-all duration-200 flex justify-center items-center"
        >
          <div className="w-[30px] h-[30px] bg-white rounded-full"></div>
        </button>
      </div>

      <button
        onClick={handleMenu}
        className="hover:bg-[#212339] w-full py-3 rounded-[8px]  h-[44px] transition-all duration-200 flex justify-center items-center"
      >
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.7624 15L22.1374 9.63749C22.3728 9.40211 22.505 9.08286 22.505 8.74999C22.505 8.41711 22.3728 8.09787 22.1374 7.86249C21.902 7.62711 21.5828 7.49487 21.2499 7.49487C20.917 7.49487 20.5978 7.62711 20.3624 7.86249L14.9999 13.2375L9.63742 7.86249C9.40204 7.62711 9.0828 7.49487 8.74992 7.49487C8.41705 7.49487 8.0978 7.62711 7.86242 7.86249C7.62704 8.09787 7.49481 8.41711 7.49481 8.74999C7.49481 9.08286 7.62704 9.40211 7.86242 9.63749L13.2374 15L7.86242 20.3625C7.74526 20.4787 7.65227 20.6169 7.58881 20.7693C7.52535 20.9216 7.49268 21.085 7.49268 21.25C7.49268 21.415 7.52535 21.5784 7.58881 21.7307C7.65227 21.883 7.74526 22.0213 7.86242 22.1375C7.97863 22.2546 8.11688 22.3476 8.2692 22.4111C8.42153 22.4746 8.58491 22.5072 8.74992 22.5072C8.91494 22.5072 9.07832 22.4746 9.23064 22.4111C9.38297 22.3476 9.52122 22.2546 9.63742 22.1375L14.9999 16.7625L20.3624 22.1375C20.4786 22.2546 20.6169 22.3476 20.7692 22.4111C20.9215 22.4746 21.0849 22.5072 21.2499 22.5072C21.4149 22.5072 21.5783 22.4746 21.7306 22.4111C21.883 22.3476 22.0212 22.2546 22.1374 22.1375C22.2546 22.0213 22.3476 21.883 22.411 21.7307C22.4745 21.5784 22.5072 21.415 22.5072 21.25C22.5072 21.085 22.4745 20.9216 22.411 20.7693C22.3476 20.6169 22.2546 20.4787 22.1374 20.3625L16.7624 15Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  )
}
export default BorderMenu
