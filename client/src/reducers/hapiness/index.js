import { loop, Cmd } from 'redux-loop';


export const HAPINESS_LIST = 'hapiness/LIST';
export const HAPINESS_LIST_SUCCESS = 'hapiness/LIST_SUCCESS';


const fetchHapinessData = (limit = 10) => {
	return {
		users: ["damian","ania"],
		levels: {
			"23.11.2017": [
				{
					"damian": {
						level: 1,
						emoji: "neutral_face"
					}
				},
				{
					"ania": {
						level: 3,
						emoji: "grinning"
					}
				}
			],
			"24.11.2017": [
				{
					"damian": {
						level: 1,
						emoji: "neutral_face"
					}
				},
				{
					"ania": {
						level: 3,
						emoji: "grinning"
					}
				}
			],
			"25.11.2017": [
				{
					"damian": {
						level: 1,
						emoji: "neutral_face"
					}
				},
				{
					"ania": {
						level: 3,
						emoji: "grinning"
					}
				}
			]
		}
	};
}


export function getHapinessData(limit) {
	return {
		type: HAPINESS_LIST,
		payload: {limit}
	};
}

function fetchHapinessSuccess(data) {
	return {
		type: HAPINESS_LIST_SUCCESS,
		data
	};
}


export default (state = {}, action) => {
	switch (action.type) {
		case HAPINESS_LIST: {
			const {limit} = action.payload;
			return loop(
				{...state},
				Cmd.run(fetchHapinessData, {
					successActionCreator: fetchHapinessSuccess,
					args: [limit]
				})
			);
		}

		case HAPINESS_LIST_SUCCESS: {
			const data = action.data;

			return {...state,data};
		}


		default:
			return state;
	}
};