const accountId = 12345;
var accountPassword = "1232445493";
let accountEmail = "devansh@gmail.com";
accountCity = "Agra";
let accountState;

// accountId = 2;  not allowed
accountPassword = "12390";
accountCity = "Varansi";
accountEmail = "devansh123@gmail.com"

console.table([accountId, accountCity, accountEmail, accountPassword, accountState])
console.log(accountId);

// Prefer not to use var, because of issue in block scope and functional scope