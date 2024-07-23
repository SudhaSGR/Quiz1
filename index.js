function setName(){
    const name=document.getElementById('userName').value;
        document.cookie= name;
        window.location.href = window.location.href.replace("/index.html","")+"/questions.html";
}
