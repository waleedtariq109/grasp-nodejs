const { Worker, workerData, isMainThread } = require("worker_threads");

if (isMainThread) {
  console.log("Main " + process.pid);
  new Worker(__filename, {
    workerData: [7, 6, 2, 3],
  });
  new Worker(__filename, {
    workerData: [1, 3, 4, 9, 2, 4],
  });
} else {
  console.log("Worker " + process.pid);
  console.log(workerData.sort());
}
