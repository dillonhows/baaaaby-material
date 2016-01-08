//app.jsx
injectTapEventPlugin();

let { SvgIcons } = MUI.Libs,
    { Card, CardMedia, CardTitle, CardText, Checkbox } = MUI;
const ReactTransitionGroup = React.addons.TransitionGroup;

CourseView = class extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card style={{paddingTop: 64}}>
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
                <Checkbox
                    name="checkboxName4"
                    value="checkboxValue4"
                    checkedIcon={<SvgIcons.ToggleStar />}
                    unCheckedIcon={<SvgIcons.ToggleStarBorder />}
                    label="custom icon" />
            </Card>
        );
    }
}