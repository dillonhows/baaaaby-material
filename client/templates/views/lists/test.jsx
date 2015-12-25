// 课程列表页
// 使用瓷砖作为列表设计思路,具体效果有待尝试

injectTapEventPlugin();

let {
    SvgIcons,
    Menu,
    MenuItem,
    IconMenu
} = MUI.Libs,

{
    AppCanvas,
    AppBar,
    Styles,
    IconButton,
    MenuDivider,
    RaisedButton,
    LeftNav,
    Card,
    CardMedia,
    CardTitle,
    CardText,
    List,
    ListItem,
    GridList,
    GridTile,
    FloatingActionButton
} = MUI,

{ ThemeManager, LightRawTheme, DarkRawTheme } = Styles;

let menuItems = [
  { route: '/', text: '首页' },
  { route: 'bb', text: '气质测评报告' },
  { route: 'cc', text: '每日问答报告' },
  {
     text: '禁用',
     disabled: true
  }
];


Test = React.createClass({
    childContextTypes: {
        muiTheme: React.PropTypes.object
    },
    getChildContext() {
        return {
            muiTheme: ThemeManager.getMuiTheme(this.state.colorText ? LightRawTheme : DarkRawTheme)
        };
    },
    change: function() {
        this.refs.leftNav.toggle();
    },
    clickMe: function () {
      console.log('显示动画效果并创建内容遮罩在列表上方');
      window.location.href = '/course/id';
    },
    changeCol: function () {
      this.setState({colorText: !this.state.colorText});
    },
    getInitialState: function() {
      return {
        colorText: true 
      };
    },
	render: function () {
    let RightIcon = (
    <IconMenu iconButtonElement={
      <IconButton><SvgIcons.ActionGrade /></IconButton>}>
      <MenuItem primaryText="资讯消息" />
      <MenuItem primaryText="测评报告" />
      <MenuItem primaryText="通知" />
      <MenuItem ref="changeColor" onClick={this.changeCol} primaryText={this.state.colorText ? '夜间模式' : '日间模式'} />
    </IconMenu>);
		return (<div>
            <header>
                <title>小宝家+</title>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1"/>
                <meta name='renderer' content='webkit'/>
                <meta httpEquiv='X-UA-Compatible' content='IE=Edge,chrome=1' />
            </header>
            <AppCanvas>
            <LeftNav ref="leftNav" docked={false} menuItems={menuItems} />
              <AppBar title="小宝家+" onLeftIconButtonTouchTap={this.change} iconElementRight={RightIcon} />
            <Card style={{paddingTop:64}}>
            <CardMedia>
              <img src="/img/BANNER.jpg"/>
            </CardMedia>
            </Card>
            <List style={{paddingTop:0,paddingBottom:0}} >
              <ListItem className="TestList" onTouchTap={this.clickMe}>
                <Card>
                  <CardMedia overlay={<CardTitle title="新闻" subtitle="小宝家+"/>}>
                    <img src="/img/1.jpg"/>
                  </CardMedia>
                </Card>
              </ListItem>
              <ListItem className="TestList">
                <Card>
                  <CardMedia overlay={<CardTitle title="新闻" subtitle="小宝家+"/>}>
                    <img src="/img/1.jpg"/>
                  </CardMedia>
                </Card>
              </ListItem>
            </List>
            </AppCanvas>
          </div>);
	}
});