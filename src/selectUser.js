const selectTagUsers = document.querySelector('#userSelect')
const selectDifficulty = document.querySelector('#difficultySelect')
const selectSize = document.querySelector('#sizeSelect')

const allUsers = []


// const UserFavoritesButt = document.querySelector('.all-favorites-popup-button')
// const addToFavoritesButt = document.querySelector('.add_favorite_button')



// function addPatternToFavorite(){
//     addToFavoritesButt.addEventListener('click', event => {
//         
        
//     })
// }

// for later when we will need to identify the current user
// function targetCurrentUser(button, userId){
//     button.addEventListener('click', event => {
//         userId = allUsers.filter(user => user.id === selectTagUsers.options.selectedIndex)
//     })
// }

function unique (array) {
  return array.filter(function(a){
    return !this[a] ? this[a] = true : false;
  }, {});
}

function difficultyUnique (patterns){
    let difficultyArray = [];
    patterns.forEach (pattern => {
        difficultyArray.push(pattern.difficulty)
    })
   return unique(difficultyArray);
}

function sizeUnique (patterns){
    let sizeArray = [];
    patterns.forEach (pattern => {
        sizeArray.push(pattern.size)
    })
   return unique(sizeArray);
}

function createUserOptions(users, select){
    users.forEach(userOpt => {
    const options = document.createElement('option')
    options.id = `${userOpt.id}`
    options.innerText = `${userOpt.name}!`
    select.appendChild(options)
    })
}

function createDifficultyOptions(patterns, select){
    const patternDifficulty = difficultyUnique(patterns)
    patternDifficulty.forEach(patternOpt => {
    const options = document.createElement('option')
    options.innerHTML = `<option value="${patternOpt}">${patternOpt}</option>`
    select.appendChild(options)
    })
}

function createSizeOptions(patterns, select){
    const patternSize = sizeUnique(patterns)
    patternSize.forEach(patternOpt => {
    const options = document.createElement('option')
    options.innerHTML = `<option value="${patternOpt.id}">${patternOpt}</option>`
    select.appendChild(options)
    })
}

API.getUsers().then(users =>  createUserOptions(users, selectTagUsers))
API.getPatterns().then(patterns =>  createDifficultyOptions(patterns, selectDifficulty))
API.getPatterns().then(patterns =>  createSizeOptions(patterns, selectSize))