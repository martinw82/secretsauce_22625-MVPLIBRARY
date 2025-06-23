export interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'Fast Food-Inspired' | 'Global-Inspired' | 'Community-Inspired';
  difficulty: 'Easy' | 'Medium' | 'Hard';
  prepTime: string;
  tasteMatch: number;
  dietaryTags: string[];
  ingredients: string[];
  steps: string[];
  story: string;
  mommasWisdom: string;
  perfectPairings: string;
  similarTo: string[];
}

export const recipes: Recipe[] = [
  {
    id: '1',
    title: 'Double-Decker Burger Sauce',
    description: 'Recreate the creamy, tangy flavor of the iconic sauce from McDonald\'s famous double-decker burger.',
    image: 'https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    category: 'Fast Food-Inspired',
    difficulty: 'Easy',
    prepTime: '<15 min',
    tasteMatch: 5,
    dietaryTags: ['Vegetarian'],
    ingredients: [
      '1/2 cup mayonnaise',
      '2 tbsp sweet pickle relish',
      '1 tbsp yellow mustard',
      '1 tsp white wine vinegar',
      '1/2 tsp onion powder',
      '1/4 tsp paprika',
      '1/8 tsp garlic powder'
    ],
    steps: [
      'In a medium bowl, combine mayonnaise, sweet pickle relish, and yellow mustard.',
      'Add white wine vinegar, onion powder, paprika, and garlic powder.',
      'Mix all ingredients thoroughly until well combined.',
      'Taste and adjust seasoning if needed.',
      'Cover and refrigerate for at least 30 minutes to let flavors meld.',
      'Serve on burgers, fries, or as a dipping sauce.'
    ],
    story: 'Born in 1968, this legendary sauce has graced billions of burgers worldwide. The secret lies in the perfect balance of tangy pickles, creamy mayo, and a whisper of spices that makes every bite unforgettable. Our copycat version captures that nostalgic flavor that takes you right back to your first bite.',
    mommasWisdom: 'Sugar, the secret is letting this sauce sit overnight in the fridge. Those flavors need time to get acquainted, just like old friends at a reunion!',
    perfectPairings: 'Perfect on burgers, fries, chicken sandwiches, or as a dip for vegetables',
    similarTo: ['Thousand Island Dressing', 'Russian Dressing', 'Fry Sauce']
  },
  {
    id: '2',
    title: '11-Spice Crispy Chicken',
    description: 'The legendary blend that made Kentucky famous, recreated for your home kitchen.',
    image: 'https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    category: 'Fast Food-Inspired',
    difficulty: 'Medium',
    prepTime: '15-30 min',
    tasteMatch: 4,
    dietaryTags: [],
    ingredients: [
      '1 whole chicken, cut into pieces',
      '2 cups all-purpose flour',
      '2/3 tbsp salt',
      '1/2 tbsp thyme',
      '1/2 tbsp basil',
      '1/3 tbsp oregano',
      '1 tbsp celery salt',
      '1 tbsp black pepper',
      '1 tbsp dried mustard',
      '4 tbsp paprika',
      '2 tbsp garlic salt',
      '1 tbsp ground ginger',
      '3 tbsp white pepper'
    ],
    steps: [
      'Mix all dry ingredients in a large bowl to create the secret spice blend.',
      'Soak chicken pieces in buttermilk for at least 2 hours.',
      'Remove chicken from buttermilk and coat thoroughly with seasoned flour.',
      'Let coated chicken rest for 15 minutes to set the coating.',
      'Heat oil to 350°F in a large pot or deep fryer.',
      'Fry chicken pieces for 12-15 minutes until golden brown and cooked through.',
      'Drain on paper towels and serve hot.'
    ],
    story: 'Colonel Sanders perfected this recipe through years of experimentation, and it became the foundation of a global empire. The magic number 11 represents the perfect harmony of herbs and spices that creates that unmistakable flavor profile that has delighted generations.',
    mommasWisdom: 'Darlin\', the secret is in the pressure! If you got a pressure cooker, use it. But if not, don\'t rush the frying - good chicken takes time.',
    perfectPairings: 'Serve with mashed potatoes, coleslaw, and biscuits for the full experience',
    similarTo: ['Southern Fried Chicken', 'Nashville Hot Chicken', 'Buttermilk Fried Chicken']
  },
  {
    id: '3',
    title: 'Sweet Tangy Dipping Sauce',
    description: 'The perfect balance of sweet and sour that makes everything taste better.',
    image: 'https://images.pexels.com/photos/4518840/pexels-photo-4518840.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    category: 'Fast Food-Inspired',
    difficulty: 'Easy',
    prepTime: '<15 min',
    tasteMatch: 5,
    dietaryTags: ['Vegan', 'Gluten-Free'],
    ingredients: [
      '1/2 cup apricot preserves',
      '2 tbsp Dijon mustard',
      '2 tbsp honey',
      '1 tbsp apple cider vinegar',
      '1 tsp soy sauce',
      '1/2 tsp garlic powder',
      '1/4 tsp red pepper flakes'
    ],
    steps: [
      'Combine apricot preserves, Dijon mustard, and honey in a small saucepan.',
      'Add apple cider vinegar, soy sauce, and garlic powder.',
      'Heat over medium-low heat, stirring constantly.',
      'Simmer for 3-5 minutes until smooth and well combined.',
      'Add red pepper flakes for a gentle kick.',
      'Cool completely before serving.'
    ],
    story: 'This sauce emerged from the fast-food innovation of the 1980s when restaurants began experimenting with Asian-inspired flavors. What started as a simple sweet and sour has evolved into a complex condiment that bridges Eastern and Western tastes.',
    mommasWisdom: 'Honey, if you want to fancy it up, add a splash of rice wine vinegar. It gives it that extra zing that\'ll make folks ask for the recipe!',
    perfectPairings: 'Excellent with chicken nuggets, spring rolls, grilled pork, or as a glaze for salmon',
    similarTo: ['Duck Sauce', 'Sweet and Sour Sauce', 'Apricot Glaze']
  },
  {
    id: '4',
    title: 'Animal-Style Fries Sauce',
    description: 'The secret spread that transforms ordinary fries into a California cult classic.',
    image: 'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    category: 'Fast Food-Inspired',
    difficulty: 'Easy',
    prepTime: '<15 min',
    tasteMatch: 5,
    dietaryTags: ['Vegetarian'],
    ingredients: [
      '1/2 cup mayonnaise',
      '1/4 cup ketchup',
      '2 tbsp sweet pickle relish',
      '1 tbsp dill pickle juice',
      '1 tsp sugar',
      '1/2 tsp onion powder',
      '1/4 tsp garlic powder'
    ],
    steps: [
      'Whisk together mayonnaise and ketchup until smooth.',
      'Stir in sweet pickle relish and dill pickle juice.',
      'Add sugar, onion powder, and garlic powder.',
      'Mix thoroughly until all ingredients are well incorporated.',
      'Taste and adjust sweetness or tanginess as desired.',
      'Chill for at least 1 hour before serving.'
    ],
    story: 'Born on the West Coast, this sauce represents the rebellious spirit of California\'s burger culture. The "Animal Style" preparation became legendary among those in the know, turning a simple order into a secret handshake that connected burger enthusiasts across the Golden State.',
    mommasWisdom: 'Sugar, the trick is getting that pink color just right - not too red, not too pale. It should look like a California sunset!',
    perfectPairings: 'Perfect on fries, burgers, or as a dipping sauce for onion rings',
    similarTo: ['Thousand Island', 'Fry Sauce', 'Burger Spread']
  },
  {
    id: '5',
    title: 'Layered Iced Coffee',
    description: 'Recreation of the popular coffee shop\'s signature cold brew blend.',
    image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    category: 'Fast Food-Inspired',
    difficulty: 'Medium',
    prepTime: '15-30 min',
    tasteMatch: 4,
    dietaryTags: ['Vegetarian'],
    ingredients: [
      '2 cups strong cold brew coffee',
      '1/2 cup heavy cream',
      '1/4 cup vanilla syrup',
      '2 tbsp caramel sauce',
      '1 tbsp brown sugar',
      '1/2 tsp vanilla extract',
      'Ice cubes'
    ],
    steps: [
      'Brew strong coffee and let it cool completely.',
      'In a small bowl, whip heavy cream with vanilla extract until soft peaks form.',
      'Mix vanilla syrup and brown sugar until dissolved.',
      'Fill glasses with ice cubes.',
      'Pour sweetened coffee over ice, leaving room at the top.',
      'Carefully layer the whipped cream on top.',
      'Drizzle with caramel sauce and serve immediately.'
    ],
    story: 'This beloved beverage transformed the way America thinks about iced coffee. What started as a simple cold coffee has evolved into an artful creation that balances sweetness, creaminess, and bold coffee flavor in perfect harmony.',
    mommasWisdom: 'Darlin\', the secret is in the layers. Pour that cream real slow over the back of a spoon - it\'ll float like a cloud on your coffee!',
    perfectPairings: 'Enjoy with pastries, donuts, or as an afternoon pick-me-up',
    similarTo: ['Iced Macchiato', 'Cold Brew Float', 'Vietnamese Iced Coffee']
  },
  {
    id: '6',
    title: 'Creamy Ranch Dressing',
    description: 'The original Hidden Valley recipe that started America\'s ranch obsession.',
    image: 'https://images.pexels.com/photos/4518844/pexels-photo-4518844.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    category: 'Fast Food-Inspired',
    difficulty: 'Easy',
    prepTime: '<15 min',
    tasteMatch: 5,
    dietaryTags: ['Vegetarian', 'Gluten-Free'],
    ingredients: [
      '1 cup mayonnaise',
      '1/2 cup sour cream',
      '1/4 cup buttermilk',
      '1 tbsp fresh chives, chopped',
      '1 tbsp fresh dill, chopped',
      '1 tsp garlic powder',
      '1 tsp onion powder',
      '1/2 tsp salt',
      '1/4 tsp black pepper'
    ],
    steps: [
      'In a medium bowl, whisk together mayonnaise and sour cream.',
      'Gradually add buttermilk, whisking until smooth.',
      'Stir in chopped chives and dill.',
      'Add garlic powder, onion powder, salt, and pepper.',
      'Mix thoroughly until all herbs and spices are evenly distributed.',
      'Refrigerate for at least 2 hours to develop flavors.',
      'Thin with additional buttermilk if desired before serving.'
    ],
    story: 'Created in 1972 at Hidden Valley Ranch in California, this dressing was originally served to guests at a dude ranch. Its popularity exploded when the recipe was bottled and sold, eventually becoming America\'s most popular salad dressing and spawning countless variations.',
    mommasWisdom: 'The key is fresh herbs, honey! Dried herbs work in a pinch, but fresh dill and chives make all the difference. It\'s like comparing a black and white photo to full color!',
    perfectPairings: 'Perfect with salads, vegetables, chicken wings, pizza, and pretty much everything else',
    similarTo: ['Green Goddess Dressing', 'Blue Cheese Dressing', 'Buttermilk Dressing']
  },
  {
    id: '7',
    title: 'Chimichurri',
    description: 'Argentina\'s beloved herb sauce that brings life to any grilled meat.',
    image: 'https://images.pexels.com/photos/8846002/pexels-photo-8846002.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    category: 'Global-Inspired',
    difficulty: 'Easy',
    prepTime: '<15 min',
    tasteMatch: 5,
    dietaryTags: ['Vegan', 'Gluten-Free', 'Dairy-Free'],
    ingredients: [
      '1 cup fresh parsley, packed',
      '1/4 cup fresh cilantro',
      '3 cloves garlic, minced',
      '1/2 cup olive oil',
      '2 tbsp red wine vinegar',
      '1 tsp salt',
      '1/2 tsp red pepper flakes',
      '1/4 tsp black pepper'
    ],
    steps: [
      'Finely chop parsley and cilantro, or pulse in a food processor.',
      'Mince garlic cloves very finely.',
      'In a bowl, combine herbs and garlic.',
      'Slowly drizzle in olive oil while stirring.',
      'Add red wine vinegar, salt, red pepper flakes, and black pepper.',
      'Mix well and let stand for 30 minutes before serving.',
      'Can be stored in refrigerator for up to 1 week.'
    ],
    story: 'Originating in Argentina and Uruguay, chimichurri is deeply rooted in gaucho culture. Legend says it was named after Jimmy McCurry, an Irish soldier, though the true origin remains deliciously mysterious. What\'s certain is its ability to transform simple grilled meats into extraordinary meals.',
    mommasWisdom: 'Mija, don\'t you dare use dried herbs for this! Fresh is the only way to go. And let it sit - patience makes the flavors dance together like old lovers.',
    perfectPairings: 'Essential with grilled steak, fantastic on roasted vegetables, fish, or crusty bread',
    similarTo: ['Pesto', 'Salsa Verde', 'Gremolata']
  },
  {
    id: '8',
    title: 'Harissa',
    description: 'North Africa\'s fiery chili paste that adds complex heat to any dish.',
    image: 'https://images.pexels.com/photos/4198022/pexels-photo-4198022.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    category: 'Global-Inspired',
    difficulty: 'Medium',
    prepTime: '15-30 min',
    tasteMatch: 4,
    dietaryTags: ['Vegan', 'Gluten-Free', 'Dairy-Free'],
    ingredients: [
      '12 dried red chilies, stems removed',
      '6 cloves garlic',
      '1 tsp caraway seeds',
      '1 tsp coriander seeds',
      '1 tsp cumin seeds',
      '1 tsp salt',
      '2 tbsp tomato paste',
      '1/4 cup olive oil'
    ],
    steps: [
      'Soak dried chilies in hot water for 30 minutes until softened.',
      'Toast caraway, coriander, and cumin seeds in a dry pan until fragrant.',
      'Grind toasted spices in a spice grinder or mortar and pestle.',
      'Drain chilies and remove seeds for less heat if desired.',
      'In a food processor, combine chilies, garlic, ground spices, and salt.',
      'Add tomato paste and process until smooth.',
      'With processor running, slowly drizzle in olive oil.',
      'Store in refrigerator for up to 1 month.'
    ],
    story: 'Harissa traces its roots to Tunisia, where it\'s considered the national condiment. Brought by Arab traders and perfected over centuries, each family guards their unique blend. The word "harissa" comes from the Arabic "harasa," meaning "to break into pieces" - referring to the grinding of chilies.',
    mommasWisdom: 'Honey child, this sauce is like a symphony - every spice plays its part. Don\'t rush the toasting of those seeds, that\'s where the magic happens!',
    perfectPairings: 'Amazing with grilled meats, roasted vegetables, couscous, or stirred into soups and stews',
    similarTo: ['Sriracha', 'Sambal Oelek', 'Berbere']
  },
  {
    id: '9',
    title: 'Gochujang',
    description: 'Korea\'s beloved fermented chili paste with deep, complex umami flavors.',
    image: 'https://images.pexels.com/photos/4518835/pexels-photo-4518835.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    category: 'Global-Inspired',
    difficulty: 'Hard',
    prepTime: '>30 min',
    tasteMatch: 4,
    dietaryTags: ['Vegan', 'Gluten-Free'],
    ingredients: [
      '2 cups Korean chili flakes (gochugaru)',
      '1 cup glutinous rice flour',
      '1/2 cup fermented soybean paste (meju)',
      '1/4 cup salt',
      '2 tbsp rice syrup or honey',
      '4 cups water',
      '2 tbsp rice vinegar'
    ],
    steps: [
      'Make rice paste by cooking glutinous rice flour with water until thick.',
      'Cool rice paste to room temperature.',
      'Mix gochugaru with salt in a large bowl.',
      'Add cooled rice paste and fermented soybean paste.',
      'Stir in rice syrup and rice vinegar.',
      'Mix thoroughly until well combined.',
      'Transfer to a clean jar and cover with cheesecloth.',
      'Ferment at room temperature for 1-2 weeks, stirring daily.',
      'Refrigerate when desired flavor is achieved.'
    ],
    story: 'Gochujang has been a cornerstone of Korean cuisine for over 1,000 years. Originally developed as a way to preserve chilies and add nutrition during harsh winters, it evolved into the complex, sweet-spicy paste that defines Korean flavor profiles today.',
    mommasWisdom: 'Sweet pea, this is a labor of love that takes time. But trust the process - good things come to those who wait, and great gochujang comes to those who ferment!',
    perfectPairings: 'Perfect in Korean BBQ, bibimbap, soups, or as a glaze for roasted vegetables',
    similarTo: ['Miso Paste', 'Doubanjiang', 'Sambal Oelek']
  },
  {
    id: '10',
    title: 'Tzatziki',
    description: 'Greece\'s cooling cucumber-yogurt sauce that\'s perfect for hot summer days.',
    image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    category: 'Global-Inspired',
    difficulty: 'Easy',
    prepTime: '<15 min',
    tasteMatch: 5,
    dietaryTags: ['Vegetarian', 'Gluten-Free'],
    ingredients: [
      '2 cups Greek yogurt',
      '1 large cucumber, grated',
      '3 cloves garlic, minced',
      '2 tbsp olive oil',
      '1 tbsp lemon juice',
      '2 tbsp fresh dill, chopped',
      '1 tsp salt',
      '1/4 tsp white pepper'
    ],
    steps: [
      'Grate cucumber and sprinkle with salt. Let drain in a colander for 30 minutes.',
      'Squeeze grated cucumber in a clean kitchen towel to remove excess moisture.',
      'In a bowl, combine Greek yogurt with minced garlic.',
      'Add drained cucumber, olive oil, and lemon juice.',
      'Stir in fresh dill, salt, and white pepper.',
      'Mix gently until well combined.',
      'Refrigerate for at least 2 hours before serving.',
      'Garnish with extra dill before serving.'
    ],
    story: 'Tzatziki\'s origins stretch back to ancient Greece, where it was served to cool the palate during hot Mediterranean summers. The combination of yogurt, cucumber, and herbs creates a refreshing accompaniment that has remained virtually unchanged for centuries.',
    mommasWisdom: 'Darling, the secret is getting all that water out of the cucumber. Soggy tzatziki is nobody\'s friend! Squeeze it like you mean it!',
    perfectPairings: 'Classic with gyros, grilled lamb, pita bread, or as a refreshing dip for vegetables',
    similarTo: ['Raita', 'Cacik', 'Tarator']
  },
  {
    id: '11',
    title: 'Cinnamon Swirl Rolls',
    description: 'Soft, pillowy rolls with a perfect cinnamon-sugar swirl and cream cheese glaze.',
    image: 'https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    category: 'Community-Inspired',
    difficulty: 'Hard',
    prepTime: '>30 min',
    tasteMatch: 5,
    dietaryTags: ['Vegetarian'],
    ingredients: [
      '3 cups all-purpose flour',
      '1/4 cup sugar',
      '1 packet active dry yeast',
      '1 tsp salt',
      '1/2 cup warm milk',
      '1/4 cup butter, melted',
      '1 egg',
      '1/2 cup brown sugar',
      '2 tbsp cinnamon',
      '4 oz cream cheese',
      '1 cup powdered sugar'
    ],
    steps: [
      'Dissolve yeast in warm milk with a pinch of sugar. Let foam for 5 minutes.',
      'Mix flour, sugar, and salt in a large bowl.',
      'Add yeast mixture, melted butter, and egg. Knead until smooth.',
      'Place in greased bowl, cover, and rise for 1 hour.',
      'Roll dough into rectangle. Brush with butter.',
      'Mix brown sugar and cinnamon. Sprinkle over dough.',
      'Roll up tightly and cut into 12 pieces.',
      'Place in greased pan, rise 30 minutes.',
      'Bake at 375°F for 25-30 minutes until golden.',
      'Make glaze with cream cheese and powdered sugar.',
      'Drizzle warm rolls with glaze before serving.'
    ],
    story: 'These beloved rolls have graced American breakfast tables for generations. Born from European baking traditions and perfected in American kitchens, they represent the comfort and warmth of home baking at its finest.',
    mommasWisdom: 'Sugar, the key is patience with the rising. Don\'t rush it - good bread takes time, just like good relationships!',
    perfectPairings: 'Perfect with coffee, tea, or a tall glass of cold milk',
    similarTo: ['Danish Pastry', 'Sticky Buns', 'Coffee Cake']
  },
  {
    id: '12',
    title: 'Spicy Garlic Aioli',
    description: 'A fiery twist on classic aioli that adds bold flavor to any dish.',
    image: 'https://images.pexels.com/photos/4518847/pexels-photo-4518847.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    category: 'Community-Inspired',
    difficulty: 'Medium',
    prepTime: '15-30 min',
    tasteMatch: 4,
    dietaryTags: ['Vegetarian', 'Gluten-Free'],
    ingredients: [
      '6 cloves garlic',
      '2 egg yolks',
      '1 cup olive oil',
      '2 tbsp lemon juice',
      '1 tsp Dijon mustard',
      '1 tsp salt',
      '1/2 tsp cayenne pepper',
      '1/4 tsp smoked paprika'
    ],
    steps: [
      'Mince garlic cloves very finely or use a garlic press.',
      'In a bowl, whisk egg yolks with lemon juice and mustard.',
      'Very slowly drizzle in olive oil while whisking constantly.',
      'Continue until mixture thickens to mayonnaise consistency.',
      'Stir in minced garlic, salt, cayenne, and smoked paprika.',
      'Taste and adjust seasoning as needed.',
      'Let stand for 30 minutes to develop flavors.',
      'Refrigerate until ready to serve.'
    ],
    story: 'Aioli originated in the Mediterranean, where garlic and olive oil were transformed into liquid gold. This spicy version adds modern heat to the ancient recipe, creating a condiment that bridges traditional technique with contemporary flavor preferences.',
    mommasWisdom: 'Honey, making aioli is like taming a wild horse - you gotta go slow and steady. Rush it, and it\'ll break on you faster than a promise!',
    perfectPairings: 'Excellent with grilled seafood, roasted vegetables, sandwiches, or as a dip for fries',
    similarTo: ['Garlic Mayo', 'Rouille', 'Alioli']
  }
];