// 左侧菜单

let {
	MenuItem
} = MUI.Libs,

{
    LeftNav
} = MUI;

LeftNavView = class LeftMenu extends React.Component {
    constructor(props) {
        super(props);
    }

	componentWillMount() {
		this.setState({open: this.props.open});
	}

	componentWillReceiveProps(nextProps) {
		this.setState({open: nextProps.open});
	}

	closeLeftMenu(url) {
		this.props.close();
		FlowRouter.redirect(url);
	}

	render() {
		return (
			<LeftNav ref="leftNav" docked={false} onRequestChange={this.props.close} open={this.state.open}>
				<MenuItem onTouchTap={this.closeLeftMenu.bind(this, '/')}>首页</MenuItem>
				<MenuItem onTouchTap={this.closeLeftMenu.bind(this, '/temperament')}>气质测评报告</MenuItem>
				<MenuItem onTouchTap={this.closeLeftMenu.bind(this, '/')}>每日问答报告</MenuItem>
			</LeftNav>
		);
	}
}