var heightElem = $('#deamon-content').height();
function checkSize() {
	  if (heightElem > windowHeight ) {
	  		$().addClass('big');
	  } else {
	    	$('elem').removeClass('big');
	  }

	  var container=document.getElementById('#main');

	 container.style.height=heightElem;
}