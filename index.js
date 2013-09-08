// i have to pick the bucket has the closest less than key

var bs = require('binarysearch');

module.exports = function(search,ranges){
  var data
  , key = bs.closest(ranges,search,comparitor)

  if(key > -1){
    if(ranges[key][0] <= search) {
      ranges[key][0] = search;
      data = ranges[key];
    } else {
      data = [search,false];
      ranges.splice(key,0,data);
    }
  } else {
    data = [search,false]
    ranges.push(data)
  }

  return data;
}

module.exports.insert = function(range,ranges){
  bs.insert(ranges,range,comparitor);
}

function comparitor(o,v){
  if(o[0] > v) return 1;
  else if(o[0] < v) return -1;
  return 0;
}

// TODO
// the goal of this is to reduce the number of buckets required as well.
// think about witchcraft that could determine "closest" optimization.
//
// i would consider the frequency in which keys are written that are between the current search key and the target key a very important factor in determining the degree of closeness.
// there is also plain numeric distance 255 for each byte. this is how sorting works so it could be a factor

