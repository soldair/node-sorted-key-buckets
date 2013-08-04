var ranger = require('../')
var test = require('tape')

test('can work',function(t){
  //
  var ranges = [['a','1'],['b','2'],['c','3']];

  var data = ranger('beef',ranges)


  t.equals(data[0],'beef');
  t.equals(data[1],'2');

  ranges = [['c','_']];

  data = ranger('beef',ranges)

  t.equals(data[0],'beef','should have returned correct key');
  t.equals(data[1],false,'offset 1 should be false');
  t.equals(data.length,2,'should have added another element to the array');

  t.end()

});
