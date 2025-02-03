// Client code
const ZongJi = require('./');

const zongji = new ZongJi({
  host     : 'localhost',
  user     : 'zongji',
  password : 'zongji',
  // debug: true
});

zongji.on('binlog', function(evt) {
  evt.dump();
  if (evt.tableId == 108) console.log(zongji.tableMap[108]);
});

zongji.start({
  includeEvents: ['tablemap', 'writerows', 'updaterows', 'deleterows']
});

process.on('SIGINT', function() {
  console.log('Got SIGINT.');
  zongji.stop();
  process.exit();
});
