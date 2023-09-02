

// Funtions for app to automatically create design review based on input of Customer ID 
// 

// first we get customer info

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

// Then job information based on guid number
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

