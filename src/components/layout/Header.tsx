import { useState } from "react";

const navLinks = [
  { href: "#hero", label: "Ana Sayfa" },
  { href: "#about", label: "Hakkımda" },
  { href: "#projects", label: "Projeler" },
  { href: "#contact", label: "İletişim" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#hero" className="text-xl font-bold text-blue-600 dark:text-blue-400">
          Ebubekir Akın
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">
                {link.label}
              </a>
            </li>
          ))}
          {/* Dark Mode Butonu */}
          <li>
            <button
              onClick={() => document.documentElement.classList.toggle('dark')}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              title="Temayı Değiştir"
            >
              <span className="dark:hidden">🌙</span>
              <span className="hidden dark:inline">☀️</span>
            </button>
          </li>
        </ul>

        {/* Mobil Menü Butonu */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2"
          aria-label="Menu"
          aria-expanded={menuOpen}
        >
          <span className={`block w-6 h-0.5 bg-gray-600 dark:bg-gray-300 mb-1.5 transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-gray-600 dark:bg-gray-300 mb-1.5 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-gray-600 dark:bg-gray-300 transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobil Menü İçeriği */}
      {menuOpen && (
        <ul className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-4 pb-4 pt-2 shadow-lg">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 font-medium border-b border-gray-100 dark:border-gray-800 last:border-0"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}