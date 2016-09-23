import $ from "jquery";

class Stylesheet{
    constructor(id, cssObject = {}){
        this._id = id;
        this._el = $(`#${this._id}`);
        this._cssObject = cssObject;
        this._init();
    }
    _init() {
        var head = $("head");
        if( this._el.length === 0 )
        {
            let styleText = this._parse(this._cssObject);
            this._el = $(`<style id="${this._id}" >${styleText}</style>`);
            head.append(this._el);
        }
    }
    update(selector, content, replace) {
        if( replace )
        {
            this._cssObject[selector] = content;
        }
        else
        {
            Object.assign(this._cssObject[selector], content);
        }
        var styleText = this._parse(this._cssObject);
        this._el.html(styleText);
    }
    _parse(cssObject) {
        var style = "";
        for( let selector in cssObject )
        {
            let contents = cssObject[selector];
            style += `${selector}\n{\n`;
            for( let name in contents )
            {
                let value = contents[name];
                style += `\t${name}: ${value};\n`
            }
            style += `}\n`;
        }
        return style;
    }
}

export default Stylesheet;