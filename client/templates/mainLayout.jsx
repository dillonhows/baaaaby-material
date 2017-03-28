injectTapEventPlugin();

let { SvgIcons } = MUI.Libs,
    { AppCanvas, IconMenu, MenuItem , AppBar, IconButton, Styles, } = MUI,
    { ThemeManager, LightRawTheme, DarkRawTheme } = Styles;
const ReactTransitionGroup = React.addons.TransitionGroup;

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

MainLayout = class extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            colorText: true,
            transitionName: 'enter'
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

    renderListToolBar() {
        return (
            <AppBar title="小宝家+"
                onLeftIconButtonTouchTap={this.change}
                iconElementRight={<IconMenu anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                    targetOrigin={{horizontal: 'right', vertical: 'top'}}
                    iconButtonElement={<IconButton><SvgIcons.NavigationMoreVert /></IconButton>}>
                    <MenuItem primaryText="资讯消息" />
                    <MenuItem primaryText="测评报告" />
                    <MenuItem primaryText="通知" />
                    <MenuItem onClick={this.changeCol} primaryText={this.colorText ? '夜间模式' : '日间模式'} />
                </IconMenu>} />
        );
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.rootNum !== this.props.rootNum) {
            if (nextProps.rootNum > this.props.rootNum) {
                this.setState({transitionName: 'enter'});
            } else {
                this.setState({transitionName: 'leave'});
            }
        }
    }   

	render() {
		return (
            <div style={{position: 'relative', height: '100%', width: '100%', overflow: 'auto'}}>
                <header>
                    <title>小宝家+</title>
                    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                    <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1"/>
                    <meta name='renderer' content='webkit'/>
                    <meta httpEquiv='X-UA-Compatible' content='IE=Edge,chrome=1' />
                </header>
                <AppCanvas>
                    { this.props.listToolBar ? this.renderListToolBar() : this.props.appBar }
    				{ this.props.listToolBar ? <LeftNavView open={this.state.open} close={this.closeLeftMenu} /> : '' }
                    <ReactCSSTransitionGroup transitionName={this.state.transitionName} transitionEnterTimeout={500} transitionLeaveTimeout={500}>
                        {this.props.main}
                    </ReactCSSTransitionGroup>
    			</AppCanvas>
            </div>
		);
	}
}

MainLayout.childContextTypes = { muiTheme: React.PropTypes.object };
