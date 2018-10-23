const patternCont = document.querySelector('.patternContent')
const backRow = document.querySelector('.back-button')

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

const renderIndividualPattern = function(pattern){
    const backDiv = document.createElement('div');
    backDiv.className = "col"
        backDiv.className = "col"
        backDiv.innerHTML = `<a class="back-button"> Back</a>`
        backRow.appendChild(backDiv)
    const colDiv = document.createElement('div');
    colDiv.className = "row p-4";
    colDiv.innerHTML=`
            <div class="col">
                <img src="images/${pattern.image_url}" id="image">
            </div>
            <ul class="descriptions">
                <li id="name">${pattern.name}</li>
                <li id="difficulty">${pattern.difficulty}</li>
                <li id="size">${pattern.size}</li>
                <li id="favorite_count">${pattern.likes}</li>
                <li id="created_by">${pattern.user}</li>
            </ul>
            <div class="btn-wrap">
                <button id="add_to_favorites_button">Add to Favourites</button>
                <a href="images/PDFs/${pattern.download_url}" download target="_blank"><button id="download_button">Download PDF</button></a>
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

API.getPatterns().then(renderPatterns)