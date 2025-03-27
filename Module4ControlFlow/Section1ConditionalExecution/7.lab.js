"use strict";

// showing the first contact (first)
// showing the last contact (last)
// adding a new contact (new)

// When adding a new contact, check if the user has entered all the necessary data. 
// If at least one of the three values is missing (name, phone, or email) don't add 
// the contact.
let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];

// 1. Ask user what it want to do
// 2. if option one is chosed... show the first contact
// 3. elif option two is chosed... show the last contact
// 4. elif option three is choosed.. add new contact
// 4.1 but if miss some data from the user don't add the contact


let stopProgram = false;

while (stopProgram === false) {
    let userDecision = prompt("Do you want to see the first contact type '1', if you want to see the last contact type '2', if you want to add a new contact type '3'", '1 or 2 or 3');
    switch (userDecision) {
        case '1':
            alert(contacts[0].name + " " + contacts[0].phone + " " + contacts[0].email);
            stopProgram = confirm("Would you like close the program");
            break;
        case '2':
            alert(contacts[contacts.length - 1].name + " " + contacts[contacts.length - 1].phone + " " + contacts[contacts.length - 1].email);
            stopProgram = confirm("Would you like close the program");
            break;
        case '3':
            let userName = prompt("Introduce their name: ", 'Jane');
            let userPhone = prompt("Introduce the user phone:", "3333-333-333");
            let userEmail = prompt("Introduce the user email", "janeDoe@gmail.com");
            if (userName === '' || userPhone === '' || userEmail === '') {
                alert('Invalid, exist one or more fields empty');
            } else {
                let newUser = {
                    name: userName,
                    phone: userPhone,
                    email: userEmail
                };
                contacts.push(newUser);
                console.log(contacts);
            };
            stopProgram = confirm("Would you like close the program");
            break;
        default:
            alert("Invalid data");
            stopProgram = confirm("Would you like close the program");
    };
};