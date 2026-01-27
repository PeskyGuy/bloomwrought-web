import { weapons, armors, consumables, tools } from '../../data/equipment';

export default function Equipment() {
    return (
        <div>
            <h1 className="font-display text-4xl md:text-5xl mb-8 text-verdant-900 dark:text-verdant-50">Equipment</h1>

            <section className="mb-16">
                <h2 className="text-3xl font-display font-bold mb-6 text-verdant-800 dark:text-verdant-300 border-b border-verdant-100 dark:border-verdant-800 pb-2">Weapons</h2>
                <div className="overflow-x-auto rounded-xl border border-verdant-200 dark:border-verdant-800 shadow-sm">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-verdant-50/80 dark:bg-verdant-900/50 text-verdant-900 dark:text-verdant-100 font-display text-base">
                            <tr>
                                <th className="p-4 border-b border-verdant-100 dark:border-verdant-800">Name</th>
                                <th className="p-4 border-b border-verdant-100 dark:border-verdant-800 text-center">Cost</th>
                                <th className="p-4 border-b border-verdant-100 dark:border-verdant-800 text-center">Damage</th>
                                <th className="p-4 border-b border-verdant-100 dark:border-verdant-800 text-center">Range</th>
                                <th className="p-4 border-b border-verdant-100 dark:border-verdant-800">Tags</th>
                                <th className="p-4 border-b border-verdant-100 dark:border-verdant-800">Properties</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-verdant-100 dark:divide-verdant-800 bg-white dark:bg-zinc-900/40">
                            {weapons.map((w) => (
                                <tr key={w.name} className="hover:bg-verdant-50/50 dark:hover:bg-verdant-900/20 transition-colors">
                                    <td className="p-4 font-bold text-verdant-800 dark:text-verdant-200">{w.name}</td>
                                    <td className="p-4 text-center font-mono text-zinc-500 whitespace-nowrap">{w.cost}</td>
                                    <td className="p-4 text-center font-mono text-zinc-600 dark:text-zinc-400 text-sm">{w.damage}</td>
                                    <td className="p-4 text-center font-mono text-zinc-500 whitespace-nowrap text-sm">{w.range}</td>
                                    <td className="p-4 text-xs font-mono text-verdant-700 dark:text-verdant-400 uppercase tracking-tight">{w.tags}</td>
                                    <td className="p-4 text-zinc-600 dark:text-zinc-300 leading-relaxed text-xs md:text-sm">{w.properties}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="mb-16">
                <h2 className="text-3xl font-display font-bold mb-6 text-verdant-800 dark:text-verdant-300 border-b border-verdant-100 dark:border-verdant-800 pb-2">Armor</h2>
                <div className="overflow-x-auto rounded-xl border border-verdant-200 dark:border-verdant-800 shadow-sm">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-verdant-50/80 dark:bg-verdant-900/50 text-verdant-900 dark:text-verdant-100 font-display text-base">
                            <tr>
                                <th className="p-4 border-b border-verdant-100 dark:border-verdant-800">Name</th>
                                <th className="p-4 border-b border-verdant-100 dark:border-verdant-800 text-center">Cost</th>
                                <th className="p-4 border-b border-verdant-100 dark:border-verdant-800 text-center">Armor</th>
                                <th className="p-4 border-b border-verdant-100 dark:border-verdant-800">Tags</th>
                                <th className="p-4 border-b border-verdant-100 dark:border-verdant-800">Properties</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-verdant-100 dark:divide-verdant-800 bg-white dark:bg-zinc-900/40">
                            {armors.map((a) => (
                                <tr key={a.name} className="hover:bg-verdant-50/50 dark:hover:bg-verdant-900/20 transition-colors">
                                    <td className="p-4 font-bold text-verdant-800 dark:text-verdant-200">{a.name}</td>
                                    <td className="p-4 text-center font-mono text-zinc-500 whitespace-nowrap">{a.cost}</td>
                                    <td className="p-4 text-center font-mono text-verdant-600 dark:text-verdant-400 font-bold">{a.armor}</td>
                                    <td className="p-4 text-xs font-mono text-verdant-700 dark:text-verdant-400 uppercase tracking-tight">{a.tags}</td>
                                    <td className="p-4 text-zinc-600 dark:text-zinc-300 leading-relaxed text-xs md:text-sm">{a.properties}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="mb-16">
                <h2 className="text-3xl font-display font-bold mb-6 text-verdant-800 dark:text-verdant-300 border-b border-verdant-100 dark:border-verdant-800 pb-2">Consumables</h2>
                <div className="overflow-x-auto rounded-xl border border-verdant-200 dark:border-verdant-800 shadow-sm">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-verdant-50/80 dark:bg-verdant-900/50 text-verdant-900 dark:text-verdant-100 font-display text-base">
                            <tr>
                                <th className="p-4 border-b border-verdant-100 dark:border-verdant-800">Name</th>
                                <th className="p-4 border-b border-verdant-100 dark:border-verdant-800 text-center">Cost</th>
                                <th className="p-4 border-b border-verdant-100 dark:border-verdant-800 text-center">Uses</th>
                                <th className="p-4 border-b border-verdant-100 dark:border-verdant-800">Tags</th>
                                <th className="p-4 border-b border-verdant-100 dark:border-verdant-800">Effect</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-verdant-100 dark:divide-verdant-800 bg-white dark:bg-zinc-900/40">
                            {consumables.map((c) => (
                                <tr key={c.name} className="hover:bg-verdant-50/50 dark:hover:bg-verdant-900/20 transition-colors">
                                    <td className="p-4 font-bold text-verdant-800 dark:text-verdant-200">{c.name}</td>
                                    <td className="p-4 text-center font-mono text-zinc-500 whitespace-nowrap">{c.cost}</td>
                                    <td className="p-4 text-center font-mono text-zinc-600 dark:text-zinc-400">{c.uses}</td>
                                    <td className="p-4 text-xs font-mono text-verdant-700 dark:text-verdant-400 uppercase tracking-tight">{c.tags}</td>
                                    <td className="p-4 text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed">{c.effect}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="mb-16">
                <h2 className="text-3xl font-display font-bold mb-6 text-verdant-800 dark:text-verdant-300 border-b border-verdant-100 dark:border-verdant-800 pb-2">Tools</h2>
                <div className="overflow-x-auto rounded-xl border border-verdant-200 dark:border-verdant-800 shadow-sm">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-verdant-50/80 dark:bg-verdant-900/50 text-verdant-900 dark:text-verdant-100 font-display text-base">
                            <tr>
                                <th className="p-4 border-b border-verdant-100 dark:border-verdant-800">Name</th>
                                <th className="p-4 border-b border-verdant-100 dark:border-verdant-800 text-center">Cost</th>
                                <th className="p-4 border-b border-verdant-100 dark:border-verdant-800 text-center">Uses</th>
                                <th className="p-4 border-b border-verdant-100 dark:border-verdant-800">Tags</th>
                                <th className="p-4 border-b border-verdant-100 dark:border-verdant-800">Effect</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-verdant-100 dark:divide-verdant-800 bg-white dark:bg-zinc-900/40">
                            {tools.map((t) => (
                                <tr key={t.name} className="hover:bg-verdant-50/50 dark:hover:bg-verdant-900/20 transition-colors">
                                    <td className="p-4 font-bold text-verdant-800 dark:text-verdant-200">{t.name}</td>
                                    <td className="p-4 text-center font-mono text-zinc-500 whitespace-nowrap">{t.cost}</td>
                                    <td className="p-4 text-center font-mono text-zinc-600 dark:text-zinc-400">{t.uses}</td>
                                    <td className="p-4 text-xs font-mono text-verdant-700 dark:text-verdant-400 uppercase tracking-tight">{t.tags}</td>
                                    <td className="p-4 text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed">{t.effect}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
}
