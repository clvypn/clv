$(function () {
	console.log("Init success!!");

	function toggleFullScreen() {
		if (!document.fullscreenElement) {
			document.documentElement.requestFullscreen();
		} else {
		  if (document.exitFullscreen) {
			document.exitFullscreen();
		  }
		}
	}

	var elem = document.querySelector('.vlm');
	var draggie = new Draggabilly( elem, {
		axis: 'y', containment: '.vlmCont', handle: '.vlmH'
	});

	let scrollLim = Math.floor(window.innerHeight * 0.15);
	console.log(scrollLim);

	let dragPosInit = draggie.position.y;
	let dragPosStart = 0;
	let dragPosEnd = 0;
	let dragPosDelta = 0;
	let dragF = 0;

	draggie.on( 'dragStart', function( event, pointer ) {
		dragPosStart = Math.floor(draggie.position.y);
		console.log("dpS: ", dragPosStart);
	});

	function vlmClose() {
		draggie.setPosition(0,dragPosInit);
		dragF = 0;
		$(".vlmH").css("box-shadow", "inset #0008 0 3px");
		$("#vlmOpenBtn").html("<i class='bi-list'></i>");
		$("html").removeClass("noscrl");
	}
	function vlmOpen() {
		draggie.setPosition(0,window.innerHeight * 0.25);
		dragF = 1;
		$(".vlmH").css("box-shadow", "inset yellowgreen 0 3px");
		$("#vlmOpenBtn").html("<i class='bi-x-circle'></i>");
		$("html").addClass("noscrl");
	}
	draggie.on( 'dragEnd', function( event, pointer ) {
		dragPosEnd = Math.floor(draggie.position.y);
		dragPosDelta = dragPosStart - dragPosEnd;
		console.log("dpS: ", dragPosEnd);
		console.log("dpD: ", dragPosDelta);
		if(dragPosDelta < (scrollLim * -1) && dragF == 1){
			vlmClose();
		}
		if(dragPosDelta > (scrollLim * -1) && dragF == 1){
			vlmOpen();
		}
		if (dragPosDelta > scrollLim && dragF == 0) {
			vlmOpen();
		}
		if(dragPosDelta < scrollLim && dragF == 0){
			vlmClose();
		}
	});
	draggie.on('dragMove', function(event, pointer, moveVector){
		if(Math.abs(moveVector.y) > scrollLim){
			$(".vlmH").css("box-shadow", "inset #0f08 0 3px");
		}
		else{
			$(".vlmH").css("box-shadow", "inset #0ff8 0 3px");
		}
	});
	$("#vlmOpenBtn").click(function(){
		console.log("Clicked");
		if(dragF == 0){
			vlmOpen();
			console.log("Clicked0");
		}
		else if (dragF == 1) {
			vlmClose();
			console.log("Clicked1");
		}
	});
	$(".logo").click(function() {
		toggleFullScreen();
	});

});