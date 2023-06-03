
window.addEventListener('load',() =>{

    let i = 0;
    while(document.getElementById(`edit-client-button-${i}`) !== null){
        document.getElementById(`edit-client-button-${i}`).addEventListener('click',(e) =>{

            let editViewDisplay = document.getElementById(`edit-view-${e.target.id.split('-')[3]}`).style.display;

            if( editViewDisplay !== 'none' && editViewDisplay !== ''){
                
                document.getElementById(`default-view-${e.target.id.split('-')[3]}`).style.display = 'block';
                return document.getElementById(`edit-view-${e.target.id.split('-')[3]}`).style.display = 'none';

            }else{

                document.getElementById(`default-view-${e.target.id.split('-')[3]}`).style.display = 'none';
                return document.getElementById(`edit-view-${e.target.id.split('-')[3]}`).style.display = 'block';
            }
        });
        i++;
    }

    window.addEventListener('click',async (e) =>{
        
        if(e.target.id.includes("delete-demand-button") === true){

             
            fetch(`/clients/${e.target.parentElement.children[1].innerText}/deleteDemand`,{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({demand : e.target.parentElement.children[0].innerText}),
                mode:'cors',
            }).then( res =>{
                return res.json();
            }).then( data =>{
                if(data.ok === true) return e.target.parentElement.remove();
                return e.target.parentElement.children[0].innerText = "no se ha podido borrar";
            }).catch(err =>{
                console.log(err);
            });

        }

        if(e.target.id.includes('delete-client-button-') === true){

            let id = e.target.id.split('-');

            fetch(`/clients/${id[4]}/delete`,{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                mode:'cors',
            }).then( res =>{
                return res.json();
            }
            ).then(data =>{
                if(data.ok === true) return document.getElementById(`client-li-${id[3]}`).remove();
            }).catch(err =>{
                console.log(err);
            });
            
        }

    });

});