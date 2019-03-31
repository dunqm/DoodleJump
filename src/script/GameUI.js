import GameControl from "./GameControl"

/**
 * 主要对场景GameStart的控制，
 * 积分的显示，背景图片调节，游戏框体
*/
export default class GameUI extends Laya.Scene{
    constructor(){
        super();
        //设置单例的引用方式，方便其他类引用
        GameUI.instance = this;
        //关闭多点触控
        Laya.MouseManager.multiTouchEnabled = false;
    }
    onEnable() {
        //戏控制脚本引用，避免每次获取组件带来不必要的性能开销
        //this._control = this.getComponent(GameControl);

        //背景图片大小自适应屏幕
        this._bckImg = this._children[0];
        this._bckImg.width = Laya.stage.width;
        this._bckImg.height = Laya.stage.height;

        //位图字体的使用
        this.mFontName = "font";
        this.mBitmapFont = new Laya.BitmapFont();
        this.mBitmapFont.loadFont("bitmapFont/font.fnt",new Laya.Handler(this,this.onLoaded));
        //高度(分数)
        this.score = 0;
        this.score_text = this._children[2];
        
        //将物理世界指定为Gamebo
        this._gameBox = this._children[1];
        Laya.Physics.I.worldRoot = this._gameBox;
        //开始游戏按钮
        this.playButton.on(Laya.Event.CLICK, this, this.startGame);
        //碰撞框显示
        this.debug.on(Laya.Event.CLICK, this, this.isdebug);
    }

    onLoaded(){
        this.init();
    } 
    init(){
        //如果位图字体中，没放空格，最好设置一个空格宽度
        //this.mBitmapFont.setSpaceWidth(10);
        Laya.Text.registerBitmapFont(this.mFontName,this.mBitmapFont);
        this.score_text.font = this.mFontName;
    }

    /* 增加分数 */
    addScore(value) {
        this.score += value;
        this.score_text.text = this.score;
    }

    isdebug(){
        this._gameBox._components[0].isdebug();
    }
    /* 开始游戏 */
    startGame(){
        this.score = 0;
        this.score_text.text = this.score;
        this.playButton.visible = false;
        this.gameTilte.visible = false;
        this.gameTilte.texture = "game-tiles-interface/race-over.png";
        this._gameBox._components[0].startGame();
    }

    /* 停止游戏 */
    endGame() {
        this.playButton.visible = true;
        this.gameTilte.visible = true;
        //this._control.stopGame();
    }
}