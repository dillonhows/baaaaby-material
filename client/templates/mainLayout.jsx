injectTapEventPlugin();

let {
    SvgIcons
} = MUI.Libs,

{
    AppCanvas,
    AppBar,
    IconButton,
    Styles,
} = MUI,

{ ThemeManager, LightRawTheme, DarkRawTheme } = Styles;
mainLayout = class extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            colorText: true
        };
        this.change = this.change.bind(this);
        this.changeCol = this.changeCol.bind(this);
        this.closeLeftMenu = this.closeLeftMenu.bind(this);
    }

    getChildContext() {
        return {
            muiTheme: ThemeManager.getMuiTheme(this.state.colorText ? LightRawTheme : DarkRawTheme)
        };
    }

    change() {
        this.setState({open: true});
    }

    closeLeftMenu() {
        this.setState({open: false});
    }

    changeCol() {
        this.setState({colorText: !this.state.colorText});
    }

	render() {
		return (
            <div>
                <header>
                    <title>小宝家+</title>
                    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                    <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1"/>
                    <meta name='renderer' content='webkit'/>
                    <meta httpEquiv='X-UA-Compatible' content='IE=Edge,chrome=1' />
                </header>
    			<AppCanvas>
                    { this.props.listToolBar ? <AppBar title="小宝家+" onLeftIconButtonTouchTap={this.change} iconElementRight={<RightIconView colorText={this.state.colorText} changeCol={this.changeCol} />} /> : this.props.appBar }
    				{ this.props.listToolBar ? <LeftNavView open={this.state.open} close={this.closeLeftMenu} /> : '' }
    				{this.props.main}
    			</AppCanvas>
            </div>
		);
	}
}

mainLayout.childContextTypes = { muiTheme: React.PropTypes.object };
