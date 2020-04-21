import Taro, { Component } from '@tarojs/taro';
import TabBar from './TabBar/index';
import pages from '../pageUrl/index';

import './app.scss'
import 'taro-ui/dist/style/index.scss' // 全局引入一次即可
// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  config = {
    pages,
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数 (改不改都没用)
  render () {
    return (
      <TabBar/>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
