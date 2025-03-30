function showSection(sectionId) {
    document.querySelectorAll('.container').forEach(container => {
        container.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

function toggleKeyField(type) {
    let keyField = document.getElementById(`${type}-key`);
    let keyOption = document.getElementById(`${type}-key-option`).value;
    keyField.disabled = keyOption === 'auto';
    if (keyOption === 'auto') {
        keyField.value = Math.floor(Math.random() * 25) + 1;
    }
}

function encrypt() {
    let message = document.getElementById("encrypt-message").value;
    let key = parseInt(document.getElementById("encrypt-key").value);
    let result = "";
    for (let i = 0; i < message.length; i++) {
        let char = message[i];
        if (char.match(/[a-z]/i)) {
            let code = message.charCodeAt(i);
            if (code >= 65 && code <= 90) {
                char = String.fromCharCode(((code - 65 + key) % 26) + 65);
            } else if (code >= 97 && code <= 122) {
                char = String.fromCharCode(((code - 97 + key) % 26) + 97);
            }
        }
        result += char;
    }
    document.getElementById("encrypt-output").innerHTML = `<strong>Encrypted Text:</strong> <span class='result-text'>${result}</span>`;
}

function decrypt() {
    let message = document.getElementById("decrypt-message").value;
    let key = parseInt(document.getElementById("decrypt-key").value);
    let result = "";
    for (let i = 0; i < message.length; i++) {
        let char = message[i];
        if (char.match(/[a-z]/i)) {
            let code = message.charCodeAt(i);
            if (code >= 65 && code <= 90) {
                char = String.fromCharCode(((code - 65 - key + 26) % 26) + 65);
            } else if (code >= 97 && code <= 122) {
                char = String.fromCharCode(((code - 97 - key + 26) % 26) + 97);
            }
        }
        result += char;
    }
    document.getElementById("decrypt-output").innerHTML = `<strong>Decrypted Text:</strong> <span class='result-text'>${result}</span>`;
}