let headers = new Headers();

headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');


function getTestSql() {
    fetch('https://tcss445-plan-it.herokuapp.com/testsql', {
        mode: 'cors',
        method: 'GET',
        headers: headers
    }).then(response => response.json())
    .then(data => {
        console.log(data);
        document.getElementById('b1').innerHTML = JSON.stringify(data);
    }).catch(function() {
        console.log("Booo");
    });
}

getTestSql();