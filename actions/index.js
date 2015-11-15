import Dispatcher from '../dispatcher/';

let appActions = {
	load (data) {
		Dispatcher.handleViewAction({
			actionType: 'LOAD_DATA',
			data: data
		});
	},

	updateSearchQuery (query) {
		Dispatcher.handleViewAction({
			actionType: 'UPDATE_SEARCH_QUERY',
			query: query
		});
	}
};

export default appActions;