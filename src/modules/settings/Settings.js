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
import * as settingsActions from './settings.actions';

import styles from './styles/Settings';

class Settings extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		this.props.actions.retrieveNowPlayingMovies();
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>settings</Text>
			</View>
		);
	}
}

Settings.propTypes = {
	actions: PropTypes.object.isRequired,
	nowPlayingMovies: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
	return {
		nowPlayingMovies: state.settings.nowPlayingMovies,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(settingsActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
