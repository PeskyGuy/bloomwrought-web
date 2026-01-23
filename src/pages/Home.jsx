import { Link } from 'react-router-dom';
import Logo from '../components/Logo';

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
            <div className="max-w-4xl space-y-8 animate-fade-in flex flex-col items-center">
                <Logo className="w-24 h-24 md:w-32 md:h-32 text-verdant-600 dark:text-verdant-400 drop-shadow-lg animate-fade-in-up" />
                <h1 className="text-6xl md:text-8xl font-display text-transparent bg-clip-text bg-gradient-to-r from-verdant-600 to-verdant-400 dark:from-verdant-400 dark:to-verdant-200 tracking-tighter drop-shadow-sm">
                    BLOOMWROUGHT
                </h1>
                <p className="text-xl md:text-2xl text-verdant-800/80 dark:text-verdant-100/80 max-w-2xl mx-auto font-light leading-relaxed">
                    Survive the Verdant. Reclaim what was lost.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                    <Link
                        to="/lore"
                        className="group relative px-8 py-4 bg-verdant-600 text-white font-bold rounded-lg overflow-hidden shadow-lg hover:shadow-verdant-500/30 transition-all hover:-translate-y-1"
                    >
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
                        <span className="relative z-10 flex items-center gap-2 font-display">
                            Explore the Lore
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                        </span>
                    </Link>
                    {/* Placeholder for future links */}
                    <button className="px-8 py-4 border-2 border-verdant-600 dark:border-verdant-400 text-verdant-700 dark:text-verdant-300 font-bold rounded-lg hover:bg-verdant-50 dark:hover:bg-verdant-900/30 transition-all font-display">
                        Character Sheets
                    </button>
                </div>
            </div>

            {/* Decorative background elements */}
            <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-verdant-300/20 dark:bg-verdant-900/20 rounded-full blur-3xl mx-auto"></div>
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-verdant-500/10 dark:bg-verdant-600/10 rounded-full blur-3xl mx-auto"></div>
            </div>
        </div>
    );
}
