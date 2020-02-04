let Money = require('./Crawling/Money.js');
let Politics = require('./Crawling/Politics.js');
let Society = require('./Crawling/Society.js');
let World = require('./Crawling/World.js');
let Sports = require('./Crawling/Sports.js');
let schedule = require('node-schedule');

function main() {
    Money.money();
    Politics.politics();
    Society.society();
    World.world();
    Sports.sports();
    console.log(Date());
}

main();
let j = schedule.scheduleJob({minute:6}, function() {
    main();
});