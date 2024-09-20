var ctx2 = document.getElementById('doughnut').getContext('2d');
var doughnut = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ['Gokú', 'Vegeta', 'Gohan', 'Piccolo', 'Trunks del Futuro', 'Krillin'],
        datasets: [{
            label: '# Personajes más populares',
            data: [20, 16, 14, 10, 8, 5],
            backgroundColor: [
                'rgba(244, 120, 38, 0.8)',
                'rgba(0, 48, 135, 0.8)',
                'rgba(255, 204, 0, 0.8)',
                'rgba(199, 0, 0, 0.8)',
                'rgba(34, 139, 34, 0.8)',
                'rgba(0, 0, 0, 0.8)'
            ],
            borderColor: [
                'rgba(244, 120, 38, 1)',
                'rgba(0, 48, 135, 1)',
                'rgba(255, 204, 0, 1)',
                'rgba(199, 0, 0, 1)',
                'rgba(144, 238, 144, 1)',
                'rgba(0, 0, 0, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});