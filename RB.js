const processes = [
    { pid: 1, burstTime: 24 },
    { pid: 2, burstTime: 6 },
    { pid: 3, burstTime: 3 },
];
const timeQuantum = 4

const PRcompute = (processes) => {

let waitingQueue =[]
for (let index = 0; index < processes.length; index++) {
    if (processes[index]['burstTime'] > timeQuantum) {
        for (let i = 0; i < 4; i++) {
            console.log(processes[index]);
            processes[index]['burstTime']--;
        }
        console.log('---------------------------');
        waitingQueue.push(processes[index]);
    }
    else {
        for (let i = 0; i <= processes[index]['burstTime']+1; i++) {
            console.log(processes[index]);
            processes[index]['burstTime']--;

        }
        console.log('---------------------------');
    }
    }
    if (waitingQueue.length > 0) {
        PRcompute(waitingQueue)
    } // base case for handling the recursion when the waiting queue is empty
    else {
        console.log('All processes completed.');
    }
   
}

PRcompute(processes)