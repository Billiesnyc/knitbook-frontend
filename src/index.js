const patternCont = document.querySelector('.patternContent')
const backRow = document.querySelector('.back-button')
const filterForm = document.querySelector('.filter-form')

const renderPattern = function(pattern){
    
        const colDiv = document.createElement('div');
        colDiv.className = "col-3 text-center p-4";
        colDiv.innerHTML=`
        <div class="pattern-image"><a href="#" id="${pattern.id}"><img src="images/${pattern.image_url}" width="100px" height="100px" id="${pattern.id}" class="pattern-image"></a></div> <br>
        <div class="pattern-name"><a href="#" id="${pattern.id}" class="pattern-name">${pattern.name}</a></div>
        `
        patternCont.appendChild(colDiv);
}

const renderPatterns = function(pattern) {
    clearPatterns();
    pattern.forEach(renderPattern)
}

const renderFilteredPatterns = function(pattern, filter, value){
    clearPatterns();
    if (filter === "difficulty"){
    pattern.forEach(pattern => {
        if (pattern.difficulty === value){
            renderPattern(pattern)
        }
    })} else if (filter === "size"){
        pattern.forEach(pattern => {
            if (pattern.size === value){
                renderPattern(pattern)
            }
        })
    }
}

const renderIndividualPattern = function(pattern){
    const backDiv = document.createElement('div');
    backDiv.className = "col"
        backDiv.className = "col"
        backDiv.innerHTML = `<a class="back-button"> Back</a>`
        backRow.appendChild(backDiv)
    const colDiv = document.createElement('div');
    colDiv.className = "pattern_row p-4";
    colDiv.innerHTML=`
    <div class="pattern_row">
        <h1 class="jumbotron-heading title">${pattern.name}</h1>
            <div>
                <img src="images/${pattern.image_url}" id="image">
            </div><br>
            
            <ul class="descriptions">
                <p id="difficulty">Difficulty: ${pattern.difficulty}</p>
                <p id="size">Size: ${pattern.size}</p>
                <p id="created_by">Created by ${pattern.user_id}</p>
                <p id="favorite_count">This pattern has been added to ${pattern.likes} users' favorites list.</p>
            </ul>
            <div class="btn-wrap">
                <button id="add_to_favorites_button" class="button">Add to Favourites</button>
                <a href="images/PDFs/${pattern.download_url}" download target="_blank"><button id="download_button" class="button">Download PDF</button></a>
            </div>
    </div>
    `
    patternCont.appendChild(colDiv);
}

const clearPatterns = function(){
    patternCont.innerHTML = " "
    backRow.innerHTML = " "
}


const findUserName = function(id){
    API.getUser(id).then(console.log(user.name))
}

document.addEventListener('click', event => {
    if (event.target.className === 'pattern-image'){
        patternCont.innerHTML = ""
        API.getPattern(event.target.id).then(renderIndividualPattern)
    } else if (event.target.className === 'pattern-name'){
        patternCont.innerHTML = ""
        API.getPattern(event.target.id).then(renderIndividualPattern)
    }
})

document.addEventListener('click', event => {
    
    if (event.target.className === "back-button"){
        
        event.preventDefault;
        API.getPatterns().then(renderPatterns)
    }
})

document.addEventListener('click', event => {
    if (event.target.className === "filter-popup-button"){
        const filterForm = document.querySelector(`#filter-form`)
        const displayStyle = filterForm.style.display
        filterForm.style.display = displayStyle === '' ? 'none' : ''
    }
})

filterForm.addEventListener('change', event => {
    API.getPatterns().then(patterns => renderFilteredPatterns(patterns, event.target.name, event.target.value))
})

filterForm.addEventListener('click', event => {
    if (event.target.className === "reset-filters"){
        API.getPatterns().then(renderPatterns)
    }
})

API.getPatterns().then(renderPatterns)