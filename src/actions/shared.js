import { getInitialData } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { receiveTweets } from '../actions/tweets'
import { setAuthedUser } from '../actions/authedUser'

const AUTHED_ID = 'tylermcginnis'

export function handelInitialState() {
	//thunk pattrn for async calls
	return = (dispatch) => {
		return getInitialData()
			.then(({ users, tweets }) => {
				dispatch(receieveUsers(users))
				dispatch(receieveTweets(tweets))
				dispatch(setAuthedUser(AUTHED_ID))
			})
	}
}