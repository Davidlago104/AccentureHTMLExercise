let hasJob = false;

const formInfo = document.getElementById("formInfo");
const contactForm = document.getElementById("contactForm");
const experiences = document.getElementsByClassName("experience");

if (hasJob) {
    showMessage("Currently Employed;")
} else {
    showMessage("Thanks for visiting and offering a job")
}

function showMessage(message) {
    formInfo.innerHTML = "<p>" + message + "</p>";
}

function clearMessage(){
    formInfo.innerHTML = "";
}

contactForm.addEventListener("submit", function(event) {
    const contact = new Contact(contactForm);
    contact.send()
})

for (let i = 0; i < experiences.length; i++){
    const item = experiences[i];
    item.addEventListener("mouseenter", function (event){
        event.target.style = "background-color: #808080;"
    })
    item.addEventListener("mouseleave", function (event){
        event.target.style = "";
    })
}

class Contact {
    constructor(form) {
        this.fullName = form.elements["fullName"].value;
        this.email = form.elements["email"].value
        this.subject = form.elements["subject"].value
        this.body = form.elements["message"].value
    }

    fullName = "";
    email = ""
    subject = ""
    body = ""

    send() {
        console.info(this.formatMessage());
        showMessage("We're not sending emails yet.")
    }

    formatMessage() {
        return `To: ${this.fullName}
        Email: ${this.email}
        Subject: ${this.subject}
        Body: ${this.body}`
    }
}

