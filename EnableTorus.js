
let web3tr;

async function newTorus() {

const torus = new Torus({
  buttonPosition: "top-right" // default: bottom-left
});
await torus.init({
  buildEnv: "production", // default: production
  enableLogging: true, // default: false
  network: {
    host: "kovan", // default: mainnet
    chainId: 42, // default: 1
    networkName: "Kovan Test Network" // default: Main Ethereum Network
  },
  showTorusButton: true // default: true
});
await torus.login(); // await torus.ethereum.enable()
web3tr = new Web3(torus.provider);
}

newTorus();
