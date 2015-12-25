// 使用Flow router制作路由

FlowRouter.route('/', {
	action: function () {
		ReactLayout.render(CourseList, {
		});
	}
});

FlowRouter.route('/test', {
	action: function () {
		ReactLayout.render(Test, {
		});
	}
});

// 课程详情
FlowRouter.route('/course/:id', {
	action: function () {
		ReactLayout.render(CourseView, {});
	}
});