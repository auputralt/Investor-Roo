/**
 * AgriInvest Indonesia - Charts JavaScript
 * Handles Chart.js initialization and configuration
 */

document.addEventListener('DOMContentLoaded', function() {
  initCharts();
});

// Store chart instances for later access
window.chartInstances = {};

// Default chart colors
const chartColors = {
  primary: '#2D5A27',
  primaryLight: '#4A7C47',
  accent: '#D4A84B',
  earth: '#8B6F47',
  maluku: '#1E5F8A',
  confirmed: '#28A745',
  assumption: '#FFC107',
  gray: '#E0E0E0',
  grayDark: '#666666'
};

/**
 * Initialize all charts on the page
 */
function initCharts() {
  // GRDP Contribution Chart (Lampung Utara)
  initGRDPChart();
  
  // Commodity Comparison Chart
  initCommodityComparisonChart();
  
  // ROI Horizon Chart
  initROIChart();
  
  // LER Comparison Chart (Maluku)
  initLERChart();
  
  // Production Growth Chart
  initProductionGrowthChart();
}

/**
 * GRDP Contribution Chart - Lampung Utara
 */
function initGRDPChart() {
  const ctx = document.getElementById('chart-grdp');
  if (!ctx) return;
  
  window.chartInstances['grdp'] = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Food Crops (Tanaman Pangan)', 'Plantation Crops (Perkebunan)', 'Other Subsectors'],
      datasets: [{
        label: 'GRDP Contribution (%)',
        data: [35.29, 45.24, 19.47],
        backgroundColor: [
          chartColors.primary,
          chartColors.earth,
          chartColors.gray
        ],
        borderColor: [
          chartColors.primary,
          chartColors.earth,
          chartColors.grayDark
        ],
        borderWidth: 1
      }]
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              return context.parsed.x + '% of Agricultural GRDP';
            }
          }
        }
      },
      scales: {
        x: {
          beginAtZero: true,
          max: 50,
          ticks: {
            callback: function(value) {
              return value + '%';
            }
          }
        }
      }
    }
  });
}

/**
 * Commodity Comparison Chart
 */
function initCommodityComparisonChart() {
  const ctx = document.getElementById('chart-commodity-comparison');
  if (!ctx) return;
  
  window.chartInstances['commodity-comparison'] = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Cassava', 'Maize', 'Peanuts', 'Coffee', 'Pepper'],
      datasets: [
        {
          label: 'Lampung Utara',
          data: [1, 1, 1, 1, 1], // Priority indicators
          backgroundColor: chartColors.primary,
          borderColor: chartColors.primary,
          borderWidth: 1
        },
        {
          label: 'Maluku',
          data: [0, 1, 0, 0, 0], // Only Maize is common
          backgroundColor: chartColors.maluku,
          borderColor: chartColors.maluku,
          borderWidth: 1
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top'
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              return context.raw === 1 ? 'Priority Commodity' : 'Not Priority';
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 1.5,
          ticks: {
            stepSize: 1,
            callback: function(value) {
              if (value === 1) return 'Priority';
              if (value === 0) return 'Not Priority';
              return '';
            }
          }
        }
      }
    }
  });
}

/**
 * ROI Horizon Chart
 */
function initROIChart() {
  const ctx = document.getElementById('chart-roi');
  if (!ctx) return;
  
  window.chartInstances['roi'] = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: [
        'Peanuts',
        'Maize',
        'Cassava',
        'Maize+Rice',
        'Coffee',
        'Pepper',
        'Nutmeg',
        'Cloves',
        'Coconut'
      ],
      datasets: [{
        label: 'ROI Horizon (months)',
        data: [
          4,   // Peanuts: 3-4 months
          5,   // Maize: 4-5 months
          10,  // Cassava: 8-12 months
          5,   // Maize+Rice: 4-5 months
          42,  // Coffee: 3-4 years (36-48 months)
          42,  // Pepper: 3-4 years
          72,  // Nutmeg: 5-7 years (60-84 months)
          66,  // Cloves: 4-7 years (48-84 months)
          60   // Coconut: 5+ years
        ],
        backgroundColor: function(context) {
          const value = context.parsed.y;
          if (value <= 6) return chartColors.confirmed;
          if (value <= 12) return chartColors.primary;
          if (value <= 24) return chartColors.accent;
          return chartColors.earth;
        },
        borderWidth: 0
      }]
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              const months = context.parsed.x;
              if (months <= 6) return months + ' months (Quick turnover)';
              if (months <= 12) return months + ' months (Short-term)';
              if (months <= 24) return months + ' months (Medium-term)';
              return Math.round(months / 12) + ' years (Long-term)';
            }
          }
        }
      },
      scales: {
        x: {
          beginAtZero: true,
          ticks: {
            callback: function(value) {
              if (value <= 12) return value + ' mo';
              if (value === 60) return '5 yr';
              return '';
            }
          }
        }
      }
    }
  });
}

/**
 * LER Comparison Chart - Maluku Intercropping
 */
function initLERChart() {
  const ctx = document.getElementById('chart-ler');
  if (!ctx) return;
  
  window.chartInstances['ler'] = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Monoculture Maize', 'Monoculture Rice', 'Maize + Rice Intercropping'],
      datasets: [{
        label: 'Land Equivalent Ratio (LER)',
        data: [1.0, 1.0, 2.28], // Average LER of 2.11-2.45
        backgroundColor: [
          chartColors.gray,
          chartColors.gray,
          chartColors.confirmed
        ],
        borderColor: [
          chartColors.grayDark,
          chartColors.grayDark,
          chartColors.confirmed
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              const ler = context.parsed.y;
              if (ler === 1.0) return 'LER: 1.0 (Baseline)';
              return 'LER: ' + ler + ' (' + Math.round((ler - 1) * 100) + '% more productive)';
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 3,
          ticks: {
            callback: function(value) {
              return value.toFixed(1);
            }
          }
        }
      }
    }
  });
}

/**
 * Production Growth Chart - Maluku
 */
function initProductionGrowthChart() {
  const ctx = document.getElementById('chart-production-growth');
  if (!ctx) return;
  
  window.chartInstances['production-growth'] = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['2020', '2021', '2022', '2023', '2024'],
      datasets: [
        {
          label: 'Nutmeg',
          data: [100, 105, 112, 118, 125],
          borderColor: chartColors.primary,
          backgroundColor: 'rgba(45, 90, 39, 0.1)',
          fill: true,
          tension: 0.3
        },
        {
          label: 'Cloves',
          data: [100, 108, 115, 122, 130],
          borderColor: chartColors.earth,
          backgroundColor: 'rgba(139, 111, 71, 0.1)',
          fill: true,
          tension: 0.3
        },
        {
          label: 'Coconut',
          data: [100, 103, 107, 112, 118],
          borderColor: chartColors.accent,
          backgroundColor: 'rgba(212, 168, 75, 0.1)',
          fill: true,
          tension: 0.3
        },
        {
          label: 'Sago',
          data: [100, 106, 113, 120, 128],
          borderColor: chartColors.maluku,
          backgroundColor: 'rgba(30, 95, 138, 0.1)',
          fill: true,
          tension: 0.3
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top'
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              return context.dataset.label + ': ' + context.parsed.y + ' (Index: 2020 = 100)';
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: false,
          min: 90,
          max: 140,
          ticks: {
            callback: function(value) {
              return value;
            }
          },
          title: {
            display: true,
            text: 'Production Index (2020 = 100)'
          }
        }
      }
    }
  });
}

/**
 * Create a dynamic chart from data
 */
function createChart(canvasId, config) {
  const ctx = document.getElementById(canvasId);
  if (!ctx) return null;
  
  window.chartInstances[canvasId] = new Chart(ctx, config);
  return window.chartInstances[canvasId];
}

/**
 * Update chart data
 */
function updateChartData(chartId, newData) {
  const chart = window.chartInstances[chartId];
  if (!chart) return;
  
  chart.data = newData;
  chart.update();
}

/**
 * Destroy a chart
 */
function destroyChart(chartId) {
  const chart = window.chartInstances[chartId];
  if (chart) {
    chart.destroy();
    delete window.chartInstances[chartId];
  }
}
