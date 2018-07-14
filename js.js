

$(document).ready(function () {
	$(document).keydown(function (e) {
		var pos = $("#fish").position();
		console.log(pos.top);
		if (e.which === 38) {
			if (pos.top > 0) {

				const fish = $("#fish");
				fish.animate({ "top": "-=10px" }, 10);
			}
		}
		if (e.which === 40) {
			if (pos.top < 520) {
				const fish = $("#fish");
				fish.animate({ "top": "+=10px" }, 10);
			}
		}
	});
	setInterval(function () {
		$('#obstacles').append(
			$('<img src = "https://banner2.kisspng.com/20171217/815/bomb-png-5a370a562885a5.072564131513556566166.jpg" class = "obstacle1">').
				animate({ "right": "100%" }, 1500, "linear",
				function () {
					$(this).remove();
				}
				)
		);
	}, 1500);
	setInterval(function () {
		$('#obstacles').append(
			$('<img src = "https://banner2.kisspng.com/20171217/815/bomb-png-5a370a562885a5.072564131513556566166.jpg" class = "obstacle2">').
				animate({ "right": "100%" }, 3000, "linear",
				function () {
					$(this).remove();
				}
				)
		);
	}, 3000);
	setInterval(function () {
		$('#obstacles').append(
			$('<img src = "https://banner2.kisspng.com/20171217/815/bomb-png-5a370a562885a5.072564131513556566166.jpg" class = "obstacle3">').
				animate({ "right": "100%" }, 2000, "linear",
				function () {
					$(this).remove();
				}
				)
		);
	}, 2000);
	setInterval(function () {
		$('#obstacles').append(
			$('<img src = "https://banner2.kisspng.com/20171217/815/bomb-png-5a370a562885a5.072564131513556566166.jpg" class = "obstacle4">').
				animate({ "right": "100%" }, 4000, "linear",
				function () {
					$(this).remove();
				}
				)
		);
	}, 4000);
	setInterval(function() {
    	var playpos = $("#fish").position();
    	$("#obstacles").children(".obstacle1").each(
    		function(){
				var o = $(this).position();
				if(o.top>=playpos.top&&o.top<=playpos.top+120&&o.left>=playpos.left&&o.left<=playpos.left+180){
					alert("GAME OVER");
				}
    		}
		)
		$("#obstacles").children(".obstacle2").each(
    		function(){
				var o = $(this).position();
				if(o.top>=playpos.top&&o.top<=playpos.top+130&&o.left>=playpos.left&&o.left<=playpos.left+180){
					alert("GAME OVER");
    		 }
			}
		)

		$("#obstacles").children(".obstacle3").each(
    		function(){
				var o = $(this).position();
				if(o.top>=playpos.top&&o.top<=playpos.top+130&&o.left>=playpos.left&&o.left<=playpos.left+180){
					alert("GAME OVER");
				}
    		}
		)
		$("#obstacles").children(".obstacle4").each(
    		function(){
				var o = $(this).position();
				if(o.top>=playpos.top&&o.top<=playpos.top+130&&o.left>=playpos.left&&o.left<=playpos.left+180){
					alert("GAME OVER");
				}
    		}
		)
		
    },100);
});