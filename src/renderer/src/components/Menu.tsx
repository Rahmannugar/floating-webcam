interface MenuProps {
  setOpenResizeMenu: any
  setDefaultMenu: any
  setOpenShapeMenu: any
  setOpenBorderMenu: any
}

const Menu = ({
  setOpenResizeMenu,
  setDefaultMenu,
  setOpenShapeMenu,
  setOpenBorderMenu
}: MenuProps) => {
  const handleClose = () => {
    window.electron.ipcRenderer.send('close-window')
  }
  const handleOpenResizeMenu = () => {
    setOpenResizeMenu(true)
    setDefaultMenu(false)
  }

  const handleOpenShapeMenu = () => {
    setOpenShapeMenu(true)
    setDefaultMenu(false)
  }
  const handleOpenBorderMenu = () => {
    setOpenBorderMenu(true)
    setDefaultMenu(false)
  }
  const handleFlipCamera = () => {
    window.electron.ipcRenderer.send('toggle-flip-camera')
  }
  const handleResetCamera = () => {
    window.electron.ipcRenderer.send('reset-camera-settings')
  }

  return (
    <div className="flex flex-col justify-center items-center">
      {/* camera button */}
      <button className="hover:bg-[#212339] p-2 rounded-[8px] transition-all duration-200">
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.1467 4.19333C19.8763 4.48372 20.3921 5.00712 20.8545 5.77445L21.0069 6.03928L21.5722 7.12322L21.5908 7.15348L21.6077 7.17983L21.6557 7.24547C21.9133 7.52609 22.3443 7.69563 22.6287 7.69563C25.2347 7.69563 27.3632 9.7422 27.4937 12.315L27.5 12.5656V19.8094C27.5 23.1494 24.8623 25.875 21.5569 26.0161L21.2875 26.0219H8.7125C5.37167 26.0219 2.64684 23.3845 2.50574 20.0788L2.5 19.8094V12.5656C2.5 9.87637 4.68122 7.69563 7.37125 7.69563C7.65472 7.69563 8.08635 7.52585 8.3443 7.24547L8.35319 7.23499L8.36431 7.22042L8.42859 7.12182L8.99227 6.03963C9.49471 5.12647 10.0413 4.51604 10.8524 4.19322C12.3386 3.60224 17.6616 3.60224 19.1467 4.19333ZM11.5454 5.93542C11.2687 6.04556 11.0182 6.30052 10.7508 6.74251L10.635 6.94351L10.1539 7.87363L10.0355 8.08791C9.9367 8.25232 9.83783 8.39111 9.72494 8.51412C9.14941 9.13969 8.32308 9.501 7.58852 9.56153L7.37125 9.57062L7.16613 9.57754C5.67497 9.67836 4.48276 10.8703 4.38191 12.3606L4.375 12.5656V19.8094C4.375 22.1247 6.18968 24.0169 8.47452 24.1405L8.7125 24.1469H21.2875C23.6024 24.1469 25.495 22.3315 25.6186 20.0473L25.625 19.8094V12.5656C25.625 10.9809 24.3928 9.68295 22.8339 9.57754L22.6287 9.57062L22.4111 9.56153C21.6754 9.50099 20.8491 9.13958 20.2743 8.51328C20.1629 8.39191 20.0646 8.25411 19.9663 8.09109L19.9427 8.05068L19.9146 8.00048L19.7694 7.7283L19.3646 6.94385C19.0912 6.44747 18.8408 6.1441 18.5705 5.99164L18.4533 5.93542L18.3041 5.88583C17.0177 5.52223 12.543 5.53875 11.5454 5.93542ZM14.9996 11.499C17.7124 11.499 19.9109 13.6975 19.9109 16.4103C19.9109 19.123 17.7124 21.3215 14.9996 21.3215C12.2869 21.3215 10.0884 19.123 10.0884 16.4103C10.0884 13.6975 12.2869 11.499 14.9996 11.499ZM14.9996 13.374C13.3224 13.374 11.9634 14.733 11.9634 16.4103C11.9634 18.0875 13.3224 19.4465 14.9996 19.4465C16.6769 19.4465 18.0359 18.0875 18.0359 16.4103C18.0359 14.733 16.6769 13.374 14.9996 13.374ZM21.8804 10.6252C22.5707 10.6252 23.1304 11.1849 23.1304 11.8752C23.1304 12.5163 22.6478 13.0446 22.0262 13.1168L21.8804 13.1252C21.1788 13.1252 20.6191 12.5656 20.6191 11.8752C20.6191 11.2342 21.1017 10.7059 21.7233 10.6337L21.8804 10.6252Z"
            fill="white"
          />
        </svg>
      </button>

      {/* resize button */}
      <button
        onClick={handleOpenResizeMenu}
        className="hover:bg-[#212339] p-2 rounded-[8px] transition-all duration-200 "
      >
        <svg
          width="30"
          height="31"
          viewBox="0 0 30 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.75 28.9375H11.25C4.4625 28.9375 1.5625 26.0375 1.5625 19.25V11.75C1.5625 4.9625 4.4625 2.0625 11.25 2.0625H18.75C25.5375 2.0625 28.4375 4.9625 28.4375 11.75V19.25C28.4375 26.0375 25.5375 28.9375 18.75 28.9375ZM11.25 3.9375C5.4875 3.9375 3.4375 5.9875 3.4375 11.75V19.25C3.4375 25.0125 5.4875 27.0625 11.25 27.0625H18.75C24.5125 27.0625 26.5625 25.0125 26.5625 19.25V11.75C26.5625 5.9875 24.5125 3.9375 18.75 3.9375H11.25Z"
            fill="white"
          />
          <path
            d="M7.4998 23.9375C7.2623 23.9375 7.0248 23.85 6.8373 23.6625C6.4748 23.3001 6.4748 22.7 6.8373 22.3375L21.8373 7.33755C22.1998 6.97505 22.7998 6.97505 23.1623 7.33755C23.5248 7.70005 23.5248 8.30005 23.1623 8.66255L8.16231 23.6625C7.97481 23.85 7.7373 23.9375 7.4998 23.9375Z"
            fill="white"
          />
          <path
            d="M22.5 13.9375C21.9875 13.9375 21.5625 13.5125 21.5625 13V8.9375H17.5C16.9875 8.9375 16.5625 8.5125 16.5625 8C16.5625 7.4875 16.9875 7.0625 17.5 7.0625H22.5C23.0125 7.0625 23.4375 7.4875 23.4375 8V13C23.4375 13.5125 23.0125 13.9375 22.5 13.9375Z"
            fill="white"
          />
          <path
            d="M12.5 23.9375H7.5C6.9875 23.9375 6.5625 23.5125 6.5625 23V18C6.5625 17.4875 6.9875 17.0625 7.5 17.0625C8.0125 17.0625 8.4375 17.4875 8.4375 18V22.0625H12.5C13.0125 22.0625 13.4375 22.4875 13.4375 23C13.4375 23.5125 13.0125 23.9375 12.5 23.9375Z"
            fill="white"
          />
        </svg>
      </button>

      {/* flip camera button */}
      <button
        onClick={handleFlipCamera}
        className="hover:bg-[#212339] p-2 rounded-[8px] transition-all duration-200 "
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
            d="M14.9998 21.8376C13.2498 21.8376 11.4998 21.1751 10.1623 19.8376C9.81231 19.4876 9.4998 19.1001 9.2123 18.6376C8.9373 18.2001 9.07478 17.6251 9.51228 17.3501C9.94978 17.0751 10.5248 17.2126 10.7998 17.6501C11.0123 18.0001 11.2373 18.2751 11.4873 18.5251C13.4248 20.4626 16.5748 20.4626 18.5123 18.5251C19.2623 17.7751 19.7373 16.8001 19.8998 15.7126C19.9748 15.2001 20.4498 14.8251 20.9623 14.9126C21.4748 14.9876 21.8248 15.4627 21.7623 15.9752C21.5498 17.4627 20.8873 18.8001 19.8498 19.8501C18.4998 21.1751 16.7498 21.8376 14.9998 21.8376Z"
            fill="white"
          />
          <path
            d="M9.17487 15.1001C9.12487 15.1001 9.08739 15.1001 9.03739 15.0876C8.52489 15.0126 8.16237 14.5375 8.23737 14.025C8.44987 12.5375 9.11237 11.2001 10.1499 10.1501C12.8124 7.48757 17.1499 7.48757 19.8249 10.1501C20.1749 10.5001 20.4874 10.8876 20.7749 11.3626C21.0499 11.8001 20.9124 12.3751 20.4749 12.6501C20.0374 12.9251 19.4624 12.7876 19.1874 12.3501C18.9749 12.0126 18.7499 11.7251 18.4999 11.4751C16.5624 9.53757 13.4124 9.53757 11.4749 11.4751C10.7249 12.2251 10.2499 13.2001 10.0874 14.2876C10.0374 14.7626 9.63737 15.1001 9.17487 15.1001Z"
            fill="white"
          />
          <path
            d="M9.77539 22.4122C9.26289 22.4122 8.83789 21.9872 8.83789 21.4747V18.1372C8.83789 17.6247 9.26289 17.1997 9.77539 17.1997H13.1129C13.6254 17.1997 14.0504 17.6247 14.0504 18.1372C14.0504 18.6497 13.6254 19.0747 13.1129 19.0747H10.7129V21.4747C10.7129 21.9872 10.3004 22.4122 9.77539 22.4122Z"
            fill="white"
          />
          <path
            d="M20.2247 12.8004H16.8872C16.3747 12.8004 15.9497 12.3754 15.9497 11.8629C15.9497 11.3504 16.3747 10.9254 16.8872 10.9254H19.2872V8.52539C19.2872 8.01289 19.7122 7.58789 20.2247 7.58789C20.7372 7.58789 21.1622 8.01289 21.1622 8.52539V11.8629C21.1622 12.3879 20.7372 12.8004 20.2247 12.8004Z"
            fill="white"
          />
        </svg>
      </button>

      <div className="bg-[#4A5C6C] w-[30px] h-[1.5px]"></div>

      {/* shapes button */}
      <button
        onClick={handleOpenShapeMenu}
        className="hover:bg-[#212339] p-2 rounded-[8px] transition-all duration-200 "
      >
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_53_6585)">
            <path
              d="M17.7066 1.36769L17.7087 1.37125L23.3323 10.744C23.3325 10.7442 23.3327 10.7445 23.3328 10.7448C23.5117 11.0456 23.5159 11.4226 23.3437 11.7302C23.1769 12.028 22.8525 12.2191 22.5 12.2191H11.25C10.9019 12.2191 10.578 12.0314 10.403 11.7242C10.2323 11.4249 10.2352 11.0509 10.4171 10.7449C10.4173 10.7446 10.4175 10.7443 10.4176 10.744L16.0413 1.37125L16.0434 1.36769C16.2128 1.08241 16.5316 0.9 16.875 0.9C17.2184 0.9 17.5372 1.08241 17.7066 1.36769ZM19.2188 28.1625C18.4209 28.1625 17.775 27.5166 17.775 26.7188V18.2812C17.775 17.4834 18.4209 16.8375 19.2188 16.8375H27.6562C28.4541 16.8375 29.1 17.4834 29.1 18.2812V26.7188C29.1 27.5166 28.4541 28.1625 27.6562 28.1625H19.2188ZM12.1669 27.1669C10.9292 28.4046 9.25043 29.1 7.5 29.1C5.74957 29.1 4.07084 28.4046 2.8331 27.1669C1.59536 25.9292 0.9 24.2504 0.9 22.5C0.9 20.7496 1.59536 19.0708 2.8331 17.8331C4.07084 16.5954 5.74957 15.9 7.5 15.9C9.25043 15.9 10.9292 16.5954 12.1669 17.8331C13.4046 19.0708 14.1 20.7496 14.1 22.5C14.1 24.2504 13.4046 25.9292 12.1669 27.1669Z"
              stroke="white"
              stroke-width="1.8"
            />
          </g>
          <defs>
            <clipPath id="clip0_53_6585">
              <rect width="30" height="30" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>

      <div className="bg-[#4A5C6C] w-[30px] h-[1.5px]"></div>

      {/* filter button */}
      <button className="hover:bg-[#212339] p-2 rounded-[8px] transition-all duration-200 ">
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 28.4375C5.35 28.4375 1.5625 24.65 1.5625 20C1.5625 16.2 4.1125 12.85 7.775 11.8625C8.2375 11.7375 8.7125 11.975 8.8875 12.425C9.65 14.3375 11.275 15.8 13.2625 16.3375C14.3625 16.6375 15.6375 16.6375 16.7125 16.3375C17.175 16.2125 17.6625 16.45 17.8375 16.9C18.225 17.8875 18.425 18.9375 18.425 20.0125C18.425 22.4125 17.4 24.7 15.6125 26.2875C14.0875 27.6625 12.0875 28.4375 10 28.4375ZM7.525 13.9125C5.0875 14.9125 3.4375 17.3125 3.4375 20C3.4375 23.6125 6.3875 26.5625 10 26.5625C11.625 26.5625 13.175 25.9625 14.375 24.875C15.775 23.6375 16.5625 21.8625 16.5625 20C16.5625 19.425 16.4875 18.875 16.35 18.3375C15.175 18.525 13.9 18.4625 12.775 18.15C10.5125 17.525 8.6125 15.975 7.525 13.9125Z"
            fill="white"
          />
          <path
            d="M15 18.4375C14.225 18.4375 13.475 18.3375 12.775 18.1375C10.2375 17.4375 8.125 15.5625 7.15 13.1C6.7625 12.125 6.5625 11.075 6.5625 10C6.5625 5.35 10.35 1.5625 15 1.5625C19.65 1.5625 23.4375 5.35 23.4375 10C23.4375 11.075 23.2375 12.125 22.85 13.1125C21.875 15.5625 19.775 17.45 17.225 18.15C16.525 18.3375 15.775 18.4375 15 18.4375ZM15 3.4375C11.3875 3.4375 8.4375 6.3875 8.4375 10C8.4375 10.8375 8.5875 11.65 8.9 12.4125C9.6625 14.325 11.2875 15.7875 13.275 16.325C14.375 16.625 15.65 16.625 16.725 16.325C18.7125 15.7875 20.35 14.3125 21.1 12.4125C21.4 11.65 21.5625 10.8375 21.5625 10C21.5625 6.3875 18.6125 3.4375 15 3.4375Z"
            fill="white"
          />
          <path
            d="M20 28.4375C17.9125 28.4375 15.9125 27.6625 14.375 26.275C14.175 26.1 14.0625 25.8375 14.0625 25.575C14.0625 25.3125 14.175 25.05 14.375 24.875C15.7625 23.65 16.5625 21.875 16.5625 20C16.5625 19.1625 16.4125 18.35 16.1 17.5875C16 17.3375 16.0125 17.0625 16.1375 16.825C16.2625 16.5875 16.475 16.4125 16.725 16.3375C18.7125 15.8 20.3375 14.3375 21.1 12.425C21.275 11.975 21.7625 11.75 22.2125 11.8625C25.875 12.8625 28.425 16.2 28.425 20C28.4375 24.65 24.65 28.4375 20 28.4375ZM16.4 25.4875C17.4625 26.1875 18.7 26.5625 20 26.5625C23.6125 26.5625 26.5625 23.6125 26.5625 20C26.5625 17.3125 24.9125 14.9125 22.475 13.9125C21.55 15.675 20 17.075 18.15 17.825C18.3375 18.525 18.4375 19.2625 18.4375 20C18.4375 22.025 17.7125 23.975 16.4 25.4875Z"
            fill="white"
          />
        </svg>
      </button>

      <div className="bg-[#4A5C6C] w-[30px] h-[1.5px]"></div>

      {/*border button */}
      <button
        onClick={handleOpenBorderMenu}
        className="hover:bg-[#212339] p-2 rounded-[8px] transition-all duration-200 "
      >
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.5 12.1875C1.9875 12.1875 1.5625 11.7625 1.5625 11.25V8.125C1.5625 4.5125 4.5125 1.5625 8.125 1.5625H11.25C11.7625 1.5625 12.1875 1.9875 12.1875 2.5C12.1875 3.0125 11.7625 3.4375 11.25 3.4375H8.125C5.5375 3.4375 3.4375 5.5375 3.4375 8.125V11.25C3.4375 11.7625 3.0125 12.1875 2.5 12.1875Z"
            fill="white"
          />
          <path
            d="M27.5 12.1875C26.9875 12.1875 26.5625 11.7625 26.5625 11.25V8.125C26.5625 5.5375 24.4625 3.4375 21.875 3.4375H18.75C18.2375 3.4375 17.8125 3.0125 17.8125 2.5C17.8125 1.9875 18.2375 1.5625 18.75 1.5625H21.875C25.4875 1.5625 28.4375 4.5125 28.4375 8.125V11.25C28.4375 11.7625 28.0125 12.1875 27.5 12.1875Z"
            fill="white"
          />
          <path
            d="M21.875 28.4375H20C19.4875 28.4375 19.0625 28.0125 19.0625 27.5C19.0625 26.9875 19.4875 26.5625 20 26.5625H21.875C24.4625 26.5625 26.5625 24.4625 26.5625 21.875V20C26.5625 19.4875 26.9875 19.0625 27.5 19.0625C28.0125 19.0625 28.4375 19.4875 28.4375 20V21.875C28.4375 25.4875 25.4875 28.4375 21.875 28.4375Z"
            fill="white"
          />
          <path
            d="M11.25 28.4375H8.125C4.5125 28.4375 1.5625 25.4875 1.5625 21.875V18.75C1.5625 18.2375 1.9875 17.8125 2.5 17.8125C3.0125 17.8125 3.4375 18.2375 3.4375 18.75V21.875C3.4375 24.4625 5.5375 26.5625 8.125 26.5625H11.25C11.7625 26.5625 12.1875 26.9875 12.1875 27.5C12.1875 28.0125 11.7625 28.4375 11.25 28.4375Z"
            fill="white"
          />
        </svg>
      </button>

      <div className="bg-[#4A5C6C] w-[30px] h-[1.5px]"></div>

      {/* reset button */}
      <button
        onClick={handleResetCamera}
        className="hover:bg-[#212339] p-2 rounded-[8px] transition-all duration-200 "
      >
        <svg
          width="30"
          height="31"
          viewBox="0 0 30 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.75 28.9375H11.25C4.4625 28.9375 1.5625 26.0375 1.5625 19.25V11.75C1.5625 4.9625 4.4625 2.0625 11.25 2.0625H18.75C25.5375 2.0625 28.4375 4.9625 28.4375 11.75V19.25C28.4375 26.0375 25.5375 28.9375 18.75 28.9375ZM11.25 3.9375C5.4875 3.9375 3.4375 5.9875 3.4375 11.75V19.25C3.4375 25.0125 5.4875 27.0625 11.25 27.0625H18.75C24.5125 27.0625 26.5625 25.0125 26.5625 19.25V11.75C26.5625 5.9875 24.5125 3.9375 18.75 3.9375H11.25Z"
            fill="white"
          />
          <path
            d="M17.4 20.1622H11.25C11.0136 20.1622 10.8125 19.961 10.8125 19.7247C10.8125 19.4883 11.0136 19.2872 11.25 19.2872H17.4C19.2747 19.2872 20.8125 17.7647 20.8125 15.8747C20.8125 13.986 19.2886 12.4622 17.4 12.4622H8.9375C8.70114 12.4622 8.5 12.261 8.5 12.0247C8.5 11.7883 8.70114 11.5872 8.9375 11.5872H17.4C19.7614 11.5872 21.6875 13.5133 21.6875 15.8747C21.6875 18.236 19.7614 20.1622 17.4 20.1622Z"
            fill="white"
            stroke="white"
          />
          <path
            d="M10.7123 14.8999C10.4748 14.8999 10.2373 14.8124 10.0498 14.6249L8.0873 12.6624C7.7248 12.2999 7.7248 11.6999 8.0873 11.3374L10.0498 9.3749C10.4123 9.0124 11.0123 9.0124 11.3748 9.3749C11.7373 9.7374 11.7373 10.3374 11.3748 10.6999L10.0748 11.9999L11.3748 13.2999C11.7373 13.6624 11.7373 14.2624 11.3748 14.6249C11.1998 14.7999 10.9623 14.8999 10.7123 14.8999Z"
            fill="white"
          />
        </svg>
      </button>

      <div className="bg-[#4A5C6C] w-[30px] h-[1.5px]"></div>

      {/* close button */}
      <button
        onClick={handleClose}
        className="hover:bg-[#212339] p-2 rounded-[8px] transition-all duration-200 "
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
export default Menu
