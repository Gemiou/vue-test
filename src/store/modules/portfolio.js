
const state ={
  portfolioStock: []
};

const mutations ={
    'BUY_STOCKS'(state, stocks) {
        state.portfolioStock.push(stocks);
    }
};

const  actions ={
    buyStock: (context, payload) => {
        context.commit("BUY_STOCKS", payload)
    },
};

const getters ={
    portfolioStocks: state => {
        return state.portfolioStock
    }
};

export default {
    state,
    mutations,
    getters,
    actions
}