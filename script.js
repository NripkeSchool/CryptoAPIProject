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
    let month= "05";
    let day= "18";
    
    let request = 'getData='+d.getFullYear()+"-"+month+"-"+day;
    console.log(request);
    function callback() 
    {
        console.log(this.responseText);
        let info = JSON.parse(this.responseText);
        
        document.getElementById("info").innerHTML = info["results"][0]["t"];
    }

    postRequest(request, callback);
}