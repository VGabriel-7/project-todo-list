const btnTarefas = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');
const ol = document.querySelector('ol');

btnTarefas.addEventListener('click', () => {
  const tarefa = input.value;
  const li = document.createElement('li');
  li.innerText = tarefa;
  if (tarefa !== '') {
    ol.appendChild(li);
  }
  input.value = '';
});
