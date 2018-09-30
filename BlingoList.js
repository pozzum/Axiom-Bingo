var bingoList = [];
bingoList[1] = [
  { name: "Get Nova", types: ["weapon", "eribu"] },
  { name: "Collect 1 Weapon", types: ["weapon"] },
  { name: "Get Size Node 1 (Eribu)", types: ["sizenode", "weaponupgrade","eribu"] },
  { name: "Collect 1 Size Node", types: ["sizenode", "weaponupgrade", "powerup"] },
  { name: "Collect 1 Weapon Powerup", types: ["weaponupgrade", "powerup"] },
  { name: "Collect 1 Powerup", types: ["powerup"] },
  { name: "Enter 2 Save Rooms", types: ["saverooms"] },
  { name: "Use 2 Save Rooms", types: ["saverooms"] },
  { name: "Defeat 1 Boss", types: ["bosses"] },
  { name: "Defeat Xedur", types: ["bosses", "eribu"] },
  { name: "Obtain Drill", types: ["upgrades", "eribu"] },
  { name: "Collect 1 Upgrade", types: ["upgrades"] },
  { name: "Obtain Power Node 1 (Eribu)", types: ["powernode", "weaponupgrade", "powerup", "eribu"] },
  { name: "Collect 1 Power Node", types: ["powernode", "weaponupgrade", "powerup", "eribu"] },
  { name: "Collect 2 Powerups", types: ["powerup"] }
]; //3 minutes to get
bingoList[2] = [
  { name: "Collect 2 Weapons", types: ["weapon"] },
  { name: "Get MultiDisruptor", types: ["weapon", "eribu"] },
  { name: "Get Health Node 1 (Eribu)", types: ["healthnode", "powerup", "eribu"] },
  { name: "Collect 1 Health Node", types: ["healthnode", "powerup"] },
  { name: "Collect 3 Powerups", types: ["powerup"] },
  { name: "Enter Absu", types: ["areas","absu"] },
  //{ name: "Enter 3 Save Rooms", types: ["saverooms"] },
  //{ name: "Use 3 Save Rooms", types: ["saverooms"] },
  //{ name: "Collect 1 Health Node Fragment", types: ["powerup", "healthnodefragment"] },
  //{ name: "Enter 4 Save Rooms", types: ["saverooms"] },
  //{ name: "Use 4 Save Rooms", types: ["saverooms"] },
  { name: "Get Kilver", types: ["weapon", "absu"] },
  { name: "Collect 3 Weapons", types: ["weapon"] },
  { name: "Collect 2 Health Node Fragments", types: ["powerup", "healthnodefragment"] },
  { name: "Enter 5 Save Rooms", types: ["saverooms"] },
  { name: "Use 5 Save Rooms", types: ["saverooms"] },
  { name: "Defeat 2 Bosses", types: ["bosses"] },
  { name: "Defeat Xedur", types: ["bosses", "absu"] },
  { name: "Obtain Address Disruptor 1", types: ["upgrades", "absu"] },
  { name: "Collect 2 Upgrades", types: ["upgrades"] },
  { name: "Get Health Node 2 (Absu)", types: ["healthnode", "powerup", "absu"] },
  { name: "Collect 2 Health Nodes", types: ["healthnode", "powerup"] },
]; //3-7 minutes to get https://www.twitch.tv/videos/306203385?t=06m59s
bingoList[3] = [
];
bingoList[4] = [
];
bingoList[5] = [
];
bingoList[6] = [
];
bingoList[7] = [
];
bingoList[8] = [
];
bingoList[9] = [
];
bingoList[10] = [
];
bingoList[11] = [
];
bingoList[12] = [
];
bingoList[13] = [
];
bingoList[14] = [
];
bingoList[15] = [
];
bingoList[16] = [
];
bingoList[17] = [
];
bingoList[18] = [
];
bingoList[19] = [
];
bingoList[20] = [
];
bingoList[21] = [
];
bingoList[22] = [
];
bingoList[23] = [
];
bingoList[24] = [
];
bingoList[25] = [
]; //1.5 hours
$(function () { srl.bingo(bingoList, 5); });