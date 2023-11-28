function enviarForm() {
    var feelingForm = feeling.value
    var generoForm = genero.value
    var descobertaForm = descoberta.value
    var nacionalidadeForm = nascMusica.value
    var mscImportanteForm = musicaImportante.value
    var idVar = sessionStorage.ID_USUARIO;

    if (idVar == undefined) {
        alert(`É necessario fazer login`);
    } else if (feelingForm == "") {
        alert(`Selecione como você está se sentindo`);
    } else if (generoForm == "") {
        alert(`Selecione um gênero de preferência`);
    } else if (descobertaForm == "") {
        alert(`Selecione o modo que você descobre músicas novas`);
    } else if (nacionalidadeForm == "") {
        alert(`Selecione sobre a nacionalidade da música`);
    } else if (mscImportanteForm == "") {
        alert(`Selecione qual parte da música é mais importante`);
    } else {
        fetch("/formulario/enviarFormulario", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                feelingFormulario: feelingForm,
                generoFormulario: generoForm,
                descobertaFormulario: descobertaForm,
                nacionalidadeFormulario: nacionalidadeForm,
                mscImportanteFormulario: mscImportanteForm,
                idServer: idVar
            }),
        })
            .then(function (resposta) {
                console.log("resposta: ", resposta);

                if (resposta.ok) {
                    setTimeout(() => {
                        alert(`Formulário enviado!`)
                    }, "500")
                } else {
                    if (resposta.status == 501) {
                        alert(`Um usuário não pode enviar mais de um formulário!`)
                    } else {
                        throw "Houve um erro ao enviar o formulario!";
                    }
                }
            })
            .catch(function (resposta) {
                console.log(`#ERRO: ${resposta}`);
            });
        return false;
    }
}