import { SuiMaster } from 'suidouble';
import config from './config.js';
import Miner from './includes/Miner.js';

const run = async()=>{
    const phrase = config.phrase;
    const chain = config.chain;

    if (!config.phrase || !config.chain) {
        throw new Error('phrase and chain parameters are required');
    }

    const suiMasterParams = {
        client: chain,
        debug: false,
    };
    if (phrase.indexOf('suiprivkey') === 0) {
        suiMasterParams.privateKey = phrase;
    } else {
        suiMasterParams.phrase = phrase;
    }
    const suiMaster = new SuiMaster(suiMasterParams);
    await suiMaster.initialize();

    console.log('suiMaster connected as ', suiMaster.address);

    const doMine = async(minerInstance)=>{
        while (true) {
            try {
                await minerInstance.mine();
            } catch (e) {
                console.error(e);
                console.log('restarting the miner instance...');
            }
            await new Promise((res)=>setTimeout(res, 100));
        };
    };

    const siuMiner = new Miner({
        suiMaster,
        packageId: config.packageId,
        configId: config.configId,
        buses: config.buses,
    });    
    doMine(siuMiner);

};

run()
    .then(()=>{
        console.error('running');
    });