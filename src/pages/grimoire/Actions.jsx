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
                <h2 className="text-3xl font-display font-bold mb-6 text-verdant-800 dark:text-verdant-300">Action Types</h2>
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
        </div>
    );
}
