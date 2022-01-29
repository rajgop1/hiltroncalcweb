let slideindex=1
showDivs(slideindex)
function plusDivs(n)
{
    console.log("hello")
    showDivs(slideindex+=n)
}

function showDivs(n)
{
    let x = document.getElementsByClassName("slideimage")
    
    if(n>x.length)
    {
        slideindex=1
    }
    if(n<1)
    {
        slideindex = x.length
    }

    for(let i=0;i<x.length;i++)
    {
        x[i].style.display="none"
    }
    x[slideindex-1].style.display="block"
}