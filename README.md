sorted-key-buckets
==================

Map a key to a bucket where the keys assigned to each bucket must be sorted. Creates new buckets as needed. used to make sorted string tables. (SST)

```js

var keyBuckets = require('sorted-key-buckets')

var buckets = [];

var res = keyBuckets('a',buckets)
// returns ['a',false]

res[1] = {start:'a'}

res = keyBuckets('c',buckets)
// returns ['c',{start:'a'}]

res = keyBuckets('b',buckets)
// returns ['b',false]

// to find out if this is a new bucket test the value of offset 1 
if(!res[1]) res[1] = {start:'b'};

console.log(buckets)
// prints [['c',{start:'a'}],['b',{start:'b'}]]


```


in my use case the data associated with each bucket is an fs writestream
