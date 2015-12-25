//app.jsx
injectTapEventPlugin();

let {
    SvgIcons
} = MUI.Libs,
{
    AppCanvas,
    AppBar,
    Styles,
    RaisedButton,
    IconButton,
    Card,
    CardMedia,
    CardTitle,
    CardText
} = MUI,
{ ThemeManager, DarkRawTheme } = Styles;

CourseView = React.createClass({
    childContextTypes: {
        muiTheme: React.PropTypes.object
    },

    getChildContext() {
        return {
            muiTheme: ThemeManager.getMuiTheme(DarkRawTheme)
        };
    },

    goBack () {
        history.go(-1);
    },

    render: function () {
        return (
            <AppCanvas>
                <AppBar title="课程详情" iconElementLeft={<IconButton onClick={this.goBack}><SvgIcons.NavigationClose /></IconButton>}/>
                <Card style={{paddingTop:64}}>
                  <CardMedia overlay={<CardTitle title="新闻" subtitle="小宝家+"/>}>
                    <img src="/img/1.jpg" />
                  </CardMedia>
                  <CardText>
                    我们的课程内容.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                  </CardText>
                </Card>
            </AppCanvas>
        );
    }
});