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

//displays target client
const displayClientName = document.querySelector("#client-first-last-name")





// uses fetch to display email in tools
const toolsDisplay = document.querySelector("#tools-display")
const toolsEmailButton = document.querySelector("#emails")
const toolsExplination = document.querySelector("#tools-display-explination")
const toolsContainer = document.querySelector("#tools-container")

fetch("http://localhost:3000/tools")
.then(res => res.json())
.then(tools => {
    //displays client
    const displayClientName = document.querySelector("#client-first-last-name")
    const displayClientEmail = document.querySelector("#client-email")
    const displayClientPhone = document.querySelector("#client-phone")
    const displayClientWebsite = document.querySelector("#client-website")
    const displayClientInsta = document.querySelector("#client-instagram")
    const displayClientFb = document.querySelector("#client-facebook")
    const displayClientBlog = document.querySelector("#client-blog")
    const displayClientStage = document.querySelector("#client-stage")
    

    const contactInfo = tools[2].contacts[0]
    displayClientName.textContent =  `${contactInfo.FirstName} ${contactInfo.LastName}`
    displayClientEmail.textContent = contactInfo.Email
    displayClientPhone.textContent = contactInfo.Phone
    displayClientWebsite.href = contactInfo.Website
    displayClientInsta.href = contactInfo.Instagram
    displayClientFb.href = contactInfo.Facebook
    displayClientBlog.href = contactInfo.Blog 
    //needs to be made stilldisplayClientStage




    
    //switches to next contact
    
    // {
    //     "AccountOwner": null,
    //     "Industry": "real estate",
    //     "BusinessName": "Cushman & Wakefield",
    //     "Facebook": "https://www.facebook.com/cushmanwakefield/",
    //     "Instagram": "https://instagram.com/cushwake/",
    //     "Website": "http://www.cushmanwakefield.com/en/offices/phoenix",
    //     "Blog": null,
    //     "Yelp": null,
    //     "GoogleMyBusiness": null,
    //     "FirstName": "Herm",
    //     "LastName": "Franks",
    //     "Phone": "(602) 258-4156",
    //     "Email": "herm.franks@cushwake.com",
    //     "Notes": null,
    //     "NotesFromEngineers": null,
    //     "OrDate": null,
    //     "Outreach": null,
    //     "FollowUp": "FALSE",
    //     "FollowUpNotes": null
    //   },

    // emails fetched
    const emails = tools[0].emails
    toolsEmailButton.addEventListener("click", e =>{
        
        const deleteFirst = document.querySelector("#tools-container")
        deleteFirst.remove()
        const newToolsContainer = document.createElement("div")
        newToolsContainer.id = "tools-container"
        toolsDisplay.append(newToolsContainer)

        emails.forEach(email => {
            const createDiv = document.createElement("div")
            const createType = document.createElement("p")
            const createSubject = document.createElement("p")
            const createBody = document.createElement("p")
            createDiv.className = "tools-email"

            toolsDisplay.append(newToolsContainer)
            newToolsContainer.append(createDiv)

            createType.textContent = email.type 
            createSubject.textContent = email.subject
            createBody.textContent = email.body

            createDiv.append(createType, createSubject, createBody)
        })
    })
    // call scripts
    const coldCallButton = document.querySelector("#cold-call")
    const callScript = tools[1].callScripts

    coldCallButton.addEventListener("click", e =>{
        const deleteFirst = document.querySelector("#tools-container")
        deleteFirst.remove()
        const newToolsContainer = document.createElement("div")
        newToolsContainer.id = "tools-container"
        toolsDisplay.append(newToolsContainer)

        callScript.forEach(call => {
            const toolContainer = document.createElement("div")
            const createDiv = document.createElement("div")
            const createType = document.createElement("p")
            const createScript = document.createElement("p")
            toolsContainer.id = "tools-container"
            createDiv.className = "tools-call"

            newToolsContainer.append(toolContainer)
            toolContainer.append(createDiv)

            createType.textContent = call.type 
            createScript.textContent = call.script

            createDiv.append(createType, createScript)
        })
    })

    
})