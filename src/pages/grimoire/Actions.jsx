const ActionCard = ({ title, description, details }) => (
    <div className="mb-6 p-6 bg-white dark:bg-zinc-800/50 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
        <h3 className="text-xl font-bold text-verdant-700 dark:text-verdant-400 mb-2 font-display">{title}</h3>
        <p className="text-zinc-600 dark:text-zinc-300 mb-3">{description}</p>
        {details && (
            <div className="text-sm bg-verdant-50 dark:bg-zinc-900 p-3 rounded-lg text-verdant-900 dark:text-verdant-100 font-medium">
                {details}
            </div>
        )}
    </div>
);

export default function Actions() {
    return (
        <div>
            <h1 className="font-display text-4xl md:text-5xl mb-8 text-verdant-900 dark:text-verdant-50">Tags & Actions</h1>

            <section className="mb-12">
                <h2 className="text-3xl font-display font-bold mb-6 text-verdant-800 dark:text-verdant-300">Basic Actions</h2>
                <p className="prose dark:prose-invert mb-8">Universal actions available to all characters without specific weapons or modifiers.</p>

                <div className="space-y-4">
                    <ActionCard
                        title="Strike"
                        description="Attack unarmed or with a weapon."
                        details="Roll 2d6 + MIGHT or AGILITY vs EVASION. Success: Deal DAMAGE equal to MIGHT or Weapon Damage."
                    />

                    <ActionCard
                        title="Shove"
                        description="Push an enemy away from you."
                        details="Roll Contested MIGHT check. Success: Push enemy and apply PRONE."
                    />

                    <ActionCard
                        title="Move"
                        description="Reposition yourself in combat."
                        details="Move up to your SPEED."
                    />

                    <ActionCard
                        title="Grapple"
                        description="Grab and restrain a target."
                        details="Roll Contested MIGHT vs MIGHT/AGILITY. Success: Apply RESTRAINED."
                    />

                    <ActionCard
                        title="Use"
                        description="Interact with an item or object in the environment."
                        details="May require a roll depending on the complexity of the interaction."
                    />

                    <ActionCard
                        title="Scan"
                        description="Analyze a target to learn their capabilities."
                        details="Reveal one attribute from the target."
                    />
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-3xl font-display font-bold mb-6 text-verdant-800 dark:text-verdant-300">Item Types</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {['Weapon', 'Armor', 'Consumable', 'Tool'].map(type => (
                        <div key={type} className="p-4 text-center rounded-lg bg-zinc-100 dark:bg-zinc-800 font-medium text-zinc-700 dark:text-zinc-300">
                            {type}
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <h2 className="text-3xl font-display font-bold mb-6 text-verdant-800 dark:text-verdant-300">Tag Categories</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {['Damage', 'Conditional', 'Movement', 'Skill'].map(tag => (
                        <div key={tag} className="p-4 text-center rounded-lg border border-verdant-200 dark:border-verdant-800 text-verdant-800 dark:text-verdant-200 font-bold">
                            {tag}
                        </div>
                    ))}
                </div>
            </section>

            <section className="mt-12">
                <h2 className="text-3xl font-display font-bold mb-6 text-verdant-800 dark:text-verdant-300">Weapons</h2>
                <p className="prose dark:prose-invert mb-8">
                    Weapons can have multiple tags and multiple dice, following the order of the tags. Each tag can have a unique damage die or simply be the same across the board. Each has a cost in Bricks (b).
                </p>

                <div className="overflow-x-auto rounded-xl border border-verdant-200 dark:border-verdant-800">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-verdant-50 dark:bg-verdant-900/50 text-verdant-900 dark:text-verdant-100 font-display text-base">
                            <tr>
                                <th className="p-4 border-b border-verdant-100 dark:border-verdant-800">Name</th>
                                <th className="p-4 border-b border-verdant-100 dark:border-verdant-800 w-24 text-center">Cost</th>
                                <th className="p-4 border-b border-verdant-100 dark:border-verdant-800">Description</th>
                                <th className="p-4 border-b border-verdant-100 dark:border-verdant-800 w-32">Tags</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-verdant-100 dark:divide-verdant-800 bg-white dark:bg-zinc-900/50">
                            {[
                                { name: "Longsword", cost: "3-b", tags: "Versatile", desc: <span><strong>Versatile.</strong> This weapon allows you to use any of the physical damage tags (Slash/Bludgeon/Pierce).</span> },
                                { name: "Crossbow", cost: "5-b", tags: "Pierce/Bludgeon", desc: <span><strong>Pierce.</strong> Deal 1d8 damage on ranged hit.<br /><strong>Bludgeon.</strong> Deal 1d6 + Might Damage on melee hit.</span> },
                                { name: "Mace", cost: "3-b", tags: "Bludgeon/Break", desc: <span><strong>Bludgeon.</strong> Deal 1d6 + MIGHT on hit.<br /><strong>Break.</strong> Permanently reduce a target's Armor by 1 on hit.</span> },
                                { name: "Shortsword", cost: "2-b", tags: "Versatile/Light", desc: <span><strong>Versatile.</strong> Allows use of any physical damage tags.<br /><strong>Light.</strong> Allows any character to wield this weapon in their off hand.</span> },
                                { name: "Greatsword", cost: "4.5-b", tags: "Versatile/Cleave/Reach", desc: <span><strong>Versatile.</strong> Allows use of any physical damage tags.<br /><strong>Cleave.</strong> Allows half damage to carry over to adjacent creature.<br /><strong>Reach.</strong> Range of 2 hexes.</span> },
                                { name: "Battleaxe", cost: "4-b", tags: "Slash/Break/Bludgeon", desc: <span><strong>Slash.</strong> Deal 2d6 + MIGHT damage on hit.<br /><strong>Break.</strong> Permanently reduce Armor by 1.<br /><strong>Bludgeon.</strong> Deal 2d6 + MIGHT on melee hit.</span> },
                                { name: "Rapier", cost: "2-b", tags: "Pierce/Accurate/Light", desc: <span><strong>Pierce.</strong> Deal 1d6 + AGILITY damage on hit.<br /><strong>Accurate.</strong> Spend 1 EFFORT for +1 to hit.<br /><strong>Light.</strong> Wield in off hand.</span> },
                                { name: "Pistol", cost: "20-b", tags: "Pierce/Precise", desc: <span><strong>Pierce.</strong> Deal 2d10 damage on hit.<br /><strong>Precise.</strong> +2 to hit against MARKED targets.</span> },
                                { name: "Long Rifle", cost: "40-b", tags: "Pierce/Bludgeon/Precise", desc: <span><strong>Pierce.</strong> Deal 2d12 damage on hit.<br /><strong>Bludgeon.</strong> Deal 1d6 damage on hit.<br /><strong>Precise.</strong> +2 to hit against MARKED targets.</span> },
                                { name: "Automatic Rifle", cost: "60-b", tags: "Pierce/Bludgeon/Rapid", desc: <span><strong>Pierce.</strong> Deal 2d8 damage on hit.<br /><strong>Bludgeon.</strong> Deal 1d6 damage on hit.</span> },
                            ].map((weapon) => (
                                <tr key={weapon.name} className="hover:bg-verdant-100 dark:hover:bg-verdant-900/40 transition-colors">
                                    <td className="p-4 font-bold text-verdant-900 dark:text-verdant-200">{weapon.name}</td>
                                    <td className="p-4 text-center font-mono text-zinc-500">{weapon.cost}</td>
                                    <td className="p-4 text-zinc-600 dark:text-zinc-300 leading-relaxed">{weapon.desc}</td>
                                    <td className="p-4 text-xs font-mono text-verdant-700 dark:text-verdant-400">{weapon.tags}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
}
