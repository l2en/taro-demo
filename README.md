#### 环境

- **node**: ^10.12.0
- **taro**: 2.1.4
- **taro-ui**: ^2.3.3
- **dva-core**: ^2.0.2





#### 微信小程序
> 选择微信小程序模式，需要自行下载并打开微信开发者工具，然后选择项目根目录进行预览。
微信小程序编译预览及打包（去掉 --watch 将不会监听文件修改，并会对代码进行压缩打包）

### yarn
```
bash  yarn dev:weapp
yarn build:weapp
```
### npm script
```bash
npm run dev:weapp
npm run build:weapp
```

### 仅限全局安装
```bash
taro build --type weapp --watch
$ taro build --type weapp
```
###  npx 用户也可以使用
```bash
npx taro build --type weapp --watch
npx taro build --type weapp
```