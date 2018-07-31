// Request Listener (remember: no arrow functions with this)
function reqListener() {
  let data = JSON.parse(this.responseText);
  let dataItems = data.map(data => `<p><strong>${data.firstName} ${data.lastName}</strong>: ${data.email}</p>`);

  // This line is necessary to avoid having the data lines separated by a comma
  const html = `${dataItems.join('')}`;

  document.getElementById('data').innerHTML = html;
}

// Doesn't work
// function reqListener2(xhr) {
//   let data = JSON.parse(this.responseText);
//   let dataItems = data.map(data => `<p><strong>${data.firstName} ${data.lastName}</strong>: ${data.email}</p>`);

//   // This line is necessary to avoid having the data lines separated by a comma
//   const html = `${dataItems.join('')}`;

//   document.getElementById('data').innerHTML = html;
// if ( xhr.readyState === 4 ) {
//   }
// }

// Error Handler
reqError = err => console.log('Fetch Error: ', err);


/*  **********  XMLHttpRequest  **********  */
getHttpReq = () => {
  // 1. Create an XML HTTP Request object
  let xhr = new XMLHttpRequest();

  // 2.	Create a callback function: programming you want to run while server returns its response.
  xhr.onload = reqListener;
  // xhr.onreadystatechange = reqListener2(xhr);
  xhr.onerror = reqError;

  // 3.	Open a Request:
  xhr.open('GET', '/api/data', true);

  // 4.	Send the request
  xhr.send();
}


/*  **********  FETCH  **********  */
