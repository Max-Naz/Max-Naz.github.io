function toggleTextVisibility(){
    // ищем нужный нам тег информера
    var elm = document.getElementById("skills-text");
        // если тег найден, обрабатываем его
    if(elm){
        // меняем видимость элемента на противоположную
        if(elm.style.display == "block"){
            elm.style.display = "none";
            document.getElementById("button").innerHTML= '+ развернуть ↓';
        }
        else{
            elm.style.display = "block";
            document.getElementById("button").innerHTML= '- спрятать ↑';
        }
    }
}