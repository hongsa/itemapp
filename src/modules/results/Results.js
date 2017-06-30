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
import * as resultsActions from './results.actions';

import styles from './styles/Results';

class Results extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		this.props.actions.retrieveNowPlayingMovies();
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>results</Text>
			</View>
		);
	}
}

Results.propTypes = {
	actions: PropTypes.object.isRequired,
	nowPlayingMovies: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
	return {
		nowPlayingMovies: state.results.nowPlayingMovies,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(resultsActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);
