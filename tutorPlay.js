//$B%-!<%\!<%I$+$iF~NO$5$l$k$4$H$KLD$i$9(B
function successivePlay(e) {
  //div$B%?%0$,%/%j%C%/$5$l$?$H$-$NBP:v(B
  if(e.target.value == null){
}else {
    var target = e.target;
    var text = new Array;
    text = target.value;
    cw_start(text);
  }

}

function play_all() {
    var call = new Array;
  if ( document.getElementById("Box").value !=  '' ) {
    call = document.getElementById("Box").value.split('');
    
  cw_start(call);
  }
}
