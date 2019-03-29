
    
export default class SpringBox extends Laya.Script{
    constructor(){
        super();
        //道具类型初始化设置,随机设置类型。
        //为了外部控制器能提前获取到，道具类型必须在加载前(onEnable)初始化
        this.ground_type = "spring";
    }

    onEnable(){
        /**获得组件引用，避免每次获取组件带来不必要的查询开销 */
        this._rig = this.owner.getComponent(Laya.RigidBody);
        this.owner.texture = "game-tiles/prop-Spring-Compression.png";
    }

    onUpdate() {
        //如果地板超出屏幕，则移除地板
        if (this.owner.y > -this.owner._parent.y+Laya.stage.height) {
            this.owner.removeSelf();
        }
    }

    onTriggerEnter(other, self, contact) {
        if (other.label === "protagonist" ) {
            if(other.rigidBody.linearVelocity.y >= 0){
                this.owner.texture = "game-tiles/prop-Spring-Extended.png";
                other.rigidBody.setVelocity({x : 0 , y : -40});
            }
        }
    }

    onDisable() {
        //盒子被移除时，回收盒子到对象池，方便下次复用，减少对象创建开销。
        Laya.Pool.recover("SpringBox", this.owner);
    }
}