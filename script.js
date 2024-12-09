 function createRandomPromise(promiseName) {
        const timeTaken = Math.random() * 2 + 1; // Time between 1 and 3 seconds
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({ name: promiseName, timeTaken: timeTaken.toFixed(3) });
            }, timeTaken * 1000); // Convert seconds to milliseconds
        });
    }

    // Create three promises
    const promise1 = createRandomPromise("Promise 1");
    const promise2 = createRandomPromise("Promise 2");
    const promise3 = createRandomPromise("Promise 3");

    // Start loading state
    const output = document.getElementById("output");
    
    // Wait for all promises to resolve using Promise.all()
    Promise.all([promise1, promise2, promise3]).then(results => {
        // Remove loading row
        document.getElementById("loading").remove();

        // Add rows for each promise
        results.forEach(result => {
            const row = document.createElement("tr");
            const promiseNameCell = document.createElement("td");
            const timeTakenCell = document.createElement("td");

            promiseNameCell.textContent = result.name;
            timeTakenCell.textContent = result.timeTaken;

            row.appendChild(promiseNameCell);
            row.appendChild(timeTakenCell);
            output.appendChild(row);
        });

        // Calculate the total time taken to resolve all promises
        const totalTime = results.reduce((sum, result) => sum + parseFloat(result.timeTaken), 0).toFixed(3);
        
        // Add row for Total time
        const totalRow = document.createElement("tr");
        const totalCell1 = document.createElement("td");
        const totalCell2 = document.createElement("td");

        totalCell1.textContent = "Total";
        totalCell2.textContent = totalTime;

        totalRow.appendChild(totalCell1);
        totalRow.appendChild(totalCell2);
        output.appendChild(totalRow);
    });