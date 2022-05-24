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
        
        let high = info["results"][0]["h"];
        let low = info["results"][0]["l"];
        for (let i = 1; i<1439; i++)
        {
            let newH = info["results"][i]["h"];
            let newL = info["results"][i]["l"];
            if (high < newH) {high = newH;}
            if (low > newL) {low = newL;}
        }
        //info["results"][100]["h"]
        document.getElementById("highInfo").innerHTML = high;
        document.getElementById("lowInfo").innerHTML = low;
    }

    postRequest(request, callback);
}
