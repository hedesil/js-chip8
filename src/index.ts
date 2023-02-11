import * as fs from 'fs';

import {Machine_t} from "./core/machine";


const inputFile = document.getElementById("inputFile") as HTMLInputElement;

inputFile.addEventListener("change", (event) => {
    if (inputFile.files) {
        const file = inputFile.files[0];
        const reader = new FileReader();
        reader.addEventListener("load", (event) => {
            const content = reader.result as string;
            console.log(content);
        })
    }
});



function readCH8File(fileName: string): Promise<Buffer> {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, (error, data) => {
            if (error) {
                reject(error);
            } else {
                resolve(data);
            }
        });
    });
}

