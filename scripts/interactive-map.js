
fetch('../data/map-data.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('map-container');
    data.nodes.forEach(node => {
      const el = document.createElement('div');
      el.className = 'node ' + node.color;
      el.textContent = node.title;
      container.appendChild(el);
    });
  });
