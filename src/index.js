const patternCont = document.querySelector('.patternContent')
const backRow = document.querySelector('.back-button')

const renderPattern = function(pattern){
    
        const colDiv = document.createElement('div');
        colDiv.className = "col-3 text-center p-4";
        colDiv.innerHTML=`
        <div class="pattern-image"><a href="#" id="${pattern.id}"><img src="images/${pattern.image_url}" width="100px" height="100px" id="${pattern.id}"></a></div> <br>
        <div class="pattern-name"><a href="#" id="${pattern.id}">${pattern.name}</a></div>
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
    colDiv.className = "col-1 p-4";
    colDiv.innerHTML=`
    <div class="pattern-image"><a href="#" id="${pattern.id}"><img src="images/${pattern.image_url}" id="${pattern.id}"></a></div> <br>
    <div class="pattern-name"><a href="#" id="${pattern.id}">${pattern.name}</a></div>
    `
    patternCont.appendChild(colDiv);
}

clearPatterns = function(){
    patternCont.innerHTML = " "
    backRow.innerHTML = " "
}

document.addEventListener('click', event => {
    event.preventDefault();
    if (event.target.className === "pattern-image" || "pattern-name"){
        console.log(event.target.id);
        patternCont.innerHTML = ""
        API.getPattern(event.target.id).then(renderIndividualPattern)
    }
})

document.addEventListener('click', event => {
    event.preventDefault();
    if (event.target.className === "back-button"){
        API.getPatterns().then(renderPatterns)
    }
})

API.getPatterns().then(renderPatterns)