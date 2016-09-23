import color from "color";

var topsites = function(el){
    function show(){
        chrome.topSites.get(function(sites) {
            let html = sites
                        .slice(0, 9)
                        .map(site=>`<li style="border-color: ${color.strToColor(site.title + site.url)}">
                                        <a href="${site.url}">
                                            ${site.title}
                                        </a>
                                    </li>`)
                        .join("");
            el.html(html);
        });
    }
    function hide(){
        el.html("");
    }
    return {
        show,
        hide
    };
};

export default topsites;