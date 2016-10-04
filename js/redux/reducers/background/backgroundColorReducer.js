import { 
    SET_BACKGROUND_COLOR_STATE,  
    SET_BACKGROUND_COLOR_COLOR
} from "redux/actions";
import setting from "model/setting";

function setNewState(state, stateKey, newStateVal, callback){
    let newState = Object.assign({}, state);
    newState[stateKey] = newStateVal;
    callback(newStateVal);
    return newState;
};


export default function(state = {}, action){
    switch (action.type) 
    {
        case SET_BACKGROUND_COLOR_STATE.type:
            return setNewState(state, "state", action.payload.state, (val)=>{
                setting.setBackgroundColorState(val);
            });
        case SET_BACKGROUND_COLOR_COLOR.type:
            return setNewState(state, "color", action.payload.color, (val)=>{
                setting.setBackgroundColorColor(val);
            });
        default: return state;
  }
}