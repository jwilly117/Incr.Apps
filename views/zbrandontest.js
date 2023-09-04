
  var counter = 0;

  var bearerToken;
  var INTbearerToken;

  var brandon ="ade739e2-b4a6-4103-ad3e-2a6f2a626561";
  var reed = "e77ac0e1-190e-464f-8827-de037afbcb14";
  var jeanne = "42efd3a1-3cd5-496c-bd8b-5eed211ac22b";
  var paul = "b1233c01-4c7f-4a5a-885b-535967b7f923";
  var gabe = "42efd3a1-3cd5-496c-bd8b-5eed211ac22b";
  var ryan = "e77ac0e1-190e-464f-8827-de037afbcb14";

  const data = {
    "userName": "jakesapi@logistixai.com",
    "password": "B=n!v;(]89hCL5VH"
}


function getINTBearer() {
  axios
    .post("https://int-api.logistixai.com/api/users/v1/login", data)
    .then((response) => {
      console.log("The Bearer token is ");
      console.log("=================================");
      console.log(response.data.access_token);
      //   alert(response.data.access_token);

      INTbearerToken = response.data.access_token;
      // document.getElementById("bearerConfirm").value = bearerToken;
      // countdownTimer(3599);
    })
    .catch((error) => {
      console.error(error);
    });
}

function getBearer() {
    axios
      .post("https://api.logistixai.com/api/users/v1/login", data)
      .then((response) => {
        console.log("The INT Bearer token is ");
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

  function submitDataMonday(tech, installerNumber) {
    counter = 0;
    console.log(bearerToken);
    // Your API endpoint URL
    // const apiUrl = 'https://api.logistixai.com/api/orders/v1/fetch-route-board';

    // Sample data to be sent to the API
    const dataMonday = 
{
    "serviceDate": realTime,
    "marketId": 928,
    "stateId": 11,
    "serviceProviders": [
        "b0e1556e-a666-496b-a627-a81cf58a623d"
    ],
    "technicians": [
        tech,
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
    .post("https://api.logistixai.com/api/orders/v1/fetch-route-board", dataMonday, {headers})
    .then((response) => {
      console.log("The Bearer token is ");
      console.log(response.data.result.markets[0].serviceProviders[0].resources[1].slots);
      // console.log(response.data.result.markets[0].serviceProviders[0].resources[1].slots[3].jobs[0].customer.contactFirstName);
      // console.log(response.data.result.markets[0].serviceProviders[0].resources[1].slots[3].jobs[0].customer.contactLastName);
      // console.log(response.data.access_token);
      var slots = response.data.result.markets[0].serviceProviders[0].resources[1].slots;
      slots.forEach(element => {
        console.log(element.slotTime);
        var currentID = "I"+installerNumber+"-0-" + element.slotTime;
        console.log(currentID);
        

        // Here we can test if an array is empty, and call more funcitons inside of it

        if (element.jobs.length === 0) {
          document.getElementById(currentID).style.backgroundColor = "#88AFD2";

          document.getElementById(currentID).textContent = element.slotTime;
        } else {
          counter++;
          var secret = element.jobs[0].orderId;
          document.getElementById(currentID).setAttribute("data-value", secret);
          // console.log(currentID.dataset.value);
          // var firstLast = response.data.result.markets[0].serviceProviders[0].resources[1].slots[3].jobs[0].customer.contactFirstName +
          // " " +
          // response.data.result.markets[0].serviceProviders[0].resources[1].slots[3].jobs[0].customer.contactLastName 
          document.getElementById(currentID).textContent = element.jobs[0].customer.contactFirstName + " " + element.jobs[0].customer.contactLastName;
          document.getElementById(currentID).style.backgroundColor = "#ffbc90";
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

    
    submitDataTuesday(tech, installerNumber);

  }

  function submitDataTuesday(tech, installerNumber) {
    console.log("This is the beearer token")
    console.log(bearerToken);
    // Your API endpoint URLs
    // const apiUrl = 'https://api.logistixai.com/api/orders/v1/fetch-route-board';

    // Sample data to be sent to the API
    const dataTuesday = 
{
    "serviceDate": "2023-07-26T00:00:00.000Z",
    "marketId": 928,
    "stateId": 11,
    "serviceProviders": [
        "b0e1556e-a666-496b-a627-a81cf58a623d"
    ],
    "technicians": [
      tech,
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
    .post("https://api.logistixai.com/api/orders/v1/fetch-route-board", dataTuesday, {headers})
    .then((response) => {
      console.log("The Bearer token is ");
      console.log(response.data.result.markets[0].serviceProviders[0].resources[1].slots);
      // console.log(response.data.result.markets[0].serviceProviders[0].resources[1].slots[3].jobs[0].customer.contactFirstName);
      // console.log(response.data.result.markets[0].serviceProviders[0].resources[1].slots[3].jobs[0].customer.contactLastName);
      // console.log(response.data.access_token);
      var slots = response.data.result.markets[0].serviceProviders[0].resources[1].slots;
      slots.forEach(element => {
        console.log(element.slotTime);
        var currentID = "I"+installerNumber+"-1-" + element.slotTime;
        console.log(currentID);
        

        // Here we can test if an array is empty, and call more funcitons inside of it

        if (element.jobs.length === 0) {
          document.getElementById(currentID).style.backgroundColor = "#88AFD2";

          document.getElementById(currentID).textContent = element.slotTime;
        } else {
          counter++;
          // var firstLast = response.data.result.markets[0].serviceProviders[0].resources[1].slots[3].jobs[0].customer.contactFirstName +
          // " " +
          // response.data.result.markets[0].serviceProviders[0].resources[1].slots[3].jobs[0].customer.contactLastName 
          document.getElementById(currentID).textContent = element.jobs[0].customer.contactFirstName + " " + element.jobs[0].customer.contactLastName;
          document.getElementById(currentID).style.backgroundColor = "#ffbc90";
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

    submitDataWednesday(tech, installerNumber);


  }

  function submitDataWednesday(tech, installerNumber){
    console.log("This is the beearer token")
    console.log(bearerToken);
    // Your API endpoint URL
    // const apiUrl = 'https://api.logistixai.com/api/orders/v1/fetch-route-board';

    // Sample data to be sent to the API
    const dataWednesday = 
{
    "serviceDate": "2023-07-26T00:00:00.000Z",
    "marketId": 928,
    "stateId": 11,
    "serviceProviders": [
        "b0e1556e-a666-496b-a627-a81cf58a623d"
    ],
    "technicians": [
      tech,
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
    .post("https://api.logistixai.com/api/orders/v1/fetch-route-board", dataWednesday, {headers})
    .then((response) => {
      console.log("The Bearer token is ");
      console.log(response.data.result.markets[0].serviceProviders[0].resources[1].slots);
      // console.log(response.data.result.markets[0].serviceProviders[0].resources[1].slots[3].jobs[0].customer.contactFirstName);
      // console.log(response.data.result.markets[0].serviceProviders[0].resources[1].slots[3].jobs[0].customer.contactLastName);
      // console.log(response.data.access_token);
      var slots = response.data.result.markets[0].serviceProviders[0].resources[1].slots;
      slots.forEach(element => {
        console.log(element.slotTime);
        var currentID = "I"+installerNumber+"-2-" + element.slotTime;
        console.log(currentID);
        

        // Here we can test if an array is empty, and call more funcitons inside of it

        if (element.jobs.length === 0) {
          document.getElementById(currentID).style.backgroundColor = "#88AFD2";

          document.getElementById(currentID).textContent = element.slotTime;
        } else {
          counter++;
          // var firstLast = response.data.result.markets[0].serviceProviders[0].resources[1].slots[3].jobs[0].customer.contactFirstName +
          // " " +
          // response.data.result.markets[0].serviceProviders[0].resources[1].slots[3].jobs[0].customer.contactLastName 
          document.getElementById(currentID).textContent = element.jobs[0].customer.contactFirstName + " " + element.jobs[0].customer.contactLastName;
          document.getElementById(currentID).style.backgroundColor = "#ffbc90";
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

    submitDataThursday(tech, installerNumber);

  }

  function submitDataThursday(tech, installerNumber){
    console.log("This is the beearer token")
    console.log(bearerToken);
    // Your API endpoint URL
    // const apiUrl = 'https://api.logistixai.com/api/orders/v1/fetch-route-board';

    // Sample data to be sent to the API
    const dataThursday = 
{
    "serviceDate": "2023-07-20T00:00:00.000Z",
    "marketId": 928,
    "stateId": 11,
    "serviceProviders": [
        "b0e1556e-a666-496b-a627-a81cf58a623d"
    ],
    "technicians": [
      tech,
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
    .post("https://api.logistixai.com/api/orders/v1/fetch-route-board", dataThursday, {headers})
    .then((response) => {
      console.log("The Bearer token is ");
      console.log(response.data.result.markets[0].serviceProviders[0].resources[1].slots);
      // console.log(response.data.result.markets[0].serviceProviders[0].resources[1].slots[3].jobs[0].customer.contactFirstName);
      // console.log(response.data.result.markets[0].serviceProviders[0].resources[1].slots[3].jobs[0].customer.contactLastName);
      // console.log(response.data.access_token);
      var slots = response.data.result.markets[0].serviceProviders[0].resources[1].slots;
      slots.forEach(element => {
        console.log(element.slotTime);
        var currentID = "I"+installerNumber+"-3-" + element.slotTime;
        console.log(currentID);
        

        // Here we can test if an array is empty, and call more funcitons inside of it

        if (element.jobs.length === 0) {
          document.getElementById(currentID).style.backgroundColor = "#88AFD2";

          document.getElementById(currentID).textContent = element.slotTime;
        } else {
          counter++;
          // var firstLast = response.data.result.markets[0].serviceProviders[0].resources[1].slots[3].jobs[0].customer.contactFirstName +
          // " " +
          // response.data.result.markets[0].serviceProviders[0].resources[1].slots[3].jobs[0].customer.contactLastName 
          document.getElementById(currentID).textContent = element.jobs[0].customer.contactFirstName + " " + element.jobs[0].customer.contactLastName;
          document.getElementById(currentID).style.backgroundColor = "#ffbc90";
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

    submitDataFriday(tech, installerNumber);

  }

  function submitDataFriday(tech, installerNumber){
    console.log("This is the beearer token")
    console.log(bearerToken);
    // Your API endpoint URL
    // const apiUrl = 'https://api.logistixai.com/api/orders/v1/fetch-route-board';

    // Sample data to be sent to the API
    const dataFriday = 
{
    "serviceDate": "2023-07-14T00:00:00.000Z",
    "marketId": 928,
    "stateId": 11,
    "serviceProviders": [
        "b0e1556e-a666-496b-a627-a81cf58a623d"
    ],
    "technicians": [
      tech,
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
    .post("https://api.logistixai.com/api/orders/v1/fetch-route-board", dataFriday, {headers})
    .then((response) => {
      console.log("The Bearer token is ");
      console.log(response.data.result.markets[0].serviceProviders[0].resources[1].slots);
      // console.log(response.data.result.markets[0].serviceProviders[0].resources[1].slots[3].jobs[0].customer.contactFirstName);
      // console.log(response.data.result.markets[0].serviceProviders[0].resources[1].slots[3].jobs[0].customer.contactLastName);
      // console.log(response.data.access_token);
      var slots = response.data.result.markets[0].serviceProviders[0].resources[1].slots;
      slots.forEach(element => {
        console.log(element.slotTime);
        var currentID = "I"+installerNumber+"-4-" + element.slotTime;
        console.log(currentID);
        

        // Here we can test if an array is empty, and call more funcitons inside of it

        if (element.jobs.length === 0) {
          document.getElementById(currentID).style.backgroundColor = "#88AFD2";

          document.getElementById(currentID).textContent = element.slotTime;
        } else {
          counter++;
          // var firstLast = response.data.result.markets[0].serviceProviders[0].resources[1].slots[3].jobs[0].customer.contactFirstName +
          // " " +
          // response.data.result.markets[0].serviceProviders[0].resources[1].slots[3].jobs[0].customer.contactLastName 
          document.getElementById(currentID).textContent = element.jobs[0].customer.contactFirstName + " " + element.jobs[0].customer.contactLastName;
          document.getElementById(currentID).style.backgroundColor = "#ffbc90";
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

      viewTotals();

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

  function getOrderInfo(guid) {
    const token = bearerToken;
  
    const headers = {
      Authorization: `Bearer ${token}`,
    };
  
    var customerAPIURL =
      "https://api.logistixai.com/api/orders/V5/" +
      guid;
  
    axios
      .get(customerAPIURL, { headers })
      .then((response) => {
        console.log("Response:", response.data);
        
        var hdurl = response.data.result.order.orderSource.externalOrderId;
        
        const link1 = document.getElementById("LogLink");
        const link2 = document.getElementById("HDLink");
        var url1 = "https://portal.logistixai.com/order/detail/" + guid;
        var url2 = "https://homeservices.my.site.com/sp/s/global-search/" + hdurl;
        link1.href = url1;
        link2.href = url2;


        // This is where we will populate the Modal :D
        document.getElementById("name").textContent = "👤 " + response.data.result.order.contacts[0].contactBusinessName;
        document.getElementById("moreInfo").textContent = "🏠 " + response.data.result.order.contacts[0].addresses[0].addressLine1;
        document.getElementById("phone").textContent = "📞 " + response.data.result.order.contacts[0].phoneNos[0].phoneNumber;
        var status = response.data.result.orderStatus;
        if(status == "Sold"){
          status = "SOLD! " + "💵💶💷";
          document.getElementById("status").textContent = "Lead Status: " + status;
        }
        else{
          document.getElementById("status").textContent = "Lead Status: " + status;

        }

        
        document.getElementById("lineItems").textContent = "Services: 📝 "  + response.data.result.order.services[0].serviceMasterName
        document.getElementById("description").textContent = response.data.result.order.services[0].serviceLineItems[0].description;
        document.getElementById("flags").textContent = "Flags 🚩: "  + response.data.result.order.flags[0].flagType;
        var note = response.data.result.order.notes[0].noteData;
        document.getElementById("LastNote").textContent = note;


      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  function showCellValue(cell){
    var guid = cell.dataset.value;
    console.log(guid);
    getOrderInfo(guid);
  }



  function viewTotals(){
    document.getElementById("counter").textContent = "Weekly Total: " + counter;
    console.log("This is a test");

  }

  
function getRTS(){

  console.log("The GET RTS function is starting")

  const RTSdata = {
      "namedQuery": "report_query_iirts_b0e1556ea666496ba627a81cf58a623d",
      "query": "query DynamicReportQuery($page: Int, $size: Int, $orderByColumn: String, $orderByDirection: String, $isExport: Boolean, $exportFormat: String, $isCountQuery: Boolean, $filters: String!) {\n        report_query_iirts_b0e1556ea666496ba627a81cf58a623d(page: $page, size: $size, orderByColumn: $orderByColumn, orderByDirection: $orderByDirection,isExport:$isExport,exportFormat:$exportFormat, isCountQuery:$isCountQuery, filters: $filters) {\n          pageSize,total,totalPage,isExport,exportFormat,items {etteo_order_id,order_status,market_description,external_order_id,service_master_name,order_source_name,contact_name,service_service_provider,service_resource_name,line_of_business_description}\n        }\n      }",
      "variables": {
          "page": 1,
          "size": 10,
          "orderByColumn": "order_created_date",
          "orderByDirection": "asc",
          "isExport": false,
          "exportFormat": "csv",
          "isCountQuery": false,
          "filters": "[{\"fieldType\":\"OrderGraphType\",\"reportFilterType\":12,\"filterType\":1,\"name\":\"ETTEO_ORDER_ID\",\"isGroupByFilterNull\":false},{\"fieldType\":\"OrderGraphType\",\"reportFilterType\":6,\"filterType\":4,\"name\":\"ORDER_STATUS_ID\",\"value\":{\"value\":\"0d61221c-cb71-404a-95be-079ed0e11f85\",\"text\":\"Ready to Schedule\"},\"operator\":null,\"isGroupByFilterNull\":false},{\"fieldType\":\"OrderGraphType\",\"reportFilterType\":3,\"filterType\":4,\"name\":\"MARKET_ID\",\"isGroupByFilterNull\":false},{\"fieldType\":\"OrderGraphType\",\"reportFilterType\":12,\"filterType\":1,\"name\":\"EXTERNAL_ORDER_ID\",\"isGroupByFilterNull\":false},{\"fieldType\":\"ServiceGraphType\",\"reportFilterType\":10,\"filterType\":4,\"name\":\"SERVICE_MASTER_ID\",\"value\":[{\"value\":\"a47395e8-41d3-4bf4-873d-4058e82a0f84\",\"text\":\"KITCH - CABINETS LINEAR FT\"},{\"value\":\"df9ec1e6-855e-4996-9085-4b22eb12c074\",\"text\":\"KITCH - CABINETS LINEAR FT\"},{\"value\":\"7e8ff66a-7efa-4ae2-a4fb-b2818dbe8c81\",\"text\":\"KITCH - CABINETS LINEAR FT\"}],\"isGroupByFilterNull\":false},{\"fieldType\":\"OrderGraphType\",\"reportFilterType\":1,\"filterType\":4,\"name\":\"ORDER_SOURCE_GUID\",\"value\":{\"value\":\"56bf6b29-615d-4f2b-9f94-e6889f1f0aed\",\"text\":\"Lowe's\"},\"operator\":null,\"isGroupByFilterNull\":false},{\"fieldType\":\"OrderGraphType\",\"reportFilterType\":12,\"filterType\":1,\"name\":\"CONTACT_NAME\",\"isGroupByFilterNull\":false},{\"fieldType\":\"ServiceGraphType\",\"reportFilterType\":4,\"filterType\":4,\"name\":\"SERVICE_SERVICE_PROVIDER_GUID\",\"isGroupByFilterNull\":false},{\"fieldType\":\"ServiceGraphType\",\"reportFilterType\":5,\"filterType\":4,\"name\":\"SERVICE_RESOURCE_GUID\",\"isGroupByFilterNull\":false},{\"fieldType\":\"OrderLobGraphType\",\"reportFilterType\":2,\"filterType\":4,\"name\":\"LINE_OF_BUSINESS_MASTER_GUID\",\"isGroupByFilterNull\":false}]"
      }

  }

  const token = bearerToken;

    const headers = {
              'Authorization': `Bearer ${token}`,
              // 'Access-Control-Allow-Origin': 'http://127.0.0.1:5500'
          };

    axios
    .post("https://prod-eto-graphql.azurewebsites.net/graphql", RTSdata, {headers})
    .then((response) => {
      
      // now lets just console log the response
      console.log(response.data);


      });

    }


    function getINTRTS(){

      console.log("The GET RTS function is starting")
    
      const RTSdata = {
        "namedQuery": "report_query_payrollextract_b0e1556ea666496ba627a81cf58a623d",
        "query": "query DynamicReportQuery($page: Int, $size: Int, $orderByColumn: String, $orderByDirection: String, $isExport: Boolean, $exportFormat: String, $isCountQuery: Boolean, $filters: String!) {\n        report_query_payrollextract_b0e1556ea666496ba627a81cf58a623d(page: $page, size: $size, orderByColumn: $orderByColumn, orderByDirection: $orderByDirection,isExport:$isExport,exportFormat:$exportFormat, isCountQuery:$isCountQuery, filters: $filters) {\n          pageSize,total,totalPage,isExport,exportFormat,items {service_service_provider,service_resource_name,store_number,service_master_name,external_order_id,order_status,contact_name,service_date,gross_total,percentage_rate,accessorial_charge,total,net_profit}\n        }\n      }",
        "variables": {
            "page": 1,
            "size": 10,
            "orderByColumn": "order_created_date",
            "orderByDirection": "asc",
            "isExport": false,
            "exportFormat": "csv",
            "isCountQuery": false,
            "filters": "[{\"fieldType\":\"ServiceGraphType\",\"reportFilterType\":4,\"filterType\":4,\"name\":\"SERVICE_SERVICE_PROVIDER_GUID\",\"isGroupByFilterNull\":false},{\"fieldType\":\"ServiceGraphType\",\"reportFilterType\":5,\"filterType\":4,\"name\":\"SERVICE_RESOURCE_GUID\",\"isGroupByFilterNull\":false},{\"fieldType\":\"OrderGraphType\",\"reportFilterType\":12,\"filterType\":1,\"name\":\"STORE_NUMBER\",\"isGroupByFilterNull\":false},{\"fieldType\":\"ServiceGraphType\",\"reportFilterType\":10,\"filterType\":4,\"name\":\"SERVICE_MASTER_ID\",\"isGroupByFilterNull\":false},{\"fieldType\":\"OrderGraphType\",\"reportFilterType\":12,\"filterType\":1,\"name\":\"EXTERNAL_ORDER_ID\",\"isGroupByFilterNull\":false},{\"fieldType\":\"OrderGraphType\",\"reportFilterType\":6,\"filterType\":4,\"name\":\"ORDER_STATUS_ID\",\"isGroupByFilterNull\":false},{\"fieldType\":\"OrderGraphType\",\"reportFilterType\":12,\"filterType\":1,\"name\":\"CONTACT_NAME\",\"isGroupByFilterNull\":false},{\"fieldType\":\"ServiceGraphType\",\"reportFilterType\":14,\"filterType\":3,\"name\":\"SERVICE_DATE\",\"isGroupByFilterNull\":false},{\"fieldType\":\"ServiceFinancialGraphType\",\"reportFilterType\":12,\"filterType\":1,\"name\":\"GROSS_TOTAL\",\"isGroupByFilterNull\":false},{\"fieldType\":\"ServiceFinancialGraphType\",\"reportFilterType\":12,\"filterType\":1,\"name\":\"PERCENTAGE_RATE\",\"isGroupByFilterNull\":false},{\"fieldType\":\"ServiceFinancialGraphType\",\"reportFilterType\":12,\"filterType\":1,\"name\":\"ACCESSORIAL_CHARGE\",\"isGroupByFilterNull\":false},{\"fieldType\":\"ServiceFinancialGraphType\",\"reportFilterType\":12,\"filterType\":1,\"name\":\"TOTAL\",\"isGroupByFilterNull\":false},{\"fieldType\":\"ServiceFinancialGraphType\",\"reportFilterType\":12,\"filterType\":1,\"name\":\"NET_PROFIT\",\"isGroupByFilterNull\":false}]"
        }
    
      }
    
      const token = INTbearerToken;
    
        const headers = {
                  'Authorization': `Bearer ${token}`,
                  // 'Access-Control-Allow-Origin': 'http://127.0.0.1:5500'
              };
    
        axios
        .post("https://int-graphql.logistixai.com/graphql", RTSdata, {headers})
        .then((response) => {
          
          // now lets just console log the response
          console.log(response.data);
    
    
          });
    
        }
    



  getBearer();
  getINTBearer();

  setTimeout(getINTRTS, 3000);
  // setTimeout(submitData, 2000);

  // [3].jobs[0].customer.contactFirstName

