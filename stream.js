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
	new YT.Player(pid, {
		height: '',
		width: '',
		videoId: id,
		playerVars: { 'disablekb': 1, 'controls': 0 },
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
}

function getytplayerid() {
	ret="ytp"+getytplayerid.curid;
	getytplayerid.curid += 1;
	return ret;
}
getytplayerid.curid=0;

function addyt(id) {
	str=document.createElement("div")
	str.className += "stream"
	div=document.createElement("div")
	div.id=getytplayerid()
	str.appendChild(div)
	addstream(str)
	ytframe(id, div.id)
	document.getElementById(div.id).tabindex="-1"
}
