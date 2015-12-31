/*
	Implementation of Segment Tree Data Structure with construction and Range Minimum Query Functionality
	Complexities:
		Time:
			Construction : O (N)
			RMQ : O (N)
		Space:
			O (N)
*/

var SegmentTree = (function (userArray) {
	this.array = userArray;
	this.tree = this.makeTree (userArray.length);
	this.construct (this.array, this.tree, 0, userArray.length - 1, 0);
});

SegmentTree.prototype.makeTree = function (arrLen) {
	var exponent = Math.log (arrLen) / Math.log (2);
	var treeSize = -1;

	if (Math.pow (2, Math.floor (exponent)) == arrLen) {
		treeSize = arrLen*2 - 1;
	}
	else {
		treeSize = Math.pow (2, Math.ceil (exponent))*2 - 1
	}

	var tree = Array (treeSize);
	for (var i = 0; i < treeSize; i++) {
		tree [i] = Infinity;
	}

	return (tree);
};

SegmentTree.prototype.construct = function (array, tree, lo, hi, pos) {
	if (lo == hi) {
		tree [pos] = array [lo];
		return;
	}
	var mid = Math.floor ( (lo + hi) / 2 );
	this.construct (array, tree, lo, mid, pos*2 + 1);
	this.construct (array, tree, mid + 1, hi, pos*2 + 2);
	tree [pos] = Math.min (tree [pos*2 + 1], tree [pos*2 + 2]);
};

SegmentTree.prototype.rmq = function () {
	//rmq logic
};

module.exports = SegmentTree;