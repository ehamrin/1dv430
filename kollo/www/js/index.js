
window.onload = function(){
	var pages = document.querySelectorAll(".page");
	
	var show = function(id){
		for(var i = 0; i < pages.length; i++){
			if(pages[i].id != id){
				pages[i].style.display = "none";
			}else{
				pages[i].style.display = "block";
			}
		}
	}
	
	var goBack = function(e){
		for(var i = 0; i < pages.length; i++){
			if(pages[i].id == e.target.parentNode.id){
				pages[i-1].style.display = "block";
				pages[i].style.display = "none";
			}else{
				pages[i].style.display = "none";
			}
		}
	}
	
	var periodSelect = document.getElementById("period");
	periodSelect.onchange = function(){
		show("form");		
	}
	
	var periodSubmit = document.getElementById("submit");
	periodSubmit.onclick = function(e){
		alert("Submitted");		
	}
	
	var cancelSubmit = document.getElementById("cancel");
	cancelSubmit.onclick = goBack;
	
	show("period");
	
}