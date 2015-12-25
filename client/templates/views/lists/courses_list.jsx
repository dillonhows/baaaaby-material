// 课程列表页
// 使用瓷砖作为列表设计思路,具体效果有待尝试

injectTapEventPlugin();

var {
    AppCanvas,
    AppBar,
    Styles,
    RaisedButton,
    DatePicker,
    DatePickerDialog
    } = MUI;

CourseList = React.createClass({
	render: function () {

		return (<AppCanvas>
                <AppBar title="列表页"/>

                <div style={{padding: '80px',}}>
                    <RaisedButton primary={true} label="Tap"/>
                    <br/>
                    <DatePicker hintText="Portrait Dialog"/>
                    <br/>
                </div>
            </AppCanvas>);
	}
});