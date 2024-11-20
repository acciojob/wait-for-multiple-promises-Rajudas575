function createRandomPromise(promiseName) {
    const randomTime = Math.random() * 2 + 1; 
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(randomTime);
      }, randomTime * 1000); 
    });
  }

  const promises = [
    createRandomPromise('Promise 1'),
    createRandomPromise('Promise 2'),
    createRandomPromise('Promise 3')
  ];

  const output = document.getElementById('output');
  output.innerHTML = '<tr><td colspan="2">Loading...</td></tr>';

  Promise.all(promises)
    .then((results) => {
      // Clear the loading text
      output.innerHTML = '';

     
      results.forEach((result, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>Promise ${index + 1}</td><td>${result.toFixed(3)}</td>`;
        output.appendChild(row);
      });

      
      const totalTime = results.reduce((sum, time) => sum + time, 0);
      const totalRow = document.createElement('tr');
      totalRow.innerHTML = `<td>Total</td><td>${totalTime.toFixed(3)}</td>`;
      output.appendChild(totalRow);
    })
    .catch((error) => {
      console.error('Error:', error);
    });