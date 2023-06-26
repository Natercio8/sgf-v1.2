const section = document.querySelector('section')


/*
function carregar() {
    servicos()
}
*/


function buscar() {
    const url = fetch("./Backend/servicos.php")
    return url
}

async function servicos() {
    
    //const url = fetch("./Backend/area.php")
    //const response = await url
    //const _result = await response.json()

    

   // console.table(_result.Nome[0])





    const result = await buscar()
    const data = await result.json()

    let {Nome}=data
    console.log(Nome)



    /*
    for (let i = 0; i < data.length; i++) {

        const element = data[i];

        const{
            id_servico, 
            Nome,
            
            tipo_servico,
            nome_servico,


        }=element
        

        section.innerHTML +=`

            <details>
                <summary>${Nome}</summary>
                <br>
                <div class="botoes">
                    <div>
                        <h2>${tipo_servico}</h2>
                        <button type="submit" value="${id_servico}"><strong>${nome_servico}</strong></button>
                    </div>
                    
                </div>
            </details>
        `
        console.table(element)
        
    }*/
}

servicos()