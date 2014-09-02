		$(document).ready(function () {
			$('a[rel=tooltip]').tooltip();

			// Easy Pie Charts
			var easyPieChartDefaults = {
				animate: 2000,
				scaleColor: false,
				lineWidth: 12,
				lineCap: 'square',
				size: 100,
				trackColor: '#e5e5e5'
			}
			$('#easy-pie-chart-1').easyPieChart($.extend({}, easyPieChartDefaults, {
				barColor: '#3da0ea'
			}));
			$('#easy-pie-chart-2').easyPieChart($.extend({}, easyPieChartDefaults, {
				barColor: '#e7912a'
			}));
			$('#easy-pie-chart-3').easyPieChart($.extend({}, easyPieChartDefaults, {
				barColor: '#bacf0b'
			}));
			$('#easy-pie-chart-4').easyPieChart($.extend({}, easyPieChartDefaults, {
				barColor: '#4ec9ce'
			}));
			$('#easy-pie-chart-5').easyPieChart($.extend({}, easyPieChartDefaults, {
				barColor: '#ec7337'
			}));
			$('#easy-pie-chart-6').easyPieChart($.extend({}, easyPieChartDefaults, {
				barColor: '#f377ab'
			}));
			// Visits Chart
			var visitsChartData = [{
				// Visits
				label: 'Visits',
				data: [
					[6, 1300],
					[7, 1600],
					[8, 1900],
					[9, 2100],
					[10, 2500],
					[11, 2200],
					[12, 2000],
					[13, 1950],
					[14, 1900],
					[15, 2000]
				]
			}, {
				// Returning Visits
				label: 'Returning Visits',
				data: [
					[6, 500],
					[7, 600],
					[8, 550],
					[9, 600],
					[10, 800],
					[11, 900],
					[12, 800],
					[13, 850],
					[14, 830],
					[15, 1000]
				],
				filledPoints: true
			}];
			$('#visits-chart').simplePlot(visitsChartData, {
				series: {
					points: {
						show: true,
						radius: 5
					},
					lines: {
						show: true
					}
				},
				xaxis: {
					tickDecimals: 2
				},
				yaxis: {
					tickSize: 1000
				}
			}, {
				height: 205,
				tooltipText: "y + ' visitors at ' + x + '.00h'"
			});
			// Comments Tab
			$('.comment-remove').click(function () {
				bootbox.confirm("Are you sure?", function (result) {
					alert("Confirm result: " + result);
				});
				return false;
			});
			// New Users Tab
			$('#tab-users a').tooltip();
		});
