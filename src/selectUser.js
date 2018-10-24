const selectTagUsers = document.querySelector('#userSelect')
const allUsers = []


API.getUsers().then(users => {
    users.forEach(user => {
        allUsers.push(user)
    })
})

function createUserOptions(users, select){
    users.forEach(userOpt => {
    const options = document.createElement('option')
    options.innerHTML = `<option value="${userOpt.id}">${userOpt.name}!</option>`
    select.appendChild(options)
    })
}

API.getUsers().then(users =>  createUserOptions(users, selectTagUsers))
