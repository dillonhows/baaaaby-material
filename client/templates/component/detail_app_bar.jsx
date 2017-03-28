
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
        window.history.back();
    }

	render() {
		return (
			<div style={{height: 0}}>
				<AppCanvas>
					<AppBar title={this.props.title} iconElementLeft={<IconButton onClick={this.goBack}><SvgIcons.NavigationArrowBack /></IconButton>}/>
				</AppCanvas>
			</div>
		);
	}
}