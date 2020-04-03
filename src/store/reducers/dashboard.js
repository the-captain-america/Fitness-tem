/* eslint-disable no-case-declarations */
import initialState from '../store/initialState';
import { types } from '../actions/dashboard';
const defaultBreakpoints = ['sm', 'md', 'lg'];

const dashboard = (oldState = initialState.dashboard, action) => {
	const state = JSON.parse(JSON.stringify(oldState));
	const { type, error, data } = action;
	switch (type) {
		case types.SET_LAYOUTS:
			return { ...state, layouts: { ...state.layouts, ...data.layouts } };
		case types.SET_FILTERS:
			return { ...state, filters: { ...state.filters, ...data.filters } };
		case types.SET_GLOBAL_FILTERS:
			return {
				...state,
				globalFilters: { ...state.globalFilters, ...data.globalFilters }
			};
		case types.SAVE_GLOBAL_FILTER:
			return {
				...state,
				globalFilters: {
					...state.globalFilters,
					[data.filterId]: {
						...data.globalFilters
					}
				}
			};
		case types.DELETE_GLOBAL_FILTER:
			delete state.globalFilters[data.filterId];
			return { ...state };
		case types.SET_DASHBOARDS:
			return {
				...state,
				dashboards: { ...state.dashboards, ...data.dashboards }
			};
		case types.DELETE_TILE:
			delete state.tiles[data.index];
			delete state.filters[data.index];
			return { ...state, layouts: data.layouts };
		case types.DELETE_FILTER:
			delete state.filters[data.index];
			return { ...state };
		case types.SET_AVAILABLE_TILES:
			delete state.availableTilesLoading;
			return { ...state, availableTiles: data };
		case types.FETCH_AVAILABLE_TILES_PENDING:
			return { ...state, availableTilesLoading: true };
		case types.FETCH_TILE_DATA_PENDING:
			return {
				...state,
				tiles: {
					...state.tiles,
					[data.index]: { ...state.tiles[data.index], loading: true }
				}
			};
		case types.FETCH_TILE_DATA_FAILED:
			return {
				...state,
				tiles: {
					...state.tiles,
					[data.index]: {
						...state.tiles[data.index],
						loading: false,
						error: error.message
					}
				}
			};
		case types.SET_TILE_DATA:
			return {
				...state,
				tiles: {
					...state.tiles,
					[data.index]: {
						...state.tiles[data.index],
						loading: false,
						error: '',
						data
					}
				}
			};
		case types.SET_UID_TILE_DATA:
			const [group, subgroup] = data.uid.split('_');
			const fromAvailableTilesData = state.availableTiles[group][subgroup];
			return {
				...state,
				byUid: {
					...state.byUid,
					[data.uid]: {
						...state.byUid[data.uid],
						data: { ...fromAvailableTilesData, ...data }
					}
				}
			};
		case types.FETCH_TILE_DATA_NOT_NEEDED:
			return {
				...state,
				tiles: {
					...state.tiles,
					[data.index]: { ...state.tiles[data.index], loading: false }
				}
			};
		case types.SET_CATEGORY_LIST:
			const transformList = data => {
				const result = [];
				data.forEach(item => {
					const label = item.purpose === 'Optional' ? item.name : item.purpose;
					const value = item.purpose === 'Optional' ? item.name : item.purpose;
					const purpose = item.purpose;
					const tkey = item.tkey;
					const found = result.find(item => item.value === value);
					if (!found) {
						const item = { label, value, purpose, tkey };
						if (tkey) {
							item.tkey = tkey;
						}
						result.push(item);
					}
				});
				return result;
			};
			const list = transformList(data);
			return { ...state, categories: { ...state.categories, list } };
		case types.SET_CATEGORY:
			const categoryData =
				data.payload.find(item => item.name === data.categoryType) || data;
			const attributes = categoryData.attr || categoryData.payload;
			if (data.categoryType === 'Optional') {
				attributes[0].label = data.payload[0].name;
			}
			return {
				...state,
				categories: {
					...state.categories,
					[data.categoryType]: attributes
				}
			};
		case types.ADD_TILE:
			const thisLayout = Object.keys(state.layouts[data.layoutId]);
			const iterator = thisLayout.length ? thisLayout : defaultBreakpoints;
			const newLayout = iterator.reduce((allLayouts, breakpoint) => {
				const layout = (state.layouts[data.layoutId][breakpoint] || []).concat(
					data.tile
				);
				return {
					...allLayouts,
					[breakpoint]: layout
				};
			}, {});
			return {
				...state,
				layouts: { ...state.layouts, [data.layoutId]: newLayout }
			};
		case types.CREATE_DASHBOARD:
			return {
				...state,
				dashboards: { ...state.dashboards, ...data }
			};
		case types.SET_ACTIVE_DASHBOARD:
			return {
				...state,
				activeDashboard: data.dashboardId
			};
		case types.CREATE_LAYOUT:
			return {
				...state,
				layouts: { ...state.layouts, ...data }
			};
		case types.UPDATE_DASHBOARD:
			return {
				...state,
				layoutModified: data.layoutModified
			};
		case types.DELETE_DASHBOARD:
			// remove data.dashboardId from redux dashboards and layouts
			const {
				// eslint-disable-next-line no-unused-vars
				[data.dashboardId]: _dash,
				...updDashboards
			} = state.dashboards;
			const {
				// eslint-disable-next-line no-unused-vars
				[data.dashboardId]: _layout,
				...updatedLayouts
			} = state.layouts;
			return {
				...state,
				dashboards: updDashboards,
				layouts: updatedLayouts
			};
		case types.UPDATE_LAYOUT_MODIFIED:
			return {
				...state,
				layoutModified: data.layoutModified
			};
		case types.UPDATE_DASHBOARD_NAME_SUCCESS:
			const updDashboard = { ...state.dashboards, ...data };
			return {
				...state,
				dashboards: updDashboard
			};
		default:
			return state;
	}
};

export default dashboard;
