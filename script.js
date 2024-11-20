//your JS code here. If required.
function createRandomPromise() {
    return new Promise((resolve) => {
        const randomTime = Math.random() * 2 + 1;
        setTimeout(() => {
            resolve(randomTime.toFixed(3)); 
        }, randomTime * 1000); 
    });
}

function addRow(promiseName, timeTaken) {
    const table = document.getElementById("promiseTable");
    const row = table.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    cell1.textContent = promiseName;
    cell2.textContent = timeTaken;
}


async function handlePromises() {
    document.getElementById("output").textContent = "Loading...";
    const promises = [createRandomPromise(), createRandomPromise(), createRandomPromise()];
    const results = await Promise.all(promises);
    document.getElementById("output").remove();
    results.forEach((time, index) => {
        addRow(`Promise ${index + 1}`, time);
    });

    const totalTime = results.reduce((sum, time) => sum + parseFloat(time), 0).toFixed(3);

    addRow("Total", totalTime);