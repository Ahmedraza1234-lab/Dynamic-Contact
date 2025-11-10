let contactList = [];

// Render table function
function renderTable() {
    const tbody = document.querySelector("#contactTable tbody");
    tbody.innerHTML = "";
    contactList.forEach(contact => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${contact.name}</td>
            <td>${contact.number}</td>
            <td>${contact.relation}</td>
        `;
        row.onclick = () => fillForm(contact);
        tbody.appendChild(row);
    });
}

// Fill form when row clicked
function fillForm(contact) {
    document.getElementById("name").value = contact.name;
    document.getElementById("number").value = contact.number;
    document.getElementById("relation").value = contact.relation;
}

function addContact() {
    const name = document.getElementById("name").value.trim();
    const number = document.getElementById("number").value.trim();
    const relation = document.getElementById("relation").value.trim();

    if (!name || !number || !relation) {
        alert("Please fill all fields!");
        return;
    }

    if (contactList.some(c => c.number === number)) {
        alert("This number already exists!");
        return;
    }

    contactList.push({ name, number, relation });
    renderTable();
    alert("Contact added!");
    clearForm();
}

function editContact() {
    const number = document.getElementById("number").value.trim();
    const contact = contactList.find(c => c.number === number);

    if (!contact) {
        alert("Contact not found!");
        return;
    }

    const name = document.getElementById("name").value.trim();
    const relation = document.getElementById("relation").value.trim();
    if (name) contact.name = name;
    if (relation) contact.relation = relation;

    renderTable();
    alert("Contact updated!");
    clearForm();
}

function deleteContact() {
    const number = document.getElementById("number").value.trim();
    const index = contactList.findIndex(c => c.number === number);

    if (index === -1) {
        alert("Contact not found!");
        return;
    }

    contactList.splice(index, 1);
    renderTable();
    alert("Contact deleted!");
    clearForm();
}

function searchContact() {
    const number = document.getElementById("number").value.trim();
    const contact = contactList.find(c => c.number === number);

    if (!contact) {
        alert("Contact not found!");
        return;
    }

    alert(`Name: ${contact.name}\nNumber: ${contact.number}\nRelation: ${contact.relation}`);
}

// Clear form fields
function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("number").value = "";
    document.getElementById("relation").value = "";
}
