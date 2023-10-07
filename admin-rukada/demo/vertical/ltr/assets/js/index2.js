$(function() {
    "use strict";


  // chart1
  var ctx = document.getElementById('chart1').getContext('2d');

  var gradientStroke1 = ctx.createLinearGradient(0, 0, 0, 300);
      gradientStroke1.addColorStop(0, '#009efd');
      gradientStroke1.addColorStop(1, '#2af598');

  var gradientStroke2 = ctx.createLinearGradient(0, 0, 0, 300);
      gradientStroke2.addColorStop(0, '#7928ca');  
      gradientStroke2.addColorStop(1, '#ff0080'); 

  var gradientStroke3 = ctx.createLinearGradient(0, 0, 0, 300);
      gradientStroke3.addColorStop(0, '#ff8359');
      gradientStroke3.addColorStop(1, '#ffdf40');


  var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
          datasets: [{
              label: 'Page Views',
              data: [15, 22, 13, 15, 20, 10, 15],
              backgroundColor: [
                  gradientStroke1
              ],
              borderColor: [
                  gradientStroke1
              ],
              borderWidth: 0,
              borderRadius: 20
          },
          {
              label: 'Sales',
              data: [20, 35, 30, 35, 28, 22, 25],
              backgroundColor: [
                  gradientStroke2
              ],
              borderColor: [
                  gradientStroke2
              ],
              borderWidth: 0,
              borderRadius: 20
          },{
              label: 'Conversion',
              data: [10, 15, 9, 12, 17, 16, 10],
              backgroundColor: [
                  gradientStroke3
              ],
              borderColor: [
                  gradientStroke3
              ],
              borderWidth: 0,
              borderRadius: 20
          }]
      },
      options: {
          maintainAspectRatio: false,
          barPercentage: 0.7,
          categoryPercentage: 0.45,
          plugins: {
              legend: {
                  maxWidth: 20,
                  boxHeight: 20,
                  position:'bottom',
                  display: true,
              }
          },
          scales: {
              x: {
                stacked: false,
                beginAtZero: true
              },
              y: {
                stacked: false,
                beginAtZero: true
              }
            }
      }
  });



// chart2
var ctx = document.getElementById('chart2').getContext('2d');

var gradientStroke1 = ctx.createLinearGradient(0, 0, 0, 300);
  gradientStroke1.addColorStop(0, '#005bea');
  gradientStroke1.addColorStop(1, '#00c6fb');

var gradientStroke2 = ctx.createLinearGradient(0, 0, 0, 300);
  gradientStroke2.addColorStop(0, '#ff6a00');  
  gradientStroke2.addColorStop(1, '#ee0979'); 

var gradientStroke3 = ctx.createLinearGradient(0, 0, 0, 300);
  gradientStroke3.addColorStop(0, '#17ad37');  
  gradientStroke3.addColorStop(1, '#98ec2d'); 

var myChart = new Chart(ctx, {
  type: 'pie',
  data: {
      labels: ['Desktop', 'Mobile', 'Tablet'],
      datasets: [{
          data: [155, 120, 110],
          backgroundColor: [
              gradientStroke1,
              gradientStroke2,
              gradientStroke3,
          ],
          borderWidth: 1
      }]
  },
  options: {
      maintainAspectRatio: false,
      cutout: 110,
      plugins: {
      legend: {
          display: false,
      }
  }
      
  }
});





// chart3
var ctx = document.getElementById('chart3').getContext('2d');

var gradientStroke1 = ctx.createLinearGradient(0, 0, 0, 300);
    gradientStroke1.addColorStop(0, '#5e72e4');  
    gradientStroke1.addColorStop(1, '#5e72e4');


var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        datasets: [{
            label: 'Visitors',
            data: [12, 25, 13, 25, 14, 35, 10],
            backgroundColor: [
                gradientStroke1
            ],
             fill: {
                target: 'origin',
                above: 'rgb(94 114 228 / 12%)',   // Area will be red above the origin
                below: 'rgb(94 114 228 / 12%)'    // And blue below the origin
              },
            tension: 0.4,
            borderColor: [
                gradientStroke1
            ],
            borderWidth: 4
        }]
    },
    options: {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            }
        },
        scales: {
            y: {
                beginAtZero: false
            }
        }
    }
});



   //donut

   $("span.donut").peity("donut",{
    width: 130,
    height: 130 
  });
    

   });