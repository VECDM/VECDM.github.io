document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById("main-text");
    const text = "Accessing VECDM Network...";
    
    let index = 0;
    function type() {
        if (index < text.length) {
            textElement.innerHTML = text.substring(0, index + 1) + "_";
            index++;
            setTimeout(type, 100);
        } else {
            textElement.innerHTML = text;
        }
    }
    
    type();
});
