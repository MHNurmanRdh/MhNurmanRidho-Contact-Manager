let db = {
  contacts: [] //table collection
};

const contacts = [
  {
    id: 1,
    fullName: "Genna Arnli",
    phoneNumber: "5278765234",
    email: "garnli0@photobucket.com",
    gender: "Female"
  },
  {
    id: 2,
    fullName: "Jojo Scotchford",
    phoneNumber: "7925766855",
    email: "jscotchford1@booking.com",
    gender: "Female"
  },
  {
    id: 3,
    fullName: "Kakalina Pietasch",
    phoneNumber: "3118199662",
    email: "kpietasch2@auda.org.au",
    gender: "Female"
  },
  {
    id: 4,
    fullName: "Araldo Coil",
    phoneNumber: "5887272284",
    email: "acoil3@behance.net",
    gender: "Male"
  },
  {
    id: 5,
    fullName: "Shadow Maffi",
    phoneNumber: "8455497996",
    email: "smaffi4@bravesites.com",
    gender: "Male"
  }
];

function view() {
  let tbody = document.getElementById("table-contact");
  contacts.map((item, index) => {
    let row = tbody.insertRow();
    let id = row.insertCell(0);
    let fullName = row.insertCell(1);
    let phoneNumber = row.insertCell(2);
    let email = row.insertCell(3);
    id.innerHTML = item.id;
    fullName.innerHTML = item.fullName;
    phoneNumber.innerHTML = item.phoneNumber;
    email.innerHTML = item.email;
  });
}

function add(data) {
  let result = [...contacts, data];
  return result;
}

function edit(id) {}

function remove(data, id) {}

let myInput = {
  id: 1,
  fullName: "Murtantio Tirtawan",
  phoneNumber: "085734580986",
  email: "Murtantio@gmail.com",
  gender: "Male"
};

view();
add(myInput);
// edit(1, data);
// remove(1);
