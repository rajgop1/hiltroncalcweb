let popup = document.getElementById("popup")



function check(e) {

}
function sendEmail() {
    let username = document.getElementById("username").value
    let phone = document.getElementById("phone").value
    let courseenquiry = document.getElementById("courseenquiry").value
    let enquirydetails = document.getElementById("enquirydetails").value


    let details = `username: ${username} phone: ${phone} course enquiry: ${courseenquiry} enquiry details: ${enquirydetails} `

    Email.send({
        Host: "smtp.gmail.com",
        Username: "hiltroncalckotd@gmail.com",

        Password: "biadad21",

        To: 'banwari_jak@yahoo.co.in',

        From: "hiltroncalckotd@gmail.com",
        Subject: "Hey checkout new Enquiry",
        Body: details
    }).then(
        message => {
            console.log(message)
            if (message == "OK") {
                popup.classList.remove("popuphide")                
            }

        }
    )
}
