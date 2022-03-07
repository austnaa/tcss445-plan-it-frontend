let headers = new Headers();

headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');

// gets all tasks for a particular user
function getAllTasksForAParticularUser(userid) {
    let headers = new Headers();
    fetch('https://tcss445-plan-it.herokuapp.com/gettasks/' + userid, {
        mode: 'cors',
        method: 'GET',
    })
    .then(response => response.json())
    .then(data => {
        createTaskTable(data);
        // document.getElementById('b1').innerHTML = JSON.stringify(data);
    }).catch(function(err) {
        console.log(err);
    });
}

// creates a table based on the task data and 
// HELPFUL LINK (TUTORIAL)
// https://www.delftstack.com/howto/javascript/create-table-javascript/
function createTaskTable(taskData) {
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    table.appendChild(thead);
    table.appendChild(tbody);

    // Adding the entire table to the body tag
    document.getElementById('taskTable').appendChild(table);

    // Creating and adding data to first row of the table
    let row_1 = document.createElement('tr');
    let heading_1 = document.createElement('th');
    heading_1.innerHTML = "Name";
    let heading_2 = document.createElement('th');
    heading_2.innerHTML = "Description";
    let heading_3 = document.createElement('th');
    heading_3.innerHTML = "Priority";
    let heading_4 = document.createElement('th');
    heading_4.innerHTML = "Category";


    row_1.appendChild(heading_1);
    row_1.appendChild(heading_2);
    row_1.appendChild(heading_3);
    row_1.appendChild(heading_4);
    thead.appendChild(row_1);

    // add data rows to the table
    taskData.rows.forEach(row => {
        // Creating and adding data to second row of the table
        let row_ = document.createElement('tr');
        let row_data_1 = document.createElement('td');
        row_data_1.innerHTML = row.task_name;
        let row_data_2 = document.createElement('td');
        row_data_2.innerHTML = row.description;
        let row_data_3 = document.createElement('td');
        row_data_3.innerHTML = row.priority;
        let row_data_4 = document.createElement('td');
        row_data_4.innerHTML = row.category_name;

        row_.appendChild(row_data_1);
        row_.appendChild(row_data_2);
        row_.appendChild(row_data_3);
        row_.appendChild(row_data_4);
        tbody.appendChild(row_);  
    });
}








// gets all tasks for a particular user
function getAllActivitiesForAParticularUser(userid) {
    let headers = new Headers();
    fetch('https://tcss445-plan-it.herokuapp.com/getactivities/' + userid, {
        mode: 'cors',
        method: 'GET',
    })
    .then(response => response.json())
    .then(data => {
        createActivityTable(data);
        // document.getElementById('b1').innerHTML = JSON.stringify(data);
    }).catch(function(err) {
        console.log(err);
    });
}

// creates and adds table for activities
function createActivityTable(taskData) {
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    table.appendChild(thead);
    table.appendChild(tbody);

    // Adding the entire table to the body tag
    document.getElementById('activityTable').appendChild(table);

    // Creating and adding data to first row of the table
    let row_1 = document.createElement('tr');
    let heading_1 = document.createElement('th');
    heading_1.innerHTML = "Name";
    let heading_2 = document.createElement('th');
    heading_2.innerHTML = "Description";
    let heading_3 = document.createElement('th');
    heading_3.innerHTML = "Category";

    row_1.appendChild(heading_1);
    row_1.appendChild(heading_2);
    row_1.appendChild(heading_3);
    thead.appendChild(row_1);

    // add data rows to the table
    taskData.rows.forEach(row => {
        // Creating and adding data to second row of the table
        let row_ = document.createElement('tr');
        let row_data_1 = document.createElement('td');
        row_data_1.innerHTML = row.activity_name;
        let row_data_2 = document.createElement('td');
        row_data_2.innerHTML = row.description;
        let row_data_3 = document.createElement('td');
        row_data_3.innerHTML = row.category_name;

        row_.appendChild(row_data_1);
        row_.appendChild(row_data_2);
        row_.appendChild(row_data_3);
        tbody.appendChild(row_);
    });
}





// gets all activities scheduled for a particular user
function getScheduleForAParticularUser(userid) {
    let headers = new Headers();
    fetch('https://tcss445-plan-it.herokuapp.com/getactivityschedules/' + userid, {
        mode: 'cors',
        method: 'GET',
    })
    .then(response => response.json())
    .then(data => {
        createScheduleTable(data);
        console.log(data)
        // document.getElementById('b1').innerHTML = JSON.stringify(data);
    }).catch(function(err) {
        console.log(err);
    });
}

// creates and adds table for the activity schedule
function createScheduleTable(taskData) {
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    table.appendChild(thead);
    table.appendChild(tbody);

    // Adding the entire table to the body tag
    document.getElementById('activityScheduleTable').appendChild(table);

    // Creating and adding data to first row of the table
    let row_1 = document.createElement('tr');
    let heading_1 = document.createElement('th');
    heading_1.innerHTML = "Activity Name";
    let heading_2 = document.createElement('th');
    heading_2.innerHTML = "Start Time";
    let heading_3 = document.createElement('th');
    heading_3.innerHTML = "End Time";

    row_1.appendChild(heading_1);
    row_1.appendChild(heading_2);
    row_1.appendChild(heading_3);
    thead.appendChild(row_1);

    // add data rows to the table
    taskData.rows.forEach(row => {
        // Creating and adding data to second row of the table
        let row_ = document.createElement('tr');
        let row_data_1 = document.createElement('td');
        row_data_1.innerHTML = row.activity_name;
        let row_data_2 = document.createElement('td');
        row_data_2.innerHTML = row.start_time;
        let row_data_3 = document.createElement('td');
        row_data_3.innerHTML = row.end_time;

        row_.appendChild(row_data_1);
        row_.appendChild(row_data_2);
        row_.appendChild(row_data_3);
        tbody.appendChild(row_);
    });
}








// gets all activities and tasks for those activities for a particular user
function getAllActivityTasksForAParticularUser(userid) {
    let headers = new Headers();
    fetch('https://tcss445-plan-it.herokuapp.com/getactivitytasks/' + userid, {
        mode: 'cors',
        method: 'GET',
    })
    .then(response => response.json())
    .then(data => {
        createActivityTaskTable(data);
        console.log(data)
        // document.getElementById('b1').innerHTML = JSON.stringify(data);
    }).catch(function(err) {
        console.log(err);
    });
}

// creates and adds table for the activity schedule
function createActivityTaskTable(taskData) {
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    table.appendChild(thead);
    table.appendChild(tbody);

    // Adding the entire table to the body tag
    document.getElementById('activityTaskTable').appendChild(table);

    // Creating and adding data to first row of the table
    let row_1 = document.createElement('tr');
    let heading_1 = document.createElement('th');
    heading_1.innerHTML = "Activity Name";
    let heading_2 = document.createElement('th');
    heading_2.innerHTML = "Activity Description";
    let heading_3 = document.createElement('th');
    heading_3.innerHTML = "Task Name";
    let heading_4 = document.createElement('th');
    heading_4.innerHTML = "Task Description";

    row_1.appendChild(heading_1);
    row_1.appendChild(heading_2);
    row_1.appendChild(heading_3);
    row_1.appendChild(heading_4)
    thead.appendChild(row_1);

    // add data rows to the table
    taskData.rows.forEach(row => {
        // Creating and adding data to second row of the table
        let row_ = document.createElement('tr');
        let row_data_1 = document.createElement('td');
        row_data_1.innerHTML = row.activity_name;
        let row_data_2 = document.createElement('td');
        row_data_2.innerHTML = row.activity_description;
        let row_data_3 = document.createElement('td');
        row_data_3.innerHTML = row.task_name;
        let row_data_4 = document.createElement('td');
        row_data_4.innerHTML = row.task_description;

        row_.appendChild(row_data_1);
        row_.appendChild(row_data_2);
        row_.appendChild(row_data_3);
        row_.appendChild(row_data_4);
        tbody.appendChild(row_);
    });
}

// getAllTasksForAParticularUser(1);

// getAllActivitiesForAParticularUser(1);























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
// function postTask(taskData, token) {
//     let headers = new Headers();
//     headers.set('authorization', token);
//     headers.set('Content-Type','application/json');
//     fetch('http://localhost:5000/posttasks/', {
//         mode: 'cors',
//         method: 'POST',
//         body: JSON.stringify(taskData),
//         headers: headers
//     })
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         document.getElementById('b1').innerHTML = JSON.stringify(data);
//     }).catch(function(err) {
//         console.log(err);
//     });
// }

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
// function register(body) {
//     fetch('https://tcss445-plan-it.herokuapp.com/register', {
//         mode: 'cors',
//         method: 'POST',
//         body: JSON.stringify(body),
//         headers: headers
//     })
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         document.getElementById('b1').innerHTML = JSON.stringify(data);
//     }).catch(function(err) {
//         console.log(err);
//     });
// }

/* 
 * Attempts to sign in the user based on the given email and password
 */
// function signIn(email, password) {
//     let headers = new Headers();
//     headers.set('Authorization', 'Basic ' + btoa(email + ":" + password));
    
//     fetch('https://tcss445-plan-it.herokuapp.com/signin', {
//         mode: 'cors',
//         method: 'GET',
//         headers: headers
//     })
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         document.getElementById('b1').innerHTML = JSON.stringify(data);
//     }).catch(function(err) {
//         console.log(err);
//     });
// }



// signIn("email1@email.com", "thePassword");


// getAllTasksForAParticularUser(1, "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVtYWlsMUBlbWFpbC5jb20iLCJ1c2VyaWQiOjE5LCJ1c2VybmFtZSI6InRoZVVuYW1lMSIsImlhdCI6MTY0NTI5Mjc2NCwiZXhwIjoxNjQ2NTAyMzY0fQ.xpWp9NZ9X6aYAZ9RNfR9z-mZqwGfY5Tx-vCK5Pq4DP0");


// register({ 
//     username: "theUname1",
//     email: "email1@email.com",
//     password: "thePassword"
// });
// let task = {
//     task_name: "Quiz 2",
//     description: "Quiz 2 (individual)",
//     priority: 2,
//     category: 1,
//     complete: true,
//     user_id: 1,
//     team_id: null
// };
// postTask(task, "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVtYWlsMUBlbWFpbC5jb20iLCJ1c2VyaWQiOjE5LCJ1c2VybmFtZSI6InRoZVVuYW1lMSIsImlhdCI6MTY0NTI5Mjc2NCwiZXhwIjoxNjQ2NTAyMzY0fQ.xpWp9NZ9X6aYAZ9RNfR9z-mZqwGfY5Tx-vCK5Pq4DP0");