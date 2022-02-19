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



// EXAMPLE OF GET FUNCTION WITH PARAMS
// gets all tasks for a partuclar user
function getAllTasksForAParticularUser(userid, token) {
    let headers = new Headers();
    headers.set('authorization', "Bearer " + token);
    fetch('https://tcss445-plan-it.herokuapp.com/gettasks/' + userid, {
        mode: 'cors',
        method: 'GET',
        headers: headers
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.getElementById('b1').innerHTML = JSON.stringify(data);
    }).catch(function(err) {
        console.log(err);
    });
}


// EXAMPLE OF POST FUNCTION WITH PARAMS
// requires param obj like: 
/* 
{
    task_id: 1,
    task_name: "Quiz 1",
    description: "Quiz 1 (individual)",
    priority: 1,
    category: 1,
    complete: false,
    user_id: 1,
    team_id: null
}
*/
function postTask(taskData) {
    fetch('https://tcss445-plan-it.herokuapp.com/posttasks/', {
        mode: 'cors',
        method: 'POST',
        body: JSON.stringify(taskData),
        headers: headers
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.getElementById('b1').innerHTML = JSON.stringify(data);
    }).catch(function(err) {
        console.log(err);
    });
}

/* 
 * Attempts to register a new user based on the given username,
 * email, and password.
 * 
 * Expects a body like the following:
 *  {
 *      username: "theUsername",
 *      email: "theEmail",
 *      password: "thePassword"
 *  }
 */
function register(body) {
    fetch('https://tcss445-plan-it.herokuapp.com/register', {
        mode: 'cors',
        method: 'POST',
        body: JSON.stringify(body),
        headers: headers
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.getElementById('b1').innerHTML = JSON.stringify(data);
    }).catch(function(err) {
        console.log(err);
    });
}

/* 
 * Attempts to sign in the user based on the given email and password
 */
function signIn(email, password) {
    let headers = new Headers();
    headers.set('Authorization', 'Basic ' + btoa(email + ":" + password));
    
    fetch('https://tcss445-plan-it.herokuapp.com/signin', {
        mode: 'cors',
        method: 'GET',
        headers: headers
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.getElementById('b1').innerHTML = JSON.stringify(data);
    }).catch(function(err) {
        console.log(err);
    });
}




// signIn("email1@email.com", "thePassword");







getAllTasksForAParticularUser(1, "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVtYWlsMUBlbWFpbC5jb20iLCJ1c2VyaWQiOjE5LCJ1c2VybmFtZSI6InRoZVVuYW1lMSIsImlhdCI6MTY0NTI5Mjc2NCwiZXhwIjoxNjQ2NTAyMzY0fQ.xpWp9NZ9X6aYAZ9RNfR9z-mZqwGfY5Tx-vCK5Pq4DP0");


// register({ 
//     username: "theUname1",
//     email: "email1@email.com",
//     password: "thePassword"
// });

// postTask({
//     task_name: "Quiz 10",
//     description: "Quiz 10 (individual)",
//     priority: 2,
//     category: 1,
//     complete: true,
//     user_id: 1,
//     team_id: null
// });