'use strict';

/* init tree */
var tree = new Tree();



/* button's event handling */

document.getElementById('button_search').onclick=function(){
    onSearch();
};

document.getElementById('button_insert').onclick=function() {
    onInsert();
};

document.getElementById('button_random').onclick=function() {
    onRandom();
};

document.getElementById('button_delete').onclick=function(){
    onDelete();
};

document.getElementById('button_reset').onclick=function(){
    onReset();
};



document.getElementById('text_search').onkeydown=function(ev){
    if (ev.code == 'Enter') {
        onSearch();
        document.getElementById('text_search').value='';
    }
};

document.getElementById('text_insert').onkeydown=function(ev){
    if (ev.code == 'Enter') {
        onInsert();
        document.getElementById('text_insert').value='';
    }
};





function onSearch () {
    var value = document.getElementById('text_search').value;
    if (!parseInt(value) && parseInt(value)!=0)
        if (typeof(value) == 'string' && value.length>0)
            value = value[0];
        else
            return;
    else
        value = parseInt(value);

    createTree( tree.search(value), 'Search "'+value+'"' );
}

function onInsert () {
    var value = document.getElementById('text_insert').value;
    if (!parseInt(value) && parseInt(value)!=0)
        if (typeof(value) == 'string' && value.length>0)
            value = value[0];
        else
            return;
    else
        value = parseInt(value);

    createTree( tree.insert(value), 'Insert "'+value+'"' );
}

function onRandom () {
    var value = parseInt(Math.random()*100);
    createTree( tree.insert(value), 'Random Insert "'+value+'"' );
}

function onDelete () {
    createTree( tree.delete(), 'Delete Root node');
}

function onReset () {
    tree = new Tree();
    createTree( tree, 'Reset.' );
}
