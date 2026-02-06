const GlossaryTerm = ({ term, definition }) => (
    <div className="p-4 border-l-4 border-verdant-400 dark:border-verdant-600 bg-white dark:bg-zinc-900/50 rounded-r-lg shadow-sm mb-4">
        <h3 className="text-lg font-display font-bold text-verdant-800 dark:text-verdant-300 mb-2">{term}</h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 m-0">{definition}</p>
    </div>
);

const CategorySection = ({ title, children }) => (
    <section className="mb-12">
        <h2 className="text-2xl font-display font-bold mb-6 text-verdant-800 dark:text-verdant-300 border-b-2 border-verdant-200 dark:border-verdant-800 pb-2">
            {title}
        </h2>
        <div className="grid grid-cols-1 gap-4">
            {children}
        </div>
    </section>
);

export default function Glossary() {
    const coreRules = [
        { term: "Action", definition: "A unit of activity during your turn. Each character gets 2 actions per turn." },
        { term: "Advantage", definition: "Roll 3d6 and keep the highest 2 dice." },
        { term: "Disadvantage", definition: "Roll 3d6 and keep the lowest 2 dice." },
        { term: "Reaction", definition: "A special action taken outside your turn in response to a trigger. Limited to once per round." },
        { term: "Hex", definition: "A unit of distance in combat, representing approximately 5 feet." },
        { term: "Combat Encounter", definition: "A fight or battle. Used to track Hunger depletion (every 2 encounters = -1 Hunger)." },
    ];

    const characterAttributes = [
        { term: "Ancestry", definition: "Your character's species or race, which modifies starting attributes." },
        { term: "Background", definition: "Your character's history and training, which modifies starting attributes." },
        { term: "Armor", definition: "Flat damage reduction applied when you are hit by an attack." },
        { term: "Evasion", definition: "The target number enemies must meet or exceed to hit you with attacks." },
    ];

    const resources = [
        { term: "Exertion", definition: "Represents how hard you're pushing yourself. Each Strike modifier tag gives 1 Exertion. At 3+ Exertion, you become FATIGUED. Passively decays by -1 at the start of your turn. Max = GRIT + 3." },
        { term: "DESPERATION", definition: "Tokens gained when going DYING, spent for powerful survival effects." },
        { term: "Brick", definition: "A dense packet of hardened nutrient paste that serves as currency and emergency food." },
    ];

    const combatMechanics = [
        { term: "Stance", definition: "Your combat approach (Feral, Survivor, or Hunter) that determines your turn order within your group and provides unique ways to clear Exertion through stance-specific actions." },
        { term: "Tag", definition: "A modifier applied to actions or equipment. See Tags & Actions for full list." },
        { term: "Passive", definition: "Tags that are always active without requiring any action, such as armor properties (Heavy, Reflective, etc." },
        { term: "Active", definition: "Tags that require an action to use. Includes Strike tags (damage types are free, modifiers give 1 Exertion each, effects trigger on hit) and Use tags (Heal, Cure, etc.)." },
        { term: "Death Mark", definition: "A strike against your life while DYING. Three Death Marks result in permanent death." },
        { term: "Lingering Injury", definition: "A lasting wound from a critical hit that imposes ongoing penalties until treated." },
    ];

    const statusEffects = [
        { term: "DYING", definition: "Status effect when you reach 0 HP and are on death's door." },
        { term: "EXPOSED", definition: "Status effect where the target's defenses are compromised. Attacks against EXPOSED targets have advantage." },
        { term: "FATIGUED", definition: "Status effect where the character is exhausted from pushing too hard. While FATIGUED, you have -2 to all rolls. You become FATIGUED when you reach 3+ Exertion." },
        { term: "PRONE", definition: "Status effect where the target is knocked to the ground. While PRONE, the target has -2 to attack rolls and melee attacks against them have advantage." },
        { term: "RESTRAINED", definition: "Status effect where the target is grabbed or entangled. Cannot move and has -2 to attack rolls and Evasion." },
        { term: "TRACKED", definition: "Status effect marking a target for focused attacks. Grants bonuses to certain weapons and abilities." },
        { term: "WOUNDED", definition: "Status effect when a creature is reduced to half HP or less. Some abilities trigger additional effects against WOUNDED targets." },
    ];

    const recovery = [
        { term: "Full Rest", definition: "8 hours of sleep that restores HP, removes FATIGUED, and resets resources." },
        { term: "Short Rest", definition: "1 hour of downtime that allows limited healing and resource management." },
    ];

    const worldLore = [
        { term: "The Verdant", definition: "The hostile alien jungle world created by the Bloom." },
    ];

    return (
        <div>
            <h1 className="font-display text-4xl md:text-5xl mb-4 text-verdant-900 dark:text-verdant-50">Glossary</h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
                Quick reference for common terms and mechanics in Bloomwrought RPG.
            </p>

            <CategorySection title="Core Rules">
                {coreRules.map(({ term, definition }) => (
                    <GlossaryTerm key={term} term={term} definition={definition} />
                ))}
            </CategorySection>

            <CategorySection title="Character Attributes">
                {characterAttributes.map(({ term, definition }) => (
                    <GlossaryTerm key={term} term={term} definition={definition} />
                ))}
            </CategorySection>

            <CategorySection title="Resources">
                {resources.map(({ term, definition }) => (
                    <GlossaryTerm key={term} term={term} definition={definition} />
                ))}
            </CategorySection>

            <CategorySection title="Combat Mechanics">
                {combatMechanics.map(({ term, definition }) => (
                    <GlossaryTerm key={term} term={term} definition={definition} />
                ))}
            </CategorySection>

            <CategorySection title="Status Effects">
                {statusEffects.map(({ term, definition }) => (
                    <GlossaryTerm key={term} term={term} definition={definition} />
                ))}
            </CategorySection>

            <CategorySection title="Rest & Recovery">
                {recovery.map(({ term, definition }) => (
                    <GlossaryTerm key={term} term={term} definition={definition} />
                ))}
            </CategorySection>

            <CategorySection title="World & Lore">
                {worldLore.map(({ term, definition }) => (
                    <GlossaryTerm key={term} term={term} definition={definition} />
                ))}
            </CategorySection>
        </div>
    );
}
