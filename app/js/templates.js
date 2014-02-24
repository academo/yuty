(function() {(window["templates"] = window["templates"] || {})["dashboard"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="sidebar medium-2 columns">\n    <div id="logo">\n        Yuty\n    </div>\n    <div id="search-form"></div>\n    <nav class="main">\n        <ul class="side-nav">\n            <li><a href="#">Lorem.</a></li>\n            <li><a href="#">Labore!</a></li>\n            <li><a href="#">Non.</a></li>\n            <li><a href="#">Molestiae.</a></li>\n            <li><a href="#">Iusto.</a></li>\n            <li class="divider"></li>\n            <li><a href="#">Lorem ipsum dolor.</a></li>\n            <li><a href="#">Nisi, itaque, vero.</a></li>\n            <li><a href="#">Vero, error, iste!</a></li>\n        </ul>\n    </nav>\n</div>\n<div class="main-area medium-7 columns">\n    <div id="tracks-results"></div>\n</div>\n<div class="video-sidebar medium-3 columns">\n    <div id="video-player"></div>\n    <div id="queue-list"></div>\n</div>';

}
return __p
}})();
(function() {(window["templates"] = window["templates"] || {})["queue-list"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<table>\n    <thead>\n        <tr>\n            <th>Title</th>\n            <th>Artist</th>\n            <th></th>\n        </tr>\n    </thead>\n    <tbody></tbody>\n</table>\n';

}
return __p
}})();
(function() {(window["templates"] = window["templates"] || {})["search-form"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<form class="search-form">\n    <div class="row collapse">\n        <div class="small-12 columns">\n            <input type="text" placeholder="Song, Artist, Album">\n        </div>\n    </div>\n</form>\n';

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
'</td>\n<td class="controls">\n    <button class="play"></button>\n    <button class="queue"></button>\n    <button class="unqueue"></button>\n</td>y';

}
return __p
}})();
(function() {(window["templates"] = window["templates"] || {})["track-list"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<table class="results">\n    <thead>\n        <tr>\n            <th>Title</th>\n            <th>Artist</th>\n            <th></th>\n        </tr>\n    </thead>\n    <tbody></tbody>\n</table>\n';

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
'</h1>\n    <h2>' +
((__t = ( artist )) == null ? '' : __t) +
'</h2>\n</header>\n<div id="embed-player"></div>\n<button class="next">Next</button>';

}
return __p
}})();