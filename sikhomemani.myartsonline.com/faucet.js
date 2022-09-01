const showBtn = document.querySelector('.navBtn');
const topNav = document.querySelector('.top-nav');

showBtn.addEventListener('click', function(){
    if(topNav.classList.contains('showNav')){
        topNav.classList.remove('showNav');
        showBtn.innerHTML = '<i class = "fas fa-bars"></i>';
    } else {
        topNav.classList.add('showNav');
        showBtn.innerHTML = '<i class = "fas fa-times"></i>';
    }
});

/* Lightbox */
var lightbox = new SimpleLightbox('.gallery a', { /* options */ });

// Submitting Form //

document.querySelector(".form").addEventListener("submit", submitForm);

function submitForm(e){
    e.preventDefault();

    //Input Values
    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let number = document.querySelector(".number").value;
    let subject = document.querySelector(".subject").value;
    let message = document.querySelector(".message").value;

    saveContactInfo(name, email, number, subject, message);

    document.querySelector(".form").reset();

    sendEmail(name, email, number, subject, message);
}

// Send Email //

function sendEmail(name, email, number, subject, message){
    Email.send({
        Host: "smtp.gmail.com",
        Username: 'dlamezen@gmail.com',
        Password: "Ontlametse2000",
        To: "OntlametseSenwa@gmail.com",
        From: "dlamezen@gmail.com",
        Subject: `Faucetgraphy Website Enquiry: ${subject}`,
        Body: `Name: ${name} <br/> Email: ${email} <br/> Number: ${number} <br/> Message ${message}`,
    }).then((message) => alert("The Email Has Been Sent Successfully"))
}

//Mail Sending

function SendMail(){
    var params = {
        from_name : document.getElementById("name").value,
        from_email : document.getElementById("email").value,
        from_number : document.getElementById("number").value,
        from_subject : document.getElementById("subject").value,
        message : document.getElementById("message").value
    }

    emailjs.send("service_7tk4g1x", "template_esrfsda", params).then(function (res) {
        alert("Success" + res.status);
    })
}