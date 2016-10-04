import { 
    SET_BACKGROUND_IMG_STATE,  
    SET_BACKGROUND_IMG_URL, 
    SET_BACKGROUND_IMG_OPACITY,
    SET_BACKGROUND_IMG_BRIGHTNESS,
    SET_BACKGROUND_IMG_BLUR
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
        case SET_BACKGROUND_IMG_STATE.type:
            return setNewState(state, "state", action.payload.state, (val)=>{
                setting.setBackgroundImgState(val);
            });
        case SET_BACKGROUND_IMG_URL.type:
            return setNewState(state, "url", action.payload.url, (val)=>{
                setting.setBackgroundImgUrl(val);
            });
        case SET_BACKGROUND_IMG_OPACITY.type:
            return setNewState(state, "opacity", action.payload.opacity, (val)=>{
                setting.setBackgroundImgOpacity(val);
            });
        case SET_BACKGROUND_IMG_BRIGHTNESS.type:
            return setNewState(state, "brightness", action.payload.brightness, (val)=>{
                setting.setBackgroundImgBrightness(val);
            });
        case SET_BACKGROUND_IMG_BLUR.type:
            return setNewState(state, "blur", action.payload.blur, (val)=>{
                setting.setBackgroundImgBlur(val);
            });
        default: return state;
  }
}