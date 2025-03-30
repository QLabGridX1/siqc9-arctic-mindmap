
import data from '../data/map-data.json' assert { type: 'json' };

const container = document.getElementById('map-container');
container.innerHTML = '';

data.nodes.forEach(node => {
  const div = document.createElement('div');
  div.className = `node ${node.urgency}`;
  div.textContent = node.title;
  container.appendChild(div);
});
