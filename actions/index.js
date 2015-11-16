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
	},

	addToBasket (productId, qty) {
		Dispatcher.handleViewAction({
			actionType: 'ADD_TO_BASKET',
			productId: productId,
			qty: qty
		});
	}
};

export default appActions;