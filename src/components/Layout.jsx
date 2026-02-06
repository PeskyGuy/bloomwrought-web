import { Outlet, Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import Logo from './Logo';

export default function Layout() {
    const location = useLocation();
    const isHome = location.pathname === '/';

    return (
        <div className="min-h-screen flex flex-col font-sans text-verdant-950 dark:text-verdant-50 bg-verdant-50 dark:bg-zinc-950 transition-colors duration-300">
            <header className={`sticky top-0 z-50 w-full backdrop-blur-md bg-verdant-50/80 dark:bg-zinc-950/80 border-b border-verdant-200 dark:border-verdant-900 transition-colors`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <Link to="/" className="flex items-center gap-2 group">
                            <Logo className="w-8 h-8 text-verdant-600 dark:text-verdant-400 group-hover:text-verdant-500 transition-colors" />
                            <span className="text-xl tracking-tight text-verdant-700 dark:text-verdant-400 group-hover:text-verdant-500 transition-colors font-display">
                                BLOOMWROUGHT
                            </span>
                        </Link>

                        <nav className="flex items-center gap-6">
                            <Link
                                to="/lore"
                                className={`text-sm font-medium transition-colors border-b-2 ${location.pathname === '/lore' ? 'text-verdant-700 dark:text-verdant-400 border-verdant-600 dark:border-verdant-400' : 'text-zinc-600 dark:text-zinc-400 border-transparent hover:text-verdant-900 dark:hover:text-verdant-200 hover:border-verdant-300'}`}
                            >
                                Lore
                            </Link>
                            <Link
                                to="/ancestries"
                                className={`text-sm font-medium transition-colors border-b-2 ${location.pathname === '/ancestries' ? 'text-verdant-700 dark:text-verdant-400 border-verdant-600 dark:border-verdant-400' : 'text-zinc-600 dark:text-zinc-400 border-transparent hover:text-verdant-900 dark:hover:text-verdant-200 hover:border-verdant-300'}`}
                            >
                                Ancestries
                            </Link>
                            <Link
                                to="/grimoire"
                                className={`text-sm font-medium transition-colors border-b-2 ${location.pathname.startsWith('/grimoire') ? 'text-verdant-700 dark:text-verdant-400 border-verdant-600 dark:border-verdant-400' : 'text-zinc-600 dark:text-zinc-400 border-transparent hover:text-verdant-900 dark:hover:text-verdant-200 hover:border-verdant-300'}`}
                            >
                                Grimoire
                            </Link>
                            <Link
                                to="/character-manager"
                                className={`text-sm font-medium transition-colors border-b-2 ${location.pathname.startsWith('/character') ? 'text-verdant-700 dark:text-verdant-400 border-verdant-600 dark:border-verdant-400' : 'text-zinc-600 dark:text-zinc-400 border-transparent hover:text-verdant-900 dark:hover:text-verdant-200 hover:border-verdant-300'}`}
                            >
                                Character
                            </Link>

                            <div className="w-px h-6 bg-verdant-200 dark:bg-verdant-800 mx-1"></div>
                            <ThemeToggle />
                        </nav>
                    </div>
                </div>
            </header>

            <main className="flex-grow pt-4">
                <Outlet />
            </main>

            <footer className="py-8 border-t border-verdant-200 dark:border-verdant-900 mt-12 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-4 text-center text-sm text-zinc-500 dark:text-zinc-500">
                    <p className="font-mono text-xs opacity-70">Version 0.3.1a</p>
                </div>
            </footer>
        </div>
    );
}
