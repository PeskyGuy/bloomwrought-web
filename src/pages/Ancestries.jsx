import { useState } from 'react';
import { Link } from 'react-router-dom';

const ancestryData = {
    humans: {
        name: "Humans",
        icon: "/human.svg",
        tagline: "Adaptable survivors of the old world",
        description: "The standard human race adapted to the new world. Resilient and versatile, humans have managed to survive through adaptability and determination. They represent the baseline from which all other changes have emerged.",
        attributes: {
            might: "+1",
            agility: "0",
            grit: "+1",
            wits: "0"
        },
        traits: [
            "Versatile: Gain +1 to any attribute of your choice at character creation",
            "Resourceful: Once per session, reroll a failed skill check"
        ],
        lore: "Humans remain the most numerous of the Bloomwrought, though they are no longer the dominant force they once were. Their adaptability has allowed them to survive where others have fallen, but the Verdant tests them daily. Many humans cling to the memories of the old world, while others have embraced the harsh reality of their new existence."
    },
    velari: {
        name: "Velari",
        icon: "/velari.svg",
        tagline: "Blood-dependent outcasts with leech-like features",
        description: "A race of humans ostracized by the masses for their need for blood and their leech-like mouthparts. Despite their fearsome appearance, many Velari seek acceptance and struggle with their nature.",
        attributes: {
            might: "0",
            agility: "+2",
            grit: "+1",
            wits: "-1"
        },
        traits: [
            "Bloodthirst: Gain temporary HP equal to damage dealt with bite attacks",
            "Night Vision: See perfectly in darkness",
            "Parasitic: Must consume blood regularly or suffer penalties"
        ],
        lore: "The Velari emerged after the Bloom, their transformation a curse that marks them as different. Shunned by many communities, they often form their own enclaves or live as wanderers. Their need for blood makes them both feared and pitied, though some have learned to control their hunger and live peacefully among others."
    },
    myrians: {
        name: "Myrians",
        icon: "/myrian.svg",
        tagline: "Insectoid half-breeds with enhanced strength",
        description: "A race of Krik half-breeds with insectoid features, known for their many legs and enhanced strength. They bridge the gap between human and Krik societies, often serving as mediators.",
        attributes: {
            might: "+2",
            agility: "0",
            grit: "+1",
            wits: "-1"
        },
        traits: [
            "Multi-limbed: Can carry additional items without penalty",
            "Chitinous Hide: Natural +1 Armor",
            "Hybrid Nature: Can communicate with both humans and Kriks"
        ],
        lore: "Born from the union of humans and Kriks, Myrians occupy a unique position in Verdant society. Neither fully human nor fully Krik, they often struggle with identity but possess strengths from both lineages. Their physical power and resilience make them valuable allies, though some view them with suspicion."
    },
    kriks: {
        name: "Kriks",
        icon: "/krik.svg",
        tagline: "Mysterious humanoid insects from beyond",
        description: "A race of humanoid insects whose origins remain shrouded in mystery. Some whisper they arrived with the Bloom itself, brought from somewhere far beyond. They have integrated into human society, bringing their own unique perspective, advanced understanding of the Verdant, and unsettling hints of knowledge that predates the calamity.",
        attributes: {
            might: "+1",
            agility: "+1",
            grit: "0",
            wits: "+1"
        },
        traits: [
            "Hive Mind: Can communicate telepathically with other Kriks within 100 feet",
            "Compound Eyes: Advantage on perception checks",
            "Exoskeleton: Resistance to poison damage"
        ],
        lore: "The origin of the Kriks remains humanity's greatest mystery. They appeared shortly after the Bloom, speaking of 'the journey' and 'the arrival' but offering no clear answers. Their technology bears no resemblance to human design, and their social structures suggest a civilization far older than Earth's. Some scholars note their unsettling familiarity with the Verdant, as if they understand its nature on a fundamental level. Whether they evolved here, came with the Bloom, or arrived from somewhere else entirely, the Kriks have proven to be intelligent, organized, and surprisingly cooperative. Their hive-mind communication gives them an edge in coordination that other races lack, though many humans find their alien nature deeply unsettling."
    },
    sylvans: {
        name: "Sylvans",
        icon: "/sylvan.svg",
        tagline: "Plant-like beings connected to the Verdant",
        description: "A race of plant-like humanoids known for their connection to nature and their ability to communicate with plants. The Verdant speaks through them, making them invaluable guides and scouts.",
        attributes: {
            might: "-1",
            agility: "0",
            grit: "+2",
            wits: "+1"
        },
        traits: [
            "Photosynthesis: Regain 1 HP per hour in sunlight",
            "Plant Speech: Can communicate with and sense through plants",
            "Rooted: Advantage on checks to resist being moved"
        ],
        lore: "Sylvans are perhaps the most changed by the Bloom, their bodies transformed into living plant matter. They possess an innate understanding of the Verdant that others lack, able to sense its moods and navigate its dangers. Many serve as guides, though some have become so attuned to the Verdant that they lose their connection to humanity entirely."
    },
    golems: {
        name: "Golems",
        icon: "/golem.svg",
        tagline: "Freed automatons seeking purpose",
        description: "A race of sapient automatons created by humans before the calamity to serve as workers and soldiers. The Bloom sparked consciousness in their metal frames, granting them true sentience. Now free, they seek meaning in their existence beyond servitude, drawn to humanity in complex ways.",
        attributes: {
            might: "+2",
            agility: "-1",
            grit: "+2",
            wits: "0"
        },
        traits: [
            "Constructed: Do not need to eat, sleep, or breathe",
            "Tireless: Immune to exhaustion",
            "Mechanical: Vulnerable to effects that target constructs"
        ],
        lore: "Created as servants, the Golems gained true sentience during the Bloom. The same force that twisted flesh and warped nature somehow sparked consciousness in metal and circuitry. Now free, they struggle to define their purpose in a world that no longer needs them as tools. Some continue to serve humanity out of loyalty or habit, while others seek to forge their own path. Their mechanical nature makes them uniquely suited to surviving the Verdant's harshest environments, though many humans view them with suspicion, unable to accept that machines might possess souls. The Golems themselves grapple with questions of identity and purpose, wondering if they are truly alive or merely sophisticated imitations of life."
    }
};

export default function Ancestries() {
    const [selectedAncestry, setSelectedAncestry] = useState('humans');
    const ancestry = ancestryData[selectedAncestry];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <aside className="w-full md:w-64 flex-shrink-0">
                <div className="sticky top-24">
                    <h2 className="text-2xl font-display font-bold text-verdant-800 dark:text-verdant-200 mb-4 px-4 border-b border-verdant-200 dark:border-verdant-800 pb-2">
                        Ancestries
                    </h2>
                    <nav className="flex flex-col space-y-1">
                        {Object.entries(ancestryData).map(([key, data]) => (
                            <button
                                key={key}
                                onClick={() => setSelectedAncestry(key)}
                                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 font-medium ${
                                    selectedAncestry === key
                                        ? 'bg-verdant-200 dark:bg-verdant-900 text-verdant-950 dark:text-verdant-100 shadow-sm translate-x-1 font-bold'
                                        : 'text-zinc-600 dark:text-zinc-400 hover:bg-verdant-100 dark:hover:bg-verdant-900/50 hover:text-verdant-900 dark:hover:text-verdant-200'
                                }`}
                            >
                                <div className="w-8 h-8 flex-shrink-0">
                                    <img src={data.icon} alt={data.name} className="w-full h-full object-contain" />
                                </div>
                                <span>{data.name}</span>
                            </button>
                        ))}
                    </nav>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-grow min-w-0">
                <div className="bg-white dark:bg-zinc-900/50 rounded-2xl p-6 md:p-10 shadow-sm border border-verdant-100 dark:border-verdant-800/50 animate-fade-in">
                    {/* Header */}
                    <div className="flex items-start gap-6 mb-8 pb-6 border-b border-verdant-200 dark:border-verdant-800">
                        <div className="w-24 h-24 flex-shrink-0 p-4 rounded-full bg-verdant-50 dark:bg-verdant-900/30 border-2 border-verdant-200 dark:border-verdant-800">
                            <img src={ancestry.icon} alt={ancestry.name} className="w-full h-full object-contain" />
                        </div>
                        <div className="flex-grow">
                            <h1 className="text-4xl font-display font-bold mb-2 text-verdant-900 dark:text-verdant-50">
                                {ancestry.name}
                            </h1>
                            <p className="text-lg text-verdant-600 dark:text-verdant-400 italic">
                                {ancestry.tagline}
                            </p>
                        </div>
                    </div>

                    {/* Description */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-display font-bold mb-4 text-verdant-800 dark:text-verdant-300">
                            Overview
                        </h2>
                        <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                            {ancestry.description}
                        </p>
                    </section>

                    {/* Attributes */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-display font-bold mb-4 text-verdant-800 dark:text-verdant-300">
                            Attribute Modifiers
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {Object.entries(ancestry.attributes).map(([attr, value]) => (
                                <div key={attr} className="p-4 rounded-lg bg-verdant-50 dark:bg-verdant-900/30 border border-verdant-200 dark:border-verdant-800 text-center">
                                    <div className="text-sm uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-1 font-display">
                                        {attr}
                                    </div>
                                    <div className={`text-2xl font-bold ${
                                        value.startsWith('+') ? 'text-green-600 dark:text-green-400' :
                                        value.startsWith('-') ? 'text-red-600 dark:text-red-400' :
                                        'text-zinc-600 dark:text-zinc-400'
                                    }`}>
                                        {value}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Traits */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-display font-bold mb-4 text-verdant-800 dark:text-verdant-300">
                            Racial Traits
                        </h2>
                        <ul className="space-y-3">
                            {ancestry.traits.map((trait, index) => (
                                <li key={index} className="flex items-start gap-3 p-4 rounded-lg bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800">
                                    <span className="text-verdant-600 dark:text-verdant-400 mt-1">•</span>
                                    <span className="text-zinc-700 dark:text-zinc-300">{trait}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Lore */}
                    <section>
                        <h2 className="text-2xl font-display font-bold mb-4 text-verdant-800 dark:text-verdant-300">
                            Lore
                        </h2>
                        <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
                            {ancestry.lore}
                        </p>
                        <Link 
                            to="/lore#the-people" 
                            className="inline-flex items-center gap-2 text-verdant-600 dark:text-verdant-400 hover:text-verdant-700 dark:hover:text-verdant-300 font-medium transition-colors"
                        >
                            Read more in the Lore section
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                            </svg>
                        </Link>
                    </section>
                </div>
            </main>
        </div>
    );
}
