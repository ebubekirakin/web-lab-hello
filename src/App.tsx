import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import ProjectList from "./components/sections/ProjectList";

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white font-sans transition-colors duration-300 scroll-smooth">
      <Header />
      
      <main>
        <Hero />
        <ProjectList />
      </main>

      <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8 text-center text-gray-500 dark:text-gray-400">
        <p className="font-medium">© 2026 Ebubekir Akın. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
}