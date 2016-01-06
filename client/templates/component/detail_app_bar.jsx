
injectTapEventPlugin();

let {
    SvgIcons
} = MUI.Libs,

{
	AppCanvas,
	AppBar,
	IconButton
} = MUI;

DetailAppBar = class extends React.Component{

    goBack() {
        FlowRouter.redirect('/');
    }

	render() {
		return (
			<AppCanvas>
				<AppBar title={this.props.title} iconElementLeft={<IconButton onClick={this.goBack}><SvgIcons.NavigationArrowBack /></IconButton>}/>
			</AppCanvas>
		);
	}
}