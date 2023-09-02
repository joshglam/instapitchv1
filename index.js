const navbar = document.querySelector("#navbar")

//collapses and uncollapses sections
const founderButton = document.querySelector("#founder-button")
const productButton = document.querySelector("#product-button")
const recordedButton = document.querySelector("#recorded-button")

collapseButton(founderButton)
collapseButton(productButton)
collapseButton(recordedButton)

function collapseButton(button) {
    button.addEventListener("click", e => {
        const inSection = e.target.parentElement
        const createTitle = document.createElement("p")
        const h2 = inSection.querySelector("h2")
        
        createTitle.textContent = h2.textContent
        navbar.append(createTitle)
        inSection.className = "collapse"
        
        createTitle.addEventListener("click", e => {
            inSection.className = ""
            createTitle.remove()
        })
    })
}

// uses fetch to display email in tools
const toolsDisplay = document.querySelector("#tools-display")
const toolsEmailButton = document.querySelector("#emails")
const toolsExplination = document.querySelector("#tools-display-explination")
const toolsContainer = document.querySelector("#tools-container")

fetch("http://localhost:3000/tools")
.then(res => res.json())
.then(tools => {
    const emailArray = tools[0].emails
    toolsEmailButton.addEventListener("click", e =>{
        toolsDisplay.removeChild(toolsContainer)
        emailArray.forEach(email => {
            console.log("hello!")
            const toolsContainer = document.createElement("section")
            const createDiv = document.createElement("div")
            const createType = document.createElement("p")
            const createSubject = document.createElement("p")
            const createBody = document.createElement("p")
            toolsContainer.id = "tools-container"
            createDiv.className = "tools-email"

            toolsDisplay.append(toolsContainer)
            toolsContainer.append(createDiv)

            createType.textContent = email.type 
            createSubject.textContent = email.subject
            createBody.textContent = email.body

            createDiv.append(createType, createSubject, createBody)
        })
    })
})

