import { useThemeStore } from "../hooks/useThemeStore";

function Header() {
  const { isDark, toggleTheme } = useThemeStore(); // Используем кастомный хук

  return (
    <header className="w-full flex justify-between items-center mt-4 mb-8">
      <a href="/index.html" className="flex items-center no-underline ml-4">
        <img src="qrcode.png" alt="QR-Code Logo" className="w-10 mr-2.5" />
        <h1 className="text-xl font-semibold m-0">QRcode2025.ru</h1>
      </a>
      <div className="flex items-center mr-4">
        <img
          src={isDark ? "sun.svg" : "moon.svg"}
          alt="Toggle Theme"
          className="w-6 cursor-pointer"
          onClick={toggleTheme}
        />
      </div>
    </header>
  );
}

export default Header;
