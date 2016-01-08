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
            oldView: this.props.main
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

    componentWillUpdate(nextProps, nextState) {
        const _this = this;
        // console.log(nextProps === this.props);
        // 通过nextProps自己写补间...?
        if (nextProps !== this.props) {
            this.setState({oldView: this.props.main});
            document.getElementById('enter').style.opacity = 0;
            document.getElementById('enter').style.transition = '';
            document.getElementById('leave').style.opacity = 1;
            document.getElementById('leave').style.transition = '';
            setTimeout(function () {
                document.getElementById('enter').style.opacity = 1;
            document.getElementById('enter').style.transition = 'opacity .5s ease-in';
                document.getElementById('leave').style.opacity = 0;
            document.getElementById('leave').style.transition = 'opacity .5s ease-in';
            },1);
            setTimeout(function () {
                _this.setState({oldView: null});
            },501);
        }
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
                    { this.props.listToolBar ? this.renderListToolBar() : this.props.appBar }
    				{ this.props.listToolBar ? <LeftNavView open={this.state.open} close={this.closeLeftMenu} /> : '' }
                    <div id='leave' style={{opacity: 1, position: 'absolute', transition: 'opacity .5s ease-in'}}>{this.state.oldView}</div>
			        <div id='enter' style={{opacity: 0, transition: 'opacity .5s ease-in'}}>{this.props.main}</div>
    			</AppCanvas>
            </div>
		);
	}
}

MainLayout.childContextTypes = { muiTheme: React.PropTypes.object };
