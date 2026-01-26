const GlossaryTerm = ({ term, definition }) => (
    <div className="p-4 border-l-4 border-verdant-400 dark:border-verdant-600 bg-white dark:bg-zinc-900/50 rounded-r-lg shadow-sm mb-4">
        <h3 className="text-lg font-display font-bold text-verdant-800 dark:text-verdant-300 mb-2">{term}</h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 m-0">{definition}</p>
    </div>
);

export default function Glossary() {
    const terms = [
        { term: "Action", definition: "A unit of activity during your turn. Each character gets 2 actions per turn." },
        { term: "Advantage", definition: "Roll 3d6 and keep the highest 2 dice." },
        { term: "Ancestry", definition: "Your character's species or race, which modifies starting attributes." },
        { term: "Armor", definition: "Flat damage reduction applied when you are hit by an attack." },
        { term: "Background", definition: "Your character's history and training, which modifies starting attributes." },
        { term: "Brick", definition: "A dense packet of hardened nutrient paste that serves as currency and emergency food." },
        { term: "Combat Encounter", definition: "A fight or battle. Used to track Hunger depletion (every 2 encounters = -1 Hunger)." },
        { term: "Death Mark", definition: "A strike against your life while DYING. Three Death Marks result in permanent death." },
        { term: "DESPERATION", definition: "Tokens gained when going DYING, spent for powerful survival effects." },
        { term: "Disadvantage", definition: "Roll 3d6 and keep the lowest 2 dice." },
        { term: "Evasion", definition: "The target number enemies must meet or exceed to hit you with attacks." },
        { term: "Full Rest", definition: "8 hours of sleep that restores HP, removes FATIGUED, and resets resources." },
        { term: "Hex", definition: "A unit of distance in combat, representing approximately 5 feet." },
        { term: "Lingering Injury", definition: "A lasting wound from a critical hit that imposes ongoing penalties until treated." },
        { term: "Reaction", definition: "A special action taken outside your turn in response to a trigger. Limited to once per round." },
        { term: "Short Rest", definition: "1 hour of downtime that allows limited healing and resource management." },
        { term: "STAMINA", definition: "Resource spent to apply tags to your actions. Starts at 2, maximum = GRIT × 2." },
        { term: "Stance", definition: "Your combat approach (Feral, Survivor, or Hunter) that determines how you generate STAMINA." },
        { term: "Status Effect", definition: "A condition affecting a character (TRACKED, EXPOSED, PRONE, RESTRAINED, WOUNDED, FATIGUED, DYING)." },
        { term: "Tag", definition: "A modifier applied to actions using STAMINA. See Tags & Actions for full list." },
        { term: "The Verdant", definition: "The hostile alien jungle world created by the Bloom." },
        { term: "TRACKED", definition: "Status effect marking a target for focused attacks. Grants bonuses to certain weapons and abilities." }
    ];

    return (
        <div>
            <h1 className="font-display text-4xl md:text-5xl mb-4 text-verdant-900 dark:text-verdant-50">Glossary</h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
                Quick reference for common terms and mechanics in Bloomwrought RPG.
            </p>

            <div className="grid grid-cols-1 gap-4">
                {terms.map(({ term, definition }) => (
                    <GlossaryTerm key={term} term={term} definition={definition} />
                ))}
            </div>
        </div>
    );
}
