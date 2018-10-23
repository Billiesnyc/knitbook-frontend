API.getPatterns().then(renderPatterns)

const pattCont = document.querySelector('.pattern-container')
const pattName = document.querySelector('.patternName')
const pattImg = document.querySelector('.patternImage')
const pattDiff = document.querySelector('#difficulty')
const pattSize = document.querySelector('#size')
const pattFavCount = document.querySelector('#favorite_count')
const pattCreateBy = document.querySelector('#created_by')
const pattAddFavBtn = document.querySelector('#add_to_favorites_button')
const pattDownBtn = document.querySelector('#download_button')

// For later to be true when click to show individual pattern            let uniqPatt = false


function findUserName(id){
    const userName = document.querySelector(`#${id}`)
    return userName.name
}