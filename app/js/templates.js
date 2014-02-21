(function() {(window["templates"] = window["templates"] || {})["dashboard"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="sidebar search-bar medium-2 columns">\n    <div id="search-form"></div>\n    <div id="playlist"></div>\n</div>\n<div class="medium-7 columns" id="tracks-results"></div>\n<div class="video-sidebar medium-3 columns">\n    <div id="video-player"></div>\n</div>';

}
return __p
}})();
(function() {(window["templates"] = window["templates"] || {})["search-form"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<form class="search-form">\n    <div class="row collapse">\n        <div class="small-8 columns">\n            <input type="text" placeholder="Song, Artist, Album">\n        </div>\n        <div class="small-4 columns">\n            <button class="tiny" type="submit">Search</button>\n        </div>\n    </div>\n</form>\n';

}
return __p
}})();
(function() {(window["templates"] = window["templates"] || {})["track-item"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<td>' +
((__t = ( name )) == null ? '' : __t) +
'</td>\n<td>' +
((__t = ( artist )) == null ? '' : __t) +
'</td>\n<td>\n    <button class="play">Play</button>\n</td>y';

}
return __p
}})();
(function() {(window["templates"] = window["templates"] || {})["track-list"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<table>\n    <thead>\n        <tr>\n            <th>Title</th>\n            <th>Artist</th>\n            <th></th>\n        </tr>\n    </thead>\n    <tbody></tbody>\n</table>\n';

}
return __p
}})();
(function() {(window["templates"] = window["templates"] || {})["track-results"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="tracks-list"></div>\n<div id="artists-list"></div>';

}
return __p
}})();
(function() {(window["templates"] = window["templates"] || {})["video-player"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<header>\n    <h1>' +
((__t = ( name )) == null ? '' : __t) +
' - ' +
((__t = ( artist )) == null ? '' : __t) +
'</h1>\n</header>\n<div id="embed-player"></div>';

}
return __p
}})();