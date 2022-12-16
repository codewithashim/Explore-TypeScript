const age = [30, 25, 26];
console.log(age);
const localData = {
  name: "Ashim",
  age: 30,
};
console.log(localData);

// Array and touple types in TypeScript

// let player: string[];
let player: (string | number | boolean)[] = [];
player = ["Messi", "Ronaldo", "Neymar", false, 30];

player.push("Mbappe");
// player = false;
player[0] = "Neymar";
player[0] = 30;
player[0] = true;
// player[1] = 30; // Error: Type '30' is not assignable to type 'string'.

const newPlayer = player.map((player, i) => {
  return i + 1 + ". " + player;
});

console.log(player, newPlayer);
