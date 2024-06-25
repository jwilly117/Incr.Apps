// =======================================================================================================================
// =======================================================================================================================
// =======================================================================================================================


var LeadNumber = "";
var bearerToken;
var customerGUID;
var orderGuid2 ="";
var flagGuid = "";

var addressID;
var phoneNumberID;
var emailID;

var originatingLogGuid;

var prnotes = "";
var provider = "";
var providerID = "";
var lowesPRNum = "";

const data = {
    "userName": "jakesapi@logistixai.com",
    "password": "B=n!v;(]89hCL5VH"
}


function getBearer() {
    axios
      .post("https://api.logistixai.com/api/users/v1/login", data)
      .then((response) => {

        console.log("===================================================");
        console.log("🟦 JW Bearer token: ");
        console.log(response.data.access_token)
        //   alert(response.data.access_token);

        bearerToken = response.data.access_token;
        // document.getElementById("bearerConfirm").value = bearerToken;
        // countdownTimer(3599);
      })
      .catch((error) => {
        console.error(error);
      });
}


// =======================================================================================================================
// =======================================================================================================================
// =======================================================================================================================


function setGuid(datGUID){
  originatingLogGuid = datGUID;
}


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
        console.log("🟥 GetJobInformation Response:", response.data);
        customerGUID = response.data.result.order.contacts[0].contactMasterGuid;
        setGuid(orderGuid);
        // Get and assign the customer guids and info which is also kinda internal?
        provider = response.data.result.order.services[0].serviceProvider;
        providerID = response.data.result.order.services[0].serviceProviderId;
        orderGuid2 = response.data.result.order.orderSource.externalOrderId;

        // Call next function
        getCustomerInfo(customerGUID);

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
        console.log("🟥 GetCustomerInfo Response:", response.data);


        // Get and assign the customer guids and info which is also kinda internal?
        addressID = response.data.result.addresses[0].addressId;
        phoneNumberID = response.data.result.phoneNos[0].phoneId;
        emailID = response.data.result.emails[0].emailId;

        generatePR();

        // Now to test the financial updating
        // updateFinancials();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
}


function updateFinancials(guid) {
  const token = bearerToken;

  // Get the dollar amount
  var total = document.getElementById('Total').value;

  
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  var financialURL = "https://api.logistixai.com/api/orders/v5/" + guid;


  const financialdata = 
  {
    "systemBilling": {
        "lineOfBusiness": {
            "lineOfBusinessGuid": "55ddfa7e-7ecd-4a4b-bb6e-16dbbc73d69b",
            "lineOfBusinessDescription": "Job (Lowe's & HD)"
        },
        "serviceMasterGuid": "19118795-cac7-4f5a-abaa-fdf2d1e52537",
        "serviceMasterName": "🟦 Lowes - PR",
        "grossTotal": total
    },
    "assignedServiceProviderBilling": {
        "assignedServiceProviderGuid": null,
        "assignedServiceProviderName": null,
        "assignedResourceGuid": null,
        "assignedResourceName": null,
        "lineOfBusiness": null,
        "serviceMasterGuid": "19118795-cac7-4f5a-abaa-fdf2d1e52537",
        "serviceMasterName": "🟦 Lowes - PR",
        "percentageRate": "100.00"
    }
}

// Now We PUT it to the job
axios.put(financialURL, financialdata, { headers })
.then(response => {
      //  Confirm in the console financial data sucess
      console.log("🟩 Finaicial Data updated successfully: ")
      console.log(response);


    })
    .catch(error => {
      // Log any errors
      console.error('Error:', error);
        
    });

}


function updateExternalLink(originalJobGuid, newOne) {

  var externalURL = "https://portal.logistixai.com/order/detail/" + originalJobGuid;
  

  const token = bearerToken;

        const headers = {
            'Authorization': `Bearer ${token}`
        };


        // Here is where I will make the Axios POST
        const extraData = 
            {
            "notes":[
                {
                    "note":""
                },
                {
                    "note":""
                }
            ],
            "imsUrl": externalURL,
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
                axios.put('https://api.logistixai.com/api/orders/v5/'+ newOne, extraData, { headers })
                .then(response => {

                      console.log("🟩 External Link updated Successfully: " + externalURL) 
                      console.log(response);



                    })
                    .catch(error => {
                        console.error('Error:', error);
                        
                    });

}


function addFlag(flagsignal){


   var flagurl = "https://api.logistixai.com/api/orders/v1/" + flagsignal +  "/flags";

   const flagdata = 
   [{"flagTypeId":"560b2bad-ac14-48c0-a39b-e7f3cce864e4"}];

   const token = bearerToken;

   const headers = {
         'Authorization': `Bearer ${token}`
       };



   setTimeout(function () {
     axios
       .post(flagurl, flagdata, { headers })
       .then((response) => {
         console.log("🟩 Flag Data Added Successfully: ");
         console.log(response);
       })
       .catch((error) => {
         console.error("Error:", error);
       });
   }, 50);


}


function generatePR(){

  var localVarforLowes = document.getElementById('prNum').value;



    var total = document.getElementById('Total').value;

    lowesPRNum = localVarforLowes;
    var newPRExternalSourceID = orderGuid2 + "-" + lowesPRNum;
    var peearrnotes = document.getElementById('Additional').value;
    prnotes = "$" + total + " --- 👷 Original Service Provider: " + provider + " --- 📝 Notes: " + peearrnotes;


    const token = bearerToken;

    const headers = {
        'Authorization': `Bearer ${token}`
      };


   const PRGenerationData = {
     "customerId":customerGUID,     // ✔️✔️✔️
     "addressId":addressID,    // ✔️✔️✔️
     "phoneNumberId":phoneNumberID,    // ✔️✔️✔️
     "emailId":emailID,    // ✔️✔️✔️

     "stateId":11,   // ✔️✔️✔️
     "marketId":928,  // ✔️✔️✔️
     "lineOfBusinessId":[
         {
            // Leave all PR types as job - makes most sense and easier for sorting
           "id":"55ddfa7e-7ecd-4a4b-bb6e-16dbbc73d69b",  // ✔️✔️✔️
           "name":"Job"  // ✔️✔️✔️
         }
     ],
     "orderSourceId":"da959587-a238-4b08-82a9-34cf5f81c140",  // ✔️✔️✔️
     "hasExternalSourceId":true,  // ✔️✔️✔️
     "externalSourceId": newPRExternalSourceID,
     "services":[
         {
            // Leave all PR types as job 
           "lineOfBusinessId": "55ddfa7e-7ecd-4a4b-bb6e-16dbbc73d69b",  // ✔️✔️✔️
           "serviceMasterId":"19118795-cac7-4f5a-abaa-fdf2d1e52537",  // ✔️✔️✔️

          //  Need to completely change this*******
           "lineItems":[
               {
                 "description":prnotes,
                 "lineItemId":"24555416-4d59-4f15-b5dd-07e7cd06e4f7",  // ✔️✔️✔️
                 "locationId":"00000000-0000-0000-0000-000000000000",  // ✔️✔️✔️
            // Leave all PR types as job 
                 "lineItemName":"Payment Request - Lowes",  // ✔️✔️✔️
                 "lineItemTime":1  // ✔️✔️✔️
               }
           ]

         }
     ],
     "lineOfBusinessList":[
         // Leave all PR types as job 
         "55ddfa7e-7ecd-4a4b-bb6e-16dbbc73d69b"  // ✔️✔️✔️
     ],
     "PickUpLocation":{
         "contactTypeId":1,  // ✔️✔️✔️
         "contactFirstName":"JW",  // ✔️✔️✔️
         "originFacilityAliasID": 8412,   // 🦧🦧🦧🦧🦧
         "contactEntityTypeId":1,  // ✔️✔️✔️
         "addresses":[
           {
               "addressLine1":"1394 Broadway Ave",
               "addressLine2":null,
               "state":"Georgia",
               "city":"Braselton",
               "postalCode":"30517"
           }
         ],
         "emails":[
           {
               "emailAddress":"pr@incredibleinstallations.com",
               "emailTypeId":1,
               "emailType":"WORK"
           }
         ],
         "phoneNos":[
           {
               "phoneNumber":"7704500458",
               "phoneNumberTypeId":1,
               "phoneNumberType":"WORK",
               "countryCode":"+1",
               "smsFl":true
           }
         ],
         "storeNumber":0,  // ✔️✔️✔️
     },
     "emailIds":[
        116528
     ]
   }
           axios.post('https://api.logistixai.com/api/orders/V5', PRGenerationData, { headers })
           .then(response => {
                   console.log('Response:', response.data);
                   console.log(response.data.result.orderId);

                   var newGuid = response.data.result.orderId;

                  //  populate the link at the bottom
                   document.getElementById('logistixAILINK').value = "https://portal.logistixai.com/order/detail/" + newGuid;

                  //  now store that in a variable
                  var newURLValue = document.getElementById('logistixAILINK').value;

                  // change the value attached to the href on the button
                   var link = document.getElementById('dynamicLink');
                   link.href = newURLValue;
                   link.style.display = 'inline-block'; // Make the button visible
                   setTimeout(function() {
                     link.classList.add('show'); // Trigger the animation
                   }, 10); // Small delay to ensure the display change is processed before the animation starts

                  // Clear the inputs
                  document.getElementById('originalURL').value = '';
                  document.getElementById('Total').value = '';
                  document.getElementById('Additional').value = '';
                  document.getElementById('submitButton').textContent = "Finished!";      


                   flagGuid = newGuid;
                   console.log(flagGuid);
                   setTimeout(function() {
                    console.log('Add flag After 3 seconds.... 🤞');    // ✔️✔️✔️
                    // updateFinancials(newGuid);
                    // updateExternalLink(originatingLogGuid, newGuid);
                    addFlag(flagGuid);

     
                  }, 3000);

               })
               .catch(error => {
                   console.error('Error:', error);
                   alert("🦆 Bad API Request, Please check your fields\n and try again, or Contact Jake")
               });


           // Need to change this to the next function in the phase, whatever that is. 
           




}


/* FULL STEP BY STEP

1. Create a default payload for the "Other" field from the returned✔️
   data from the previous api calls.
2. Create a function: generatePR() which submits that payload ✔️
4. Now we have to get that job info from the response and give the user a URL. ✔️
5. Submit the flag assignment   560b2bad-ac14-48c0-a39b-e7f3cce864e4 ✔️
6. Create a function: updateFinancials() which posts to the financial tab.  ✔️    
7. Update the external link to the original job.  ✔️                       

** Here is the list of all the different values I will need to input. 
> 



END */



// =======================================================================================================================
// =======================================================================================================================
// =======================================================================================================================


// Start it off by getting authenticated
getBearer();