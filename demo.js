const controls = [...document.querySelectorAll('[data-mode]')];
const results = document.querySelector('#results');
const note = document.querySelector('#demo-note');
const products = new Map([...results.children].map((item) => [item.dataset.item, item]));

const views = {
  match: {
    order: ['studio', 'air', 'quiet'],
    note: 'Studio ANC выше: в этом сценарии у модели самое точное совпадение с запросом.',
  },
  offer: {
    order: ['air', 'studio', 'quiet'],
    note: 'Air ANC поднимается на первое место: модель тоже подходит под запрос, стоит на 1 500 ₽ меньше и приедет завтра.',
  },
};

for (const button of controls) {
  button.addEventListener('click', () => {
    const view = views[button.dataset.mode];
    for (const control of controls) {
      control.setAttribute('aria-pressed', String(control === button));
    }
    results.replaceChildren(...view.order.map((name) => products.get(name)));
    note.textContent = view.note;
  });
}
