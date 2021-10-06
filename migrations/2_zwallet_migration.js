const Migrations = artifacts.require("Zwallet");

let owners = ['0xb8eE0623b5d1d072866c58eAE216A41e534C4a87', '0xB29E1c4Cb1D04DaaE96c4970780535AFC9B6Efd6'];
let limit = 3;

module.exports = function (deployer) {
    deployer.deploy(Migrations, owners, limit);
};
