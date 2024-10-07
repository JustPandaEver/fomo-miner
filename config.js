// const argv = require('minimist')(process.argv.slice(2));

import minimist from 'minimist';
const argv = minimist(process.argv.slice(2));

let selectedChain = argv.chain || 'local';

const settings = {
    "mainnet": {
        "phrase": "",
        "packageId": '0xa340e3db1332c21f20f5c08bef0fa459e733575f9a7e2f5faca64f72cd5a54f2',
            "configId": '0x684de611aafbc5fbb6aa4288b4050281219dd5efc5764de22ba0f30b2bb2dd15',
            "buses": [
                '0x1aa2497f14d27b2d7c2ebd9dd607cda0279dc4d54a57e3a8476a1236474b6567',
                '0x367fdbde371d96018a572e354a6af4f74b69f412c0817eabff52bb166da6df0c',
                '0x5e42608bc32e6ff4bd024ce3928832ebfa27efe557ba4763084222226e3413c0',
                '0x98b9610b1b61cb02cae304d8b8a4fbd4e5cb018d24adf59f728ff886b597e9dc',
                '0xaae095f1fd39d20418efd6ded79303fe8b53751907a17d2723594480655785f0',
                '0xc941f30b0714306d256a8efa56d9b1fb9e63ebd94de14d6a4b5d9c52ece98bc5',
                '0xcc18677841febd80ad34a4535c88ec402a968d24a824c00af29d1b5737e528d0',
                '0xea11f05cb06456755a0b1b52bbd1b4a9e186ec89495f6ba02094ed84a075248a',
        ],
    },
};


settings[selectedChain].chain = selectedChain;
if (argv.phrase) {
    settings[selectedChain].phrase = argv.phrase;
}

export default  settings[selectedChain];
