(function() {(window["templates"] = window["templates"] || {})["search-form"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<form class="search-form">\n    <div class="row collapse">\n        <div class="small-8 columns">\n            <input type="text" placeholder="Song, Artist, Album">\n        </div>\n        <div class="small-4 columns">\n            <button class="tiny" type="submit">Search</button>\n        </div>\n    </div>\n</form>\n';

}
return __p
}})();
(function() {(window["templates"] = window["templates"] || {})["sidebar"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="sidebar search-bar medium-4 columns">\n    <div id="search-form"></div>\n    <div id="playlist"></div>\n</div>\n';

}
return __p
}})();