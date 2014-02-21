//track model, stores a single track with its data
define(['backbone'], function(Backbone){
    return Backbone.Model.extend({
        defaults: {
            name: '',
            artist: '',
            videoData: '',
            start: 0
        },
        getVideo: function(){
            var that = this;
            var deferred = $.Deferred();
            //get youtube video data
            this.queryYoutube()
            .then(function(data){
                //check if data or almost a result
                if(data.feed && data.feed.entry && data.feed.entry[0]){
                    //set video data based on youtube response
                    that.set('videoData', {
                        title: data.feed.entry[0].title.$t,
                        thumbnail: data.feed.entry[0].media$group.media$thumbnail[0] || '',
                        id: data.feed.entry[0].media$group.yt$videoid.$t
                    });
                    //resolve promise and send video data
                    deferred.resolve(that.get('videoData'));
                }else{
                    //if not data fail promise
                    deferred.reject();
                }
            }, function(){
                //if error from youtube fail promise
                deferred.reject(0);
            });
            //?q=la%20camisa%20negra%20juanes&
            //start-index=1&max-results=1&v=2&alt=jsonc&format=5
            return deferred;
        },
        queryYoutube: function(q){
            return $.ajax('http://gdata.youtube.com/feeds/api/videos', {
                data: {
                    //only 1 most relevant result from first page
                    'max-results': 1,
                    'start-index': 1,
                    //use youtube API 2
                    'v': 2,
                    //only emmbebable videos
                    'format': 5,
                    //search term
                    'q': this.get('name') + ' ' + this.get('artist'),
                    //ask youtube to return jsonp request
                    'alt': 'json-in-script'
                },
                dataType: 'jsonp'
            });
        },
        save: function(){
            localStorage.setItem('yuty-current-track', JSON.stringify(this.toJSON()));
            return this;
        }
    });
});