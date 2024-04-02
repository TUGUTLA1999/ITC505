let currentState = "start";

let gameData = {
  start: {
    text: "Do you want to start",
    choices: ["Start"],
    consequences: ["start1"],
    image: "https://img.artpal.com/411192/7-23-8-28-21-58-4m.jpg",
  },
  start1: {
    text: "You stumble upon a hidden realm of mystical realms and enchanted forests. Choose your path.",
    choices: ["Venture into the Enchanted Forest", "Seek the Mystic Mountain"],
    consequences: ["enterForest", "seekMountain"],
    image: "https://t4.ftcdn.net/jpg/07/16/13/53/360_F_716135345_DC5ZH2CKArIKDBZNjFN81rmM2VESUMLv.jpg",
},
enterForest: {
    text: "You venture into the Enchanted Forest. What mysteries will you unravel?",
    choices: ["Seek the Elven Village", "Find the Hidden Temple"],
    consequences: ["elvenVillage", "hiddenTemple"],
    image: "https://cdn.80.lv/api/upload/post/1506/images/5d28ab4a0fc47/widen_2440x0.jpg",
},
seekMountain: {
    text: "You seek the Mystic Mountain. What secrets does it hold?",
    choices: ["Climb to the Summit", "Explore the Cave of Wonders"],
    consequences: ["mountainSummit", "caveOfWonders"],
    image: "https://t3.ftcdn.net/jpg/05/60/46/90/360_F_560469069_VwwhOfXsQZgafIcqmUxD2KHTZ3eLxPoz.jpg",
},
elvenVillage: {
    text: "You find the elusive Elven Village. How will you interact with the elves?",
    choices: ["Learn their Ancient Magic", "Help Defend the Village"],
    consequences: ["learnMagic", "defendVillage"],
    image:"https://forum.profantasy.com/uploads/2019/03/Elven%20Village.jpg",
},
hiddenTemple: {
    text: "You discover the Hidden Temple. What secrets lie within?",
    choices: ["Solve the Ancient Puzzle", "Discover the Lost Artifact"],
    consequences: ["solvePuzzle", "findArtifact"],
    image: "https://www.lowellsun.com/wp-content/uploads/2021/10/legends-01.jpg?w=1024",
},
mountainSummit: {
    text: "You reach the summit of the Mystic Mountain. A breathtaking view awaits.",
    choices: ["Meditate for Enlightenment", "Search for the Celestial Gate"],
    consequences: ["enlightenment", "celestialGate"],
    image: "https://cdn.outsideonline.com/wp-content/uploads/2022/09/Manaslu.jpg",
},
caveOfWonders: {
    text: "You explore the Cave of Wonders. What treasures will you find?",
    choices: ["Uncover Rare Gems", "Encounter a Mythical Creature"],
    consequences: ["rareGems", "mythicalCreature"],
    image: "https://live.staticflickr.com/3599/3470156588_50a16b728f_b.jpg",
},
learnMagic: {
    text: "You learn ancient elven magic and become a powerful mage. Congratulations!",
    choices: ["Ending 1"],
    image: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/06/10-strongest-elves-in-magic-the-gathering-ranked.jpg",
},
defendVillage: {
    text: "You help defend the village and become a hero among elves. Congratulations!",
    choices: ["Ending 2"],
    image: "https://i.pinimg.com/736x/d1/9b/7e/d19b7eab17ff9118b2db7b9be4ba0eb4.jpg",
},
solvePuzzle: {
    text: "You solve the ancient temple puzzle, revealing hidden knowledge. Congratulations!",
    choices: ["Ending 3"],
    image: "https://mozchops.com/wp-content/uploads/2015/07/Sun-Calendar-puzzle.jpg",
},
findArtifact: {
    text: "You discover a lost artifact of immense power. Congratulations!",
    choices: ["Ending 4"],
    image: "https://cdn.mos.cms.futurecdn.net/2DS4xxpKBjd43kyRPYjT7o-1200-80.jpg",
},
enlightenment: {
    text: "You meditate and achieve enlightenment atop the mountain. Congratulations!",
    choices: ["Ending 5"],
    image: "https://hips.hearstapps.com/hmg-prod/images/snow-capped-mountain-peak-surrounded-by-clouds-on-royalty-free-image-1623254319.jpg",
},
celestialGate: {
    text: "You find and enter the Celestial Gate, discovering a new realm. Congratulations!",
    choices: ["Ending 6"],
    image: "https://ik.imagekit.io/storybird/images/014dfced-5144-44b7-9f22-539a20c787bc/13_360694109.png",
},
rareGems: {
    text: "You uncover rare gems in the cave, becoming wealthy. Congratulations!",
    choices: ["Ending 7"],
    image: "https://www.rockngem.com/wp-content/uploads/2022/04/gem-mining-in-kenya-1.jpg",
},
mythicalCreature: {
    text: "You encounter a mythical creature and embark on a magical journey. Congratulations!",
    choices: ["Ending 8"],
    image: "https://cdn.funtrivia.com/img/newcats/18024.jpg",
},
};

function startGame() {
  currentState = "start";
  updatePage();
}

function updatePage() {
  let stage = gameData[currentState];
  document.getElementById("story-text").innerText = stage.text;

  let choicesList = document.getElementById("choices");
  choicesList.innerHTML = "";
  for (let i = 0; i < stage.choices.length; i++) {
    let choice = document.createElement("button");
    choice.innerText = stage.choices[i];
    choice.addEventListener("click", function () {
      currentState = stage.consequences[i];
      updatePage();
    });
    choicesList.appendChild(choice);
  }

  document.getElementById("story-image").src = stage.image;
}

startGame();
