
FlowRouter.route('/', {
	action: function() {
		ReactLayout.render(mainLayout, {
			listToolBar: true,
		    main: <Test />,
		    bottom: "Test"
		});
	}
});

FlowRouter.route('/course/:id', {
	action: function() {
		ReactLayout.render(mainLayout, {
		    appBar: <DetailAppBar title='课程详情' />,
		    main: <CourseView />,
		    bottom: "Test"
		});
	}
});

FlowRouter.route('/temperament', {
	action: function() {
		ReactLayout.render(mainLayout, {
			appBar: <DetailAppBar title='气质测评列表' />,
			main: <TemperamentList />,
			bottom: "Test"
		});
	}
});