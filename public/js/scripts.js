/*  **********  XMLHttpRequest  **********  */

// Request Listener (remember: no arrow functions when you use "this")
function reqListener() {
  let data = JSON.parse(this.responseText);
  let dataItems = data.map(data => `<p><strong>${data.firstName} ${data.lastName}</strong>: ${data.email}</p>`);

  // This line is necessary to avoid having the data lines separated by a comma
  const html = `${dataItems.join('')}`;

  document.getElementById('data').innerHTML = html;
}

// Error Handler
reqError = err => console.error('XMLHttpRequest error: ', err);
// function reqError(err) {
//   console.error('XMLHttpRequest error: ', err);
// }

// Use with onreadystatechange
function reqStateChange() {
  if ( this.readyState === 4 ) {
    if ( this.status === 200 ) {
      let data = JSON.parse(this.responseText);
      let dataItems = data.map(data => `<p><strong>${data.firstName} ${data.lastName}</strong>: ${data.email}</p>`);
      const html = `${dataItems.join('')}`;
      document.getElementById('data').innerHTML = html;
    } else {
      let err = JSON.parse(this.responseText);
      console.error('Error: ' + err.error.status + ' - ' + err.message + '!');
    }
  }
}

getHttpReq = () => {
  let xhr = new XMLHttpRequest();

  // onerror doesn't work, so stick with onreadystatechange
  // xhr.onload = reqListener;
  // xhr.onerror = reqError;

  xhr.onreadystatechange = reqStateChange;
  xhr.open('GET', '/api/data', true);
  xhr.send();
}


/*  **********  FETCH  **********  */

renderData = data => {
  let dataItems = data.map(data => `<p><strong>${data.firstName} ${data.lastName}</strong>: ${data.email}</p>`);
  const html = `${dataItems.join('')}`;
  document.getElementById('data').innerHTML = html;
};

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
