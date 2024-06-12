console.log("This is working");

document.querySelector(".btn").addEventListener("click", (e) => {
    e.preventDefault();
    console.log("clicked");
    console.log(username.value, password.value);

    let passwords = localStorage.getItem("passwords");
    console.log(passwords);

    if (passwords == null) {
        let json = []
        json.push = ({ username: username.value, password: password.value });
        alert("Please fill out the details");
        localStorage.getItem("passwords", JSON.stringify);
    }
    else {
        let json = JSON.parse(localStorage.getItem("passwords"));
        json.push = ({ username: username.value, password: password.value });
        alert("Password Saved");
        localStorage.getItem("passwords", JSON.stringify);
    }

})

