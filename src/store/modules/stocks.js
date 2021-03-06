import stocks from '../../data/stocks'

const state ={
    stocks:[]
};

const mutations ={
    'SET_STOCKS'(state, stocks) {
        state.stocks = stocks;
    }
};


const  actions ={
    initStock: ({commit}) => {
        commit('SET_STOCKS', stocks);
    }
};

const getters ={
    stocks: state => {
        return state.stocks
    }
};

export default {
    state,
    mutations,
    getters,
    actions
}




