/**
 * Link Cosmos - Nodes Data
 * Contains category nodes and relationships.
 */

const COSMOS_CATEGORIES = [
  { id: "cat-nebulae", name: "星云奇观", icon: "☁", desc: "宇宙中形态各异的发光气体云", color: "#9b59b6" },
  { id: "cat-stellar", name: "恒星诞生与演化", icon: "✦", desc: "从原恒星到超新星遗迹，探索恒星的一生", color: "#e74c3c" },
  { id: "cat-planet-formation", name: "行星起源", icon: "🌍", desc: "行星如何从原始星盘中诞生", color: "#1abc9c" },
  { id: "cat-galaxies", name: "星系宇宙", icon: "🌌", desc: "从螺旋星系到星系团的宏大结构", color: "#3498db" },
  { id: "cat-gravity", name: "引力时空", icon: "🌀", desc: "引力透镜、黑洞与时空弯曲", color: "#f39c12" },
  { id: "cat-solar-system", name: "太阳系世界", icon: "🪐", desc: "太阳、行星、卫星、小行星与彗星、地外文明搜寻", color: "#2ecc71" },
];

const COSMOS_LINKS = [
  // 中心到分类
  { source: "astronomy", target: "cat-stellar", type: "category" },
  { source: "astronomy", target: "cat-nebulae", type: "category" },
  { source: "astronomy", target: "cat-galaxies", type: "category" },
  { source: "astronomy", target: "cat-solar-system", type: "category" },
  { source: "astronomy", target: "cat-planet-formation", type: "category" },
  { source: "astronomy", target: "cat-gravity", type: "category" },

  // 分类到文章 - 恒星诞生与演化
  { source: "cat-stellar", target: "herbig-haro-24", type: "belongs" },
  { source: "cat-stellar", target: "ngc-6357", type: "belongs" },
  { source: "cat-stellar", target: "rho-ophiuchi", type: "belongs" },
  { source: "cat-stellar", target: "crab-pulsar", type: "belongs" },
  { source: "cat-stellar", target: "ngc-1898", type: "belongs" },

  // 星云奇观
  { source: "cat-nebulae", target: "horsehead", type: "belongs" },
  { source: "cat-nebulae", target: "ant-nebula", type: "belongs" },
  { source: "cat-nebulae", target: "rosette", type: "belongs" },
  { source: "cat-nebulae", target: "catspaw", type: "belongs" },
  { source: "cat-nebulae", target: "pillow", type: "belongs" },
  { source: "cat-nebulae", target: "ghost-head", type: "belongs" },
  { source: "cat-nebulae", target: "red-rectangle", type: "belongs" },
  { source: "cat-nebulae", target: "egg-nebula", type: "belongs" },
  { source: "cat-nebulae", target: "cg4", type: "belongs" },

  // 星系宇宙
  { source: "cat-galaxies", target: "ugc-1810", type: "belongs" },
  { source: "cat-galaxies", target: "ngc-3344", type: "belongs" },
  { source: "cat-galaxies", target: "ngc-1309", type: "belongs" },
  { source: "cat-galaxies", target: "pandora", type: "belongs" },
  { source: "cat-galaxies", target: "ngc-3370", type: "belongs" },
  { source: "cat-galaxies", target: "m104", type: "belongs" },
  { source: "cat-galaxies", target: "ic-5332", type: "belongs" },
  { source: "cat-galaxies", target: "ngc-1566", type: "belongs" },
  { source: "cat-galaxies", target: "ngc-2566", type: "belongs" },

  // 太阳系世界
  { source: "cat-solar-system", target: "enceladus", type: "belongs" },
  { source: "cat-solar-system", target: "callisto", type: "belongs" },
  { source: "cat-solar-system", target: "saturn-night", type: "belongs" },
  { source: "cat-solar-system", target: "saturn-rings", type: "belongs" },
  { source: "cat-solar-system", target: "titan", type: "belongs" },
  { source: "cat-solar-system", target: "jupiter-uv", type: "belongs" },
  { source: "cat-solar-system", target: "jupiter-juno", type: "belongs" },
  { source: "cat-solar-system", target: "jupiter-webb", type: "belongs" },
  { source: "cat-solar-system", target: "io", type: "belongs" },
  { source: "cat-solar-system", target: "phobos", type: "belongs" },
  { source: "cat-solar-system", target: "mars-leopard", type: "belongs" },
  { source: "cat-solar-system", target: "mars-face", type: "belongs" },
  { source: "cat-solar-system", target: "comet-67p", type: "belongs" },
  { source: "cat-solar-system", target: "ida-dactyl", type: "belongs" },
  { source: "cat-solar-system", target: "gigantic-jet", type: "belongs" },
  { source: "cat-solar-system", target: "solar-storm", type: "belongs" },
  { source: "cat-solar-system", target: "sunspots", type: "belongs" },
  { source: "cat-solar-system", target: "perseverance", type: "belongs" },
  { source: "cat-solar-system", target: "apollo-17", type: "belongs" },
  { source: "cat-solar-system", target: "zhurong", type: "belongs" },
  { source: "cat-solar-system", target: "arecibo", type: "belongs" },
  { source: "cat-solar-system", target: "earth-gravity", type: "belongs" },
  { source: "cat-solar-system", target: "deimos", type: "belongs" },
  { source: "cat-solar-system", target: "pluto", type: "belongs" },
  { source: "cat-solar-system", target: "pluto-flyover", type: "belongs" },

  // 行星起源
  { source: "cat-planet-formation", target: "pds-70", type: "belongs" },
  { source: "cat-planet-formation", target: "wispit-2b", type: "belongs" },
  { source: "cat-planet-formation", target: "iras-04302", type: "belongs" },

  // 引力时空
  { source: "cat-gravity", target: "supernova-requiem", type: "belongs" },
  { source: "cat-gravity", target: "einstein-ring", type: "belongs" },
  { source: "cat-gravity", target: "einstein-cross", type: "belongs" },
  

  // 跨文章关联 - 木星系统
  { source: "jupiter-uv", target: "jupiter-juno", type: "related" },
  { source: "jupiter-uv", target: "jupiter-webb", type: "related" },
  { source: "jupiter-juno", target: "jupiter-webb", type: "related" },
  { source: "jupiter-webb", target: "io", type: "related" },
  { source: "jupiter-webb", target: "callisto", type: "related" },
  { source: "io", target: "callisto", type: "related" },

  // 土星系统
  { source: "saturn-night", target: "saturn-rings", type: "related" },
  { source: "saturn-night", target: "titan", type: "related" },
  { source: "saturn-night", target: "enceladus", type: "related" },
  { source: "saturn-rings", target: "enceladus", type: "related" },
  { source: "enceladus", target: "titan", type: "related" },

  // 火星系统
  { source: "perseverance", target: "mars-leopard", type: "related" },
  { source: "perseverance", target: "zhurong", type: "related" },
  { source: "perseverance", target: "mars-face", type: "related" },
  { source: "mars-leopard", target: "zhurong", type: "related" },
  { source: "perseverance", target: "phobos", type: "related" },
  { source: "perseverance", target: "deimos", type: "related" },
  { source: "phobos", target: "deimos", type: "related" },

  // 冥王星
  { source: "pluto", target: "pluto-flyover", type: "related" },

  // 螺旋星系家族
  { source: "ngc-3344", target: "ngc-1309", type: "related" },
  { source: "ngc-3344", target: "ngc-3370", type: "related" },
  { source: "ngc-1309", target: "ngc-3370", type: "related" },
  { source: "ngc-3370", target: "m104", type: "related" },
  { source: "m104", target: "ic-5332", type: "related" },
  { source: "ic-5332", target: "ngc-1566", type: "related" },
  { source: "ngc-1566", target: "ugc-1810", type: "related" },
  { source: "ngc-1566", target: "ngc-2566", type: "related" },

  // 星云光谱
  { source: "horsehead", target: "rosette", type: "related" },
  { source: "rosette", target: "catspaw", type: "related" },
  { source: "catspaw", target: "ngc-6357", type: "related" },
  { source: "ant-nebula", target: "pillow", type: "related" },
  { source: "ant-nebula", target: "red-rectangle", type: "related" },
  { source: "red-rectangle", target: "egg-nebula", type: "related" },
  { source: "egg-nebula", target: "ghost-head", type: "related" },
  { source: "ghost-head", target: "cg4", type: "related" },

  // 引力透镜
  { source: "einstein-ring", target: "einstein-cross", type: "related" },
  { source: "einstein-ring", target: "supernova-requiem", type: "related" },
  { source: "einstein-cross", target: "pandora", type: "related" },
  { source: "supernova-requiem", target: "pandora", type: "related" },

  // 行星盘演化
  { source: "pds-70", target: "wispit-2b", type: "related" },
  { source: "wispit-2b", target: "iras-04302", type: "related" },
  { source: "iras-04302", target: "rho-ophiuchi", type: "related" },

  // 望远镜与人造天体
  { source: "jupiter-uv", target: "jupiter-webb", type: "related" },
  { source: "ic-5332", target: "rho-ophiuchi", type: "related" },
  { source: "crab-pulsar", target: "supernova-requiem", type: "related" },
  { source: "sunspots", target: "solar-storm", type: "related" }
];
