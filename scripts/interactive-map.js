fetch('data/map-data.json')
  .then(response => response.json())
  .then(data => {
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
  })
  .catch(error => {
    document.getElementById('map-container').textContent = "Error loading mindmap data.";
    console.error("Failed to load map data:", error);
  });
