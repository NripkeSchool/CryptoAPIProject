function postRequest(request, loadcb) {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = loadcb;
    xhttp.open('POST', "crypto.php", true);
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhttp.send(request);
}

function testing()
{
    const d = new Date();
    let month=d.getMonth();
    let day=d.getDate();
    if (month < 10)
    {
        month = "0"+month;
    }
    if (day < 10)
    {
        day = "0"+day;
    }
    let request = 'getData='+d.getFullYear()+"-"+month+"-"+day;
    console.log(request);
    function callback() {document.getElementById("info").innerHTML = this.responseText;}

    postRequest(request, callback);
}