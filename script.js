console.log("This is working");

function maskPassword(pass) {
    let str = "";
    for (let index = 0; index < pass.length; index++) {
        str += "*";
    }
    return str;
}


function copyText(txt) {
    navigator.clipboard.writeText(txt).then(
        () => {
            // alert("Copied the text");
            document.getElementById("alert").style.display = "inline";

            setTimeout(() => {
                document.getElementById("alert").style.display = "none";
            }, 700);
        },
        () => {
            alert("Failed to copied");
        }
    );
}


const deletePassword = (website) => {
    let data = localStorage.getItem("passwords");
    let arr = JSON.parse(data);
    arrUpdated = arr.filter(
        (e) => {
            return e.website != website;
        });
    localStorage.setItem("passwords", JSON.stringify(arrUpdated));

    // Reload the current page
    location.reload();
    showPasswords();
}


// logic to fill the table
const showPasswords = () => {
    let tb = document.querySelector("table");
    let data = localStorage.getItem("passwords")

    if (data == null || JSON.parse(data).length == 0) {
        document.getElementById("tablee").style.border = "none";
        tb.innerHTML = "No data to show";

    } else {
        tb.innerHTML = `<tr>
            <th>Website</th>
            <th>Username</th>
            <th>Password</th>
            <th>Delete</th>
        </tr>`;

        let arr = JSON.parse(data);
        let str = "";
        for (let index = 0; index < arr.length; index++) {
            const element = arr[index];

            str += `<tr>
            
        <td>${element.website} <img id="copy" src="img/copy.svg" alt="copy button" onclick="copyText('${element.website}')"</td>
        <td>${element.username} <img id="copy" src="img/copy.svg" alt="copy button" onclick="copyText('${element.username}')"</td></td>
        <td>${maskPassword(element.password)} <img id="copy" src="img/copy.svg" alt="copy button" onclick="copyText('${element.password}')"</td></td>
        <td><button class="btnsm" onclick="deletePassword('${element.website}')"><i class="bi bi-trash" style = "font-size: 1.12rem;"></i> Delete</button></td>
        </tr>`
        }
        tb.innerHTML = tb.innerHTML + str;
    }
    website.value = "";
    username.value = "";
    password.value = "";
}


showPasswords();
document.querySelector(".btn").addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Clicked...");
    console.log(website.value, username.value, password.value);

    let passwords = localStorage.getItem("passwords");
    console.log(passwords);

    if (passwords == null) {
        let json = [];
        json.push({ website: website.value, username: username.value, password: password.value });
        localStorage.setItem("passwords", JSON.stringify(json));

    } else {
        let json = JSON.parse(localStorage.getItem("passwords"));
        json.push({ website: website.value, username: username.value, password: password.value });
        localStorage.setItem("passwords", JSON.stringify(json));
    }
    showPasswords();
});
