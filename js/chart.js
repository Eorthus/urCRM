//chart.js graphs -------------------------------------------------------------------------------------------------------------

const lids_data = {
    labels: [ 'Заключенные сделки', 'Отказы', 'Переговоры'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [1,2,3],
        backgroundColor: ["#e4565691","#e4867c78","#ab6983c7"],
        
      }
    ]
  };
const ctx=document.getElementById('lids')
    new Chart(ctx, {
        type: 'polarArea',
        data: lids_data,
        options: {
          responsive: true,
          scales: {
            r: {
              pointLabels: {
                display: true,
                centerPointLabels: true,
                font: {
                  size: 18
                }
              }
            }
          },
          plugins: {
            legend: {
              position: "left",
            },
            title: {
              display: true,
              text: 'Chart.js Polar Area Chart With Centered Point Labels'
            }
          }
        },
});
const clients_data = {
    labels: [ 'Физ. лица', 'Юр. лица', 'Выиграно','Проиграно', 'Обжаловано'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [1,2,3,4,5],
        backgroundColor: ['#e4565691',"#e4867c78","#ab6983c7",'#9c69abc7','#8469abb3'],
      }
    ]
  };
const ctc=document.getElementById('clients')
    new Chart(ctc, {
        type: 'polarArea',
        data: clients_data,
        options: {
          responsive: true,
          scales: {
            r: {
              pointLabels: {
                display: true,
                centerPointLabels: true,
                font: {
                  size: 18
                }
              }
            }
          },
          plugins: {
            legend: {
              position: 'left',
            },
            title: {
              display: true,
              text: 'Chart.js Polar Area Chart With Centered Point Labels'
            }
          }
        },
});
const staff_data = {
    labels: [ 'Иванов И.И.', 'Петров П.П.', 'Каренина Анна','Разумихин С.'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [1,2,3,4],
     backgroundColor: ['#e4565691',"#e4867c78","#ab6983c7",'#9c69abc7','#8469abb3'],
      }
    ]
  };
const ctv=document.getElementById('staff')
    new Chart(ctv, {
        type: 'polarArea',
        data: staff_data,
        options: {
          responsive: true,
          scales: {
            r: {
              pointLabels: {
                display: true,
                centerPointLabels: true,
                font: {
                  size: 18
                }
              }
            }
          },
          plugins: {
            legend: {
              position: 'left',
            },
            title: {
              display: true,
              text: 'Chart.js Polar Area Chart With Centered Point Labels'
            }
          }
        },
});

const actions = [
    {
      name: 'Randomize',
      handler(chart) {
        chart.data.datasets.forEach(dataset => {
          dataset.data = Utils.numbers({count: chart.data.labels.length, min: 0, max: 100});
        });
        chart.update();
      }
    },
    {
      name: 'Add Data',
      handler(chart) {
        const data = chart.data;
        if (data.datasets.length > 0) {
          data.labels.push('data #' + (data.labels.length + 1));
  
          for (let index = 0; index < data.datasets.length; ++index) {
            data.datasets[index].data.push(Utils.rand(0, 100));
          }
  
          chart.update();
        }
      }
    },
    {
      name: 'Remove Data',
      handler(chart) {
        chart.data.labels.splice(-1, 1); // remove the label first
  
        chart.data.datasets.forEach(dataset => {
          dataset.data.pop();
        });
  
        chart.update();
      }
    }
  ];