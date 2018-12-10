export const RECEIEVE_TWEETS = 'RECEIVE_TWEETS'

export function receiveTweets(tweets) {
	return {
		type: RECEIEVE_TWEETS,
		tweets
	}
}