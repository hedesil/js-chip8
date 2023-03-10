export interface Machine_t {
    memory: number;
    program_counter: number; // 16 bits, stores the current executing address. Used to access memory

    stack_pointer: number; // 8 bits, point to the topmost level of the stack
    stack: number[]; // 16 bits, if stack_pointer = 1 it will saved in stack position 1

    V: number[]; // maximum 16 position
    i: number; // 16 bits
    delay_timer: number; // Register that automatically decreases in 1/60 (substract 1 from the variable)
    sound_timer: number; // If value is not 0, it will sound. If the emulator runs at 60FPS substract 1
}

const MEMORY_SIZE: number = 4096;

function loadRom(machine: Machine_t): void {
    // Add code to load a file from web
    let file; // Variable that will store loaded file
    if (file === null) {
        //readCH8File('Pong.ch8');
        console.log('Cannot open ROM file.');
        return;
    }
}
