var n=4;
var r0, c0;
// alert("sort numbers in ascending order");
function createTable() {
    //n=prompt("enter n",4);
    r0=0;
    c0=0;
    var newtable=document.createElement("table");
    for (let i=0;i<n;i++) {
        var tr=document.createElement("tr");
        for (let j=0;j<n;j++) {
            var td=document.createElement("td");
            var x=n*n-n*i-j;
            td.innerHTML="<button style=\"width:70px\" onclick=b_click("+i+","+j+")><font size=7>"+x+"</font></button>";
            tr.appendChild(td);
        }
        newtable.appendChild(tr);
    }
    newtable.rows[r0].cells[c0].innerHTML="";
    newtable.setAttribute("align","center");
    newtable.setAttribute("border","2");
    return newtable;
}

function newGame(){
    table=document.getElementsByTagName("table");
    document.body.replaceChild(createTable(),table[0]);
}

function b_click(r,c) {
    if ((r==r0 && c==c0-1) || (r==r0 && c==c0+1) || (r==r0-1 && c==c0) || (r==r0+1 && c==c0)) {
    button=document.getElementsByTagName("table")[0].rows[r].cells[c].firstChild;
       button.setAttribute("onclick","b_click("+r0+","+c0+")");
        document.getElementsByTagName("table")[0].rows[r0].cells[c0].appendChild(button);
        document.getElementsByTagName("table")[0].rows[r].cells[c].innerHTML="";
        r0=r;
        c0=c;
    }
}