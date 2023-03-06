function login() {
    const nameEl = document.querySelector("#name"); //finds the id "name" in the document
    localStorage.setItem("userName", nameEl.value); //stores the name entered into the local storage
    window.location.href = "play.html"; //link to the play.html page
}