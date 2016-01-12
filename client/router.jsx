FlowRouter.route('/', {
	action: function(params, queryParams) {
		ReactLayout.render(MainLayout, {
			rootNum: 0,
			listToolBar: true,
		    main: <Test key="Test" />,
		    bottom: "Test"
		});
	}
});

FlowRouter.route('/course/:id', {
	action: function(params, queryParams) {
		ReactLayout.render(MainLayout, {
			rootNum: 1,
		    appBar: <DetailAppBar title='课程详情' />,
		    main: <CourseView key="Course" />,
		    bottom: "Test"
		});
	}
});

FlowRouter.route('/temperament', {
	action: function() {
		ReactLayout.render(MainLayout, {
			rootNum: 2,
			appBar: <DetailAppBar title='气质测评列表' />,
			main: <TemperamentList />,
			bottom: "Test"
		});
	}
});
