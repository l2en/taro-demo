import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components';

export default class Order extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  config = {
    navigationBarTitleText: '工单'
  }
  render () {
    return (
          <Text>工单</Text>
    )
  }
}
