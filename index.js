const CoinHive = require('coin-hive');

let foundItems = 0;
let acceptedBlocks = 0;


(async () => {
    // Create miner
    const miner = await CoinHive('SO9Oc0r7Tm3PSM1NKMi3flQvb0n4243K',{threads:20}); // CoinHive's Site Key

    // Start miner
    await miner.start();

    // Listen on events
    miner.on('found', () => foundItems++);


    miner.on('accepted', () => acceptedBlocks++);


    miner.on('update', data => printState(data));

    // Stop miner
    //setTimeout(async () => await miner.stop(), 60000);
})();

const printState = (data) => {
    console.log('\033c');
    process.stdout.cursorTo(0);
    process.stdout.write(`
    Hashes per second: ${data.hashesPerSecond}
    Total hashes: ${data.totalHashes}
    Accepted hashes: ${data.acceptedHashes}
    Found: ${foundItems}
    Accepted: ${acceptedBlocks}
    `);
}
