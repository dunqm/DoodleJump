var __extends=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();!function(){function e(t,n,o){function r(a,s){if(!n[a]){if(!t[a]){var u="function"==typeof require&&require;if(!s&&u)return u(a,!0);if(i)return i(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var c=n[a]={exports:{}};t[a][0].call(c.exports,function(e){var n=t[a][1][e];return r(n||e)},c,c.exports,e,t,n,o)}return n[a].exports}for(var i="function"==typeof require&&require,a=0;a<o.length;a++)r(o[a]);return r}return e}()({1:[function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=e("./script/GameUI"),s=o(a),u=e("./script/GameControl"),l=o(u),c=e("./script/groundBox"),h=o(c),y=e("./script/prop/JetpackBox"),f=o(y),p=e("./script/prop/PropellerBox"),d=o(p),g=e("./script/prop/SpringBox"),_=o(g),w=e("./script/hopBox"),b=o(w),v=e("./script/likBox"),m=o(v),x=function(){function e(){r(this,e)}return i(e,null,[{key:"init",value:function(){var e=Laya.ClassUtils.regClass;e("script/GameUI.js",s["default"]),e("script/GameControl.js",l["default"]),e("script/groundBox.js",h["default"]),e("script/prop/JetpackBox.js",f["default"]),e("script/prop/PropellerBox.js",d["default"]),e("script/prop/SpringBox.js",_["default"]),e("script/hopBox.js",b["default"]),e("script/likBox.js",m["default"])}}]),e}();n["default"]=x,x.width=640,x.height=1136,x.scaleMode="fixedwidth",x.screenMode="none",x.alignV="top",x.alignH="left",x.startScene="game/GameStart.scene",x.sceneRoot="",x.debug=!1,x.stat=!1,x.physicsDebug=!1,x.exportSceneToJson=!0,x.init()},{"./script/GameControl":3,"./script/GameUI":4,"./script/groundBox":5,"./script/hopBox":6,"./script/likBox":7,"./script/prop/JetpackBox":8,"./script/prop/PropellerBox":9,"./script/prop/SpringBox":10}],2:[function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=e("./GameConfig"),s=o(a),u=e("./ui/layaMaxUI"),l=(o(u),function(){function e(){r(this,e),window.Laya3D?Laya3D.init(s["default"].width,s["default"].height):Laya.init(s["default"].width,s["default"].height,Laya.WebGL),Laya.Physics&&Laya.Physics.enable(),Laya.DebugPanel&&Laya.DebugPanel.enable(),Laya.stage.scaleMode=s["default"].scaleMode,Laya.stage.screenMode=s["default"].screenMode,Laya.stage.alignV=s["default"].alignV,Laya.stage.alignH=s["default"].alignH,Laya.URL.exportSceneToJson=s["default"].exportSceneToJson,(s["default"].debug||"true"==Laya.Utils.getQueryString("debug"))&&Laya.enableDebugPanel(),s["default"].physicsDebug&&Laya.PhysicsDebugDraw&&Laya.PhysicsDebugDraw.enable(),s["default"].stat&&Laya.Stat.show(),Laya.alertGlobalError=!0,Laya.ResourceVersion.enable("version.json",Laya.Handler.create(this,this.onVersionLoaded),Laya.ResourceVersion.FILENAME_VERSION)}return i(e,[{key:"onVersionLoaded",value:function(){Laya.AtlasInfoManager.enable("fileconfig.json",Laya.Handler.create(this,this.onConfigLoaded))}},{key:"onConfigLoaded",value:function(){s["default"].startScene&&Laya.Scene.open(s["default"].startScene)}}]),e}());new l},{"./GameConfig":1,"./ui/layaMaxUI":11}],3:[function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=e("./GameUI"),l=o(u),c=function(e){function t(){r(this,t);var e=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return t.instance=e,e}return a(t,e),s(t,[{key:"onEnable",value:function(){this._started=!1,this.Ground_max=Laya.stage.height,this._Ground_max=-100,this.gorund_apart_height=130,this._tween=!0,this._rig=this.owner.getComponent(Laya.RigidBody),this._debug=Laya.PhysicsDebugDraw.enable(),this._isdebug=!1}},{key:"isdebug",value:function(){this._isdebug?(this.owner.removeChild(this._debug),this._isdebug=!1):(this.owner.addChild(this._debug),this._isdebug=!0)}},{key:"createGround",value:function(){for(;this.Ground_max>-this.owner.y+this._Ground_max;){var e=this.Ground_max-Math.random()*this.gorund_apart_height-31,t=Math.random()*(Laya.stage.width-120),n=Laya.Pool.getItemByCreateFun("groundBox",this.groundBox.create,this.groundBox);n.pos(t,e),"brown"!=n._components[2].ground_type&&(this.Ground_max=e),this.owner.addChild(n),"green"==n._components[2].ground_type&&Math.random()>.1&&this.createProp(t,e)}}},{key:"createProp",value:function(e,t){var n,o=Math.random();o>.9?(n=Laya.Pool.getItemByCreateFun("JetpackBox",this.JetpackBox.create,this.JetpackBox),n.pos(e+80*Math.random()+10,t-85),this.owner.addChild(n)):o>=.8?(n=Laya.Pool.getItemByCreateFun("PropellerBox",this.PropellerBox.create,this.PropellerBox),n.pos(e+80*Math.random()+10,t-54),this.owner.addChild(n)):o>=.5&&(n=Laya.Pool.getItemByCreateFun("SpringBox",this.SpringBox.create,this.SpringBox),n.pos(e+80*Math.random()+10,t-50),this.owner.addChild(n))}},{key:"onUpdate",value:function(){this._started&&(this.protagonist._y<-this.owner.y+Laya.stage.height/3?(this._tween&&(this._tween=!1,this._rig.setVelocity({x:0,y:10})),l["default"].instance.addScore(1),this.createGround()):(this._rig.setVelocity({x:0,y:0}),this._tween=!0))}},{key:"tween_run",value:function(){this._tween=!0}},{key:"startGame",value:function(){if(!this._started){this._started=!0,this.Ground_max=Laya.stage.height,this.owner.y=0,this.owner.removeChildren(0,this.owner.numChildren-1),this._isdebug&&this.owner.addChild(this._debug),this.protagonist=Laya.Pool.getItemByCreateFun("likBox",this.likBox.create,this.likBox),this.protagonist.pos(Laya.stage.width/2,Laya.stage.height-100),this.owner.addChild(this.protagonist);var e=Laya.Pool.getItemByCreateFun("groundBox",this.groundBox.create,this.groundBox);e.pos(Laya.stage.width/2,Laya.stage.height-100),this.owner.addChild(e),this.createGround()}}},{key:"endGame",value:function(){Laya.Tween.to(this.owner,{y:this.owner.y-800},100),this._started=!1,l["default"].instance.endGame()}}]),t}(Laya.Script);n["default"]=c},{"./GameUI":4}],4:[function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=e("./GameControl"),l=(o(u),function(e){function t(){r(this,t);var e=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return t.instance=e,Laya.MouseManager.multiTouchEnabled=!1,e}return a(t,e),s(t,[{key:"onEnable",value:function(){this._bckImg=this._children[0],this._bckImg.width=Laya.stage.width,this._bckImg.height=Laya.stage.height,this.score=0,this.score_text=this._children[2],this._gameBox=this._children[1],Laya.Physics.I.worldRoot=this._gameBox,this.playButton.on(Laya.Event.CLICK,this,this.startGame),this.debug.on(Laya.Event.CLICK,this,this.isdebug)}},{key:"addScore",value:function(e){this.score+=e,this.score_text.text=this.score}},{key:"isdebug",value:function(){this._gameBox._components[0].isdebug()}},{key:"startGame",value:function(){this.score=0,this.score_text.text=this.score,this.playButton.visible=!1,this.gameTilte.visible=!1,this.gameTilte.texture="game-tiles-interface/race-over.png",this._gameBox._components[0].startGame()}},{key:"endGame",value:function(){this.playButton.visible=!0,this.gameTilte.visible=!0}}]),t}(Laya.Scene));n["default"]=l},{"./GameControl":3}],5:[function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=function(e){function t(){o(this,t);var e=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this)),n=["green","blue","white","brown","tan"];return e.ground_type=n[Math.floor(Math.random()*n.length)],e}return i(t,e),a(t,[{key:"onEnable",value:function(){this._rig=this.owner.getComponent(Laya.RigidBody),this.owner.texture="game-tiles/ground-"+this.ground_type+".png",this.jump_height=-25,this.GroundType_onEnable()}},{key:"GroundType_onEnable",value:function(){switch(this.ground_type){case"blue":this._rig.setVelocity({x:-5,y:0});break;case"tan":this.ani_play=!0}}},{key:"onUpdate",value:function(){if("blue"==this.ground_type)this.owner.x<=0?this._rig.setVelocity({x:5,y:0}):this.owner.x>=Laya.stage.width-this.owner.width&&this._rig.setVelocity({x:-5,y:0});else if("tan"==this.ground_type&&this.ani_play&&this.owner.y>-this.owner._parent.y+Laya.stage.height/4){this.ani_play=!1;var e=Laya.Pool.getItemByCreateFun("tan",this.createTan,this);e.pos(0,0),this.owner.addChild(e),e.play(0,!1),this.owner.texture=""}this.owner.y>-this.owner._parent.y+Laya.stage.height&&this.owner.removeSelf()}},{key:"onTriggerEnter",value:function(e,t,n){if("protagonist"===e.label&&e.rigidBody.linearVelocity.y>=0)switch(this.ground_type){case"white":this.owner.removeSelf(),e.rigidBody.setVelocity({x:0,y:this.jump_height});break;case"brown":var o=Laya.Pool.getItemByCreateFun("brown",this.createBrown,this);o.pos(0,0),this.owner.addChild(o),o.play(0,!1),this.owner.texture="",this._rig.setVelocity({x:0,y:10});break;case"tan":e.rigidBody.setVelocity({x:0,y:this.jump_height});break;default:e.rigidBody.setVelocity({x:0,y:this.jump_height})}}},{key:"createBrown",value:function(){function e(){t.removeSelf(),Laya.Pool.recover("brown",t)}var t=new Laya.Animation;return t.loadAnimation("game/ground_brown.ani"),t.on(Laya.Event.COMPONENT_REMOVED,null,e),t}},{key:"createTan",value:function(){function e(){n.removeSelf(),Laya.Pool.recover("tan",n)}function t(){o.owner.removeSelf()}var n=new Laya.Animation,o=this;return n.loadAnimation("game/ground_tan.ani"),n.on(Laya.Event.COMPONENT_REMOVED,null,e),n.on(Laya.Event.COMPLETE,null,t),n}},{key:"onDisable",value:function(){this.owner.removeChildren(0,this.owner.numChildren-1),Laya.Pool.recover("groundBox",this.owner)}}]),t}(Laya.Script);n["default"]=s},{}],6:[function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=e("./GameControl"),l=o(u),c=function(e){function t(){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))}return a(t,e),s(t,[{key:"onEnable",value:function(){if(this._prop=0,this.fx="left",this.jump_height=-25,this._rig=this.owner.getComponent(Laya.RigidBody),this._rig.setVelocity({x:0,y:this.jump_height}),Laya.Gyroscope.instance.on(Laya.Event.CHANGE,this,this.onDeviceorientation),"undefined"!=typeof wx){wx.startAccelerometer({interval:"game"});var e=this;wx.onAccelerometerChange(function(t){var n=30*t.x;e.fx=n>0?"right":"left";var o={x:n,y:e._rig.linearVelocity.y};e._rig.linearVelocity=o})}}},{key:"onTriggerEnter",value:function(e,t,n){this.owner;"groundBox"===e.label&&this._rig.linearVelocity.y>=0&&(this.owner.texture="hop/hop-"+this.fx+"-touch.png")}},{key:"onUpdate",value:function(){this.owner.x>Laya.stage.width?this.owner.x=-this.owner.width:this.owner.x<-this.owner.width&&(this.owner.x=Laya.stage.width),this.owner.y>-this.owner._parent._y+Laya.stage.height&&(l["default"].instance.endGame(),this._rig.type="kinematic",this._rig.setVelocity({x:0,y:1})),this._rig.linearVelocity.y>0?this.owner.texture="hop/hop-"+this.fx+"-fall.png":this.owner.texture="hop/hop-"+this.fx+"-jump.png"}},{key:"onDeviceorientation",value:function(e,t){if(null===t.alpha)console.log("当前设备不支持陀螺仪。");else{var n=t.gamma/90*30;this.fx=n>0?"right":"left";var o={x:n,y:this._rig.linearVelocity.y};this._rig.linearVelocity=o}}}]),t}(Laya.Script);n["default"]=c},{"./GameControl":3}],7:[function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=e("./GameControl"),l=o(u),c=function(e){function t(){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))}return a(t,e),s(t,[{key:"onEnable",value:function(){if(this._prop=0,this.fx="left",this.lik_right="lik/lik-right.png",this.lik_left="lik/lik-left.png",this.jump_height=-25,this._rig=this.owner.getComponent(Laya.RigidBody),this._rig.setVelocity({x:0,y:this.jump_height}),this.now_mouse_x=null,Laya.Gyroscope.instance.on(Laya.Event.CHANGE,this,this.onDeviceorientation),"undefined"!=typeof wx){wx.startAccelerometer({interval:"game"});var e=this;wx.onAccelerometerChange(function(t){var n=30*t.x;e.fx=n>0?"right":"left",e.owner.texture=n>0?e.lik_right:e.lik_left;var o={x:n,y:e._rig.linearVelocity.y};e._rig.linearVelocity=o})}}},{key:"onTriggerEnter",value:function(e,t,n){this.owner;"groundBox"===e.label&&this._rig.linearVelocity.y>=0&&(this.owner.texture="lik/lik-"+this.fx+"-odskok.png")}},{key:"onUpdate",value:function(){this.owner.x>Laya.stage.width?this.owner.x=-this.owner.width:this.owner.x<-this.owner.width&&(this.owner.x=Laya.stage.width),this.owner.y>-this.owner._parent.y+Laya.stage.height&&(l["default"].instance.endGame(),this._rig.type="kinematic",this._rig.setVelocity({x:0,y:1}))}},{key:"onDeviceorientation",value:function(e,t){if(null===t.alpha)console.log("当前设备不支持陀螺仪。");else{var n=t.gamma/90*30;this.fx=n>0?"right":"left",this.owner.texture=n>0?this.lik_right:this.lik_left;var o={x:n,y:this._rig.linearVelocity.y};this._rig.linearVelocity=o}}}]),t}(Laya.Script);n["default"]=c},{"./GameControl":3}],8:[function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=function(e){function t(){o(this,t);var e=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.ground_type="jetpack",e}return i(t,e),a(t,[{key:"onEnable",value:function(){if(this._first=!0,this._rig=this.owner.getComponent(Laya.RigidBody),this._rig.type="static",this.owner.texture="game-tiles/prop-jetpack.png",Laya.Gyroscope.instance.on(Laya.Event.CHANGE,this,this.onDeviceorientation),"undefined"!=typeof wx){wx.startAccelerometer({interval:"game"});var e=this;wx.onAccelerometerChange(function(t){var n=30*t.x;n>0&&!e._first?e.isRight():e.isLeft();var o={x:n,y:e._rig.linearVelocity.y};e._rig.linearVelocity=o})}}},{key:"onUpdate",value:function(){this.owner.y>-this.owner._parent.y+Laya.stage.height&&this.owner.removeSelf()}},{key:"onTriggerEnter",value:function(e,t,n){if(this._first&&"protagonist"===e.label&&0==e.owner._components[1]._prop){e.owner._components[1]._prop=1,this._first=!1;var o=Laya.Pool.getItemByCreateFun("jetpack",this.createJetpack,this);o.pos(0,0),this.owner.addChild(o),o.play(0,!0),this.owner.texture="",this.owner.x=e.owner.x+70,this.owner.y=e.owner.y+26,e.rigidBody.setVelocity({x:0,y:0}),e.rigidBody.type="kinematic",this._rig.type="kinematic",Laya.Tween.to(e.owner,{y:e.owner.y-4e3},8e3,null,Laya.Handler.create(this,this.tweenEnd,[e])),Laya.Tween.to(this.owner,{y:this.owner.y-4e3},8e3,null,Laya.Handler.create(this,this.tweenEnd2,[this]))}}},{key:"createJetpack",value:function(){function e(){t.removeSelf(),Laya.Pool.recover("jetpack",t)}var t=new Laya.Animation;return t.loadAnimation("game/prop_jetpack.ani"),t.on(Laya.Event.COMPONENT_REMOVED,null,e),t}},{key:"isLeft",value:function(){this.owner.skewY=0}},{key:"isRight",value:function(){this.owner.skewY=180}},{key:"tweenEnd",value:function(e){e.rigidBody.type="dynamic",e.owner._components[1]._prop=0}},{key:"tweenEnd2",value:function(e){this.owner.removeChildren(0,this.owner.numChildren-1),this.owner.texture="game-tiles/prop-jetpack-10.png",e._rig.type="dynamic",Laya.Tween.to(e.owner,{rotation:360},2e3)}},{key:"onDisable",value:function(){Laya.Pool.recover("JetpackBox",this.owner)}},{key:"onDeviceorientation",value:function(e,t){if(null===t.alpha)console.log("当前设备不支持陀螺仪。");else{var n=t.gamma/90*30;n>0&&!this._first?this.isRight():this.isLeft();var o={x:n,y:this._rig.linearVelocity.y};this._rig.linearVelocity=o}}}]),t}(Laya.Script);n["default"]=s},{}],9:[function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=function(e){function t(){o(this,t);var e=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.ground_type="propeller",e}return i(t,e),a(t,[{key:"onEnable",value:function(){if(this._first=!0,this._rig=this.owner.getComponent(Laya.RigidBody),this._rig.type="static",Laya.Gyroscope.instance.on(Laya.Event.CHANGE,this,this.onDeviceorientation),"undefined"!=typeof wx){wx.startAccelerometer({interval:"game"});var e=this;wx.onAccelerometerChange(function(t){var n=30*t.x,o={x:n,y:e._rig.linearVelocity.y};e._rig.linearVelocity=o})}}},{key:"onUpdate",value:function(){this.owner.y>-this.owner._parent.y+Laya.stage.height&&this.owner.removeSelf()}},{key:"onTriggerEnter",value:function(e,t,n){if(this._first&&"protagonist"===e.label&&0==e.owner._components[1]._prop){e.owner._components[1]._prop=1,this._first=!1;var o=Laya.Pool.getItemByCreateFun("propeller",this.createPropeller,this);o.pos(0,0),this.owner.addChild(o),o.play(0,!0),this.owner.texture="",this.owner.x=e.owner.x+29,this.owner.y=e.owner.y-18,e.rigidBody.setVelocity({x:0,y:0}),e.rigidBody.type="kinematic",this._rig.type="kinematic",Laya.Tween.to(e.owner,{y:e.owner.y-2e3},4e3,null,Laya.Handler.create(this,this.tweenEnd,[e])),Laya.Tween.to(this.owner,{y:this.owner.y-2e3},4e3,null,Laya.Handler.create(this,this.tweenEnd2,[this]))}}},{key:"createPropeller",value:function(){function e(){t.removeSelf(),Laya.Pool.recover("propeller",t)}var t=new Laya.Animation;return t.loadAnimation("game/prop_propeller.ani"),t.on(Laya.Event.COMPONENT_REMOVED,null,e),t}},{key:"tweenEnd",value:function(e){e.rigidBody.type="dynamic",e.owner._components[1]._prop=0}},{key:"tweenEnd2",value:function(e){this.owner.removeChildren(0,this.owner.numChildren-1),this.owner.texture="game-tiles/prop-propeller.png",e._rig.type="dynamic",Laya.Tween.to(e.owner,{rotation:360},2e3)}},{key:"onDisable",value:function(){Laya.Pool.recover("PropellerBox",this.owner)}},{key:"onDeviceorientation",value:function(e,t){if(null===t.alpha)console.log("当前设备不支持陀螺仪。");else{var n=t.gamma/90*30,o={x:n,y:this._rig.linearVelocity.y};this._rig.linearVelocity=o}}}]),t}(Laya.Script);n["default"]=s},{}],10:[function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=function(e){function t(){o(this,t);var e=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.ground_type="spring",e}return i(t,e),a(t,[{key:"onEnable",value:function(){this._rig=this.owner.getComponent(Laya.RigidBody),this.owner.texture="game-tiles/prop-Spring-Compression.png"}},{key:"onUpdate",value:function(){this.owner.y>-this.owner._parent.y+Laya.stage.height&&this.owner.removeSelf()}},{key:"onTriggerEnter",value:function(e,t,n){"protagonist"===e.label&&e.rigidBody.linearVelocity.y>=0&&(this.owner.texture="game-tiles/prop-Spring-Extended.png",e.rigidBody.setVelocity({x:0,y:-40}))}},{key:"onDisable",value:function(){Laya.Pool.recover("SpringBox",this.owner)}}]),t}(Laya.Script);n["default"]=s},{}],11:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});Laya["class"],Laya["static"],laya.ui.View,laya.ui.Dialog,Laya.Scene;window.ui||(window.ui={}),n["default"]=ui},{}]},{},[2]);