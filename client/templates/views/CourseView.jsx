//app.jsx
injectTapEventPlugin();

let { SvgIcons } = MUI.Libs,
    { Card, CardMedia, CardTitle, CardText, Checkbox } = MUI;
const ReactTransitionGroup = React.addons.TransitionGroup;

CourseView = class extends React.Component{

    constructor(props) {
        super(props);
    }

    getMeteorData() {
        let course = Meteor.subscribe( "course", "56589d349a26e56f07175796" );
        data = {};
        if (course.ready()) {
            data.course = Courses.findOne();
        }
        return data;
    }

    renderContent() {
        const htmlString = {
            __html: this.data.course.content
        };
        return (
            <Card>
                <CardMedia overlay={<CardTitle title={this.data.course.title || "新闻"} subtitle="小宝家+"/>}>
                    <img src="/img/1.jpg" />
                </CardMedia>
                <CardText dangerouslySetInnerHTML={htmlString} />
                {/* 这里的代码会使动画产生Bug,暂时屏蔽 */}
                {/* <Checkbox
                    name="checkboxName4"
                    value="checkboxValue4"
                    checkedIcon={<SvgIcons.ToggleStar />}
                    unCheckedIcon={<SvgIcons.ToggleStarBorder />}
                    label="custom icon" /> */}
            </Card>
        );
    }

    render() {
        return (
            <div style={{position: 'absolute', paddingTop: 64, width: '100%'}}>
                {this.data.course ? this.renderContent() : "骚等..."}
            </div>
        );
    }
}

reactMixin(CourseView.prototype, ReactMeteorData);