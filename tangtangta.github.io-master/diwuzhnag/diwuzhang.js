window.onload=function(){
  if(!document.getElementsByTagName) return false;
  var lnks=document.getElementsByTagName("a");
  for(var i=0;i<lnks.length;i++){
    if(lnks[i].getAttribute("class")=="popup"){
      lnks[i].onlick=function(){
        popUp(this.getAttribute("href"));
        return false;
        }
      }
    }
  }
function popUp(winURL) {
window.open(winUR "popup"£©£»}
