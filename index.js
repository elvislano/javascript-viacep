
function buscarCep() {
    try 
    let cepValue = document.querySelector("#cep").value;
    fetch(`https://viacep.com.br/ws/${cepValue}/json/`)
        .then(res => res.json())
        .then(res => {
            console.log(res);
        })
        .catch((error) => {
            alert("Erro na requisição: ", error.message)
        })
    }catch 
        }
}