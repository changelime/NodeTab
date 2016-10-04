export default function topsites(){
    return new Promise(function (resolve, reject) {
        chrome.topSites.get(function(sites) {
            resolve(sites.slice(0, 9));
        });
    });
};;