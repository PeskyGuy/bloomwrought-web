const SkillCard = ({ name, description, tiers }) => (
    <div className="mb-6 p-6 bg-white dark:bg-zinc-800/50 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm transition-all hover:shadow-md">
        <h3 className="text-xl font-bold text-verdant-700 dark:text-verdant-400 mb-2 font-display">{name}</h3>
        <p className="text-zinc-600 dark:text-zinc-300 mb-4 text-sm">{description}</p>
        <div className="space-y-2">
            {tiers.map((tier, index) => (
                <div key={index} className="flex gap-3 text-sm">
                    <span className="font-bold text-verdant-600 dark:text-verdant-400 min-w-[80px]">{tier.level}:</span>
                    <span className="text-zinc-600 dark:text-zinc-400">{tier.description}</span>
                </div>
            ))}
        </div>
    </div>
);

export default function Skills() {
    const skills = [
        {
            name: "Alchemist",
            description: "Create potions, poisons, and alchemical substances. Identify unknown chemicals and compounds.",
            tiers: [
                { level: "Novice", description: "Create basic potions and identify common substances" },
                { level: "Adept", description: "Create complex alchemicals and antidotes" },
                { level: "Expert", description: "Create experimental compounds and transmute materials" }
            ]
        },
        {
            name: "Chef",
            description: "Prepare palatable meals from limited ingredients. Turn Bricks into something edible.",
            tiers: [
                { level: "Novice", description: "Make Bricks taste acceptable and prepare simple meals" },
                { level: "Adept", description: "Create morale-boosting meals that provide temporary benefits" },
                { level: "Expert", description: "Craft meals that grant significant temporary bonuses to allies" }
            ]
        },
        {
            name: "Charlatan",
            description: "Lie, bluff, and mislead others convincingly. Run scams and manipulate through deception.",
            tiers: [
                { level: "Novice", description: "Tell convincing lies and run simple cons" },
                { level: "Adept", description: "Maintain complex deceptions and impersonate others" },
                { level: "Expert", description: "Orchestrate elaborate schemes and manipulate groups" }
            ]
        },
        {
            name: "Engineer",
            description: "Design and build mechanical devices, traps, and structures.",
            tiers: [
                { level: "Novice", description: "Build simple devices and basic traps" },
                { level: "Adept", description: "Design complex mechanisms and fortifications" },
                { level: "Expert", description: "Create innovative inventions and siege equipment" }
            ]
        },
        {
            name: "Entertainer",
            description: "Perform, tell stories, and captivate audiences through art and charisma.",
            tiers: [
                { level: "Novice", description: "Perform adequately and hold attention" },
                { level: "Adept", description: "Inspire emotions and sway opinions through performance" },
                { level: "Expert", description: "Create legendary performances that change hearts and minds" }
            ]
        },
        {
            name: "Lockbreaker",
            description: "Pick locks, disable security systems, and bypass mechanical barriers.",
            tiers: [
                { level: "Novice", description: "Pick simple locks and disable basic traps" },
                { level: "Adept", description: "Bypass complex security and disarm advanced traps" },
                { level: "Expert", description: "Open any mechanical lock and disable cutting-edge security" }
            ]
        },
        {
            name: "Lorekeeper",
            description: "Recall facts about the old world, the Bloom, and the Verdant's history. Identify artifacts.",
            tiers: [
                { level: "Novice", description: "Recall common historical facts and identify obvious artifacts" },
                { level: "Adept", description: "Know obscure history and determine artifact functions" },
                { level: "Expert", description: "Access deep knowledge and unlock artifact secrets" }
            ]
        },
        {
            name: "Medic",
            description: "Treat wounds, diagnose illnesses, and stabilize dying allies in combat conditions.",
            tiers: [
                { level: "Novice", description: "Stabilize dying allies and treat basic wounds" },
                { level: "Adept", description: "Heal serious injuries and cure diseases" },
                { level: "Expert", description: "Perform field surgery and treat any ailment" }
            ]
        },
        {
            name: "Negotiator",
            description: "Convince, bargain, and inspire others through words and diplomacy.",
            tiers: [
                { level: "Novice", description: "Make fair deals and resolve simple disputes" },
                { level: "Adept", description: "Broker complex agreements and defuse tense situations" },
                { level: "Expert", description: "Unite factions and negotiate impossible deals" }
            ]
        },
        {
            name: "Pickpocket",
            description: "Steal items, palm objects, and perform manual dexterity tricks without being noticed.",
            tiers: [
                { level: "Novice", description: "Lift small items and perform basic sleight of hand" },
                { level: "Adept", description: "Steal from alert targets and plant evidence" },
                { level: "Expert", description: "Perform impossible thefts and never get caught" }
            ]
        },
        {
            name: "Scavenger",
            description: "Find useful materials, salvage old world technology, and identify valuable items in ruins.",
            tiers: [
                { level: "Novice", description: "Find common salvage and identify obvious valuables" },
                { level: "Adept", description: "Locate rare materials and assess true value" },
                { level: "Expert", description: "Discover hidden caches and find anything in ruins" }
            ]
        },
        {
            name: "Scholar",
            description: "Identify creatures and plants of the Verdant. Understand the alien ecosystem and its behavior.",
            tiers: [
                { level: "Novice", description: "Identify common Verdant life and predict basic behavior" },
                { level: "Adept", description: "Understand rare species and ecosystem interactions" },
                { level: "Expert", description: "Communicate with Verdant life and predict major events" }
            ]
        },
        {
            name: "Scout",
            description: "Track creatures, navigate terrain, and read signs of passage. Move through hostile areas undetected.",
            tiers: [
                { level: "Novice", description: "Follow obvious tracks and navigate familiar terrain" },
                { level: "Adept", description: "Track elusive targets and navigate any terrain" },
                { level: "Expert", description: "Track anything across any surface and never get lost" }
            ]
        },
        {
            name: "Scrapper",
            description: "Forge and repair metal items, including weapons and armor. Work with salvaged materials.",
            tiers: [
                { level: "Novice", description: "Repair damaged equipment and forge basic items" },
                { level: "Adept", description: "Craft quality weapons and armor from salvage" },
                { level: "Expert", description: "Create masterwork equipment and modify existing gear" }
            ]
        },
        {
            name: "Socialite",
            description: "Read emotions, detect lies, and understand motivations through social interaction.",
            tiers: [
                { level: "Novice", description: "Detect obvious lies and read basic emotions" },
                { level: "Adept", description: "Understand hidden motives and detect subtle deception" },
                { level: "Expert", description: "Read anyone perfectly and predict their actions" }
            ]
        },
        {
            name: "Survivalist",
            description: "Hunt game, forage for food, find water, and build shelters in hostile environments.",
            tiers: [
                { level: "Novice", description: "Find food and water, build basic shelters" },
                { level: "Adept", description: "Thrive in any environment and hunt dangerous game" },
                { level: "Expert", description: "Survive impossible conditions and live off nothing" }
            ]
        },
        {
            name: "Tactician",
            description: "Understand battlefield strategy, read combat situations, and plan effective maneuvers.",
            tiers: [
                { level: "Novice", description: "Recognize tactical advantages and basic strategies" },
                { level: "Adept", description: "Devise complex battle plans and predict enemy moves" },
                { level: "Expert", description: "Orchestrate perfect strategies and turn any battle" }
            ]
        },
        {
            name: "Technician",
            description: "Repair, modify, and operate old world technology. Hack electronic systems.",
            tiers: [
                { level: "Novice", description: "Repair basic tech and operate simple systems" },
                { level: "Adept", description: "Modify technology and hack secure systems" },
                { level: "Expert", description: "Rebuild ancient tech and create new innovations" }
            ]
        },
        {
            name: "Thug",
            description: "Frighten, coerce, and threaten others through presence, violence, and intimidation.",
            tiers: [
                { level: "Novice", description: "Intimidate common folk and win bar fights" },
                { level: "Adept", description: "Terrify hardened warriors and extract information" },
                { level: "Expert", description: "Break anyone's will and command through fear" }
            ]
        },
        {
            name: "Zealot",
            description: "Knowledge of faiths, rituals, and spiritual matters. Perform ceremonies and understand theology.",
            tiers: [
                { level: "Novice", description: "Know common faiths and perform basic rituals" },
                { level: "Adept", description: "Understand obscure beliefs and conduct powerful ceremonies" },
                { level: "Expert", description: "Channel divine power and perform miracles" }
            ]
        }
    ];

    return (
        <div>
            <h1 className="font-display text-4xl md:text-5xl mb-8 text-verdant-900 dark:text-verdant-50">Skills</h1>

            <div className="bg-verdant-50 dark:bg-verdant-900/30 p-6 rounded-lg border-l-4 border-verdant-500 mb-8">
                <p className="italic m-0 text-verdant-900 dark:text-verdant-100">
                    Skills represent knowledge, expertise, and capabilities that characters possess. Each skill has three tiers: <strong>Novice (+1)</strong>, <strong>Adept (+2)</strong>, and <strong>Expert (+3)</strong>, providing flat bonuses to relevant checks.
                </p>
            </div>

            <section className="mb-12">
                <h2 className="text-3xl font-display font-bold mb-6 text-verdant-800 dark:text-verdant-300 border-b border-verdant-100 dark:border-verdant-800 pb-2">How Skills Work</h2>
                <ul className="list-disc pl-6 space-y-2 text-zinc-700 dark:text-zinc-300">
                    <li>Characters start with 2-3 skills at <strong>Novice</strong> tier based on their background</li>
                    <li>Each tier provides a flat bonus to relevant checks:
                        <ul className="list-circle pl-6 mt-2 space-y-1">
                            <li><strong>Novice:</strong> +1 to relevant checks</li>
                            <li><strong>Adept:</strong> +2 to relevant checks</li>
                            <li><strong>Expert:</strong> +3 to relevant checks</li>
                        </ul>
                    </li>
                    <li>Skills can be improved through training, practice, or significant experiences</li>
                    <li>The GM determines when skills apply and what checks are needed</li>
                </ul>
            </section>

            <section className="mb-12">
                <h2 className="text-3xl font-display font-bold mb-6 text-verdant-800 dark:text-verdant-300 border-b border-verdant-100 dark:border-verdant-800 pb-2">Skill List</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {skills.map((skill) => (
                        <SkillCard key={skill.name} {...skill} />
                    ))}
                </div>
            </section>
        </div>
    );
}
