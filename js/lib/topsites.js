import color from "color";

var topsites = function(el){
    chrome.topSites.get(function(sites) {
        for(let i = 0; i < 9; i++)
        {
            let site = sites[i];
            var hash = color.strToColor(site.title + site.url);
            var html = `
                <li style="border-color: ${hash}">
                    <a href="${site.url}">
						${site.title}
					</a>
                </li>
            `;
            el.append(html);
        }
    })
};

export default topsites;