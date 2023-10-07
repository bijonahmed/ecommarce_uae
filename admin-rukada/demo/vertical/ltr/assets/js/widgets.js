
  $(function() {
    "use strict";

    $('#chart1').sparkline([ 1, 4, 5, 9, 8, 10, 5, 8, 4, 1, 0, 7, 5, 7, 9, 8, 10, 5], {
            type: 'bar',
            height: '40',
            barWidth: '3',
            resize: true,
            barSpacing: '4',
            barColor: '#5e72e4',
			      spotColor: '#5e72e4',
            minSpotColor: '#5e72e4',
            maxSpotColor: '#5e72e4',
            highlightSpotColor: '#5e72e4',
            highlightLineColor: '#5e72e4'
        });
		
	$("#chart2").sparkline([8,18,12,25,14,30,10], {
            type: 'line',
            width: '100',
            height: '40',
            lineWidth: '2',
            lineColor: '#f5365c',
            fillColor: 'transparent',
            spotColor: '#f5365c',
            minSpotColor: '#f5365c',
            maxSpotColor: '#f5365c',
            highlightSpotColor: '#f5365c',
            highlightLineColor: '#f5365c'
    }); 	
		

    $('#chart3').sparkline([ 1, 4, 5, 9, 8, 10, 5, 8, 4, 1, 0, 7, 5, 7, 9, 8, 10, 5], {
      type: 'bar',
      height: '40',
      barWidth: '3',
      resize: true,
      barSpacing: '4',
      barColor: '#2dce89',
      spotColor: '#2dce89',
      minSpotColor: '#2dce89',
      maxSpotColor: '#2dce89',
      highlightSpotColor: '#2dce89',
      highlightLineColor: '#2dce89'
  });

				
	$("#chart4").sparkline([8,18,12,25,14,30,10], {
    type: 'line',
    width: '100',
    height: '40',
    lineWidth: '2',
    lineColor: '#11cdef',
    fillColor: '#11cdef',
    spotColor: '#11cdef',
    minSpotColor: '#11cdef',
    maxSpotColor: '#11cdef',
    highlightSpotColor: '#11cdef',
    highlightLineColor: '#11cdef'
}); 	
  
  



var options = {
	series: [{
		name: "Total Orders",
		data: [60, 160, 671, 257, 901, 555, 257]
	}],
	chart: {
		type: "area",
		height: 50,
		toolbar: {
			show: !1
		},
		zoom: {
			enabled: !1
		},
		dropShadow: {
			enabled: 0,
			top: 3,
			left: 14,
			blur: 4,
			opacity: .12,
			color: "#fff"
		},
		sparkline: {
			enabled: !0
		}
	},
	markers: {
		size: 0,
		colors: ["#fff"],
		strokeColors: "#fff",
		strokeWidth: 2,
		hover: {
			size: 7
		}
	},
	stroke: {
		width: 2.5,
		curve: "smooth"
	},
	fill: {
		type: 'gradient',
		gradient: {
		  shade: 'light',
		  type: 'vertical',
		  shadeIntensity: 0.5,
		  gradientToColors: ['#fff'],
		  inverseColors: false,
		  opacityFrom: 0.6,
		  opacityTo: 0.1,
		}
	  },
    colors: ["#fff"],
	xaxis: {
		categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
	},
	tooltip: {
		theme: "dark",
		fixed: {
			enabled: !1
		},
		x: {
			show: !1
		},
		y: {
			title: {
				formatter: function(e) {
					return ""
				}
			}
		},
		marker: {
			show: !1
		}
	}
  };

  var chart = new ApexCharts(document.querySelector("#chart5"), options);
  chart.render();




  

var options = {
	series: [{
		name: "Total Orders",
		data: [60, 160, 671, 257, 901, 555, 257]
	}],
	chart: {
		type: "area",
		height: 50,
		toolbar: {
			show: !1
		},
		zoom: {
			enabled: !1
		},
		dropShadow: {
			enabled: 0,
			top: 3,
			left: 14,
			blur: 4,
			opacity: .12,
			color: "#fff"
		},
		sparkline: {
			enabled: !0
		}
	},
	markers: {
		size: 0,
		colors: ["#fff"],
		strokeColors: "#fff",
		strokeWidth: 2,
		hover: {
			size: 7
		}
	},
	stroke: {
		width: 2.5,
		curve: "smooth"
	},
	fill: {
		type: 'gradient',
		gradient: {
		  shade: 'light',
		  type: 'vertical',
		  shadeIntensity: 0.5,
		  gradientToColors: ['#fff'],
		  inverseColors: false,
		  opacityFrom: 0.6,
		  opacityTo: 0.1,
		}
	  },
    colors: ["#fff"],
	xaxis: {
		categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
	},
	tooltip: {
		theme: "dark",
		fixed: {
			enabled: !1
		},
		x: {
			show: !1
		},
		y: {
			title: {
				formatter: function(e) {
					return ""
				}
			}
		},
		marker: {
			show: !1
		}
	}
  };

  var chart = new ApexCharts(document.querySelector("#chart6"), options);
  chart.render();






  var options = {
    series: [{
      name: "Total Orders",
      data: [60, 160, 671, 257, 901, 555, 257]
    }],
    chart: {
      type: "area",
      height: 50,
      toolbar: {
        show: !1
      },
      zoom: {
        enabled: !1
      },
      dropShadow: {
        enabled: 0,
        top: 3,
        left: 14,
        blur: 4,
        opacity: .12,
        color: "#fff"
      },
      sparkline: {
        enabled: !0
      }
    },
    markers: {
      size: 0,
      colors: ["#fff"],
      strokeColors: "#fff",
      strokeWidth: 2,
      hover: {
        size: 7
      }
    },
    stroke: {
      width: 2.5,
      curve: "smooth"
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'vertical',
        shadeIntensity: 0.5,
        gradientToColors: ['#fff'],
        inverseColors: false,
        opacityFrom: 0.6,
        opacityTo: 0.1,
      }
      },
      colors: ["#fff"],
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    },
    tooltip: {
      theme: "dark",
      fixed: {
        enabled: !1
      },
      x: {
        show: !1
      },
      y: {
        title: {
          formatter: function(e) {
            return ""
          }
        }
      },
      marker: {
        show: !1
      }
    }
    };
  
    var chart = new ApexCharts(document.querySelector("#chart7"), options);
    chart.render();
  
  
  



    var options = {
      series: [{
        name: "Total Orders",
        data: [60, 160, 671, 257, 901, 555, 257]
      }],
      chart: {
        type: "area",
        height: 50,
        toolbar: {
          show: !1
        },
        zoom: {
          enabled: !1
        },
        dropShadow: {
          enabled: 0,
          top: 3,
          left: 14,
          blur: 4,
          opacity: .12,
          color: "#fff"
        },
        sparkline: {
          enabled: !0
        }
      },
      markers: {
        size: 0,
        colors: ["#fff"],
        strokeColors: "#fff",
        strokeWidth: 2,
        hover: {
          size: 7
        }
      },
      stroke: {
        width: 2.5,
        curve: "smooth"
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: 'vertical',
          shadeIntensity: 0.5,
          gradientToColors: ['#fff'],
          inverseColors: false,
          opacityFrom: 0.6,
          opacityTo: 0.1,
        }
        },
        colors: ["#fff"],
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
      },
      tooltip: {
        theme: "dark",
        fixed: {
          enabled: !1
        },
        x: {
          show: !1
        },
        y: {
          title: {
            formatter: function(e) {
              return ""
            }
          }
        },
        marker: {
          show: !1
        }
      }
      };
    
      var chart = new ApexCharts(document.querySelector("#chart8"), options);
      chart.render();
    
    
    
       //donut

    $("span.donut").peity("donut",{
      width: 70,
      height: 70 
    });



   });