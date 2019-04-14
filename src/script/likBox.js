import GameControl from "./GameControl"
    
export default class likBox extends Laya.Script {
    constructor(){super();}
    onEnable() {
        //角色道具装备状态
        this._prop = 0;
        //角色方向
        this.fx = "left";
        this.lik_right = "lik/lik-right.png";
        this.lik_left = "lik/lik-left.png";
        //跳跃高度(x = 281.25, g = 55.55555555555556)
        this.jump_height = -25;
        /**获得组件引用，避免每次获取组件带来不必要的查询开销 */
        this._rig = this.owner.getComponent(Laya.RigidBody);
        //设置初始速度
        this._rig.setVelocity({ x: 0, y: this.jump_height });
        //记录鼠标移动前的位置
        this.now_mouse_x = null;

        //陀螺仪
        Laya.Gyroscope.instance.on(Laya.Event.CHANGE, this, this.onDeviceorientation);
        //微信小程序版的陀螺仪
        if(typeof wx !== "undefined"){
            wx.startAccelerometer({interval: 'game'});
            var instance = this;
            wx.onAccelerometerChange(function(rotationInfo){
                let Velocity_x = rotationInfo.x*30;
                instance.fx = Velocity_x  > 0 ? "right" : "left";
                instance.owner.texture = Velocity_x  > 0 ? instance.lik_right : instance.lik_left;
                let Velocity = { x: Velocity_x, y: instance._rig.linearVelocity.y };
                instance._rig.linearVelocity = Velocity;
            });
        }
    }

    onTriggerEnter(other, self, contact) {
        var owner = this.owner;
        if (other.label === "groundBox") {
            //下落过程中的碰撞处理
            if(this._rig.linearVelocity.y >= 0){
                this.owner.texture = "lik/lik-" + this.fx + "-odskok.png";
            }
        }
    }

    /*
    onStageMouseDown(){
        this.now_mouse_x = Laya.stage.mouseX;
    }

    onStageMouseUp(){
        this.now_mouse_x = null;
    }
    */

    onUpdate(){
        if(this.owner.x>Laya.stage.width)this.owner.x=-this.owner.width;
        else if(this.owner.x<-this.owner.width)this.owner.x = Laya.stage.width;
        if(this.owner.y >  (-this.owner._parent.y + Laya.stage.height)){
            GameControl.instance.endGame();
            this._rig.type = 'kinematic';
            this._rig.setVelocity({ x: 0, y: 1 });
        }
        /*
        //鼠标控制方向
        if(this.now_mouse_x != null){
            let Velocity_x = this._rig.linearVelocity.x + (Laya.stage.mouseX-this.now_mouse_x)/Laya.stage.width*30;
            this.owner.texture = Velocity_x  > 0 ? this.lik_right : this.lik_left;
            let Velocity = { x: Velocity_x, y: this._rig.linearVelocity.y };
            this.now_mouse_x = Laya.stage.mouseX;
            this._rig.linearVelocity = Velocity;
        }
        */
    }

    onDeviceorientation(absolute, rotationInfo) {
        if (rotationInfo.alpha === null)
		{
			console.log("当前设备不支持陀螺仪。");
		}else{
            let Velocity_x = (rotationInfo.gamma)/90*30;
            this.fx = Velocity_x  > 0 ? "right" : "left";
            this.owner.texture = Velocity_x  > 0 ? this.lik_right : this.lik_left;
            let Velocity = { x: Velocity_x, y: this._rig.linearVelocity.y };
            this._rig.linearVelocity = Velocity;
        }
    }
}