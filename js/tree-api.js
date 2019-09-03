!function(){
    var n={
        data:[
            {id:"1",parent:0, caption: 'Lorem ipsum dolor sit amet'},
            {id:"2",parent:"1", caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'},
            {id:"3",parent:"1"},
            {id:"4",parent:"3", caption: 'Lorem ipsum dolor sit amet'},
            {id:"5",parent:"3",},
            {id:"6",parent:"3", caption: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
            {id:"7",parent:"4", caption: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'},
            {id:"8",parent:"2", caption: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'}
        ]};
        window.TreeAPI={getData:function(){return new Promise(function(t){setTimeout(function(){t(n)},1e3*Math.random())})}}
    }();