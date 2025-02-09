// import React from 'react';

function Footer() {
    return (
      <footer className="w-full text-center text-base p-4">
          <div className="header__logo">
            <img src="qrcode.png" alt="QR-Code Logo" className="w-10 mr-2.5" />
            <h1>QR-Code</h1>
          </div>
          <p className="font-normal leading-6 text-justify m-0 p-4">
            loremLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit
            amet dui iaculis ex efficitur ultricies ac nec neque. Sed elementum
            lectus vel.
          </p>
          <div className="flex flex-col items-center mb-[15px]">
            <a href="#" className="text-[#728a96] dark:text-[#17adf9] no-underline mx-4 my-[5px]">Главная</a>
            <a href="#" className="text-[#728a96] dark:text-[#17adf9] no-underline mx-4 my-[5px]">О нас</a>
            <a href="#" className="text-[#728a96] dark:text-[#17adf9] no-underline mx-4 my-[5px]">Вопросы/Ответы</a>
            <a href="#" className="text-[#728a96] dark:text-[#17adf9] no-underline mx-4 my-[5px]">Условия использования</a>
            <a href="#" className="text-[#728a96] dark:text-[#17adf9] no-underline mx-4 my-[5px]">Политика конфиденциальности</a>
          </div>
          <div className="social__media">
            <a href="#" className="text-3xl no-underline mx-2.5 my-0">
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a href="#" className="text-3xl no-underline mx-2.5 my-0">
              <i className="fa-brands fa-telegram"></i>
            </a>
          </div>
          <p>© QRcode2025.ru</p>
        </footer>
    );
  }
  
  export default Footer;
  