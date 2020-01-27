//Validación
function validation(){
    var a = parseFloat(document.querySelector("#realPartFirst").value);
    var b = parseFloat(document.querySelector("#imaginaryPartFirst").value);
    var c = parseFloat(document.querySelector("#realPartSecond").value);
    var d = parseFloat(document.querySelector("#imaginaryPartSecond").value);
    var op = document.querySelector("#operator").value;
    if (Number.isNaN(a) || Number.isNaN(b) || Number.isNaN(c) || Number.isNaN(d)){
        alert("Ingrese todos los datos");
    }
    else if (op == "division" && c == 0 && d == 0){
        alert("Ingrese datos adecuados, (c) o (d) distintos de 0");
    }
    else{
        operation(a,b,c,d,op);
    }
}

//Cálculos
function operation(a,b,c,d,op){
    var resultRealPart;
    var resultImaginaryPart;

    switch(op) {
        case "sum":
            resultRealPart = a + c;
            resultImaginaryPart = b + d;
            break;
        case "substraction":
            resultRealPart = a - c;
            resultImaginaryPart = b - d;
            break;
        case "multiplication":
            resultRealPart = (a * c) - (b * d);
            resultImaginaryPart = (a * d) + (b * c);
            break;
        case "division":
            var denominator = (c * c) + (d * d);
            resultRealPart = ((a * c) + (b * d)) / denominator;
            resultImaginaryPart = ((b * c) - (a * d)) / denominator;
            break;
        default:
            alert("RIP, algo salió mal :s");
    }
    graph(resultRealPart,resultImaginaryPart);
    alert("El resultado es: (" + resultRealPart + ") + (" + resultImaginaryPart + ")i");
}

//Gráfica
function graph(a,b){
    var ctx = document.getElementById("myChart").getContext("2d");
    var scatterChart = new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                pointRadius: 0,
                data: [{
                    x: 0,
                    y: 0
                }]
            }, {
                label: 'Num. Complejo',
                backgroundColor: "rgba(185,0,39,1.0)",
                data: [{
                    x: a,
                    y: b
                }]
            }, {
                pointRadius: 0,
                data: [{
                    x: -a,
                    y: -b
                }]
            }]
        },
        options: {
            legend:{
                display:false
            },
            es: {
                xAxes: [{
                    type: 'linear',
                    position: 'bottom'
                }]
            }
        }
    });
}