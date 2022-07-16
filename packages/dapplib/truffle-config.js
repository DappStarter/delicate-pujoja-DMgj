require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good clock bottom short blanket crater remind attitude heavy kitten obscure gentle'; 
let testAccounts = [
"0xa0c4afdbc9972cd6270968023484559db5927d14866c4a8b2693929cc42e2aa2",
"0xc75e0e692f923ead3293a70de207d233631ed676388bea7d3faedb2daa70bcea",
"0x9cade7d8db6a5fc9ed8d25fae41cf11f97ecd92b5ff8e5cc3aa44adcb8ee0116",
"0x471a2464f8a225544936ef1d0aac1e8ab28c996327ee799fa7debf3ab929e1af",
"0xb25928c26bbd0c5b122c32022cf688c481e3bb9569ba576128b4c2d6274fb032",
"0xf1de3bb96e8f9901fcb351ad7f6399beace4581d40318e2b8384615ff0fa5364",
"0xdde68e7d214ff8dfddfb0c1f9fe50afb78ed8b35d19f080255db7b4af5381e51",
"0xda1bdd51dbfc629e08feb0080e7f5a3b95b3fe42a818cfaabdea951260dadcfd",
"0xa37636e1599dfb8bff69eb926a27a69dd25146644721360218dbf18aa2d8cb89",
"0x16d421c0492f926b4277d0f3e34a5fdb3e1dba3ff42bab256e52896d96f112cd"
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
            version: '^0.8.0'
        }
    }
};

