var isDebug=true;

mui.ready( function () {} );

mui.plusReady( function () {} );

function quitApp() {
	mui.back = function () {
		mui.confirm( "你确定退出?", '', [ "确定", "取消" ], function ( e ) {
			if ( e.index == 0 ) {
				plus.runtime.quit();
			}
		} );
	}
}

function UrlSearch() {
	var name, value, str, num, arr, i;

	str = location.href;
	num = str.indexOf( "?" )
	str = str.substr( num + 1 );
	arr = str.split( "&" );

	for ( i = 0; i < arr.length; i++ ) {
		num = arr[ i ].indexOf( "=" );
		if ( num > 0 ) {
			name = arr[ i ].substring( 0, num );
			value = arr[ i ].substr( num + 1 );
			this[ name ] = value;
		}
	}
}