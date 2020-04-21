import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components';
import Home from '../../views/Home/index';
import Order from '../../views/Order/index';

import { AtTabBar } from 'taro-ui'
import './index.scss';

export default class TabBar extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      current: 0
    }
  }

  handleClick(current) {
    if (current === this.state.current) return;
    this.setState({ current })
  }

  render() {
    const { current } = this.state;
    return (
      <View>
        {current == '0' ? <Home /> : <Order />}
        <AtTabBar
          fixed
          tabList={[
            { title: '首页', iconType: 'home' },
            { title: '工单', iconType: 'bullet-list', text: '100', max: '99' },
            { title: '我的', iconType: 'user' }
          ]}
          onClick={this.handleClick.bind(this)}
          current={current}
        />
      </View>
    )
  }
}