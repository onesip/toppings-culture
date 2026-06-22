export interface Topping {
  id: string;
  number: string;
  nameEn: string;
  nameCn: string;
  tags: string[];
  heroLineEn: string;
  heroLineCn: string;
  shortDescEn: string;
  shortDescCn: string;
  storyEn: string;
  storyCn: string;
  whyLoveEn: string;
  whyLoveCn: string;
  bestWithEn: string;
  bestWithCn: string;
  staffOneLinerEn?: string;
  staffOneLinerCn?: string;
  colorScheme: {
    bg: string;
    text: string;
    tagBg: string;
    tagText: string;
  };
}

export const toppings: Topping[] = [
  {
    id: "snow-fungus",
    number: "01",
    nameEn: "Snow Fungus",
    nameCn: "银耳",
    tags: ["Silky", "Light", "Dessert-like"],
    heroLineEn: "Eastern dessert elegance in one silky spoon.",
    heroLineCn: "一勺银耳，把东方甜品的轻盈感加进饮品里。",
    shortDescEn: "A soft, silky Chinese dessert ingredient with a gentle crunch and a clean, refreshing finish.",
    shortDescCn: "中国甜品里的“清爽系小料”，柔软、滑润，带一点点轻脆口感。",
    storyEn: "Snow fungus, also known as white fungus or tremella, is loved in Chinese sweet soups for its delicate, flower-like shape and silky texture. It does not shout for attention. Instead, it adds a quiet elegance: soft on the first bite, slightly crisp in the middle, and clean at the finish. For Dutch customers, think of it as a light dessert jelly with a natural, botanical feel — not too sweet, not heavy, and perfect for summer drinks.",
    storyCn: "银耳也叫白木耳，是中国甜汤和糖水文化里非常经典的食材。它不是靠浓烈味道取胜，而是靠“柔、滑、润、轻”的口感让饮品更有层次。入口柔软，中间带一点轻脆，收尾很清爽。对荷兰顾客来说，可以把它理解成一种更自然、更轻盈的东方甜品小料，适合想要清爽、不厚重口感的人。",
    whyLoveEn: "Adds a beautiful texture without making the drink heavy. It gives fruit tea, pear tea and milk tea a premium dessert feeling.",
    whyLoveCn: "增加高级甜品感，但不会让饮品变厚重；很适合清爽型、养生感和东方甜品感饮品。",
    bestWithEn: "Best with pear drinks, mango drinks, jasmine tea, light milk tea and grass jelly desserts.",
    bestWithCn: "推荐搭配：梨饮、芒果、茉莉茶、轻奶茶、仙草类甜品。",
    colorScheme: {
      bg: "bg-stone-100",
      text: "text-stone-800",
      tagBg: "bg-white",
      tagText: "text-stone-600"
    }
  },
  {
    id: "red-bean",
    number: "02",
    nameEn: "Red Bean",
    nameCn: "红豆",
    tags: ["Soft", "Sweet", "Comforting"],
    heroLineEn: "Soft red bean sweetness, the Asian way.",
    heroLineCn: "软糯红豆香，是亚洲甜品里的温柔记忆。",
    shortDescEn: "A warm, comforting Asian dessert classic with a soft bite and natural bean sweetness.",
    shortDescCn: "亚洲甜品经典小料，软糯、微甜、带有自然豆香。",
    storyEn: "Red bean is one of the most familiar sweet ingredients across Chinese, Japanese and East Asian desserts. It brings a soft bite, a gentle earthy sweetness and a comforting feeling that many Asian customers grew up with. In a drink, red bean turns milk tea into something more filling and dessert-like — close to the feeling of a warm pastry or a sweet bean dessert, but served cold and refreshing.",
    storyCn: "红豆是中式、日式和东亚甜品里非常有记忆点的经典食材。它有自然豆香、轻微颗粒感和温柔的甜味，很多亚洲顾客会把它和童年甜品、红豆汤、红豆冰联系在一起。放进奶茶里，红豆会让一杯饮品变得更像“甜品”，有饱腹感，也更温暖、有安慰感。",
    whyLoveEn: "It feels familiar, cozy and naturally sweet. Great for customers who like dessert drinks but do not want only sugar syrup flavor.",
    whyLoveCn: "它不是单纯的甜，而是有豆香、有质感、有温度；适合喜欢甜品型奶茶的顾客。",
    bestWithEn: "Best with matcha latte, fresh-style milk tea, roasted milk tea, brown sugar milk and grass jelly bowls.",
    bestWithCn: "推荐搭配：抹茶拿铁、鲜奶茶、烤奶奶茶、黑糖鲜奶、仙草碗。",
    colorScheme: {
      bg: "bg-rose-50",
      text: "text-rose-900",
      tagBg: "bg-white",
      tagText: "text-rose-700"
    }
  },
  {
    id: "sago-pearls",
    number: "03",
    nameEn: "Sago Pearls",
    nameCn: "西米",
    tags: ["Tiny", "Bouncy", "Tropical"],
    heroLineEn: "Tiny pearls, big tropical mood.",
    heroLineCn: "小小西米，一口带出热带甜品感。",
    shortDescEn: "Tiny translucent pearls that add a light, playful bounce to tropical drinks and desserts.",
    shortDescCn: "晶莹小颗粒，口感轻弹，特别适合热带水果和椰奶系饮品。",
    storyEn: "Sago pearls are small, translucent pearls made from starch. Compared with tapioca pearls, sago is smaller, lighter and more delicate. It does not dominate the drink; it creates a fine, playful texture that works beautifully with coconut milk, mango, passion fruit and Southeast Asian dessert drinks. For first-time customers, it is the easiest “texture upgrade” to understand: tiny pearls, soft bounce, tropical feeling.",
    storyCn: "西米是由淀粉制成的小颗粒，煮熟后晶莹透明。和珍珠相比，西米更小、更轻、更细腻，不会抢走饮品本身的味道，而是增加一种细小、轻弹、很有趣的口感。它特别适合椰奶、芒果、百香果和东南亚甜品风味，是非常适合给荷兰顾客入门的小料。",
    whyLoveEn: "Light texture, easy to drink, and visually beautiful. It makes coconut and mango drinks feel more tropical and dessert-like.",
    whyLoveCn: "口感轻盈、好入口、视觉清透；能让椰奶和芒果饮品更有热带甜品感。",
    bestWithEn: "Best with Mango Pa Lu Da, coconut milk, mango tea, passion fruit drinks and fruit dessert bowls.",
    bestWithCn: "推荐搭配：芒果帕鲁达、椰奶、芒果茶、百香果、热带水果甜品碗。",
    colorScheme: {
      bg: "bg-amber-50",
      text: "text-amber-900",
      tagBg: "bg-white",
      tagText: "text-amber-700"
    }
  },
  {
    id: "matcha",
    number: "04",
    nameEn: "Matcha",
    nameCn: "抹茶",
    tags: ["Tea Aroma", "Creamy", "Umami", "Slightly Bitter", "Premium"],
    heroLineEn: "Ceremonial matcha, mountain-grown depth.",
    heroLineCn: "茶道级高山抹茶，一口喝到鲜绿茶香与高山清韵。",
    shortDescEn: "A ceremonial-grade Qianmu high-mountain matcha from the Guizhou highlands, selected for vivid green color, smooth umami and a refined tea finish.",
    shortDescCn: "我们使用来自贵州高地的茶道级高山千目抹茶，强调鲜绿茶色、细腻粉感、柔和鲜味和干净回甘。",
    storyEn: "Matcha is not just “green flavor”. At OneSip, we use a ceremonial-grade high-mountain matcha from Guizhou, one of China’s important tea-growing highland regions. The powder gives the drink a vivid green color, a creamy body, gentle bitterness and a clean tea finish. In modern drinks, matcha works like a bridge between tea culture and coffee culture: it can be whisked, layered, mixed with milk, or paired with mango and fruit. Its refined bitterness balances sweetness and makes the drink feel more grown-up, premium and tea-forward.",
    storyCn: "抹茶不是简单的“绿色味道”，而是细磨茶粉带来的鲜绿茶香、细腻粉感、轻微苦韵和高级回甘。OneSip 使用来自贵州高地的茶道级高山千目抹茶。贵州高地的茶产区有山地、雾气和清凉感，给抹茶多了一层“高山茶”的来源故事。放进现代饮品里，抹茶很像茶文化和咖啡文化之间的桥梁：可以打发、分层、做拿铁，也可以和芒果、水果、红豆搭配。它的微苦能平衡甜味，让饮品更高级、更成熟，而不是单纯靠糖浆和颜色吸引顾客。",
    whyLoveEn: "It looks beautiful, but the real reason to try it is the tea character: smooth, green, creamy and slightly bitter in a good way. It is perfect for customers who enjoy coffee or less-sweet drinks but want something softer and more refreshing.",
    whyLoveCn: "它不只是好看，真正的记忆点是茶感：鲜绿、顺滑、带一点高级微苦。适合喜欢咖啡、喜欢低甜感、又想尝试更柔和茶饮的顾客。",
    bestWithEn: "Best with fresh-style milk tea, mango, red bean, brown sugar pearls, jasmine tea and matcha cloud foam.",
    bestWithCn: "推荐搭配：鲜奶茶、芒果、红豆、黑糖珍珠、茉莉茶、抹茶云顶奶盖。",
    staffOneLinerEn: "Our matcha is a ceremonial-grade highland matcha from Guizhou — vivid, smooth and tea-forward, not just green powder.",
    staffOneLinerCn: "我们用的是贵州高地茶道级高山千目抹茶，颜色鲜绿、口感细腻，不是普通绿色茶粉。",
    colorScheme: {
      bg: "bg-emerald-50",
      text: "text-emerald-900",
      tagBg: "bg-white",
      tagText: "text-emerald-700"
    }
  },
  {
    id: "oolong-tea",
    number: "05",
    nameEn: "Oolong Tea",
    nameCn: "乌龙茶",
    tags: ["Floral", "Roasted", "Layered"],
    heroLineEn: "The tea between green and black — floral, smooth and unforgettable.",
    heroLineCn: "介于绿茶与红茶之间，一杯喝出花香、茶韵和回甘。",
    shortDescEn: "A semi-oxidized tea between green and black tea, loved for its floral aroma and layered finish.",
    shortDescCn: "介于绿茶和红茶之间的半氧化茶，花香、焙香和回甘层次丰富。",
    storyEn: "Oolong is one of the most expressive Chinese tea styles. Because it sits between green tea and black tea, it can taste floral, creamy, roasted, fruity or honey-like depending on how it is processed. In milk tea, oolong gives structure: it keeps the drink elegant, aromatic and less flat. For Dutch customers, it is a good entry point into real Chinese tea — familiar enough to enjoy, complex enough to remember.",
    storyCn: "乌龙茶是非常有表现力的中国茶类。它处于绿茶和红茶之间，不同工艺会带来花香、奶香、焙火香、果香甚至蜜香。做成奶茶时，乌龙能让饮品更有“茶骨架”，不会只是甜和奶，而是有香气、有回甘、有层次。对荷兰顾客来说，它是理解中国茶文化很好的入口。",
    whyLoveEn: "It makes milk tea feel more grown-up: aromatic, balanced and not overly sweet.",
    whyLoveCn: "让奶茶更成熟、更有茶香，也更不容易喝腻。",
    bestWithEn: "Best with fresh-style milk tea, peach, osmanthus, cheese foam, brown sugar pearls and light fruit tea.",
    bestWithCn: "推荐搭配：鲜奶茶、桃子、桂花、奶盖、黑糖珍珠、清爽果茶。",
    colorScheme: {
      bg: "bg-orange-50",
      text: "text-orange-900",
      tagBg: "bg-white",
      tagText: "text-orange-700"
    }
  },
  {
    id: "honey-black-tea",
    number: "06",
    nameEn: "Honey Black Tea",
    nameCn: "蜜香红茶",
    tags: ["Naturally Honeyed", "Warm", "Smooth"],
    heroLineEn: "Classic black tea, naturally kissed by honey-like aroma.",
    heroLineCn: "不是加蜂蜜，而是茶底自带的温柔蜜香。",
    shortDescEn: "A black tea with a naturally honey-like aroma — smooth, warm and beautifully tea-forward.",
    shortDescCn: "自带蜜香感的红茶茶底，温润、顺滑，茶香非常突出。",
    storyEn: "Honey black tea is special because the honey note comes from the tea aroma itself, not from adding honey syrup. It gives black tea a rounder, warmer and more fragrant personality. In milk tea, it creates a smooth base with a gentle sweetness impression, making the drink taste rich without feeling artificial. It is perfect for customers who want classic milk tea, but with a more premium tea character.",
    storyCn: "蜜香红茶的重点是：它的“蜜香”来自茶叶本身的香气表现，而不是额外加蜂蜜糖浆。这种茶底比普通红茶更圆润、更温暖，也更有记忆点。做成奶茶时，它能带出自然的甜香感，让饮品丰富但不显得工业。适合想喝经典奶茶、但又希望茶底更高级的顾客。",
    whyLoveEn: "It upgrades classic milk tea: still familiar, but smoother, warmer and more aromatic.",
    whyLoveCn: "它能把经典奶茶做得更有茶香、更顺滑，也更容易形成品牌记忆点。",
    bestWithEn: "Best with classic milk tea, brown sugar pearls, fresh-style milk tea, cheese foam and red bean.",
    bestWithCn: "推荐搭配：经典奶茶、黑糖珍珠、鲜奶茶、奶盖、红豆。",
    colorScheme: {
      bg: "bg-amber-100",
      text: "text-amber-900",
      tagBg: "bg-white",
      tagText: "text-amber-700"
    }
  },
  {
    id: "brown-sugar-tapioca-pearls",
    number: "07",
    nameEn: "Brown Sugar Tapioca Pearls",
    nameCn: "黑糖珍珠",
    tags: ["Chewy", "Caramel", "Iconic"],
    heroLineEn: "The chewy heart of bubble tea culture.",
    heroLineCn: "一颗 Q 弹珍珠，就是奶茶文化最经典的快乐。",
    shortDescEn: "The iconic bubble tea topping: chewy tapioca pearls coated with deep brown sugar caramel.",
    shortDescCn: "奶茶最经典的小料，Q 弹珍珠裹上黑糖焦香，越嚼越香。",
    storyEn: "Tapioca pearls are the global symbol of bubble tea. Made from cassava starch, they become soft, chewy and bouncy after cooking. When coated with brown sugar, the pearls bring a caramel-like depth that makes every sip more playful. For many customers, this is the first texture they imagine when they hear “bubble tea” — the straw, the pearls, the chew, the fun.",
    storyCn: "珍珠是奶茶文化最具代表性的小料。它通常由木薯淀粉制成，煮熟后形成软糯、Q 弹、有嚼劲的口感。裹上黑糖后，会带来焦糖般的香气和更深的甜感。对很多顾客来说，珍珠就是他们认识奶茶的第一步：粗吸管、吸到珍珠、边喝边嚼，这就是奶茶的快乐。",
    whyLoveEn: "Fun, chewy and instantly recognizable. It turns a drink into an experience.",
    whyLoveCn: "有趣、有嚼劲、有互动感；能把一杯饮品变成一种体验。",
    bestWithEn: "Best with honey black milk tea, brown sugar milk, matcha latte, roasted milk tea and fresh-style milk tea.",
    bestWithCn: "推荐搭配：蜜香红茶奶茶、黑糖鲜奶、抹茶拿铁、烤奶奶茶、鲜奶茶。",
    colorScheme: {
      bg: "bg-orange-100",
      text: "text-orange-950",
      tagBg: "bg-white",
      tagText: "text-orange-800"
    }
  },
  {
    id: "matcha-cloud-foam",
    number: "08",
    nameEn: "Matcha Cloud Foam",
    nameCn: "抹茶云顶奶盖",
    tags: ["Creamy", "Coconut Aroma", "Tea Aroma", "Layered", "Signature"],
    heroLineEn: "Coconut-kissed matcha cloud, a OneSip signature first sip.",
    heroLineCn: "带椰香的抹茶云顶，是 OneSip 的第一口记忆点。",
    shortDescEn: "OneSip’s signature matcha cloud foam, made with a coconut milk touch on top of the usual creamy foam style, creating a softer aroma and a tropical finish.",
    shortDescCn: "OneSip 独家抹茶云顶配方，在常规云顶奶盖做法上加入椰奶，让抹茶茶香、奶盖绵密和温柔椰香融合在一起。",
    storyEn: "Matcha cloud foam is one of OneSip’s signature layers. Instead of being only a salty-sweet cream cap, our version adds matcha and coconut milk to create a softer, more aromatic first sip. Customers first taste the creamy cloud on top, then the tea or fruit base underneath, and finally the two slowly blend together. The coconut note makes the foam feel smoother, rounder and more tropical, while the matcha keeps it elegant and tea-forward. It turns a simple cup into a layered dessert-tea experience.",
    storyCn: "抹茶云顶是 OneSip 很有记忆点的独家层次。它不是普通咸甜奶盖，而是在常规云顶奶盖的基础上加入抹茶和椰奶，让第一口更绵密、更柔和，也带有淡淡椰香。顾客先喝到顶部云顶，再喝到底下的茶或水果底，最后让两层味道慢慢融合。椰奶让奶盖更圆润、更有热带感；抹茶则保留茶香和高级感。它能把一杯普通饮品变成有层次、有仪式感的甜品茶饮。",
    whyLoveEn: "It creates a premium “first sip” moment. The foam is creamy but not flat, coconut-fragrant but not too heavy, and the matcha makes the drink look and taste more refined.",
    whyLoveCn: "它制造第一口记忆点。口感绵密但不单调，有椰香但不厚重，抹茶又让整杯饮品看起来更高级、更适合拍照。",
    bestWithEn: "Best with jasmine tea, oolong tea, mango drinks, matcha latte, fruit tea and any drink that needs a creamy premium top layer.",
    bestWithCn: "推荐搭配：茉莉茶、乌龙茶、芒果饮品、抹茶拿铁、果茶，以及任何需要“高级云顶感”的饮品。",
    staffOneLinerEn: "This is our signature matcha cloud foam — creamy matcha with a coconut milk touch, so the first sip is soft, fragrant and layered.",
    staffOneLinerCn: "这是我们店的独家抹茶云顶，里面有抹茶和椰奶，第一口会有绵密奶盖、茶香和淡淡椰香。",
    colorScheme: {
      bg: "bg-teal-50",
      text: "text-teal-900",
      tagBg: "bg-white",
      tagText: "text-teal-700"
    }
  },
  {
    id: "pa-lu-da",
    number: "09",
    nameEn: "Pa Lu Da",
    nameCn: "帕鲁达",
    tags: ["Coconut", "Tropical", "Dessert Drink"],
    heroLineEn: "A tropical dessert you can drink, scoop and love.",
    heroLineCn: "一杯可以喝、可以舀、可以爱上的热带甜品饮。",
    shortDescEn: "A Southeast Asian-style dessert drink with coconut creaminess, fruit, sago and layered textures.",
    shortDescCn: "东南亚风格甜品饮，椰香、芒果、西米和多层次小料组合。",
    storyEn: "Pa Lu Da is inspired by Southeast Asian layered dessert drinks, where coconut milk, fruit, jelly, sago and soft bread-like textures can come together in one cup. It is not just a drink — it is closer to a dessert you can sip with a straw and eat with a spoon. At OneSip, Mango Pa Lu Da can become a signature summer item: creamy coconut, golden mango, tiny pearls and a rich tropical feeling.",
    storyCn: "帕鲁达的灵感来自东南亚多层次甜品饮，椰奶、水果、果冻、西米、面包感或布丁感食材可以组合在同一杯里。它不是单纯的饮料，更像是一杯可以吸、可以舀、可以慢慢吃的甜品。OneSip 的芒果帕鲁达可以成为夏季招牌：椰香、金黄芒果、小颗粒西米和浓郁热带感，非常适合做视觉展示。",
    whyLoveEn: "It feels generous and surprising: more texture, more color, more dessert value.",
    whyLoveCn: "它有丰富感、惊喜感和高价值感；特别适合让顾客觉得“一杯很值得”。",
    bestWithEn: "Best with mango, coconut milk, sago, grass jelly, snow fungus and light tea bases.",
    bestWithCn: "推荐搭配：芒果、椰奶、西米、仙草、银耳、清爽茶底。",
    colorScheme: {
      bg: "bg-yellow-50",
      text: "text-yellow-900",
      tagBg: "bg-white",
      tagText: "text-yellow-700"
    }
  },
  {
    id: "fresh-style-milk-tea",
    number: "10",
    nameEn: "Fresh-Style Milk Tea",
    nameCn: "鲜奶茶 / 调和乳奶茶",
    tags: ["Tea-forward", "Smooth", "Modern"],
    heroLineEn: "Less heavy. More tea. A cleaner way to enjoy milk tea.",
    heroLineCn: "少一点厚重，多一点茶香，这是更现代的奶茶。",
    shortDescEn: "A modern Chinese-style milk tea built around the balance of real tea aroma and a smooth dairy blend.",
    shortDescCn: "以茶香和调和乳融合为核心，更轻盈、更顺滑的现代中式奶茶。",
    storyEn: "Modern Chinese milk tea is moving away from the old image of heavy, powdery and overly sweet milk tea. Fresh-style milk tea focuses on the harmony between brewed tea and a smooth dairy blend. The goal is not to cover the tea, but to let milk and tea meet in balance: tea aroma first, dairy smoothness second, sweetness only as support. This is why fresh milk tea-style drinks have become so popular in China — they feel cleaner, lighter and more premium.",
    storyCn: "现代中国奶茶正在摆脱过去“厚重、粉感、工业甜”的印象。鲜奶茶的重点是茶底和调和乳之间的平衡：不是用奶去盖住茶，而是让茶香先出来，再用乳香增加顺滑感，甜味只是辅助。这样的奶茶更干净、更轻盈，也更高级。它解释了为什么近年来中国市场会追捧鲜奶茶风格：喝起来更像“茶饮升级”，而不是单纯甜饮料。",
    whyLoveEn: "It is familiar like milk tea, but cleaner, more tea-forward and easier to drink every day.",
    whyLoveCn: "它保留奶茶的亲切感，但更突出茶香、更轻盈，也更适合作为日常饮品。",
    bestWithEn: "Best with honey black tea, oolong tea, jasmine tea, brown sugar pearls, red bean and cheese foam.",
    bestWithCn: "推荐搭配：蜜香红茶、乌龙茶、茉莉茶、黑糖珍珠、红豆、奶盖。",
    colorScheme: {
      bg: "bg-sky-50",
      text: "text-sky-900",
      tagBg: "bg-white",
      tagText: "text-sky-700"
    }
  },
  {
    id: "hainan-jinhuang-mango",
    number: "11",
    nameEn: "Hainan Jinhuang Mango",
    nameCn: "海南金煌芒",
    tags: ["Golden", "Juicy", "Summer Icon"],
    heroLineEn: "Golden mango sunshine, inspired by tropical Hainan.",
    heroLineCn: "一口金黄芒果，把海南的夏天喝进杯子里。",
    shortDescEn: "A golden mango inspiration known for its rich color, juicy sweetness and sunny tropical character.",
    shortDescCn: "金黄饱满、香甜多汁，带来非常有夏天感的热带芒果风味。",
    storyEn: "Jinhuang mango is loved for its large, golden appearance and rich, juicy fruit character. In a drink wall, it should be presented as the “sunshine ingredient”: bright, generous and instantly understandable. For Dutch customers, mango is already familiar, but Hainan Jinhuang Mango gives it a stronger story — a tropical Chinese summer image, golden color, and a premium fruit feeling.",
    storyCn: "金煌芒的卖点是金黄色泽、饱满果肉和浓郁芒果香。放在小料墙上，它应该被讲成“阳光感原料”：颜色明亮、风味直接、顾客一眼就能理解。对荷兰顾客来说，芒果本来就熟悉，但“海南金煌芒”能让它多一层中国热带水果的故事感：更金黄、更夏天、更有高级水果感。",
    whyLoveEn: "Easy to understand, easy to love. Mango gives instant color, sweetness and summer energy.",
    whyLoveCn: "顾客不需要解释就能爱上；芒果自带颜色、甜感和夏天氛围。",
    bestWithEn: "Best with Pa Lu Da, coconut milk, matcha, jasmine tea, sago, snow fungus and cheese foam.",
    bestWithCn: "推荐搭配：帕鲁达、椰奶、抹茶、茉莉茶、西米、银耳、奶盖。",
    colorScheme: {
      bg: "bg-yellow-100",
      text: "text-yellow-950",
      tagBg: "bg-white",
      tagText: "text-yellow-800"
    }
  },
  {
    id: "grass-jelly",
    number: "12",
    nameEn: "Grass Jelly",
    nameCn: "仙草冻",
    tags: ["Herbal", "Smooth", "Cooling"],
    heroLineEn: "Soft herbal jelly for a cooler, lighter sip.",
    heroLineCn: "一口滑嫩仙草，给奶茶加一点清爽草本感。",
    shortDescEn: "A smooth herbal jelly with a mild tea-like taste, loved in Asian desserts and milk tea.",
    shortDescCn: "带有轻微草本茶感的黑色冻冻，是亚洲甜品和奶茶里的经典清爽小料。",
    storyEn: "Grass jelly is a classic Asian dessert jelly made from Chinese mesona. Its flavor is mild, slightly herbal and not overly sweet, which makes it perfect for balancing milk tea and fruit drinks. The texture is smooth, cool and easy to eat. For customers who find tapioca pearls too chewy, grass jelly is a softer and lighter choice — a calm, refreshing texture with a traditional dessert story behind it.",
    storyCn: "仙草冻是亚洲甜品里非常经典的草本冻，通常由仙草类植物制成。它的味道温和，带一点草本茶感，不会特别甜，所以很适合平衡奶茶、果茶和甜品碗。它的口感是滑的、凉的、轻的。如果顾客觉得珍珠太有嚼劲，仙草就是更柔软、更清爽的选择，也很适合讲中国南方和台湾甜品文化。",
    whyLoveEn: "Smooth, light and refreshing. It adds texture without adding heaviness.",
    whyLoveCn: "滑、凉、轻，不厚重；能让甜饮更平衡、更清爽。",
    bestWithEn: "Best with brown sugar milk, fresh-style milk tea, red bean, mango, snow fungus and dessert bowls.",
    bestWithCn: "推荐搭配：黑糖鲜奶、鲜奶茶、红豆、芒果、银耳、甜品碗。",
    colorScheme: {
      bg: "bg-stone-200",
      text: "text-stone-900",
      tagBg: "bg-white",
      tagText: "text-stone-700"
    }
  }
];
