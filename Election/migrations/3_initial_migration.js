var ElectionBallot = artifacts.require("./ElectionBallot.sol");

module.exports = function(deployer) {
  deployer.deploy(ElectionBallot);
};
