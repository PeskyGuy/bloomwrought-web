const TagCard = ({ name, description, category }) => (
    <div className="p-4 border-l-4 border-verdant-400 dark:border-verdant-600 bg-white dark:bg-zinc-900/50 rounded-r-lg shadow-sm">
        <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-lg font-display font-bold text-verdant-800 dark:text-verdant-300">{name}</h3>
            {category && (
                <span className="text-xs px-2 py-1 rounded-full bg-verdant-100 dark:bg-verdant-900/50 text-verdant-700 dark:text-verdant-400 font-medium whitespace-nowrap">
                    {category}
                </span>
            )}
        </div>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 m-0">{description}</p>
    </div>
);

const CategorySection = ({ title, description, children }) => (
    <section className="mb-12">
        <h2 className="text-2xl font-display font-bold mb-3 text-verdant-800 dark:text-verdant-300 border-b-2 border-verdant-200 dark:border-verdant-800 pb-2">
            {title}
        </h2>
        {description && (
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6 italic">{description}</p>
        )}
        <div className="grid grid-cols-1 gap-4">
            {children}
        </div>
    </section>
);

export default function Tags() {
    return (
        <div>
            <h1 className="font-display text-4xl md:text-5xl mb-4 text-verdant-900 dark:text-verdant-50">Tags Reference</h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
                Complete list of all tags, organized by category and type.
            </p>

            {/* PASSIVE TAGS */}
            <div className="mb-16">
                <h2 className="text-3xl font-display font-bold mb-6 text-verdant-700 dark:text-verdant-400 border-b-4 border-verdant-300 dark:border-verdant-700 pb-3">
                    Passive Tags
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 mb-8">
                    These tags are always active and don't require any action to use.
                </p>

                <CategorySection title="Armor Properties">
                    <TagCard name="Medium" description="No SPEED penalty." />
                    <TagCard name="Heavy" description="-2 SPEED penalty. Immune to Push and Pull effects." />
                    <TagCard name="Weathered" description="+1 armor vs ACID damage." />
                    <TagCard name="Practical" description="Gain one free Use action per round." />
                    <TagCard name="Makeshift" description="Can be repaired without tools using basic materials." />
                    <TagCard name="Reflective" description="Ranged attacks against you have -1 to hit." />
                    <TagCard name="Spiked" description="Deal +2 damage to targets you are grappling or have RESTRAINED." />
                </CategorySection>

                <CategorySection title="Weapon Properties">
                    <TagCard name="Light" description="Can be wielded in off-hand." />
                    <TagCard name="Precise" description="+2 to hit against TRACKED targets." />
                </CategorySection>

                <CategorySection title="Item Properties">
                    <TagCard name="Limited" description="Limited number of uses." />
                </CategorySection>
            </div>

            {/* ACTIVE TAGS */}
            <div className="mb-16">
                <h2 className="text-3xl font-display font-bold mb-6 text-verdant-700 dark:text-verdant-400 border-b-4 border-verdant-300 dark:border-verdant-700 pb-3">
                    Active Tags
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 mb-8">
                    These tags require an action to use (Strike, Use, etc.).
                </p>

                <CategorySection 
                    title="Strike - Damage Types" 
                    description="Free with Strike action. Choose one damage type from your weapon per attack."
                >
                    <TagCard name="Pierce" description="Deals Pierce damage. Effective against unarmored targets." category="Free" />
                    <TagCard name="Bludgeon" description="Deals Bludgeon damage. Effective at breaking armor." category="Free" />
                    <TagCard name="Slash" description="Deals Slash damage. Effective at causing bleeding wounds." category="Free" />
                    <TagCard name="Versatile" description="Choose Slash, Bludgeon, or Pierce damage when attacking. Only one damage type per Strike." category="Free" />
                </CategorySection>

                <CategorySection 
                    title="Strike - Modifiers" 
                    description="Free to use but give 1 Exertion each. At 3+ Exertion, you become FATIGUED."
                >
                    <TagCard name="Accurate" description="+1 to hit." category="1 Exertion" />
                    <TagCard name="Rapid" description="Target additional enemies, -1 damage per extra target." category="1 Exertion" />
                </CategorySection>

                <CategorySection 
                    title="Strike - Effects" 
                    description="Trigger automatically when you hit with a Strike."
                >
                    <TagCard name="Break" description="On hit, permanently reduce target's armor by 1." category="Free on Hit" />
                    <TagCard name="Cleave" description="On hit, deal half damage to one adjacent creature." category="Free on Hit" />
                </CategorySection>

                <CategorySection 
                    title="Use Tags" 
                    description="Require a Use action but don't give Exertion."
                >
                    <TagCard name="Heal" description="Restores HEALTH." category="Use Action" />
                    <TagCard name="Cure" description="Removes status effects." category="Use Action" />
                    <TagCard name="Surge" description="Temporary boost with drawback." category="Use Action" />
                    <TagCard name="Hack" description="Infiltrate old world security systems and electronic locks." category="Use Action" />
                    <TagCard name="Mend" description="Restore HEALTH with skill check." category="Use Action" />
                </CategorySection>
            </div>

            {/* STATUS EFFECT TAGS */}
            <div className="mb-16">
                <h2 className="text-3xl font-display font-bold mb-6 text-verdant-700 dark:text-verdant-400 border-b-4 border-verdant-300 dark:border-verdant-700 pb-3">
                    Status Effect Tags
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 mb-8">
                    Conditions that modify how a character or enemy functions. Applied through various actions and abilities.
                </p>

                <CategorySection title="Combat Status Effects">
                    <TagCard name="TRACKED" description="The target has been marked for focused attacks. Certain weapons and abilities gain bonuses against TRACKED targets." />
                    <TagCard name="EXPOSED" description="The target's defenses are compromised. Attacks against EXPOSED targets have advantage. Removed at the end of the target's next turn." />
                    <TagCard name="PRONE" description="The target is knocked to the ground. While PRONE, the target has -2 to attack rolls and melee attacks against them have advantage. Standing up costs 1 action and half your movement." />
                    <TagCard name="RESTRAINED" description="The target is grabbed or entangled. Cannot move and has -2 to attack rolls and Evasion. The restrainer must use one action each turn to maintain it." />
                    <TagCard name="WOUNDED" description="The target has taken significant damage. A creature becomes WOUNDED when reduced to half HP or less." />
                    <TagCard name="FATIGUED" description="The character is exhausted from pushing too hard. While FATIGUED, you have -2 to all rolls. You become FATIGUED when you reach 3+ Exertion." />
                    <TagCard name="DYING" description="The character has reached 0 HP and is on death's door. See Combat Rules for full mechanics." />
                </CategorySection>
            </div>

            {/* QUICK REFERENCE */}
            <div className="bg-verdant-50 dark:bg-verdant-900/20 p-6 rounded-xl border border-verdant-200 dark:border-verdant-800">
                <h3 className="text-xl font-display font-bold mb-4 text-verdant-800 dark:text-verdant-300">Tag Usage Quick Reference</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                        <h4 className="font-bold text-verdant-700 dark:text-verdant-400 mb-2">Passive Tags</h4>
                        <ul className="space-y-1 text-zinc-600 dark:text-zinc-400">
                            <li>• Always active</li>
                            <li>• No action required</li>
                            <li>• No cost</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-verdant-700 dark:text-verdant-400 mb-2">Active Tags</h4>
                        <ul className="space-y-1 text-zinc-600 dark:text-zinc-400">
                            <li>• Require an action (Strike, Use, etc.)</li>
                            <li>• Damage types are free</li>
                            <li>• Modifiers give 1 Exertion each</li>
                            <li>• Effects trigger on hit</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
