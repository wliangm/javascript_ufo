// from data.js
var tableData = data;

// YOUR CODE HERE!

// Get a reference to the table body
var tbody = d3.select("tbody");
// Select the submit button
var submit = d3.select("#filter-btn");


// respond to submit/ click and start filtering and display table data
submit.on("click", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

     // Select the input date element and Get input value
    var inputDate = d3.select("#datetime").property("value");
    var inputCity = d3.select("#city").property("value").toLowerCase();
    var inputState = d3.select("#state").property("value").toLowerCase();
    var inputCountry = d3.select("#country").property("value").toLowerCase();
    var inputShape = d3.select("#shape").property("value").toLowerCase();
    

    // test result of input value
    console.log(inputDate);
    console.log(inputCity);
    console.log(inputState);
    console.log(inputCountry);
    console.log(inputShape);
    

    // filter data table by input value
    // quick and dirt solution for multiple filter parameter and null value from inpu:
    // w/ if statement, the codes check for input value has something or nothing
    // when true (something from input) then do filter the data 
    // otherwise (nothing from input) then create new array which is equal to original or prior array
    if (inputDate)
        {var filteredData_dt = tableData.filter(ufo => ufo.datetime === inputDate)}
        else {var filteredData_dt = tableData};

    if (inputCity)
        {var filteredData_city = filteredData_dt.filter(ufo => ufo.city === inputCity)}
        else {filteredData_city = filteredData_dt};

    if (inputState)
        {var filteredData_state = filteredData_city.filter(ufo => ufo.state === inputState)}
        else {var filteredData_state = filteredData_city};

    if (inputCountry)
        {var filteredData_country = filteredData_state.filter(ufo => ufo.country === inputCountry)}
        else {var filteredData_country = filteredData_state};

    if (inputShape)
        {var filteredData_shape = filteredData_country.filter(ufo => ufo.shape === inputShape)}
        else {var filteredData_shape = filteredData_country};

       
    //final filtered data
    var finalFilteredData = filteredData_shape 
    
    // level I of HW
    //var finalFilteredData = tableData.filter(ufo => ufo.datetime === inputDate)
      
    // test result of filtered data table
    console.log(tableData);
    console.log(filteredData_dt);
    console.log(filteredData_city);
    console.log(filteredData_state);
    console.log(filteredData_shape);
    console.log(finalFilteredData);

    //clear the table body content before append new table row and new colum
    $('#tablebody').empty();

    //create loop (forEach) and append table row and column:
    finalFilteredData.forEach((ufodata) => {
        var row = tbody.append("tr");
        Object.entries(ufodata).forEach(([key,value]) => {
            var cell = tbody.append("td");
            cell.text(value);
        });
    });

});
