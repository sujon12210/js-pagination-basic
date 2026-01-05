const items = [
  'Item 1','Item 2','Item 3','Item 4','Item 5',
  'Item 6','Item 7','Item 8','Item 9','Item 10'
];

let page = 1;
const perPage = 3;

function render(){
  const list = document.getElementById('list');
  list.innerHTML = '';

  const start = (page - 1) * perPage;
  const end = start + perPage;

  items.slice(start, end).forEach(item=>{
    const li = document.createElement('li');
    li.innerText = item;
    list.appendChild(li);
  });

  document.getElementById('page').innerText = page;
}

function next(){
  if(page * perPage < items.length){
    page++;
    render();
  }
}

function prev(){
  if(page > 1){
    page--;
    render();
  }
}

render();
