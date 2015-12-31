var SegTree = require ('./SegmentTree');
var tree = new SegTree ([1, -2, 4, 8, -9, 18, -127, 278, -128]);

console.log (tree.rmq (4, 8));