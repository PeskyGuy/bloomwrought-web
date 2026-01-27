import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { allEquipment } from '../data/equipment';

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

export default function CharacterCreator() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const editId = searchParams.get('edit');
    
    const [character, setCharacter] = useState({
        id: null,
        name: '',
        ancestry: 'humans',
        level: 1,
        attributes: { might: 0, agility: 0, grit: 0, wits: 0 },
        hp: 10,
        stamina: 2,
        armor: 0,
        speed: 4,
        hunger: 6,
        equipment: [],
        notes: ''
    });
    
    const [dragOver, setDragOver] = useState(false);
    const [equipmentSearch, setEquipmentSearch] = useState('');

    useEffect(() => {
        if (editId) {
            const saved = localStorage.getItem('bloomwrought_characters');
            if (saved) {
                const characters = JSON.parse(saved);
                const toEdit = characters.find(c => c.id === editId);
                if (toEdit) {
                    setCharacter(toEdit);
                }
            }
        }
    }, [editId]);

    const calculateDerivedStats = (attrs, ancestry) => {
        const ancestryMods = ancestryData[ancestry];
        const totalMight = attrs.might + ancestryMods.might;
        const totalAgility = attrs.agility + ancestryMods.agility;
        const totalGrit = attrs.grit + ancestryMods.grit;
        
        return {
            hp: 10 + (totalGrit * 2),
            stamina: 2 + Math.max(0, totalGrit),
            speed: 4 + totalAgility,
            evasion: 10 + totalAgility
        };
    };

    const updateAttribute = (attr, value) => {
        const newAttrs = { ...character.attributes, [attr]: parseInt(value) || 0 };
        const derived = calculateDerivedStats(newAttrs, character.ancestry);
        setCharacter({ ...character, attributes: newAttrs, ...derived });
    };

    const updateAncestry = (ancestry) => {
        const derived = calculateDerivedStats(character.attributes, ancestry);
        setCharacter({ ...character, ancestry, ...derived });
    };

    const addEquipment = (item) => {
        if (!character.equipment.find(e => e.name === item.name)) {
            const updatedEquipment = [...character.equipment, item];
            setCharacter({ ...character, equipment: updatedEquipment });
            
            // Update armor if it's armor
            if (item.type === 'armor') {
                setCharacter(prev => ({ ...prev, armor: parseInt(item.armor) || 0 }));
            }
        }
    };

    const removeEquipment = (itemName) => {
        const item = character.equipment.find(e => e.name === itemName);
        const updatedEquipment = character.equipment.filter(e => e.name !== itemName);
        setCharacter({ ...character, equipment: updatedEquipment });
        
        // Reset armor if removing armor
        if (item && item.type === 'armor') {
            setCharacter(prev => ({ ...prev, armor: 0 }));
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setDragOver(false);
        const itemData = e.dataTransfer.getData('equipment');
        if (itemData) {
            const item = JSON.parse(itemData);
            addEquipment(item);
        }
    };

    const saveCharacter = () => {
        const ancestryMods = ancestryData[character.ancestry];
        const finalCharacter = {
            ...character,
            id: character.id || Date.now().toString(),
            finalAttributes: {
                might: character.attributes.might + ancestryMods.might,
                agility: character.attributes.agility + ancestryMods.agility,
                grit: character.attributes.grit + ancestryMods.grit,
                wits: character.attributes.wits + ancestryMods.wits
            }
        };
        
        // Save to characters array
        const saved = localStorage.getItem('bloomwrought_characters');
        let characters = saved ? JSON.parse(saved) : [];
        
        if (editId) {
            // Update existing
            characters = characters.map(c => c.id === editId ? finalCharacter : c);
        } else {
            // Add new
            characters.push(finalCharacter);
        }
        
        localStorage.setItem('bloomwrought_characters', JSON.stringify(characters));
        localStorage.setItem('bloomwrought_active_character', finalCharacter.id);
        navigate('/character-sheet');
    };

    const exportCharacter = () => {
        const ancestryMods = ancestryData[character.ancestry];
        const finalCharacter = {
            ...character,
            finalAttributes: {
                might: character.attributes.might + ancestryMods.might,
                agility: character.attributes.agility + ancestryMods.agility,
                grit: character.attributes.grit + ancestryMods.grit,
                wits: character.attributes.wits + ancestryMods.wits
            }
        };
        
        const dataStr = JSON.stringify(finalCharacter, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${character.name || 'character'}.json`;
        link.click();
    };

    const ancestryMods = ancestryData[character.ancestry];

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-4xl font-display font-bold mb-8 text-verdant-900 dark:text-verdant-50">
                Character Creator
            </h1>

            <div className="space-y-6">
                {/* Basic Info */}
                <div className="bg-white dark:bg-zinc-900/50 rounded-xl p-6 border border-verdant-200 dark:border-verdant-800">
                    <h2 className="text-2xl font-display font-bold mb-4 text-verdant-800 dark:text-verdant-300">
                        Basic Information
                    </h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-2 text-zinc-700 dark:text-zinc-300">
                                Character Name
                            </label>
                            <input
                                type="text"
                                value={character.name}
                                onChange={(e) => setCharacter({ ...character, name: e.target.value })}
                                className="w-full px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100"
                                placeholder="Enter name..."
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2 text-zinc-700 dark:text-zinc-300">
                                Ancestry
                            </label>
                            <select
                                value={character.ancestry}
                                onChange={(e) => updateAncestry(e.target.value)}
                                className="w-full px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100"
                            >
                                {Object.entries(ancestryData).map(([key, data]) => (
                                    <option key={key} value={key}>{data.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                {/* Attributes */}
                <div className="bg-white dark:bg-zinc-900/50 rounded-xl p-6 border border-verdant-200 dark:border-verdant-800">
                    <h2 className="text-2xl font-display font-bold mb-4 text-verdant-800 dark:text-verdant-300">
                        Attributes
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {Object.keys(character.attributes).map((attr) => (
                            <div key={attr} className="space-y-2">
                                <label className="block text-sm font-medium capitalize text-zinc-700 dark:text-zinc-300">
                                    {attr}
                                </label>
                                <div className="flex items-center gap-4">
                                    <input
                                        type="number"
                                        value={character.attributes[attr]}
                                        onChange={(e) => updateAttribute(attr, e.target.value)}
                                        min="-3"
                                        max="6"
                                        className="w-20 px-3 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 text-center"
                                    />
                                    <span className="text-sm text-zinc-600 dark:text-zinc-400">
                                        Base: {character.attributes[attr]} + Ancestry: {ancestryMods[attr]} = 
                                        <span className="font-bold ml-1 text-verdant-600 dark:text-verdant-400">
                                            {character.attributes[attr] + ancestryMods[attr]}
                                        </span>
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Derived Stats */}
                <div className="bg-white dark:bg-zinc-900/50 rounded-xl p-6 border border-verdant-200 dark:border-verdant-800">
                    <h2 className="text-2xl font-display font-bold mb-4 text-verdant-800 dark:text-verdant-300">
                        Derived Stats
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="p-4 rounded-lg bg-verdant-50 dark:bg-verdant-900/30 border border-verdant-200 dark:border-verdant-800 text-center">
                            <div className="text-sm uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-1">HP</div>
                            <div className="text-2xl font-bold text-verdant-600 dark:text-verdant-400">{character.hp}</div>
                        </div>
                        <div className="p-4 rounded-lg bg-verdant-50 dark:bg-verdant-900/30 border border-verdant-200 dark:border-verdant-800 text-center">
                            <div className="text-sm uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-1">Stamina</div>
                            <div className="text-2xl font-bold text-verdant-600 dark:text-verdant-400">{character.stamina}</div>
                        </div>
                        <div className="p-4 rounded-lg bg-verdant-50 dark:bg-verdant-900/30 border border-verdant-200 dark:border-verdant-800 text-center">
                            <div className="text-sm uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-1">Speed</div>
                            <div className="text-2xl font-bold text-verdant-600 dark:text-verdant-400">{character.speed}</div>
                        </div>
                        <div className="p-4 rounded-lg bg-verdant-50 dark:bg-verdant-900/30 border border-verdant-200 dark:border-verdant-800 text-center">
                            <div className="text-sm uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-1">Evasion</div>
                            <div className="text-2xl font-bold text-verdant-600 dark:text-verdant-400">{character.evasion}</div>
                        </div>
                    </div>
                </div>

                {/* Equipment */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Equipment List */}
                    <div className="bg-white dark:bg-zinc-900/50 rounded-xl p-6 border border-verdant-200 dark:border-verdant-800">
                        <h2 className="text-2xl font-display font-bold mb-4 text-verdant-800 dark:text-verdant-300">
                            Equipment
                        </h2>
                        <div
                            onDrop={handleDrop}
                            onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                            onDragLeave={() => setDragOver(false)}
                            className={`min-h-[200px] rounded-lg border-2 border-dashed p-4 transition-colors ${
                                dragOver 
                                    ? 'border-verdant-500 bg-verdant-50 dark:bg-verdant-900/30' 
                                    : 'border-zinc-300 dark:border-zinc-700'
                            }`}
                        >
                            {character.equipment.length === 0 ? (
                                <p className="text-center text-zinc-500 dark:text-zinc-400 italic py-8">
                                    Drag equipment here or select from the list
                                </p>
                            ) : (
                                <div className="space-y-2">
                                    {character.equipment.map((item) => (
                                        <div
                                            key={item.name}
                                            className="flex justify-between items-start p-3 rounded-lg bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800"
                                        >
                                            <div className="flex-1">
                                                <div className="font-bold text-verdant-800 dark:text-verdant-200">{item.name}</div>
                                                <div className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">
                                                    {item.damage && <span className="mr-2">Damage: {item.damage}</span>}
                                                    {item.armor && <span className="mr-2">Armor: {item.armor}</span>}
                                                    {item.uses && <span>Uses: {item.uses}</span>}
                                                </div>
                                            </div>
                                            <button
                                                onClick={() => removeEquipment(item.name)}
                                                className="ml-2 px-2 py-1 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/30 rounded transition-colors"
                                            >
                                                ✕
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Equipment Browser */}
                    <div className="bg-white dark:bg-zinc-900/50 rounded-xl p-6 border border-verdant-200 dark:border-verdant-800">
                        <h2 className="text-2xl font-display font-bold mb-4 text-verdant-800 dark:text-verdant-300">
                            Browse Equipment
                        </h2>
                        <input
                            type="text"
                            value={equipmentSearch}
                            onChange={(e) => setEquipmentSearch(e.target.value)}
                            placeholder="Search equipment..."
                            className="w-full px-4 py-2 mb-4 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100"
                        />
                        <div className="max-h-[300px] overflow-y-auto space-y-2">
                            {allEquipment
                                .filter(item => 
                                    item.name.toLowerCase().includes(equipmentSearch.toLowerCase()) ||
                                    item.tags.toLowerCase().includes(equipmentSearch.toLowerCase())
                                )
                                .map((item) => (
                                    <div
                                        key={item.name}
                                        draggable
                                        onDragStart={(e) => e.dataTransfer.setData('equipment', JSON.stringify(item))}
                                        onClick={() => addEquipment(item)}
                                        className="p-3 rounded-lg bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:border-verdant-400 dark:hover:border-verdant-600 cursor-pointer transition-colors"
                                    >
                                        <div className="font-bold text-verdant-800 dark:text-verdant-200">{item.name}</div>
                                        <div className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">
                                            <span className="font-mono text-verdant-600 dark:text-verdant-400">{item.tags}</span>
                                            {item.damage && <span className="ml-2">• {item.damage}</span>}
                                            {item.armor && <span className="ml-2">• Armor: {item.armor}</span>}
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>

                {/* Notes */}
                <div className="bg-white dark:bg-zinc-900/50 rounded-xl p-6 border border-verdant-200 dark:border-verdant-800">
                    <h2 className="text-2xl font-display font-bold mb-4 text-verdant-800 dark:text-verdant-300">
                        Notes
                    </h2>
                    <textarea
                        value={character.notes}
                        onChange={(e) => setCharacter({ ...character, notes: e.target.value })}
                        placeholder="Character background, goals, etc..."
                        rows="4"
                        className="w-full px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 resize-none"
                    />
                </div>

                {/* Actions */}
                <div className="flex gap-4">
                    <button
                        onClick={() => navigate('/character-manager')}
                        className="px-6 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 font-medium transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={saveCharacter}
                        className="flex-1 px-6 py-3 rounded-lg bg-verdant-600 hover:bg-verdant-700 text-white font-medium transition-colors"
                    >
                        {editId ? 'Update Character' : 'Create Character'}
                    </button>
                </div>
            </div>
        </div>
    );
}
