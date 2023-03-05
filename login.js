function login() {
    const nameEl = document.querySelector("#name");
    localStorage.setItem("userName",nameEl.value);
    window.location.href = "play.html"; //changes the html of the play.html code, but is connected to the login code
}