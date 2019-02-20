// Voedsel voorraad Chart
var ctx = document.getElementById("voedselVoorraad").getContext('2d');
var voedselVoorraad = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ["Hoofdgerecht", "Vlees", "Gebraad", "Gevogelte", "Nagerecht", "Fruit", "Yoghurt", "Pudding", "Ijs", "Bijgerecht", "Zout", "Suiker", "Peper"],
        datasets: [{
            label: 'Voedsel op voorraad',
            data: [0, 20, 10, 5, 0, 10, 10, 15, 5, 29, 30, 28, 14],
            backgroundColor: [
                //Hoofdgerecht
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                //Nagerecht
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                //Bijgerecht
                'rgba(255, 206, 86, 0.2)',
                //Overige
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                //Hoofdgerecht
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                //Nagerecht
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                //Bijgerecht
                'rgba(255, 206, 86, 1)',
                //Overige
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

//Toevoegen van procent op afstand
function addProcent() {
    var parentWidth = document.getElementById("afstandTotaal").offsetWidth;
    var childWidth = document.getElementById("huidigeAfstand").offsetWidth;

    var i = 0.01 * parentWidth;
    var changeValue = function() {
        if (i < parentWidth) {
            childWidth += i;
            document.getElementById("huidigeAfstand").innerHTML = childWidth.toFixed(2) + "km x100&sup2;";
        } else {
            clearInterval(intervalID);
        }
    }
    var intervalID = setInterval(changeValue, 1);
};

//Veranderen van danger icon
function changeMeldingVeilig() {
    document.getElementById("veilig").style.display = "block";
    document.getElementById("storing").style.display = "none";
    document.getElementById("gevaar").style.display = "none";
}

function changeMeldingStoring() {
    document.getElementById("veilig").style.display = "none";
    document.getElementById("storing").style.display = "block";
    document.getElementById("gevaar").style.display = "none";
}

function changeMeldingGevaar() {
    document.getElementById("veilig").style.display = "none";
    document.getElementById("storing").style.display = "none";
    document.getElementById("gevaar").style.display = "block";
}
