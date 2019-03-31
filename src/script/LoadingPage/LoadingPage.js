
/**
 * 预加载页面
 */
export default class LoadingPage extends Laya.Scene{
    constructor(){
        super();
    }

    onEnable() {
        
        //背景图片大小自适应屏幕
        this._bckImg = this.getChildByName('bckImg');
        this._bckImg.width = Laya.stage.width;
        this._bckImg.height = Laya.stage.height;
        //显示进度文字
        this.text = new Laya.Text();
        this.text.font = "Impact";
        this.text.text = "0%";
        this.text.fontSize = 60;
        this.text.color = "#333";
        this.text.x = Laya.stage.width - this.text.width >> 1;
        this.text.y = (Laya.stage.height - this.text.height >> 1) - 120;
        this.addChild(this.text);
        //显示进度条
        this.sp = new Laya.Sprite();
        this.addChild(this.sp);
        this.sp.graphics.drawRect(120, Laya.stage.height >> 1, 0, 50, "#333");
        this.on(Laya.Event.PROGRESS, this, this.onProgress);
    }
    
    onDestroy() {
        this.off(Laya.Event.PROGRESS, this, this.onProgress)
    }
    
    onProgress(progress) {
        this.sp.graphics.clear();
        this.sp.graphics.drawRect(120, Laya.stage.height >> 1, progress*400, 50, "#333");
        this.text.text = `${(progress * 100).toFixed(2)}%`;
    }

}
