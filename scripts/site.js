function loadContent( url ) {

	// SELECT THE OUTPUT DIV AND LOAD THE LINK STORED IN THE URL PARAMETER
	$( '#content' ).load( url );
}
function selectMenuItem( event ) {
	event.preventDefault( );
	
	loadContent( $( this ).attr( 'href' ) );
}

function initPage( ) {
	$( '#topnav-buttons a' ).click( selectMenuItem );
	
	// LOAD THE DEFAULT (INTRO) PAGE
	loadContent( 'pages/home.html' );
}


// INITIALIZE PAGE AFTER PAGE LOAD
$( document ).ready( initPage );