/**
 * Link Cosmos - Articles & Questions Data
 * Contains article nodes with embedded questions.
 */

const COSMOS_ARTICLES = [
  {
    "id": "pluto",
    "category": "cat-solar-system",
    "title": "冥王星上的苍茫暮色",
    "url": "https://mp.weixin.qq.com/s/_ewumcvKjNt0lEWu3Z1JFw",
    "distance": "39 AU",
    "object": "冥王星",
    "summary": "经过九年多的飞行，跨越五十多亿公里的黑暗深空，新视野号于2015年7月14日近距离掠过这颗曾经被称为“第九大行星”的遥远世界，然后从约18000公里外回往看到的冥王星苍茫的暮色。",
    "questions": [
      {
        "question": "冥王星大气中不包含哪种气体？",
        "options": [
          "氮气",
          "一氧化碳",
          "甲烷",
          "氧气"
        ],
        "correct": 3
      }
    ]
  },
  {
    "id": "pluto-flyover",
    "category": "cat-solar-system",
    "title": "新视野号带你飞越冥王星",
    "url": "https://mp.weixin.qq.com/s/jkgI83SbNBIa_Onvg4rdDQ",
    "distance": "39 AU",
    "object": "冥王星",
    "summary": "经过九年多的飞行，跨越五十多亿公里的黑暗深空，新视野号于2015年7月14日近距离掠过这颗曾经被称为“第九大行星”的遥远世界。",
    "questions": [
      {
        "question": "冥王星被称为什么天体？",
        "options": [
          "小行星",
          "卫星",
          "行星",
          "矮行星"
        ],
        "correct": 3
      }
    ]
  },
  {
    "id": "deimos",
    "category": "cat-solar-system",
    "title": "火星的黎明与黎明中的火卫二",
    "url": "https://mp.weixin.qq.com/s/nSyxOMdlOiIIv6BS734PUg",
    "distance": "火星系统",
    "object": "火卫二",
    "summary": "毅力号拍摄到的火星黎明，以及黎明中的火卫二。",
    "questions": [
      {
        "question": "火卫二绕火星一圈需要多长时间？",
        "options": [
          "10 小时 18 分钟",
          "20 小时 18 分钟",
          "30 小时 18 分钟",
          "40 小时 18 分钟"
        ],
        "correct": 3
      },
      {
        "question": "火星有多少颗卫星？",
        "options": [
          "1",
          "2",
          "3",
          "4"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "ngc-2566",
    "category": "cat-galaxies",
    "title": "这个星系有点怪",
    "url": "https://mp.weixin.qq.com/s/QaPFebXiHfYlnR1L-KA5NQ",
    "distance": "7600万光年",
    "object": "NGC 2566",
    "summary": "一个像字母“Q”的棒旋星系。",
    "questions": [
      {
        "question": "螺旋星系与棒旋星系的主要区别在于下列哪种结构？",
        "options": [
          "旋臂",
          "星团和恒星形成区",
          "核球",
          "棒状结构"
        ],
        "correct": 3
      },
      {
        "question": "哈勃空间望远镜在观测亮源时产生的衍射尖峰有几个尖刺状光芒？",
        "options": [
          "2",
          "4",
          "6",
          "8"
        ],
        "correct": 1
      },
      {
        "question": "韦布空间望远镜在观测亮源时产生的衍射尖峰有什么特征？",
        "options": [
          "4个尖锐的光芒",
          "4个尖锐的光芒加2个相对弱的光芒",
          "6个尖锐的光芒",
          "6个尖锐的光芒加2个相对弱的光芒"
        ],
        "correct": 3
      }
    ]
  },
  {
    "id": "herbig-haro-24",
    "category": "cat-stellar",
    "title": "Herbig-Haro 天体：“宇宙光剑”的制造者",
    "url": "https://mp.weixin.qq.com/s/KSHv1PG_k9LTfiAkwrEpUg",
    "distance": "1300光年",
    "object": "HH 24",
    "summary": "猎户座 B 分子云中的原恒星喷流，像绝地武士的光剑般贯穿星际介质。",
    "questions": [
      {
        "question": "Herbig-Haro 24 中的\"宇宙光剑\"本质上是什么？",
        "options": [
          "黑洞喷流",
          "原恒星沿自转轴喷出的高速气体流",
          "超新星爆发的冲击波",
          "星系碰撞产生的碎片"
        ],
        "correct": 1
      },
      {
        "question": "Herbig-Haro 天体的中心引擎是什么？",
        "options": [
          "黑洞",
          "中子星",
          "年轻恒星",
          "年老恒星"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": "ngc-6357",
    "category": "cat-stellar",
    "title": "NGC 6357：恒星巨人们的哥特教堂",
    "url": "https://mp.weixin.qq.com/s/rX6mnqDeoUV_JCcWtfsf-w",
    "distance": "5500光年",
    "object": "NGC 6357",
    "summary": "韦布与哈勃联手拍摄的恒星育婴室，包含质量达太阳200倍的巨型恒星。",
    "questions": [
      {
        "question": "NGC 6357 发射星云中 Pismis 24 星团最亮恒星的质量约为太阳的多少倍？",
        "options": [
          "50倍",
          "100倍",
          "200倍",
          "500倍"
        ],
        "correct": 2
      },
      {
        "question": "恒星的质量一般在什么范围内？",
        "options": [
          "1至100个太阳质量之间",
          "0.1至100个太阳质量之间",
          "0.5至150个太阳质量之间",
          "0.05至150个太阳质量之间"
        ],
        "correct": 3
      }
    ]
  },
  {
    "id": "rho-ophiuchi",
    "category": "cat-stellar",
    "title": "恒星诞生的摇篮：韦布镜头下的蛇夫座 ρ 星云",
    "url": "https://mp.weixin.qq.com/s/BHsV6AM7_sQ-7qIGyOlPgQ",
    "distance": "390光年",
    "object": "蛇夫座ρ分子云团",
    "summary": "距离地球仅390光年的最近恒星形成区之一，约50颗年轻恒星正在这里诞生。",
    "questions": [
      {
        "question": "蛇夫座 ρ 星云是距离地球多远的恒星形成区？",
        "options": [
          "390光年",
          "1300光年",
          "1500光年",
          "5500光年"
        ],
        "correct": 0
      },
      {
        "question": "恒星是在哪里诞生的？",
        "options": [
          "行星状星云中",
          "球状星团中",
          "分子云中",
          "超新星遗迹中"
        ],
        "correct": 2
      },
      {
        "question": "韦布望远镜围绕哪个拉格朗日点运行？",
        "options": [
          "L1",
          "L2",
          "L3",
          "L4"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "crab-pulsar",
    "category": "cat-stellar",
    "title": "星际灯塔脉冲星",
    "url": "https://mp.weixin.qq.com/s/d_0cg5tkvVpvFITCkxFRXw",
    "distance": "6500光年",
    "object": "蟹状星云",
    "summary": "公元1054年在金牛座方向的一次超新星爆发，遗留下来的超新星遗迹，中心为一颗脉冲星，每秒自转约30圈。",
    "questions": [
      {
        "question": "蟹状星云脉冲星每秒大约自转多少圈？",
        "options": [
          "10圈",
          "20圈",
          "30圈",
          "60圈"
        ],
        "correct": 2
      },
      {
        "question": "蟹状星云的超新星爆发在地球上被记录于哪一年？",
        "options": [
          "公元854年",
          "公元1054年",
          "公元1254年",
          "公元1454年"
        ],
        "correct": 1
      },
      {
        "question": "蟹状星云脉冲星属于哪种天体？",
        "options": [
          "白矮星",
          "中子星",
          "黑洞",
          "褐矮星"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "ngc-1898",
    "category": "cat-stellar",
    "title": "大麦哲伦星云中的“星光珠宝盒”：球状星团 NGC 1898",
    "url": "https://mp.weixin.qq.com/s/8uRrBnNQebt2rljYHdEgkw",
    "distance": "16万光年",
    "object": "NGC 1898",
    "summary": "位于大麦哲伦星云中央棒状结构中的古老球状星团，距离地球约16万光年。",
    "questions": [
      {
        "question": "球状星团 NGC 1898 位于哪个星系中？",
        "options": [
          "银河系",
          "仙女座星系",
          "大麦哲伦星云",
          "小麦哲伦星云"
        ],
        "correct": 2
      },
      {
        "question": "恒星的颜色代表了恒星的什么属性？",
        "options": [
          "大小",
          "表面温度",
          "质量",
          "距离"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "horsehead",
    "category": "cat-nebulae",
    "title": "来自 1500 光年外的祝福：马头星云",
    "url": "https://mp.weixin.qq.com/s/cbdjSQBfr-KmLz_6VAgyDQ",
    "distance": "1500光年",
    "object": "马头星云",
    "summary": "猎户座中著名的暗分子云，被背后恒星的星光映衬出骏马头部的轮廓。",
    "questions": [
      {
        "question": "马头星云位于哪个星座？",
        "options": [
          "猎户座",
          "天蝎座",
          "麒麟座",
          "天鹅座"
        ],
        "correct": 0
      },
      {
        "question": "马头星云主要是由什么构成？",
        "options": [
          "电离氢",
          "暗分子云",
          "星际尘埃",
          "暗能量"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "ant-nebula",
    "category": "cat-nebulae",
    "title": "一个像蚂蚁的行星状星云",
    "url": "https://mp.weixin.qq.com/s/ffM8YPB0b98vQSUNY-NXZw",
    "distance": "约8000光年",
    "object": "Mz3",
    "summary": "中心为类太阳的恒星以每秒1000公里的速度抛出气体，雕刻成奇异的蚂蚁形状。",
    "questions": [
      {
        "question": "蚂蚁星云中心恒星抛出的气体速度高达多少？",
        "options": [
          "每秒100公里",
          "每秒500公里",
          "每秒1000公里",
          "每秒5000公里"
        ],
        "correct": 2
      },
      {
        "question": "关于蚂蚁星云形状的成因，以下哪种是科学家的猜测？",
        "options": [
          "由伴星引起的",
          "由恒星自转和磁场引起",
          "由伴星或恒星自转与磁场引起的",
          "由超新星爆发引起的"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": "rosette",
    "category": "cat-nebulae",
    "title": "美丽的玫瑰星云",
    "url": "https://mp.weixin.qq.com/s/3kDXoSdKDC9yk2Fhl2WbEg",
    "distance": "5000光年",
    "object": "NGC 2237",
    "summary": "麒麟座中直径100光年的宇宙玫瑰，由年轻恒星的紫外辐射激发氢气发光。",
    "questions": [
      {
        "question": "玫瑰星云的直径约为多少？",
        "options": [
          "1光年",
          "10光年",
          "100光年",
          "1000光年"
        ],
        "correct": 2
      },
      {
        "question": "玫瑰星云是一种什么天体？",
        "options": [
          "行星状星云",
          "发射星云",
          "暗分子云",
          "超新星遗迹"
        ],
        "correct": 1
      },
      {
        "question": "玫瑰星云中标志性的红色主要来自什么？",
        "options": [
          "电离氧",
          "电离氮",
          "电离氢",
          "尘埃反射"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": "catspaw",
    "category": "cat-nebulae",
    "title": "猫爪，熊爪，三叶草，指尖陀螺？",
    "url": "https://mp.weixin.qq.com/s/Z753sTKyHFV_Mbx4zV5Yyg",
    "distance": "5700光年",
    "object": "NGC 6334",
    "summary": "天蝎座方向的巨型发射星云NGC 6334，韦布红外望远镜下的恒星孵化场。",
    "questions": [
      {
        "question": "猫爪星云（NGC 6334）位于哪个星座方向？",
        "options": [
          "猎户座",
          "天蝎座",
          "麒麟座",
          "船尾座"
        ],
        "correct": 1
      },
      {
        "question": "为什么韦布望远镜使用红外波段观测猫爪星云？",
        "options": [
          "红外分辨率更高",
          "红外能穿透尘埃迷雾",
          "星云只发射红外光",
          "红外望远镜更便宜"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "pillow",
    "category": "cat-nebulae",
    "title": "谁把自己的枕头扔到了宇宙中",
    "url": "https://mp.weixin.qq.com/s/jD6IpAclahI6euZ7Z4dMyQ",
    "distance": "3000光年",
    "object": "NGC 7027",
    "summary": "约600年前开始膨胀的奇特行星状星云，拥有四角结构和层层壳层。",
    "questions": [
      {
        "question": "枕头星云 NGC 7027 大约在多久前开始膨胀？",
        "options": [
          "60年",
          "600年",
          "6000年",
          "6万年"
        ],
        "correct": 1
      },
      {
        "question": "枕头星云的中心引擎可能是什么？",
        "options": [
          "一颗恒星",
          "一对双星",
          "一颗中子星",
          "一个黑洞"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "ghost-head",
    "category": "cat-nebulae",
    "title": "太上老君的炼丹炉：哈勃镜头下的NGC 2080",
    "url": "https://mp.weixin.qq.com/s/nKhAxyJT6yz4wN8GDMHNKA",
    "distance": "16万光年",
    "object": "NGC 2080",
    "summary": "大麦哲伦星系中的恒星形成区，因形似鬼头而得名，展示了伪彩色成像原理。",
    "questions": [
      {
        "question": "鬼头星云 NGC 2080 位于哪个星系中？",
        "options": [
          "银河系",
          "仙女座星系",
          "大麦哲伦星系",
          "小麦哲伦星系"
        ],
        "correct": 2
      },
      {
        "question": "NGC 2080 图像中的白色部分代表什么？",
        "options": [
          "温度较低的区域",
          "氢和氧都被电离且温度更高",
          "只有氧被电离",
          "只有尘埃反射"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "red-rectangle",
    "category": "cat-nebulae",
    "title": "哈勃望远镜下的红方块星云",
    "url": "https://mp.weixin.qq.com/s/k0PRGrY_zJ-r-Z-fRUlGHg",
    "distance": "2300光年",
    "object": "红方块星云",
    "summary": "中心双星系统被尘埃环收紧成锥形，侧面看去呈现奇特的X形方块。",
    "questions": [
      {
        "question": "红方块星云中心是什么类型的恒星系统？",
        "options": [
          "单星",
          "双星系统",
          "三星系统",
          "星团"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "egg-nebula",
    "category": "cat-nebulae",
    "title": "小荷才露尖尖角，早有蜻蜓立上头",
    "url": "https://mp.weixin.qq.com/s/5NkefhelN18-p8IaTlyrow",
    "distance": "约3000光年",
    "object": "Egg Nebula",
    "summary": "处于原行星状星云阶段的Egg Nebula，双极喷流在球壳上投下蜻蜓般的阴影。",
    "questions": [
      {
        "question": "Egg Nebula 处于恒星演化的哪个阶段？",
        "options": [
          "主序星",
          "原行星状星云",
          "行星状星云",
          "超新星遗迹"
        ],
        "correct": 1
      },
      {
        "question": "Egg Nebula 中心恒星与太阳有什么相似之处？",
        "options": [
          "质量相同",
          "光谱型相近",
          "年龄相同",
          "亮度相同"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "cg4",
    "category": "cat-nebulae",
    "title": "即将要“吞食”星系的“宇宙沙虫”",
    "url": "https://mp.weixin.qq.com/s/D9x-FKi31LBavbMHXHg9pg",
    "distance": "1300光年",
    "object": "彗星状球状分子云 CG 4",
    "summary": "船尾座方向的彗星状球状分子云CG 4，由附近超新星遗迹的冲击波塑形。",
    "questions": [
      {
        "question": "彗星状球状分子云 CG 4 的组成成分中最多的是哪种物质？",
        "options": [
          "氢原子",
          "氢分子",
          "氧原子",
          "氧分子"
        ],
        "correct": 1
      },
      {
        "question": "彗星状球状分子云 CG 4 的\"尾部\"指向哪个超新星遗迹？",
        "options": [
          "蟹状星云",
          "船帆座超新星遗迹",
          "SN 1987A",
          "开普勒超新星遗迹"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "ugc-1810",
    "category": "cat-galaxies",
    "title": "一场持续了上亿年的星系战争",
    "url": "https://mp.weixin.qq.com/s/z9TLnRqSw4GAqC7TQTO7Fw",
    "distance": "3亿光年",
    "object": "UGC 1810",
    "summary": "Arp 273中两个星系在引力作用下扭曲变形，最终将合并为一个星系。",
    "questions": [
      {
        "question": "关于星系并和，下列说法正确的是哪个？",
        "options": [
          "星系并和主要通过引力进行相互作用",
          "正在并和的两个星系沿直线碰撞并融合为一个星系",
          "星系在并和的过程中会抑制恒星的形成",
          "星系在并和的过程中会保持自身的形状不变"
        ],
        "correct": 0
      },
      {
        "question": "Arp 273中正在并和的两个星系发生在距离我们多远的地方？",
        "options": [
          "3000万光年",
          "3亿光年",
          "30亿光年",
          "300亿光年"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "ngc-3344",
    "category": "cat-galaxies",
    "title": "螺旋星系的标准证件照：NGC 3344",
    "url": "https://mp.weixin.qq.com/s/eViA57KTnZ2u4j2T_R9eHw",
    "distance": "2000万光年",
    "object": "NGC 3344",
    "summary": "正面朝向我们的美丽螺旋星系，展示了从中心老年恒星到旋臂年轻恒星的色彩梯度。",
    "questions": [
      {
        "question": "以下不是螺旋星系 NGC 3344 的组成部分的是？",
        "options": [
          "由老年恒星主导的核球",
          "恒星形成区",
          "年轻的星团",
          "棒状结构"
        ],
        "correct": 3
      },
      {
        "question": "以下说法错误的是？",
        "options": [
          "近红外观测更容易穿透尘埃、追踪年轻的恒星",
          "可见光观测可以展示星系的整体形态",
          "紫外波段观测可以突出年轻的高温恒星",
          "射电波段观测可以展示星系的延展结构"
        ],
        "correct": 0
      }
    ]
  },
  {
    "id": "ngc-1309",
    "category": "cat-galaxies",
    "title": "NGC 1309：不只是“高颜值星系”，还是宇宙距离的校准员",
    "url": "https://mp.weixin.qq.com/s/mIJZF4qAreNzi9G619cF3Q",
    "distance": "1亿光年",
    "object": "NGC 1309",
    "summary": "拥有造父变星和超新星的螺旋星系，帮助天文学家校准宇宙距离阶梯。",
    "questions": [
      {
        "question": "螺旋星系 NGC 1309 中用于校准宇宙距离的\"标准烛光\"是什么？",
        "options": [
          "造父变星",
          "RR型变星",
          "脉冲星",
          "白矮星"
        ],
        "correct": 0
      },
      {
        "question": "螺旋星系 NGC 1309 的直径约为银河系的多少？",
        "options": [
          "三分之一",
          "三分之二",
          "相同",
          "两倍"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "pandora",
    "category": "cat-galaxies",
    "title": "潘多拉星系团：宇宙的魔盒，扭曲的时空",
    "url": "https://mp.weixin.qq.com/s/TazhaqEEBBdTJMUzWAtwrw",
    "distance": "35亿光年",
    "object": "Abell 2744",
    "summary": "由三个星系团合并而成的Abell 2744，其暗物质扭曲时空形成引力透镜。",
    "questions": [
      {
        "question": "潘多拉星系团（Abell 2744）由几个星系团合并而成？",
        "options": [
          "两个",
          "三个",
          "四个",
          "五个"
        ],
        "correct": 1
      },
      {
        "question": "潘多拉星系团距离我们约多远？",
        "options": [
          "3.5亿光年",
          "35亿光年",
          "350亿光年",
          "3500万光年"
        ],
        "correct": 1
      },
      {
        "question": "潘多拉星系团中发红且呈弧形的星系是什么效应造成的？",
        "options": [
          "多普勒效应",
          "星际消光",
          "宇宙膨胀",
          "引力透镜效应"
        ],
        "correct": 3
      }
    ]
  },
  {
    "id": "ngc-3370",
    "category": "cat-galaxies",
    "title": "银河系的“自画像”？哈勃视角下的螺旋星系 NGC 3370",
    "url": "https://mp.weixin.qq.com/s/l3e_S0eAVcMA32HXRfkXXA",
    "distance": "1亿光年",
    "object": "NGC 3370",
    "summary": "大小和结构与银河系高度相似的正面螺旋星系，拥有清晰的造父变星。",
    "questions": [
      {
        "question": "NGC 3370 与银河系相比缺少什么结构？",
        "options": [
          "旋臂",
          "尘埃带",
          "核球",
          "中心棒状结构"
        ],
        "correct": 3
      },
      {
        "question": "1994年 NGC 3370 中曾爆发过哪种类型的超新星？",
        "options": [
          "Ia型超新星",
          "Ib型超新星",
          "Ic型超新星",
          "II型超新星"
        ],
        "correct": 0
      }
    ]
  },
  {
    "id": "m104",
    "category": "cat-galaxies",
    "title": "M104：红外下的草帽星系",
    "url": "https://mp.weixin.qq.com/s/j1SR44RVhHFMhqVZDK6NSg",
    "distance": "2800万光年",
    "object": "M104",
    "summary": "斯皮策红外望远镜揭示草帽星系尘埃带的炽热辉光，距离地球2800万光年。",
    "questions": [
      {
        "question": "草帽星系 M104 属于哪个星系团？",
        "options": [
          "室女座星系团",
          "后发座星系团",
          "富尔诺斯星系团",
          "英仙座星系团"
        ],
        "correct": 0
      },
      {
        "question": "在红外图像中，草帽星系的暗尘带示踪的是什么物质？",
        "options": [
          "恒星",
          "气体",
          "尘埃",
          "星云"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": "ic-5332",
    "category": "cat-galaxies",
    "title": "螺旋星系 IC 5332 的“双面人生”",
    "url": "https://mp.weixin.qq.com/s/rtFhDZjxxYf70azeYJnRHA",
    "distance": "约3000万光年",
    "object": "IC 5332",
    "summary": "可见光与红外波段的对比展示了恒星与星际尘埃的不同分布。",
    "questions": [
      {
        "question": "韦布望远镜观测 IC 5332 使用的是哪个波段？",
        "options": [
          "可见光",
          "紫外线",
          "中红外",
          "X射线"
        ],
        "correct": 2
      },
      {
        "question": "韦布图像中发光的是星系中的什么成分？",
        "options": [
          "恒星",
          "星际尘埃",
          "暗物质",
          "黑洞"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "ngc-1566",
    "category": "cat-galaxies",
    "title": "NGC 1566，一个在宇宙中旋转的舞者",
    "url": "https://mp.weixin.qq.com/s/miBT1QJQMDb-9pgxhZNMiw",
    "distance": "4000万光年",
    "object": "NGC 1566",
    "summary": "拥有优雅旋臂和明亮赛弗特核心的螺旋星系，距地球4000万光年。",
    "questions": [
      {
        "question": "NGC 1566 属于哪种类型的活跃星系？",
        "options": [
          "射电星系",
          "类星体",
          "耀变体",
          "赛弗特星系",
        ],
        "correct": 3
      },
      {
        "question": "NGC 1566 有几条主旋臂？",
        "options": [
          "一条",
          "两条",
          "三条",
          "四条"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "enceladus",
    "category": "cat-solar-system",
    "title": "土卫二的生命之谜",
    "url": "https://mp.weixin.qq.com/s/lKMAh8El_WyOG_Ihcaj0pg",
    "distance": "土星系统",
    "object": "土卫二",
    "summary": "土星的卫星恩克拉多斯（土卫二）南极裂缝喷射冰粒，内部全球性海洋可能存在生命。",
    "questions": [
      {
        "question": "土卫二（恩克拉多斯）南极裂缝喷射的主要物质是什么？",
        "options": [
          "熔岩",
          "沙尘",
          "甲烷气体",
          "冰粒和水蒸气",
        ],
        "correct": 3
      },
      {
        "question": "卡西尼号在土卫二喷射物中发现了什么，增强了生命可能？",
        "options": [
          "液态水",
          "微生物",
          "氧气",
          "复杂有机分子",
        ],
        "correct": 3
      },
      {
        "question": "土卫二表面的裂缝是由什么造成的？",
        "options": [
          "土星的潮汐力",
          "板块移动",
          "太空小天体的撞击",
          "内部的地质活动"
        ],
        "correct": 3
      }
    ]
  },
  {
    "id": "callisto",
    "category": "cat-solar-system",
    "title": "满身伤痕的“脏冰球”，却可能藏着液态海洋",
    "url": "https://mp.weixin.qq.com/s/xlAJ45v8DsmVD620PmVWUA",
    "distance": "木星系统",
    "object": "木卫四",
    "summary": "木卫四（卡利斯托）表面陨石坑密布，但冰层下可能存在地下海洋。",
    "questions": [
      {
        "question": "木卫四（卡利斯托）的大小接近哪颗行星？",
        "options": [
          "水星",
          "金星",
          "火星",
          "冥王星"
        ],
        "correct": 0
      },
      {
        "question": "卡利斯托是木星的第几颗伽利略卫星？",
        "options": [
          "第一（木卫一）",
          "第二（木卫二）",
          "第三（木卫三）",
          "第四（木卫四）"
        ],
        "correct": 3
      },
      {
        "question": "哪艘探测器于1979年首次拍摄到木卫四（卡利斯托）的经典画面？",
        "options": [
          "伽利略号",
          "朱诺号",
          "卡西尼号",
          "旅行者2号"
        ],
        "correct": 3
      }
    ]
  },
  {
    "id": "saturn-night",
    "category": "cat-solar-system",
    "title": "土星的夜晚：卡西尼的最后凝望",
    "url": "https://mp.weixin.qq.com/s/_GZfA1KUTbbYHbGU7_l1cw",
    "distance": "土星系统",
    "object": "土星",
    "summary": "卡西尼号在任务结束前两天拍摄的夜色土星，光环只剩一道纤细弯月。",
    "questions": [
      {
        "question": "\"土星之夜\"是由哪艘探测器拍摄的？",
        "options": [
          "旅行者1号",
          "旅行者2号",
          "朱诺号",
          "卡西尼号",
        ],
        "correct": 3
      },
      {
        "question": "卡西尼号在土星轨道运行了多少年？",
        "options": [
          "3年",
          "7年",
          "13年",
          "23年"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": "saturn-rings",
    "category": "cat-solar-system",
    "title": "消失的它：当土星环变成一面“刀锋”",
    "url": "https://mp.weixin.qq.com/s/fU19uHWljc74WOjkpnEuWQ",
    "distance": "土星系统",
    "object": "土星环",
    "summary": "卡西尼号拍摄的土星环侧视图，展示了环的极端扁平结构。",
    "questions": [
      {
        "question": "土星环的平均厚度大约是多少？",
        "options": [
          "约10米到1公里",
          "约100公里",
          "约1000公里",
          "约1万公里"
        ],
        "correct": 0
      },
      {
        "question": "1612年伽利略观测土星时，为什么看不到环？",
        "options": [
          "环当时不存在",
          "望远镜坏了",
          "环被土星遮挡",
          "地球恰好穿过环平面",
        ],
        "correct": 3
      }
    ]
  },
  {
    "id": "titan",
    "category": "cat-solar-system",
    "title": "漫步土卫六：惠更斯号眼中的橙色异世界",
    "url": "https://mp.weixin.qq.com/s/95RnY9skKydEYZerUb1VAg",
    "distance": "土星系统",
    "object": "土卫六",
    "summary": "惠更斯号降落在土星最大卫星表面，发现水冰岩石和橙色迷雾大气。",
    "questions": [
      {
        "question": "惠更斯号探测器于哪一年降落在土卫六表面？",
        "options": [
          "1995年",
          "2000年",
          "2005年",
          "2010年"
        ],
        "correct": 2
      },
      {
        "question": "土卫六表面的\"石块\"最可能由什么组成？",
        "options": [
          "水冰和碳氢化合物",
          "硅酸盐岩石",
          "金属合金",
          "硫磺"
        ],
        "correct": 0
      },
      {
        "question": "土卫六表面温度约为多少？",
        "options": [
          "零下79摄氏度",
          "零下179摄氏度",
          "零下279摄氏度",
          "零下379摄氏度"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "jupiter-uv",
    "category": "cat-solar-system",
    "title": "“紫色”巨人：哈勃视角下的木星紫外线变奏曲",
    "url": "https://mp.weixin.qq.com/s/6LG4aZQY15aaQhER9w_zJQ",
    "distance": "木星系统",
    "object": "木星",
    "summary": "哈勃紫外图像揭示木星云层高度差异，南极\"珍珠串\"风暴呈亮粉色。",
    "questions": [
      {
        "question": "太阳系中唯一拥有自己磁场的卫星是哪颗？",
        "options": [
          "木卫一",
          "木卫二",
          "木卫三",
          "木卫四"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": "jupiter-juno",
    "category": "cat-solar-system",
    "title": "木星云层：像沾满油污的锅底，还是像太阳光下的肥皂泡",
    "url": "https://mp.weixin.qq.com/s/gzQdLe6yqQDxV1zXMD3jOw",
    "distance": "木星系统",
    "object": "木星",
    "summary": "朱诺号高分辨率图像展示木星复杂磁场和大陆规模的风暴漩涡。",
    "questions": [
      {
        "question": "朱诺号发现木星的磁场与地球相比有什么不同？",
        "options": [
          "更简单",
          "更弱",
          "更复杂，有多个极点",
          "完全相同"
        ],
        "correct": 2
      },
      {
        "question": "朱诺号于哪一年受控冲入木星大气层退役？",
        "options": [
          "2023年",
          "2024年",
          "2025年",
          "2026年"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": "jupiter-webb",
    "category": "cat-solar-system",
    "title": "詹姆斯·韦布太空望远镜下的木星",
    "url": "https://mp.weixin.qq.com/s/_0C_PAmR8_LyLXIc1nYh4w",
    "distance": "木星系统",
    "object": "木星",
    "summary": "韦布红外图像清晰展示木星极光、尘埃环和木卫一的磁场足迹。",
    "questions": [
      {
        "question": "韦布望远镜的主镜直径约为多少米？",
        "options": [
          "2.4米",
          "4.5米",
          "6.5米",
          "10米"
        ],
        "correct": 2
      },
      {
        "question": "韦布图像中木星南极极光区的\"足迹\"是由哪颗卫星造成的？",
        "options": [
          "木卫一（Io）",
          "木卫二（Europa）",
          "木卫三（Ganymede）",
          "木卫四（Callisto）"
        ],
        "correct": 0
      }
    ]
  },
  {
    "id": "io",
    "category": "cat-solar-system",
    "title": "像葱花饼的木卫一",
    "url": "https://mp.weixin.qq.com/s/B7tWVYer5T0tNuP1i7yRpw",
    "distance": "木星系统",
    "object": "木卫一",
    "summary": "太阳系火山最剧烈的天体，硫和熔融硅酸盐使其表面呈明亮黄色。",
    "questions": [
      {
        "question": "木卫一表面的黄色主要来自什么元素？",
        "options": [
          "铁",
          "碳",
          "钠",
          "硫"
        ],
        "correct": 3
      },
      {
        "question": "木卫一剧烈的火山活动主要由什么驱动？",
        "options": [
          "太阳辐射",
          "陨石撞击",
          "木星潮汐引力",
          "内部放射性衰变"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": "phobos",
    "category": "cat-solar-system",
    "title": "火卫一：注定消亡的火星卫星",
    "url": "https://mp.weixin.qq.com/s/7To1RuVgOZwjmRIRpL5d6A",
    "distance": "火星系统",
    "object": "火卫一",
    "summary": "火星较大的卫星，因潮汐力逐渐靠近火星，预计五千万年后解体成环。",
    "questions": [
      {
        "question": "火卫一预计大约多久后会解体成环？",
        "options": [
          "5百万年",
          "5千万年",
          "5亿年",
          "50亿年"
        ],
        "correct": 1
      },
      {
        "question": "火卫一距离火星表面约多少公里？",
        "options": [
          "580公里",
          "5800公里",
          "5.8万公里",
          "58万公里"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "mars-leopard",
    "category": "cat-solar-system",
    "title": "古火星生命：微生物的遗迹？",
    "url": "https://mp.weixin.qq.com/s/tEv8ME__-BttsbfxZkdZFwd",
    "distance": "火星系统",
    "object": "火星岩石",
    "summary": "毅力号发现的\"豹纹斑点\"岩石可能是数十亿年前火星微生物的生物特征。",
    "questions": [
      {
        "question": "毅力号发现的\"豹纹斑点\"每个约多大？",
        "options": [
          "几微米",
          "几毫米",
          "几厘米",
          "几米"
        ],
        "correct": 1
      },
      {
        "question": "毅力号发现的\"豹纹斑点\"可能是什么过程留下的痕迹？",
        "options": [
          "火山喷发",
          "水流侵蚀",
          "陨石撞击",
          "古代微生物的化学反应",
        ],
        "correct": 3
      }
    ]
  },
  {
    "id": "mars-face",
    "category": "cat-solar-system",
    "title": "一张迟来的火星笑脸",
    "url": "https://mp.weixin.qq.com/s/R0XeDfB8NHH1zvMn4UBxRA",
    "distance": "火星系统",
    "object": "盖勒撞击坑",
    "summary": "盖勒撞击坑因地质巧合形成笑脸图案，由火星全球勘测者号拍摄。",
    "questions": [
      {
        "question": "盖勒撞击坑的直径约为多少？",
        "options": [
          "23公里",
          "230公里",
          "2300公里",
          "2.3万公里"
        ],
        "correct": 1
      },
      {
        "question": "火星笑脸的高清特写来自哪艘探测器？",
        "options": [
          "维京号",
          "好奇号",
          "火星勘测轨道器",
          "火星全球勘测者号（MGS）"
        ],
        "correct": 3
      }
    ]
  },
  {
    "id": "comet-67p",
    "category": "cat-solar-system",
    "title": "彗星67P/CG：揭示太阳系演化的罗塞塔石碑",
    "url": "https://mp.weixin.qq.com/s/hH2BnIxgCrQNa8nZAFwb9g",
    "distance": "太阳系",
    "object": "67P/CG",
    "summary": "罗塞塔号探测的双叶彗星，喷射气体尘埃并含有复杂有机分子。",
    "questions": [
      {
        "question": "67P彗星绕太阳一圈会失去多少表面厚度？",
        "options": [
          "约1厘米",
          "约1米",
          "约10米",
          "约100米"
        ],
        "correct": 1
      },
      {
        "question": "科学家在67P表面探测到了哪种与生命相关的分子？",
        "options": [
          "DNA",
          "葡萄糖",
          "甘氨酸",
          "叶绿素"
        ],
        "correct": 2
      },
      {
        "question": "罗塞塔号探测器经过了多少年才抵达67P？",
        "options": [
          "3年",
          "5年",
          "10年",
          "15年"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": "ida-dactyl",
    "category": "cat-solar-system",
    "title": "艾达与达克提尔：小行星也有“卫星”",
    "url": "https://mp.weixin.qq.com/s/_VVQU7ElziseRIkMKq7Dwg",
    "distance": "小行星带",
    "object": "243 Ida",
    "summary": "伽利略号发现的首颗拥有卫星的小行星，位于火星与木星之间主带。",
    "questions": [
      {
        "question": "小行星艾达（243 Ida）的卫星达克提尔宽约多少？",
        "options": [
          "约0.16公里",
          "约1.6公里",
          "约16公里",
          "约160公里"
        ],
        "correct": 1
      },
      {
        "question": "哪艘探测器首次发现了小行星也有卫星？",
        "options": [
          "旅行者1号",
          "旅行者2号",
          "伽利略号",
          "朱诺号"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": "pds-70",
    "category": "cat-planet-formation",
    "title": "行星还没养大，月亮已经准备开工了",
    "url": "https://mp.weixin.qq.com/s/I2ngK5QJYMJntqic7ypGBA",
    "distance": "约400光年",
    "object": "PDS 70",
    "summary": "ALMA望远镜首次直接观测到系外行星PDS 70c周围的环行星盘。",
    "questions": [
      {
        "question": "系外行星 PDS 70c 周围的\"卫星施工盘\"半径大约与什么相当？",
        "options": [
          "月球轨道",
          "木星轨道",
          "土星轨道",
          "地球绕太阳公转轨道",
        ],
        "correct": 3
      },
      {
        "question": "系外行星系统 PDS 70 的观测是由哪个望远镜阵列完成的？",
        "options": [
          "哈勃",
          "韦布",
          "VLT",
          "ALMA",
        ],
        "correct": 3
      }
    ]
  },
  {
    "id": "wispit-2b",
    "category": "cat-planet-formation",
    "title": "在小小的行星盘里面挖呀挖呀挖",
    "url": "https://mp.weixin.qq.com/s/Ptqa_y7JdTwTxBwejjfOpA",
    "distance": "约400光年",
    "object": "WISPIT 2b",
    "summary": "VLT望远镜首次直接捕捉到系外行星WISPIT 2b在原行星盘中雕刻缝隙。",
    "questions": [
      {
        "question": "为了遮挡中心恒星的强光，观测时需要使用什么装置？",
        "options": [
          "光栅",
          "滤光片",
          "偏振片",
          "日冕仪"
        ],
        "correct": 3
      },
      {
        "question": "系外行星 WISPIT 2b 是在什么望远镜上首次直接看到正在盘内雕刻缝隙的行星？",
        "options": [
          "哈勃",
          "韦布",
          "VLT",
          "ALMA",
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": "iras-04302",
    "category": "cat-planet-formation",
    "title": "星际蝴蝶：行星正在这里“破茧而出”",
    "url": "https://mp.weixin.qq.com/s/U-5uVkepEp1lUJUhuGDB3Q",
    "distance": "约450光年",
    "object": "IRAS 04302",
    "summary": "韦布望远镜拍摄的蝴蝶状原行星盘，展示了行星诞生前的恒星系统。",
    "questions": [
      {
        "question": "IRAS 04302 的\"蝴蝶翅膀\"实际上是什么？",
        "options": [
          "反射光的尘埃结构",
          "恒星爆炸的残骸",
          "等离子体喷流",
          "暗物质晕"
        ],
        "correct": 0
      },
      {
        "question": "原始行星盘中的气体和尘埃最终会演变成什么？",
        "options": [
          "黑洞",
          "星云",
          "暗物质",
          "行星系统",
        ],
        "correct": 3
      }
    ]
  },
  {
    "id": "supernova-requiem",
    "category": "cat-gravity",
    "title": "超新星“安魂曲”：我到底死了多少次？",
    "url": "https://mp.weixin.qq.com/s/R-b2yqXJKMlKuhRPYTz9yA",
    "distance": "约100亿光年",
    "object": "MRG-M0138",
    "summary": "引力透镜使同一颗超新星爆发在MACS J0138星系团中被看到多次。",
    "questions": [
      {
        "question": "\"安魂曲\"超新星被预测将在哪一年第四次出现？",
        "options": [
          "2025年",
          "2030年",
          "2035年",
          "2040年"
        ],
        "correct": 2
      },
      {
        "question": "造成同一超新星被看到多次的原因是什么？",
        "options": [
          "望远镜故障",
          "星际尘埃反射",
          "超新星真的爆发了多次",
          "引力透镜使光沿不同路径到达",
        ],
        "correct": 3
      }
    ]
  },
  {
    "id": "einstein-ring",
    "category": "cat-gravity",
    "title": "来自宇宙的凝视：哈勃镜头下的爱因斯坦环",
    "url": "https://mp.weixin.qq.com/s/pGvRo6KFOXmDwVLf6j44KA",
    "distance": "约数十亿光年",
    "object": "LRG 3-757",
    "summary": "LRG 3-757星系完美对齐，将背景星系光线扭曲成近乎完整的圆环。",
    "questions": [
      {
        "question": "爱因斯坦环 LR G 3-757 中心的星系可能拥有质量达太阳多少倍的黑洞？",
        "options": [
          "3.6亿倍",
          "36亿倍",
          "360亿倍",
          "3600亿倍"
        ],
        "correct": 2
      },
      {
        "question": "爱因斯坦环的形成需要前景星系、背景星系和观察者几乎排成什么？",
        "options": [
          "直角",
          "圆形",
          "一条直线",
          "等边三角形",
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": "einstein-cross",
    "category": "cat-gravity",
    "title": "爱因斯坦十字引力透镜",
    "url": "https://mp.weixin.qq.com/s/e7U2cEGbbQjvrt4dh5guJg",
    "distance": "约数十亿光年",
    "object": "爱因斯坦十字",
    "summary": "前景星系引力场将背景类星体光线分裂成四重像，形成四叶草结构。",
    "questions": [
      {
        "question": "爱因斯坦十字中心的\"四叶草\"实际上是什么？",
        "options": [
          "四个独立的星系",
          "恒星爆炸的碎片",
          "前景星系的核心",
          "背景类星体的四个像",
        ],
        "correct": 3
      },
      {
        "question": "爱因斯坦十字各个像亮度变化有时是由什么引起的？",
        "options": [
          "星系旋转",
          "宇宙膨胀",
          "超新星爆发",
          "微引力透镜效应",
        ],
        "correct": 3
      }
    ]
  },
  {
    "id": "earth-gravity",
    "category": "cat-solar-system",
    "title": "地球重力场异常",
    "url": "https://mp.weixin.qq.com/s/UfpoYfZEFt29Dt3gmASJgQ",
    "distance": "地球",
    "object": "地球重力场",
    "summary": "GRACE双星任务绘制的地球重力地图，揭示地下密度分布的不均匀性。",
    "questions": [
      {
        "question": "GRACE任务通过什么方式测量地球重力场？",
        "options": [
          "单颗卫星拍照",
          "两颗卫星的星间测距变化",
          "地面重力仪",
          "飞机航拍"
        ],
        "correct": 1
      },
      {
        "question": "全球重力异常的极端值大约在多少毫伽（mGal）之间？",
        "options": [
          "±30",
          "±100",
          "±300",
          "±1000"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": "gigantic-jet",
    "category": "cat-solar-system",
    "title": "使徒入侵？不，只是罕见的闪电啦",
    "url": "https://mp.weixin.qq.com/s/HVeKJWaKqKoAz2R9JiFGaw",
    "distance": "地球",
    "object": "巨型喷流闪电",
    "summary": "国际空间站宇航员拍摄到从雷暴云顶直冲电离层的巨型喷流闪电。",
    "questions": [
      {
        "question": "巨型喷流闪电是从哪里向哪里放电？",
        "options": [
          "从太空向地面",
          "从雷暴云顶向上冲向电离层",
          "从地面向地下",
          "从赤道向两极"
        ],
        "correct": 1
      },
      {
        "question": "巨型喷流闪电属于什么现象？",
        "options": [
          "火流星",
          "陨石在大气中解体",
          "瞬态发光事件",
          "气辉"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": "solar-storm",
    "category": "cat-solar-system",
    "title": "日冕物质抛射与地磁爆",
    "url": "https://mp.weixin.qq.com/s/69suqFRdh10aKZZ8ZlskKg",
    "distance": "日地空间",
    "object": "日冕物质抛射",
    "summary": "太阳抛射的巨大等离子体云可压缩地球磁层，威胁卫星和电网。",
    "questions": [
      {
        "question": "历史上最强的太阳风暴\"卡林顿事件\"发生在哪一年？",
        "options": [
          "1759年",
          "1859年",
          "1959年",
          "2009年"
        ],
        "correct": 1
      },
      {
        "question": "强烈的太阳风冲击时，地球磁层顶可能被压缩到什么位置以内？",
        "options": [
          "月球轨道",
          "地球同步轨道",
          "国际空间站轨道",
          "低地球轨道"
        ],
        "correct": 1
      },
      {
        "question": "日冕物质抛射（CME）主要携带什么物质？",
        "options": [
          "带电粒子（等离子体）",
          "中性氢原子",
          "固态陨石",
          "暗物质"
        ],
        "correct": 0
      }
    ]
  },
  {
    "id": "sunspots",
    "category": "cat-solar-system",
    "title": "太阳黑子年鉴",
    "url": "https://mp.weixin.qq.com/s/wdb14u61HrFjn6sY35YXwA",
    "distance": "1 AU",
    "object": "太阳黑子",
    "summary": "太阳表面强磁场区域呈现为\"噬星体\"般的暗斑，以11年为周期增减。",
    "questions": [
      {
        "question": "太阳黑子的活动周期约为多少年？",
        "options": [
          "5年",
          "8年",
          "11年",
          "22年"
        ],
        "correct": 2
      },
      {
        "question": "太阳黑子看起来较暗的原因是什么？",
        "options": [
          "它们不发光",
          "强磁场抑制对流导致温度较低",
          "它们被尘埃遮挡",
          "它们距离我们更远"
        ],
        "correct": 1
      },
      {
        "question": "2025年处于太阳活动周期的什么阶段？",
        "options": [
          "活动极小期",
          "活动极大期",
          "衰退期",
          "平静期"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "perseverance",
    "category": "cat-solar-system",
    "title": "毅力号和机智号的火星生活",
    "url": "https://mp.weixin.qq.com/s/QVGCP1AyzkfKQL1c67RUTw",
    "distance": "火星",
    "object": "毅力号/机智号",
    "summary": "毅力号用62张照片拼接出最复杂的火星自拍，机智号飞行72次后退役。",
    "questions": [
      {
        "question": "毅力号在火星的降落地点在哪里？",
        "options": [
          "乌托邦平原",
          "盖尔陨石坑",
          "杰泽罗陨石坑",
          "维多利亚陨石坑"
        ],
        "correct": 2
      },
      {
        "question": "机智号火星直升机原计划飞行几次，实际完成了多少次？",
        "options": [
          "5次/36次",
          "5次/72次",
          "10次/72次",
          "10次/100次"
        ],
        "correct": 1
      },
      {
        "question": "一个火星日（Sol）约为多少小时？",
        "options": [
          "22小时",
          "24小时",
          "24小时39分钟",
          "25小时"
        ],
        "correct": 2
      },
      {
        "question": "在火星上会飞的探测器是哪个？",
        "options": [
          "机智号",
          "毅力号",
          "好奇号",
          "机遇号"
        ],
        "correct": 0
      }
    ]
  },
  {
    "id": "apollo-17",
    "category": "cat-solar-system",
    "title": "月球上的最后一曲：阿波罗17号在肖蒂陨石坑的足迹",
    "url": "https://mp.weixin.qq.com/s/3iIy_R_VA2OVtGwGJkj7Qg",
    "distance": "月球",
    "object": "阿波罗17号",
    "summary": "1972年阿波罗17号带回110公斤月壤，发现了著名的橙色土壤。",
    "questions": [
      {
        "question": "阿波罗17号带回了多少公斤的月岩和土壤样本？",
        "options": [
          "50公斤",
          "80公斤",
          "110公斤",
          "150公斤"
        ],
        "correct": 2
      },
      {
        "question": "阿波罗17号发现了著名的什么颜色的月壤？",
        "options": [
          "红色",
          "蓝色",
          "橙色",
          "绿色"
        ],
        "correct": 2
      },
      {
        "question": "阿波罗17号发现的橙色月壤是什么？",
        "options": [
          "富含钛的火山碎屑形成的微小玻璃珠",
          "富含镁的火山碎屑形成的微小玻璃珠",
          "富含铁的火山碎屑形成的微小玻璃珠",
          "富含钙的火山碎屑形成的微小玻璃珠"
        ],
        "correct": 0
      }
    ]
  },
  {
    "id": "zhurong",
    "category": "cat-solar-system",
    "title": "祝融号火星车的自拍",
    "url": "https://mp.weixin.qq.com/s/5Dx0cEpxoDqr0I-pVNQM9w",
    "distance": "火星",
    "object": "祝融号",
    "summary": "中国天问一号任务的祝融号火星车在乌托邦平原的自拍合影。",
    "questions": [
      {
        "question": "祝融号火星车着陆在火星的哪个平原？",
        "options": [
          "亚马逊平原",
          "乌托邦平原",
          "伊希地平原",
          "阿西达里亚平原"
        ],
        "correct": 1
      },
      {
        "question": "祝融号的设计寿命为多少个火星日？",
        "options": [
          "30个",
          "60个",
          "90个",
          "180个"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": "arecibo",
    "category": "cat-solar-system",
    "title": "是“请回答”，还是“不要回答”，这是个问题！",
    "url": "https://mp.weixin.qq.com/s/SAju4TW-7Rtqk0RzE5_LXg",
    "distance": "2.5万光年",
    "object": "阿雷西博信息",
    "summary": "1974年阿雷西博望远镜向M13球状星团发送的1679位二进制信息。",
    "questions": [
      {
        "question": "阿雷西博信息由多少位二进制编码组成？",
        "options": [
          "679位",
          "1079位",
          "1679位",
          "2079位"
        ],
        "correct": 2
      },
      {
        "question": "阿雷西博信息的目标是哪个球状星团？",
        "options": [
          "M3",
          "M13",
          "M15",
          "M22"
        ],
        "correct": 1
      },
      {
        "question": "如果收到阿雷西博信息的外星文明立即回复，我们需要等待多久？",
        "options": [
          "2.5万年",
          "5万年",
          "10万年",
          "25万年"
        ],
        "correct": 1
      }
    ]
  }
];
