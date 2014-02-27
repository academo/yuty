(function() {(window["templates"] = window["templates"] || {})["dashboard"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<header class="main">\n    <div id="logo" class="medium-1 columns">\n        Yuty\n    </div>\n    <div id="search-form" class="medium-3 columns"></div>\n    <div class="clearfix"></div>\n</header>\n<div class="separator"></div>\n<div class="sidebar medium-2 columns">\n    <div id="queue-list"></div>\n</div>\n<div class="main-area medium-7 columns">\n    <div id="tracks-results"></div>\n</div>\n<div class="video-sidebar medium-3 columns">\n    <div id="video-player"></div>\n</div>\n<div id="player-controls"></div>';

}
return __p
}})();
(function() {(window["templates"] = window["templates"] || {})["player-controls"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="thumbnail small-1 columns">\n    <img class="small" src="' +
((__t = ( images.medium )) == null ? '' : __t) +
'" alt="' +
((__t = ( name )) == null ? '' : __t) +
' - >' +
((__t = ( artist )) == null ? '' : __t) +
'">\n</div>\n<div class="small-10 columns">\n    <div class="track-info">\n        <span>' +
((__t = ( name )) == null ? '' : __t) +
'</span> - ' +
((__t = ( artist )) == null ? '' : __t) +
'\n    </div>\n    <div>\n        <div class="controls" >\n            <button class="pause"></button>\n            <button class="next"></button>\n        </div>\n        <div class="progress-bar progress round"></div>\n        <div class="time">' +
((__t = ( time )) == null ? '' : __t) +
'</div>\n        <button class="volume-ico"></button>\n        <div class="volume volume-bar progress round"></div>\n    </div>\n</div>\n<div class="clearfix"></div>';

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
__p += '<div class="track">\n    <img class="small" src="' +
((__t = ( images.small )) == null ? '' : __t) +
'" alt="' +
((__t = ( name )) == null ? '' : __t) +
' - >' +
((__t = ( artist )) == null ? '' : __t) +
'">\n    <img class="large" src="' +
((__t = ( images.large )) == null ? '' : __t) +
'" alt="' +
((__t = ( name )) == null ? '' : __t) +
' - >' +
((__t = ( artist )) == null ? '' : __t) +
'">\n    <div class="track-data">\n        <h1>' +
((__t = ( name )) == null ? '' : __t) +
'</h1>\n        <h2>' +
((__t = ( artist )) == null ? '' : __t) +
'</h2>\n    </div>\n</div>\n<button class="unqueue"></button>\n<button class="play"></button>\n<button class="queue"></button>';

}
return __p
}})();
(function() {(window["templates"] = window["templates"] || {})["track-list"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<header>Songs Results</header>\n<ul>\n    \n</ul>';

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
'</h2>\n</header>\n<div id="embed-player"></div>';

}
return __p
}})();