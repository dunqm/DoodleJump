import GameUI from "./GameUI";
    
/*
主要对GameBox的控制
此类型主要控制游戏中物体(如主角、地板)的创建与删除
画面(物理世界)的移动
积分的计算

*/

export default class GameControl extends Laya.Script {
    /** @prop {name:groundBox,tips:"地板对象",type:Prefab}*/
    /** @prop {name:likBox,tips:"角色对象",type:Prefab}*/
    /** @prop {name:hopBox,tips:"角色对象",type:Prefab}*/
    /** @prop {name:PropellerBox,tips:"道具对象",type:Prefab}*/
    /** @prop {name:SpringBox,tips:"道具对象",type:Prefab}*/
    /** @prop {name:JetpackBox,tips:"道具对象",type:Prefab}*/


    constructor(){
        super();
        //设置单例的引用方式，方便其他类引用
        GameControl.instance = this;
    }

    onEnable(){
        //DebugPanel.init();
        this._started = false;

        //当前创建绿地的最高位置
        this.Ground_max = Laya.stage.height;
        //需要创建绿地的最高位置(设置为负值意味着还未显示提前加载)
        this._Ground_max = -100;
        //两绿地垂直最高距离(或人物跳跃最高高度)
        this.gorund_apart_height = 110;

        //画面移动时的缓动开关
        this._tween = true;
        this._rig = this.owner.getComponent(Laya.RigidBody);

        //将physicsDebug的绘画范围改为物理世界(GameBox)，同时更改对应代码(laya.physics.js:3639)
        this._debug = Laya["PhysicsDebugDraw"].enable();
        this._isdebug = false;
    }
    isdebug(){
        if(this._isdebug){
            this.owner.removeChild(this._debug);
            this._isdebug = false;
        }else{
            this.owner.addChild(this._debug);
            this._isdebug = true;
        }
    }

    createGround(){
        let types = this.createGroundType();
        while(this.Ground_max > -this.owner.y + this._Ground_max){
            let Ground_y =  this.Ground_max - Math.random() * this.gorund_apart_height - 34;
            let Ground_x = Math.random() * (Laya.stage.width - 120);

            let ground = Laya.Pool.getItemByCreateFun("groundBox", this.groundBox.create, this.groundBox);
            ground.pos(Ground_x, Ground_y);
            let type = types[Math.floor(Math.random() * types.length)];
            //brown类型的地板属于额外地板类型
            if(type == 2)
            if(this.broken == 1){
                this.broken = 0;
                type = 0;
            }else{
                this.broken  = 1;
            }
            this.Ground_max = Ground_y;
            //ground.GroundType_into(type);
            ground._components[2].GroundType_into(type);
            this.owner.addChild(ground);
            
            //随机在地板上创建道具
            if( type == 0  && Math.random() > 0.5){
                this.createProp(Ground_x,Ground_y);
            }
        }
    }

    /**
     * 根据分数给出地板类型规律的数组
     * 0: green
     * 1: blue
     * 2: brown
     * 3: white
     * 4: tan
     */
    createGroundType(){
        var score = GameUI.instance.getScore();
        var types = [];
        if (score >= 5000) types = [1, 2, 3, 3, 4, 4, 4];
        else if (score >= 3500 && score < 5000) types = [1, 1, 2, 3, 3, 3, 4, 4];
        else if (score >= 2000 && score < 3500) types = [1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3];
        else if (score >= 1000 && score < 2000) types = [1, 1, 1, 2, 2, 2, 2, 2];
        else if (score >= 500 && score < 1000) types = [0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2];
        else if (score >= 100 && score < 500) types = [0, 0, 0, 0, 1, 1];
        else types = [0];
        return types;
    }
    //创建道具
    createProp(x,y){
        var randomNumber = Math.random();
        var prop;
        if(randomNumber > 0.9){
            prop = Laya.Pool.getItemByCreateFun("JetpackBox", this.JetpackBox.create, this.JetpackBox);
            prop.pos(x + Math.random() * 70 + 10, y - 85);
            this.owner.addChild(prop);
        }else if(randomNumber >= 0.8){
            prop = Laya.Pool.getItemByCreateFun("PropellerBox", this.PropellerBox.create, this.PropellerBox);
            prop.pos(x + Math.random() * 70 + 10, y - 54);
            this.owner.addChild(prop);
        }else if(randomNumber >= 0.5){
            prop = Laya.Pool.getItemByCreateFun("SpringBox", this.SpringBox.create, this.SpringBox);
            prop.pos(x + Math.random() * 70 + 10, y - 50);
            this.owner.addChild(prop);
        }
    }
    
    onUpdate(){
        //如果主角达到屏幕一半高度时界面向下移动
        if(this._started){
            if(this.protagonist._y < (-this.owner.y + Laya.stage.height / 3)){
                
                if(this._tween){
                    this._tween = false;
                    this._rig.setVelocity({ x: 0, y: 10 });
                }
                
                //this.owner.y += 5;
                GameUI.instance.addScore(1);
                this.createGround();
            }else{
                this._rig.setVelocity({ x: 0, y: 0 });
                this._tween = true;
            }
        }
    }
    tween_run(){
        this._tween = true;
    }

    startGame(){
        if(this._started) return ;
        this._started = true;
        //当前创建绿地的最高位置
        this.Ground_max = Laya.stage.height;
        this.owner.y=0;
        this.owner.removeChildren(0,this.owner.numChildren-1);
        if(this._isdebug)this.owner.addChild(this._debug);
        //创建主角(likBox/hopBox)
        this.protagonist = Laya.Pool.getItemByCreateFun("likBox", this.likBox.create, this.likBox);
        this.protagonist.pos(Laya.stage.width / 2, Laya.stage.height - 100);
        this.owner.addChild(this.protagonist);
        
        //创建草地
        let ground = Laya.Pool.getItemByCreateFun("groundBox", this.groundBox.create, this.groundBox);
        ground.pos(Laya.stage.width / 2, Laya.stage.height - 100);
        ground._components[2].GroundType_into(0);
        this.owner.addChild(ground);
        this.createGround();
    }
    endGame(){
        Laya.Tween.to(this.owner, {y : this.owner.y - 800}, 100);
        this._started = false;
        GameUI.instance.endGame();
    }
}