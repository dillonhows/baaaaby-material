let {
	AppCanvas,
	AppBar,
    Styles,
    LeftNav,
} = MUI,

{ ThemeManager, LightRawTheme, DarkRawTheme } = Styles;
ListAppBar = class extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
        	open: false,
        	colorText: true
    	};
    	this.change = this.change.bind(this);
    	this.changeCol = this.changeCol.bind(this);
    }

    getChildContext() {
		return {
			muiTheme: ThemeManager.getMuiTheme(this.state.colorText ? LightRawTheme : DarkRawTheme)
		};
    }

    change() {
		this.setState({open: true});
    }

    changeCol() {
		this.setState({colorText: !this.state.colorText});
		this.setState({open: false});
    }

	render() {
		const RightIcon = <RightIconView colorText={this.state.colorText} changeCol={this.changeCol} />;
		return (
			<AppCanvas>
				<AppBar title="小宝家+" onLeftIconButtonTouchTap={this.change} iconElementRight={RightIcon} />
				<LeftNavView open={this.state.open} />
			</AppCanvas>
		);
	}
}

ListAppBar.childContextTypes = { muiTheme: React.PropTypes.object };