import {  GET_CARD, GET_CARD_ID, } from "../constant/actionType";

export default (card = [], action) => {
  switch (action.type) {
    case GET_CARD:
      return  action.payload;

    case GET_CARD_ID:
      return [action.payload];
      default:
        return card;
  }
}