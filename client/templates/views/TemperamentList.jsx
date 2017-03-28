
injectTapEventPlugin();

let {
    Card,
    CardMedia,
    CardTitle
} = MUI;

TemperamentList = class extends React.Component{

	getStyles() {
		const styleSheet = {
			bodyStyle: {
				position: 'absolute',
				paddingTop: 64
			},
			CardStyle: {
				margin: 5
			}
		};
		return styleSheet;
	}

	render() {
		const myStyle = this.getStyles();
		return (
			<div style={myStyle.bodyStyle}>
				<Card style={myStyle.CardStyle}>
					<CardMedia overlay={<CardTitle title="新闻" subtitle="小宝家+"/>}>
	                    <img src="/img/1.jpg" />
	                </CardMedia>
				</Card>
				<Card style={myStyle.CardStyle}>
					<CardMedia overlay={<CardTitle title="新闻" subtitle="小宝家+"/>}>
	                    <img src="/img/2.jpg" />
	                </CardMedia>
				</Card>
				<Card style={myStyle.CardStyle}>
					<CardMedia overlay={<CardTitle title="新闻" subtitle="小宝家+"/>}>
	                    <img src="/img/3.jpg" />
	                </CardMedia>
				</Card>
				<Card style={myStyle.CardStyle}>
					<CardMedia overlay={<CardTitle title="新闻" subtitle="小宝家+"/>}>
	                    <img src="/img/4.jpg" />
	                </CardMedia>
				</Card>
				<Card style={myStyle.CardStyle}>
					<CardMedia overlay={<CardTitle title="新闻" subtitle="小宝家+"/>}>
	                    <img src="/img/5.jpg" />
	                </CardMedia>
				</Card>
			</div>
		);
	}
}