const ActionCard = ({ title, description, details }) => (
    <div className="mb-6 p-6 bg-white dark:bg-zinc-800/50 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm transition-all hover:shadow-md">
        <h3 className="text-xl font-bold text-verdant-700 dark:text-verdant-400 mb-2 font-display">{title}</h3>
        <p className="text-zinc-600 dark:text-zinc-300 mb-3">{description}</p>
        {details && (
            <div className="text-sm bg-verdant-50 dark:bg-zinc-900 p-3 rounded-lg text-verdant-900 dark:text-verdant-100 font-medium border border-verdant-100 dark:border-verdant-800">
                {details}
            </div>
        )}
    </div>
);

const CategoryCard = ({ label, variant = "primary" }) => (
    <div className={`p-4 text-center rounded-xl font-bold transition-all duration-300 border shadow-sm
        ${variant === "primary"
            ? "border-verdant-200 dark:border-verdant-800 bg-verdant-50/30 dark:bg-verdant-900/10 text-verdant-800 dark:text-verdant-200 hover:border-verdant-400 dark:hover:border-verdant-600 hover:shadow-md"
            : "border-zinc-200 dark:border-zinc-800 bg-zinc-50/30 dark:bg-zinc-900/10 text-zinc-700 dark:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-600 hover:shadow-md"
        }`}>
        {label}
    </div>
);

export default function Actions() {
    return (
        <div>
            <h1 className="font-display text-4xl md:text-5xl mb-8 text-verdant-900 dark:text-verdant-50">Tags & Actions</h1>

            <section className="mb-12">
                <h2 className="text-3xl font-display font-bold mb-6 text-verdant-800 dark:text-verdant-300 border-b border-verdant-100 dark:border-verdant-800 pb-2">Basic Actions</h2>
                <p className="prose dark:prose-invert mb-8 text-zinc-600 dark:text-zinc-400">Universal actions available to all characters without specific weapons or modifiers.</p>

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
                        details="Reveal one attribute from the target and apply TRACKED."
                    />
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-3xl font-display font-bold mb-6 text-verdant-800 dark:text-verdant-300 border-b border-verdant-100 dark:border-verdant-800 pb-2">Reactions</h2>
                <p className="prose dark:prose-invert mb-8 text-zinc-600 dark:text-zinc-400">Actions that are triggered outside of a character's turn. This can only be triggered once per round.</p>
                <div className="space-y-4">
                    <ActionCard
                        title="Exploit"
                        description="Attack a fleeing target."
                        details="Perform a Strike."
                    />
                    <ActionCard
                        title="Dodge"
                        description="Attempt to dodge an attack or hazard."
                        details="Make an Agility check vs the attack roll. Success: Avoid the attack entirely."
                    />
                    <ActionCard
                        title="Guard"
                        description="Brace yourself to absorb incoming damage."
                        details="Gain +2 ARMOR against the next attack this round. Survivor Stance: Clears 1 Exertion if successful."
                    />
                    <ActionCard
                        title="Retaliate"
                        description="Attack a target that has critically fumbled."
                        details="Perform a Strike and apply EXPOSED."
                    />
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-3xl font-display font-bold mb-6 text-verdant-800 dark:text-verdant-300">Tag Categories</h2>
                <p className="prose dark:prose-invert mb-8 text-zinc-600 dark:text-zinc-400">
                    Tags are divided into two main categories: <strong>Passive</strong> tags that are always active, and <strong>Active</strong> tags that require an action to use (Strike, Use, etc.). Strike modifier tags are FREE but give you 1 Exertion each.
                </p>
                
                <div className="mb-8">
                    <h3 className="text-2xl font-display font-bold mb-4 text-verdant-700 dark:text-verdant-400">Passive Tags (Always Active)</h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">These tags work automatically without requiring any action.</p>
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                        <CategoryCard label="Armor Properties" variant="primary" />
                        <CategoryCard label="Weapon Properties" variant="primary" />
                        <CategoryCard label="Item Properties" variant="primary" />
                    </div>
                </div>

                <div>
                    <h3 className="text-2xl font-display font-bold mb-4 text-verdant-700 dark:text-verdant-400">Active Tags (Require Action)</h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">These tags require an action to use. Damage types are free, modifiers give Exertion, effects trigger on hit.</p>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        <CategoryCard label="Strike - Damage Types" variant="secondary" />
                        <CategoryCard label="Strike - Modifiers" variant="secondary" />
                        <CategoryCard label="Strike - Effects" variant="secondary" />
                        <CategoryCard label="Use Tags" variant="secondary" />
                    </div>
                </div>
            </section>
        </div>
    );
}
