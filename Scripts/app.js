const jsonData = require('./jobs.json');
const { json } = require('stream/consumers');

// assignData(jsonData);

// test(jsonData);
list();
  
//   jobId: '752166612',
//   jobName: 'FRONT ENTRANCE STORM DOOR',
//   jobStatus: 'Closed',
//   jobType: 'Job',
//   soldDate: '10/7/2022',
//   laborCategory: 'MWORK - STORM/SCREEN/SCTY DOORS'


function list() {
    jsonData.forEach(item => {
        // Perform operations on each item
        if(item.jobId != undefined){
            console.log(item.jobId);
        }
        else {
            console.log(item.workOrderNumber)
        }
        
      });
}



function assignData(data){
    var jobNumber = data[0]['jobId'];
    var jobName = data[0]['jobId'];
    var status = data[0]['jobId'];
    var jobType = data[0]['jobId'];
    var soldDate = data[0]['jobId'];
    var laborCategory = data[0]['jobId'];

    if (laborCategory == 'MWORK - STORM/SCREEN/SCTY DOORS'){
        console.log(jobNumber + " is SSS")
    }
    // test(jsonData);
}

function test(jobs) {
    console.log(jobs[0])
    console.log("This is a " + jobs)
}

