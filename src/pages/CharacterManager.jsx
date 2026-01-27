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

export default function CharacterManager() {
    const navigate = useNavigate();
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        loadCharacters();
    }, []);

    const loadCharacters = () => {
        const saved = localStorage.getItem('bloomwrought_characters');
        if (saved) {
            setCharacters(JSON.parse(saved));
        }
    };

    const deleteCharacter = (id) => {
        if (confirm('Are you sure you want to delete this character?')) {
            const updated = characters.filter(char => char.id !== id);
            localStorage.setItem('bloomwrought_characters', JSON.stringify(updated));
            setCharacters(updated);
        }
    };

    const selectCharacter = (id) => {
        localStorage.setItem('bloomwrought_active_character', id);
        navigate('/character-sheet');
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
                    const updated = [...characters, newChar];
                    localStorage.setItem('bloomwrought_characters', JSON.stringify(updated));
                    setCharacters(updated);
                } catch (error) {
                    alert('Invalid character file');
                }
            };
            reader.readAsText(file);
        }
        event.target.value = '';
    };

    const exportCharacter = (character) => {
        const dataStr = JSON.stringify(character, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${character.name || 'character'}.json`;
        link.click();
    };

    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-4xl font-display font-bold text-verdant-900 dark:text-verdant-50">
                    Character Manager
                </h1>
                <div className="flex gap-3">
                    <label className="px-4 py-2 rounded-lg border border-verdant-600 text-verdant-600 dark:text-verdant-400 hover:bg-verdant-50 dark:hover:bg-verdant-900/30 font-medium transition-colors cursor-pointer">
                        Import Character
                        <input type="file" accept=".json" onChange={importCharacter} className="hidden" />
                    </label>
                    <button
                        onClick={() => navigate('/character-creator')}
                        className="px-4 py-2 rounded-lg bg-verdant-600 hover:bg-verdant-700 text-white font-medium transition-colors"
                    >
                        Create New Character
                    </button>
                </div>
            </div>

            {characters.length === 0 ? (
                <div className="text-center py-16">
                    <img src="/sword-spade.svg" alt="No characters" className="w-24 h-24 mx-auto mb-4 opacity-20" />
                    <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-6">
                        No characters yet. Create your first Bloomwrought survivor!
                    </p>
                    <button
                        onClick={() => navigate('/character-creator')}
                        className="px-6 py-3 rounded-lg bg-verdant-600 hover:bg-verdant-700 text-white font-medium transition-colors"
                    >
                        Create Character
                    </button>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {characters.map((character) => (
                        <div
                            key={character.id}
                            className="bg-white dark:bg-zinc-900/50 rounded-xl p-6 border border-verdant-200 dark:border-verdant-800 hover:border-verdant-400 dark:hover:border-verdant-600 transition-all hover:shadow-lg"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-2xl font-display font-bold text-verdant-900 dark:text-verdant-50 mb-1">
                                        {character.name || 'Unnamed'}
                                    </h3>
                                    <p className="text-sm text-verdant-600 dark:text-verdant-400">
                                        Level {character.level} {ancestryData[character.ancestry]?.name || character.ancestry}
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-3 mb-4">
                                <div className="p-3 rounded-lg bg-verdant-50 dark:bg-verdant-900/30 border border-verdant-200 dark:border-verdant-800">
                                    <div className="text-xs uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-1">HP</div>
                                    <div className="text-lg font-bold text-verdant-600 dark:text-verdant-400">{character.hp}</div>
                                </div>
                                <div className="p-3 rounded-lg bg-verdant-50 dark:bg-verdant-900/30 border border-verdant-200 dark:border-verdant-800">
                                    <div className="text-xs uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-1">Stamina</div>
                                    <div className="text-lg font-bold text-verdant-600 dark:text-verdant-400">{character.stamina}</div>
                                </div>
                            </div>

                            <div className="flex gap-2">
                                <button
                                    onClick={() => selectCharacter(character.id)}
                                    className="flex-1 px-4 py-2 rounded-lg bg-verdant-600 hover:bg-verdant-700 text-white text-sm font-medium transition-colors"
                                >
                                    View Sheet
                                </button>
                                <button
                                    onClick={() => exportCharacter(character)}
                                    className="px-4 py-2 rounded-lg border border-verdant-600 text-verdant-600 dark:text-verdant-400 hover:bg-verdant-50 dark:hover:bg-verdant-900/30 text-sm font-medium transition-colors"
                                    title="Export"
                                >
                                    ⬇
                                </button>
                                <button
                                    onClick={() => deleteCharacter(character.id)}
                                    className="px-4 py-2 rounded-lg border border-red-600 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30 text-sm font-medium transition-colors"
                                    title="Delete"
                                >
                                    🗑
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
