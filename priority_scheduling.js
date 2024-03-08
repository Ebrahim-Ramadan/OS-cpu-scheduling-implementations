const processes = [
    { pid: 1, burstTime: 10, priority: 3 },
    { pid: 2, burstTime: 1, priority: 1 },
    { pid: 3, burstTime: 2, priority: 4 },
    { pid: 4, burstTime: 1, priority: 5 },
    { pid: 5, burstTime: 5, priority: 2 },
  ];
  
  const calculateAverageWaitingTime = (processes) => {
    processes.sort((a, b) => a.priority - b.priority);
    let totalWaitingTime = 0;
    let currentWaitingTime = 0;
  
    for (let i = 0; i < processes.length; i++) {
      const process = processes[i];
      process.waitingTime = currentWaitingTime;
        currentWaitingTime += process.burstTime;
        
      totalWaitingTime += process.waitingTime;
    }
  
    const averageWaitingTime = totalWaitingTime / processes.length;
    console.log('Average Waiting Time:', averageWaitingTime);
    return processes;
  };
  
  const processesWithWaitingTime = calculateAverageWaitingTime(processes);
  console.log(processesWithWaitingTime);