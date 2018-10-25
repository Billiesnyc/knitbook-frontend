const renderUploadForm = function(){
    const uploadDiv = document.createElement('div');
    uploadDiv.className = "col p-4";
    uploadDiv.innerHTML=`
    <h1 class="pb-4 text-left">Upload a New Pattern</h1>
    <form class="row pload-form" id="upload-form">
            <div class="upload-group col text-right">
                <label for="upload-name">Name of Pattern:</label>
                <input type="text" name="upload-name" class="upload-name" id="upload"><br><br>
                <label for="upload-difficulty">Difficulty:</label>
                <select name="difficulty" id="difficultySelect" class="upload-difficulty">
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Expert">Expert</option>
                </select><br><br>
                <label for="upload-size">Size:</label>
                <input type="text" name="size" class="upload-size" id="sizeSelect"><br>
            </div>
            <div class="upload-group col text-center">
                <button id="upload" class="inputfilelabel pt-2">
                    <label for="upload-image-url" class="inputfilelabel">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path></svg> 
                    Upload Main Image
                    </label>
                </button>
                <input type="file" name="upload-image-url" id="upload-image-url" accept=".png, .jpg, .jpeg" class="inputfile">
                <br><br>
                <button id="upload" class="inputfilelabel pt-2">
                    <label for="upload-pdf-url" class="inputfilelabel">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path></svg> 
                    Upload Pattern PDF
                    </label>
                </button>
                <input type="file" name="upload-pdf-url" id="upload-pdf-url" accept=".pdf" class="inputfile">
                
            </div>
            <div class="upload-group-submit col text-left">
            <input type="submit" value="Upload Pattern" id="submitButton" class="inputfilelabel">
            <button id="cancelButton" class="inputfilelabel">Cancel</button>
            </div>  
        </form>
    `
    patternCont.appendChild(uploadDiv);
}

document.addEventListener('click', event => {
    if (event.target.className === "upload-button"){
        clearPatterns();
        renderUploadForm();
        
    }
    else if (event.target.id === "cancelButton"){
        event.preventDefault;
        clearPatterns();
        API.getPatterns().then(renderPatterns)
    }
})

document.addEventListener('submit', event => {
    event.preventDefault;
        const inputName = document.querySelector('.upload-name');
        const inputDifficulty = document.querySelector('.upload-difficulty');
        const inputSize = document.querySelector('.upload-size');
        const inputImage = document.querySelector('#upload-image-url');
        const inputPDF = document.querySelector('#upload-pdf-url');
        let name = inputName.value;
        let image_url = inputImage.value;
        let download_url = inputPDF.value;
        let difficulty = inputDifficulty.value;
        let size = inputSize.value;
        let likes = 0;
        let user_id = parseInt(selectTagUsers.selectedOptions[0].id);

        API.createPattern(name, image_url, download_url, difficulty, size, likes, user_id).then(renderPatterns)
})