function clickCiudades ( elemento ){
    alert ("Cargando informe metereologico...")
}

function removerCookies ( element ){
    let cookies = element.closest(".cuadroCookie");
    cookies.remove();
}

function cambiarEscala ( element ){
    let 
}

function changeMetric ( element ) { 
    let temperatures = document.querySelectorAll( ".max, .min" ); 

    for (let i = 0; i < temperatures.length; i++ ) {
        let currentTemp = Number ( temperatures[i].textContent ); 
        if ( element.value === "celcius"){
            let celciusResult = ( currentTemp -32) / 1.8;
            temperatures[i].textContent = celciusResult;
}
    else{
        let farenheitResult = ( 9 / 5 ) * currentTemp + 32;
        temperatures[i].textContent = farenheitResult; 
    }   
    }
}
    
    // si mi valor del elemento es igual a celcius, ejecutamos formula de celcius

