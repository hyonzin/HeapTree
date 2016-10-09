/*
 * 2016. 10. 9.
 * 정현진
 *
 * Binary Tree 시각화
 */

'use strict';

var id = 0;


function createTree (tree, msg) {
    var newContainer = createContainer(msg || '');

    insertContainer(newContainer.element);

    return setTree(tree.data, newContainer.id);
}

function createContainer (msg) {
    var this_id = id++;
    var this_container = '<div class="tree" id="tree_'+this_id+'"><b>'+msg+'</b></div>';
    return {
        id: "tree_"+this_id,
        element: this_container
    }
}

function insertContainer (newContainerElement) {
    document.getElementById('output').innerHTML =
        newContainerElement + document.getElementById('output').innerHTML;
}

function setTree(tree, newContainerId) {

    var queue = initQueue(tree);
    var structure = setStructure(tree, queue);

    var chart_config = {
        chart: {
            container: "#"+newContainerId
        },

        nodeStructure: structure
    };

    return new Treant(chart_config);
}

function initQueue(tree) {

    var root = {};
    var queue = [root];
    var idx = 0;
    tree = tree || [];

    while (queue.length < tree.length) {
        var element = queue[idx++];
        element.children = [];
        element.children.push({});
        queue.push(element.children[0]);

        if (queue.length < tree.length) {
            element.children.push({});
            queue.push(element.children[1]);
        }
    }

    return queue;
}

function setStructure(tree, queue) {
    tree = tree || [];
    for (var i=0; i<tree.length; i++) {
        queue[i].text= { name: tree[i].value };
    }

    return queue[0];
}