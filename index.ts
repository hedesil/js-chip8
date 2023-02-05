const MEMORY_SIZE: number = 4096;

interface Machine_t {
    memory: number;
    V: number[];
}

let machine_t: Machine_t = {
    memory: MEMORY_SIZE,
    V: []
};
