require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: process.env.STAGING_ALCHEMY_KEY,
      accounts: [PRIVATE_KEY],
    },
  },
};


// Deploying contracts with account:  0xd7A5222C3DA86154A05E75b3c8AA3ccB79Df441E
// Account balance:  125000000000000000
// WavePortal address:  0x529DD90412B15600BB2F9FD24A2cAFEF2F8CE46C
// Done in 25.87s.