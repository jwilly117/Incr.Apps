// =========================================================================================================================


  
function getRTS(){

    console.log("The Production GET RTS function is starting")
  
    const RTSdata = {
        "namedQuery": "report_query_hdappliancekeyreq_b0e1556ea666496ba627a81cf58a623d",
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
        const mydata = response.data.data.report_query_iirts_b0e1556ea666496ba627a81cf58a623d.items;
        // now lets just console log the response
        console.log("Here is the real test of diving down into the object");
        // This whole fucking time, it had two data keys.... data.data  what the fuck
        
        let count = 0;
  
        mydata.forEach(temp => {
          console.log(temp.contact_name);
          // lOOP THROUGH AND ADD THE CARDS :)
        })
        console.log(response.data.data.report_query_iirts_b0e1556ea666496ba627a81cf58a623d.items[0].contact_name);
        // console.log("Here is the data " + mydata);
        // console.log(response.data.report_query_iirts_b0e1556ea666496ba627a81cf58a623d.items[0].order_status)
        // data.report_query_iirts_b0e1556ea666496ba627a81cf58a623d.items[3].line_of_business_description
        // var testing = response.data.report_query_iirts_b0e1556ea666496ba627a81cf58a623d.items[0].line_of_business_description;
        // console.log(testing);
        });
    // 
      }
  
  
  
  
  
  // =========================================================================================================================