// 课程列表页

injectTapEventPlugin();

let { SvgIcons, Menu, MenuItem, IconMenu } = MUI.Libs,
{ AppCanvas, IconButton, MenuDivider, RaisedButton, Card, CardMedia, CardTitle, CardText, List, ListItem, GridList, GridTile, FloatingActionButton } = MUI;
Test = class extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
        	open: false
        };
    }

    change() {
        this.setState({open: true});
    }

    clickMe() {
    	FlowRouter.go('/course/id');
    }

	render() {

		return (
			<div>
				<div className="swiper-container">
					<div className="swiper-wrapper" style={{paddingTop:64}}>
						<div className="swiper-slide">
							<img style={{width:100+'%'}} src="/img/BANNER.jpg"/>
						</div>
						<div className="swiper-slide">
							<img style={{width:100+'%'}} src="/img/BANNER.jpg"/>
						</div>
						<div className="swiper-slide">
							<img style={{width:100+'%'}} src="/img/BANNER.jpg"/>
						</div>
					</div>
				</div>
				<List style={{paddingTop:0,paddingBottom:0}} >
					<ListItem className="TestList" onTouchTap={this.clickMe}>
						<Card>
							<CardMedia overlay={<CardTitle title="新闻" subtitle="小宝家+"/>}>
								<img src="/img/2.jpg" />
							</CardMedia>
						</Card>
					</ListItem>
					<ListItem className="TestList">
						<Card>
							<CardMedia overlay={<CardTitle title="新闻" subtitle="小宝家+"/>}>
								<img src="/img/3.jpg" />
							</CardMedia>
						</Card>
					</ListItem>
					<ListItem className="TestList">
						<Card>
							<CardMedia overlay={<CardTitle title="新闻" subtitle="小宝家+"/>}>
								<img src="/img/4.jpg" />
							</CardMedia>
						</Card>
					</ListItem>
					<ListItem className="TestList">
						<Card>
							<CardMedia overlay={<CardTitle titleStyle={{fontSize: '20px', lineHeight: '30px'}} title="成都的京京一夜醒来无数次..." subtitle="小宝家+"/>}>
								<img src="/img/5.jpg" />
							</CardMedia>
						</Card>
					</ListItem>
					<ListItem className="TestList">
						<Card>
							<CardMedia overlay={<CardTitle title="新闻" subtitle="小宝家+"/>}>
								<img src="/img/1.jpg" />
							</CardMedia>
						</Card>
					</ListItem>
				</List>
			</div>
		);
	}

	componentDidMount() {
		/*var mySwiper = new Swiper('.swiper-container', {
			autoplay: 5000,//可选选项，自动滑动
		// loop: true
		});*/
	}
}
