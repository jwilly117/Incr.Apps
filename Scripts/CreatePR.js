// =======================================================================================================================
// =======================================================================================================================
// =======================================================================================================================


var LeadNumber = "";
var bearerToken;
var customerGUID;
var orderGuid2 ="";
var flagGuid = "";

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



function getJobInformation(orderGuid){
    flagGuid = orderGuid;
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

        // Get and assign the externalID which is also kinda internal?
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

        // Now to test the financial updating
        updateFinancials();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
}


function updateFinancials() {
  const token = bearerToken;

  // Get the dollar amount
  var total = document.getElementById('Total').value;

  
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  var financialURL = "https://api.logistixai.com/api/orders/v5/d51b385a-054e-4bec-9816-467d290e0e6c/financial";


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

      updateExternalLink(orderGuid2);

    })
    .catch(error => {
      // Log any errors
      console.error('Error:', error);
        
    });

}


function updateExternalLink(originalJobGuid) {

  var externalURL = "https://www.youtube.com/watch?v=qHI-G4X4A_Q";
  

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
                axios.put('https://api.logistixai.com/api/orders/v5/'+ originalJobGuid, extraData, { headers })
                .then(response => {
                      console.log("🟩 External Link updated Successfully: " + externalURL) 
                      console.log(response);


                      addFlag(flagGuid);


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
   }, 3000);
}




/* Next Steps
1. Gather all necessary information and list below
2. Create a default payload for the "Other" field from the returned data from the previous api calls.
3. Create a function: generatePR() which submits that payload

4. Now we have to get that job info from the response and give the user a URL. ✔️
5. Submit the flag assignment   560b2bad-ac14-48c0-a39b-e7f3cce864e4 ✔️
6. Create a function: updateFinancials() which posts to the financial tab.  ✔️    
7. Update the external link to the original job.  ✔️                       

** Here is the list of all the different values I will need to be aware of and input for the generatePR() data. 
> 



*/



// =======================================================================================================================
// =======================================================================================================================
// =======================================================================================================================


// Start it off by getting authenticated
getBearer();
