window.addEventListener('load', async (e) => {

    window.addEventListener('click', (e) => {
        if(e.target.id.includes('edit-view-button') === true){
            if(document.getElementById(`edit-view-${e.target.id.split('-')[3]}`).style.display === 'none' || 
                document.getElementById(`edit-view-${e.target.id.split('-')[3]}`).style.display === ''){

                document.getElementById(`edit-view-${e.target.id.split('-')[3]}`).style.display = 'block';
                return document.getElementById(`default-view-${e.target.id.split('-')[3]}`).style.display = 'none';
            }
        }

        if(e.target.id.includes('characteristic-delete-button-') === true){
            fetch(`/properties/${e.target.parentElement.children[1].innerText}/deleteCharacteristic`,{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({characteristic : e.target.parentElement.children[0].innerText}),
                mode:'cors',
            }).then( res =>{
                return res.json();
            }).then(data =>{
                if(data.ok === true) return e.target.parentElement.remove();
                return e.target.parentElement.children[0].innerText = "no se ha podido borrar";
            })
        }

        if(e.target.id.includes('delete-property-button-') === true){

            let splitedId = e.target.id.split('-');
            fetch(`/properties/${splitedId[4]}/delete`,{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                mode:'cors',
            }).then( res =>{
                return res.json();
            }).then(data =>{

                if(data.ok === true) return document.getElementById(`property-li-${splitedId[3]}`).remove();
            })
        }
    })

});