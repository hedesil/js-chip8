export class FileProcessor {
    private fileInput: HTMLInputElement;

    constructor() {
        this.fileInput = document.getElementById("fileInput") as HTMLInputElement;
    }

    public async loadFile(): Promise<void> {
        return new Promise((resolve, reject) => {
            if (this.fileInput.files) {
                const file = this.fileInput.files[0];
                if (!file) {
                    reject("No file selected");
                    return;
                }

                const fileReader = new FileReader();
                fileReader.onload = (event) => {
                    const contents = event.target?.result;
                    if (contents) {
                        // @ts-ignore
                        resolve(contents);
                    } else {
                        reject("Error reading file");
                    }
                };
                fileReader.readAsText(file);
            }
        });
    }
}
