const xhr = new XMLHttpRequest();
xhr.onload = () => output(xhr.responseText);
xhr.open('GET', "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json");
// xhr.setRequestHeader("Content-Type", "application/json");
xhr.send();

let data;
let main = document.getElementById("main");

function output(text) {
    data = JSON.parse(text);
    let squad = document.createElement('div');
    squad.className = "card m-1";
    let title = document.createElement('h3');
    title.innerText = data.squadName;
    title.className = "card-title p-1";
    squad.appendChild(title);
    let el = document.createElement('p');
    el.className = "card-body";
    el.innerText = "Active: " + data.active + "\n"
        + " Formed: " + data.formed + "\n"
        + " Home Town: " + data.homeTown + "\n"
        + " Secret Base: " + data.secretBase;
    squad.appendChild(el);
    main.appendChild(squad);
    printMembers(data);
}

function printMembers({ members }) {
    // let members = data.members;
    members.forEach(m => {
        let member = document.createElement('div');
        member.className = "card m-3";
        let p = document.createElement('p');
        p.className = "card-body";
        let name = document.createElement('h3');
        name.className = "card-title p-1";
        name.innerText = m.name;
        member.appendChild(name);
        p.innerText = "Age: " + m.age + "\n"
            + "Secret Identity: " + m.secretIdentity + "\n"
            + "Powers: " + m.powers;
        member.appendChild(p);
        main.appendChild(member);
    });
}











// fetch("https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json")
//     .then(res => res.json()).then(json => console.log(json)).catch(err => console.error(err));