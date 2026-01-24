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

const StanceCard = ({ name, generation, variantTags }) => (
    <div className="p-6 rounded-xl border border-verdant-100 dark:border-verdant-800 bg-white dark:bg-zinc-900/50 shadow-sm">
        <h3 className="text-2xl font-display font-bold text-verdant-700 dark:text-verdant-400 mb-2">{name}</h3>
        <p className="text-zinc-600 dark:text-zinc-400 mb-4 italic">{generation}</p>
        {variantTags && (
            <div className="space-y-3 mt-4 pt-4 border-t border-verdant-100 dark:border-verdant-800">
                <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-500">Variant Rule Tags</h4>
                <div className="grid gap-2">
                    {variantTags.map(tag => (
                        <div key={tag.name} className="text-sm">
                            <strong className="text-verdant-600 dark:text-verdant-400">{tag.name}:</strong> {tag.effect}
                        </div>
                    ))}
                </div>
            </div>
        )}
    </div>
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
                    <p className="italic m-0 text-verdant-900 dark:text-verdant-100">
                        <strong>Tags and Actions</strong> are modifiers and bases for your attack that you can weave together using <strong>EFFORT</strong>.
                    </p>
                </div>
                <p>
                    All characters start with <strong>2 EFFORT</strong>. Applying a tag to your action costs <strong>1 EFFORT</strong>. A tag cannot be applied more than one time per action.
                </p>
                <div className="p-4 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 mt-4 border border-zinc-200 dark:border-zinc-700 font-medium">
                    The maximum number of EFFORT you can have is equal to <strong>GRIT x 2</strong>.
                </div>
            </Section>

            <Section title="Stances">
                <p className="mb-6">
                    By default, characters cannot gain EFFORT unless they choose a <strong>Stance</strong>. Each stance grants a different way to generate EFFORT.
                </p>

                <div className="grid grid-cols-1 gap-6">
                    <StanceCard
                        name="Aggressive Stance"
                        generation="Grants +2 EFFORT per enemy slain."
                        variantTags={[
                            { name: "Momentum", effect: "You gain +1 SPEED per tag used with EFFORT." },
                            { name: "Berserker", effect: "You gain +1 DAMAGE per tag used with EFFORT." }
                        ]}
                    />
                    <StanceCard
                        name="Defensive Stance"
                        generation="Grants +1 EFFORT per attack evaded."
                        variantTags={[
                            { name: "Bulwark", effect: "Grant yourself +1 ARMOR as a reaction." },
                            { name: "Protection", effect: "As a reaction, guard an ally from damage. Damage is split between you and the ally." }
                        ]}
                    />
                    <StanceCard
                        name="Tactical Stance"
                        generation="Grants +1 EFFORT per enemy MARKED."
                        variantTags={[
                            { name: "Hunter", effect: "You gain a free action to apply MARKED to an enemy. This can be used once per combat." },
                            { name: "Opportunist", effect: "Enemies that are BLOODIED are also EXPOSED." }
                        ]}
                    />
                </div>

                <div className="mt-8 p-6 bg-verdant-50/50 dark:bg-verdant-900/10 rounded-xl border border-verdant-200 dark:border-verdant-800">
                    <h3 className="text-xl font-bold mb-2 text-verdant-700 dark:text-verdant-400 font-display">Variant Rule: Regenerative Effort</h3>
                    <p className="text-zinc-600 dark:text-zinc-400 m-0">
                        With this optional rule, characters gain <strong>+1 EFFORT</strong> at the start of their turns. Stances now do not provide a way to generate EFFORT, but instead grant the conditional tags listed above.
                    </p>
                </div>
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
                    {[
                        { name: "Might", effect: "Physical power and force." },
                        { name: "Agility", effect: "Speed, dexterity, and reflexes." },
                        { name: "Grit", effect: "Endurance and willpower. Affects max EFFORT." },
                        { name: "Wits", effect: "Intelligence and perception. Affects initiative." }
                    ].map(attr => (
                        <div key={attr.name} className="p-4 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-zinc-50/30 dark:bg-zinc-900/30">
                            <strong className="text-verdant-700 dark:text-verdant-400 block mb-1 font-display text-lg">{attr.name}</strong>
                            <span className="text-sm">{attr.effect}</span>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
}
