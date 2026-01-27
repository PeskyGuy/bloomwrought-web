export const weapons = [
    { name: "Longsword", cost: "5-b", damage: "1d8 + MIGHT", range: "1-hx", tags: "Versatile", properties: "Choose Slash, Bludgeon, or Pierce damage when attacking.", type: "weapon" },
    { name: "Crossbow", cost: "5-b", damage: "1d8 / 1d6 + MIGHT", range: "6-hx to 20-hx", tags: "Pierce/Bludgeon", properties: "Ranged: 1d8 Pierce damage. Melee: 1d6 + MIGHT Bludgeon damage.", type: "weapon" },
    { name: "Mace", cost: "5-b", damage: "1d6 + MIGHT", range: "1-hx", tags: "Bludgeon/Break", properties: "Bludgeon damage. On hit, permanently reduce target's armor by 1.", type: "weapon" },
    { name: "Shortsword", cost: "3-b", damage: "1d6 + MIGHT", range: "1-hx", tags: "Versatile/Light", properties: "Choose Slash, Bludgeon, or Pierce damage. Can be wielded in off-hand.", type: "weapon" },
    { name: "Greatsword", cost: "4.5-b", damage: "1d12 + MIGHT", range: "2-hx", tags: "Versatile/Cleave", properties: "Choose Slash, Bludgeon, or Pierce damage. On hit, deal half damage to one adjacent creature.", type: "weapon" },
    { name: "Battleaxe", cost: "4-b", damage: "2d6 + MIGHT", range: "2-hx", tags: "Slash/Break/Bludgeon", properties: "Slash or Bludgeon damage. On hit, permanently reduce target's armor by 1.", type: "weapon" },
    { name: "Rapier", cost: "3-b", damage: "1d6 + AGILITY", range: "1-hx", tags: "Pierce/Accurate/Light", properties: "Pierce damage. Spend 1 STAMINA for +1 to hit. Can be wielded in off-hand.", type: "weapon" },
    { name: "Pistol", cost: "20-b", damage: "2d10", range: "6-hx to 30-hx", tags: "Pierce/Precise", properties: "Pierce damage. +2 to hit against TRACKED targets.", type: "weapon" },
    { name: "Long Rifle", cost: "40-b", damage: "2d12 / 1d6", range: "8-hx to 40-hx", tags: "Pierce/Bludgeon/Precise", properties: "Ranged: 2d12 Pierce damage. Melee: 1d6 Bludgeon damage. +2 to hit against TRACKED targets.", type: "weapon" },
    { name: "Automatic Rifle", cost: "60-b", damage: "2d8 / 1d6", range: "6-hx to 30-hx", tags: "Pierce/Bludgeon/Rapid", properties: "Ranged: 2d8 Pierce damage. Melee: 1d6 Bludgeon damage. Spend 1 STAMINA to target additional enemies. -1 damage per extra target.", type: "weapon" },
];

export const armors = [
    { name: "Scavenger Leathers", cost: "4-b", armor: "1", tags: "Light", properties: "No SPEED penalty. Gain additional armor equal to AGILITY (maximum +2).", type: "armor" },
    { name: "Chitinous Armor", cost: "4-b", armor: "1", tags: "Light/Weathered", properties: "No SPEED penalty. Gain additional armor equal to AGILITY (maximum +2). +1 armor vs ACID damage.", type: "armor" },
    { name: "Reinforced Jacket", cost: "6-b", armor: "2", tags: "Medium/Practical", properties: "No SPEED penalty. Gain one free Use action per round.", type: "armor" },
    { name: "Scrap Mail", cost: "5-b", armor: "3", tags: "Medium/Makeshift", properties: "No SPEED penalty. Can be repaired without tools using basic materials.", type: "armor" },
    { name: "Alloyed Plate", cost: "14-b", armor: "4", tags: "Heavy/Reflective", properties: "-2 SPEED penalty. Ranged attacks against you have -1 to hit. Immune to Push and Pull effects.", type: "armor" },
    { name: "War-Shell", cost: "14-b", armor: "5", tags: "Heavy/Spiked", properties: "-2 SPEED penalty. Deal +2 damage to targets you are grappling or have RESTRAINED. Immune to Push and Pull effects.", type: "armor" },
];

export const consumables = [
    { name: "Herbal Bandage", cost: "3-b", uses: "1", tags: "Heal", effect: "Restore 1d4 HEALTH to target.", type: "consumable" },
    { name: "Vitastatic", cost: "15-b", uses: "1", tags: "Heal/Cure", effect: "Restore 2d6 HEALTH to target. Remove one status effect.", type: "consumable" },
    { name: "Adrenalin Shot", cost: "15-b", uses: "1", tags: "Surge", effect: "For 2 rounds, gain +2 SPEED and +2 DAMAGE. Afterwards, gain FATIGUED status.", type: "consumable" },
];

export const tools = [
    { name: "Hacker's Kit", cost: "12-b", uses: "Unlimited", tags: "Hack", effect: "Allows you to infiltrate old world security systems and electronic locks.", type: "tool" },
    { name: "Medical Supplies", cost: "8-b", uses: "6", tags: "Mend/Limited", effect: "Roll 2d6 + WITS vs target's missing HP. On success, restore 1d6 HEALTH to target.", type: "tool" },
];

export const allEquipment = [...weapons, ...armors, ...consumables, ...tools];
