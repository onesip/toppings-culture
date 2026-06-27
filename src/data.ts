export interface Topping {
  id: string;
  number: string;
  nameEn: string;
  nameCn: string;
  tags: string[];
  heroLineEn: string;
  heroLineCn: string;
  storyEn: string;
  storyCn: string;
  colorScheme: {
    bg: string;
    text: string;
    tagBg: string;
    tagText: string;
  };
}

export const toppings: Topping[] = [
  {
    "id": "hainan-jinhuang-mango",
    "number": "01",
    "nameEn": "Hainan Jinhuang Mango",
    "nameCn": "海南金煌芒",
    "tags": [
      "Golden",
      "Juicy",
      "Sun-Ripened"
    ],
    "heroLineEn": "A mango that tastes like tropical sunlight: lush, velvety, and naturally bright.",
    "heroLineCn": "一口金黄果香，像把海南的阳光放进杯子里。",
    "storyEn": "Hainan Jinhuang mango is not the kind of mango that only gives sweetness. It is large, golden, full-bodied, and known for its thin seed, smooth flesh, and naturally low-fiber texture. Grown in the tropical climate of Hainan, it carries the feeling of warm air, long sunshine, and fruit picked at its most generous moment.\n\nThe charm of Jinhuang mango is its texture. It feels softer and silkier than many everyday mangoes, with a fragrance that is rich but still clean. The sweetness is rounded, almost honeyed, with a bright tropical lift at the end. For guests who are new to Chinese fruit culture, this mango is an easy door to walk through: familiar enough to love immediately, but deeper and more elegant than a standard mango flavour.\n\nIn a drink or dessert bowl, Hainan Jinhuang mango brings colour, aroma, and a feeling of summer. It is golden, juicy, and expressive — a small taste of southern China's tropical landscape.",
    "storyCn": "海南金煌芒不只是“甜”的芒果。它果型较大、果核很薄，成熟后果肉金黄，口感细腻少纤维。来自海南热带产区的金煌芒，带着温暖空气、充足阳光和热带水果成熟时最饱满的香气。\n\n它最迷人的地方，是果肉的质感。相比普通芒果，金煌芒更厚实、更柔滑，也更有层次。入口先是浓郁的果香和自然甜感，随后慢慢出现像蜂蜜一样圆润的尾韵，最后留下明亮的热带清香。对于第一次接触中国热带水果文化的顾客来说，它既熟悉、容易喜欢，又比普通芒果味更有记忆点。\n\n在饮品或甜品碗里，海南金煌芒带来的是颜色、香气和夏天的情绪。它金黄、柔滑、饱满，像一口来自中国南方海岛的阳光。",
    "colorScheme": {
      "bg": "bg-yellow-100",
      "text": "text-yellow-950",
      "tagBg": "bg-white",
      "tagText": "text-yellow-800"
    }
  },
  {
    "id": "pa-lu-da",
    "number": "02",
    "nameEn": "Pa Lu Da Coconut Dessert",
    "nameCn": "泡鲁达",
    "tags": [
      "Coconut",
      "Mango",
      "Border-Town Romance"
    ],
    "heroLineEn": "A creamy coconut dessert with a story from Yunnan's border towns.",
    "heroLineCn": "一碗椰香清凉，藏着云南边境的浪漫故事。",
    "storyEn": "Pa Lu Da is a Southeast Asian-inspired coconut dessert loved in Yunnan's border regions, especially around Dehong, Mangshi, Ruili, and Jinghong. It is the kind of dessert that feels shaped by movement: people crossing borders, ingredients travelling through markets, and cultures meeting over something cold, creamy, and comforting.\n\nThere is also a romantic story often told along the Yunnan-Myanmar border. A young man, hoping to express his love for a Dai girl, soaked bread in sweet milk and turned simple ingredients into a tender gesture. Whether told as history or folklore, the story gives Pa Lu Da its warmth: it is not only a coconut dessert, but also a small symbol of softness, affection, and border-town everyday life.\n\nCreamy coconut milk, mango, red beans, sago, toast, and icy textures make Pa Lu Da playful and spoonable. It is refreshing, layered, and generous — a dessert you do not just drink, but slowly discover.",
    "storyCn": "泡鲁达是一道带着云南边境记忆的东南亚风甜品，常见于德宏、芒市、瑞丽和景洪一带。它像是被流动的生活塑造出来的味道：边境贸易、多民族饮食、热带食材、椰奶甜品文化，慢慢融合成一份清凉、柔软、热闹的夏日小吃。\n\n当地还流传着一个浪漫说法：一位缅甸青年为了追求心爱的傣族姑娘，把面包泡进香甜的牛奶里，做成了泡鲁达。无论这是历史还是民间故事，它都让泡鲁达多了一层温柔的情绪。简单的面包、牛奶和甜意，被讲成一份朴素又真诚的爱情承诺。\n\n椰奶、芒果、红豆、西米、烤面包和冰爽口感，让泡鲁达既可以喝，也可以舀。它不是普通饮品，而是一碗有层次、有故事、有边境夏日气息的甜品。",
    "colorScheme": {
      "bg": "bg-yellow-50",
      "text": "text-yellow-900",
      "tagBg": "bg-white",
      "tagText": "text-yellow-700"
    }
  },
  {
    "id": "oolong-tea",
    "number": "03",
    "nameEn": "Oolong Tea",
    "nameCn": "乌龙茶",
    "tags": [
      "Floral",
      "Balanced",
      "Lingering"
    ],
    "heroLineEn": "The tea between green and black: floral, rounded, and beautifully balanced.",
    "heroLineCn": "介于绿茶与红茶之间，一杯喝出花香、层次和回甘。",
    "storyEn": "Oolong tea is a traditional Chinese tea category that sits between green tea and black tea. It is often described in Chinese as semi-fermented tea, but more precisely, it is partially oxidized. That middle position is what makes it so beautiful: not as grassy and light as green tea, not as deep and bold as black tea, but balanced, aromatic, and full of quiet complexity.\n\nOolong is not one single flavour. Lightly oxidized oolongs can feel floral, fresh, and almost airy, with notes that remind people of flowers, fruit, and spring gardens. Roasted oolongs can become warmer and deeper, with nutty, caramel-like, or gently toasted aromas. This range makes oolong one of the most expressive tea worlds in Chinese culture.\n\nFor European guests who enjoy wine, coffee, or herbal infusions, oolong can feel surprisingly familiar: it has aroma, body, aftertaste, and mood. It is a tea that rewards slow sipping — calm, elegant, and never flat.",
    "storyCn": "乌龙茶是一类介于绿茶和红茶之间的中国传统茶。中文里常说它是“半发酵茶”，更准确地说，它是一种经过部分氧化的茶。正因为处在中间地带，乌龙茶才有它独特的美：不像绿茶那么清新浅淡，也不像红茶那么浓厚深沉，而是拥有刚刚好的茶香、层次和回甘。\n\n乌龙茶不是一种单一味道，而是一整个丰富的茶世界。轻发酵乌龙常带有花香、果香和清爽茶感，让人联想到春天、花园和干净的茶汤；焙火乌龙则更温暖、更厚实，可能出现坚果香、焦糖感和柔和的烘焙气息。\n\n对于喜欢咖啡、葡萄酒或花草茶的欧洲顾客来说，乌龙茶其实很容易共情：它有香气、有口感、有尾韵，也有情绪。慢慢喝时，越能感受到它安静、优雅、不单薄的层次。",
    "colorScheme": {
      "bg": "bg-orange-50",
      "text": "text-orange-900",
      "tagBg": "bg-white",
      "tagText": "text-orange-700"
    }
  },
  {
    "id": "matcha",
    "number": "04",
    "nameEn": "Matcha",
    "nameCn": "抹茶",
    "tags": [
      "Ceremonial",
      "Highland",
      "Umami"
    ],
    "heroLineEn": "Vivid green, silky smooth, and deeply rooted in East Asian tea culture.",
    "heroLineCn": "鲜绿、细腻、顺滑，一口喝到东方茶文化的清新层次。",
    "storyEn": "Matcha can be traced back to the powdered tea culture of China's Song Dynasty, when tea leaves were ground into fine powder, mixed with hot water, and whisked into a smooth tea. This powdered tea tradition later travelled to Japan, where it became deeply connected with the Japanese tea ceremony. Today, matcha is loved around the world, but its story begins with the elegance of East Asian tea culture.\n\nAt OneSip, the matcha we use is ceremonial-grade matcha from high-altitude mountain regions in China. Before harvest, the tea leaves are shade-grown for around 25 days. This slower, shaded growth encourages a brighter green colour, a softer umami taste, and a cleaner aftertaste. The high-altitude mountain environment gives the tea more depth: cool air, slower growth, and richer aroma.\n\nGood matcha should not simply look green. It should feel fine, smooth, and low in bitterness. Our matcha is ultra-finely milled into a silky powder, giving it a soft texture without a rough or grainy mouthfeel. When freshly prepared, it shows its brightest colour, clean tea aroma, and gentle lingering finish.",
    "storyCn": "抹茶的历史可以追溯到中国宋代的点茶文化：将茶叶研磨成细粉，再用热水调和、击拂成茶。后来，这种粉末茶文化传入日本，并在茶道中发展成今天大家熟悉的抹茶。现在抹茶被全世界喜爱，但它的故事，最早来自东亚茶文化里对细腻、仪式感和茶香的追求。\n\nOneSip 使用的是来自中国高海拔山区的茶道级抹茶。茶叶在采摘前经过约 25 天遮阴生长，让叶片积累更多叶绿素和氨基酸，从而带来更明亮的绿色、更柔和的鲜味和更干净的回甘。高海拔、低温、慢生长的环境，也让茶香更有层次。\n\n好的抹茶不只是颜色漂亮，更重要的是细腻、顺滑、低苦涩。我们的抹茶经过高细度研磨，呈现千目级细粉质感，冲调后口感更丝滑，不容易有粗糙颗粒感。新鲜冲调时，最能感受到它明亮的茶色、柔和的鲜味和自然回甘。",
    "colorScheme": {
      "bg": "bg-emerald-50",
      "text": "text-emerald-900",
      "tagBg": "bg-white",
      "tagText": "text-emerald-700"
    }
  },
  {
    "id": "honey-black-tea",
    "number": "05",
    "nameEn": "Honey Black Tea",
    "nameCn": "蜜香红茶",
    "tags": [
      "No Honey Added",
      "Naturally Fragrant"
    ],
    "heroLineEn": "No honey added — the soft honey aroma comes from the tea itself.",
    "heroLineCn": "不是加蜂蜜，而是茶叶自己长出的温柔蜜香。",
    "storyEn": "Honey Black Tea is a black tea with a natural honey-like aroma. The name can be surprising: many guests first assume honey has been added. In fact, \"honey\" here describes the fragrance of the tea itself — a soft, rounded aroma that feels warm, fruity, and gently sweet without becoming sugary.\n\nThe most fascinating part comes from nature. In traditional honey-aroma teas, a tiny insect called the tea green leafhopper feeds lightly on young tea leaves. The tea plant responds by developing special aroma compounds. Through careful tea processing, those natural aromas become mellow honey notes, ripe fruit warmth, and a smoother black tea body.\n\nThis is why Honey Black Tea does not taste like syrup. It is not a loud sweetness, but a layered fragrance: honey-like, floral-fruity, warm, and clean. For guests who like tea but dislike heavy bitterness, it offers a friendly entrance into black tea — elegant, aromatic, and comforting.",
    "storyCn": "蜜香红茶是一种带有天然蜜糖香气的红茶。很多人第一次看到“Honey Black Tea”，会以为里面加了蜂蜜；其实这里的“蜜香”，说的是茶叶本身散发出的蜂蜜般香气，而不是额外添加的蜂蜜。它不是直接的糖甜，而是一种更温柔、更圆润、更有熟果感的茶香。\n\n它最有趣的地方，来自自然。传统蜜香茶中，小绿叶蝉会轻轻吸食嫩茶叶的汁液，茶树受到刺激后，会产生特殊的天然香气物质。经过制茶工艺后，这种香气会转化成柔和的蜜香、果香和红茶的温润茶感。\n\n所以蜜香红茶喝起来不像糖浆，也不像香精。它的甜感是香气带出来的：有蜜糖感、有果香、有温度，也有干净的茶底。对于喜欢茶香、但不想要太强苦涩感的顾客来说，它是一杯很友好的红茶入口。",
    "colorScheme": {
      "bg": "bg-amber-100",
      "text": "text-amber-900",
      "tagBg": "bg-white",
      "tagText": "text-amber-700"
    }
  },
  {
    "id": "fresh-style-milk-tea",
    "number": "06",
    "nameEn": "Milk Latte",
    "nameCn": "茶拿铁",
    "tags": [
      "Smooth",
      "Tea-Forward",
      "Modern"
    ],
    "heroLineEn": "A lighter milk tea experience where tea and milk meet like a latte.",
    "heroLineCn": "像咖啡拿铁一样，让茶香和奶香更平衡地融合。",
    "storyEn": "Milk Latte is OneSip's new generation of milk tea. Think of it as a latte made with tea: just as a coffee latte uses milk to carry the aroma of espresso, a Milk Latte uses milk to carry the layers of Chinese tea. It is creamy, but still tea-forward; smooth, but not overly heavy.\n\nThis style moves away from the thick, industrial feeling that some people associate with milk tea. Instead, it focuses on balance: real tea aroma, smooth milk texture, soft sweetness, and a clean aftertaste. Jasmine can feel fresh and floral, osmanthus brings a gentle East Asian sweetness, oolong adds refreshing depth, and Honey Black Tea gives a natural honey-like fragrance.\n\nCompared with classic bubble milk tea, Milk Latte feels lighter and more refined. The focus is not on chewing, but on the way tea and milk blend together. It gives milk tea a calmer, more modern identity — closer to a cafe drink, but still rooted in Chinese tea culture.",
    "storyCn": "茶拿铁是 OneSip 新一代奶茶系列。你可以把它理解成“茶版的 Latte”：就像 coffee latte 用牛奶承接 espresso 的香气，Tea Latte 用奶承接中国茶的层次。它有奶香，但不会盖住茶味；它顺滑，但不会过分厚重。\n\n这一系列想颠覆很多人对奶茶“厚重、甜腻、工业化”的印象。它更强调平衡：真实茶汤的香气、奶的顺滑、柔和甜感和干净回甘。茉莉有清新的花香，桂花有柔和的东方甜香，乌龙有清爽茶感，蜜香红茶则带有天然的蜜糖香气。\n\n和经典珍珠奶茶相比，茶拿铁更轻盈，也更像一杯现代咖啡馆饮品。它的重点不是咀嚼感，而是茶与奶融合之后的层次：茶香、奶香、回甘和口感之间的平衡。它让奶茶变得更清爽、更精致，也更贴近当代顾客对“好喝但不厚重”的期待。",
    "colorScheme": {
      "bg": "bg-sky-50",
      "text": "text-sky-900",
      "tagBg": "bg-white",
      "tagText": "text-sky-700"
    }
  },
  {
    "id": "brown-sugar-tapioca-pearls",
    "number": "07",
    "nameEn": "Brown Sugar Tapioca Pearls",
    "nameCn": "黑糖珍珠",
    "tags": [
      "Iconic",
      "Chewy",
      "Comforting"
    ],
    "heroLineEn": "The original bubble tea comfort: creamy tea, soft sweetness, and chewy pearls.",
    "heroLineCn": "一杯经典珍珠奶茶，是很多人认识 bubble tea 的第一口。",
    "storyEn": "Classic Bubble Milk Tea is one of the most iconic drinks in modern milk tea culture. Widely believed to have originated in Taiwan in the 1980s, it brought tea, milk, sweetness, and chewy tapioca pearls into one cup. What began as a playful idea became a global symbol of bubble tea.\n\nThe pearls are made from tapioca starch and loved for their unique chewy texture. Their charm is not only in taste, but in rhythm: sip, chew, pause, sip again. In our classic version, brown sugar tapioca pearls bring warmth and depth, while the milk tea gives a soft, creamy body.\n\nThe reason this drink has travelled so far is simple: it feels satisfying. It is creamy, gently sweet, and full of texture. More than a drink, it feels like a small dessert in a cup — rich, familiar, comforting, and easy to love.",
    "storyCn": "经典珍珠奶茶可以说是现代奶茶文化中最有代表性的饮品之一。它通常被认为起源于 1980 年代的台湾，把茶、奶、甜感和 Q 弹珍珠结合在一起。一个简单又有趣的想法，后来一路走向全球，成为很多人第一次认识 bubble tea 的入口。\n\n珍珠由木薯淀粉制成，最迷人的地方是它独特的 Q 弹口感。它不只是味道，而是一种节奏：喝一口，嚼一嚼，停一下，再喝下一口。黑糖味珍珠带来温暖的焦糖感和咀嚼乐趣，奶茶则提供柔和、顺滑、熟悉的基底。\n\n经典珍珠奶茶的魅力，在于它的满足感。它有明显的奶香、柔和的甜味，也有珍珠带来的口感层次。它不只是解渴的饮品，更像一杯可以慢慢喝、慢慢嚼的小甜品——浓郁、柔软、熟悉，也很治愈。",
    "colorScheme": {
      "bg": "bg-orange-100",
      "text": "text-orange-950",
      "tagBg": "bg-white",
      "tagText": "text-orange-800"
    }
  },
  {
    "id": "sago-pearls",
    "number": "08",
    "nameEn": "Sago Pearls",
    "nameCn": "西米",
    "tags": [
      "Tiny",
      "Silky",
      "Tropical"
    ],
    "heroLineEn": "Tiny translucent pearls with a soft tropical dessert soul.",
    "heroLineCn": "小小西米，给每一口加一点热带甜品的柔滑感。",
    "storyEn": "Sago pearls are tiny starch pearls commonly used in Southeast Asian and Asian desserts. Traditionally, sago comes from starch extracted from tropical palm trees; today, the small pearls used in drinks and desserts are often made from starches such as tapioca starch. Once cooked, they become soft, translucent, and gently chewy.\n\nSago itself is very mild, and that is its magic. Instead of taking over the flavour, it quietly absorbs coconut milk, fresh milk, tea, or fruit aroma. It is familiar in mango sago, coconut milk desserts, Hong Kong-style sweet soups, and layered dessert bowls.\n\nUnlike boba pearls, sago is not strongly chewy. It is lighter, smoother, and more delicate. In a drink, it adds a soft texture that feels playful but not heavy — a subtle tropical dessert feeling that makes every sip a little more rounded.",
    "storyCn": "西米是一种常见于东南亚和亚洲甜品中的小颗粒配料。传统意义上的 sago，来自热带棕榈树中提取的淀粉；而今天在饮品和甜品里常见的小西米，则多由木薯淀粉等淀粉制成。煮熟后，它会变得半透明、柔软又 Q 滑。\n\n西米本身味道很淡，正因为这样，它特别会吸收椰奶、牛奶、茶汤或水果的香气。它常出现在东南亚甜品、港式杨枝甘露、椰奶西米露、芒果甜品和各种 dessert bowls 里，是很多亚洲甜品里温柔又熟悉的口感。\n\n它不像珍珠那样强烈有嚼劲，而是更轻、更滑、更细腻。在饮品里，西米不会抢走主味道，却会让每一口更柔软、更顺滑，也更有热带甜品的层次。",
    "colorScheme": {
      "bg": "bg-amber-50",
      "text": "text-amber-900",
      "tagBg": "bg-white",
      "tagText": "text-amber-700"
    }
  },
  {
    "id": "water-chestnut-popping-pearls",
    "number": "09",
    "nameEn": "Water Chestnut Popping Pearls",
    "nameCn": "马蹄爆珠",
    "tags": [
      "Crisp",
      "Playful",
      "Refreshing"
    ],
    "heroLineEn": "A tiny pop with a real crunchy water chestnut centre.",
    "heroLineCn": "咬下去先爆开，再遇到一颗清脆马蹄。",
    "storyEn": "Water chestnut is an aquatic plant commonly used in Asian food culture. Despite the name, it is not a nut, and it has nothing to do with a horse's hoof. It is loved for its crisp texture, mild sweetness, and refreshing taste, and often appears in Chinese desserts, sweet soups, and cooling drinks.\n\nWater Chestnut Popping Pearls are different from regular fruit popping pearls. Regular popping pearls usually burst with flavoured juice. These pearls hide a real piece of water chestnut inside, so the experience has two moments: first the pop, then the crisp little crunch.\n\nThat contrast is what makes it memorable. It feels light, playful, and surprising without becoming too sweet. For guests who like texture but want something fresher than classic tapioca pearls, water chestnut brings a clean, bright, crunchy layer to the drink.",
    "storyCn": "马蹄，也叫荸荠，是一种常见于亚洲饮食中的水生植物。它不是坚果，也不是马的蹄子，而是一种口感清脆、味道清甜的植物食材。马蹄常用于中式甜品、糖水和清爽饮品中，带来一种干净、爽口、带一点自然甜感的味道。\n\n马蹄爆珠和普通水果爆珠不同。普通爆珠通常是果味汁液在口中爆开，而马蹄爆珠的中间藏着一小块真实马蹄。咬下去时，外层先带来明显的爆破感，接着能吃到里面清脆的马蹄颗粒。\n\n这种一口两层的口感，是它最有记忆点的地方。它清爽、脆口、有趣，又不会太甜。对于喜欢口感、但想要比传统珍珠更清新的顾客来说，马蹄爆珠会让饮品多一点轻盈的惊喜感。",
    "colorScheme": {
      "bg": "bg-sky-100",
      "text": "text-sky-950",
      "tagBg": "bg-white",
      "tagText": "text-sky-800"
    }
  },
  {
    "id": "red-bean",
    "number": "10",
    "nameEn": "Sweet Red Bean",
    "nameCn": "红豆",
    "tags": [
      "Soft",
      "Nutty",
      "Comforting"
    ],
    "heroLineEn": "A soft East Asian dessert flavour with quiet comfort and gentle sweetness.",
    "heroLineCn": "软糯红豆香，是东亚甜品里最温柔的安心感。",
    "storyEn": "Sweet red bean, also known as adzuki bean, is a classic comfort flavour in East Asian desserts. In China, red beans are cooked into smooth paste, sweet soups, and traditional pastries. In Japan, sweet red bean filling appears in dorayaki, taiyaki, daifuku, and many wagashi sweets. Across different cultures, red bean carries the feeling of homemade sweetness.\n\nIts charm is not loud. It is not about intense sugar or dramatic flavour. Red bean is soft, mellow, slightly nutty, and gently sweet. It brings warmth to cold drinks and a dessert-like depth to creamy or coconut-based bowls.\n\nFor guests discovering Asian toppings for the first time, red bean can be surprising: it is a bean, but it belongs beautifully in dessert. Once tasted, it often feels familiar in a new way — quiet, comforting, and full of soft texture.",
    "storyCn": "红豆，也叫赤小豆，是东亚甜品文化里非常经典的食材。在中国，红豆常被煮成红豆沙、红豆糖水或红豆糕点，入口软糯，有一种很熟悉的家常甜味；在日本，红豆馅常出现在铜锣烧、鲷鱼烧、大福和各种和菓子里，是非常经典的甜点味道。\n\n红豆的魅力不是强烈的甜，而是细腻、温和、带一点坚果感和豆香的层次。它能给冰饮带来温暖感，也能让奶茶、椰奶或甜品碗多一层东方甜品的柔软感。\n\n对于第一次接触亚洲小料的顾客来说，红豆可能会有点惊喜：它是豆子，却可以成为甜品里很自然、很舒服的一部分。它不像珍珠那样 Q 弹，也不像爆珠那样跳跃，而是一种更安静、更温暖、更有 comfort feeling 的小料。",
    "colorScheme": {
      "bg": "bg-rose-50",
      "text": "text-rose-900",
      "tagBg": "bg-white",
      "tagText": "text-rose-700"
    }
  },
  {
    "id": "grass-jelly",
    "number": "11",
    "nameEn": "Grass Jelly",
    "nameCn": "仙草冻",
    "tags": [
      "Herbal",
      "Silky",
      "Refreshing"
    ],
    "heroLineEn": "A glossy herbal jelly with a calm, cooling dessert tradition.",
    "heroLineCn": "一口顺滑仙草，给饮品加一点东方夏日清凉感。",
    "storyEn": "Grass jelly is a traditional Asian dessert topping with a herbal background, enjoyed across Southern China, Taiwan, Vietnam, Thailand, Malaysia, Indonesia, and beyond. It is usually made by cooking the grass jelly plant into a dark herbal liquid, then setting it into a smooth black jelly.\n\nThe texture is soft and silky, with a mild herbal aroma. Its flavour is gentle rather than sweet, which makes it especially good at balancing richer tastes such as milk tea, brown sugar, or coconut milk. For many people in Asia, grass jelly belongs to warm-weather memories: shaved ice, sweet soups, summer drinks, and late-afternoon refreshment.\n\nGrass jelly is quiet, smooth, and elegant. It does not bounce like tapioca pearls or burst like popping pearls. Instead, it adds a calm herbal finish — a small touch of East Asian summer coolness in every spoonful.",
    "storyCn": "仙草冻是一种带有草本背景的亚洲传统甜品小料，常见于中国南方、台湾、越南、泰国、马来西亚和印尼等地。它通常由仙草这种植物熬煮出深色草本汁液，再凝固成柔滑的黑色冻状甜品。颜色深黑透亮，口感顺滑清爽，带有淡淡的草本香气。\n\n仙草冻的味道很温和，不会过甜，因此能平衡奶茶、黑糖或椰奶这类更浓郁的味道。对很多亚洲人来说，仙草冻和夏天的记忆联系在一起：糖水、刨冰、奶茶、椰奶甜品、午后清凉小吃。\n\n它不像珍珠那样 Q 弹，也不像爆珠那样跳跃，而是一种更安静、更顺滑、更有传统草本感的小料。每一口都像给饮品加上一点东方夏日的清凉感。",
    "colorScheme": {
      "bg": "bg-stone-200",
      "text": "text-stone-900",
      "tagBg": "bg-white",
      "tagText": "text-stone-700"
    }
  },
  {
    "id": "snow-fungus",
    "number": "12",
    "nameEn": "Tremella",
    "nameCn": "银耳",
    "tags": [
      "Silky",
      "Light",
      "Botanical"
    ],
    "heroLineEn": "A delicate Chinese dessert ingredient with a soft, translucent texture.",
    "heroLineCn": "柔软透明的银耳，是中国甜品里很温柔的一口。",
    "storyEn": "Snow fungus, also known as white fungus or silver ear mushroom, is a classic ingredient in Chinese dessert culture. It is an edible fungus with a delicate white colour. Once soaked and cooked, it becomes soft, translucent, and slightly jelly-like, almost like a small flower opening in the bowl.\n\nIn Chinese food culture, snow fungus is connected with gentle sweet soups and soothing dessert rituals. It is loved not for a strong flavour, but for its texture: light, silky, refreshing, and quietly elegant. Because its own taste is mild, it absorbs the aroma of fruits, tea, coconut milk, and sweet soups beautifully.\n\nFor guests used to fruit, cream, or pearls, snow fungus offers a different kind of texture. It is softer and more delicate, adding a Chinese dessert feeling that is light instead of heavy, gentle instead of loud.",
    "storyCn": "银耳，也叫雪耳，是中国传统甜品文化里非常经典的食材。它是一种食用菌，颜色洁白，泡发并煮熟后像一朵柔软透明的小花，口感滑嫩、轻盈，带有一点自然胶质感。\n\n在中国饮食文化里，银耳常出现在甜汤和清润系甜品中。它迷人的地方不是强烈的味道，而是质地：柔滑、清爽、轻盈、温柔。银耳本身味道很淡，却很会吸收水果、茶汤、椰奶和糖水的香气，让整杯饮品多一层细腻的东方甜品感。\n\n对于习惯水果、奶油或珍珠口感的顾客来说，银耳是一种不一样的体验。它不像珍珠那样 Q 弹，也不像爆珠那样强烈，而是更轻柔、更细腻，让饮品多一点温柔、清爽和中国甜品的层次。",
    "colorScheme": {
      "bg": "bg-stone-100",
      "text": "text-stone-800",
      "tagBg": "bg-white",
      "tagText": "text-stone-600"
    }
  },
  {
    "id": "matcha-cloud-foam",
    "number": "13",
    "nameEn": "Matcha Cloud Foam",
    "nameCn": "抹茶云顶",
    "tags": [
      "Creamy",
      "Coconut-Kissed",
      "Signature"
    ],
    "heroLineEn": "A dessert-like matcha cream cloud with a soft coconut finish.",
    "heroLineCn": "带椰香的抹茶云顶，是更轻松、更柔和的抹茶入口。",
    "storyEn": "Matcha Cloud Foam is a matcha cream topping developed by OneSip. It is not a regular milk foam, but a dessert-like matcha cream made with matcha powder, milk, cream, condensed milk, coconut milk, and coconut notes. The texture is smooth and creamy, with a gentle matcha aroma and a soft coconut finish.\n\nIt was created for people who are curious about matcha, but may not want a very strong or bitter first sip. Matcha has a unique tea aroma and a naturally slight bitterness. By turning it into a creamy cloud foam, the first taste becomes softer: creamy milk, light coconut, and then a gentle layer of matcha.\n\nThe experience is layered. The drink underneath stays light and tea-forward, while the cloud on top adds creaminess and aroma. Instead of a heavy milk cap, it feels like a small matcha dessert floating above the cup — soft, fragrant, and easy to love.",
    "storyCn": "抹茶云顶是 OneSip 自己研发的一款抹茶奶油顶。它不是普通奶盖，而是一款带有甜品感的 matcha cream，主要由抹茶粉、牛奶、奶油、炼乳、椰浆和椰子风味融合而成。口感细腻、柔滑，带有淡淡的抹茶香和椰奶香。\n\n它的诞生，是为了让更多人用更轻松的方式尝试抹茶。抹茶本身有独特的茶香和微微苦感，但不是每个人一开始都能接受浓烈的抹茶味。所以我们把抹茶做成更柔和、更 creamy 的云顶，让第一口先是奶油的顺滑和椰子的清香，之后才慢慢出现抹茶的茶香。\n\n它的体验是有层次的。下面的饮品保持清新的茶感，上面的云顶带来柔滑的抹茶椰香。它不是厚重奶盖，而像一小份漂浮在杯口的抹茶甜品——轻盈、柔软、香气温和，也更容易入口。",
    "colorScheme": {
      "bg": "bg-teal-50",
      "text": "text-teal-900",
      "tagBg": "bg-white",
      "tagText": "text-teal-700"
    }
  }
];
