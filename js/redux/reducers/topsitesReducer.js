import { FETCH_TOPSITES, SET_TOPSITES_STATE } from "redux/actions";
import setting from "model/setting";

export default function(state = {}, action){
    switch (action.type) 
    {
        case SET_TOPSITES_STATE.type:
            setting.setTopsitesState(action.payload.state);
            return Object.assign({}, state, {
                state: action.payload.state,
                topsites: state.topsites
            });
        case FETCH_TOPSITES.type:
            setting.setTopsitesState(state.state);
            return Object.assign({}, state, {
                state: state.state,
                topsites: action.payload.topsites
            });
        default: return state;
  }
}