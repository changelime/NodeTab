import topsites from "topsites";
export const FETCH_TOPSITES = {
    type: "FETCH_TOPSITES",
    payload: {
        topsites: []
    }
};

export const SET_GARDEN_STATE = {
    type: "SET_GARDEN_STATE",
    payload: {
        state: true
    }
};
export const UP_PAGE_INDEX = {
    type: "UP_PAGE"
};
export const DOWN_PAGE_INDEX = {
    type: "DOWN_PAGE"
};
export const SET_TIME_STATE = {
    type: "SET_TIME_STATE",
    payload: {
        state: true
    }
};
export const SET_TOPSITES_STATE = {
    type: "SET_TOPSITES_STATE",
    payload: {
        state: true
    }
};
export const SET_BACKGROUND_IMG_STATE = {
    type: "SET_BACKGROUND_IMG_STATE",
    payload: {
        state: true
    }
};
export const SET_BACKGROUND_IMG_URL = {
    type: "SET_BACKGROUND_IMG_URL",
    payload: {
        url: ""
    }
};
export const SET_BACKGROUND_IMG_OPACITY = {
    type: "SET_BACKGROUND_IMG_OPACITY",
    payload: {
        opacity: 1
    }
};
export const SET_BACKGROUND_IMG_BRIGHTNESS = {
    type: "SET_BACKGROUND_IMG_BRIGHTNESS",
    payload: {
        brightness: 1
    }
};
export const SET_BACKGROUND_IMG_BLUR = {
    type: "SET_BACKGROUND_IMG_BLUR",
    payload: {
        blur: 0
    }
};
export const SET_BACKGROUND_COLOR_STATE = {
    type: "SET_BACKGROUND_COLOR_STATE",
    payload: {
        state: true
    }
};
export const SET_BACKGROUND_COLOR_COLOR = {
    type: "SET_BACKGROUND_COLOR_COLOR",
    payload: {
        color: "black"
    }
};
export function getAction(action, payload){
    let args = [{}, action];
    args = payload ? [...args, {
        payload: payload
    }] : args;
    return Object.assign(...args);
}

export function setBackgroundColorColor(payload){
    return getAction(SET_BACKGROUND_COLOR_COLOR, payload);
}
export function setBackgroundColorState(payload){
    return getAction(SET_BACKGROUND_COLOR_STATE, payload);
}
export function setBackgroundImgBlur(payload){
    return getAction(SET_BACKGROUND_IMG_BLUR, payload);
}
export function setBackgroundImgBrightness(payload){
    return getAction(SET_BACKGROUND_IMG_BRIGHTNESS, payload);
}
export function setBackgroundImgOpacity(payload){
    return getAction(SET_BACKGROUND_IMG_OPACITY, payload);
}
export function setBackgroundImgUrl(payload){
    return getAction(SET_BACKGROUND_IMG_URL, payload);
}
export function setBackgroundImgState(payload){
    return getAction(SET_BACKGROUND_IMG_STATE, payload);
}
export function setGardenState(payload){
    return getAction(SET_GARDEN_STATE, payload);
}
export function setTimeState(payload){
    return getAction(SET_TIME_STATE, payload);
}
export function setTopsitesState(payload){
    return getAction(SET_TOPSITES_STATE, payload);
}
export function upPageIndex(){
    return getAction(UP_PAGE_INDEX);
}
export function downPageIndex(){
    return getAction(DOWN_PAGE_INDEX);
}
export function fetchTopsites(){
    return topsites().then((sites)=>{
        return getAction(FETCH_TOPSITES, {
            topsites: sites
        });
    });
}

export default {
    setBackgroundColorColor,
    setBackgroundColorState,
    setBackgroundImgBlur,
    setBackgroundImgBrightness,
    setBackgroundImgOpacity,
    setBackgroundImgUrl,
    setBackgroundImgState,
    setGardenState,
    setTimeState,
    setTopsitesState,
    upPageIndex,
    downPageIndex,
    fetchTopsites
}