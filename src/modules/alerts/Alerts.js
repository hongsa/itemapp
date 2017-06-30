import React, { PropTypes, Component } from 'react';
import {
	RefreshControl,
	ScrollView,
	Text,
	TouchableOpacity,
	View
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as alertsActions from './alerts.actions';

import styles from './styles/Alerts';

class Alerts extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		this.props.actions.retrieveNowPlayingMovies();
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>alerts</Text>
			</View>
		);
	}
}

Alerts.propTypes = {
	actions: PropTypes.object.isRequired,
	nowPlayingMovies: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
	return {
		nowPlayingMovies: state.alerts.nowPlayingMovies,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(alertsActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Alerts);
