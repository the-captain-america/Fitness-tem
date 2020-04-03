import types from './types';
import { enfetch } from '../../utils';

const setActiveDashboard = dashboardId => ({
	type: types.SET_ACTIVE_DASHBOARD,
	data: {
		dashboardId
	}
});

const updateDashboardName = (name, layoutId = 'default') => async dispatch => {
	dispatch({
		type: types.UPDATE_DASHBOARD_NAME_PENDING
	});

	dispatch({
		type: types.UPDATE_DASHBOARD_NAME_SUCCESS,
		data: {
			[layoutId]: {
				name,
				layouts: {
					common: layoutId
				}
			}
		}
	});
	dispatch({
		type: types.UPDATE_LAYOUT_MODIFIED,
		data: {
			layoutModified: true
		}
	});
};

const createDashboard = (dashboardName = '') => (dispatch, getState) => {
	const {
		appState: {
			dashboard: { dashboards }
		}
	} = getState();

	const dashboardCount = Object.keys(dashboards)?.length + 1 || 1;
	const defaultName = `Dashboard ${dashboardCount}`;
	const layoutId = `l-${+new Date()}`;
	const name = dashboardName === '' ? defaultName : dashboardName;
	// create dashboard
	dispatch({
		type: types.CREATE_DASHBOARD,
		data: {
			[layoutId]: {
				name,
				layouts: {
					common: layoutId
				}
			}
		}
	});
	// create layout default
	dispatch({
		type: types.CREATE_LAYOUT,
		data: {
			[layoutId]: {
				sm: [],
				md: [],
				lg: []
			}
		}
	});
	// update layout modified
	dispatch({
		type: types.UPDATE_LAYOUT_MODIFIED,
		data: {
			layoutModified: true
		}
	});
	dispatch({
		type: types.SET_ACTIVE_DASHBOARD,
		data: {
			dashboardId: layoutId
		}
	});
};

const deleteDashboard = dashboardId => dispatch => {
	// delete dashboardId from redux-store
	dispatch({
		type: types.DELETE_DASHBOARD,
		data: {
			dashboardId
		}
	});
	// set layoutModified to true to make api call to save layout
	dispatch({
		type: types.UPDATE_LAYOUT_MODIFIED,
		data: {
			layoutModified: true
		}
	});
};

const saveCurrentLayout = () => async (dispatch, getState) => {
	dispatch({
		type: types.SAVE_LAYOUTS_PENDING
	});
	const {
		appState: {
			dashboard: { layouts, dashboards, globalFilters }
		}
	} = getState();

	const config = {
		url: '/v1/dashboard/layout/upd',
		method: 'PUT',
		data: { layouts, dashboards, globalFilters },
		errorHandler: error => {
			dispatch({
				type: types.SAVE_LAYOUTS_FAILED,
				error: {
					code: error.statusCode,
					message: error.message
				}
			});
			alert('Layout failed saving!');
		},
		responseHandler: () =>
			dispatch({
				type: types.UPDATE_LAYOUT_MODIFIED,
				data: {
					layoutModified: false
				}
			})
	};
	await enfetch(config);
};

export {
	createDashboard,
	deleteDashboard,
	setActiveDashboard,
	saveCurrentLayout,
	updateDashboardName
};
