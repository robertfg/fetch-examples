// Request Listener (remember: no arrow functions when you use "this")
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
reqError = err => console.log('XMLHttpRequest error: ', err);

/*  xhr.readyState:
      0	UNSENT	Client has been created. open() not called yet.
      1	OPENED	open() has been called.
      2	HEADERS_RECEIVED	send() has been called, and headers and status are available.
      3	LOADING	Downloading; responseText holds partial data.
      4	DONE	The operation is complete.

    xhr.status:
      200: "OK"
      403: "Forbidden"
      404: "Not Found"
*/

/*  **********  XMLHttpRequest  **********  */
getHttpReq = () => {
  // 1. Create an XML HTTP Request object
  let xhr = new XMLHttpRequest();

  // 2.	Create a callback function: programming you want to run while server returns its response.
  xhr.onload = reqListener;
  // xhr.onreadystatechange = reqListener2(xhr);

  // Error handling this way didn't seem to work.
  // xhr.addEventListener('error', reqError);
  // xhr.onerror = reqError;

  // xhr.onreadystatechange = () => {
  //   if ( xhr.readyState === 4 ) {
  //     if ( xhr.status === 200 ) {
  //       reqListener();
  //     } else {
  //       let err = JSON.parse(xhr.responseText);
  //       console.error('Error: ' + err.error.status + ' - ' + err.message + '!');
  //     }
  //   }
  // };

  // 3.	Open a Request:
  xhr.open('GET', '/api/data', true);   // async = true

  // 4.	Send the request
  xhr.send();
}


/*  **********  FETCH  **********  */

renderData = data => {
  let dataItems = data.map(data => `<p><strong>${data.firstName} ${data.lastName}</strong>: ${data.email}</p>`);
  const html = `${dataItems.join('')}`;
  document.getElementById('data').innerHTML = html;
};

// Most concise examples:

// ***** Read
getData = () => {
  fetch('/api/data')
  .then(response => response.json())
  .then(data => renderData(data))
  .catch(err => console.error("Can't get the data with fetch: ", err));
};

// ***** Create
addData = () => {
  let userData = {
    firstName: "Kevin",
    lastName:  "Glover",
    email:     "kevybarb@warglo.com"
    }

  fetch('/api/data', {
    method:  'POST',
    headers: { 'Content-Type': 'application/json' },
    body:    JSON.stringify(userData)
  })
  .then(response => response.json())
  .catch(err => console.error("Can't add the data with fetch: ", err));
};

// ***** Update
editData = () => {
  fetch('/api/data', {
    method: 'PUT',
    headers:  { 'Content-Type': 'application/json' }
  })
  .then(response => response.json())
  .catch(err => console.error("Can't edit the data with fetch: ", err));
};

// ***** Delete
delData = () => {
  fetch('/api/data', {
    method: 'DELETE',
    headers:  { 'Content-Type': 'application/json' }
  })
  .then(response => response.json())
  .catch(err => console.error("Can't delete the data with fetch: ", err));
};

/*  **********  Get Data  **********  */

// This works, but I want arrow functions
// getData = () => {
//   fetch('/api/data')
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(data) {
//     console.log(data);
//     // let dataItems = data.map(data => `<p><strong>${data.firstName} ${data.lastName}</strong>: ${data.email}</p>`);
//     // const html = `${dataItems.join('')}`;
//     // document.getElementById('data').innerHTML = html;
//     renderData(data);
//   })
//   .catch(err => console.error("Can't get the data with fetch: ", err));
// }


// Add request options
// getData = () => {
//   fetch('/api/data', {
//     method: 'GET',
//     headers:  { 'Content-Type': 'application/json' }
//   })
//   .then(function(response) {
//     console.log(response);
//     return response.json();
//   })
//   .then(function(data) {
//     console.log(data);
//     renderData(data);
//   })
//   .catch(err => console.error("Can't get the data with fetch: ", err));
// }


/*  **********  Add Data  **********  */

// addData = () => {
//   let userData = {
//     firstName: "Kevin",
//     lastName:  "Glover",
//     email:     "kevybarb@warglo.com"
//     }

//   fetch('/api/data', {
//     method:  'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body:    JSON.stringify(userData)
//   })
//   .then(function(response) {
//     // console.log(response);
//     return response.json();
//   })
//   .then(function(data) {
//     console.log(data);
//     // renderData(data);
//   })
//   .catch(err => console.error("Can't add the data with fetch: ", err));
// };


/*  **********  Edit Data  **********  */

// editData = () => {
//   fetch('/api/data', {
//     method: 'PUT',
//     headers:  { 'Content-Type': 'application/json' }
//   })
//   .then(function(response) {
//     console.log(response);
//     return response.json();
//   })
//   .then(function(data) {
//     console.log(data);
//     // renderData(data);
//   })
//   .catch(err => console.error("Can't edit the data with fetch: ", err));
// };


/*  **********  Delete Data  **********  */

// delData = () => {
//   fetch('/api/data', {
//     method: 'DELETE',
//     headers:  { 'Content-Type': 'application/json' }
//   })
//   .then(function(response) {
//     console.log(response);
//     return response.json();
//   })
//   .then(function(data) {
//     console.log(data);
//     // renderData(data);
//   })
//   .catch(err => console.error("Can't delete the data with fetch: ", err));
// };
