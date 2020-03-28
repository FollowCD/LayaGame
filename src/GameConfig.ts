/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */
import MoreGameItem1 from "./side/item/MoreGameItem1"
import SideBotItem from "./side/item/SideBotItem"
import SideGridItem from "./side/item/SideGridItem"
import SideListItem from "./side/item/SideListItem"
import SideNewItem from "./side/item/SideNewItem"
import SideBotList from "./side/item/SideBotList"
import SideGrid from "./side/item/SideGrid"
import SideIconRT from "./side/item/SideIconRT"
import DebugView from "./script/DebugView"
import FailView from "./script/FailView"
import HomeView from "./script/HomeView"
import LoadingUI from "./script/LoadingUI"
import RankingView from "./script/RankingView"
import ResultView from "./script/ResultView"
import FlyGold from "./core/ui/FlyGold"
/*
* 游戏初始化配置;
*/
export default class GameConfig{
    static width:number=750;
    static height:number=1334;
    static scaleMode:string="fixedwidth";
    static screenMode:string="none";
    static alignV:string="top";
    static alignH:string="left";
    static startScene:any="side/SideIconRT.scene";
    static sceneRoot:string="";
    static debug:boolean=false;
    static stat:boolean=true;
    static physicsDebug:boolean=false;
    static exportSceneToJson:boolean=false;
    constructor(){}
    static init(){
        var reg: Function = Laya.ClassUtils.regClass;
        reg("side/item/MoreGameItem1.ts",MoreGameItem1);
        reg("side/item/SideBotItem.ts",SideBotItem);
        reg("side/item/SideGridItem.ts",SideGridItem);
        reg("side/item/SideListItem.ts",SideListItem);
        reg("side/item/SideNewItem.ts",SideNewItem);
        reg("side/item/SideBotList.ts",SideBotList);
        reg("side/item/SideGrid.ts",SideGrid);
        reg("side/item/SideIconRT.ts",SideIconRT);
        reg("script/DebugView.ts",DebugView);
        reg("script/FailView.ts",FailView);
        reg("script/HomeView.ts",HomeView);
        reg("script/LoadingUI.ts",LoadingUI);
        reg("script/RankingView.ts",RankingView);
        reg("script/ResultView.ts",ResultView);
        reg("core/ui/FlyGold.ts",FlyGold);
    }
}
GameConfig.init();