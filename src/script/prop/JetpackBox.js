
    
export default class JetpackBox extends Laya.Script{
    /** @prop {name:Jetpack-ani,tips:"动画资源",type:Res}*/

    constructor(){
        super();
        //道具类型初始化设置,随机设置类型。
        //为了外部控制器能提前获取到，道具类型必须在加载前(onEnable)初始化
        this.ground_type = "jetpack";
    }

    onEnable(){
        this._first = true;
        /**获得组件引用，避免每次获取组件带来不必要的查询开销 */
        this._rig = this.owner.getComponent(Laya.RigidBody);
        this._rig.type = "static";
        this.owner.texture = "game-tiles/prop-jetpack.png";
        //陀螺仪
        Laya.Gyroscope.instance.on(Laya.Event.CHANGE, this, this.onDeviceorientation);
        //微信小程序版的陀螺仪
        if(typeof wx !== "undefined"){
            wx.startAccelerometer({interval: 'game'});
            var instance = this;
            wx.onAccelerometerChange(function(rotationInfo){
                let Velocity_x = rotationInfo.x*30;
                if(Velocity_x  > 0 && !instance._first) instance.isRight(); else instance.isLeft();
                let Velocity = { x: Velocity_x, y: instance._rig.linearVelocity.y };
                instance._rig.linearVelocity = Velocity;
            });
        }
    }

    onUpdate() {
        //如果地板超出屏幕，则移除地板
        if (this.owner.y > -this.owner._parent.y+Laya.stage.height) {
            this.owner.removeSelf();
        }
    }

    onTriggerEnter(other, self, contact) {
        if (this._first && other.label === "protagonist" && other.owner._components[1]._prop == 0) {
            other.owner._components[1]._prop = 1;
            this._first = false;

            let jetpack = Laya.Pool.getItemByCreateFun("jetpack", this.createJetpack, this);
            jetpack.pos(0, 0);
            this.owner.addChild(jetpack);
            jetpack.play(0, true);
            this.owner.texture = null;

            this.owner.x = other.owner.x + 70;
            this.owner.y = other.owner.y + 26;

            other.rigidBody.setVelocity({x : 0 , y : 0});
            other.rigidBody.type = "kinematic";
            this._rig.type = "kinematic";
            Laya.Tween.to(other.owner, {y : other.owner.y - 4000}, 8000,null,Laya.Handler.create(this,this.tweenEnd,[other]));
            Laya.Tween.to(this.owner, {y : this.owner.y - 4000}, 8000,null,Laya.Handler.create(this,this.tweenEnd2,[this]));
        }
    }

    createJetpack() {
        let ani = new Laya.Animation();
        ani.loadAnimation("ani/prop_jetpack.ani");
        
        ani.on(Laya.Event.COMPONENT_REMOVED, null, recover);
        function recover() {
            ani.removeSelf();
            Laya.Pool.recover("jetpack", ani);
        }
        return ani;
    }

    isLeft(){
        this.owner.skewY = 0;
        //this.owner.x = other.owner.x + 70;
    }
    isRight(){
        this.owner.skewY = 180;
        //this.owner.x = other.owner.x + 52;
    }

    tweenEnd(other){
        other.rigidBody.type = "dynamic";
        other.owner._components[1]._prop = 0;
    }

    tweenEnd2(me){
        //动画组件移除
        this.owner.removeChildren(0,this.owner.numChildren-1);
        this.owner.texture = "game-tiles/prop-jetpack-10.png";
        me._rig.type = "dynamic";
        Laya.Tween.to(me.owner, {rotation : 360}, 2000);
    }
    

    onDisable() {
        //盒子被移除时，回收盒子到对象池，方便下次复用，减少对象创建开销。
        Laya.Pool.recover("JetpackBox", this.owner);
    }

    onDeviceorientation(absolute, rotationInfo) {
        if (rotationInfo.alpha === null)
		{
			console.log("当前设备不支持陀螺仪。");
		}else{
            let Velocity_x = (rotationInfo.gamma)/90*30;
            if(Velocity_x  > 0 && !this._first) this.isRight(); else this.isLeft();
            let Velocity = { x: Velocity_x, y: this._rig.linearVelocity.y };
            this._rig.linearVelocity = Velocity;
        }
    }
}