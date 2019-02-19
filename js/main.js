// Voedsel voorraad Chart
var ctx = document.getElementById("voedselVoorraad").getContext('2d');
var voedselVoorraad = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ["Hoofdgerecht", "Nagerecht", "Bijgerecht", "Zout", "Suiker", "Peper"],
        datasets: [{
            label: 'Voedsel op voorraad',
            data: [35, 32, 29, 30, 28, 14],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
});

// Drank voorraad Chart
var ctx = document.getElementById("drankVoorraad").getContext('2d');
var drankVoorraad = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["Water", "Melk", "Thee", "Koffie", "Suiker", "Peper"],
        datasets: [{
            label: 'Voedsel op voorraad',
            data: [35, 32, 29, 30, 28, 14],
            backgroundColor: [
                'rgba(180, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(6, 206, 86, 0.2)',
                'rgba(300, 192, 192, 0.2)',
                'rgba(30, 102, 255, 0.2)',
                'rgba(1, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(180,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(6, 206, 86, 1)',
                'rgba(300, 192, 192, 1)',
                'rgba(30, 102, 255, 1)',
                'rgba(1, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
});

function addProcent(){
  var totaal = document.getElementById("huidigeAfstand").offsetWidth;

  var text = document.getElementById("text");
  text.innerHTML(totaal);
};
