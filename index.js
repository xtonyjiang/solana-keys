const bip39 = require('bip39');
const Keypair = require('@solana/web3.js').Keypair;
const derivePath = require('ed25519-hd-key').derivePath;

//////////////
const mnemonic =
  "neither lonely flavor argue grass remind eye tag avocado spot unusual intact";
//////////////

const seed = bip39.mnemonicToSeedSync(mnemonic, "");
for (let i = 0; i < 5; i++) {
  const path = `m/44'/501'/${i}'/0'`;
  const keypair = Keypair.fromSeed(derivePath(path, seed.toString("hex")).key);
  console.log(`${path} => ${keypair.publicKey.toBase58()}: [${keypair.secretKey}]`);
  console.log();
}

console.log("ALTERNATIVE DERIVATION PATH BELOW:")

for (let i = 0; i < 5; i++) {
    const path = `m/44'/501'/${i}'`;
    const keypair = Keypair.fromSeed(derivePath(path, seed.toString("hex")).key);
    console.log(`${path} => ${keypair.publicKey.toBase58()}: [${keypair.secretKey}]`);
    console.log();
  }

