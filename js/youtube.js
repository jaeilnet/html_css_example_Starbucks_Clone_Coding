var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    videoId: 'ItEx9HISztM',
    playerVars: {
      autoplay : true,
      loop : true,
      playlist : 'ItEx9HISztM'
    },
    events : {
      onReady : function (event) {
        event.target.mute() //음소거
      }
    }
  });
}

