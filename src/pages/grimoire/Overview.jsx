import { Link } from 'react-router-dom';

export default function GrimoireOverview() {
    return (
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
                <h1 className="font-display text-4xl md:text-5xl mb-6 text-verdant-900 dark:text-verdant-50">The Grimoire</h1>
                <p className="text-xl text-zinc-600 dark:text-zinc-300 max-w-3xl mx-auto">
                    The compendium of knowledge for Bloomwrought. Here you will find the mechanics of survival, combat, and the definitions of the world.
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                <Link
                    to="/grimoire/combat"
                    className="group p-6 md:p-8 rounded-2xl bg-verdant-50/50 dark:bg-verdant-900/10 border border-verdant-100 dark:border-verdant-800 hover:border-verdant-400 dark:hover:border-verdant-600 hover:shadow-xl hover:shadow-verdant-900/5 transition-all duration-300 flex items-center justify-center"
                >
                    <h3 className="font-display text-2xl md:text-3xl mb-0 text-verdant-800 dark:text-verdant-200 group-hover:text-verdant-600 dark:group-hover:text-verdant-400 transition-colors text-center">Combat</h3>
                </Link>

                <Link
                    to="/grimoire/actions"
                    className="group p-6 md:p-8 rounded-2xl bg-verdant-50/50 dark:bg-verdant-900/10 border border-verdant-100 dark:border-verdant-800 hover:border-verdant-400 dark:hover:border-verdant-600 hover:shadow-xl hover:shadow-verdant-900/5 transition-all duration-300 flex items-center justify-center"
                >
                    <h3 className="font-display text-2xl md:text-3xl mb-0 text-verdant-800 dark:text-verdant-200 group-hover:text-verdant-600 dark:group-hover:text-verdant-400 transition-colors text-center">Actions</h3>
                </Link>

                <Link
                    to="/grimoire/tags"
                    className="group p-6 md:p-8 rounded-2xl bg-verdant-50/50 dark:bg-verdant-900/10 border border-verdant-100 dark:border-verdant-800 hover:border-verdant-400 dark:hover:border-verdant-600 hover:shadow-xl hover:shadow-verdant-900/5 transition-all duration-300 flex items-center justify-center"
                >
                    <h3 className="font-display text-2xl md:text-3xl mb-0 text-verdant-800 dark:text-verdant-200 group-hover:text-verdant-600 dark:group-hover:text-verdant-400 transition-colors text-center">Tags</h3>
                </Link>

                <Link
                    to="/grimoire/equipment"
                    className="group p-6 md:p-8 rounded-2xl bg-verdant-50/50 dark:bg-verdant-900/10 border border-verdant-100 dark:border-verdant-800 hover:border-verdant-400 dark:hover:border-verdant-600 hover:shadow-xl hover:shadow-verdant-900/5 transition-all duration-300 flex items-center justify-center"
                >
                    <h3 className="font-display text-2xl md:text-3xl mb-0 text-verdant-800 dark:text-verdant-200 group-hover:text-verdant-600 dark:group-hover:text-verdant-400 transition-colors text-center">Equipment</h3>
                </Link>

                <Link
                    to="/grimoire/skills"
                    className="group p-6 md:p-8 rounded-2xl bg-verdant-50/50 dark:bg-verdant-900/10 border border-verdant-100 dark:border-verdant-800 hover:border-verdant-400 dark:hover:border-verdant-600 hover:shadow-xl hover:shadow-verdant-900/5 transition-all duration-300 flex items-center justify-center"
                >
                    <h3 className="font-display text-2xl md:text-3xl mb-0 text-verdant-800 dark:text-verdant-200 group-hover:text-verdant-600 dark:group-hover:text-verdant-400 transition-colors text-center">Skills</h3>
                </Link>
            </div>
        </div>
    );
}
