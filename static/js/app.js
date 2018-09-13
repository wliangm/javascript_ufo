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
     
    var finalFilteredData = tableData.filter(ufo => ufo.datetime === inputDate)
      
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
