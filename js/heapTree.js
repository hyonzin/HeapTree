/*
 * 2016. 10. 9.
 * 정현진
 *
 * Binary Tree & Heap 구현
 */

'user strict';

function getParent(key) {
    if (key==0) return;
    return Math.floor((key+1)/2)-1;
}

function getLeft(key) {
    return (key+1)*2-1;
}

function getRight(key) {
    return (key+1)*2;
}

function getNeighbor(key) {
    if (key==0) return 0;

    else if (key%2 == 1) return key + 1;
    else                 return key - 1;
}

function Tree(data) {

    return {
        data: data || [],

        swap: function (k1, k2) {
            var data = this.data;

            if (data[k1] == null || data[k2] == null)
                return false;

            var tmp = data[k1].value;
            data[k1].value = data[k2].value;
            data[k2].value = tmp;

            return true;
        },

        insert: function (value) {
            var data = this.data

            var key = data.length;
            data.push({
                key: key,
                value: value
            });

            while (key != 0) {
                var parKey = getParent(key);
                if (data[key].value > data[parKey].value) {
                    if (!this.swap (key, parKey)) {
                        alert('Error occurred while Swapping!!');
                        return;
                    }
                }
                key = parKey;
            }

            return this;
        },

        search: function (value) {
            var data = this.data;
            var rootNode = this.search_node(value);

            var nodes = [ rootNode ];

            for (var i=0; nodes[i] != undefined; i++) {


                if (data[getLeft(nodes[i].key)] != undefined) {
                    nodes.push(data[getLeft(nodes[i].key)]);
                }


                if (data[getRight(nodes[i].key)] != undefined) {
                    nodes.push(data[getRight(nodes[i].key)]);
                }

            }

            return new Tree(nodes);
        },

        search_node: function (value) {
            var data = this.data;

            var key;
            for (key=0; key<data.length; key++) {
                if (data[key].value == value)
                    return data[key]
            }
            return {};
        },

        delete: function () {
            var data = this.data;
            var key = 0, compareKey;

            data[key].value = data.pop().value;

            while (key < data.length) {

                if (data[getLeft(key)] == null && data[getRight(key)] == null)
                    break;

                if (data[getLeft(key)].value > data[getRight(key)].value)
                    compareKey = getLeft(key);
                else
                    compareKey = getRight(key);

                if (data[key].value < data[compareKey].value) {
                    this.swap(key, compareKey);
                    key = compareKey;
                } else {
                    break;
                }
            }

            return this;
        }
    };
}


