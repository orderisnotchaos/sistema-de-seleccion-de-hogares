window.addEventListener('load', () => {

    let characteristics = "<label class='characteristics-label'>Cantidad de habitaciones:</label><input class = 'characteristics-input' name = 'bedroomsQuantity' type='number' required></input>";
    characteristics += "<label class='characteristics-label'>Cantidad de baños:</label><input class = 'characteristics-input' name = 'bathroomsQuantity' type='number' required></input>";
    characteristics += "<label class='characteristics-label'>Cantidad de cocheras:</label><input class = 'characteristics-input' name = 'cocherasQuantity' type='number' required></input>";
    characteristics += "<label class='characteristics-label'>Cantidad de pisos:</label><input class = 'characteristics-input' name = 'floorsQuantity' type='number' required></input>";
    characteristics += "<label class='characteristics-label'>Metros cuadrados cubiertos:</label><input class = 'characteristics-input' name='sqmc'type='number' required></input>";
    characteristics += "<label class='characteristics-label'>Metros cuadrados totales:</label><input class = 'characteristics-input' name='sqmt' type='number' required></input>";
    characteristics += "<label class= 'characteristics-label'> Ubicación:</label><input class = 'characteristics-input' name='location' type='text' required></input>";
    characteristics += "<label class='characteristics-label'>Antiguedad:</label><input class = 'characteristics-input' name='antiquity' type='number' required></input>";
    characteristics += "<label class='characteristics-label'>Moneda:</label><input class = 'characteristics-input' name='currency' type='text' required></input>";
    let characteristicsInputs = document.getElementById('characteristics-inputs');

    characteristicsInputs.style.border = "1px solid black";
    characteristicsInputs.style.display = "flex";
    characteristicsInputs.style.flexWrap = "wrap";	
    characteristicsInputs.innerHTML = characteristics;

    document.getElementById('property-type').addEventListener('change', (event) => {

        let characteristicsInputs = document.getElementById('characteristics-inputs');
        console.log('!');
        switch(event.target.value){
            case 'casa':
                
            
                characteristics = "<label class='characteristics-label'>Cantidad de habitaciones:</label><input class = 'characteristics-input' name = 'bedroomsQuantity' type='number' required></input>";
                characteristics += "<label class='characteristics-label'>Cantidad de baños:</label><input class = 'characteristics-input' name = 'bathroomsQuantity' type='number' required></input>";
                characteristics += "<label class='characteristics-label'>Cantidad de cocheras:</label><input class = 'characteristics-input' name = 'cocherasQuantity' type='number' required></input>";
                characteristics += "<label class='characteristics-label'>Cantidad de pisos:</label><input class = 'characteristics-input' name = 'floorsQuantity' type='number' required></input>";
                characteristics += "<label class='characteristics-label'>Metros cuadrados cubiertos:</label><input class = 'characteristics-input' name='sqmc'type='number' required></input>";
                characteristics += "<label class='characteristics-label'>Metros cuadrados totales:</label><input class = 'characteristics-input' name='sqmt' type='number' required></input>";
                characteristics += "<label class= 'characteristics-label'> Ubicación:</label><input class = 'characteristics-input' name='location' type='text' required></input>";
                characteristics += "<label class='characteristics-label'>Antiguedad:</label><input class = 'characteristics-input' name='antiquity' type='number' required></input>";
                characteristics += "<label class='characteristics-label'>Moneda:</label><input class = 'characteristics-input' name='currency' type='text' required></input>";
                characteristicsInputs.style.border = "1px solid black";
                characteristicsInputs.style.display = "flex";
                characteristicsInputs.style.flexWrap = "wrap";	
                characteristicsInputs.innerHTML = characteristics;
                break;
            case 'departamento':

                characteristics = "<label class='characteristics-label'>Cantidad de habitaciones:</label><input class = 'characteristics-input' name = 'bedroomsQuantity' type='number' required></input>";
                characteristics += "<label class='characteristics-label'>Cantidad de baños:</label><input class = 'characteristics-input' name = 'bathroomsQuantity' type='number' required></input>";
                characteristics += "<label class='characteristics-label'>Cantidad de cocheras:</label><input class = 'characteristics-input' name = 'cocherasQuantity' type='number' required></input>";
                characteristics += "<label class='characteristics-label'>Cantidad de pisos:</label><input class = 'characteristics-input' name = 'floorsQuantity' type='number' required></input>";
                characteristics += "<label class='characteristics-label'>Metros cuadrados:</label><input class = 'characteristics-input' name='sqmt'type='number' required></input>";
                characteristics += "<label class='characteristics-label'> Ubicación:</label><input class = 'characteristics-input' name='location' type='text' required></input>";
                characteristics += "<label class='characteristics-label'>Antiguedad:</label><input class = 'characteristics-input' name='antiquity' type='number' required></input>";
                characteristics += "<label class='characteristics-label'>Moneda:</label><input class = 'characteristics-input' name='currency' type='text' required></input>";
                characteristics += "<label class='characteristics-label'>Terraza:</label><input class = 'characteristics-input' name = 'terrace' type='boolean' required></input>";

                characteristicsInputs.style.border = "1px solid black";
                characteristicsInputs.style.display = "flex";
                characteristicsInputs.style.flexWrap = "wrap";	
                characteristicsInputs.innerHTML = characteristics;
                break;

            case 'terreno':

                characteristics = "<label class='characteristics-label'>metros cuadrados:</label><input class = 'characteristics-input' name = 'bedroomsQuantity' type='number' required></input>";
                characteristics +=  "<label class='characteristics-label'> Ubicación:</label><input class = 'characteristics-input' name='location' type='text' required></input>";
                characteristics += "<label class='characteristics-label'> Moneda:</label><input class = 'characteristics-input' name='location' type='text' required></input>";

                characteristicsInputs.style.border = "1px solid black";
                characteristicsInputs.style.display = "flex";
                characteristicsInputs.style.flexWrap = "wrap";	
                characteristicsInputs.innerHTML = characteristics;
                break;

            case 'local':
                
                break;
            default:
                characteristicsInputs.innerHTML = "";
                break;
        }

    });
});