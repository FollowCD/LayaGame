import { ui } from "../../ui/layaMaxUI";

/**
 * 仿微信卖量子项
 */
export default class WXModelItem extends ui.view.item.WXModelItemUI {
    
    /**
     * 获取数据源
     */
    public get dataSource(): IWXModelItemData {
        return this._dataSource;
    }

    /**
     * 设置数据源
     */
    public set dataSource(data: IWXModelItemData) {
        var self = this;
        self._dataSource = data;
        self.refresh();
    }

    /**
     * 刷新
     */
    public refresh(): void {
        var self = this;
        var data = self.dataSource;
        if (data) {
            self.imgIcon.skin = data.icon;
            self.lblName.text = data.title;
            self.imgStar.visible = data.star;
        }
    }
}