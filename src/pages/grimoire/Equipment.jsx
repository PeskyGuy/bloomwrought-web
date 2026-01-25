export default function Equipment() {
    const weapons = [
        { name: "Longsword", cost: "5-b", range: "1-hx", tags: "Versatile", desc: <span><strong>Versatile.</strong> Use any physical damage tag (Slash/Bludgeon/Pierce). 1d8.</span> },
        { name: "Crossbow", cost: "5-b", range: "6-20 hx", tags: "Pierce/Bludgeon", desc: <span><strong>Pierce.</strong> 1d8 ranged damage.<br /><strong>Bludgeon.</strong> 1d6 + MIGHT melee damage.</span> },
        { name: "Mace", cost: "5-b", range: "1-hx", tags: "Bludgeon/Break", desc: <span><strong>Bludgeon.</strong> 1d6 + MIGHT damage.<br /><strong>Break.</strong> Permanently reduce Armor by 1.</span> },
        { name: "Shortsword", cost: "3-b", range: "1-hx", tags: "Versatile/Light", desc: <span><strong>Versatile.</strong> Use any physical damage tag. 1d6.<br /><strong>Light.</strong> Wield in off hand.</span> },
        { name: "Greatsword", cost: "4.5-b", range: "2-hx", tags: "Versatile/Cleave", desc: <span><strong>Versatile.</strong> Use any physical damage tag. 1d12.<br /><strong>Cleave.</strong> Half damage carries to adjacent creature.</span> },
        { name: "Battleaxe", cost: "4-b", range: "2-hx", tags: "Slash/Break/Bludgeon", desc: <span><strong>Slash.</strong> 2d6 + MIGHT damage.<br /><strong>Break.</strong> Permanently reduce Armor by 1.<br /><strong>Bludgeon.</strong> 2d6 + MIGHT melee damage.</span> },
        { name: "Rapier", cost: "3-b", range: "1-hx", tags: "Pierce/Accurate/Light", desc: <span><strong>Pierce.</strong> 1d6 + AGILITY damage.<br /><strong>Accurate.</strong> Spend 1 EFFORT for +1 to hit.<br /><strong>Light.</strong> Wield in off hand.</span> },
        { name: "Pistol", cost: "20-b", range: "6-30 hx", tags: "Pierce/Precise", desc: <span><strong>Pierce.</strong> 2d10 damage.<br /><strong>Precise.</strong> +2 to hit against MARKED targets.</span> },
        { name: "Long Rifle", cost: "40-b", range: "8-40 hx", tags: "Pierce/Bludgeon/Precise", desc: <span><strong>Pierce.</strong> 2d12 damage.<br /><strong>Bludgeon.</strong> 1d6 damage.<br /><strong>Precise.</strong> +2 to hit against MARKED targets.</span> },
        { name: "Automatic Rifle", cost: "60-b", range: "6-30 hx", tags: "Pierce/Bludgeon/Rapid", desc: <span><strong>Pierce.</strong> 2d8 damage.<br /><strong>Bludgeon.</strong> 1d6 damage.<br /><strong>Rapid.</strong> Target another enemy for 1 EFFORT. You only roll to hit once and damage has a -1 penalty per extra target.</span> },
    ];

    const armors = [
        { name: "Scavenger Leathers", cost: "4-b", armor: "1", tags: "Light", desc: "Light. Additional armor based on AGILITY (max 2)." },
        { name: "Chitinous Armor", cost: "4-b", armor: "1", tags: "Light/Weathered", desc: "Light. Plus max 2 from AGILITY. Weathered: +1 Armor against ACID." },
        { name: "Reinforced Jacket", cost: "6-b", armor: "2", tags: "Medium/Practical", desc: "Medium. Practical: Free 'use' action once per round." },
        { name: "Scrap Mail", cost: "5-b", armor: "3", tags: "Medium/Makeshift", desc: "Medium. Makeshift: Mended without tools." },
        { name: "Alloyed Plate", cost: "14-b", armor: "4", tags: "Heavy/Reflective", desc: "Heavy. -2 SPEED. Reflective: Ranged attacks -1 to hit you." },
        { name: "War-Shell", cost: "14-b", armor: "5", tags: "Heavy/Spiked", desc: "Heavy. -2 SPEED. Spiked: +2 DAMAGE while grappling." },
    ];

    const consumables = [
        { name: "Herbal Bandage", cost: "3-b", tags: "Heal", desc: <span><strong>Heal.</strong> Restore 1d4 HEALTH.</span> },
        { name: "Vitastatic", cost: "15-b", tags: "Heal/Cure", desc: <span><strong>Heal.</strong> Restore 2d6 HEALTH.<br /><strong>Cure.</strong> Remove one status effect.</span> },
        { name: "Adrenalin Shot", cost: "15-b", tags: "Surge", desc: <span><strong>Surge.</strong> For 2 rounds gain +2 SPEED and +2 DAMAGE afterwards gain FATIGUE.</span> },
    ];

    const tools = [
        { name: "Hacker's Kit", cost: "12-b", tags: "Hack", desc: <span><strong>Hack.</strong> Infiltrate old world security systems.</span> },
        { name: "Medical Supplies", cost: "8-b", tags: "Mend/Limited", desc: <span><strong>Mend.</strong> Roll WITS against the missing HP of a target, a success heals them for 1d6.<br /><strong>Limited.</strong> This item can only be used 6 times.</span> },
    ];

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
                                <th className="p-4 border-b border-verdant-100 dark:border-verdant-800 text-center">Range</th>
                                <th className="p-4 border-b border-verdant-100 dark:border-verdant-800">Description</th>
                                <th className="p-4 border-b border-verdant-100 dark:border-verdant-800 w-32">Tags</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-verdant-100 dark:divide-verdant-800 bg-white dark:bg-zinc-900/40">
                            {weapons.map((w) => (
                                <tr key={w.name} className="hover:bg-verdant-50/50 dark:hover:bg-verdant-900/20 transition-colors">
                                    <td className="p-4 font-bold text-verdant-800 dark:text-verdant-200">{w.name}</td>
                                    <td className="p-4 text-center font-mono text-zinc-500 whitespace-nowrap">{w.cost}</td>
                                    <td className="p-4 text-center font-mono text-zinc-500 whitespace-nowrap">{w.range}</td>
                                    <td className="p-4 text-zinc-600 dark:text-zinc-300 leading-relaxed text-xs md:text-sm">{w.desc}</td>
                                    <td className="p-4 text-[10px] font-mono text-verdant-700 dark:text-verdant-400 uppercase tracking-tight">{w.tags}</td>
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
                                <th className="p-4 border-b border-verdant-100 dark:border-verdant-800">Description</th>
                                <th className="p-4 border-b border-verdant-100 dark:border-verdant-800">Tags</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-verdant-100 dark:divide-verdant-800 bg-white dark:bg-zinc-900/40">
                            {armors.map((a) => (
                                <tr key={a.name} className="hover:bg-verdant-50/50 dark:hover:bg-verdant-900/20 transition-colors">
                                    <td className="p-4 font-bold text-verdant-800 dark:text-verdant-200">{a.name}</td>
                                    <td className="p-4 text-center font-mono text-zinc-500 whitespace-nowrap">{a.cost}</td>
                                    <td className="p-4 text-center font-mono text-verdant-600 dark:text-verdant-400 font-bold">{a.armor}</td>
                                    <td className="p-4 text-zinc-600 dark:text-zinc-300 leading-relaxed text-xs md:text-sm">{a.desc}</td>
                                    <td className="p-4 text-[10px] font-mono text-verdant-700 dark:text-verdant-400 uppercase tracking-tight">{a.tags}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <section>
                    <h2 className="text-3xl font-display font-bold mb-6 text-verdant-800 dark:text-verdant-300 border-b border-verdant-100 dark:border-verdant-800 pb-2">Consumables</h2>
                    <div className="overflow-x-auto rounded-xl border border-verdant-200 dark:border-verdant-800 shadow-sm">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-verdant-50/80 dark:bg-verdant-900/50 text-verdant-900 dark:text-verdant-100 font-display text-base">
                                <tr>
                                    <th className="p-4 border-b border-verdant-100 dark:border-verdant-800">Name</th>
                                    <th className="p-4 border-b border-verdant-100 dark:border-verdant-800 text-center">Cost</th>
                                    <th className="p-4 border-b border-verdant-100 dark:border-verdant-800">Description</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-verdant-100 dark:divide-verdant-800 bg-white dark:bg-zinc-900/40">
                                {consumables.map((c) => (
                                    <tr key={c.name} className="hover:bg-verdant-50/50 dark:hover:bg-verdant-900/20 transition-colors">
                                        <td className="p-4 font-bold text-verdant-800 dark:text-verdant-200">{c.name}</td>
                                        <td className="p-4 text-center font-mono text-zinc-500 whitespace-nowrap">{c.cost}</td>
                                        <td className="p-4 text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed">{c.desc}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                <section>
                    <h2 className="text-3xl font-display font-bold mb-6 text-verdant-800 dark:text-verdant-300 border-b border-verdant-100 dark:border-verdant-800 pb-2">Tools</h2>
                    <div className="overflow-x-auto rounded-xl border border-verdant-200 dark:border-verdant-800 shadow-sm">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-verdant-50/80 dark:bg-verdant-900/50 text-verdant-900 dark:text-verdant-100 font-display text-base">
                                <tr>
                                    <th className="p-4 border-b border-verdant-100 dark:border-verdant-800">Name</th>
                                    <th className="p-4 border-b border-verdant-100 dark:border-verdant-800 text-center">Cost</th>
                                    <th className="p-4 border-b border-verdant-100 dark:border-verdant-800">Description</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-verdant-100 dark:divide-verdant-800 bg-white dark:bg-zinc-900/40">
                                {tools.map((t) => (
                                    <tr key={t.name} className="hover:bg-verdant-50/50 dark:hover:bg-verdant-900/20 transition-colors">
                                        <td className="p-4 font-bold text-verdant-800 dark:text-verdant-200">{t.name}</td>
                                        <td className="p-4 text-center font-mono text-zinc-500 whitespace-nowrap">{t.cost}</td>
                                        <td className="p-4 text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed">{t.desc}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </div>
    );
}
