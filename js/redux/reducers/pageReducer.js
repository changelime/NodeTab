import { UP_PAGE_INDEX, DOWN_PAGE_INDEX } from "redux/actions";
import setting from "model/setting";

export default function(state = {}, action){
    switch (action.type) 
    {
        case UP_PAGE_INDEX.type:
            setting.upPageIndex();
            return Object.assign({}, state, {
                index: setting.getPageIndex()
            });
        case DOWN_PAGE_INDEX.type:
            setting.downPageIndex();
            return Object.assign({}, state, {
                index: setting.getPageIndex()
            });
        default: return state;
    }
}