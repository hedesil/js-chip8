import {FileProcessor} from "./fileSystem/fileProcessor";

declare var window: any;

async function loadFile() {
    const fileProcessor = new FileProcessor();
    const fileContents = await fileProcessor.loadFile();
    console.log(`The file content in hexadecimal is: ${fileContents}`);
}

window.loadFile = loadFile;

