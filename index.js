const toolsDisplay = document.querySelector("#tools-display")
const toolsEmailButton = document.querySelector("#emails")

fetch("http://localhost:3000/tools")
.then(res => res.json())
.then(tools => {
    const emailArray = tools[0].emails
    toolsEmailButton.addEventListener("click", e =>{
        emailArray.forEach(email => {
            console.log(email)
            const createDiv = document.createElement("div")
            const createType = document.createElement("p")
            const createSubject = document.createElement("p")
            const createBody = document.createElement("p")
            createDiv.className = "tools-email"

            toolsDisplay.append(createDiv)

            createType.textContent = email.type 
            createSubject.textContent = email.subject
            createBody.textContent = email.body

            createDiv.append(createType, createSubject, createBody)
        })
    })
})


// "id": 1,
// "type": "Introduction",
// "subject": "Enhance Your Real Estate Presence with AI-Powered Content",
// "body": "Hi [Client Name],\n\nI recently came across your work in the