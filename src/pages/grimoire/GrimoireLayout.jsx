import { NavLink, Outlet } from 'react-router-dom';

export default function GrimoireLayout() {
    const links = [
        { to: ".", label: "Overview", end: true },
        { to: "combat", label: "Combat Rules" },
        { to: "actions", label: "Tags & Actions" },
        { to: "equipment", label: "Equipment" },
        { to: "skills", label: "Skills" },
        { to: "glossary", label: "Glossary" },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row gap-8">
            {/* Work in Progress Banner */}
            <div className="w-full mb-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-3 shadow-sm">
                <div className="flex items-center justify-center gap-2 text-sm text-amber-800 dark:text-amber-200">
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span className="font-medium">Work in Progress - Rules are subject to change</span>
                </div>
            </div>

            {/* Sidebar */}
            <aside className="w-full md:w-64 flex-shrink-0">
                <div className="sticky top-24">
                    <h2 className="text-2xl font-display font-bold text-verdant-800 dark:text-verdant-200 mb-4 px-4 border-b border-verdant-200 dark:border-verdant-800 pb-2">
                        Grimoire
                    </h2>
                    <nav className="flex flex-col space-y-1">
                        {links.map((link) => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                end={link.end}
                                className={({ isActive }) =>
                                    `px-4 py-2 rounded-lg transition-all duration-200 font-medium ${isActive
                                        ? 'bg-verdant-200 dark:bg-verdant-900 text-verdant-950 dark:text-verdant-100 shadow-sm translate-x-1 font-bold'
                                        : 'text-zinc-600 dark:text-zinc-400 hover:bg-verdant-100 dark:hover:bg-verdant-900/50 hover:text-verdant-900 dark:hover:text-verdant-200'
                                    }`
                                }
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </nav>
                </div>
            </aside >

            {/* Content Area */}
            < main className="flex-grow min-w-0" >
                <div className="bg-white dark:bg-zinc-900/50 rounded-2xl p-6 md:p-10 shadow-sm border border-verdant-100 dark:border-verdant-800/50 animate-fade-in">
                    <Outlet />
                </div>
            </main >
        </div >
    );
}
