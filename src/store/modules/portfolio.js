const state ={
    fund:1000,
    stocks:[]
};

const mutation ={
  'BUY_STOCK'(state,{stockId,quantity,stockPrice}){
      const record = state.stocks.find(element => element.id === stockId);
      if(record){
          record.quantity += quantity;
      } else {
          state.stocks.push ({
              id:stockId,
              quantity:quantity
          })
      }
  }
};

