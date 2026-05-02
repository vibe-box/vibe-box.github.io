/**
 * Link Cosmos - D3.js Force-Directed Graph
 */

let simulation, svg, g, link, node, label, zoom;

const width = () => document.getElementById('graph-container').clientWidth;
const height = () => document.getElementById('graph-container').clientHeight;

const categoryColorMap = {};
COSMOS_CATEGORIES.forEach(c => categoryColorMap[c.id] = c.color);

function getTheme() {
  return document.documentElement.getAttribute('data-theme') || 'light';
}

function buildGraphData() {
  const nodes = [];
  const links = [];

  nodes.push({
    id: 'astronomy',
    name: '天文学',
    type: 'center',
    radius: 35,
    color: '#1e3a8a'
  });

  COSMOS_CATEGORIES.forEach(cat => {
    nodes.push({
      id: cat.id,
      name: cat.name,
      type: 'category',
      radius: 26,
      color: cat.color,
      desc: cat.desc
    });
  });

  COSMOS_ARTICLES.forEach(art => {
    nodes.push({
      id: art.id,
      name: art.title,
      type: 'article',
      radius: 14,
      color: categoryColorMap[art.category] || '#94a3b8',
      category: art.category,
      summary: art.summary,
      distance: art.distance,
      object: art.object,
      url: art.url
    });
  });

  COSMOS_LINKS.forEach(l => {
    links.push({ ...l });
  });

  return { nodes, links };
}

function initGraph() {
  const container = document.getElementById('graph-container');
  container.innerHTML = '<div class="graph-tooltip" id="tooltip"></div>';

  const w = width();
  const h = height();

  svg = d3.select('#graph-container')
    .append('svg')
    .attr('width', w)
    .attr('height', h)
    .attr('viewBox', [0, 0, w, h])
    .style('max-width', '100%')
    .style('height', '100%');

  g = svg.append('g');

  zoom = d3.zoom()
    .scaleExtent([0.2, 4])
    .on('zoom', (event) => {
      g.attr('transform', event.transform);
    });

  svg.call(zoom);

  const data = buildGraphData();
  render(data);
}

function render(data) {
  const w = width();
  const h = height();

  simulation = d3.forceSimulation(data.nodes)
    .force('link', d3.forceLink(data.links).id(d => d.id).distance(d => {
      if (d.type === 'category') return 120;
      if (d.type === 'related') return 90;
      return 60;
    }).strength(0.6))
    .force('charge', d3.forceManyBody().strength(d => {
      if (d.type === 'center') return -800;
      if (d.type === 'category') return -500;
      return -250;
    }))
    .force('center', d3.forceCenter(w / 2, h / 2))
    .force('collide', d3.forceCollide().radius(d => d.radius + 8).iterations(2));

  link = g.selectAll('.link')
    .data(data.links)
    .enter().append('line')
    .attr('class', 'link-line')
    .attr('stroke', d => {
      if (d.type === 'category') return getTheme() === 'dark' ? '#475569' : '#cbd5e1';
      return getTheme() === 'dark' ? '#64748b' : '#94a3b8';
    })
    .attr('stroke-width', d => d.type === 'category' ? 2.5 : 1.5)
    .attr('stroke-dasharray', d => d.type === 'related' ? '5,5' : 'none');

  node = g.selectAll('.node')
    .data(data.nodes)
    .enter().append('circle')
    .attr('class', 'node-circle')
    .attr('r', d => d.radius)
    .attr('fill', d => d.color)
    .attr('stroke', d => {
      if (d.type === 'center') return '#fbbf24';
      return getTheme() === 'dark' ? '#e2e8f0' : '#fff';
    })
    .attr('stroke-width', d => d.type === 'center' ? 3 : 2)
    .call(d3.drag()
      .on('start', dragstarted)
      .on('drag', dragged)
      .on('end', dragended));

  label = g.selectAll('.label')
    .data(data.nodes)
    .enter().append('text')
    .attr('class', 'node-label')
    .text(d => d.type === 'article' && d.name.length > 12 ? d.name.substring(0, 12) + '...' : d.name)
    .attr('text-anchor', 'middle')
    .attr('dy', d => d.radius + 14)
    .style('opacity', d => d.type === 'article' ? 0.85 : 1)
    .style('font-weight', d => d.type === 'center' || d.type === 'category' ? '700' : '400')
    .style('font-size', d => d.type === 'center' ? '14px' : (d.type === 'category' ? '12px' : '10px'));

  node.on('mouseover', (event, d) => {
    const tooltip = document.getElementById('tooltip');
    const container = document.getElementById('graph-container');
    const rect = container.getBoundingClientRect();
    tooltip.style.opacity = '1';
    tooltip.style.left = (event.clientX - rect.left + 12) + 'px';
    tooltip.style.top = (event.clientY - rect.top - 12) + 'px';
    if (d.type === 'article') {
      tooltip.innerHTML = `<strong>${d.name}</strong><br/><span style="color:var(--text-muted)">${d.summary}</span>`;
    } else if (d.type === 'category') {
      tooltip.innerHTML = `<strong>${d.name}</strong><br/><span style="color:var(--text-muted)">${d.desc || ''}</span>`;
    } else {
      tooltip.innerHTML = `<strong>${d.name}</strong><br/><span style="color:var(--text-muted)">宇宙知识网络中心</span>`;
    }
  })
  .on('mouseout', () => {
    document.getElementById('tooltip').style.opacity = '0';
  })
  .on('click', (event, d) => {
    if (d.type === 'article') {
      showArticleModal(d);
    }
  });

  simulation.on('tick', () => {
    link
      .attr('x1', d => d.source.x)
      .attr('y1', d => d.source.y)
      .attr('x2', d => d.target.x)
      .attr('y2', d => d.target.y);

    node
      .attr('cx', d => d.x)
      .attr('cy', d => d.y);

    label
      .attr('x', d => d.x)
      .attr('y', d => d.y);
  });
}

function dragstarted(event, d) {
  if (!event.active) simulation.alphaTarget(0.3).restart();
  d.fx = d.x;
  d.fy = d.y;
}

function dragged(event, d) {
  d.fx = event.x;
  d.fy = event.y;
}

function dragended(event, d) {
  if (!event.active) simulation.alphaTarget(0);
  d.fx = null;
  d.fy = null;
}

function showArticleModal(d) {
  document.getElementById('modalTitle').innerHTML = `<a href="${d.url}" target="_blank" style="color: inherit; text-decoration: solid underline var(--accent-blue) 4px;">${d.name}</a>`;
  document.getElementById('modalSummary').textContent = d.summary;
  document.getElementById('modalCategory').textContent = COSMOS_CATEGORIES.find(c => c.id === d.category)?.name || d.category;
  document.getElementById('modalDistance').textContent = '距离: ' + d.distance;
  document.getElementById('modalObject').textContent = d.object;
  const modal = new bootstrap.Modal(document.getElementById('articleModal'));
  modal.show();
}

function updateColors() {
  const dark = getTheme() === 'dark';
  link.attr('stroke', d => {
    if (d.type === 'category') return dark ? '#475569' : '#cbd5e1';
    return dark ? '#64748b' : '#94a3b8';
  });
  node.attr('stroke', d => {
    if (d.type === 'center') return '#fbbf24';
    return dark ? '#e2e8f0' : '#fff';
  });
  label.attr('fill', dark ? '#f1f5f9' : '#1a202c');
}

// Theme toggle
function toggleTheme() {
  const html = document.documentElement;
  const current = html.getAttribute('data-theme') || 'light';
  const next = current === 'light' ? 'dark' : 'light';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);

  document.getElementById('themeIcon').textContent = next === 'dark' ? '☀' : '🌙';
  const themeText = document.getElementById('themeText');
  if (themeText) themeText.textContent = next === 'dark' ? '亮色' : '暗色';

  updateColors();
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  document.getElementById('themeIcon').textContent = theme === 'dark' ? '☀' : '🌙';
  const themeText = document.getElementById('themeText');
  if (themeText) themeText.textContent = theme === 'dark' ? '亮色' : '暗色';
  if (link && node && label) {
    updateColors();
  }
}

// Init
window.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('theme');
  if (saved) {
    applyTheme(saved);
  }
  initGraph();
});

window.addEventListener('storage', (e) => {
  if (e.key === 'theme') {
    applyTheme(e.newValue || 'light');
  }
});

window.addEventListener('resize', () => {
  if (svg) {
    const w = width();
    const h = height();
    svg.attr('width', w).attr('height', h).attr('viewBox', [0, 0, w, h]);
    simulation.force('center', d3.forceCenter(w / 2, h / 2));
    simulation.alpha(0.3).restart();
  }
});
