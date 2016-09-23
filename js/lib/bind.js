import $ from "jquery";

function bind($el, events, callback){
    for( let [index, eventName] of events.entries() )
    {
        if(eventName === "load")
        {
            callback({
                trigger: "load",
                event: null
            });
        }
        else
        {
            $el.on(eventName, null, function(event){
                callback({
                    trigger: eventName,
                    event: event
                });
            });
        }
        console.log(index, eventName);
    }
}


export default bind;