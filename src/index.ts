import {FileProcessor} from "./fileSystem/fileProcessor";

async function loadFile() {
    const fileProcessor = new FileProcessor();
    const fileContents = await fileProcessor.loadFile();
    console.log(fileContents);
}
