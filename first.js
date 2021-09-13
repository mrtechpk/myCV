console.log("Hi pk")
setInterval(run,50)
m=0;
function run()
{
    if(m==500)
    {
        clearInterval(y)
        m=0;
    }
    else{
        m+=5;
    var x=document.getElementById("img")
    x.style.marginLeft=m+'px';
    }


}