
import data from '../data/map-data.json' assert { type: 'json' };

const container = document.getElementById('map-container');

data.nodes.forEach(node => {
  const div = document.createElement('div');
  div.className = `node ${node.urgency}`;
  div.textContent = node.title;

  const subList = document.createElement('div');
  node.children.forEach(sub => {
    const subDiv = document.createElement('div');
    subDiv.className = 'subnode';
    subDiv.innerHTML = `<strong>${sub.title}</strong><br>${sub.countermeasure}`;
    subList.appendChild(subDiv);
  });

  subList.style.display = "none";
  div.onclick = () => {
    subList.style.display = subList.style.display === "none" ? "block" : "none";
  };

  const wrapper = document.createElement('div');
  wrapper.appendChild(div);
  wrapper.appendChild(subList);
  container.appendChild(wrapper);
});
