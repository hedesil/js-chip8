export class FileProcessor {
    private fileInput: HTMLInputElement;

    constructor() {
        this.fileInput = document.getElementById("inputFile") as HTMLInputElement;
    }

    public async loadFile(): Promise<string> {
        return new Promise((resolve, reject) => {
            if (this.fileInput.files && this.fileInput.files.length > 0) {
                const file = this.fileInput.files[0];
                if (!file) {
                    reject("No file selected");
                    return;
                }
                // 1. If there is a file, we will instance a new reader
                const fileReader = new FileReader();
                // 3. Now we will wait to use the file when its already read
                fileReader.onload = () => {
                    // Read the result
                    const result = fileReader.result as ArrayBuffer;
                    if (result) {
                        // Needs to transform the file to hexadecimal to be read
                        let hexString = '';
                        // Instance new data view over the bytes matrix to manipulate data as simple numbers
                        const dataView = new DataView(result);
                        // ByteLength represents the amount of bytes which dataView contains
                        for (let i = 0; i < dataView.byteLength; i++) {
                            // Process the array buffer as an Uint8Array (byte by byte)
                            const value = dataView.getUint8(i).toString(16);
                            // Add a zero to values to the left to have 2 characters length. I.E: input E --> output 0E
                            hexString += value.padStart(2, '0');
                        }
                        resolve(hexString);
                    } else {
                        reject("Error reading file");
                    }
                };
                // 2. Read the file as an ArrayBuffer
                fileReader.readAsArrayBuffer(file);
            }
        });
    }
}
