export default function Equipment() {
    const weapons = [
        { name: "Longsword", cost: "5-b", damage: "1d8 + MIGHT", range: "1-hx", tags: "Versatile", properties: "Choose Slash, Bludgeon, or Pierce damage when attacking." },
        { name: "Crossbow", cost: "5-b", damage: "1d8 / 1d6 + MIGHT", range: "6-hx to 20-hx", tags: "Pierce/Bludgeon", properties: "Ranged: 1d8 Pierce damage. Melee: 1d6 + MIGHT Bludgeon damage." },
        { name: "Mace", cost: "5-b", damage: "1d6 + MIGHT", range: "1-hx", tags: "Bludgeon/Break", properties: "Bludgeon damage. On hit, permanently reduce target's armor by 1." },
        { name: "Shortsword", cost: "3-b", damage: "1d6 + MIGHT", range: "1-hx", tags: "Versatile/Light", properties: "Choose Slash, Bludgeon, or Pierce damage. Can be wielded in off-hand." },
        { name: "Greatsword", cost: "4.5-b", damage: "1d12 + MIGHT", range: "2-hx", tags: "Versatile/Cleave", properties: "Choose Slash, Bludgeon, or Pierce damage. On hit, deal half damage to one adjacent creature." },
        { name: "Battleaxe", cost: "4-b", damage: "2d6 + MIGHT", range: "2-hx", tags: "Slash/Break/Bludgeon", properties: "Slash or Bludgeon damage. On hit, permanently reduce target's armor by 1." },
        { name: "Rapier", cost: "3-b", damage: "1d6 + AGILITY", range: "1-hx", tags: "Pierce/Accurate/Light", properties: "Pierce damage. Spend 1 STAMINA for +1 to hit. Can be wielded in off-hand." },
        { name: "Pistol", cost: "20-b", damage: "2d10", range: "6-hx to 30-hx", tags: "Pierce/Precise", properties: "Pierce damage. +2 to hit against TRACKED targets." },
        { name: "Long Rifle", cost: "40-b", damage: "2d12 / 1d6", range: "8-hx to 40-hx", tags: "Pierce/Bludgeon/Precise", properties: "Ranged: 2d12 Pierce damage. Melee: 1d6 Bludgeon damage. +2 to hit against TRACKED targets." },
        { name: "Automatic Rifle", cost: "60-b", damage: "2d8 / 1d6", range: "6-hx to 30-hx", tags: "Pierce/Bludgeon/Rapid", properties: "Ranged: 2d8 Pierce damage. Melee: 1d6 Bludgeon damage. Spend 1 STAMINA to target additional enemies. -1 damage per extra target." },
    ];

    const armors = [
        { name: "Scavenger Leathers", cost: "4-b", armor: "1", tags: "Light", properties: "No SPEED penalty. Gain additional armor equal to AGILITY (maximum +2)." },
        { name: "Chitinous Armor", cost: "4-b", armor: "1", tags: "Light/Weathered", properties: "No SPEED penalty. Gain additional armor equal to AGILITY (maximum +2). +1 armor vs ACID damage." },
        { name: "Reinforced Jacket", cost: "6-b", armor: "2", tags: "Medium/Practical", properties: "No SPEED penalty. Gain one free Use action per round." },
        { name: "Scrap Mail", cost: "5-b", armor: "3", tags: "Medium/Makeshift", properties: "No SPEED penalty. Can be repaired without tools using basic materials." },
        { name: "Alloyed Plate", cost: "14-b", armor: "4", tags: "Heavy/Reflective", properties: "-2 SPEED penalty. Ranged attacks against you have -1 to hit. Immune to Push and Pull effects." },
        { name: "War-Shell", cost: "14-b", armor: "5", tags: "Heavy/Spiked", properties: "-2 SPEED penalty. Deal +2 damage to grappling enemies. Immune to Push and Pull effects." },
    ];

    const consumables = [
        { name: "Herbal Bandage", cost: "3-b", uses: "1", tags: "Heal", effect: "Restore 1d4 HEALTH to target." },
        { name: "Vitastatic", cost: "15-b", uses: "1", tags: "Heal/Cure", effect: "Restore 2d6 HEALTH to target. Remove one status effect." },
        { name: "Adrenalin Shot", cost: "15-b", uses: "1", tags: "Surge", effect: "For 2 rounds, gain +2 SPEED and +2 DAMAGE. Afterwards, gain FATIGUED status." },
    ];

    const tools = [
        { name: "Hacker's Kit", cost: "12-b", uses: "Unlimited", tags: "Hack", effect: "Allows you to infiltrate old world security systems and electronic locks." },
        { name: "Medical Supplies", cost: "8-b", uses: "6", tags: "Mend/Limited", effect: "Roll 2d6 + WITS vs target's missing HP. On success, restore 1d6 HEALTH to target." },
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
