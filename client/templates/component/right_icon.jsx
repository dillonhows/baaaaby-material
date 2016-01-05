// 列表页右上角菜单组件

let {
	SvgIcons,
	IconMenu,
	MenuItem
} = MUI.Libs,

{
	Styles,
	IconButton
} = MUI,

{ ThemeManager, LightRawTheme, DarkRawTheme } = Styles;

RightIconView = class extends React.Component {

	render () {
		return (
			<IconMenu anchorOrigin={{horizontal: 'right', vertical: 'top'}} targetOrigin={{horizontal: 'right', vertical: 'top'}} iconButtonElement={
				<IconButton><SvgIcons.NavigationMoreVert /></IconButton>}>
				<MenuItem primaryText="资讯消息" />
				<MenuItem primaryText="测评报告" />
				<MenuItem primaryText="通知" />
				<MenuItem ref="changeColor" onClick={this.props.changeCol} primaryText={this.props.colorText ? '夜间模式' : '日间模式'} />
			</IconMenu>
		);
	}
}
