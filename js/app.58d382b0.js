(function(t){function e(e){for(var n,s,c=e[0],u=e[1],a=e[2],l=0,b=[];l<c.length;l++)s=c[l],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&b.push(o[s][0]),o[s]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);h&&h(e);while(b.length)b.shift()();return i.push.apply(i,a||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,c=1;c<r.length;c++){var u=r[c];0!==o[u]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=r[0]))}return t}var n={},o={app:0},i=[];function s(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=n,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(r,n,function(e){return t[e]}.bind(null,n));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var a=0;a<c.length;a++)e(c[a]);var h=u;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"3ada":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),o={id:"app"};function i(t,e,r,i,s,c){var u=Object(n["g"])("Board");return Object(n["e"])(),Object(n["c"])("div",o,[Object(n["d"])(u)])}var s={key:0},c={key:1};function u(t,e,r,o,i,u){return Object(n["e"])(),Object(n["c"])("div",null,[i.winner?(Object(n["e"])(),Object(n["c"])("h2",c,Object(n["h"])(i.winner),1)):(Object(n["e"])(),Object(n["c"])("h2",s,"Turn: "+Object(n["h"])(u.whosTurn),1)),Object(n["d"])("button",{onClick:e[1]||(e[1]=Object(n["i"])((function(){return u.playAgain.apply(u,arguments)}),["prevent"]))},"Play New Game"),(Object(n["e"])(!0),Object(n["c"])(n["a"],null,Object(n["f"])(i.board,(function(t,e){return Object(n["e"])(),Object(n["c"])("ul",{key:e},[(Object(n["e"])(!0),Object(n["c"])(n["a"],null,Object(n["f"])(t,(function(t,r){return Object(n["e"])(),Object(n["c"])("li",{key:r,onClick:function(t){return u.turn(e,r)}},Object(n["h"])(i.board[e][r]),9,["onClick"])})),128))])})),128)),Object(n["d"])("h6",null,Object(n["h"])(i.message),1)])}var a={data:function(){return{rows:13,cols:13,board:[],playerOne:"X",playerTwo:"O",playerOneTurns:[],playerTwoTurns:[],message:"",winSequence:5,winner:"",turnCount:0,counter:1}},methods:{turn:function(t,e){if(!this.winner){this.counter=1,this.turnCount%2!==0||this.board[t][e]?this.turnCount%2===0||this.board[t][e]?this.message="Not empty":(this.board[t][e]="O",this.playerTwoTurns.push([t,e]),this.message="",this.turnCount+=1):(this.board[t][e]="X",this.playerOneTurns.push([t,e]),this.message="",this.turnCount+=1);for(var r=0;r<=this.rows-1;r++)for(var n=0;n<=this.cols-1;n++)this.board[r][n]===this.board[r][n+1]&&this.board[r][n]&&this.counter!==this.winSequence?this.counter+=1:this.counter=1,5===this.counter&&(this.winner="".concat(this.turnCount%2===0?"Player Two":"Player One"," is a winner"));for(var o=0;o<=this.cols-1;o++){this.counter=1;for(var i=0;i<this.rows-1;i++)this.board[i][o]===this.board[i+1][o]&&this.board[i][o]&&this.counter!==this.winSequence?this.counter+=1:this.counter=1,5===this.counter&&(this.winner="".concat(this.turnCount%2===0?"Player Two":"Player One"," is a winner"))}for(var s=0;s<=this.rows-5;s++)for(var c=s,u=0;c<this.rows-1&&u<this.cols-1;c++,u++)this.board[c][u]===this.board[c+1][u+1]&&this.board[c][u]&&this.counter!==this.winSequence?this.counter+=1:this.counter=1,5===this.counter&&(this.winner="".concat(this.turnCount%2===0?"Player Two":"Player One"," is a winner"));for(var a=1;a<=this.cols-5;a++)for(var h=0,l=a;h<this.rows-1&&l<this.cols-1;h++,l++)this.board[h][l]===this.board[h+1][l+1]&&this.board[h][l]&&this.counter!==this.winSequence?this.counter+=1:this.counter=1,5===this.counter&&(this.winner="".concat(this.turnCount%2===0?"Player Two":"Player One"," is a winner"));for(var b=this.rows-1;b>=4;b--)for(var d=b,f=0;d>0&&f<this.cols-1;d--,f++)this.board[d][f]===this.board[d-1][f+1]&&this.board[d][f]&&this.counter!==this.winSequence?this.counter+=1:this.counter=1,5===this.counter&&(this.winner="".concat(this.turnCount%2===0?"Player Two":"Player One"," is a winner"));for(var p=1;p<=this.cols-5;p++)for(var w=this.rows-1,O=p;w>0&&O<this.cols-1;w--,O++)this.board[w][O]===this.board[w-1][O+1]&&this.board[w][O]&&this.counter!==this.winSequence?this.counter+=1:this.counter=1,5===this.counter&&(this.winner="".concat(this.turnCount%2===0?"Player Two":"Player One"," is a winner"))}},playAgain:function(){window.location.reload()}},computed:{whosTurn:function(){return this.turnCount%2===0?"Player One":"Player Two"}},mounted:function(){for(var t=1;t<=this.rows;t++)this.board.push(new Array(this.cols))}};r("6c4a");a.render=u;var h=a,l={name:"App",components:{Board:h}};r("64be");l.render=i;var b=l;Object(n["b"])(b).mount("#app")},"64be":function(t,e,r){"use strict";r("c894")},"6c4a":function(t,e,r){"use strict";r("3ada")},c894:function(t,e,r){}});
//# sourceMappingURL=app.58d382b0.js.map