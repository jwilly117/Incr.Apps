
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
        document.getElementById("bearerConfirm").value = bearerToken;
        // countdownTimer(3599);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  

// =========================================================================================
// =========================================================================================

//    Create Customer - Only needs basic information, no guids

 function createCustomer() {
    var firstName = document.getElementById("FirstName").value;
    var lastName = document.getElementById("LastName").value;
    var full = firstName + " " + lastName;

    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;

    var street = document.getElementById("street").value;
    var city = document.getElementById("city").value;
    var zip = document.getElementById("zip").value;

    console.log(firstName);

    const token = bearerToken;
    const data2 = {
      contactTypeId: 1,
      contactFirstName: firstName,
      contactLastName: lastName,
      contactBusinessName: full,
      contactEntityTypeId: 1,
      addresses: [
        {
          addressTypeId: 3,
          addressType: "PHYSICAL",
          addressLine1: street,
          addressLine2: null,
          addressLine3: null,
          addressLine4: null,
          addressLine5: null,
          city: city,
          state: "Georgia",
          postalCode: zip,
          country: null,
        },
      ],
      emails: [{ emailAddress: email, emailTypeId: 2, emailType: "PERSONAL" }],
      phoneNos: [
        {
          phoneNumber: phone,
          phoneNumberTypeId: 6,
          phoneNumberType: "MOBILE",
          countryCode: "+1",
          smsFl: true,
        },
      ],
      websites: [],
    };

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    axios
      .post(
        "https://api.logistixai.com/api/serviceproviders/v1/b0e1556e-a666-496b-a627-a81cf58a623d/customer",
        data2,
        { headers }
      )
      .then((response) => {
        console.log("Response:", response.data);
        customerGUID = response.data.result;
        // document.getElementById('textfield2').value = customerGUID;
        var customerLink =
          "https://portal.logistixai.com/customer/profile/b0e1556e-a666-496b-a627-a81cf58a623d/" +
          customerGUID;
        console.log(customerLink);
        var HomeDepotLink =
          "https://homeservices.my.site.com/sp/s/global-search/" + LeadNumber;
        document.getElementById("textfield2").value = customerLink;
        document.getElementById("textfield3").value = HomeDepotLink;
        var divv = document.getElementById("customerButton");
        divv.style.display = "none";

        console.log("Customer Guid is: " + customerGUID);
        getCustomerInfo(customerGUID);

        // return customerGUID;
      })
      .catch((error) => {
        console.error("Error:", error);
        document.getElementById("textfield2").value =
          "An Error Has Occurred, This is an Invalid Request";
        document.getElementById("textfield3").value =
          "An Error Has Occurred, This is an Invalid Request";
        alert(
          "🦆 Bad API Request, Please check your fields\n and try again, or Contact Jake"
        );
      });
  }   


// =========================================================================================
// =========================================================================================

//   Get Customer info - will hold the guid passed back from create 
//   customer so that it has something to attache the newly created job to. 


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
// =========================================================================================

// CreateLead takes the information about the customer including the email and phone number guids
// ... and passes them in to create an actual job associated with this customer (and another guid)

function createLead(customerid,addressid,phonenumberid,emailid){

    // All Variables
    var firstName = document.getElementById("FirstName").value;
    var lastName = document.getElementById("LastName").value;
    var full = (firstName + " " + lastName);

    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;

    var street = document.getElementById("street").value;
    var city = document.getElementById("city").value;
    var zip = document.getElementById("zip").value;

    var jobnotes = document.getElementById("jobnotes").value;
    LeadNumber = document.getElementById("LeadNumber").value;

    const token = bearerToken;

    const headers = {
        'Authorization': `Bearer ${token}`
      };

    var addressID =  addressid;
    var phoneNumberID =  phonenumberid;
    var emailID =  emailid;
    var stateID =  11;



   const data3 = {
     "customerId":customerid,
     "addressId":addressID,
     "phoneNumberId":phoneNumberID,
     "emailId":emailID,
     "stateId":stateID,
     "marketId":928,
     "lineOfBusinessId":[
         {
           "id":"fb71e705-be7e-453f-b30d-1ea0cf2021d0",
           "name":"HD SF&I"
         }
     ],
     "orderSourceId":"cbfaf0e0-93bc-48d0-876a-20cc37476cc0",
     "hasExternalSourceId":true,
     "externalSourceId": LeadNumber,
     "services":[
         {
           "lineOfBusinessId":"fb71e705-be7e-453f-b30d-1ea0cf2021d0",
           "serviceMasterId":"4e7a1137-86c4-428b-9941-47a1550b1c27",
           "lineItems":[
               {
                 "description":jobnotes,
                 "lineItemId":"b8e6a1ca-2a5b-4bdf-888a-1239163526fc",
                 "locationId":"4925c7ed-9423-4db3-a6ee-d3fee9cb5cd6",
                 "lineItemName":"In Home Consult",
                 "lineItemTime":2
               }
           ]
         }
     ],
     "lineOfBusinessList":[
         "fb71e705-be7e-453f-b30d-1ea0cf2021d0"
     ],
     "PickUpLocation":{
         "contactTypeId":1,
         "contactFirstName":"Home Depot Leads",
         "originFacilityAliasID":"0001",
         "contactEntityTypeId":1,
         "addresses":[
           {
               "addressLine1":"5852 Conner Rd",
               "addressLine2":null,
               "state":"Georgia",
               "city":"Flowery Branch",
               "postalCode":"30542"
           }
         ],
         "emails":[
           {
               "emailAddress":"jake+test@incredibleinstallations.com",
               "emailTypeId":1,
               "emailType":"WORK"
           }
         ],
         "phoneNos":[
           {
               "phoneNumber":"7705401127",
               "phoneNumberTypeId":1,
               "phoneNumberType":"WORK",
               "countryCode":"+1",
               "smsFl":true
           }
         ],
         "storeNumber":"0001"
     },
     "emailIds":[
         71467
     ]
   }
           axios.post('https://api.logistixai.com/api/orders/V5', data3, { headers })
           .then(response => {
                   console.log('Response:', response.data);
                   // divv.style.display = "none"
                   document.getElementById('textfield5').value = response.data.result.etteoOrderId;
                   console.log(response.data.result.orderId);
                   var tempforflag = response.data.result.orderId;
                   addFlag(tempforflag);


               })
               .catch(error => {
                   console.error('Error:', error);
                   document.getElementById('textfield2').value = "An Error Has Occurred, This is an Invalid Request";
                   document.getElementById('textfield3').value = "An Error Has Occurred, This is an Invalid Request";
                   alert("🦆 Bad API Request, Please check your fields\n and try again, or Contact Jake")
               });


           // Lets hope this is the last time
           setTimeout(function() {
               console.log('After 3 seconds');
               updateExternalLink(LeadNumber);

             }, 3000);
      }


      
// =========================================================================================
// =========================================================================================

// Add external link takes the job number and uses the job guid to attach a URL, and soon other things to the job

 function updateExternalLink(lead){

     console.log("Lead Number" + LeadNumber);

     var externalLink = "https://homeservices.my.site.com/sp/s/global-search/" + lead;

     const token = bearerToken;

     const headers = {
           'Authorization': `Bearer ${token}`
         };

     const data4 = 
     {
       "notes":[
           {
             "note":""
           },
           {
             "note":""
           }
       ],
       "imsUrl":externalLink,
       "workOrderCost":[
           {
             "itemNumber":"",
             "unitCost":""
           }
       ],
       "activities":[
           {
             "subject":"",
             "status":"",
             "type":" ",
             "dueDate":"",
             "crewLeading":""
           }
       ],
       "jobPayments":[
           {
             "paymentNumber":"",
             "requestedAmount":"",
             "paymentDescription":"",
             "type":"",
             "status":""
           }
       ]

     }

     const flagdata = 
       [{"flagTypeId":"5b4b8ce2-f4a1-47d1-922e-5a12ff5b3b40"}];
     

     var apiurl = "https://api.logistixai.com/api/orders/v5/" + lead
     var flagurl = "https://api.logistixai.com/api/orders/v1/" + customerGUID +  "/flags";

     // Post to API
     axios.put(apiurl, data4, { headers })
       .then(response => {
               console.log('Response:', response.data);
               

           })
           .catch(error => {
               console.error('Error:', error);

           });
    
}




// =========================================================================================
// =========================================================================================

// addFlag simply uses the guid for the job and the guid for the specific flag to attach a flag before you even go into the job. 

 function addFlag(orderyup){

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
