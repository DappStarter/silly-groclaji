require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter brand venture stool rice rural horn gesture fashion equal giant'; 
let testAccounts = [
"0x3ec8051848a7900b64d82753b947f630a3a6d12d120d75c87af0a9d86704338e",
"0x5042dfc5c6b040bbc3a78b40fff472a4c4c8bdb1ef85b2b87fdbbf3b0b44e42d",
"0x6f69287cba1cc1d08919b5e9cb762d1a4223b72012c0eceb048df0bf43746556",
"0xb6b2a407c2fb6c03e8abea39140e512da423a143ab0254a0179aea75d521cda2",
"0x39469877aa60338b83534d6025a4a836e90fbe608e04de054a3e52492114c7e8",
"0x177c88cb0a8059d844a30540d0c225266d8976f1574b75559edaa9bdcea57ace",
"0xc5521add9257eafddd90fc4a36d7ce4e1a92bc09d94710e27b1b4397b388c0a3",
"0xbd0d34e0aa566c1e03b86cb7aee09e4484aab3e2b5c05f9e55499756900dafad",
"0x896941aceb74919a633840d8e3682479fabd357c7a0eeaa8290de38140110098",
"0x947f0dd380815f894f5fdb8acedfed87b7b2dc6c5525acda04790d86b4588bcc"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
