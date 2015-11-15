import Dispatcher from '../dispatcher/';

let appActions = {
	load (data) {
		Dispatcher.handleViewAction({
			actionType: 'LOAD_DATA',
			data: data
		});
	}
};

export default appActions;