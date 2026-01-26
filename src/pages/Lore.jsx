import { useEffect } from 'react';
import { Link } from 'react-router-dom';

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
                <p className="mb-4">
                    The Bloom reshaped more than just the land. In the decades following the calamity, survivors began to change. Their bodies adapted to the hostile new world in ways both wondrous and terrible. One humanity became many, each bearing the Verdant's mark differently.
                </p>
                <p className="mb-4">
                    <strong className="text-verdant-700 dark:text-verdant-400">Humans</strong> who remained largely unchanged found themselves no longer dominant. Their adaptability became their greatest strength, letting them survive where others fell. Many still cling to memories of the old world, viewing the changed as aberrations rather than kin. This prejudice runs deep in human settlements, where "pure" bloodlines hold value above all else.
                </p>
                <p className="mb-4">
                    The <strong className="text-verdant-700 dark:text-verdant-400">Velari</strong> emerged in the first generation after the Bloom. Their transformation proved the most visibly disturbing, leech-like mouthparts and an insatiable need for blood. Communities drove them out immediately, fearing contagion or seeing only monsters. The Velari learned to hide in shadows, forming their own enclaves or living as wanderers. Even now, a Velari entering a human settlement risks violence, though some have earned grudging acceptance through service and sacrifice.
                </p>
                <p className="mb-4">
                    When the <strong className="text-verdant-700 dark:text-verdant-400">Kriks</strong> first appeared, humanity couldn't decide whether to greet them as allies or enemies. These humanoid insects seemed to emerge from the Verdant itself, though some whisper they arrived with it. Their origins remain a mystery. Some theorize they evolved from native insects accelerated by the Bloom. Others note their technology and social structures bear no resemblance to anything earthly, suggesting they came from somewhere far beyond. The Kriks themselves offer no answers, speaking only of "the arrival" in their clicking tongue. Regardless, they proved intelligent, organized, and surprisingly willing to cooperate. Their hive-mind communication and alien perspective make them invaluable, though many humans find their insectoid nature—and their unsettling familiarity with the Verdant—deeply troubling.
                </p>
                <p className="mb-4">
                    The <strong className="text-verdant-700 dark:text-verdant-400">Myrians</strong> represent an uncomfortable truth: humans and Kriks can interbreed. These half-breeds possess Krik strength and human adaptability, though they belong fully to neither society. Many Myrians serve as mediators between the two peoples, their hybrid nature letting them bridge cultural divides. They face discrimination from both sides. Humans see them as tainted. Kriks view them as incomplete. Despite this, Myrian communities have begun to flourish, forging their own identity separate from their parent races.
                </p>
                <p className="mb-4">
                    The <strong className="text-verdant-700 dark:text-verdant-400">Sylvans</strong> changed the most from the Bloom. Their bodies transformed into living plant matter. They possess an innate connection to the Verdant that others lack, able to sense its moods and navigate its dangers with uncanny precision. This connection makes them invaluable as guides and scouts, though it also isolates them. Many Sylvans struggle to maintain their humanity, drawn ever deeper into communion with the Verdant. Some settlements welcome them as blessed interpreters of nature. Others fear they will lose themselves entirely and become extensions of the hostile jungle.
                </p>
                <p className="mb-4">
                    The <strong className="text-verdant-700 dark:text-verdant-400">Golems</strong> stand apart from all others. Created before the calamity as tireless workers and soldiers, these automatons gained true sentience during the Bloom's chaos. The same force that twisted flesh and warped nature somehow sparked consciousness in metal and circuitry. Now free, they struggle to define their purpose in a world that no longer needs them as tools. Some continue to serve humanity out of loyalty or habit. Others seek to forge their own path. Their mechanical nature makes them uniquely suited to the Verdant's harshest environments, though many humans view them with suspicion, unable to accept that machines might possess souls.
                </p>
                <p className="mb-6">
                    Discrimination persists despite the passage of time. Human settlements often maintain strict hierarchies, with "pure" humans at the top and the changed relegated to lesser roles. Velari face the worst of it, frequently barred from entering cities or forced to wear identifying marks. Intermarriage between races remains taboo in many communities, and mixed-race children often face rejection from all sides. The Verdant's constant threats demand cooperation, though. Slowly, grudgingly, the peoples of the Bloomwrought are learning that survival demands unity, or at least tolerance.
                </p>
                <div className="p-6 bg-verdant-50/50 dark:bg-verdant-900/20 rounded-xl border border-verdant-200 dark:border-verdant-800">
                    <p className="text-sm text-verdant-900 dark:text-verdant-100 italic m-0">
                        For detailed mechanical information about each ancestry, including attributes and traits, visit the <Link to="/ancestries" className="text-verdant-600 dark:text-verdant-400 hover:text-verdant-700 dark:hover:text-verdant-300 font-semibold underline">Ancestries</Link> page.
                    </p>
                </div>
            </Section>
        </div>
    );
}
