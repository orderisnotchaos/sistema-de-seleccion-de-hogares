window.addEventListener('load',() =>{
    
    let demands;

    demands = "<label class='demands-label'>Cantidad de habitaciones:</label><input class = 'demands-input' name = 'bedroomsQuantity' type='number' required></input>";
    demands += "<label class='demands-label'>Cantidad de baños:</label><input class = 'demands-input' name = 'bathroomsQuantity' type='number' required></input>";
    demands += "<label class='demands-label'>Cantidad de cocheras:</label><input class = 'demands-input' name = 'cocherasQuantity' type='number' required></input>";
    demands += "<label class='demands-label'>Cantidad de pisos:</label><input class = 'demands-input' name = 'floorsQuantity' type='number' required></input>";
    demands += "<label class='demands-label'>Metros cuadrados cubiertos:</label><input class = 'demands-input' name='sqmc' type='number' required></input>";
    demands += "<label class='demands-label'>Metros cuadrados totales:</label><input class = 'demands-input' name='sqmt' type='number' required></input>";
    demands += "<label class='demands-label'> Ubicación:</label><input class = 'demands-input' name='location' type='text' required></input>";
    demands += "<label class='demands-label'>Antiguedad:</label><input class = 'demands-input' name='antiquity' type='number' required></input>";
    let demandsInputs = document.getElementById('demands-inputs');

    demandsInputs.style.border = "1px solid black";
    demandsInputs.style.display = "flex";
    demandsInputs.style.flexWrap = "wrap";	
    demandsInputs.innerHTML = demands;

    document.getElementById('property-type').addEventListener('change', (event) => {

        let demandsInputs = document.getElementById('demands-inputs');


        switch(event.target.value){
            case "casa":

            demands = "<label class='demands-label'>Cantidad de habitaciones:</label><input class = 'demands-input' name = 'bedroomsQuantity' type='number' required></input>";
            demands += "<label class='demands-label'>Cantidad de baños:</label><input class = 'demands-input' name = 'bathroomsQuantity' type='number' required></input>";
            demands += "<label class='demands-label'>Cantidad de cocheras:</label><input class = 'demands-input' name = 'cocherasQuantity' type='number' required></input>";
            demands += "<label class='demands-label'>Cantidad de pisos:</label><input class = 'demands-input' name = 'floorsQuantity' type='number' required></input>";
            demands += "<label class='demands-label'>Metros cuadrados cubiertos:</label><input class = 'demands-input' name='sqmc' type='number' required></input>";
            demands += "<label class='demands-label'>Metros cuadrados totales:</label><input class = 'demands-input' name='sqmt' type='number' required></input>";
            demands += "<label class='demands-label'> Ubicación:</label><input class = 'demands-input' name='location' type='text' required></input>";
            demands += "<label class='demands-label'>Antiguedad:</label><input class = 'demands-input' name='antiquity' type='number' required></input>";

            demandsInputs.style.border = "1px solid black";
            demandsInputs.style.display = "flex";
            demandsInputs.style.flexWrap = "wrap";	
            demandsInputs.style.flexGrow = 1;
            demandsInputs.innerHTML = demands;
            break;

            case 'departamento':

                demands = "<label class='demands-label'>Cantidad de habitaciones:</label><input class = 'demands-input' name = 'bedroomsQuantity' type='number' required></input>";
                demands += "<label class='demands-label'>Cantidad de baños:</label><input class = 'demands-input' name = 'bathroomsQuantity' type='number' required></input>";
                demands += "<label class='demands-label'>Cantidad de cocheras:</label><input class = 'demands-input' name = 'cocherasQuantity' type='number' required></input>";
                demands += "<label class='demands-label'>Cantidad de pisos:</label><input class = 'demands-input' name = 'floorsQuantity' type='number' required></input>";
                demands += "<label class='demands-label'>Metros cuadrados:</label><input class = 'demands-input' name='sqmt'type='number' required></input>";
                demands += "<label class='demands-label'> Ubicación:</label><input class = 'demands-input' name='location' type='text' required></input>";
                demands += "<label class='demands-label'>Antiguedad:</label><input class = 'demands-input' name='antiquity' type='number' required></input>";
                demands += "<label class='demands-label'>Moneda:</label><input class = 'demands-input' name='currency' type='text' required></input>";
                demands += "<label class='demands-label'>Terraza:</label><input class = 'demands-input' name = 'terrace' type='boolean' required></input>";

                demandsInputs.style.border = "1px solid black";
                demandsInputs.style.display = "flex";
                demandsInputs.style.flexWrap = "wrap";	
                demandsInputs.innerHTML = demands;
                break;

            case 'terreno':

                demands = "<label class='demands-label'>metros cuadrados:</label><input class = 'demands-input' name = 'bedroomsQuantity' type='number' required></input>";
                demands +=  "<label class='demands-label'> Ubicación:</label><input class = 'demands-input' name='location' type='text' required></input>";
                demands += "<label class='demands-label'> Moneda:</label><input class = 'demands-input' name='location' type='text' required></input>";

                demandsInputs.style.border = "1px solid black";
                demandsInputs.style.display = "flex";
                demandsInputs.style.flexWrap = "wrap";	
                demandsInputs.innerHTML = demands;
                break;

            case 'local':
                
                break;

            default:
            demandsInputs.innerHTML = "";   
            break;
        };
    });
});