


function loadChart(chart, series, g, r, b) {
  
    chart.options.title = { text: "Answers" };
    chart.options.data = [];
    chart.options.data.push(series);

    series.dataPoints = [
        { label: "green", y: g },
        { label: "red", y: r },
        { label: "black", y: b }
    ];

    
    chart.render();
    console.log("From Chart.js");
}

function updateChart(green, red, black) {

    console.log("Green: " + green + " Red: " + red + " Black: " + black);
    
  //  var length = newChart.options.data[0].dataPoints.length;

    newChart.options.data[0].dataPoints[0].y = green;
    newChart.options.data[0].dataPoints[1].y = red;
    newChart.options.data[0].dataPoints[2].y = black;

    newChart.render();
}