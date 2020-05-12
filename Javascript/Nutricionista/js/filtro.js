var campo = document.querySelector("#filtrar-tabela");

campo.addEventListener("input", function() {
  var pacientes = document.querySelectorAll(".paciente");
  if (this.value.length > 0) {
    pacientes.forEach(paciente => {
      var tdNome = paciente.querySelector(".info-nome");
      var filtro = tdNome.textContent;

      var expressao = new RegExp(this.value, "i");

      if (!expressao.test(filtro)) {
        paciente.classList.add("invisivel");
      } else {
        paciente.classList.remove("invisivel");
      }
    });
  } else {
    pacientes.forEach(paciente => {
      paciente.classList.remove("invisivel");
    });
  }

  // for (var i = 0; i < pacientes.length; i++) {
  //   var paciente = pacientes[i];
  //   var tdNome = paciente.querySelector(".info-nome");
  //   var nome = tdNome.textContent;
  // }
});
