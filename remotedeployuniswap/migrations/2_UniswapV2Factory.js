const UniswapV2Factory = artifacts.require("UniswapV2Factory");

module.exports = async function (deployer) {
  await deployer.deploy(UniswapV2Factory, "0x0000000000000000000000000000000000000000");

}
