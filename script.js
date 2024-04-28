//your JS code here. If required.
let timer = document.querySelector('#timer');
let currDate = new Date();
setInterval(()=>{
	currDate = new Date;
	 timer.innerHTML = currDate.toLocaleString();
}, 1000)