// import React from 'react';

function Footer() {
  return (
    <footer className="w-full gap-8 px-4 sm:px-6 lg:px-8 text-center text-base p-4">
      <div className="flex items-center">
        <img src="qrcode.png" alt="QR-Code Logo" className="w-10 mr-2.5" />
        <h1 className="text-xl font-semibold">QRcode2025.ru</h1>
        <hr className="flex-grow ml-4 h-0.5 mx-auto my-4 bg-gray-700 border-0 rounded-sm md:my-10 dark:bg-gray-100"></hr>
      </div>
      <p className="font-normal leading-6 text-justify mb-8">
        QR-коды стали привычной частью повседневной жизни — на визитках, сайтах,
        упаковке и рекламе. На нашем сайте вы можете легко и быстро создать
        QR-код бесплатно, указав нужный текст или ссылку. Все, что вам нужно, —
        просто ввести данные и получить готовый код для дальнейшего
        использования.
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center mb-[15px]">
        <a
          href="#"
          className="text-[#728a96] dark:text-[#17adf9] no-underline mx-4 my-[5px]"
        >
          Главная
        </a>
        <a
          href="#"
          className="text-[#728a96] dark:text-[#17adf9] no-underline mx-4 my-[5px]"
        >
          О проекте
        </a>
        <a
          href="#"
          className="text-[#728a96] dark:text-[#17adf9] no-underline mx-4 my-[5px]"
        >
          Вопросы/Ответы
        </a>
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
