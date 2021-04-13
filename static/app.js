


function callToTkinter(){
	var url = "http://127.0.0.1:5000/Tkinter";

function confirm(){
	var url = "http://127.0.0.1:5000/confirm";
	$.get(url,function(data,status){
		document.getElementById("output").innerText =data.response;
	});
}

function atten(){
	console.log("In atten");
	var url = "http://127.0.0.1:5000/atten";
	$.get(url,function(data,status){
		document.getElementById("output").innerText =data.response;
	});
}
