const processes = [
    {pid: 1, arrivalTime:10, burstTime:3},
    {pid: 2, arrivalTime:8, burstTime:2},
    {pid: 3, arrivalTime:19, burstTime:5},
    {pid: 4, arrivalTime:3, burstTime:4},
    {pid: 5, arrivalTime:14, burstTime:6},
]


const calculateAverageWaitingTime = (processes) => {
    processes.sort((a, b) => a.arrivalTime - b.arrivalTime);

    let count = 0
    const timeline = setInterval(() => {
        count++;
        console.log(count);

        processes.forEach(p => {
            if (p['arrivalTime'] === count) {
                console.log(p);
            }
        });
        if (count === processes.at(-1)['arrivalTime']) {
          clearInterval(timeline);
          console.log('Counter reached 19');
        }
    }, 1000);
}
calculateAverageWaitingTime(processes)