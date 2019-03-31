
export default class groundBox extends Laya.Script {
    /** @prop {name:brown-ani,tips:"动画资源",type:Res}*/
    /** @prop {name:tan-ani,tips:"动画资源",type:Res}*/


    constructor(){
        super();
        //地板类型初始化设置,随机设置类型。
        //为了外部控制器能提前获取到，地板类型必须在加载前(onEnable)初始化
        var ground_typeAll = ["green","blue","white","brown","tan"];
        this.ground_type = ground_typeAll[Math.floor(Math.random()*(ground_typeAll.length))];
        this.ground_type = "tan";
    }
    onEnable() {
        /**获得组件引用，避免每次获取组件带来不必要的查询开销 */
        this._rig = this.owner.getComponent(Laya.RigidBody);
        //加载相应类型的地板图片
        this.owner.texture = "game-tiles/ground-" + this.ground_type + ".png";
        //反弹速度
        this.jump_height = -25;
        this.GroundType_onEnable();
    }

    //针对不同类型的地板进行不同的初始化
    GroundType_onEnable(){
        switch(this.ground_type){
            case "blue":
            this._rig.setVelocity({ x: -5, y: 0 });
            break;

            case "tan":
            this.ani_play = true;
            break;
        }
    }

    onUpdate() {
        //针对不同类型地板的不同事件
        if(this.ground_type == "blue"){
            if(this.owner.x<=0){
                this._rig.setVelocity({ x: 5, y: 0 });
            }else if(this.owner.x>=Laya.stage.width-this.owner.width){
                this._rig.setVelocity({ x: -5, y: 0 });
            }
        }else if(this.ground_type == "tan" && this.ani_play){
            if (this.owner.y > -this.owner._parent.y + Laya.stage.height/4) {
                this.ani_play = false;
                let tan = Laya.Pool.getItemByCreateFun("tan", this.createTan, this);
                tan.pos(0, 0);
                this.owner.addChild(tan);
                tan.play(0, false);
                this.owner.texture = null;
                
            }
        }

        //如果地板超出屏幕，移除地板
        if (this.owner.y > -this.owner._parent.y+Laya.stage.height) {
            this.owner.removeSelf();
        }
    }


    onTriggerEnter(other, self, contact) {
        if (other.label === "protagonist" ) {
            if(other.rigidBody.linearVelocity.y >= 0){
                switch(this.ground_type){
                    case "white":
                    this.owner.removeSelf();
                    other.rigidBody.setVelocity({ x: 0, y: this.jump_height });
                    break;

                    case "brown":
                    let brown = Laya.Pool.getItemByCreateFun("brown", this.createBrown, this);
                    brown.pos(0, 0);
                    this.owner.addChild(brown);
                    brown.play(0, false);
                    this.owner.texture = null;
                    this._rig.setVelocity({ x: 0, y: 10 });
                    break;

                    case "tan":
                    other.rigidBody.setVelocity({ x: 0, y: this.jump_height });
                    break;


                    default:
                    other.rigidBody.setVelocity({ x: 0, y: this.jump_height });
                }
            }
        }
    }

     /**使用对象池创建brown地板动画 */
    createBrown() {
        let ani = new Laya.Animation();
        ani.loadAnimation("ani/ground_brown.ani");
        ani.on(Laya.Event.COMPONENT_REMOVED, null, recover);
        function recover() {
            ani.removeSelf();
            Laya.Pool.recover("brown", ani);
        }
        return ani;
    }

     /**使用对象池创建tan地板动画 */
     createTan() {
        let ani = new Laya.Animation();
        let Me = this;
        ani.loadAnimation("ani/ground_tan.ani");
        ani.on(Laya.Event.COMPONENT_REMOVED, null, recover);
        function recover() {
            ani.removeSelf();
            Laya.Pool.recover("tan", ani);
        }
        ani.on(Laya.Event.COMPLETE, null, complete);
        function complete(){
            Me.owner.removeSelf();
        }
        return ani;
    }



    onDisable() {
        //动画组件移除
        this.owner.removeChildren(0,this.owner.numChildren-1);
        //盒子被移除时，回收盒子到对象池，方便下次复用，减少对象创建开销。
        Laya.Pool.recover("groundBox", this.owner);
    }
}