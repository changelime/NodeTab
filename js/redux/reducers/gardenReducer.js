import { SET_GARDEN_STATE } from "redux/actions";
import setting from "model/setting";

export default function(state = {}, action){
    switch (action.type) 
    {
        case SET_GARDEN_STATE.type:
            let newState = action.payload.state;
            setting.setGardenState(newState);
            return Object.assign({}, state, {
                state: newState
            });
        default: return state;
  }
}