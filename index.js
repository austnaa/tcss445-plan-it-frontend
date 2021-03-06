/*
 * Contains helper functions for making http requests and creating tables for the Plan-It website
 */


// remove the contents from the element at the given id
function removeContents(id) {
    let div = document.getElementById(id);
    while(div.firstChild){
        div.removeChild(div.firstChild);
    }
}

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

// creates a table based on the task data given
// HELPFUL LINK (TUTORIAL)
// https://www.delftstack.com/howto/javascript/create-table-javascript/
function createTaskTable(taskData) {
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    table.appendChild(thead);
    table.appendChild(tbody);

    removeContents('taskTable');
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








// gets all activities for a particular user
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

    removeContents('activityTable');
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

    removeContents('activityScheduleTable');
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

    removeContents('activityTaskTable');
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







// hits endpoint to populate the dropdown specified with user info
function populateDropdown(dropdownId) {
    fetch('https://tcss445-plan-it.herokuapp.com/getusers/', {
    mode: 'cors',
    method: 'GET',
    
    })
    .then(response => response.json())
    .then(data => {
        
        let dropdown = document.getElementById(dropdownId);
        data.rows.forEach(user => {
            let option = document.createElement("option");
            option.value = user.user_id;
            option.text = user.user_name;
            dropdown.appendChild(option);
        });
        
    }).catch(function(err) {
        console.log(err);
    });  
}