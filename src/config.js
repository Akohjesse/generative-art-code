const layersOrder = [
    {name: 'Background', number:2},
    {name: 'body outfit', number: 3},
    {name: 'head', number:1},
    {name: 'glasses', number:1},
    {name: 'earring', number:3},
    {name: 'headgear', number:4},
    {name: 'gear', number:2}
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

const defaultEdition = 1;

module.exports = { layersOrder, format, rarity, defaultEdition };