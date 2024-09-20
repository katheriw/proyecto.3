var ctx = document.getElementById('barchart').getContext('2d');
var barchart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Ep.95:"La Batalla Decisiva"', 'Ep.68:"La LLegada de los Saiyajin"', 'Ep.82:"La Fusión de los Gotenks"', 'Ep.84:"El Poder del Super Saiyan 3"', 'Ep.72:"La Guerra de los Guerreros del Espacio"', 'Ep.91:"La Muerte de Freezer"'],
        datasets: [{
            label: '# Episodios más vistos',
            data: [20, 16, 12, 11, 9, 5],
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