import { observer } from "mobx-react-lite";
import { QRCodeCanvas, QRCodeSVG } from "qrcode.react";
import { qrCodeStore } from "../store/QRCodeStore";
import { useEffect, useState } from "react";

const QRCodeGen = observer(() => {
  const fixedSize = 256; // Фиксированный размер отображения
  const hasText = Boolean(qrCodeStore.text); // Проверяем, есть ли введенный текст

  const [currentText, setCurrentText] = useState("сайта");

  // Список текстов, которые будут чередоваться
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const texts = ["сайта", "текста", "email"];

  useEffect(() => {
    // Смену текста будем делать каждые 3 секунды
    const textInterval = setInterval(() => {
      const currentIndex = texts.indexOf(currentText);
      const nextIndex = (currentIndex + 1) % texts.length;
      setCurrentText(texts[nextIndex]);
    }, 6000); // 3 секунды

    // Очистка интервала при размонтировании компонента
    return () => {
      clearInterval(textInterval);
    };
  }, [currentText, texts]);

  return (
    <div className="w-full flex flex-col items-center mb-12">
      <h2 className="text-[56px] text-center font-bold -tracking-wider leading-[58px] mb-5">
        Твой QR&#8209;код
        <br />
        <div className="flex justify-center w-full pl-3 pt-2">
          <p className="text-[76px] leading-[78px] whitespace-nowrap  text-transparent bg-clip-text bg-[#14acf8]">
            для&nbsp;
          </p>
          <p className="text-[76px] leading-[78px] pr-3 animate-typing whitespace-nowrap border-r-4 border-r-black dark:border-r-4 dark:border-r-white text-transparent bg-clip-text bg-gradient-to-r to-indigo-600 from-[#14acf8]">
          {currentText}
          </p>
        </div>
      </h2>

      <div className="flex flex-col items-center md:flex-row md:justify-center md:gap-12 bg-white dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-600 p-6 mt-8 shadow-xl ring-1 ring-gray-900/5 rounded-lg">
        <div>
          <p className="font-normal leading-6 text-justify mb-4 w-80">
            Создай уникальный QR-код за секунду. Вставь текст или ссылку,
            настрой параметры и получи готовый QR-код для использования. Удобно,
            быстро и бесплатно!
          </p>

          <input
            type="text"
            placeholder="Вставьте текст или ссылку"
            className="border p-2 mb-4 w-80 rounded-lg focus:outline-0"
            value={qrCodeStore.text}
            onChange={(e) => qrCodeStore.setText(e.target.value)}
          />

          {/* Кнопка "Настройки" */}
          <details className="mb-4 w-full max-w-xs">
            <summary className="cursor-pointer border p-2 text-center rounded-lg list-none">
              Настройки
            </summary>
            <div className="mt-2 p-2 border rounded-lg">
              <label className="block mb-2">
                Размер (px):
                <div className="flex gap-2 mt-1">
                  {qrCodeStore.sizes.map((size) => (
                    <label
                      key={size}
                      className="flex items-center cursor-pointer text-xs"
                    >
                      <input
                        type="radio"
                        name="size"
                        value={size}
                        checked={qrCodeStore.size === size}
                        onChange={() => qrCodeStore.setSize(size)}
                        className="mr-2"
                      />
                      {size}x{size}
                    </label>
                  ))}
                </div>
              </label>
              <div className="flex justify-around">
                <label className="block mb-2">
                  Цвет:
                  <input
                    type="color"
                    value={qrCodeStore.fgColor}
                    className="ml-2"
                    onChange={(e) => qrCodeStore.setFgColor(e.target.value)}
                  />
                </label>
                <label className="block">
                  Фон:
                  <input
                    type="color"
                    value={qrCodeStore.bgColor}
                    className="ml-2"
                    onChange={(e) => qrCodeStore.setBgColor(e.target.value)}
                  />
                </label>
              </div>
            </div>
          </details>
        </div>

        <div className="flex flex-col items-center">
          {/* Показываем заглушку или QR-код */}
          <div className="mb-4 flex justify-center items-center w-[256px] h-[256px] border">
            {hasText ? (
              <QRCodeCanvas
                value={qrCodeStore.text}
                size={fixedSize}
                fgColor={qrCodeStore.fgColor}
                bgColor={qrCodeStore.bgColor}
                level="H"
              />
            ) : (
              <img
                src="qrcode.png"
                alt="QR-код будет здесь"
                className="w-full h-full object-cover"
              />
            )}
          </div>
          <div className="flex">
            <button
              className="border p-2 mx-2 rounded-lg cursor-pointer"
              onClick={() => qrCodeStore.downloadQRCode("png")}
              disabled={!hasText}
            >
              Скачать PNG
            </button>
            <button
              className="border p-2 mx-2 rounded-lg cursor-pointer"
              onClick={() => qrCodeStore.downloadQRCode("svg")}
              disabled={!hasText}
            >
              Скачать SVG
            </button>
          </div>
        </div>
      </div>

      {/* Скрытый QR-код для скачивания */}
      <div style={{ display: "none" }}>
        <QRCodeCanvas
          value={qrCodeStore.text}
          size={qrCodeStore.size / 2} // деление на 3 для ровных значений, иначе умножит на 3 :/
          fgColor={qrCodeStore.fgColor}
          bgColor={qrCodeStore.bgColor}
          level="H"
          ref={qrCodeStore.canvasRef}
        />
        <QRCodeSVG
          value={qrCodeStore.text}
          size={qrCodeStore.size}
          fgColor={qrCodeStore.fgColor}
          bgColor={qrCodeStore.bgColor}
          level="H"
          ref={qrCodeStore.svgRef}
        />
      </div>
    </div>
  );
});

export default QRCodeGen;
