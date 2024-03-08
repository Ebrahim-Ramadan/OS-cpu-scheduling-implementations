const processes = [
    { pid: 1, arrivalTime: 0, burstTime: 6 },
    { pid: 2, arrivalTime: 0, burstTime: 3 },
    { pid: 3, arrivalTime: 0, burstTime: 3 },
];

const calculateAverageWaitingTime = (processes, total) => {
    let count = 0;
    processes.sort((a, b) => b.burstTime - a.burstTime); // Sort processes by burstTime in descending order

    const timeline = setInterval(() => {
        count++;
        console.log(count);

        // Check if the current count matches the burst time of the first process
        if (processes.length > 0 && processes[0].burstTime === count) {
            console.log(processes[0]);
            processes.shift(); // Remove the completed process from the array
            count = 0
        }

        if (processes.length === 0 ) {
            clearInterval(timeline);
            console.log('Counter reached', total, 'seconds');
        }
    }, 1000);
};

calculateAverageWaitingTime(processes, 13);