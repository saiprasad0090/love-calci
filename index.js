
function love()
{
    var n=Math.random();
    n=n*100+1;
    var result=Math.floor(n);
    var n1=document.getElementById("name1").value;
    var n2=document.getElementById("name2").value;
    document.getElementById('demo').innerHTML = " ❤️ LOVE ❤️ BETWEEN   " + n1 + " ❤️  " + n2 + " IS ❤️ " + 
    "<h1 class=p1>" + result + "%" + "</h1>" ;

} 


