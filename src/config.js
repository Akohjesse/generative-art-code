const layersOrder = [
    {name: 'Background', number:8},
    {name: 'body outfit', number: 24},
    {name: 'head', number:15},
    {name: 'glasses', number:3},
    {name: 'earring', number:3},
    {name: 'headgear', number:16},
    {name: 'gear', number:8}
];
  
const format = {
    width: 512,
    height: 512
};

const rarity = [
    { key: "", val: "original" },
    { key: "_r", val: "rare" },
    { key: "_sr", val: "super rare" },
];

const defaultEdition = 9999;

module.exports = { layersOrder, format, rarity, defaultEdition };