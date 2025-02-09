import { observer } from "mobx-react-lite";
import { QRCodeCanvas, QRCodeSVG } from "qrcode.react";
import { qrCodeStore } from "../store/QRCodeStore";

const QRCodeGen = observer(() => {
  const fixedSize = 256; // Фиксированный размер отображения
  const hasText = Boolean(qrCodeStore.text); // Проверяем, есть ли введенный текст

  return (
    <div className="p-4 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Генератор QR-кодов</h1>
      <input
        type="text"
        placeholder="Введите текст или ссылку"
        className="border p-2 mb-4 w-80 rounded-lg focus:outline-0"
        value={qrCodeStore.text}
        onChange={(e) => qrCodeStore.setText(e.target.value)}
      />

      {/* Кнопка "Настройки" */}
      <details className="mb-4 w-full max-w-xs">
        <summary className="cursor-pointer border p-2 text-center bg-gray-200 rounded-lg dark:bg-[#2f2f2f]">
          ⚙️ Настройки
        </summary>
        <div className="mt-2 p-2 border rounded-lg">
          <label className="block mb-2">
            Размер (px):
            <input
              type="number"
              value={qrCodeStore.size}
              min={100}
              max={1024}
              className="border p-1 ml-2 w-20 focus:outline-0"
              onChange={(e) => qrCodeStore.setSize(Number(e.target.value))}
            />
          </label>
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
      </details>

      {/* Показываем заглушку или QR-код */}
      <div className="mb-4 flex justify-center items-center w-[256px] h-[256px] border">
        {hasText ? (
          <QRCodeCanvas
            value={qrCodeStore.text}
            size={fixedSize}
            fgColor={qrCodeStore.fgColor}
            bgColor={qrCodeStore.bgColor}
            level="H"
            ref={qrCodeStore.canvasRef}
          />
        ) : (
          <img
            src="qrcode.JPG" // Укажи путь к картинке-заглушке
            alt="QR-код будет здесь"
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Скрытый QR-код для скачивания */}
      <div style={{ display: "none" }}>
        <QRCodeCanvas
          value={qrCodeStore.text}
          size={qrCodeStore.size}
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

      <div className="flex">
        <button
          className="border p-2 mx-2 rounded-lg"
          onClick={() => qrCodeStore.downloadQRCode("png")}
          disabled={!hasText}
        >
          Скачать PNG
        </button>
        <button
          className="border p-2 mx-2 rounded-lg"
          onClick={() => qrCodeStore.downloadQRCode("svg")}
          disabled={!hasText}
        >
          Скачать SVG
        </button>
      </div>
    </div>
  );
});

export default QRCodeGen;
