import * as api from '../api/card'
import { GET_CARD, GET_CARD_ID} from '../constant/actionType';

export const getcardAction = () => async (dispatch) => {
    try {
        const response = await api.getCard();
        console.log(response)
        dispatch({ type: GET_CARD, payload: response?.data?.card })

    } catch (error) {
        console.log(error)
    }
}


export const getcardActionByID = (id) => async (dispatch) => {
    try {
        const response = await api.getCardByID(id);
        console.log(response.data.card)
        dispatch({ type: GET_CARD_ID, payload: response?.data?.card });
    } catch (error) {

        
        console.log(error);
    }
};

