import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ancestryData = {
    humans: { 
        name: "Human", 
        might: 1, 
        agility: 0, 
        grit: 1, 
        wits: 0,
        traits: [
            "Versatile: Gain +1 to any attribute of your choice at character creation",
            "Resourceful: Once per session, reroll a failed skill check"
        ]
    },
    velari: { 
        name: "Velari", 
        might: 0, 
        agility: 2, 
        grit: 1, 
        wits: -1,
        traits: [
            "Bloodthirst: Gain temporary HP equal to damage dealt with bite attacks",
            "Night Vision: See perfectly in darkness",
            "Parasitic: Must consume blood regularly or suffer penalties"
        ]
    },
    myrians: { 
        name: "Myrian", 
        might: 2, 
        agility: 0, 
        grit: 1, 
        wits: -1,
        traits: [
            "Multi-limbed: Can carry additional items without penalty",
            "Chitinous Hide: Natural +1 Armor",
            "Hybrid Nature: Can communicate with both humans and Kriks"
        ]
    },
    kriks: { 
        name: "Krik", 
        might: 1, 
        agility: 1, 
        grit: 0, 
        wits: 1,
        traits: [
            "Hive Mind: Can communicate telepathically with other Kriks within 100 feet",
            "Compound Eyes: Advantage on perception checks",
            "Exoskeleton: Resistance to poison damage"
        ]
    },
    sylvans: { 
        name: "Sylvan", 
        might: -1, 
        agility: 0, 
        grit: 2, 
        wits: 1,
        traits: [
            "Photosynthesis: Regain 1 HP per hour in sunlight",
            "Plant Speech: Can communicate with and sense through plants",
            "Rooted: Advantage on checks to resist being moved"
        ]
    },
    golems: { 
        name: "Golem", 
        might: 2, 
        agility: -1, 
        grit: 2, 
        wits: 0,
        traits: [
            "Constructed: Do not need to eat, sleep, or breathe",
            "Tireless: Immune to exhaustion",
            "Mechanical: Vulnerable to effects that target constructs"
        ]
    }
};

export default function CharacterSheet() {
    const navigate = useNavigate();
    const [character, setCharacter] = useState(null);
    const [currentHP, setCurrentHP] = useState(0);
    const [currentStamina, setCurrentStamina] = useState(0);
    const [currentHunger, setCurrentHunger] = useState(6);
    const [rollResult, setRollResult] = useState(null);
    const [rollFading, setRollFading] = useState(false);

    useEffect(() => {
        const activeId = localStorage.getItem('bloomwrought_active_character');
        if (activeId) {
            const saved = localStorage.getItem('bloomwrought_characters');
            if (saved) {
                const characters = JSON.parse(saved);
                const active = characters.find(c => c.id === activeId);
                if (active) {
                    setCharacter(active);
                    setCurrentHP(active.currentHP !== undefined ? active.currentHP : active.hp);
                    setCurrentStamina(active.currentStamina !== undefined ? active.currentStamina : active.stamina);
                    setCurrentHunger(active.currentHunger !== undefined ? active.currentHunger : active.hunger);
                }
            }
        }
    }, []);

    const updateCharacter = (updates) => {
        if (!character) return;
        
        const saved = localStorage.getItem('bloomwrought_characters');
        if (saved) {
            const characters = JSON.parse(saved);
            const updated = characters.map(c => 
                c.id === character.id ? { ...c, ...updates } : c
            );
            localStorage.setItem('bloomwrought_characters', JSON.stringify(updated));
            setCharacter({ ...character, ...updates });
        }
    };

    const updateHP = (newHP) => {
        setCurrentHP(newHP);
        updateCharacter({ currentHP: newHP });
    };

    const updateStamina = (newStamina) => {
        setCurrentStamina(newStamina);
        updateCharacter({ currentStamina: newStamina });
    };

    const updateHunger = (newHunger) => {
        setCurrentHunger(newHunger);
        updateCharacter({ currentHunger: newHunger });
    };

    const rollDice = (numDice, modifier = 0, label = '') => {
        const rolls = [];
        for (let i = 0; i < numDice; i++) {
            rolls.push(Math.floor(Math.random() * 6) + 1);
        }
        const total = rolls.reduce((sum, roll) => sum + roll, 0) + modifier;
        
        setRollFading(false);
        setRollResult({
            label,
            rolls,
            modifier,
            total,
            timestamp: Date.now()
        });

        // Start fade out after 4 seconds
        setTimeout(() => setRollFading(true), 4000);
        // Remove after fade completes
        setTimeout(() => setRollResult(null), 4500);
    };

    const rollWeapon = (weapon) => {
        // Parse damage like "1d8 + MIGHT" or "2d6"
        const damageStr = weapon.damage.split('/')[0].trim(); // Take first damage value if multiple
        const match = damageStr.match(/(\d+)d(\d+)/);
        
        if (match) {
            const numDice = parseInt(match[1]);
            const diceSize = parseInt(match[2]);
            
            // Roll to-hit (2d6 + relevant attribute)
            const toHitRolls = [
                Math.floor(Math.random() * 6) + 1,
                Math.floor(Math.random() * 6) + 1
            ];
            
            // Determine which attribute to use for to-hit
            let toHitModifier = 0;
            if (damageStr.includes('AGILITY')) {
                toHitModifier = character.finalAttributes.agility;
            } else {
                toHitModifier = character.finalAttributes.might;
            }
            const toHitTotal = toHitRolls.reduce((sum, roll) => sum + roll, 0) + toHitModifier;
            
            // Roll damage dice
            const damageRolls = [];
            for (let i = 0; i < numDice; i++) {
                damageRolls.push(Math.floor(Math.random() * diceSize) + 1);
            }
            
            // Add attribute modifier to damage if present
            let damageModifier = 0;
            if (damageStr.includes('MIGHT')) {
                damageModifier = character.finalAttributes.might;
            } else if (damageStr.includes('AGILITY')) {
                damageModifier = character.finalAttributes.agility;
            }
            
            const damageTotal = damageRolls.reduce((sum, roll) => sum + roll, 0) + damageModifier;
            
            setRollFading(false);
            setRollResult({
                label: weapon.name,
                type: 'weapon',
                toHit: {
                    rolls: toHitRolls,
                    modifier: toHitModifier,
                    total: toHitTotal
                },
                damage: {
                    rolls: damageRolls,
                    modifier: damageModifier,
                    total: damageTotal
                },
                timestamp: Date.now()
            });

            setTimeout(() => setRollFading(true), 4000);
            setTimeout(() => setRollResult(null), 4500);
        }
    };

    const useItem = (item) => {
        // Check if it's a healing item
        if (item.effect && (item.effect.includes('Restore') || item.effect.includes('HEALTH'))) {
            // Parse healing like "Restore 1d4 HEALTH" or "Restore 2d6 HEALTH"
            const match = item.effect.match(/(\d+)d(\d+)/);
            
            if (match) {
                const numDice = parseInt(match[1]);
                const diceSize = parseInt(match[2]);
                
                // Roll healing dice
                const rolls = [];
                for (let i = 0; i < numDice; i++) {
                    rolls.push(Math.floor(Math.random() * diceSize) + 1);
                }
                
                const total = rolls.reduce((sum, roll) => sum + roll, 0);
                
                setRollFading(false);
                setRollResult({
                    label: `${item.name} - Healing`,
                    type: 'healing',
                    rolls,
                    modifier: 0,
                    total,
                    effect: item.effect,
                    timestamp: Date.now()
                });

                setTimeout(() => setRollFading(true), 4000);
                setTimeout(() => setRollResult(null), 4500);
                return;
            }
        }
        
        // For non-healing items, just show effect
        setRollFading(false);
        setRollResult({
            label: `Used ${item.name}`,
            type: 'effect',
            rolls: [],
            modifier: 0,
            total: 0,
            effect: item.effect || item.properties,
            timestamp: Date.now()
        });

        setTimeout(() => setRollFading(true), 4000);
        setTimeout(() => setRollResult(null), 4500);
    };

    const rollAttribute = (attrName) => {
        if (!character) return;
        const modifier = character.finalAttributes[attrName];
        rollDice(2, modifier, attrName.toUpperCase());
    };

    const importCharacter = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const imported = JSON.parse(e.target.result);
                    const newChar = {
                        ...imported,
                        id: Date.now().toString()
                    };
                    
                    const saved = localStorage.getItem('bloomwrought_characters');
                    const characters = saved ? JSON.parse(saved) : [];
                    characters.push(newChar);
                    
                    localStorage.setItem('bloomwrought_characters', JSON.stringify(characters));
                    localStorage.setItem('bloomwrought_active_character', newChar.id);
                    
                    setCharacter(newChar);
                    setCurrentHP(newChar.hp);
                    setCurrentStamina(newChar.stamina);
                    setCurrentHunger(newChar.hunger);
                } catch (error) {
                    alert('Invalid character file');
                }
            };
            reader.readAsText(file);
        }
    };

    if (!character) {
        return (
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
                <h1 className="text-4xl font-display font-bold mb-8 text-verdant-900 dark:text-verdant-50">
                    Character Sheet
                </h1>
                <p className="text-zinc-600 dark:text-zinc-400 mb-6">No character loaded.</p>
                <div className="flex gap-4 justify-center">
                    <button
                        onClick={() => navigate('/character-manager')}
                        className="px-6 py-3 rounded-lg bg-verdant-600 hover:bg-verdant-700 text-white font-medium transition-colors"
                    >
                        Character Manager
                    </button>
                    <label className="px-6 py-3 rounded-lg border border-verdant-600 text-verdant-600 dark:text-verdant-400 hover:bg-verdant-50 dark:hover:bg-verdant-900/30 font-medium transition-colors cursor-pointer">
                        Import Character
                        <input type="file" accept=".json" onChange={importCharacter} className="hidden" />
                    </label>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Roll Result Display */}
            {rollResult && (
                <div className={`fixed top-24 right-8 z-50 transition-opacity duration-500 ${rollFading ? 'opacity-0' : 'opacity-100'}`}>
                    <div className="bg-verdant-600 text-white rounded-xl p-6 shadow-2xl border-2 border-verdant-400 min-w-[280px]">
                        <div className="text-sm uppercase tracking-wider mb-3 opacity-90 font-bold">{rollResult.label}</div>
                        
                        {/* Weapon Roll - Compact Display */}
                        {rollResult.type === 'weapon' && (
                            <div className="space-y-3">
                                {/* To Hit */}
                                <div className="bg-white/10 rounded-lg p-3">
                                    <div className="text-xs uppercase tracking-wider mb-2 opacity-75">To Hit</div>
                                    <div className="flex items-center gap-2">
                                        {rollResult.toHit.rolls.map((roll, i) => (
                                            <div key={i} className="w-8 h-8 bg-white text-verdant-900 rounded flex items-center justify-center text-sm font-bold">
                                                {roll}
                                            </div>
                                        ))}
                                        {rollResult.toHit.modifier !== 0 && (
                                            <span className="text-lg font-bold">
                                                {rollResult.toHit.modifier > 0 ? '+' : ''}{rollResult.toHit.modifier}
                                            </span>
                                        )}
                                        <span className="text-lg font-bold ml-auto">= {rollResult.toHit.total}</span>
                                    </div>
                                </div>
                                
                                {/* Damage */}
                                <div className="bg-white/10 rounded-lg p-3">
                                    <div className="text-xs uppercase tracking-wider mb-2 opacity-75">Damage</div>
                                    <div className="flex items-center gap-2">
                                        {rollResult.damage.rolls.map((roll, i) => (
                                            <div key={i} className="w-8 h-8 bg-white text-verdant-900 rounded flex items-center justify-center text-sm font-bold">
                                                {roll}
                                            </div>
                                        ))}
                                        {rollResult.damage.modifier !== 0 && (
                                            <span className="text-lg font-bold">
                                                {rollResult.damage.modifier > 0 ? '+' : ''}{rollResult.damage.modifier}
                                            </span>
                                        )}
                                        <span className="text-lg font-bold ml-auto">= {rollResult.damage.total}</span>
                                    </div>
                                </div>
                            </div>
                        )}
                        
                        {/* Healing Roll */}
                        {rollResult.type === 'healing' && (
                            <>
                                <div className="flex items-center gap-3 mb-2">
                                    {rollResult.rolls.map((roll, i) => (
                                        <div key={i} className="w-12 h-12 bg-white text-verdant-900 rounded-lg flex items-center justify-center text-xl font-bold">
                                            {roll}
                                        </div>
                                    ))}
                                </div>
                                <div className="text-3xl font-bold border-t-2 border-verdant-400 pt-2 mb-2">
                                    Heal: {rollResult.total} HP
                                </div>
                                <div className="text-xs opacity-75 mt-2">
                                    {rollResult.effect}
                                </div>
                            </>
                        )}
                        
                        {/* Attribute Roll */}
                        {rollResult.type !== 'weapon' && rollResult.type !== 'healing' && rollResult.type !== 'effect' && rollResult.rolls.length > 0 && (
                            <>
                                <div className="flex items-center gap-3 mb-2">
                                    {rollResult.rolls.map((roll, i) => (
                                        <div key={i} className="w-12 h-12 bg-white text-verdant-900 rounded-lg flex items-center justify-center text-xl font-bold">
                                            {roll}
                                        </div>
                                    ))}
                                    {rollResult.modifier !== 0 && (
                                        <div className="text-2xl font-bold">
                                            {rollResult.modifier > 0 ? '+' : ''}{rollResult.modifier}
                                        </div>
                                    )}
                                </div>
                                <div className="text-3xl font-bold border-t-2 border-verdant-400 pt-2">
                                    Total: {rollResult.total}
                                </div>
                            </>
                        )}
                        
                        {/* Effect Only */}
                        {rollResult.type === 'effect' && (
                            <div className="text-sm leading-relaxed max-w-xs">
                                {rollResult.effect}
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Header */}
            <div className="flex justify-between items-start mb-8">
                <div>
                    <h1 className="text-4xl font-display font-bold text-verdant-900 dark:text-verdant-50">
                        {character.name || 'Unnamed Character'}
                    </h1>
                    <p className="text-xl text-verdant-600 dark:text-verdant-400">
                        Level {character.level} {ancestryData[character.ancestry]?.name || character.ancestry}
                    </p>
                </div>
                <div className="flex gap-2">
                    <button
                        onClick={() => navigate('/character-manager')}
                        className="px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
                    >
                        All Characters
                    </button>
                    <button
                        onClick={() => navigate(`/character-creator?edit=${character.id}`)}
                        className="px-4 py-2 rounded-lg border border-verdant-600 text-verdant-600 dark:text-verdant-400 hover:bg-verdant-50 dark:hover:bg-verdant-900/30 transition-colors"
                    >
                        Edit Character
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column - Attributes */}
                <div className="space-y-6">
                    <div className="bg-white dark:bg-zinc-900/50 rounded-xl p-6 border border-verdant-200 dark:border-verdant-800">
                        <h2 className="text-2xl font-display font-bold mb-4 text-verdant-800 dark:text-verdant-300">
                            Attributes
                        </h2>
                        <div className="space-y-3">
                            {Object.entries(character.finalAttributes).map(([attr, value]) => (
                                <button
                                    key={attr}
                                    onClick={() => rollAttribute(attr)}
                                    className="w-full flex justify-between items-center p-3 rounded-lg bg-verdant-50 dark:bg-verdant-900/30 hover:bg-verdant-100 dark:hover:bg-verdant-900/50 border border-verdant-200 dark:border-verdant-800 transition-colors"
                                >
                                    <span className="uppercase tracking-wider text-sm font-medium text-zinc-700 dark:text-zinc-300">
                                        {attr}
                                    </span>
                                    <span className={`text-xl font-bold ${
                                        value > 0 ? 'text-green-600 dark:text-green-400' :
                                        value < 0 ? 'text-red-600 dark:text-red-400' :
                                        'text-zinc-600 dark:text-zinc-400'
                                    }`}>
                                        {value > 0 ? '+' : ''}{value}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Ancestry Tags */}
                    <div className="bg-white dark:bg-zinc-900/50 rounded-xl p-6 border border-verdant-200 dark:border-verdant-800">
                        <h2 className="text-2xl font-display font-bold mb-4 text-verdant-800 dark:text-verdant-300">
                            Ancestry Tags
                        </h2>
                        <div className="space-y-2">
                            {ancestryData[character.ancestry]?.traits.map((trait, index) => (
                                <div key={index} className="p-3 rounded-lg bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800">
                                    <span className="text-sm text-zinc-700 dark:text-zinc-300">{trait}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Resources */}
                    <div className="bg-white dark:bg-zinc-900/50 rounded-xl p-6 border border-verdant-200 dark:border-verdant-800">
                        <h2 className="text-2xl font-display font-bold mb-4 text-verdant-800 dark:text-verdant-300">
                            Resources
                        </h2>
                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between mb-2">
                                    <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">HP</span>
                                    <span className="text-sm font-bold text-verdant-600 dark:text-verdant-400">
                                        {currentHP} / {character.hp}
                                    </span>
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => updateHP(Math.max(0, currentHP - 1))}
                                        className="flex-1 px-3 py-1 rounded bg-red-600 hover:bg-red-700 text-white text-sm transition-colors"
                                    >
                                        -1
                                    </button>
                                    <button
                                        onClick={() => updateHP(Math.min(character.hp, currentHP + 1))}
                                        className="flex-1 px-3 py-1 rounded bg-green-600 hover:bg-green-700 text-white text-sm transition-colors"
                                    >
                                        +1
                                    </button>
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between mb-2">
                                    <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">STAMINA</span>
                                    <span className="text-sm font-bold text-verdant-600 dark:text-verdant-400">
                                        {currentStamina} / {character.stamina}
                                    </span>
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => updateStamina(Math.max(0, currentStamina - 1))}
                                        className="flex-1 px-3 py-1 rounded bg-red-600 hover:bg-red-700 text-white text-sm transition-colors"
                                    >
                                        -1
                                    </button>
                                    <button
                                        onClick={() => updateStamina(Math.min(character.stamina, currentStamina + 1))}
                                        className="flex-1 px-3 py-1 rounded bg-green-600 hover:bg-green-700 text-white text-sm transition-colors"
                                    >
                                        +1
                                    </button>
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between mb-2">
                                    <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Hunger</span>
                                    <span className="text-sm font-bold text-verdant-600 dark:text-verdant-400">
                                        {currentHunger} / 6
                                    </span>
                                </div>
                                <div className="flex gap-1">
                                    {[1, 2, 3, 4, 5, 6].map((level) => (
                                        <button
                                            key={level}
                                            onClick={() => updateHunger(level)}
                                            className={`flex-1 h-8 rounded transition-colors ${
                                                currentHunger >= level
                                                    ? 'bg-verdant-600 hover:bg-verdant-700'
                                                    : 'bg-zinc-300 dark:bg-zinc-700 hover:bg-zinc-400 dark:hover:bg-zinc-600'
                                            }`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Middle & Right Columns - Combat Stats & Info */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Combat Stats */}
                    <div className="bg-white dark:bg-zinc-900/50 rounded-xl p-6 border border-verdant-200 dark:border-verdant-800">
                        <h2 className="text-2xl font-display font-bold mb-4 text-verdant-800 dark:text-verdant-300">
                            Combat Stats
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="p-4 rounded-lg bg-verdant-50 dark:bg-verdant-900/30 border border-verdant-200 dark:border-verdant-800 text-center">
                                <div className="text-sm uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-1">Speed</div>
                                <div className="text-3xl font-bold text-verdant-600 dark:text-verdant-400">{character.speed}</div>
                            </div>
                            <div className="p-4 rounded-lg bg-verdant-50 dark:bg-verdant-900/30 border border-verdant-200 dark:border-verdant-800 text-center">
                                <div className="text-sm uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-1">Evasion</div>
                                <div className="text-3xl font-bold text-verdant-600 dark:text-verdant-400">{character.evasion}</div>
                            </div>
                            <div className="p-4 rounded-lg bg-verdant-50 dark:bg-verdant-900/30 border border-verdant-200 dark:border-verdant-800 text-center">
                                <div className="text-sm uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-1">Armor</div>
                                <div className="text-3xl font-bold text-verdant-600 dark:text-verdant-400">{character.armor}</div>
                            </div>
                            <div className="p-4 rounded-lg bg-verdant-50 dark:bg-verdant-900/30 border border-verdant-200 dark:border-verdant-800 text-center">
                                <div className="text-sm uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-1">Level</div>
                                <div className="text-3xl font-bold text-verdant-600 dark:text-verdant-400">{character.level}</div>
                            </div>
                        </div>
                    </div>

                    {/* Equipment */}
                    <div className="bg-white dark:bg-zinc-900/50 rounded-xl p-6 border border-verdant-200 dark:border-verdant-800">
                        <h2 className="text-2xl font-display font-bold mb-4 text-verdant-800 dark:text-verdant-300">
                            Equipment
                        </h2>
                        {character.equipment && character.equipment.length > 0 ? (
                            <div className="space-y-2">
                                {character.equipment.map((item, i) => (
                                    <div key={i} className="p-3 rounded-lg bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:border-verdant-400 dark:hover:border-verdant-600 transition-colors">
                                        <div className="flex justify-between items-start mb-2">
                                            <div className="flex-1">
                                                <div className="font-bold text-verdant-800 dark:text-verdant-200">{item.name}</div>
                                                <div className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">
                                                    {item.damage && <span className="mr-2">Damage: {item.damage}</span>}
                                                    {item.armor && <span className="mr-2">Armor: {item.armor}</span>}
                                                    {item.uses && <span className="mr-2">Uses: {item.uses}</span>}
                                                    {item.range && <span className="mr-2">Range: {item.range}</span>}
                                                </div>
                                            </div>
                                            {item.type === 'weapon' && (
                                                <button
                                                    onClick={() => rollWeapon(item)}
                                                    className="ml-2 px-3 py-1 rounded bg-verdant-600 hover:bg-verdant-700 text-white text-sm font-medium transition-colors"
                                                >
                                                    Roll
                                                </button>
                                            )}
                                            {(item.type === 'consumable' || item.type === 'tool') && (
                                                <button
                                                    onClick={() => useItem(item)}
                                                    className="ml-2 px-3 py-1 rounded bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-colors"
                                                >
                                                    Use
                                                </button>
                                            )}
                                        </div>
                                        {item.properties && (
                                            <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">{item.properties}</div>
                                        )}
                                        {item.effect && (
                                            <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">{item.effect}</div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-zinc-500 dark:text-zinc-400 italic">No equipment</p>
                        )}
                    </div>

                    {/* Notes */}
                    <div className="bg-white dark:bg-zinc-900/50 rounded-xl p-6 border border-verdant-200 dark:border-verdant-800">
                        <h2 className="text-2xl font-display font-bold mb-4 text-verdant-800 dark:text-verdant-300">
                            Notes
                        </h2>
                        <p className="text-zinc-700 dark:text-zinc-300 whitespace-pre-wrap">
                            {character.notes || 'No notes'}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
