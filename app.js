const {createReadStream} = require('fs');
const {pipeline} = require('stream');
const {Gunzip} = require('zlib');
const csv = require('csv-parser');
const {findProfit} = require('./functions')
let sum = 0;

const csvUnzip = Gunzip();
const readst = createReadStream('./data.csv.gz');

const [,,countryName] = process.argv;
//process.stdin.pipe(writest).pipe

pipeline(
    readst,
    csvUnzip,
    csv({delimiter: ','}).on('data', (chunk) => {
       sum += +findProfit(countryName,chunk)
    }).on('end', () => {
        console.log(sum)
    }),
    function onEnd(err){
        if(err){
            console.log(`Error: ${err}`)
            process.exit(0);
        }
        console.log('done....!')
    }
)

