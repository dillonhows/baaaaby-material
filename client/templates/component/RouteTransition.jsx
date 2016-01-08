let { TransitionMotion, spring } = ReactMotion;

RouteTransition = class extends React.Component{

	willEnter() {
		console.log('willEnter');
		return {
			handler: this.props.children,
			opacity: spring(0),
			scale: spring(0.95)
		};
	}

	willLeave(key, value) {
		console.log('willLeave');
		return {
			handler: value.handler,
			opacity: spring(0),
			scale: spring(0.95)
		};
	}

	getStyles() {
		const { children, pathname } = this.props;

		return {
			[pathname]: {
				handler: children,
				opacity: spring(1),
				scale: spring(1)
			}
		};
	}

	render() {
		console.log('render');
		return (
			<TransitionMotion
				styles={this.getStyles()}
				willEnter={this.willEnter}
				willLeave={this.willLeave} >
				{interpolated =>
					<div>
						{Object.keys(interpolated).map(key =>
							<div
								key={`${key}-transition`}
								style={{
									position: 'absolute',
									opacity: interpolated[key].opacity,
									transform: `scale(${interpolated[key].scale})`
								}} >
								{interpolated[key].handler}
							</div>
						)}
					</div>
				}
			</TransitionMotion>
		);
	}
}

// RouteTransition.propTypes = { pathname: React.PropTypes.string.isRequired };
