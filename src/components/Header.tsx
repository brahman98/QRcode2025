import { useThemeStore } from "../hooks/useThemeStore";

function Header() {
  const { isDark, toggleTheme } = useThemeStore(); // Используем кастомный хук

  return (
    <header id="home" className="w-full mx-auto flex justify-between h-16 items-center gap-8 px-4 sm:px-6 lg:px-8 mb-[5vh]">
      <a href="#home" className="flex items-center no-underline">
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
