const processes = [
    { pid: 1, arrivalTime: 3, burstTime: 1 },
    { pid: 2, arrivalTime: 1, burstTime: 4 },
    { pid: 3, arrivalTime: 4, burstTime: 2 },
    { pid: 4, arrivalTime: 0, burstTime: 6 },
    { pid: 5, arrivalTime: 2, burstTime: 3 },
];

const calculateAverageWaitingTime = (processes) => {
    let count = 0;
    processes.sort((a, b) => a.arrivalTime - b.arrivalTime); // Sort processes by burstTime in ascending order
console.log('processes', processes);
    const timeline = setInterval(() => {
        count++;
        console.log(count);

    }, 1000);
};

calculateAverageWaitingTime(processes);