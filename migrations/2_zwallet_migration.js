const Migrations = artifacts.require("Zwallet");

let owners = ['0xb8ee0623b5d1d072866c58eae216a41e534c4a87', '0xb29e1c4cb1d04daae96c4970780535afc9b6efd6'];
let limit = 3;

module.exports = function (deployer) {
    deployer.deploy(Migrations, owners, limit);
};
