function salvarCarro(event) {
   event.preventDefault();

   let titulo = document.getElementById('title').Value;
   let preco = Document.getElementById('preco').value;
   let marca = document.getElementById('marca').value;
   let modelo = document.getElementById('modelo').value;

   let cambioSelecionado = document.querySelector('input [name="marcha"]:checked');

   let cambio = cambioSelecionado ? cambioSelecionado.id : "Não informado";
}