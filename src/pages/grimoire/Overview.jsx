import { Link } from 'react-router-dom';

export default function GrimoireOverview() {
    return (
        <div className="prose prose-lg dark:prose-invert prose-verdant max-w-none">
            <h1 className="font-display text-4xl md:text-5xl mb-6 text-verdant-900 dark:text-verdant-50">The Grimoire</h1>
            <p className="lead text-xl text-zinc-600 dark:text-zinc-300">
                The compendium of knowledge for Bloomwrought. Here you will find the mechanics of survival, combat, and the definitions of the world.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-12 not-prose">
                <Link
                    to="/grimoire/combat"
                    className="group p-8 rounded-2xl bg-verdant-50/50 dark:bg-verdant-900/10 border border-verdant-100 dark:border-verdant-800 hover:border-verdant-400 dark:hover:border-verdant-600 hover:shadow-xl hover:shadow-verdant-900/5 transition-all duration-300 flex flex-col justify-between"
                >
                    <h3 className="font-display text-3xl mb-0 text-verdant-800 dark:text-verdant-200 group-hover:text-verdant-600 dark:group-hover:text-verdant-400 transition-colors">Combat Rules</h3>
                </Link>

                <Link
                    to="/grimoire/actions"
                    className="group p-8 rounded-2xl bg-verdant-50/50 dark:bg-verdant-900/10 border border-verdant-100 dark:border-verdant-800 hover:border-verdant-400 dark:hover:border-verdant-600 hover:shadow-xl hover:shadow-verdant-900/5 transition-all duration-300 flex flex-col justify-between"
                >
                    <h3 className="font-display text-3xl mb-0 text-verdant-800 dark:text-verdant-200 group-hover:text-verdant-600 dark:group-hover:text-verdant-400 transition-colors">Tags & Actions</h3>
                </Link>

                <Link
                    to="/grimoire/equipment"
                    className="group p-8 rounded-2xl bg-verdant-50/50 dark:bg-verdant-900/10 border border-verdant-100 dark:border-verdant-800 hover:border-verdant-400 dark:hover:border-verdant-600 hover:shadow-xl hover:shadow-verdant-900/5 transition-all duration-300 flex flex-col justify-between"
                >
                    <h3 className="font-display text-3xl mb-0 text-verdant-800 dark:text-verdant-200 group-hover:text-verdant-600 dark:group-hover:text-verdant-400 transition-colors">Equipment</h3>
                </Link>

                <Link
                    to="/grimoire/glossary"
                    className="group p-8 rounded-2xl bg-verdant-50/50 dark:bg-verdant-900/10 border border-verdant-100 dark:border-verdant-800 hover:border-verdant-400 dark:hover:border-verdant-600 hover:shadow-xl hover:shadow-verdant-900/5 transition-all duration-300 flex flex-col justify-between"
                >
                    <h3 className="font-display text-3xl mb-0 text-verdant-800 dark:text-verdant-200 group-hover:text-verdant-600 dark:group-hover:text-verdant-400 transition-colors">Glossary</h3>
                </Link>
            </div>
        </div>
    );
}
