function talk() {
    var know = {
        "Who are you": "Hello, I am Prakhar. ",
        "How are you": "I am well.  :)",
        "Where do you study": "School of Management Sciences,Lucknow",
        "Your Aim": "I want to be a Front End Developer. ",
        "ok": "Thank You So Much ",
        "Bye": "Okay! Will meet soon.."
    };
    var user = document.getElementById('userBox').value;
    document.getElementById('chatLog').innerHTML = user + "<br>";
    if (user in know) {
        document.getElementById('chatLog').innerHTML = know[user] + "<br>";
    } else {
        document.getElementById('chatLog').innerHTML = "Sorry,I didn't understand. <br>";
    }
}