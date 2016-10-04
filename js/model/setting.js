import objToModel from "storage";

const NAME = "setting";
const DEFAULT_SETTING = {
    page: {
        index: 0
    },
    time: {
        state: true
    },
    topsites: {
        state: true
    },
    garden: {
        state: true
    },
    background: {
        img: {
            url: "https://static.pexels.com/photos/25996/pexels-photo-25996.jpg",
            opacity: 1,
            brightness: 1,
            blur: 0,
            state: true
        },
        color: {
            color: "black",
            state: true
        }
    }
};

var model = objToModel(NAME, DEFAULT_SETTING, 1, function(model){
    return {
        downPageIndex(){
            var index = model.getPageIndex();
            if(index < 2)
            {
                index++;
            }
            model.setPageIndex(index);
        },
        upPageIndex(){
            var index = model.getPageIndex();
            if( index > 0 )
            {
                index--;
            }
            model.setPageIndex(index);
        }
    };    
});

export default model;