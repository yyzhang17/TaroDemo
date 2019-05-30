import Taro, { Component } from "@tarojs/taro";
import Index from "./pages/index";

import "./app.less";

class App extends Component {
  config = {
    pages: ["pages/index/index", "pages/cate/index", "pages/cart/index"],
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#b4282d",
      navigationBarTitleText: "Taro-DEMO",
      navigationBarTextStyle: "white"
    },
    tabBar: {
      color: "#666",
      selectedColor: "#b4282d",
      backgroundColor: "#fafafa",
      borderStyle: 'black',
      list: [
        {
          pagePath: "pages/index/index",
          iconPath: "./assets/tab-bar/home.png",
          selectedIconPath: "./assets/tab-bar/home-active.png",
          text: "首页"
        },
        {
          pagePath: "pages/cate/index",
          iconPath: "./assets/tab-bar/cate.png",
          selectedIconPath: "./assets/tab-bar/cate-active.png",
          text: "分类"
        },
        {
          pagePath: "pages/cart/index",
          iconPath: "./assets/tab-bar/cart.png",
          selectedIconPath: "./assets/tab-bar/cart-active.png",
          text: "购物车"
        }
      ]
    }
  };

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return <Index />;
  }
}

Taro.render(<App />, document.getElementById("app"));
