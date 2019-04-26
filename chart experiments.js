//Chart 1: new chart object
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Chart</h2>

<p>Costum Chart</p>

<canvas id="radar-chart" width="800" height="600"></canvas>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.min.js"></script>
<script>
new Chart(document.getElementById("radar-chart"), {
    type: 'radar',
    data: {
      labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
      datasets: [
        {
          label: "1950",
          fill: true,
          backgroundColor: "rgba(179,181,198,0.2)",
          borderColor: "rgba(179,181,198,1)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(179,181,198,1)",
          data: [8.77,55.61,21.69,6.62,6.82]
        }, {
          label: "2050",
          fill: true,
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(255,99,132,1)",
          pointBorderColor: "#fff",
          data: [25.48,54.16,7.61,8.06,4.45]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Distribution in % of world population'
      }
    }
});
</script>

</body>
</html>

//Chart 2: Call by Function

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript chart</h2>

<p>Radar Chart Demo </p>

<canvas id="radar-chart" width="800" height="600"></canvas>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.min.js"> 
</script>
<script>

function radarChart(categories, totals, averages, chartToPopulate, chartTitle) {
var chartDisplay = chartToPopulate;
var newChart = new Chart(chartDisplay, {
    type: 'radar',
    data: {
        labels: categories,
        datasets: [
            {
                data: averages,
                pointBackgroundColor: ["rgba(199,54,54,1)", "rgba(199,54,122,1)", "rgba(199,54,154,1)", "rgba(146,54,199,1)", "rgba(69,54,199,1)", "rgba(54,103,199,1)", "rgba(54,165,199,1)", "rgba(54,199,180,1)"],
                pointBorderColor: ["rgba(199,54,54,1)", "rgba(199,54,122,1)", "rgba(199,54,154,1)", "rgba(146,54,199,1)", "rgba(69,54,199,1)", "rgba(54,103,199,1)", "rgba(54,165,199,1)", "rgba(54,199,180,1)"],
                pointRadius: 15,
                pointStyle: "cross",
                pointHoverRadius: 25,
                pointHoverBorderWidth: 3,
                pointRotation: 45,
                pointBorderWidth: 1.2,
                backgroundColor: "rgba(61,49,225,0.5)",
                borderColor: "rgba(61,49,225,1)",
                label: "Averages",
                fill: true
            },
            {
                data: totals,
                pointBackgroundColor: ["rgba(199,54,54,1)", "rgba(199,54,122,1)", "rgba(199,54,154,1)", "rgba(146,54,199,1)", "rgba(69,54,199,1)", "rgba(54,103,199,1)", "rgba(54,165,199,1)", "rgba(54,199,180,1)"],
                pointBorderColor: ["rgba(199,54,54,1)", "rgba(199,54,122,1)", "rgba(199,54,154,1)", "rgba(146,54,199,1)", "rgba(69,54,199,1)", "rgba(54,103,199,1)", "rgba(54,165,199,1)", "rgba(54,199,180,1)"],
                pointRadius: 15,
                pointStyle: "cross",
                pointHoverRadius: 25,
                pointHoverBorderWidth: 3,
                pointRotation: 45,
                pointBorderWidth: 1.2,
                backgroundColor: "rgba(225,49,52,0.35)",
                borderColor: "rgba(225,49,52,1)",
                label: "Totals",
                fill: true
        },                 
        ]
    },
    options: {
        maintainAspectRation: false,
        title: {
            display: true,
            text: chartTitle,
            fontSize: 16
        }
    }
})
return chartDisplay;
}


var Chart = radarChart(["1","2","3","4"], [100,200,300,400], [10,20,30,40], 
document.getElementById("radar-chart"), "TEST")

document.getElementById("radar-chart").innerHTML = Chart;
</script>

</body>
</html>
