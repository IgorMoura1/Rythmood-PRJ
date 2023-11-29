var listaScore = []
fetch("/dashboard/infoDashboard").then(res => {
    if (!res.ok) {
        throw new Error(`Erro na solicitação : ${res.statusText}`);
    }
    return res.json();
})
    .then(res => {
        listaScore = res;
    });

function gerarGrafico() {
    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
