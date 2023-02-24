const btnTarefas = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');
const ol = document.querySelector('#lista-tarefas');
const btnApagaTudo = document.getElementById('apaga-tudo');
const btnRmFinalizados = document.getElementById('remover-finalizados');
const btnSalvarTf = document.getElementById('salvar-tarefas');

// function tarefasSalvas() {
//   if (localStorage.length > 0) {
//     const local = localStorage;
//     for (let index = 0; index < local.length; index += 1) {
//       const element = local[index];
//       ol.a
//     }
//   }
// }

// tarefasSalvas();

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

btnApagaTudo.addEventListener('click', () => {
  const filhosOl = document.querySelectorAll('#lista-tarefas li');
  if (filhosOl.length > 0) {
    for (let index = 0; index < filhosOl.length; index += 1) {
      filhosOl[index].remove();
    }
  } else {
    alert('A lista está vazia');
  }
});

btnRmFinalizados.addEventListener('click', () => {
  const filhosOl = document.querySelectorAll('#lista-tarefas li');
  for (let index = 0; index < filhosOl.length; index += 1) {
    const completado = filhosOl[index];
    console.log(completado);
    if (completado.className === 'completed') {
      completado.remove();
    }
  }
});

// btnSalvarTf.addEventListener('click', () => {
//   const filhosOl = document.querySelector('#lista-tarefas').childNodes;
//   for (let index = 0; index < filhosOl.length; index += 1) {
//     localStorage.setItem(index, filhosOl[index]);
//   }
// });
// localStorage.removeItem('');
// console.log(localStorage);
// // if (localStorage.length < 1) {
// // }
