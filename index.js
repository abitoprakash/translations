const fs = require("fs");

console.log("Some random script");

const data = {
    name: "John wick 2",
    flow: Math.round(Math.random() * 1020),
    moo: 2,
};

fs.writeFileSync("result.json", JSON.stringify(data, null, 4));

console.log("Completed");
