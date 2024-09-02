// Dados fictícios para o exemplo
const ataquesPorMes = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
    datasets: [{
        label: 'Número de Ataques',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgba(52, 152, 219, 0.2)',
        borderColor: 'rgba(52, 152, 219, 1)',
        borderWidth: 1
    }]
};

const tiposDeAtaques = {
    labels: ['Phishing', 'Ransomware', 'DDoS', 'Malware'],
    datasets: [{
        label: 'Tipos de Ataques',
        data: [12, 15, 5, 8],
        backgroundColor: [
            'rgba(46, 204, 113, 0.2)',
            'rgba(231, 76, 60, 0.2)',
            'rgba(241, 196, 15, 0.2)',
            'rgba(155, 89, 182, 0.2)'
        ],
        borderColor: [
            'rgba(46, 204, 113, 1)',
            'rgba(231, 76, 60, 1)',
            'rgba(241, 196, 15, 1)',
            'rgba(155, 89, 182, 1)'
        ],
        borderWidth: 1
    }]
};

// Configuração dos gráficos usando Chart.js
const ctx1 = document.getElementById('ataquesPorMes').getContext('2d');
const chart1 = new Chart(ctx1, {
    type: 'line',
    data: ataquesPorMes,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const ctx2 = document.getElementById('tiposDeAtaques').getContext('2d');
const chart2 = new Chart(ctx2, {
    type: 'doughnut',
    data: tiposDeAtaques,
});
