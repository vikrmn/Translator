var content = document.getElementById("inputText");
var translateButton = document.getElementById("translateButton");
var select_Language = document.getElementById("languageSelect");
var fselect_Language = document.getElementById("flanguageSelect");
var output = document.getElementById("outputText");
fetch("https://libretranslate.com/languages")
    .then(res => res.json())
    .then(data => {
        // Iterate directly over the array returned by the API
        data.forEach(language => {
            var name = language.name;
            var code = language.code;
            var option = document.createElement("option");
            option.value = code;
            option.text = name;
            select_Language.append(option)
            fselect_Language.innerHTML += `<option value="${code}">${name}</option>`;
        });
        
    });
translateButton.addEventListener("click",translate);

function translate(){
    var text = content.value
    var flang = fselect_Language.value
    var tlang = select_Language.value
    var text = content.value
    if(flang == tlang){
        alert("You are selecting same language!")
    }
    else{
        var link = `https://api.mymemory.translated.net/get?q=${text}&langpair=${flang}|${tlang}`
        fetch(link)
        .then(res => res.json())
        .then(data => {
            output.innerHTML = data.responseData.translatedText
        })
    }

        
    

}
