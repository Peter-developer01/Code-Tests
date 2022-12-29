const consoleElement = document.querySelector(".console");
const input = document.querySelector("#expression");
const consoleLogs = [];
input.addEventListener("keydown", (event) => {
	if (event.key === "Enter") {
		if (document.querySelector(".console .empty-notice")) {
			document.querySelector(".console .empty-notice").remove();
		}
		/* <div class="console-item"><div class="console-item-content">true</div></div> */
		try {
			const temp = `var tempValue = ${input.value}; consoleElement.insertAdjacentHTML("afterBegin", \`<div class="console-item"><div class="console-item-content">\${tempValue}</div><div class="console-item-close"><div>&times;</div></div></div></div>\`)`;
			evalJS(temp);
		} catch (error) {
			alert(error);
		}
		consoleElement.querySelectorAll("div div .console-item-close")[0].addEventListener("click", (event) => {
			event.target.parentNode.parentNode.remove();
		});
	}
});

function evalJS(...data) {
	const script = document.createElement("script");
	script.text = data.join(";");
	document.head.append(script);
	script.remove();
}

onerror = (error) => {
	// alert(error.stack);
	// confirm("_error");
	try {
		const temp = `consoleElement.insertAdjacentHTML("afterBegin", \`<div class="console-item"><div class="console-item-content">${error}</div><div class="console-item-close"><div>&times;</div></div></div></div>\`)`;
		evalJS(temp);
	} catch(error) {
		alert(error);
	}

	consoleElement.querySelectorAll("div div .console-item-close")[0].addEventListener("click", (event) => {
		event.target.parentNode.parentNode.remove();
	});
};

function sumAllArgs(a, b){return +a+(+b)/2+5*+a;}
function speakSum(a, b) {
	speechSynthesis.speak(new SpeechSynthesisUtterance( sumAllArgs(prompt(a), prompt(b)) ) );
}


speakSum(10, 03);