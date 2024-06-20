
// All LogistixAI scripts will be kept here for ease of access and hopefully they keep the documentation consistent
// Will 1st move over the functions from the very first CreateLead Sheet

// Get Bearer - basic Auth


var LeadNumber = "";
var bearerToken;
var customerGUID;

const data = {
    "userName": "jakesapi@logistixai.com",
    "password": "B=n!v;(]89hCL5VH"
}


function getBearer() {
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
      })
      .catch((error) => {
        console.error(error);
      });
  }
  

// ========================================================================================= 
// =========================================================================================

/*
Psuedo code
See if we can get the job information, 
From there, see if we can get customer information from the job
Take the job number and create another job with line item of PR





*/

function getJobInformation(orderGuid){
    const token = bearerToken;
  
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    var customerAPIURL =
    "https://api.logistixai.com/api/orders/V5/" + 
    orderGuid;


    axios
      .get(customerAPIURL, { headers })
      .then((response) => {
        console.log("Response:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });


}


function getCustomerInfo(guid) {
    const token = bearerToken;
  
    const headers = {
      Authorization: `Bearer ${token}`,
    };
  
    var customerAPIURL =
      "https://api.logistixai.com/api/serviceproviders/v1/b0e1556e-a666-496b-a627-a81cf58a623d/customer/" +
      guid;
  
    axios
      .get(customerAPIURL, { headers })
      .then((response) => {
        console.log("Response:", response.data);
        var saddressID = response.data.result.addresses[0].addressId;
        console.log(saddressID);
        var sphoneNumberID = response.data.result.phoneNos[0].phoneId;
        var semailID = response.data.result.emails[0].emailId;
        var sstateID = 11;
        createLead(guid, saddressID, sphoneNumberID, semailID);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
}




// =========================================================================================
// addFlag simply uses the guid for the job and the guid for the specific flag to attach a flag before you even go into the job. 

function addFlag(orderyup){

    // const flagdata
  
  
     var flagurl = "https://api.logistixai.com/api/orders/v1/" + orderyup +  "/flags";
  
     const flagdata = 
         [{"flagTypeId":"5b4b8ce2-f4a1-47d1-922e-5a12ff5b3b40"}];
  
     const token = bearerToken;
  
     const headers = {
           'Authorization': `Bearer ${token}`
         };
  
  
     setTimeout(function () {
       axios
         .post(flagurl, flagdata, { headers })
         .then((response) => {
           console.log("Response:", response.data);
           console.log("YOU DID IT!!!!");
         })
         .catch((error) => {
           console.error("Error:", error);
         });
     }, 2000);
}
  

  getBearer();
