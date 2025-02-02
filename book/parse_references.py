<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>D3.js Dynamic Graph from References</title>
  <style>
    body {
      margin: 0;
      overflow: hidden;
      font-family: Helvetica, sans-serif;
    }
    svg {
      position: absolute;
      top: 0;
      left: 0;
    }
    .link { stroke: #999; stroke-opacity: 0.6; stroke-width: 2px; }
    .node { cursor: pointer; stroke: #fff; stroke-width: 1.5px; }
    .label { font-size: 12px; pointer-events: none; }
  </style>
</head>
<body>

<svg id="graph"></svg>

<script src="https://d3js.org/d3.v7.min.js"></script>
<script>
  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
  const aspect = 2;
  const width = vw / aspect < vh ? vw : vh * aspect;
  const height = vw / aspect < vh ? vw / aspect : vh;

  const svg = d3.select("#graph").attr("width", width).attr("height", height);
  const gContainer = svg.append("g");

  // Capitalize the first letter of each word
  function capitalizeWords(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
  }

  // Extract the title from the filename
  function extractTitle(filename) {
    return capitalizeWords(filename.replace('.md', '').replace(/_/g, ' '));
  }

  // Fetch and parse references.txt
  fetch('https://maxramgraber.github.io/MASTER/main/references.txt')
    .then(response => response.text())
    .then(data => {
      const lines = data.trim().split('\n');
      const nodesMap = new Map();
      const links = [];

      lines.forEach(line => {
        const [sourceFile, , targetPart] = line.match(/^(.*?) -> \[text: '(.*?)'\] \[target: '(.*?)'\]$/).slice(1);

        // Create nodes if they don't exist
        if (!nodesMap.has(sourceFile)) {
          nodesMap.set(sourceFile, { id: sourceFile, text: extractTitle(sourceFile), link: `https://maxramgraber.github.io/MASTER/main/pages/${sourceFile.replace('.md', '.html')}` });
        }
        if (!nodesMap.has(targetPart + '.md')) {
          nodesMap.set(targetPart + '.md', { id: targetPart + '.md', text: extractTitle(targetPart), link: `https://maxramgraber.github.io/MASTER/main/pages/${targetPart}.html` });
        }

        // Add link
        links.push({ source: sourceFile, target: targetPart + '.md' });
      });

      const nodes = Array.from(nodesMap.values());

      // Initialize simulation
      const simulation = d3.forceSimulation(nodes)
        .force("link", d3.forceLink(links).id(d => d.id).distance(150))
        .force("charge", d3.forceManyBody().strength(-300))
        .force("center", d3.forceCenter(width / 2, height / 2))
        .on("tick", ticked);

      // Draw links
      const link = gContainer.selectAll(".link")
        .data(links)
        .enter()
        .append("line")
        .attr("class", "link");

      // Draw nodes
      const node = gContainer.selectAll(".node")
        .data(nodes)
        .enter()
        .append("circle")
        .attr("class", "node")
        .attr("r", 20)
        .style("fill", (d, i) => d3.schemeTableau10[i % 10])
        .call(d3.drag()
          .on("start", dragStarted)
          .on("drag", dragged)
          .on("end", dragEnded))
        .on("click", (event, d) => {
          if (d.link) window.open(d.link, "_blank");
        });

      // Draw labels
      const label = gContainer.selectAll(".label")
        .data(nodes)
        .enter()
        .append("text")
        .attr("class", "label")
        .attr("text-anchor", "middle")
        .attr("dy", -25)
        .text(d => d.text);

      function ticked() {
        link.attr("x1", d => d.source.x)
            .attr("y1", d => d.source.y)
            .attr("x2", d => d.target.x)
            .attr("y2", d => d.target.y);

        node.attr("cx", d => d.x)
            .attr("cy", d => d.y);

        label.attr("x", d => d.x)
             .attr("y", d => d.y);
      }

      function dragStarted(event, d) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
      }

      function dragged(event, d) {
        d.fx = event.x;
        d.fy = event.y;
      }

      function dragEnded(event, d) {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
      }

      // Zoom and pan
      svg.call(d3.zoom()
        .extent([[0, 0], [width, height]])
        .scaleExtent([0.5, 5])
        .on("zoom", (event) => gContainer.attr("transform", event.transform))
      );
    })
    .catch(err => console.error('Failed to load references:', err));
</script>

</body>
</html>
