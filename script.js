const btnTarefas = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');
const ol = document.querySelector('#lista-tarefas');

// Adiciona uma tarefa na lista de tarefas.
btnTarefas.addEventListener('click', () => {
  // eslint-disable-next-line sonarjs/no-duplicate-string
  const tarefa = input.value;
  const li = document.createElement('li');
  li.innerText = tarefa;
  if (tarefa !== '') {
    ol.appendChild(li);
  }
  input.value = '';
});

// Marca o item da lista com um fundo ao clicar uma vez sobre ele
ol.addEventListener('click', (event) => {
  for (let index = 0; index < ol.children.length; index += 1) {
    const element = ol.children[index];
    element.style.backgroundColor = null;
  }
  // eslint-disable-next-line no-param-reassign
  event.target.style.backgroundColor = 'grey';
});

// Marca um intem da lista (passando uma linha cortando a tarefa) como completo.
ol.addEventListener('dblclick', (event) => {
  const tarefa = event.target;
  if (tarefa.className === 'completed') {
    tarefa.className = null;
    tarefa.style.backgroundColor = null;
  } else {
    tarefa.style.backgroundColor = null;
    tarefa.className = 'completed';
  }
});
