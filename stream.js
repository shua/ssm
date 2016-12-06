
/* util for players */
function uniqpid() {
	ret="pid"+uniqpid.curid;
	uniqpid.curid += 1;
	return ret;
}
uniqpid.curid=0;

/* youtube stuff */

var ytready = false
function inityt() {
	var tag = document.createElement('script');

	tag.src = "https://www.youtube.com/iframe_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}
function onYouTubeIframeAPIReady() {
	ytready = true
}
function ytframe(id, pid) {
	if (!ytready) {
		console.log("yt not ready yet")
		return
	}
	player = new YT.Player(pid, {
		height: '',
		width: '',
		videoId: id,
		playerVars: { 'disablekb': 1/*, 'controls': 0 */},
		events: {
			'onReady': onPlayerReady,
			'onStateChange': onPlayerStateChange
		}
	});
	
	function onPlayerReady(event) {
		event.target.playVideo();
	}

	function onPlayerStateChange(event) {
		// do some stuff?
		if (event.data == YT.PlayerState.PLAYING) {
			console.log("pschange: ", event)
		}
	}
	return player
}

function addyt(id) {
	str=document.createElement("div")
	str.className += "stream"
	div=document.createElement("div")
	div.id=uniqpid()
	str.appendChild(div)
	str.mute = function(m) { 
		if(this.player == null || this.player.mute == null) return
		if(arguments.length === 0) 
			m = !this.player.isMuted()
		if(m)
			this.player.mute()
		else
			this.player.unMute()
	}
	str.islive = true;
	str.play = function(p) {
		if(this.player == null) return
		if(arguments.length === 0)
			switch(this.player.getPlayerState()) {
			case YT.PlayerState.PAUSED:
			case YT.PlayerState.ENDED:
			case YT.PlayerState.CUED:
				p=true
				break
			case YT.PlayerState.BUFFERING:
			case YT.PlayerState.PLAYING:
				p=false
				break
			case YT.PlayerState.UNSTARTED:
				return
			}

		if(p) {
			if(this.islive)
				this.player.seekTo(0)
			this.player.playVideo()
		} else
			this.player.pauseVideo()
	}
	addstream(str)
	str.player = ytframe(id, div.id)
	document.getElementById(div.id).tabindex="-1"
}
