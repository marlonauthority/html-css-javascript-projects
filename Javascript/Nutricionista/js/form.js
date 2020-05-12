var botaoAdcionar = document.querySelector("#adicionar-paciente");
botaoAdcionar.addEventListener("click", function(event) {
  event.preventDefault();

  var form = document.querySelector("#form-adiciona");

  var paciente = getPacienteForm(form);

  var erros = validaPaciente(paciente);

  if (erros.length > 0) {
    showErro(erros);

    return;
  }

  adicionaPacienteNaTabela(paciente);

  form.reset();
  clearErro();
});

function adicionaPacienteNaTabela(paciente) {
  var pacienteTr = createElementHtmlTr(paciente);
  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);
}

function showErro(erros) {
  var ul = document.querySelector("#mensagens-erro");
  clearErro();

  erros.forEach(function(erro) {
    var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  });
}

function clearErro() {
  var ul = document.querySelector("#mensagens-erro");
  ul.innerHTML = "";

  return ul;
}

function getPacienteForm(form) {
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  };
  return paciente;
}

function createElementHtmlTr(paciente) {
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  pacienteTr.appendChild(createElementHtmlTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(createElementHtmlTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(createElementHtmlTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(createElementHtmlTd(paciente.imc, "info-imc"));

  return pacienteTr;
}

function createElementHtmlTd(dado, classe) {
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);
  return td;
}

function validaPaciente(paciente) {
  var erros = [];

  if (paciente.nome.length == 0) {
    erros.push("Nome obrigatório");
  }

  if (!validaPeso(paciente.peso)) {
    erros.push("Peso é inválido");
  }

  if (!validaAltura(paciente.altura)) {
    erros.push("Altura é inválida");
  }

  if (paciente.peso.length == 0) {
    erros.push("Peso obrigatório");
  }
  if (paciente.altura.length == 0) {
    erros.push("Altura obrigatória");
  }
  return erros;
}
