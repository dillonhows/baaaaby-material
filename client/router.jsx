FlowRouter.route('/', {
	action: function(params, queryParams) {
		ReactLayout.render(MainLayout, {
			location: {pathname: params},
			listToolBar: true,
		    main: <Test />,
		    bottom: "Test"
		});
	}
});

FlowRouter.route('/course/:id', {
	triggersEnter: function () {

	},
	action: function(params, queryParams) {
		ReactLayout.render(MainLayout, {
			location: {pathname: params},
		    appBar: <DetailAppBar title='课程详情' />,
		    main: <CourseView />,
		    bottom: "Test"
		});
	},
	triggersExit: function() {
		
	}
});

FlowRouter.route('/temperament', {
	action: function() {
		ReactLayout.render(MainLayout, {
			appBar: <DetailAppBar title='气质测评列表' />,
			main: <TemperamentList />,
			bottom: "Test"
		});
	}
});
