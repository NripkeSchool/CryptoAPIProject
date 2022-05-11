function postRequest(request, loadcb) {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = loadcb;
    xhttp.open('POST', "crypto.php", true);
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhttp.send(request);
}