const selectTagUsers = document.querySelector('#userSelect')

const selectDifficulty = document.querySelector('#difficultySelect')
const selectSize = document.querySelector('#sizeSelect')

const allUsers = []



API.getUsers().then(users => {
    users.forEach(user => {
        allUsers.push(user)
    })
})

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
    options.innerHTML = `<option value="${userOpt.id}">${userOpt.name}!</option>`
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