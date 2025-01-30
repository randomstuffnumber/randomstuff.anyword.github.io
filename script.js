document.getElementById("generate-btn").addEventListener("click", function() {
    let length = document.getElementById("word-length").value || 5;
    let word = generateWord(length);
    
    document.getElementById("random-word").textContent = "Генерация...";
    setTimeout(() => {
        document.getElementById("random-word").textContent = word;
    }, 3000);
});

document.getElementById("policy-btn").addEventListener("click", function() {
    toggleVisibility("policy");
});

document.getElementById("generator-box").addEventListener("dblclick", function() {
    toggleVisibility("settings");
});

document.getElementById("random-word").addEventListener("dblclick", function() {
    toggleVisibility("instructions");
});

function generateWord(length) {
    const alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
    let word = "";
    for (let i = 0; i < length; i++) {
        word += alphabet[Math.floor(Math.random() * alphabet.length)];
    }
    return word;
}

function toggleVisibility(id) {
    let element = document.getElementById(id);
    element.classList.toggle("hidden");
}
