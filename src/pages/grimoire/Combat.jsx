const Section = ({ title, children }) => (
    <section className="mb-12 scroll-mt-24" id={title.toLowerCase().replace(/\s+/g, '-')}>
        <h2 className="text-3xl font-display font-bold mb-6 text-verdant-800 dark:text-verdant-300 border-b border-verdant-200 dark:border-verdant-800 pb-2">
            {title}
        </h2>
        <div className="prose prose-lg dark:prose-invert prose-verdant max-w-none text-zinc-700 dark:text-zinc-300">
            {children}
        </div>
    </section>
);

export default function Combat() {
    return (
        <div>
            <h1 className="font-display text-4xl md:text-5xl mb-8 text-verdant-900 dark:text-verdant-50">Combat & Rules</h1>

            <Section title="The Core Mechanic">
                <p>
                    Combat revolves around <strong>Tags</strong>, which are modifiers that determine the effect of attacks. Each tag is unique, and weaving these together to create combos is necessary for success.
                </p>
                <div className="bg-verdant-50 dark:bg-verdant-900/30 p-4 rounded-lg border-l-4 border-verdant-500 my-4">
                    <p className="italic m-0">
                        <strong>Tags and Actions</strong> are modifiers and bases for your attack that you can weave together using <strong>EFFORT</strong>.
                    </p>
                </div>
                <p>
                    All characters start with <strong>2 EFFORT</strong>. Applying a tag to your action costs <strong>1 EFFORT</strong>. A tag cannot be applied more than one time per action.
                </p>
            </Section>

            <Section title="Stances">
                <p>
                    By default, characters cannot gain EFFORT unless they choose a <strong>Stance</strong>. Each stance grants a different way to generate EFFORT.
                </p>

                <h3 className="text-xl font-bold mt-6 mb-2 text-verdant-700 dark:text-verdant-400">Variant Rule: Regenerative Effort</h3>
                <p>
                    With this optional rule, characters gain <strong>+1 EFFORT</strong> at the start of their turns. Stances do not provide a way to generate EFFORT under this rule, but still grant conditional tags.
                </p>
            </Section>

            <Section title="Initiative and Turns">
                <p>
                    Initiative is determined by a contested <strong>Wits</strong> roll against the leader of each group. The highest roll goes first.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Each player in the group can pass the turn to another player or enemy if they wish.</li>
                    <li>Passing to an enemy grants the character <strong>+1 EFFORT</strong>.</li>
                </ul>
                <p className="mt-4">
                    Each character in a turn has <strong>two actions</strong>. Attacking a second time has a penalty of <strong>-2</strong> to the attack roll.
                </p>
            </Section>

            <Section title="Attributes">
                <p>All attributes start at 0 and are modified with Ancestry and Background.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                    <div className="p-4 border border-zinc-200 dark:border-zinc-800 rounded-lg">
                        <strong className="text-verdant-700 dark:text-verdant-400 block mb-1">Might</strong>
                        <span className="text-sm">Physical power and force.</span>
                    </div>
                    <div className="p-4 border border-zinc-200 dark:border-zinc-800 rounded-lg">
                        <strong className="text-verdant-700 dark:text-verdant-400 block mb-1">Agility</strong>
                        <span className="text-sm">Speed, dexterity, and reflexes.</span>
                    </div>
                    <div className="p-4 border border-zinc-200 dark:border-zinc-800 rounded-lg">
                        <strong className="text-verdant-700 dark:text-verdant-400 block mb-1">Grit</strong>
                        <span className="text-sm">Endurance and willpower.</span>
                    </div>
                    <div className="p-4 border border-zinc-200 dark:border-zinc-800 rounded-lg">
                        <strong className="text-verdant-700 dark:text-verdant-400 block mb-1">Wits</strong>
                        <span className="text-sm">Intelligence and perception.</span>
                    </div>
                </div>
            </Section>
        </div>
    );
}
