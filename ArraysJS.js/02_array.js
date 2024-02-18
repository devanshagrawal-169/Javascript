const marvel_heroes = ["thor", "Ironman", "SpiderMan"]
const dc_heroes = ["superman", "flash", "batman"];

// marvel_heroes.push(dc_heroes);

// console.log(marvel_heroes);
// console.log(marvel_heroes[3]);
// console.log(marvel_heroes[3][1]);

// const all_Heroes = marvel_heroes.concat(dc_heroes);
// console.log(all_Heroes)

// const all_New_Heroes = [...marvel_heroes, ...dc_heroes]
// console.log(all_New_Heroes)

// const another_array = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11]]]
// const real_array = another_array.flat(Infinity)
// console.log(real_array)

// console.log(Array.isArray("devansh"))
// console.log(Array.from("devansh"))

// console.log(Array.from({ name: "devansh" }))  // interesting important... isko hume btan apdega ki hume kiska array bnana h, keys ka , ya fir iske values ka array bnau

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));