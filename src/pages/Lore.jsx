import { useEffect } from 'react';

const Section = ({ title, children, className = "" }) => (
    <section className={`mb-16 md:mb-24 scroll-mt-24 ${className}`} id={title.toLowerCase().replace(/\s+/g, '-')}>
        <h2 className="text-3xl md:text-4xl mb-6 text-verdant-800 dark:text-verdant-300 border-l-4 border-verdant-500 pl-4 font-display">
            {title}
        </h2>
        <div className="prose prose-lg dark:prose-invert prose-verdant max-w-none text-zinc-700 dark:text-zinc-300 leading-relaxed">
            {children}
        </div>
    </section>
);

const RaceCard = ({ name, description }) => (
    <div className="bg-white dark:bg-zinc-900 rounded-xl p-6 shadow-sm border border-verdant-100 dark:border-verdant-800/50 hover:border-verdant-400 dark:hover:border-verdant-600 transition-all hover:shadow-md group">
        <h3 className="text-xl mb-2 text-verdant-700 dark:text-verdant-400 group-hover:text-verdant-600 dark:group-hover:text-verdant-300 font-display">
            {name}
        </h3>
        <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400">
            {description}
        </p>
    </div>
);

export default function Lore() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 animate-fade-in-up">
            <header className="mb-16 text-center">
                <h1 className="text-4xl md:text-6xl mb-6 text-verdant-900 dark:text-verdant-50 tracking-tight font-display">
                    The Verdant
                </h1>
                <p className="text-xl text-verdant-700/80 dark:text-verdant-200/60 max-w-2xl mx-auto">
                    A world reshaped by nature's unyielding reclamation.
                </p>
            </header>

            <Section title="Welcome">
                <p>
                    You are the Bloomwrought, the survivors of humanity's collapse. Among you walk Soldiers who guard the remnants, Drifters who scavenge the wilds, and Scholars who seek to understand what was lost. All of you affected by the Bloom.
                </p>
            </Section>

            <Section title="The Calamity">
                <p>
                    The Bloom was a cataclysm that transformed the world beyond recognition. In its wake, alien flora and fauna consumed the familiar earth, reshaping it into something hostile and strange. This new world is called the Verdant, a sprawling jungle of twisted vegetation and creatures that bear no resemblance to what came before.
                </p>
            </Section>

            <Section title="The Seraphs">
                <p>
                    Piercing the skies stand the Seraphs, towering spires of metal that hum in the night. These monuments are all that remain of humanity's greatest achievements, silent testaments to the hubris that brought about the Bloom. They loom over the Verdant as both warning and memory.
                </p>
            </Section>

            <Section title="Survival and Currency">
                <p className="mb-4">
                    In the Verdant, survival hinges on a simple truth: most of what grows and lives here cannot be eaten. The scarcity of edible food has transformed it into the new currency. What remains of the old world's government maintains order through a strict rationing system, controlling the flow of sustenance to the surviving population.
                </p>
                <p>
                    Sanctioned Artisans serve a crucial role in this economy. They manufacture <strong className="text-verdant-600 dark:text-verdant-400">Bricks</strong>, dense packets of hardened nutrient paste that serve as the foundation of trade. These Bricks can be exchanged for better-tasting provisions, essential services, or coveted goods. In the harshest times, when trade is impossible, survivors eat the Bricks raw, enduring their characteristically sour taste as the price of another day alive.
                </p>
            </Section>

            <Section title="The People">
                <p className="mb-8">
                    Humanity has fractured into several subspecies that have adapted to their environment in different ways.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <RaceCard
                        name="Humans"
                        description="The standard human race adapted to the new world."
                    />
                    <RaceCard
                        name="Velari"
                        description="A race of humans ostracized by the masses for their need for blood and their leech-like mouthparts."
                    />
                    <RaceCard
                        name="Myrians"
                        description="A race of Krik half-breeds, they have insectoid features and are known for their many legs and enhanced strength."
                    />
                    <RaceCard
                        name="Kriks"
                        description="A race of humanoid insects, it is not sure where they came from but they have integrated into human society since the calamity."
                    />
                    <RaceCard
                        name="Sylvans"
                        description="A race of plant-like humanoids, they are known for their connection to nature and their ability to communicate with plants."
                    />
                    <RaceCard
                        name="Golems"
                        description="A race of sapient automatons, created by humans before the calamity to serve as workers and soldiers. They are now free and independent, but still serve humanity in their own way."
                    />
                </div>
            </Section>
        </div>
    );
}
