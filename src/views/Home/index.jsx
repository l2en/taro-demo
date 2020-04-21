import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components';

import './index.scss'

export default class Home extends Component {

  defaultProps ={
    toOtherMenu:()=>{}
  }
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  config = {
    navigationBarTitleText: '首页'
  }

  render () {
    return (
      <Text>HOME</Text>
    )
  }
}
