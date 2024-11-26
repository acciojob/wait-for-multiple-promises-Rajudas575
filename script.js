function createRandomPromise(promiseName) {
            const randomTime = Math.random() * 2 + 1; // Random time between 1 and 3 seconds
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve({ name: promiseName, time: randomTime });
                }, randomTime * 1000);
            });
        }

        // Creating three promises
        const promise1 = createRandomPromise("Promise 1");
        const promise2 = createRandomPromise("Promise 2");
        const promise3 = createRandomPromise("Promise 3");

        // Wait for all promises to resolve
        Promise.all([promise1, promise2, promise3]).then(results => {
            // Remove the loading text
            const tableBody = document.getElementById("tableBody");
            tableBody.innerHTML = ''; // Clear the loading row

            // Variables to store total time
            let totalTime = 0;

            // Add rows for each promise result
            results.forEach(result => {
                const row = document.createElement("tr");
                const nameCell = document.createElement("td");
                nameCell.textContent = result.name;
                const timeCell = document.createElement("td");
                timeCell.textContent = result.time.toFixed(3); // Limit to 3 decimal places
                row.appendChild(nameCell);
                row.appendChild(timeCell);
                tableBody.appendChild(row);
                totalTime += result.time;
            });

            // Add the total time row
            const totalRow = document.createElement("tr");
            const totalNameCell = document.createElement("td");
            totalNameCell.textContent = "Total";
            const totalTimeCell = document.createElement("td");
            totalTimeCell.textContent = totalTime.toFixed(3); // Limit to 3 decimal places
            totalRow.appendChild(totalNameCell);
            totalRow.appendChild(totalTimeCell);
            tableBody.appendChild(totalRow);
        });


