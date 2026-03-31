export default function Hero() {
  return (
    <section id="hero" className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 px-4 transition-colors duration-300">
      <div className="text-center max-w-3xl">
        <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3 tracking-wide uppercase">
          Merhaba, ben
        </p>
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
          Ebubekir Akın
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
          Yazılım Mühendisliği Öğrencisi | <span className="font-semibold text-blue-600 dark:text-blue-400">AI, Siber Güvenlik & Modern Web</span>
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="#projects" className="bg-blue-600 text-white px-8 py-3.5 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30">
            Projelerimi Gör
          </a>
          <a href="#contact" className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 px-8 py-3.5 rounded-lg font-medium hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors">
            İletişime Geç
          </a>
        </div>
      </div>
    </section>
  );
}