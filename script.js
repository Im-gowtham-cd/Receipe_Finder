for(let i=65;i<=90;i++)
{
    const l = document.createElement("li");
    l.textContent=String.fromCharCode(i);
    document.getElementById('alpha').appendChild(l);
}