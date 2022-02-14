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
function getAllTasksForAParticularUser(userid) {
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

getAllTasksForAParticularUser(1);

// postTask({
//     task_name: "Quiz ",
//     description: "Quiz 3 (individual)",
//     priority: 1,
//     category: 1,
//     complete: false,
//     user_id: 1,
//     team_id: null
// });