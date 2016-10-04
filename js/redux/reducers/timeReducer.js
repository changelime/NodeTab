import { SET_TIME_STATE } from "redux/actions";
import setting from "model/setting";

export default function(state = {}, action){
    switch (action.type) 
    {
        case SET_TIME_STATE.type:
            setting.setTimeState(action.payload.state);
            return Object.assign({}, state, {
                state: action.payload.state
            });
        default: return state;
    }
}