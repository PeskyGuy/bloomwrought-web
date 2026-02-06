// Tag definitions organized by Passive (always active) and Active (requires action)
export const tagDefinitions = {
    // === PASSIVE TAGS ===
    // These tags are always active and don't require any action
    
    // Passive - Armor Properties
    "Medium": "No SPEED penalty",
    "Heavy": "-2 SPEED penalty. Immune to Push and Pull effects",
    "Weathered": "+1 armor vs ACID damage",
    "Practical": "Gain one free Use action per round",
    "Makeshift": "Can be repaired without tools using basic materials",
    "Reflective": "Ranged attacks against you have -1 to hit",
    "Spiked": "Deal +2 damage to targets you are grappling or have RESTRAINED",
    
    // Passive - Weapon Properties
    "Light": "Can be wielded in off-hand",
    "Precise": "+2 to hit against TRACKED targets",
    
    // Passive - Item Properties
    "Limited": "Limited number of uses",
    
    // === ACTIVE TAGS ===
    // These tags require an action to use
    
    // Active - Strike Tags (Damage Types - Free with Strike)
    "Pierce": "Deals Pierce damage. Primary damage tag for Strike.",
    "Bludgeon": "Deals Bludgeon damage. Primary damage tag for Strike.",
    "Slash": "Deals Slash damage. Primary damage tag for Strike.",
    "Versatile": "Choose Slash, Bludgeon, or Pierce damage when attacking. Only one damage type per Strike.",
    
    // Active - Strike Modifiers (Give 1 Exertion Each)
    "Accurate": "+1 to hit (gives 1 Exertion)",
    "Rapid": "Target additional enemies, -1 damage per extra target (gives 1 Exertion)",
    
    // Active - Strike Effects (Free on hit)
    "Break": "On hit, permanently reduce target's armor by 1",
    "Cleave": "On hit, deal half damage to one adjacent creature",
    
    // Active - Use Tags (Require Use action)
    "Heal": "Restores HEALTH (requires Use action)",
    "Cure": "Removes status effects (requires Use action)",
    "Surge": "Temporary boost with drawback (requires Use action)",
    "Hack": "Infiltrate old world security systems and electronic locks (requires Use action)",
    "Mend": "Restore HEALTH with skill check (requires Use action)",
};

// Tag categories for organization and filtering
export const tagCategories = {
    passive: {
        armorProperties: ["Medium", "Heavy", "Weathered", "Practical", "Makeshift", "Reflective", "Spiked"],
        weaponProperties: ["Light", "Precise"],
        itemProperties: ["Limited"]
    },
    active: {
        strikeDamageTypes: ["Pierce", "Bludgeon", "Slash", "Versatile"],
        strikeModifiers: ["Accurate", "Rapid"],
        strikeEffects: ["Break", "Cleave"],
        useTags: ["Heal", "Cure", "Surge", "Hack", "Mend"]
    }
};

// Helper function to check if a tag is passive or active
export const isPassiveTag = (tagName) => {
    return Object.values(tagCategories.passive).flat().includes(tagName);
};

export const isActiveTag = (tagName) => {
    return Object.values(tagCategories.active).flat().includes(tagName);
};
