function addstream(div) {
	ct = document.getElementsByClassName("container")[0]
	ct.appendChild(div)
	if (strs.length !== 0) strs[cur].id=""
	if (div.mute == null) div.mute = () => true
	if (div.play == null) div.play = () => true
	cur = strs.push(div) - 1
	div.id = "cur"
	setcurmaster()
	updateconfig()
}

window.onload = function() {
	initcmdline()
	inityt()
	handleKeyKEY = handlekey

	helpstr = document.getElementsByClassName("help")[0]
	helpstr.mute = () => true
	helpstr.play = () => true

	if ('commands' in localStorage) {
		kill(cur)
		for (cstr of localStorage.commands.split(",")) {
			c = cstr.split(" ")
			c0 = c.shift()
			cmds[c0](c)
		}
	}
}

function handlekey(k) {
	switch (k) {
	case ":":
		cmdline.focus()
		break
	case "j":
		focusnext(1)
		break
	case "k":
		focusnext(-1)
		break
	case "t":
		togglelayout()
		break
	case "m":
		mute()
		break
	case "M":
		strs[cur].mute()
		break
	case "p":
		strs[cur].play()
		break
	case "P":
		play()
		break
	case "q":
		cmdline.focus()
		cmdline.value = ":"
		break
	case " ":
		setcurmaster()
		break
	}
}

cmds = {
	"youtube": function(args) {
		addyt(args[0])
	},
	"twitch": function(args) {
		addtw(args[0])
	},
	"birds": function(args) {
		morebirds()
	},
	"quit": function(args) {
		if(strs.length > 0)
			kill(cur)
	},
	"help": function(args) {
		if(helpstr.parentElement == null)
			addstream(helpstr)
	}
}
cmds["yt"] = cmds["youtube"]

var cur = 0
var strs = new Array();
var num_master = 1
var helpstr
function focusnext(dir) {
	if (strs.length === 0) return
	if(cur >= 0 && cur < strs.length)
		strs[cur].id = ""
	cur += dir;
	if (cur < 0) cur = strs.length - 1
	if (cur >= strs.length) cur = 0
	strs[cur].id = "cur"
}
function setcurmaster() {
	if (!strs[cur].classList.contains("master")) {
		pm = strs[num_master-1]
		pm.mute(true)
	}
	i = strs[cur]
	strs.splice(cur, 1)
	strs.unshift(i)
	i.mute(false)
	cur = 0
	arrange()
}
function arrange() {
	for (let i=0; i<strs.length; i++) {
		if(i < num_master)
			strs[i].classList.add("master")
		else
			strs[i].classList.remove("master")
		strs[i].style.order=i
	}
	if (strs.length <= num_master)
		document.body.classList.add("max")
	else
		document.body.classList.remove("max")
	if (strs.length === 1)
		document.body.classList.add("solo")
	else
		document.body.classList.remove("solo")
}
function togglelayout() {
	b = document.body.classList
	f = h = "horz"
	t = v = "vert"
	if(!b.contains(h)) {
		f = v
		t = h
	}
	if(b.contains(f))
		b.remove(f)
	b.add(t)
}

function mute() {
	for(s in strs)
		strs[s].mute(!(s < num_master && mute.ismuted))
	mute.ismuted = !mute.ismuted
}
mute.ismuted = false
function play() {
	play.isplaying = !play.isplaying
	for(s in strs)
		strs[s].play(play.isplaying)
}
play.isplaying = true
function kill(i) {
	t = strs[i]
	t.parentNode.removeChild(t)
	strs.splice(i,1)
	cur--; focusnext(1)
	arrange()
}

function updateconfig() {
	ccmds = []
	for (s in strs) {
		if ('command' in strs[s]) {
			ccmds.push(strs[s].command)
		}
	}
	localStorage.commands = ccmds
}

function morebirds() {
	cmds["youtube"](["NHBb1Tyjf0s"])
	cmds["youtube"](["8thJ9NlzFPo"])
	cmds["youtube"](["3WI4UZgxG64"])
	cmds["youtube"](["gLDd2EBwccc"])
}

strs.push.apply(strs, document.getElementsByClassName("help"))
