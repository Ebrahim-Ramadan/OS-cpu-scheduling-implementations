const processes = [
    { pid: 1, arrivalTime: 0, burstTime: 8 },
    { pid: 2, arrivalTime: 1, burstTime: 4 },
    { pid: 3, arrivalTime: 2, burstTime: 9 },
    { pid: 4, arrivalTime: 3, burstTime: 5 },
];

const findShortestRemainingTime = (readyQueue) => {
    let shortestProcess = readyQueue[0];
    for (let i = 1; i < readyQueue.length; i++) {
        if (readyQueue[i].burstTime < shortestProcess.burstTime) {
            shortestProcess = readyQueue[i];
        }
    }
    return shortestProcess;
};

const calculateAverageWaitingTime = (processes) => {
    let currentTime = 0;
    let totalWaitingTime = 0;
    const n = processes.length;
    const readyQueue = [];
    const ganttChart = [];

    processes.sort((a, b) => a.arrivalTime - b.arrivalTime);

    while (readyQueue.length > 0 || processes.length > 0) {

        while (processes.length > 0 && processes[0].arrivalTime <= currentTime) {
            readyQueue.push(processes.shift());
        }

        if (readyQueue.length === 0) {
            currentTime = processes[0].arrivalTime;
            continue;
        }

        const shortestProcess = findShortestRemainingTime(readyQueue);
        const burstTime = shortestProcess.burstTime;

        for (const process of readyQueue) {
            if (process !== shortestProcess) {
                totalWaitingTime += burstTime;
            }
        }

        // Execute the current process
        currentTime += burstTime;
        for (let i = 0; i < burstTime; i++) {
            console.log(`Time ${currentTime++}: Process ${shortestProcess.pid} is executing.`);
        }
        ganttChart.push({ pid: shortestProcess.pid, start: currentTime - burstTime, end: currentTime });

        // Remove the current process from the ready queue
        const index = readyQueue.indexOf(shortestProcess);
        readyQueue.splice(index, 1);
    }

    console.log("Gantt Chart:", ganttChart);
    const averageWaitingTime = totalWaitingTime / n;
    console.log("Average Waiting Time:", averageWaitingTime);
};

calculateAverageWaitingTime(processes);