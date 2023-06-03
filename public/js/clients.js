window.addEventListener('load',() =>{
    
    let demands = "<label class='demands-label'>Cantidad de habitaciones:</label><input name = 'bedrooms' type='number' required></input>";
    demands += "<label class='demands-label'>Cantidad de baños:</label><input name = 'bathrooms' type='number' required></input>";
    demands += "<label class='demands-label'>Cantidad de cocheras:</label><input name = 'cocheras' type='number' required></input>";
    demands += "<label class='demands-label'>Cantidad de pisos:</label><input name = 'floors' type='number' required></input>";
    demands += "<label class='demands-label'>Metros cuadrados cubiertos:</label><input name='sqmc'type='number' required></input>";
    demands += "<label class='demands-label'>Metros cuadrados totales:</label><input name='sqmt' type='number' required></input>";
    demands += "<label class='demands-label'>Antiguedad:</label><input name='antiquity' type='number' required></input>";
    demands += "<label class='demands-label'>Estado:</label><input name='state' type='text'></input>";

    let demandsInputs = document.getElementById('demands-inputs');

    demandsInputs.style.border = "1px solid black";
    demandsInputs.style.display = "flex";
    demandsInputs.style.flexWrap = "wrap";	
    demandsInputs.innerHTML = demands;

    document.getElementById('property-type').addEventListener('change', (event) => {

        let demandsInputs = document.getElementById('demands-inputs');

        switch(event.target.value){
            case "casa":

            let demands = "<label class='demands-label'>Cantidad de habitaciones:</label><input class = 'demands-input' name = 'bedroomsQuantity' type='number' required></input>";
            demands += "<label class='demands-label'>Cantidad de baños:</label><input class = 'demands-input' name = 'bathroomsQuantity' type='number' required></input>";
            demands += "<label class='demands-label'>Cantidad de cocheras:</label><input class = 'demands-input' name = 'cocherasQuantity' type='number' required></input>";
            demands += "<label class='demands-label'>Cantidad de pisos:</label><input class = 'demands-input' name = 'floorsQuantity' type='number' required></input>";
            demands += "<label class='demands-label'>Metros cuadrados cubiertos:</label><input class = 'demands-input' name='sqmc' type='number' required></input>";
            demands += "<label class='demands-label'>Metros cuadrados totales:</label><input class = 'demands-input' name='sqmt' type='number' required></input>";
            demands += "<label class='demands-label'>Antiguedad:</label><input class = 'demands-input' name='antiquity' type='number' required></input>";
            demands += "<label class='demands-label'>Estado:</label><input class = 'demands-input' name='state' type='text'></input>";

            demandsInputs.style.border = "1px solid black";
            demandsInputs.style.display = "flex";
            demandsInputs.style.flexWrap = "wrap";	
            demandsInputs.style.flexGrow = 1;
            demandsInputs.innerHTML = demands;
            break;

            default:
            demandsInputs.innerHTML = "";
            break;
        };
    });
});