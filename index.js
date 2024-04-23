import inquirer from "inquirer";
let c_value = {
    KWD: 0.31,
    BHD: 0.38,
    OMR: 0.38,
    EURO: 0.93,
    USD: 1,
};
let ans = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        message: "convert from",
        choices: ["KWD", "BHD", "OMR", "EURO", "USD"]
    }, {
        type: "list",
        name: "to",
        message: "convert in to ",
        choices: ["KWD", "BHD", "OMR", "EURO", "USD"]
    }, {
        type: "number",
        name: "amount",
        message: "Your amount is "
    }
]);
let result = (c_value[ans.to] / c_value[ans.from] * ans.amount);
console.log(result);
