import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		suggestionsNumber: 1325967,
		heartCheckedBike: [],
		productsArray: {}
	},
	getters: {
		getSuggestionsNumber(state) {
			return state.suggestionsNumber
		},
		getHeartCheckedBike(state) {
			return state.heartCheckedBike
		},
		getProductsArray(state) {
			return state.productsArray
		}
	},
	mutations: {
		setSuggestionsNumber(state, value) {
			state.suggestionsNumber = value
		},
		setHeartCheckedBike(state, value) {
			state.heartCheckedBike = value
		},
		setProductsArray(state, value) {
			state.productsArray = value
		}
	}
})
