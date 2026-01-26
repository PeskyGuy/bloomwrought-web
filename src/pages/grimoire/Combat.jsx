const Section = ({ title, children, id }) => (
    <section className="mb-12 scroll-mt-24" id={id || title.toLowerCase().replace(/\s+/g, '-')}>
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

const StatusEffect = ({ name, description }) => (
    <div className="p-4 border border-verdant-100 dark:border-verdant-900/50 rounded-lg bg-white dark:bg-zinc-900/20 shadow-sm">
        <strong className="text-verdant-800 dark:text-verdant-300 block mb-2 font-display text-lg">{name}</strong>
        <span className="text-sm text-zinc-600 dark:text-zinc-400">{description}</span>
    </div>
);

const TableRow = ({ roll, name, effect }) => (
    <tr className="border-b border-verdant-100 dark:border-verdant-800">
        <td className="py-3 px-4 font-bold text-verdant-700 dark:text-verdant-400">{roll}</td>
        <td className="py-3 px-4 font-semibold">{name}</td>
        <td className="py-3 px-4 text-sm text-zinc-600 dark:text-zinc-400">{effect}</td>
    </tr>
);

export default function Combat() {
    return (
        <div>
            <h1 className="font-display text-4xl md:text-5xl mb-8 text-verdant-900 dark:text-verdant-50">Combat & Rules</h1>

            <div className="bg-verdant-50 dark:bg-verdant-900/30 p-6 rounded-lg border-l-4 border-verdant-500 mb-8">
                <p className="italic m-0 text-verdant-900 dark:text-verdant-100">
                    Combat revolves around <strong>Tags</strong>, which are modifiers that determine the effect of attacks. Each tag is unique, and weaving these together to create combos is necessary for success.
                </p>
            </div>

            <Section title="Attributes">
                <p>All attributes are flat modifiers that range from <strong>-3 to +6</strong>. They start at 0 and are modified with Ancestry and Background.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                    {[
                        { name: "Might", effect: "Determines melee damage, carry weight, and allows the use of weapons with HEAVY. Represents raw physical power." },
                        { name: "Agility", effect: "Determines LIGHT weapons to hit value, SPEED in hexes, and contributes to Evasion. Represents reflexes and coordination." },
                        { name: "Grit", effect: "Determines your HP bonus when ranking up and base Health. Represents endurance and resilience." },
                        { name: "Wits", effect: "Determines Initiative order, ability to TRACK enemies, and tactical awareness. Represents perception and cunning." }
                    ].map(attr => (
                        <div key={attr.name} className="p-4 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-zinc-50/30 dark:bg-zinc-900/30">
                            <strong className="text-verdant-700 dark:text-verdant-400 block mb-1 font-display text-lg">{attr.name}</strong>
                            <span className="text-sm">{attr.effect}</span>
                        </div>
                    ))}
                </div>

                <h3 className="text-2xl font-display font-bold mt-8 mb-4 text-verdant-700 dark:text-verdant-400">Sub-attributes</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                        { name: "Speed", effect: "Formula: 4 + Agility" },
                        { name: "Armor", effect: "Flat damage reduction. Determined by equipment." },
                        { name: "Health", effect: "Formula: 10 + (Grit × 3) + Level" },
                        { name: "Evasion", effect: "Formula: 10 + Agility + (Wits ÷ 2, rounded down)" }
                    ].map(attr => (
                        <StatusEffect key={attr.name} name={attr.name} description={attr.effect} />
                    ))}
                </div>
            </Section>

            <Section title="Status Effects">
                <p>Status effects are conditions that modify how a character or enemy functions in combat. Multiple status effects can be active at once unless otherwise specified.</p>
                <div className="grid grid-cols-1 gap-4 mt-6">
                    {[
                        { name: "TRACKED", effect: "The target has been marked for focused attacks. Certain weapons and abilities gain bonuses against TRACKED targets." },
                        { name: "EXPOSED", effect: "The target's defenses are compromised. Attacks against EXPOSED targets have advantage. Removed at the end of the target's next turn." },
                        { name: "PRONE", effect: "The target is knocked to the ground. While PRONE, the target has -2 to attack rolls and melee attacks against them have advantage. Standing up costs 1 action and half your movement." },
                        { name: "RESTRAINED", effect: "The target is grabbed or entangled. Cannot move and has -2 to attack rolls and Evasion. The restrainer must use one action each turn to maintain it." },
                        { name: "WOUNDED", effect: "The target has taken significant damage. A creature becomes WOUNDED when reduced to half HP or less." },
                        { name: "FATIGUED", effect: "The character is exhausted. While FATIGUED, you have -2 to all rolls and your maximum STAMINA is reduced by half (rounded down)." },
                        { name: "DYING", effect: "The character has reached 0 HP and is on death's door. See the Dying section for full rules." }
                    ].map(status => (
                        <StatusEffect key={status.name} name={status.name} description={status.effect} />
                    ))}
                </div>
            </Section>

            <Section title="Advantage and Disadvantage">
                <p>Some situations give you an edge or put you at a disadvantage when making rolls.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="p-4 rounded-lg bg-verdant-50 dark:bg-verdant-900/30 border border-verdant-200 dark:border-verdant-800">
                        <strong className="text-verdant-800 dark:text-verdant-300 block mb-2 font-display">Advantage</strong>
                        <p className="text-sm m-0">Roll 3d6 and keep the highest 2 dice. Add your modifier as normal.</p>
                    </div>
                    <div className="p-4 rounded-lg bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
                        <strong className="text-zinc-800 dark:text-zinc-300 block mb-2 font-display">Disadvantage</strong>
                        <p className="text-sm m-0">Roll 3d6 and keep the lowest 2 dice. Add your modifier as normal.</p>
                    </div>
                </div>
                <p className="mt-4 text-sm italic">If you have both advantage and disadvantage on the same roll, they cancel out and you roll normally (2d6).</p>
            </Section>

            <Section title="Combat Basics">
                <h3 className="text-2xl font-display font-bold mb-4 text-verdant-700 dark:text-verdant-400">STAMINA</h3>
                <p>
                    STAMINA represents how much effort you can put into your actions. All characters start with <strong>2 STAMINA</strong>. Applying a tag to your action costs <strong>1 STAMINA</strong>. A tag cannot be applied more than one time.
                </p>
                <div className="p-4 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 mt-4 border border-zinc-200 dark:border-zinc-700 font-medium">
                    The maximum STAMINA you can have is equal to <strong>GRIT × 2</strong>.
                </div>
                <p className="mt-4">
                    When your STAMINA drops to 0, you gain <strong>FATIGUED</strong>. While FATIGUED, you have -2 to all rolls and your maximum STAMINA is reduced by half (rounded down).
                </p>

                <h3 className="text-2xl font-display font-bold mt-8 mb-4 text-verdant-700 dark:text-verdant-400">Initiative and Turns</h3>
                <p>
                    Initiative is determined by a contested <strong>Wits</strong> roll against the leader of each group. The highest roll goes first.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Each player in the group can pass the turn to another player or enemy if they wish.</li>
                    <li>Passing to an enemy grants the character <strong>+1 STAMINA</strong>.</li>
                    <li>Each character in a turn has <strong>two actions</strong>.</li>
                    <li>Attacking a second time has a penalty of <strong>-2</strong> to the attack roll.</li>
                </ul>
            </Section>

            <Section title="Stances">
                <p className="mb-6">
                    By default, characters cannot gain STAMINA unless they choose a <strong>Stance</strong>. Each stance grants a different way to generate STAMINA.
                </p>
                <p className="mb-6">
                    You choose your stance at the start of each combat as a free action. You can change your stance between combats freely, but changing stance mid-combat requires spending 1 action and costs 1 STAMINA.
                </p>

                <div className="grid grid-cols-1 gap-6">
                    <StanceCard
                        name="Feral Stance"
                        generation="Grants +1 STAMINA per enemy slain."
                        variantTags={[
                            { name: "Momentum", effect: "You gain +1 SPEED per additional tag applied to Movement." },
                            { name: "Berserker", effect: "You gain +1 DAMAGE per additional tag applied to a Strike." }
                        ]}
                    />
                    <StanceCard
                        name="Survivor Stance"
                        generation="Grants +1 STAMINA per attack taken."
                        variantTags={[
                            { name: "Bulwark", effect: "Grant yourself +1 ARMOR as a reaction." },
                            { name: "Protection", effect: "As a reaction, guard an ally from damage. Damage is split between you and the ally." }
                        ]}
                    />
                    <StanceCard
                        name="Hunter Stance"
                        generation="Grants +1 STAMINA per enemy TRACKED."
                        variantTags={[
                            { name: "Stalker", effect: "You gain a free action to apply TRACKED to an enemy. This can be used once per combat." },
                            { name: "Opportunist", effect: "Enemies that are WOUNDED are also EXPOSED." }
                        ]}
                    />
                </div>

                <div className="mt-8 p-6 bg-verdant-50/50 dark:bg-verdant-900/10 rounded-xl border border-verdant-200 dark:border-verdant-800">
                    <h3 className="text-xl font-bold mb-2 text-verdant-700 dark:text-verdant-400 font-display">Variant Rule: Regenerative Stamina</h3>
                    <p className="text-zinc-600 dark:text-zinc-400 m-0">
                        With this optional rule, characters gain <strong>+1 STAMINA</strong> at the start of their turns. Stances now do not provide a way to generate STAMINA, but instead grant the conditional tags listed above.
                    </p>
                </div>
            </Section>

            <Section title="Survival Systems">
                <h3 className="text-2xl font-display font-bold mb-4 text-verdant-700 dark:text-verdant-400">Hunger</h3>
                <p>
                    Hunger is tracked on a scale of 1-6, representing your character's current state of nourishment. After every <strong>2 combat encounters</strong>, reduce your Hunger by 1. When you consume a ration (1 Brick or equivalent food), increase your Hunger by 1 (maximum 6).
                </p>
                <div className="overflow-x-auto mt-6">
                    <table className="w-full border-collapse bg-white dark:bg-zinc-900/50 rounded-lg overflow-hidden shadow-sm">
                        <thead className="bg-verdant-100 dark:bg-verdant-900">
                            <tr>
                                <th className="py-3 px-4 text-left font-display text-verdant-900 dark:text-verdant-100">Level</th>
                                <th className="py-3 px-4 text-left font-display text-verdant-900 dark:text-verdant-100">Status</th>
                                <th className="py-3 px-4 text-left font-display text-verdant-900 dark:text-verdant-100">Effect</th>
                            </tr>
                        </thead>
                        <tbody>
                            <TableRow roll="6" name="Well Fed" effect="+1 maximum STAMINA" />
                            <TableRow roll="5" name="Satisfied" effect="No effect" />
                            <TableRow roll="4" name="Peckish" effect="No effect" />
                            <TableRow roll="3" name="Hungry" effect="-1 maximum STAMINA" />
                            <TableRow roll="2" name="Starving" effect="-2 maximum STAMINA, -1 to all rolls" />
                            <TableRow roll="1" name="Famished" effect="-3 maximum STAMINA, -2 to all rolls, lose 1 HP per hour" />
                        </tbody>
                    </table>
                </div>
                <p className="mt-4 text-sm italic">Characters start each session at Hunger level 4 (Peckish) unless otherwise specified.</p>
            </Section>

            <Section title="Injury and Death">
                <h3 className="text-2xl font-display font-bold mb-4 text-verdant-700 dark:text-verdant-400">Lingering Injuries</h3>
                <p>
                    When you take a critical hit (natural 12 on 2d6 attack roll against you), you suffer a Lingering Injury in addition to normal damage. Roll 1d6 to determine the injury:
                </p>
                <div className="overflow-x-auto mt-6">
                    <table className="w-full border-collapse bg-white dark:bg-zinc-900/50 rounded-lg overflow-hidden shadow-sm">
                        <thead className="bg-verdant-100 dark:bg-verdant-900">
                            <tr>
                                <th className="py-3 px-4 text-left font-display text-verdant-900 dark:text-verdant-100">Roll</th>
                                <th className="py-3 px-4 text-left font-display text-verdant-900 dark:text-verdant-100">Injury</th>
                                <th className="py-3 px-4 text-left font-display text-verdant-900 dark:text-verdant-100">Effect</th>
                            </tr>
                        </thead>
                        <tbody>
                            <TableRow roll="1" name="Broken Limb" effect="-2 SPEED, disadvantage on MIGHT checks" />
                            <TableRow roll="2" name="Concussion" effect="-2 to Initiative, disadvantage on WITS checks" />
                            <TableRow roll="3" name="Deep Wound" effect="Lose 1 HP at the start of each combat round" />
                            <TableRow roll="4" name="Shattered Ribs" effect="Maximum HP reduced by 3" />
                            <TableRow roll="5" name="Torn Muscle" effect="-2 to attack rolls" />
                            <TableRow roll="6" name="Infected Wound" effect="-1 to all rolls, spreads to another injury after 3 days" />
                        </tbody>
                    </table>
                </div>
                <p className="mt-4">
                    Lingering Injuries can be treated with medical supplies (requires a Use action and Medical Supplies tool). Each character can only have one Lingering Injury at a time. <strong>If you would gain a second, you instead go down immediately.</strong>
                </p>

                <h3 className="text-2xl font-display font-bold mt-8 mb-4 text-verdant-700 dark:text-verdant-400">Critical Fumbles</h3>
                <p>
                    When you roll a natural 2 (1 on each d6) on an attack roll, you critically fumble. Enemies can use the EXPLOIT reaction against you. You also drop your weapon, which lands in an adjacent hex.
                </p>
                <div className="mt-6 p-6 bg-verdant-50/50 dark:bg-verdant-900/10 rounded-xl border border-verdant-200 dark:border-verdant-800">
                    <h4 className="text-lg font-bold mb-3 text-verdant-700 dark:text-verdant-400 font-display">Variant Rule: Severe Fumbles</h4>
                    <p className="mb-4 text-sm">With this optional rule, critical fumbles have additional consequences. When you fumble, roll 1d6:</p>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse bg-white dark:bg-zinc-900/50 rounded-lg overflow-hidden shadow-sm text-sm">
                            <tbody>
                                <TableRow roll="1" name="Weapon Jammed" effect="Weapon unusable until you spend an action to clear it" />
                                <TableRow roll="2" name="Pulled Muscle" effect="-1 to attack rolls until end of combat" />
                                <TableRow roll="3" name="Lost Footing" effect="You fall PRONE and drop your weapon" />
                                <TableRow roll="4" name="Friendly Fire" effect="Hit nearest ally for half weapon damage" />
                                <TableRow roll="5" name="Exposed" effect="Enemies have advantage on attacks against you this round" />
                                <TableRow roll="6" name="Equipment Break" effect="A piece of armor or gear breaks, loses its benefit" />
                            </tbody>
                        </table>
                    </div>
                </div>
            </Section>

            <Section title="Dying">
                <p>When you reach 0 HP, you fall DYING. While DYING:</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>You can crawl up to 1 hex per action</li>
                    <li>You can make attacks at -3 to hit</li>
                    <li>You cannot use STAMINA or apply tags</li>
                    <li>You gain 1 DESPERATION token (first time per combat only)</li>
                </ul>
                <p className="mt-4">At the start of each of your turns while DYING, roll 1d6:</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
                        <strong className="text-red-800 dark:text-red-300 block mb-2 font-display">1-2: Death Mark</strong>
                        <p className="text-sm m-0">You gain one Death Mark. Three Death Marks = permanent death.</p>
                    </div>
                    <div className="p-4 rounded-lg bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800">
                        <strong className="text-yellow-800 dark:text-yellow-300 block mb-2 font-display">3-5: Stabilize</strong>
                        <p className="text-sm m-0">You stabilize but remain DYING.</p>
                    </div>
                    <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
                        <strong className="text-green-800 dark:text-green-300 block mb-2 font-display">6: Recover</strong>
                        <p className="text-sm m-0">You regain 1 HP and are no longer DYING.</p>
                    </div>
                </div>
                <p className="mt-4">
                    You can be stabilized by an ally using a Use action and succeeding on a <strong>WITS check (difficulty 8)</strong>. Healing restores you from DYING immediately.
                </p>
            </Section>

            <Section title="Desperation">
                <p>
                    When you go DYING for the first time in a combat encounter, you gain 1 DESPERATION token. These tokens represent the primal will to survive when death is near. DESPERATION tokens persist between combats but are lost when you take a full rest. Maximum DESPERATION tokens you can hold equals your GRIT (minimum 1).
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    <div className="p-6 rounded-xl border-2 border-verdant-200 dark:border-verdant-800 bg-verdant-50/50 dark:bg-verdant-900/20">
                        <h4 className="text-lg font-bold mb-3 text-verdant-800 dark:text-verdant-300 font-display">Spend 1 DESPERATION</h4>
                        <ul className="space-y-2 text-sm">
                            <li>• Automatically stabilize (no death roll this turn)</li>
                            <li>• Stand up from DYING with 1 HP as a free action</li>
                            <li>• Reroll any single attack or check</li>
                        </ul>
                    </div>
                    <div className="p-6 rounded-xl border-2 border-verdant-300 dark:border-verdant-700 bg-verdant-100/50 dark:bg-verdant-900/30">
                        <h4 className="text-lg font-bold mb-3 text-verdant-800 dark:text-verdant-300 font-display">Spend 2 DESPERATION</h4>
                        <ul className="space-y-2 text-sm">
                            <li>• Ignore FATIGUED or one Lingering Injury for one combat</li>
                            <li>• Gain +2 STAMINA immediately</li>
                            <li>• Force an enemy to reroll their attack against you</li>
                        </ul>
                    </div>
                    <div className="p-6 rounded-xl border-2 border-verdant-400 dark:border-verdant-600 bg-verdant-200/50 dark:bg-verdant-900/40">
                        <h4 className="text-lg font-bold mb-3 text-verdant-800 dark:text-verdant-300 font-display">Spend 3 DESPERATION</h4>
                        <ul className="space-y-2 text-sm">
                            <li>• Return to combat with half your maximum HP (only while DYING)</li>
                            <li>• Take an extra full turn immediately after this one</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-6 p-4 bg-zinc-100 dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700">
                    <p className="text-sm m-0"><strong>Important:</strong> You can only gain 1 DESPERATION token per combat encounter, regardless of how many times you go DYING. You cannot spend DESPERATION to avoid your first Death Mark in a combat.</p>
                </div>
            </Section>

            <Section title="Rest and Recovery">
                <h3 className="text-2xl font-display font-bold mb-4 text-verdant-700 dark:text-verdant-400">Full Rest</h3>
                <p>A full rest requires 8 hours of uninterrupted sleep in a safe location. During a full rest:</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Restore all HP (unless you have a Lingering Injury that prevents healing)</li>
                    <li>Remove FATIGUED status (if you also consume a ration)</li>
                    <li>Lose all DESPERATION tokens</li>
                    <li>STAMINA resets to starting value (2)</li>
                </ul>
                <p className="mt-4 italic">Lingering Injuries are NOT removed by rest - they require medical treatment.</p>

                <h3 className="text-2xl font-display font-bold mt-8 mb-4 text-verdant-700 dark:text-verdant-400">Short Rest</h3>
                <p>A short rest requires 1 hour of downtime. During a short rest:</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Restore HP equal to your GRIT</li>
                    <li>You can consume rations to increase Hunger</li>
                    <li>You can treat wounds with medical supplies</li>
                </ul>

                <h3 className="text-2xl font-display font-bold mt-8 mb-4 text-verdant-700 dark:text-verdant-400">Between Combats</h3>
                <p>After combat ends, characters:</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Keep their current STAMINA (does not reset)</li>
                    <li>Keep all status effects unless specified otherwise</li>
                    <li>Can change their stance as a free action before the next combat</li>
                    <li>Track combat encounters for Hunger (every 2 combats = -1 Hunger)</li>
                </ul>
            </Section>

            <Section title="Quick Reference">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl bg-verdant-50 dark:bg-verdant-900/30 border border-verdant-200 dark:border-verdant-800">
                        <h3 className="text-xl font-bold mb-4 text-verdant-800 dark:text-verdant-300 font-display">Critical Rolls</h3>
                        <ul className="space-y-2 text-sm">
                            <li><strong>Critical Hit:</strong> Natural 12 (6 on both d6) - Max damage + roll again. Target gains Lingering Injury.</li>
                            <li><strong>Critical Fumble:</strong> Natural 2 (1 on both d6) - Drop weapon, enemies can EXPLOIT.</li>
                        </ul>
                    </div>
                    <div className="p-6 rounded-xl bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800">
                        <h3 className="text-xl font-bold mb-4 text-zinc-800 dark:text-zinc-300 font-display">Starting Values</h3>
                        <ul className="space-y-2 text-sm">
                            <li><strong>STAMINA:</strong> 2 (max = GRIT × 2)</li>
                            <li><strong>Hunger:</strong> 4 (Peckish)</li>
                            <li><strong>Actions per Turn:</strong> 2</li>
                            <li><strong>DESPERATION:</strong> 0 (max = GRIT, min 1)</li>
                        </ul>
                    </div>
                    <div className="p-6 rounded-xl bg-verdant-50 dark:bg-verdant-900/30 border border-verdant-200 dark:border-verdant-800">
                        <h3 className="text-xl font-bold mb-4 text-verdant-800 dark:text-verdant-300 font-display">Key Formulas</h3>
                        <ul className="space-y-2 text-sm">
                            <li><strong>Health:</strong> 10 + (GRIT × 3) + Level</li>
                            <li><strong>Evasion:</strong> 10 + AGILITY + (WITS ÷ 2)</li>
                            <li><strong>Speed:</strong> 4 + AGILITY</li>
                        </ul>
                    </div>
                    <div className="p-6 rounded-xl bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800">
                        <h3 className="text-xl font-bold mb-4 text-zinc-800 dark:text-zinc-300 font-display">Death Mechanics</h3>
                        <ul className="space-y-2 text-sm">
                            <li><strong>0 HP:</strong> Fall DYING</li>
                            <li><strong>Death Marks:</strong> 3 = permanent death</li>
                            <li><strong>Death Roll:</strong> 1-2 = Mark, 3-5 = stabilize, 6 = recover 1 HP</li>
                            <li><strong>Stabilize Check:</strong> WITS vs difficulty 8</li>
                        </ul>
                    </div>
                </div>
            </Section>
        </div>
    );
}
