

  function showAlert() {
    // alert("You clicked the Submit button!");

    // We will need to make the call here to get the routing table, then parse out the results into the table values
   
  }

  var bearerToken;

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

 

  function submitData() {
    console.log(bearerToken);
    // Your API endpoint URL
    // const apiUrl = 'https://api.logistixai.com/api/orders/v1/fetch-route-board';

    // Sample data to be sent to the API
    const data4 = 
{
    "serviceDate": realTime,
    "marketId": 928,
    "stateId": 11,
    "serviceProviders": [
        "b0e1556e-a666-496b-a627-a81cf58a623d"
    ],
    "technicians": [
        "ade739e2-b4a6-4103-ad3e-2a6f2a626561"
    ],
    "lineOfBusinesses": [],
    "allServiceProviders": [
        "b0e1556e-a666-496b-a627-a81cf58a623d",
        "2eed6e0f-b42b-4e10-b57f-6574cb736f84",
        "4618a2c1-c735-4c2a-a9ad-14a3f813ea86",
        "0d738ba1-d6ca-44cc-aa54-ad30d4aeb729",
        "8b1f7e50-e6cb-4233-bb2c-837fdda90710",
        "685cae3e-a7a8-4147-92c9-d5c1cb9ab60c",
        "66445ceb-132a-4539-8bab-6b2ebad00e15",
        "e14d6266-ae7a-4cbe-8967-76f86b4286bc",
        "bd6695c7-4993-4717-8206-99c1ac772fe0",
        "912e17f5-35a1-476f-866a-97e68b00566b",
        "ebe9085c-15cc-423c-b62f-9ffe1f8e6286",
        "5d63f990-ee72-467a-91c4-68df982c4d7f",
        "e529f317-f539-484f-9ee5-791473751762",
        "686bfce2-7421-4148-afdb-9670bc5dad28",
        "58594420-fadf-4d1f-ba64-4cb16edd6278",
        "04f94eb4-4366-40d5-b145-b4a403d3d550",
        "09c4b7e0-4503-4659-abbf-5b5d784a2e77",
        "404d0fdf-96ed-4e59-978e-2d3e92299ed3",
        "1c7bdfb7-3cd2-4f57-bbdf-33e21e39d793",
        "574e90de-5dbb-4ced-8d50-1c2ff7d2a8dc",
        "48ce22c5-f7fe-44de-89d3-85501080addb",
        "0801b9ce-d7db-464f-81c5-dbc492c2133c",
        "c38ba439-6f78-4a67-978f-e222973c5dde",
        "e765e6f0-8ca5-44ba-8a03-7445422e4e44",
        "ed303ef4-1269-4def-a5e9-11daba988e6f",
        "fea39e92-8bc9-4bff-9104-90e9b66d4bb3",
        "91bb546e-2b58-42d1-920c-23ce00f6b070",
        "2abc2019-b909-4f35-a35a-9d55dedd979a",
        "960b47df-a815-4b14-bbdf-317a0ea037cb",
        "1b9b115e-6ab4-4cad-a9c2-a7f12e932c2e",
        "e23a919d-e1c3-4d1e-a0eb-b2063f5c889a",
        "58d57d42-2d5a-4792-93df-ac767e996634",
        "7fd0cc97-c4fb-4502-9860-63307cdb0e1e",
        "969e8712-cf70-4e27-9661-36731868f698",
        "194a6677-6c4e-47b6-8cad-0a44f79b542e",
        "4a779bc4-0268-46cb-8b01-eb597a730c44",
        "efed85d3-36c9-4668-8b31-9b9966438b84",
        "c9fca0a3-60ae-40a6-8af5-2e33d9c0d184",
        "56d35290-d222-4be9-8d51-0d09dead0e50",
        "5bc9fba0-8f30-4955-b7cb-053b7128559c",
        "fd9dfbb6-ef86-45a5-b270-5dfcbd3921e5",
        "7a8ea386-2b8e-48a9-a7fb-b315a9be33f2",
        "711ad268-dd78-4a01-b33d-4f0e52fb61c7",
        "835850d9-63f4-4579-bc14-5d43cbf050c4",
        "13cb77b8-9937-4df7-a195-143471750b93",
        "463ea779-2c80-4d55-b4a8-336a3e31db29",
        "6208fcb0-331b-4706-9175-4b14046a2a40",
        "fa711602-a10a-46ca-bfdc-3cd7e6b0e137",
        "9a8e474d-2394-4207-a409-4a291a91b81d",
        "a4eac76f-fc0f-44de-94ef-20a81b76a74a",
        "c06df159-f7e6-4483-bb7a-cea90e4d292b",
        "6443fff9-953e-41b6-adcf-3d4f52e66103",
        "38503372-f944-4cda-aa4c-1849b26f7f92",
        "f23206b9-454f-4102-9bf2-022b0caab737",
        "2185512f-11ff-44de-a57c-f49d75a78bef",
        "1c7ab17f-1b94-47d6-9154-fbe7b1a81742",
        "13aee457-dfab-4e18-8d8f-262c8dd1ba6e",
        "223353cf-d43f-49b3-a8b5-59e56f81e465",
        "90cc9547-6f70-4817-96c5-d1af78f309fe",
        "24cf0bed-3581-40cf-8de0-567b092d6661",
        "e468d081-361a-44e6-b16d-59e089b8179b",
        "c462ffa0-702a-43b1-a181-9559613c9ac0",
        "8cceee8f-c672-4b43-abb1-7022468c7487",
        "9e26801b-d452-4ad7-8608-c6633fd5dbc6",
        "aa8df003-2ab6-41a1-a5cc-b913c209763f",
        "63abff4f-05c3-4bfe-8b49-e9d4493bc1e2",
        "4f3d24e1-d91f-4c50-bb19-3377ecf0c22e",
        "01b14bb1-b944-491b-82d1-05e7a8042559",
        "32b2f1e1-31d3-415b-9111-b06b956caf0d",
        "be9d5fb1-a770-4286-8acc-29ed7ea88e59",
        "e93aad22-7a9e-4d29-8d97-6d9e7eced9e6",
        "df8b04f5-aa5c-4e30-a27a-11394b5dd19a",
        "4280212e-4acf-427e-bcd6-8896cd5354b3",
        "6b552c05-85ea-4006-9439-bb6cd9171075",
        "b491bcd3-8c04-4bc1-9151-1f71c250e9bc",
        "9d11600a-30e4-4c3c-8dff-d51f5de8c1ef",
        "2b065bbb-5e00-4a30-9d75-aa4b6a1ce929",
        "422b66e0-4dca-4b04-9bf4-baf572385ce9",
        "2766b8b6-8c51-4fcc-b46c-7a1d893f1514",
        "c1f794d3-ef82-446a-830d-b9471e4cd3ac",
        "4052ca5d-b3bd-47dd-b021-93346ce5ab94",
        "001075be-771d-4f29-8cb2-1c7898600826",
        "168b1e17-8bb0-4690-9fa2-745f70a9f14e",
        "26861887-f62e-4702-8286-f758097fdc64",
        "45ef7eb8-ea33-4a33-9dfb-3cfad4776f1d",
        "8192474f-ffa0-4ec5-8534-78744942f4c2",
        "2edaf54b-f0b5-4e2b-bb33-96ec3373bf2f",
        "72a2da2f-f92a-4600-9303-84ae9a0170de",
        "8caef3df-28ec-4914-850c-dc74cea1f6b6",
        "f26d3f1a-670d-495f-b36e-4acd90cc7778",
        "33650d56-3cae-41d8-82fa-bc965eee76b2",
        "e728cfdd-d482-4243-8b3d-334baa97a29a",
        "02ac2026-e373-4a79-a5ab-ab035d9d5064",
        "794b635f-a987-49e7-98c7-b486b1da4c0e",
        "aa6893cf-f195-46bf-8e10-e1f08b02b5c4",
        "cfb490f6-70e8-4218-b708-25ad508f5306",
        "2d549a80-b9bb-41fe-be7f-8981c415f414",
        "bc5d3aa1-8576-4a10-8bd7-09a84262e007",
        "b068808a-09d8-4a60-9547-aec8e82567de",
        "cd0bcb6f-6c3e-4610-8aa7-7f3014f50c68",
        "43598c3b-807d-4164-8380-008f73cfbf5f",
        "286d0fa2-06fb-417a-9462-15b820891f6e",
        "82177f3f-e604-4587-b4ff-7fc26ba7c781",
        "83bd2931-6bdb-4989-8487-5493e14d543e",
        "871747e3-f14d-47db-bad8-73ee75af1037",
        "8af66ee0-13ce-415c-918e-01cd064ec8d1"
    ],
    "allLobs": [
        "b80a4d67-07fd-45dc-b131-7d3e6bb01d0c",
        "fb71e705-be7e-453f-b30d-1ea0cf2021d0",
        "8a001309-ef73-4cb7-a492-fa69ad3a83b3",
        "55ddfa7e-7ecd-4a4b-bb6e-16dbbc73d69b",
        "2ed63a8f-aee1-4d9b-9105-039cf57ca7bc",
        "aac7e2fe-2a41-4a77-b466-a11542f341a3"
    ]
}
    

    const token = bearerToken;

    const headers = {
              'Authorization': `Bearer ${token}`
          };

    axios
    .post("https://api.logistixai.com/api/orders/v1/fetch-route-board", data4, {headers})
    .then((response) => {
      console.log("The Bearer token is ");
      console.log(response.data.result.markets[0].serviceProviders[0].resources[1].slots);
      // console.log(response.data.result.markets[0].serviceProviders[0].resources[1].slots[3].jobs[0].customer.contactFirstName);
      // console.log(response.data.result.markets[0].serviceProviders[0].resources[1].slots[3].jobs[0].customer.contactLastName);
      // console.log(response.data.access_token);
      var slots = response.data.result.markets[0].serviceProviders[0].resources[1].slots;
      slots.forEach(element => {
        console.log(element.slotTime);
        var currentID = "I1-0-" + element.slotTime;
        console.log(currentID);
        

        // Here we can test if an array is empty, and call more funcitons inside of it

        if (element.jobs.length === 0) {
          document.getElementById(currentID).style.backgroundColor = "#88AFD2";

          document.getElementById(currentID).textContent = element.slotTime;
        } else {
          // var firstLast = response.data.result.markets[0].serviceProviders[0].resources[1].slots[3].jobs[0].customer.contactFirstName +
          // " " +
          // response.data.result.markets[0].serviceProviders[0].resources[1].slots[3].jobs[0].customer.contactLastName 
          document.getElementById(currentID).textContent = element.jobs[0].customer.contactFirstName + " " + element.jobs[0].customer.contactLastName;
          document.getElementById(currentID).style.backgroundColor = "lightblue";
          // element.style.backgroundColor = "lightblue";
          document.getElementById("moreInfo").textContent = element.jobs[0].customer.addresses[0].addressLine1;
          document.getElementById("phone").textContent = element.jobs[0].customer.phoneNos[0].phoneNumber;
          document.getElementById("name").textContent = element.jobs[0].customer.contactFirstName + " " + element.jobs[0].customer.contactLastName;
          document.getElementById("lineItems").textContent = "Service: " + element.jobs[0].lineItemList[0].lineItemName;
          document.getElementById("description").textContent = element.jobs[0].lineItemList[0].description;



          document.getElementById(currentID).setAttribute("data-toggle", "modal");
          document.getElementById(currentID).setAttribute("data-target", "#infoModal");


        }
      });
      //   alert(response.data.access_token);


      // console.log(firstLast);
      var element = document.getElementById("I1-0-11am");

        // Change the background color
        // element.style.backgroundColor = "lightblue";
        // element.style.font_weigt = "bolder";
        // document.getElementById("I1-0-11am").textContent = firstLast;
        
        // 
        
        // var mapsURL = "https://www.google.com/maps/place/" + response.data.result.markets[0].serviceProviders[0].resources[1].slots[3].jobs[0].customer.addresses[0].addressLine1;
        // console.log(mapsURL)
      // bearerToken = response.data.access_token;
      // document.getElementById("bearerConfirm").value = bearerToken;
      // countdownTimer(3599);
    })
    .catch((error) => {
      console.log(error);
    });

    


  }


  getBearer();
  // setTimeout(submitData, 2000);

  // [3].jobs[0].customer.contactFirstName
