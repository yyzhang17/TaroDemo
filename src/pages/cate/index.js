import Taro, { Component } from "@tarojs/taro";
import { View, Text} from "@tarojs/components";
import "./index.less";

export default class Index extends Component {
  config = {
    navigationBarTitleText: "分类"
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className='index'>
        <Text>分类</Text>
      </View>
    );
  }
}
