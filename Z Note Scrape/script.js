const axios = require('axios');

var bearerToken;

const dateData = process.argv[2];
const userData = process.argv[3];
const contentData = process.argv[4];
const jobNumber = process.argv[5];


function getBearer() {

    
    const data = {
        "userName": "jakesapi@logistixai.com",
        "password": "B=n!v;(]89hCL5VH"
    }

    
    axios
      .post("https://api.logistixai.com/api/users/v1/login", data)
      .then((response) => {
        console.log("The Bearer token is ");
        console.log("=================================");
        console.log(response.data.access_token);
        //   alert(response.data.access_token);
  
        bearerToken = response.data.access_token;
        // document.getElementById("bearerConfirm").value = bearerToken;
        // countdownTimer(3599);
        console.log("=================================");
        console.log("Now Posting Note");
        // postNote("4/6/2023 - 10:39am","Cassandra Hammonds","IF you can see this the test was successfull!!!!!!!!");
        postNote();

      })
      .catch((error) => {
        console.error(error);
      });
  }
  
function postNote(){

    const dateData = process.argv[2];
    const userData = process.argv[3];
    const contentData = process.argv[4];
    const jobNumber = process.argv[5];

    console.log(jobNumber);

    // var jobNumber = jobID;

    var completeNote = "<b>-- 🔷 IMS NOTE 🔷 --</b> <br><hr><br>  📅 <b> </b> " + dateData + "  <br>  👤 <b>  </b>   " + userData + " <br> <hr> <b>Contents: </b> <br>  <i>  " + contentData + " </i> ";
    console.log(completeNote);

    const token = bearerToken;


    let url = 'https://api.logistixai.com/api/orders/v5/' + jobNumber;

    const data = {
        "notes": [
            {
            "note": completeNote
            }
        ]
        };


    const headers = {
            'Authorization': `Bearer ${token}`
        };


    axios.put(url, data, {headers})
        .then(response => {
            console.log('Response:', response.data);
        })
        .catch(error => {
            console.error('Error:', error);
        });

}




  getBearer();  