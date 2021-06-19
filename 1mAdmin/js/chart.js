window.onload = function () {

  var chart = new CanvasJS.Chart("chartContainer", {
    title:{
      text: "Customer Complaints"
    },
    axisY: {
      title: "Number of Reviews",
      lineColor: "#4F81BC",
      tickColor: "#4F81BC",
      labelFontColor: "#4F81BC",
      gridThickness: 0
    },
    axisY2: {
      title: "Percent",
      suffix: "%",
      gridThickness: 0,
      lineColor: "#C0504E",
      tickColor: "#C0504E",
      labelFontColor: "#C0504E"
    },
    data: [{
      type: "column",
      dataPoints: [
        { label: "Parking", y: 3050 },
        { label: "Rude Sales Rep.", y: 1100 },
        { label: "Poor Lighting", y: 850 },
        { label: "Confusing Layout", y: 480 },
        { label: "Limited Size", y: 350 },
        { label: "Faded Clothes", y: 180 },
        { label: "Shrank Clothes", y: 120 }
      ]
    }]
  });
  chart.render();
  createPareto();
  
  function createPareto(){
    var dps = [];
    var yValue, yTotal = 0, yPercent = 0;
  
    for(var i = 0; i < chart.data[0].dataPoints.length; i++)
      yTotal += chart.data[0].dataPoints[i].y;
  
    for(var i = 0; i < chart.data[0].dataPoints.length; i++) {
      yValue = chart.data[0].dataPoints[i].y;
      yPercent += (yValue / yTotal * 100);
      dps.push({label: chart.data[0].dataPoints[i].label, y: yPercent });
    }
    chart.addTo("data", {type:"line", axisYType: "secondary", yValueFormatString: "0.##\"%\"", indexLabel: "{y}", indexLabelFontColor: "#C24642", dataPoints: dps});
    chart.axisY[0].set("maximum", yTotal, false);
    chart.axisY2[0].set("maximum", 105, false );
    chart.axisY2[0].set("interval", 25 );
  }
  
  }
  