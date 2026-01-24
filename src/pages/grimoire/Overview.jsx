export default function GrimoireOverview() {
    return (
        <div className="prose prose-lg dark:prose-invert prose-verdant max-w-none">
            <h1 className="font-display text-4xl md:text-5xl mb-6 text-verdant-900 dark:text-verdant-50">The Grimoire</h1>
            <p className="lead text-xl text-zinc-600 dark:text-zinc-300">
                The definitive compendium of knowledge for Bloomwrought. Here you will find the mechanics of survival, the art of combat, and the definitions of the world.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12 not-prose">
                <div className="p-6 rounded-xl bg-verdant-50 dark:bg-verdant-900/20 border border-verdant-100 dark:border-verdant-800">
                    <h3 className="font-display text-2xl mb-3 text-verdant-800 dark:text-verdant-200">Combat Rules</h3>
                    <p className="text-zinc-600 dark:text-zinc-400 mb-4">Master the flow of battle, initative, and the use of Effort.</p>
                </div>

                <div className="p-6 rounded-xl bg-verdant-50 dark:bg-verdant-900/20 border border-verdant-100 dark:border-verdant-800">
                    <h3 className="font-display text-2xl mb-3 text-verdant-800 dark:text-verdant-200">Tags & Actions</h3>
                    <p className="text-zinc-600 dark:text-zinc-400 mb-4">Review the library of standard actions and modifier tags.</p>
                </div>
            </div>
        </div>
    );
}
