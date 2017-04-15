if (typeof KeyEvent == "undefined") {
    var KeyEvent = {
        DOM_VK_CANCEL: 3,
        DOM_VK_HELP: 6,
        DOM_VK_BACK_SPACE: 8,
        DOM_VK_TAB: 9,
        DOM_VK_CLEAR: 12,
        DOM_VK_RETURN: 13,
        DOM_VK_ENTER: 14,
        DOM_VK_SHIFT: 16,
        DOM_VK_CONTROL: 17,
        DOM_VK_ALT: 18,
        DOM_VK_PAUSE: 19,
        DOM_VK_CAPS_LOCK: 20,
        DOM_VK_ESCAPE: 27,
        DOM_VK_SPACE: 32,
        DOM_VK_PAGE_UP: 33,
        DOM_VK_PAGE_DOWN: 34,
        DOM_VK_END: 35,
        DOM_VK_HOME: 36,
        DOM_VK_LEFT: 37,
        DOM_VK_UP: 38,
        DOM_VK_RIGHT: 39,
        DOM_VK_DOWN: 40,
        DOM_VK_PRINTSCREEN: 44,
        DOM_VK_INSERT: 45,
        DOM_VK_DELETE: 46,
        DOM_VK_0: 48,
        DOM_VK_1: 49,
        DOM_VK_2: 50,
        DOM_VK_3: 51,
        DOM_VK_4: 52,
        DOM_VK_5: 53,
        DOM_VK_6: 54,
        DOM_VK_7: 55,
        DOM_VK_8: 56,
        DOM_VK_9: 57,
        DOM_VK_SEMICOLON: 59,
        DOM_VK_EQUALS: 61,
        DOM_VK_A: 65,
        DOM_VK_B: 66,
        DOM_VK_C: 67,
        DOM_VK_D: 68,
        DOM_VK_E: 69,
        DOM_VK_F: 70,
        DOM_VK_G: 71,
        DOM_VK_H: 72,
        DOM_VK_I: 73,
        DOM_VK_J: 74,
        DOM_VK_K: 75,
        DOM_VK_L: 76,
        DOM_VK_M: 77,
        DOM_VK_N: 78,
        DOM_VK_O: 79,
        DOM_VK_P: 80,
        DOM_VK_Q: 81,
        DOM_VK_R: 82,
        DOM_VK_S: 83,
        DOM_VK_T: 84,
        DOM_VK_U: 85,
        DOM_VK_V: 86,
        DOM_VK_W: 87,
        DOM_VK_X: 88,
        DOM_VK_Y: 89,
        DOM_VK_Z: 90,
        DOM_VK_CONTEXT_MENU: 93,
        DOM_VK_NUMPAD0: 96,
        DOM_VK_NUMPAD1: 97,
        DOM_VK_NUMPAD2: 98,
        DOM_VK_NUMPAD3: 99,
        DOM_VK_NUMPAD4: 100,
        DOM_VK_NUMPAD5: 101,
        DOM_VK_NUMPAD6: 102,
        DOM_VK_NUMPAD7: 103,
        DOM_VK_NUMPAD8: 104,
        DOM_VK_NUMPAD9: 105,
        DOM_VK_MULTIPLY: 106,
        DOM_VK_ADD: 107,
        DOM_VK_SEPARATOR: 108,
        DOM_VK_SUBTRACT: 109,
        DOM_VK_DECIMAL: 110,
        DOM_VK_DIVIDE: 111,
        DOM_VK_F1: 112,
        DOM_VK_F2: 113,
        DOM_VK_F3: 114,
        DOM_VK_F4: 115,
        DOM_VK_F5: 116,
        DOM_VK_F6: 117,
        DOM_VK_F7: 118,
        DOM_VK_F8: 119,
        DOM_VK_F9: 120,
        DOM_VK_F10: 121,
        DOM_VK_F11: 122,
        DOM_VK_F12: 123,
        DOM_VK_F13: 124,
        DOM_VK_F14: 125,
        DOM_VK_F15: 126,
        DOM_VK_F16: 127,
        DOM_VK_F17: 128,
        DOM_VK_F18: 129,
        DOM_VK_F19: 130,
        DOM_VK_F20: 131,
        DOM_VK_F21: 132,
        DOM_VK_F22: 133,
        DOM_VK_F23: 134,
        DOM_VK_F24: 135,
        DOM_VK_NUM_LOCK: 144,
        DOM_VK_SCROLL_LOCK: 145,
        DOM_VK_COMMA: 188,
        DOM_VK_PERIOD: 190,
        DOM_VK_SLASH: 191,
        DOM_VK_BACK_QUOTE: 192,
        DOM_VK_OPEN_BRACKET: 219,
        DOM_VK_BACK_SLASH: 220,
        DOM_VK_CLOSE_BRACKET: 221,
        DOM_VK_QUOTE: 222,
        DOM_VK_META: 224
    };
}
var keyCodeStr = {3: "CANCEL",6: "HELP",8: "BACK_SPACE",9: "TAB",12: "CLEAR",13: "RETURN",14: "ENTER",16: "SHIFT",17: "CONTROL",18: "ALT",19: "PAUSE",20: "CAPS_LOCK",27: "ESCAPE",32: "SPACE",33: "PAGE_UP",34: "PAGE_DOWN",35: "END",36: "HOME",37: "LEFT",38: "UP",39: "RIGHT",40: "DOWN",44: "PRINTSCREEN",45: "INSERT",46: "DELETE",48: "0",49: "1",50: "2",51: "3",52: "4",53: "5",54: "6",55: "7",56: "8",57: "9",59: "SEMICOLON",61: "EQUALS",65: "A",66: "B",67: "C",68: "D",69: "E",70: "F",71: "G",72: "H",73: "I",74: "J",75: "K",76: "L",77: "M",78: "N",79: "O",80: "P",81: "Q",82: "R",83: "S",84: "T",85: "U",86: "V",87: "W",88: "X",89: "Y",90: "Z",93: "CONTEXT_MENU",96: "NUMPAD0",97: "NUMPAD1",98: "NUMPAD2",99: "NUMPAD3",100: "NUMPAD4",101: "NUMPAD5",102: "NUMPAD6",103: "NUMPAD7",104: "NUMPAD8",105: "NUMPAD9",106: "MULTIPLY",107: "ADD",108: "SEPARATOR",109: "SUBTRACT",110: "DECIMAL",111: "DIVIDE",112: "F1",113: "F2",114: "F3",115: "F4",116: "F5",117: "F6",118: "F7",119: "F8",120: "F9",121: "F10",122: "F11",123: "F12",124: "F13",125: "F14",126: "F15",127: "F16",128: "F17",129: "F18",130: "F19",131: "F20",132: "F21",133: "F22",134: "F23",135: "F24",144: "NUM_LOCK",145: "SCROLL_LOCK",188: "COMMA",190: "PERIOD",191: "SLASH",192: "BACK_QUOTE",219: "OPEN_BRACKET",220: "BACK_SLASH",221: "CLOSE_BRACKET",222: "QUOTE",224: "META"}
var cmdline;
var mode="KEY";
document.onkeypress = function(e) {
	// do I want to support ctl/alt/meta?
	//k = strfromkeyEvt(e)
	k=String.fromCharCode(e.charCode)
	handleKeyModal(k)
}
document.onkeydown = function(e) {
	switch(e.keyCode) {
		case KeyEvent.DOM_VK_ESCAPE:
		case KeyEvent.DOM_VK_RETURN:
			handleKeyModal(keyCodeStr[e.keyCode])
	}
}
function strfromkeyEvt(e) {
	k = ""
	if(e.ctrlKey)  k+="C-"
	if(e.altKey)   k+="A-"
	if(e.metaKey)  k+="M-"
	//if(e.shiftKey) k+="S-"
	k+=String.fromCharCode(e.keyCode)
	return k
}
function handleKeyModal(k) {
	if (k == "") return
	switch(mode) {
	case "CMD":
		handleKeyCMD(k)
		break
	case "KEY":
		handleKeyKEY(k)
		break
	}
}
function handleKeyKEY(k) {}
function handleKeyCMD(k) {
	switch(k) {
	case "ESCAPE":
		cmdline.blur()
		break
	case "RETURN":
		handleCMD(cmdline.value.slice(1))
		break
	}
}
function handleCMD(cmd) {
	args=cmd.split(' ')
	arg0 = args[0]
	args = args.slice(1)
	if (arg0 == "") { cmdline.blur(); return }
	cmdMatch=Object.keys(cmds).reduce(function(a,i) {
		if(i.startsWith(arg0))
			a.push(i)
		return a
	}, [])
	if (cmdMatch.length != 1) return cmdline.error("command not found: "+arg0)
	arg0 = cmdMatch[0]
	if (! cmds[arg0](args)) cmdline.blur()
}
function initcmdline() {
	cmdline = document.getElementsByClassName("cmdline")[0];
	cmdline.onblur = function() {
		cmdline.value = "";
		mode="KEY"
	}
	cmdline.onfocus = function() {
		mode="CMD"
	}
	// should use a different bar or something to clear error when start typing again
	cmdline.error = function(e) {
		cmdline.value = e;
	}
}
