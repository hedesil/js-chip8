import * as fs from 'fs';
const MEMORY_SIZE = 4096;
const inputFile = document.getElementById("inputFile");
inputFile.addEventListener("change", (event) => {
    if (inputFile.files) {
        const file = inputFile.files[0];
        const reader = new FileReader();
        reader.addEventListener("load", (event) => {
            const content = reader.result;
            console.log(content);
        });
    }
});
function loadRom(machine) {
    let file;
    if (file === null) {
        readCH8File('Pong.ch8');
        console.log('Cannot open ROM file.');
        return;
    }
}
function readCH8File(fileName) {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, (error, data) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(data);
            }
        });
    });
}
