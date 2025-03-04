const a = [
  {
    name: "Apple Pie",
    ingredients: ["Apples", "Flour", "Sugar", "Butter", "Cinnamon", "Nutmeg", "Lemon juice", "Salt"],
    preparation: [
      "Preheat oven to 375°F (190°C)",
      "Mix apples with sugar, cinnamon, nutmeg, and lemon juice",
      "Roll out pie dough and line a pie dish",
      "Fill with apple mixture",
      "Top with another layer of dough",
      "Bake for 45-50 minutes until golden brown"
    ]
  },
  {
    name: "Avocado Toast",
    ingredients: ["Avocado", "Bread", "Lemon juice", "Salt", "Pepper", "Olive oil", "Chili flakes"],
    preparation: [
      "Toast slices of bread",
      "Mash avocado with lemon juice, salt, and pepper",
      "Spread on the toasted bread",
      "Drizzle with olive oil",
      "Sprinkle with chili flakes"
    ]
  },
  {
    name: "Alfredo Pasta",
    ingredients: ["Pasta", "Heavy cream", "Butter", "Garlic", "Parmesan cheese", "Salt", "Pepper"],
    preparation: [
      "Cook pasta according to package directions",
      "In a pan, melt butter and sauté garlic",
      "Add cream and bring to a simmer",
      "Stir in Parmesan cheese and season with salt and pepper",
      "Toss pasta in the sauce and serve"
    ]
  },
  {
    name: "Apple Cider Donuts",
    ingredients: ["Flour", "Sugar", "Baking powder", "Apple cider", "Eggs", "Cinnamon", "Nutmeg", "Butter"],
    preparation: [
      "Preheat oven to 350°F (175°C)",
      "Mix dry ingredients (flour, sugar, baking powder, cinnamon, nutmeg)",
      "Add apple cider, eggs, and melted butter",
      "Mix until smooth",
      "Pour into donut molds",
      "Bake for 20-25 minutes"
    ]
  },
  {
    name: "Arancini",
    ingredients: ["Risotto rice", "Mozzarella", "Eggs", "Breadcrumbs", "Parmesan cheese", "Marinara sauce", "Vegetable oil"],
    preparation: [
      "Cook risotto rice and allow to cool",
      "Shape rice into balls, filling each with mozzarella",
      "Dip in beaten eggs, then breadcrumbs",
      "Fry in hot oil until golden",
      "Serve with marinara sauce"
    ]
  },
  {
    name: "Angus Beef Burger",
    ingredients: ["Ground Angus beef", "Buns", "Lettuce", "Tomato", "Cheddar cheese", "Ketchup", "Mustard", "Salt", "Pepper"],
    preparation: [
      "Form ground beef into patties and season with salt and pepper",
      "Grill or pan-fry the patties to desired doneness",
      "Toast buns",
      "Assemble with lettuce, tomato, cheese, ketchup, and mustard"
    ]
  },
  {
    name: "Acai Bowl",
    ingredients: ["Acai puree", "Banana", "Granola", "Chia seeds", "Honey", "Berries"],
    preparation: [
      "Blend acai puree and banana until smooth",
      "Pour into a bowl",
      "Top with granola, chia seeds, honey, and fresh berries"
    ]
  },
  {
    name: "Avocado Chicken Salad",
    ingredients: ["Chicken breast", "Avocado", "Lettuce", "Tomato", "Red onion", "Lemon juice", "Olive oil", "Salt", "Pepper"],
    preparation: [
      "Cook chicken breast and shred",
      "Cube avocado and chop vegetables",
      "Toss chicken, avocado, and veggies with olive oil, lemon juice, salt, and pepper"
    ]
  },
  {
    name: "Asparagus Risotto",
    ingredients: ["Asparagus", "Arborio rice", "Vegetable broth", "Onion", "Garlic", "Parmesan cheese", "Butter", "White wine"],
    preparation: [
      "Sauté onion and garlic in butter",
      "Add rice and cook for 2 minutes",
      "Gradually add broth, stirring constantly",
      "Add cooked asparagus",
      "Stir in Parmesan and white wine"
    ]
  },
  {
    name: "Almond Croissants",
    ingredients: ["Puff pastry", "Almond paste", "Butter", "Sugar", "Eggs", "Vanilla extract"],
    preparation: [
      "Roll out puff pastry and cut into triangles",
      "Spread almond paste on each triangle",
      "Fold into croissant shapes",
      "Brush with egg wash",
      "Bake at 375°F (190°C) for 15-20 minutes"
    ]
  },
  {
    name: "Aloo Gobi",
    ingredients: ["Potatoes", "Cauliflower", "Tomatoes", "Garlic", "Ginger", "Cumin seeds", "Coriander powder", "Turmeric"],
    preparation: [
      "Heat oil and sauté garlic, ginger, and cumin seeds",
      "Add chopped potatoes and cauliflower, cooking until soft",
      "Add tomatoes, coriander powder, turmeric, and salt",
      "Simmer until vegetables are tender"
    ]
  },
  {
    name: "Amaretto Sour",
    ingredients: ["Amaretto", "Lemon juice", "Simple syrup", "Egg white", "Ice"],
    preparation: [
      "Shake amaretto, lemon juice, simple syrup, and egg white with ice",
      "Strain into a glass",
      "Garnish with a cherry"
    ]
  },
  {
    name: "Anzac Biscuits",
    ingredients: ["Oats", "Coconut", "Golden syrup", "Butter", "Baking soda", "Flour", "Sugar"],
    preparation: [
      "Preheat oven to 350°F (175°C)",
      "Combine oats, coconut, flour, and sugar",
      "Melt butter and golden syrup, then add baking soda and mix",
      "Shape into small biscuits",
      "Bake for 10-12 minutes"
    ]
  },
  {
    name: "Aloo Tikki",
    ingredients: ["Potatoes", "Onion", "Green chilies", "Coriander leaves", "Bread crumbs", "Garam masala", "Salt"],
    preparation: [
      "Boil and mash potatoes",
      "Add finely chopped onion, green chilies, coriander, garam masala, and bread crumbs",
      "Shape into patties",
      "Shallow fry until golden brown"
    ]
  },
  {
    name: "Apricot Jam",
    ingredients: ["Apricots", "Sugar", "Lemon juice", "Pectin"],
    preparation: [
      "Cook apricots and sugar with lemon juice until soft",
      "Add pectin and cook until thick",
      "Pour into sterilized jars",
      "Seal"
    ]
  },
  {
    name: "Arugula Salad",
    ingredients: ["Arugula", "Olive oil", "Balsamic vinegar", "Parmesan cheese", "Walnuts", "Salt", "Pepper"],
    preparation: [
      "Toss arugula with olive oil, balsamic vinegar, salt, and pepper",
      "Garnish with shaved Parmesan",
      "Sprinkle with toasted walnuts"
    ]
  },
  {
    name: "Almond Butter Smoothie",
    ingredients: ["Almond butter", "Banana", "Milk", "Honey", "Ice"],
    preparation: [
      "Blend almond butter, banana, milk, honey, and ice until smooth"
    ]
  },
  {
    name: "Apple Crisp",
    ingredients: ["Apples", "Brown sugar", "Oats", "Butter", "Cinnamon", "Flour"],
    preparation: [
      "Preheat oven to 350°F (175°C)",
      "Toss apples with sugar, cinnamon, and flour",
      "Mix oats and butter",
      "Spread over apples",
      "Bake for 40-45 minutes"
    ]
  },
  {
    name: "Acorn Squash Soup",
    ingredients: ["Acorn squash", "Onion", "Carrot", "Vegetable broth", "Garlic", "Ginger", "Coconut milk"],
    preparation: [
      "Roast acorn squash until tender",
      "Sauté onion, garlic, carrot, and ginger",
      "Add roasted squash, vegetable broth, and coconut milk",
      "Simmer",
      "Blend until smooth"
    ]
  },
  {
    name: "Antipasto Salad",
    ingredients: ["Olives", "Salami", "Cheese", "Tomatoes", "Artichoke hearts", "Cucumber", "Italian dressing"],
    preparation: [
      "Mix all ingredients in a large bowl",
      "Toss with Italian dressing",
      "Serve chilled"
    ]
  },
  {
    name: "Ahi Tuna Poke Bowl",
    ingredients: ["Ahi tuna", "Soy sauce", "Sesame oil", "Rice", "Avocado", "Seaweed", "Cucumber", "Sesame seeds"],
    preparation: [
      "Cube tuna and marinate in soy sauce and sesame oil",
      "Cook rice and let it cool",
      "Assemble poke bowl with tuna, rice, avocado, cucumber, and seaweed",
      "Sprinkle sesame seeds on top"
    ]
  },
  {
    name: "Artichoke Dip",
    ingredients: ["Artichoke hearts", "Cream cheese", "Parmesan cheese", "Garlic", "Mayonnaise", "Lemon juice"],
    preparation: [
      "Mix artichokes, cream cheese, mayonnaise, garlic, and lemon juice",
      "Bake at 350°F (175°C) for 25 minutes",
      "Sprinkle Parmesan cheese on top",
      "Serve with crackers"
    ]
  }
];
  
  const b = [
    {
      name: "Biryani",
      ingredients: ["Basmati rice", "Chicken or vegetables", "Yogurt", "Onions", "Tomatoes", "Ginger-garlic paste", "Biryani spices", "Turmeric", "Red chili powder", "Saffron", "Coriander leaves", "Mint leaves", "Ghee or oil", "Salt"],
      preparation: "1. Marinate meat/vegetables. 2. Cook rice partially. 3. Sauté onions and spices. 4. Layer rice and meat. 5. Cook on low heat (dum)."
    },
    {
      name: "Borscht",
      ingredients: ["Beetroots", "Potatoes", "Carrots", "Onion", "Cabbage", "Tomato paste", "Vegetable broth", "Garlic", "Bay leaves", "Vinegar", "Salt", "Pepper", "Sour cream"],
      preparation: "1. Sauté onions, carrots, and garlic. 2. Add beetroots and tomato paste. 3. Add potatoes, cabbage, and broth. 4. Simmer and serve with sour cream."
    },
    {
      name: "Baklava",
      ingredients: ["Phyllo dough", "Butter", "Walnuts or pistachios", "Sugar", "Cinnamon", "Honey", "Water", "Lemon juice"],
      preparation: "1. Layer phyllo dough with nuts and butter. 2. Bake until golden. 3. Pour honey syrup over baked layers. 4. Let it soak before serving."
    },
    {
      name: "Banana Bread",
      ingredients: ["Bananas", "Flour", "Sugar", "Eggs", "Butter", "Baking soda", "Salt", "Vanilla extract"],
      preparation: "1. Mash bananas. 2. Mix with sugar, eggs, and butter. 3. Add flour, baking soda, and salt. 4. Bake at 350°F (175°C) for 50-60 minutes."
    },
    {
      name: "Beef Bourguignon",
      ingredients: ["Beef", "Red wine", "Beef broth", "Carrots", "Onions", "Garlic", "Mushrooms", "Bacon", "Tomato paste", "Thyme", "Bay leaves", "Salt", "Pepper"],
      preparation: "1. Sear beef and bacon. 2. Sauté vegetables. 3. Add wine, broth, and herbs. 4. Simmer until beef is tender."
    },
    {
      name: "Baba Ganoush",
      ingredients: ["Eggplants", "Tahini", "Garlic", "Lemon juice", "Olive oil", "Salt", "Parsley"],
      preparation: "1. Roast eggplants until soft. 2. Scoop out flesh and blend with tahini, garlic, lemon juice, and olive oil. 3. Garnish with parsley."
    },
    {
      name: "Beef Tacos",
      ingredients: ["Ground beef", "Taco shells", "Lettuce", "Tomatoes", "Cheese", "Onion", "Taco seasoning", "Sour cream", "Salsa"],
      preparation: "1. Cook beef with taco seasoning. 2. Fill taco shells with beef, lettuce, tomatoes, cheese, and onions. 3. Top with sour cream and salsa."
    },
    {
      name: "Blueberry Muffins",
      ingredients: ["Flour", "Sugar", "Blueberries", "Eggs", "Butter", "Milk", "Baking powder", "Vanilla extract", "Salt"],
      preparation: "1. Mix dry ingredients. 2. Add wet ingredients and fold in blueberries. 3. Bake at 375°F (190°C) for 20-25 minutes."
    },
    {
      name: "Butter Chicken",
      ingredients: ["Chicken", "Tomato puree", "Cream", "Butter", "Ginger-garlic paste", "Garam masala", "Turmeric", "Cumin", "Coriander", "Salt"],
      preparation: "1. Marinate chicken with spices. 2. Cook chicken and set aside. 3. Make a sauce with tomato puree, cream, and butter. 4. Add chicken and simmer."
    },
    {
      name: "Beef Stroganoff",
      ingredients: ["Beef", "Mushrooms", "Onion", "Sour cream", "Beef broth", "Flour", "Butter", "Mustard", "Salt", "Pepper"],
      preparation: "1. Sauté beef and set aside. 2. Cook mushrooms and onions. 3. Add broth, flour, and sour cream. 4. Combine with beef and serve over noodles."
    },
    {
      name: "Biscuits and Gravy",
      ingredients: ["Flour", "Butter", "Milk", "Baking powder", "Salt", "Sausage", "Pepper"],
      preparation: "1. Make biscuits by mixing flour, butter, and milk. 2. Bake at 450°F (230°C) for 10-12 minutes. 3. Cook sausage and make gravy with flour and milk. 4. Serve biscuits with gravy."
    },
    {
      name: "Black Bean Soup",
      ingredients: ["Black beans", "Onion", "Garlic", "Bell pepper", "Vegetable broth", "Cumin", "Chili powder", "Lime juice", "Cilantro"],
      preparation: "1. Sauté onions, garlic, and bell pepper. 2. Add beans, broth, and spices. 3. Simmer and blend partially. 4. Garnish with lime juice and cilantro."
    },
    {
      name: "Beef Wellington",
      ingredients: ["Beef tenderloin", "Puff pastry", "Mushrooms", "Prosciutto", "Mustard", "Egg wash", "Salt", "Pepper"],
      preparation: "1. Sear beef and coat with mustard. 2. Layer mushrooms and prosciutto on beef. 3. Wrap in puff pastry and bake at 400°F (200°C) for 20-25 minutes."
    },
    {
      name: "Bruschetta",
      ingredients: ["Bread", "Tomatoes", "Basil", "Garlic", "Olive oil", "Balsamic vinegar", "Salt", "Pepper"],
      preparation: "1. Toast bread slices. 2. Top with a mixture of tomatoes, basil, garlic, olive oil, and balsamic vinegar. 3. Season with salt and pepper."
    },
    {
      name: "Banana Pancakes",
      ingredients: ["Bananas", "Flour", "Milk", "Eggs", "Baking powder", "Butter", "Maple syrup"],
      preparation: "1. Mash bananas and mix with flour, milk, eggs, and baking powder. 2. Cook pancakes on a griddle. 3. Serve with butter and maple syrup."
    },
    {
      name: "Beef Bulgogi",
      ingredients: ["Beef", "Soy sauce", "Sugar", "Garlic", "Sesame oil", "Green onions", "Sesame seeds"],
      preparation: "1. Marinate beef in soy sauce, sugar, garlic, and sesame oil. 2. Grill or pan-fry. 3. Garnish with green onions and sesame seeds."
    },
    {
      name: "Baked Ziti",
      ingredients: ["Ziti pasta", "Tomato sauce", "Ricotta cheese", "Mozzarella cheese", "Parmesan cheese", "Italian seasoning", "Salt", "Pepper"],
      preparation: "1. Cook pasta and mix with tomato sauce and ricotta. 2. Layer with mozzarella and Parmesan. 3. Bake at 375°F (190°C) for 25-30 minutes."
    },
    {
      name: "Bahn Mi",
      ingredients: ["Baguette", "Pork or chicken", "Pickled carrots", "Cucumber", "Cilantro", "Jalapeños", "Mayonnaise", "Soy sauce"],
      preparation: "1. Fill baguette with cooked pork or chicken. 2. Add pickled carrots, cucumber, cilantro, and jalapeños. 3. Spread mayonnaise and drizzle with soy sauce."
    },
    {
      name: "Baked Salmon",
      ingredients: ["Salmon fillets", "Lemon", "Garlic", "Dill", "Olive oil", "Salt", "Pepper"],
      preparation: "1. Season salmon with lemon, garlic, dill, olive oil, salt, and pepper. 2. Bake at 375°F (190°C) for 15-20 minutes."
    },
    {
      name: "Beef Empanadas",
      ingredients: ["Ground beef", "Onion", "Garlic", "Cumin", "Paprika", "Dough", "Egg wash", "Salt", "Pepper"],
      preparation: "1. Cook beef with onions, garlic, and spices. 2. Fill dough circles with beef mixture. 3. Seal and brush with egg wash. 4. Bake at 375°F (190°C) for 20-25 minutes."
    },
    {
      name: "Blueberry Pie",
      ingredients: ["Blueberries", "Sugar", "Flour", "Butter", "Cinnamon", "Lemon juice", "Pie crust"],
      preparation: "1. Mix blueberries with sugar, flour, cinnamon, and lemon juice. 2. Fill pie crust and top with another crust. 3. Bake at 375°F (190°C) for 45-50 minutes."
    },
    {
      name: "Beef Kebabs",
      ingredients: ["Beef", "Bell peppers", "Onion", "Garlic", "Olive oil", "Paprika", "Cumin", "Salt", "Pepper"],
      preparation: "1. Marinate beef with garlic, olive oil, paprika, cumin, salt, and pepper. 2. Skewer with bell peppers and onions. 3. Grill until cooked."
    },
    {
      name: "Baked Beans",
      ingredients: ["Beans", "Bacon", "Onion", "Tomato sauce", "Molasses", "Mustard", "Brown sugar", "Salt", "Pepper"],
      preparation: "1. Cook bacon and onions. 2. Mix with beans, tomato sauce, molasses, mustard, and brown sugar. 3. Bake at 350°F (175°C) for 1 hour."
    },
    {
      name: "Beef Pho",
      ingredients: ["Beef broth", "Rice noodles", "Beef slices", "Onion", "Ginger", "Star anise", "Cinnamon", "Fish sauce", "Cilantro", "Bean sprouts"],
      preparation: "1. Simmer broth with spices. 2. Cook noodles and beef slices. 3. Assemble with broth, noodles, beef, and garnishes."
    },
    {
      name: "Banana Pudding",
      ingredients: ["Bananas", "Vanilla pudding", "Milk", "Whipped cream", "Vanilla wafers"],
      preparation: "1. Layer vanilla wafers, bananas, and pudding. 2. Top with whipped cream. 3. Chill before serving."
    },
    {
      name: "Beef Tamales",
      ingredients: ["Masa dough", "Beef", "Chili sauce", "Corn husks", "Salt", "Pepper"],
      preparation: "1. Spread masa dough on corn husks. 2. Fill with beef and chili sauce. 3. Steam for 1-2 hours."
    },
    {
      name: "Baked Mac and Cheese",
      ingredients: ["Macaroni", "Cheddar cheese", "Milk", "Butter", "Flour", "Breadcrumbs", "Salt", "Pepper"],
      preparation: "1. Cook macaroni. 2. Make cheese sauce with butter, flour, milk, and cheese. 3. Combine and top with breadcrumbs. 4. Bake at 375°F (190°C) for 20-25 minutes."
    },
    {
      name: "Beef Curry",
      ingredients: ["Beef", "Onion", "Garlic", "Ginger", "Tomatoes", "Coconut milk", "Curry powder", "Turmeric", "Cumin", "Coriander", "Salt"],
      preparation: "1. Sauté onions, garlic, and ginger. 2. Add beef and spices. 3. Add tomatoes and coconut milk. 4. Simmer until beef is tender."
    },
    {
      name: "Baked Potatoes",
      ingredients: ["Potatoes", "Butter", "Sour cream", "Chives", "Cheese", "Bacon", "Salt", "Pepper"],
      preparation: "1. Bake potatoes at 400°F (200°C) for 1 hour. 2. Top with butter, sour cream, chives, cheese, and bacon."
    },
    {
      name: "Beef Lasagna",
      ingredients: ["Lasagna noodles", "Ground beef", "Tomato sauce", "Ricotta cheese", "Mozzarella cheese", "Parmesan cheese", "Italian seasoning", "Salt", "Pepper"],
      preparation: "1. Cook noodles and beef. 2. Layer noodles, beef, tomato sauce, and cheeses. 3. Bake at 375°F (190°C) for 30-35 minutes."
    }
  ];

  const c = [
    {
      name: "Caesar Salad",
      ingredients: ["Romaine lettuce", "Croutons", "Parmesan cheese", "Chicken", "Caesar dressing", "Anchovies", "Lemon juice", "Garlic", "Olive oil"],
      preparation: "1. Toss lettuce with croutons, Parmesan, and chicken. 2. Add Caesar dressing, lemon juice, and garlic. 3. Garnish with anchovies and olive oil."
    },
    {
      name: "Chicken Curry",
      ingredients: ["Chicken", "Onion", "Garlic", "Ginger", "Tomatoes", "Coconut milk", "Curry powder", "Turmeric", "Cumin", "Coriander", "Salt"],
      preparation: "1. Sauté onions, garlic, and ginger. 2. Add chicken and spices. 3. Add tomatoes and coconut milk. 4. Simmer until chicken is tender."
    },
    {
      name: "Chocolate Cake",
      ingredients: ["Flour", "Sugar", "Cocoa powder", "Eggs", "Butter", "Milk", "Baking powder", "Vanilla extract", "Salt"],
      preparation: "1. Mix dry ingredients. 2. Add wet ingredients and mix until smooth. 3. Bake at 350°F (175°C) for 30-35 minutes. 4. Frost with chocolate icing."
    },
    {
      name: "Chicken Noodle Soup",
      ingredients: ["Chicken", "Chicken broth", "Carrots", "Celery", "Onion", "Egg noodles", "Garlic", "Thyme", "Salt", "Pepper"],
      preparation: "1. Cook chicken and shred. 2. Sauté vegetables. 3. Add broth, noodles, and chicken. 4. Simmer until noodles are cooked."
    },
    {
      name: "Chili Con Carne",
      ingredients: ["Ground beef", "Kidney beans", "Tomatoes", "Onion", "Garlic", "Chili powder", "Cumin", "Paprika", "Salt", "Pepper"],
      preparation: "1. Cook beef with onions and garlic. 2. Add tomatoes, beans, and spices. 3. Simmer for 30-40 minutes."
    },
    {
      name: "Creme Brulee",
      ingredients: ["Heavy cream", "Egg yolks", "Sugar", "Vanilla extract"],
      preparation: "1. Heat cream and vanilla. 2. Whisk egg yolks and sugar. 3. Combine and bake in a water bath. 4. Sprinkle sugar on top and caramelize with a torch."
    },
    {
      name: "Chicken Parmesan",
      ingredients: ["Chicken breasts", "Breadcrumbs", "Parmesan cheese", "Marinara sauce", "Mozzarella cheese", "Eggs", "Flour", "Olive oil"],
      preparation: "1. Coat chicken in flour, eggs, and breadcrumbs. 2. Fry until golden. 3. Top with marinara sauce and cheese. 4. Bake at 375°F (190°C) for 20 minutes."
    },
    {
      name: "Cobb Salad",
      ingredients: ["Lettuce", "Chicken", "Bacon", "Avocado", "Tomatoes", "Blue cheese", "Eggs", "Red wine vinaigrette"],
      preparation: "1. Arrange lettuce, chicken, bacon, avocado, tomatoes, blue cheese, and eggs. 2. Drizzle with vinaigrette."
    },
    {
      name: "Chicken Tacos",
      ingredients: ["Chicken", "Taco shells", "Lettuce", "Tomatoes", "Cheese", "Onion", "Taco seasoning", "Sour cream", "Salsa"],
      preparation: "1. Cook chicken with taco seasoning. 2. Fill taco shells with chicken, lettuce, tomatoes, cheese, and onions. 3. Top with sour cream and salsa."
    },
    {
      name: "Cheesecake",
      ingredients: ["Cream cheese", "Sugar", "Eggs", "Sour cream", "Graham cracker crust", "Vanilla extract"],
      preparation: "1. Mix cream cheese, sugar, eggs, sour cream, and vanilla. 2. Pour into crust. 3. Bake at 325°F (160°C) for 50-60 minutes. 4. Chill before serving."
    },
    {
      name: "Chicken Alfredo",
      ingredients: ["Chicken", "Fettuccine", "Heavy cream", "Butter", "Garlic", "Parmesan cheese", "Salt", "Pepper"],
      preparation: "1. Cook chicken and pasta. 2. Make sauce with cream, butter, garlic, and Parmesan. 3. Toss pasta and chicken in sauce."
    },
    {
      name: "Clam Chowder",
      ingredients: ["Clams", "Potatoes", "Onion", "Celery", "Bacon", "Heavy cream", "Butter", "Flour", "Salt", "Pepper"],
      preparation: "1. Cook bacon and vegetables. 2. Add clams, potatoes, and broth. 3. Thicken with flour and butter. 4. Add cream and simmer."
    },
    {
      name: "Chicken Satay",
      ingredients: ["Chicken", "Peanut butter", "Soy sauce", "Lime juice", "Garlic", "Ginger", "Coconut milk", "Cumin", "Coriander"],
      preparation: "1. Marinate chicken in peanut sauce. 2. Grill skewers. 3. Serve with extra peanut sauce."
    },
    {
      name: "Cornbread",
      ingredients: ["Cornmeal", "Flour", "Sugar", "Eggs", "Milk", "Butter", "Baking powder", "Salt"],
      preparation: "1. Mix dry ingredients. 2. Add wet ingredients and mix. 3. Bake at 400°F (200°C) for 20-25 minutes."
    },
    {
      name: "Cabbage Rolls",
      ingredients: ["Cabbage", "Ground beef", "Rice", "Tomato sauce", "Onion", "Garlic", "Paprika", "Salt", "Pepper"],
      preparation: "1. Blanch cabbage leaves. 2. Fill with beef and rice mixture. 3. Roll and bake in tomato sauce."
    },
    {
      name: "Chicken Wings",
      ingredients: ["Chicken wings", "Hot sauce", "Butter", "Garlic powder", "Salt", "Pepper"],
      preparation: "1. Bake or fry wings. 2. Toss in hot sauce and butter mixture."
    },
    {
      name: "Coconut Shrimp",
      ingredients: ["Shrimp", "Coconut flakes", "Breadcrumbs", "Eggs", "Flour", "Oil"],
      preparation: "1. Coat shrimp in flour, eggs, and coconut mixture. 2. Fry until golden."
    },
    {
      name: "Chicken Pot Pie",
      ingredients: ["Chicken", "Carrots", "Peas", "Potatoes", "Pie crust", "Chicken broth", "Flour", "Butter", "Salt", "Pepper"],
      preparation: "1. Cook chicken and vegetables. 2. Make a sauce with broth and flour. 3. Fill pie crust and bake at 375°F (190°C) for 30-35 minutes."
    },
    {
      name: "Ceviche",
      ingredients: ["Fish", "Lime juice", "Onion", "Tomatoes", "Cilantro", "Jalapeños", "Salt", "Pepper"],
      preparation: "1. Marinate fish in lime juice. 2. Add onions, tomatoes, cilantro, and jalapeños. 3. Chill before serving."
    },
    {
      name: "Churros",
      ingredients: ["Flour", "Water", "Butter", "Sugar", "Cinnamon", "Oil"],
      preparation: "1. Make dough with flour, water, and butter. 2. Pipe into hot oil. 3. Roll in cinnamon sugar."
    },
    {
      name: "Chicken Fried Steak",
      ingredients: ["Steak", "Flour", "Eggs", "Milk", "Breadcrumbs", "Oil", "Salt", "Pepper"],
      preparation: "1. Coat steak in flour, eggs, and breadcrumbs. 2. Fry until golden. 3. Serve with gravy."
    },
    {
      name: "Cannoli",
      ingredients: ["Ricotta cheese", "Powdered sugar", "Vanilla extract", "Cannoli shells", "Chocolate chips"],
      preparation: "1. Mix ricotta, sugar, and vanilla. 2. Fill cannoli shells. 3. Dip ends in chocolate chips."
    },
    {
      name: "Chicken Enchiladas",
      ingredients: ["Chicken", "Tortillas", "Enchilada sauce", "Cheese", "Onion", "Cumin", "Salt", "Pepper"],
      preparation: "1. Fill tortillas with chicken and cheese. 2. Roll and place in a baking dish. 3. Top with sauce and cheese. 4. Bake at 375°F (190°C) for 20-25 minutes."
    },
    {
      name: "Carrot Cake",
      ingredients: ["Carrots", "Flour", "Sugar", "Eggs", "Oil", "Cinnamon", "Baking powder", "Cream cheese frosting"],
      preparation: "1. Mix dry ingredients. 2. Add wet ingredients and carrots. 3. Bake at 350°F (175°C) for 30-35 minutes. 4. Frost with cream cheese frosting."
    },
    {
      name: "Chicken Quesadilla",
      ingredients: ["Chicken", "Tortillas", "Cheese", "Bell peppers", "Onion", "Cumin", "Salt", "Pepper"],
      preparation: "1. Cook chicken and vegetables. 2. Fill tortillas with chicken, cheese, and vegetables. 3. Cook on a griddle until cheese melts."
    },
    {
      name: "Cioppino",
      ingredients: ["Fish", "Shrimp", "Clams", "Tomatoes", "Garlic", "Onion", "White wine", "Fish broth", "Olive oil", "Parsley"],
      preparation: "1. Sauté garlic and onions. 2. Add tomatoes, wine, and broth. 3. Add seafood and simmer. 4. Garnish with parsley."
    },
    {
      name: "Chicken Shawarma",
      ingredients: ["Chicken", "Pita bread", "Garlic", "Yogurt", "Lemon juice", "Cumin", "Paprika", "Tahini sauce"],
      preparation: "1. Marinate chicken with garlic, yogurt, lemon juice, and spices. 2. Grill and slice. 3. Serve in pita with tahini sauce."
    },
    {
      name: "Coconut Curry",
      ingredients: ["Coconut milk", "Chicken or vegetables", "Curry paste", "Onion", "Garlic", "Ginger", "Bell peppers", "Cilantro"],
      preparation: "1. Sauté onions, garlic, and ginger. 2. Add curry paste and coconut milk. 3. Add chicken or vegetables and simmer. 4. Garnish with cilantro."
    },
    {
      name: "Chicken Fajitas",
      ingredients: ["Chicken", "Bell peppers", "Onion", "Tortillas", "Cumin", "Paprika", "Lime juice", "Sour cream", "Salsa"],
      preparation: "1. Cook chicken with spices. 2. Sauté peppers and onions. 3. Serve with tortillas, sour cream, and salsa."
    },
    {
      name: "Crab Cakes",
      ingredients: ["Crab meat", "Breadcrumbs", "Eggs", "Mayonnaise", "Mustard", "Old Bay seasoning", "Lemon juice"],
      preparation: "1. Mix crab, breadcrumbs, eggs, and seasonings. 2. Form into patties. 3. Fry until golden."
    },
    {
      name: "Chicken Tikka Masala",
      ingredients: ["Chicken", "Yogurt", "Tomato sauce", "Cream", "Garlic", "Ginger", "Garam masala", "Cumin", "Coriander"],
      preparation: "1. Marinate chicken in yogurt and spices. 2. Grill and add to tomato sauce. 3. Simmer with cream."
    },
    {
      name: "Couscous Salad",
      ingredients: ["Couscous", "Cherry tomatoes", "Cucumber", "Feta cheese", "Olive oil", "Lemon juice", "Mint", "Salt", "Pepper"],
      preparation: "1. Cook couscous. 2. Mix with vegetables, feta, and dressing. 3. Chill before serving."
    },
    {
      name: "Chicken Stir-Fry",
      ingredients: ["Chicken", "Broccoli", "Bell peppers", "Carrots", "Soy sauce", "Garlic", "Ginger", "Sesame oil"],
      preparation: "1. Cook chicken and vegetables. 2. Add soy sauce, garlic, and ginger. 3. Serve over rice."
    },
    {
      name: "Cinnamon Rolls",
      ingredients: ["Flour", "Sugar", "Butter", "Cinnamon", "Yeast", "Milk", "Cream cheese frosting"],
      preparation: "1. Make dough and let it rise. 2. Roll out, spread butter, sugar, and cinnamon. 3. Bake at 375°F (190°C) for 20-25 minutes. 4. Frost with cream cheese icing."
    },
    {
      name: "Chicken Kebabs",
      ingredients: ["Chicken", "Bell peppers", "Onion", "Garlic", "Olive oil", "Paprika", "Cumin", "Salt", "Pepper"],
      preparation: "1. Marinate chicken with garlic, olive oil, and spices. 2. Skewer with peppers and onions. 3. Grill until cooked."
    },
    {
      name: "Cajun Shrimp Pasta",
      ingredients: ["Shrimp", "Pasta", "Cajun seasoning", "Garlic", "Heavy cream", "Parmesan cheese", "Butter", "Salt", "Pepper"],
      preparation: "1. Cook shrimp with Cajun seasoning. 2. Make sauce with cream, garlic, and Parmesan. 3. Toss with pasta."
    },
    {
      name: "Chicken Casserole",
      ingredients: ["Chicken", "Rice", "Cream of mushroom soup", "Broccoli", "Cheese", "Onion", "Garlic", "Salt", "Pepper"],
      preparation: "1. Mix chicken, rice, soup, and vegetables. 2. Top with cheese. 3. Bake at 375°F (190°C) for 30-35 minutes."
    },
    {
      name: "Chocolate Chip Cookies",
      ingredients: ["Flour", "Sugar", "Butter", "Eggs", "Chocolate chips", "Vanilla extract", "Baking soda", "Salt"],
      preparation: "1. Mix dry ingredients. 2. Add wet ingredients and chocolate chips. 3. Bake at 350°F (175°C) for 10-12 minutes."
    },
    {
      name: "Chicken Biryani",
      ingredients: ["Chicken", "Basmati rice", "Yogurt", "Onions", "Tomatoes", "Ginger-garlic paste", "Biryani spices", "Saffron", "Coriander leaves", "Mint leaves"],
      preparation: "1. Marinate chicken. 2. Cook rice partially. 3. Layer rice and chicken. 4. Cook on low heat (dum)."
    },
    {
      name: "Creamed Spinach",
      ingredients: ["Spinach", "Heavy cream", "Garlic", "Butter", "Nutmeg", "Salt", "Pepper"],
      preparation: "1. Sauté spinach and garlic. 2. Add cream and nutmeg. 3. Simmer until thickened."
    },
    {
      name: "Chicken Piccata",
      ingredients: ["Chicken", "Lemon juice", "Capers", "Butter", "Flour", "Chicken broth", "Parsley", "Salt", "Pepper"],
      preparation: "1. Coat chicken in flour and fry. 2. Make sauce with lemon juice, capers, and broth. 3. Serve with parsley."
    },
    {
      name: "Coconut Rice",
      ingredients: ["Rice", "Coconut milk", "Water", "Salt", "Coconut flakes"],
      preparation: "1. Cook rice with coconut milk and water. 2. Fluff and top with toasted coconut flakes."
    },
    {
      name: "Chicken Adobo",
      ingredients: ["Chicken", "Soy sauce", "Vinegar", "Garlic", "Bay leaves", "Peppercorns", "Sugar", "Salt"],
      preparation: "1. Marinate chicken in soy sauce, vinegar, and garlic. 2. Simmer with bay leaves and peppercorns. 3. Add sugar and salt to taste."
    },
    {
      name: "Corned Beef Hash",
      ingredients: ["Corned beef", "Potatoes", "Onion", "Bell peppers", "Eggs", "Salt", "Pepper"],
      preparation: "1. Cook potatoes, onions, and peppers. 2. Add corned beef and fry until crispy. 3. Top with fried eggs."
    },
    {
      name: "Chicken Marsala",
      ingredients: ["Chicken", "Mushrooms", "Marsala wine", "Chicken broth", "Butter", "Flour", "Garlic", "Salt", "Pepper"],
      preparation: "1. Coat chicken in flour and fry. 2. Sauté mushrooms and garlic. 3. Add Marsala wine and broth. 4. Simmer until thickened."
    },
    {
      name: "Cucumber Salad",
      ingredients: ["Cucumbers", "Yogurt", "Dill", "Garlic", "Lemon juice", "Salt", "Pepper"],
      preparation: "1. Slice cucumbers. 2. Mix with yogurt, dill, garlic, and lemon juice. 3. Season with salt and pepper."
    },
    {
      name: "Chicken Teriyaki",
      ingredients: ["Chicken", "Soy sauce", "Brown sugar", "Garlic", "Ginger", "Sesame oil", "Cornstarch", "Green onions"],
      preparation: "1. Cook chicken in sesame oil. 2. Add soy sauce, sugar, garlic, and ginger. 3. Thicken with cornstarch. 4. Garnish with green onions."
    },
    {
      name: "Cranberry Sauce",
      ingredients: ["Cranberries", "Sugar", "Water", "Orange zest"],
      preparation: "1. Cook cranberries, sugar, and water. 2. Simmer until berries burst. 3. Add orange zest and chill."
    },
    {
      name: "Chicken Cordon Bleu",
      ingredients: ["Chicken", "Ham", "Swiss cheese", "Breadcrumbs", "Eggs", "Flour", "Butter"],
      preparation: "1. Stuff chicken with ham and cheese. 2. Coat in flour, eggs, and breadcrumbs. 3. Bake at 375°F (190°C) for 30-35 minutes."
    },
    {
      name: "Cajun Chicken Pasta",
      ingredients: ["Chicken", "Pasta", "Cajun seasoning", "Bell peppers", "Onion", "Heavy cream", "Parmesan cheese", "Garlic"],
      preparation: "1. Cook chicken with Cajun seasoning. 2. Sauté peppers, onions, and garlic. 3. Add cream and Parmesan. 4. Toss with pasta."
    }
  ];

  const d = [
    {
      name: "Dumplings",
      ingredients: ["Flour", "Water", "Ground meat", "Cabbage", "Garlic", "Ginger", "Soy sauce", "Salt", "Pepper"],
      preparation: "1. Make dough with flour and water. 2. Fill with meat and cabbage mixture. 3. Steam or boil until cooked."
    },
    {
      name: "Donuts",
      ingredients: ["Flour", "Sugar", "Yeast", "Milk", "Butter", "Eggs", "Vanilla extract", "Oil for frying"],
      preparation: "1. Make dough and let it rise. 2. Shape into donuts. 3. Fry until golden. 4. Coat with sugar or glaze."
    },
    {
      name: "Dal Makhani",
      ingredients: ["Black lentils", "Kidney beans", "Tomatoes", "Onion", "Garlic", "Ginger", "Cream", "Butter", "Spices"],
      preparation: "1. Cook lentils and beans. 2. Sauté onions, garlic, and ginger. 3. Add tomatoes and spices. 4. Simmer with cream and butter."
    },
    {
      name: "Deviled Eggs",
      ingredients: ["Eggs", "Mayonnaise", "Mustard", "Paprika", "Salt", "Pepper"],
      preparation: "1. Boil eggs and cut in half. 2. Mix yolks with mayonnaise, mustard, salt, and pepper. 3. Fill egg whites and sprinkle with paprika."
    },
    {
      name: "Duck Confit",
      ingredients: ["Duck legs", "Duck fat", "Garlic", "Thyme", "Salt", "Pepper"],
      preparation: "1. Season duck legs with salt, pepper, garlic, and thyme. 2. Cook slowly in duck fat until tender. 3. Crisp skin before serving."
    },
    {
      name: "Danish Pastries",
      ingredients: ["Puff pastry", "Butter", "Sugar", "Almond paste", "Egg wash"],
      preparation: "1. Roll out puff pastry. 2. Fill with almond paste and sugar. 3. Shape and bake at 375°F (190°C) for 20-25 minutes."
    },
    {
      name: "Dosa",
      ingredients: ["Rice", "Urad dal", "Salt", "Oil"],
      preparation: "1. Soak rice and dal, then grind into a batter. 2. Ferment the batter. 3. Spread on a hot griddle and cook until crispy."
    },
    {
      name: "Duck à l'Orange",
      ingredients: ["Duck", "Orange juice", "Orange zest", "Sugar", "Vinegar", "Chicken broth", "Butter"],
      preparation: "1. Roast duck until crispy. 2. Make sauce with orange juice, zest, sugar, and vinegar. 3. Serve duck with sauce."
    },
    {
      name: "Dirty Rice",
      ingredients: ["Rice", "Ground meat", "Onion", "Bell pepper", "Celery", "Garlic", "Chicken liver", "Spices"],
      preparation: "1. Cook rice. 2. Sauté meat, vegetables, and liver. 3. Mix with rice and season with spices."
    },
    {
      name: "Doughnuts",
      ingredients: ["Flour", "Sugar", "Yeast", "Milk", "Butter", "Eggs", "Vanilla extract", "Oil for frying"],
      preparation: "1. Make dough and let it rise. 2. Shape into doughnuts. 3. Fry until golden. 4. Coat with sugar or glaze."
    },
    {
      name: "Dhal",
      ingredients: ["Red lentils", "Onion", "Garlic", "Ginger", "Tomatoes", "Turmeric", "Cumin", "Coriander", "Salt"],
      preparation: "1. Cook lentils with turmeric. 2. Sauté onions, garlic, and ginger. 3. Add tomatoes and spices. 4. Simmer until thick."
    },
    {
      name: "Duck Breast",
      ingredients: ["Duck breast", "Salt", "Pepper", "Orange juice", "Honey", "Thyme"],
      preparation: "1. Score duck skin and season. 2. Pan-sear until crispy. 3. Make sauce with orange juice, honey, and thyme."
    },
    {
      name: "Dum Aloo",
      ingredients: ["Baby potatoes", "Onion", "Tomatoes", "Yogurt", "Spices", "Cream"],
      preparation: "1. Fry potatoes until golden. 2. Sauté onions and tomatoes. 3. Add yogurt, spices, and cream. 4. Simmer with potatoes."
    },
    {
      name: "Duck Fried Rice",
      ingredients: ["Cooked rice", "Duck meat", "Eggs", "Vegetables", "Soy sauce", "Garlic", "Ginger"],
      preparation: "1. Sauté garlic and ginger. 2. Add duck, vegetables, and rice. 3. Stir in soy sauce and scrambled eggs."
    },
    {
      name: "Dill Pickles",
      ingredients: ["Cucumbers", "Vinegar", "Water", "Salt", "Dill", "Garlic"],
      preparation: "1. Pack cucumbers into jars. 2. Boil vinegar, water, and salt. 3. Pour over cucumbers with dill and garlic. 4. Seal and refrigerate."
    },
    {
      name: "Duck Pâté",
      ingredients: ["Duck liver", "Butter", "Onion", "Garlic", "Cognac", "Salt", "Pepper"],
      preparation: "1. Sauté liver, onions, and garlic. 2. Blend with butter and cognac. 3. Chill and serve with bread."
    },
    {
      name: "Duck Salad",
      ingredients: ["Duck breast", "Mixed greens", "Orange segments", "Walnuts", "Balsamic vinaigrette"],
      preparation: "1. Sear duck breast and slice. 2. Toss greens, oranges, and walnuts. 3. Top with duck and drizzle with vinaigrette."
    },
    {
      name: "Duck Soup",
      ingredients: ["Duck carcass", "Carrots", "Celery", "Onion", "Garlic", "Thyme", "Bay leaves", "Salt", "Pepper"],
      preparation: "1. Simmer duck carcass with vegetables and herbs. 2. Strain and season. 3. Serve hot."
    },
    {
      name: "Duck Tacos",
      ingredients: ["Duck meat", "Tortillas", "Cabbage slaw", "Lime", "Cilantro", "Salsa"],
      preparation: "1. Shred cooked duck meat. 2. Fill tortillas with duck, slaw, and salsa. 3. Garnish with lime and cilantro."
    },
    {
      name: "Duck Wellington",
      ingredients: ["Duck breast", "Puff pastry", "Mushrooms", "Prosciutto", "Mustard", "Egg wash"],
      preparation: "1. Sear duck breast. 2. Layer mushrooms and prosciutto on pastry. 3. Wrap duck in pastry and bake at 400°F (200°C) for 20-25 minutes."
    },
    {
      name: "Duck Stir-Fry",
      ingredients: ["Duck meat", "Vegetables", "Soy sauce", "Garlic", "Ginger", "Sesame oil"],
      preparation: "1. Sauté duck with garlic and ginger. 2. Add vegetables and soy sauce. 3. Stir-fry until cooked."
    },
    {
      name: "Duck Curry",
      ingredients: ["Duck meat", "Coconut milk", "Curry paste", "Onion", "Garlic", "Ginger", "Bell peppers", "Cilantro"],
      preparation: "1. Sauté onions, garlic, and ginger. 2. Add curry paste and coconut milk. 3. Simmer with duck and vegetables."
    },
    {
      name: "Duck Noodles",
      ingredients: ["Duck meat", "Noodles", "Broth", "Green onions", "Bean sprouts", "Soy sauce"],
      preparation: "1. Cook noodles and duck. 2. Assemble with broth, green onions, and bean sprouts. 3. Drizzle with soy sauce."
    },
    {
      name: "Duck Pizza",
      ingredients: ["Duck meat", "Pizza dough", "Mozzarella cheese", "Caramelized onions", "Arugula", "Balsamic glaze"],
      preparation: "1. Spread dough with cheese and duck. 2. Bake at 475°F (245°C) for 10-12 minutes. 3. Top with arugula and balsamic glaze."
    },
    {
      name: "Duck Risotto",
      ingredients: ["Duck meat", "Arborio rice", "Chicken broth", "Onion", "Garlic", "Parmesan cheese", "White wine"],
      preparation: "1. Sauté onions and garlic. 2. Add rice and wine. 3. Gradually add broth. 4. Stir in duck and Parmesan."
    },
    {
      name: "Duck Sausage",
      ingredients: ["Duck meat", "Pork fat", "Garlic", "Thyme", "Salt", "Pepper"],
      preparation: "1. Grind duck and pork fat. 2. Mix with garlic, thyme, salt, and pepper. 3. Stuff into casings and cook."
    },
    {
      name: "Duck Sliders",
      ingredients: ["Duck meat", "Slider buns", "Pickles", "Mustard", "Mayonnaise", "Lettuce"],
      preparation: "1. Cook duck patties. 2. Assemble sliders with buns, pickles, mustard, and mayonnaise."
    },
    {
      name: "Duck Stew",
      ingredients: ["Duck meat", "Potatoes", "Carrots", "Onion", "Garlic", "Thyme", "Bay leaves", "Chicken broth"],
      preparation: "1. Brown duck meat. 2. Add vegetables and broth. 3. Simmer until tender."
    },
    {
      name: "Duck Terrine",
      ingredients: ["Duck meat", "Pork fat", "Herbs", "Garlic", "Brandy", "Salt", "Pepper"],
      preparation: "1. Grind duck and pork fat. 2. Mix with herbs, garlic, and brandy. 3. Press into a terrine mold and bake."
    },
    {
      name: "Duck Wraps",
      ingredients: ["Duck meat", "Tortillas", "Lettuce", "Tomatoes", "Cucumber", "Sour cream", "Salsa"],
      preparation: "1. Shred cooked duck meat. 2. Fill tortillas with duck, lettuce, tomatoes, and cucumber. 3. Top with sour cream and salsa."
    },
    {
      name: "Duck Kebabs",
      ingredients: ["Duck meat", "Bell peppers", "Onion", "Garlic", "Olive oil", "Paprika", "Cumin", "Salt", "Pepper"],
      preparation: "1. Marinate duck with garlic, olive oil, and spices. 2. Skewer with peppers and onions. 3. Grill until cooked."
    },
    {
      name: "Duck Pasta",
      ingredients: ["Duck meat", "Pasta", "Cream", "Parmesan cheese", "Garlic", "Thyme", "Salt", "Pepper"],
      preparation: "1. Cook pasta. 2. Sauté duck with garlic and thyme. 3. Add cream and Parmesan. 4. Toss with pasta."
    },
    {
      name: "Duck Pie",
      ingredients: ["Duck meat", "Puff pastry", "Carrots", "Peas", "Potatoes", "Onion", "Chicken broth", "Flour", "Butter"],
      preparation: "1. Cook duck and vegetables. 2. Make a sauce with broth and flour. 3. Fill pie crust and bake at 375°F (190°C) for 30-35 minutes."
    },
    {
      name: "Duck Quiche",
      ingredients: ["Duck meat", "Pie crust", "Eggs", "Cream", "Cheese", "Onion", "Salt", "Pepper"],
      preparation: "1. Fill pie crust with duck, onions, and cheese. 2. Mix eggs and cream, then pour over. 3. Bake at 350°F (175°C) for 30-35 minutes."
    },
    {
      name: "Duck Ramen",
      ingredients: ["Duck meat", "Ramen noodles", "Broth", "Green onions", "Eggs", "Seaweed", "Soy sauce"],
      preparation: "1. Cook noodles and duck. 2. Assemble with broth, green onions, eggs, and seaweed. 3. Drizzle with soy sauce."
    },
    {
      name: "Duck Sushi",
      ingredients: ["Duck meat", "Sushi rice", "Nori", "Cucumber", "Avocado", "Soy sauce"],
      preparation: "1. Cook sushi rice. 2. Layer rice, duck, cucumber, and avocado on nori. 3. Roll and slice."
    },
    {
      name: "Duck Tartare",
      ingredients: ["Duck meat", "Egg yolk", "Capers", "Onion", "Parsley", "Olive oil", "Salt", "Pepper"],
      preparation: "1. Finely chop duck meat. 2. Mix with egg yolk, capers, onions, and parsley. 3. Season with olive oil, salt, and pepper."
    },
    {
      name: "Duck Tempura",
      ingredients: ["Duck meat", "Tempura batter", "Oil for frying", "Soy sauce", "Ginger"],
      preparation: "1. Coat duck in tempura batter. 2. Fry until golden. 3. Serve with soy sauce and ginger."
    },
    {
      name: "Duck Udon",
      ingredients: ["Duck meat", "Udon noodles", "Broth", "Green onions", "Mushrooms", "Soy sauce"],
      preparation: "1. Cook noodles and duck. 2. Assemble with broth, green onions, and mushrooms. 3. Drizzle with soy sauce."
    },
    {
      name: "Duck Vindaloo",
      ingredients: ["Duck meat", "Vindaloo paste", "Onion", "Garlic", "Ginger", "Tomatoes", "Coconut milk"],
      preparation: "1. Sauté onions, garlic, and ginger. 2. Add vindaloo paste and tomatoes. 3. Simmer with duck and coconut milk."
    },
    {
      name: "Duck Wontons",
      ingredients: ["Duck meat", "Wonton wrappers", "Green onions", "Ginger", "Soy sauce", "Sesame oil"],
      preparation: "1. Mix duck with green onions, ginger, and soy sauce. 2. Fill wonton wrappers. 3. Steam or fry until cooked."
    },
    {
      name: "Duck Yakitori",
      ingredients: ["Duck meat", "Soy sauce", "Mirin", "Sugar", "Garlic", "Green onions"],
      preparation: "1. Skewer duck meat. 2. Grill and baste with soy sauce, mirin, and sugar. 3. Garnish with green onions."
    },
    {
      name: "Duck Ziti",
      ingredients: ["Duck meat", "Ziti pasta", "Tomato sauce", "Mozzarella cheese", "Parmesan cheese", "Basil"],
      preparation: "1. Cook pasta and duck. 2. Mix with tomato sauce and cheeses. 3. Bake at 375°F (190°C) for 20-25 minutes."
    }
  ];

  const e = [
    {
      name: "Egg Fried Rice",
      ingredients: ["Cooked rice", "Eggs", "Vegetables", "Soy sauce", "Garlic", "Ginger", "Green onions"],
      preparation: "1. Sauté garlic and ginger. 2. Add rice and vegetables. 3. Stir in scrambled eggs and soy sauce. 4. Garnish with green onions."
    },
    {
      name: "Eggplant Parmesan",
      ingredients: ["Eggplant", "Tomato sauce", "Mozzarella cheese", "Parmesan cheese", "Breadcrumbs", "Eggs", "Flour"],
      preparation: "1. Slice and bread eggplant. 2. Fry until golden. 3. Layer with tomato sauce and cheese. 4. Bake at 375°F (190°C) for 25-30 minutes."
    },
    {
      name: "Egg Drop Soup",
      ingredients: ["Chicken broth", "Eggs", "Cornstarch", "Green onions", "Soy sauce", "Ginger"],
      preparation: "1. Heat broth with ginger. 2. Thicken with cornstarch. 3. Slowly pour in beaten eggs. 4. Garnish with green onions."
    },
    {
      name: "Egg Salad",
      ingredients: ["Hard-boiled eggs", "Mayonnaise", "Mustard", "Celery", "Salt", "Pepper"],
      preparation: "1. Chop eggs and mix with mayonnaise, mustard, and celery. 2. Season with salt and pepper. 3. Serve on bread or lettuce."
    },
    {
      name: "Egg Curry",
      ingredients: ["Hard-boiled eggs", "Onion", "Tomatoes", "Coconut milk", "Curry powder", "Turmeric", "Cumin", "Coriander"],
      preparation: "1. Sauté onions and tomatoes. 2. Add spices and coconut milk. 3. Simmer with eggs."
    },
    {
      name: "Egg Benedict",
      ingredients: ["English muffins", "Eggs", "Canadian bacon", "Hollandaise sauce", "Butter", "Vinegar"],
      preparation: "1. Poach eggs. 2. Toast muffins and top with bacon and eggs. 3. Drizzle with hollandaise sauce."
    },
    {
      name: "Eggplant Lasagna",
      ingredients: ["Eggplant", "Tomato sauce", "Ricotta cheese", "Mozzarella cheese", "Parmesan cheese", "Basil"],
      preparation: "1. Slice and roast eggplant. 2. Layer with tomato sauce and cheeses. 3. Bake at 375°F (190°C) for 30-35 minutes."
    },
    {
      name: "Eggplant Dip",
      ingredients: ["Eggplant", "Tahini", "Garlic", "Lemon juice", "Olive oil", "Salt", "Pepper"],
      preparation: "1. Roast eggplant until soft. 2. Blend with tahini, garlic, lemon juice, and olive oil. 3. Season with salt and pepper."
    },
    {
      name: "Eggplant Stir-Fry",
      ingredients: ["Eggplant", "Bell peppers", "Onion", "Garlic", "Soy sauce", "Sesame oil", "Ginger"],
      preparation: "1. Sauté eggplant, peppers, and onions. 2. Add garlic, ginger, and soy sauce. 3. Stir-fry until tender."
    },
    {
      name: "Eggplant Curry",
      ingredients: ["Eggplant", "Coconut milk", "Curry paste", "Onion", "Garlic", "Ginger", "Bell peppers", "Cilantro"],
      preparation: "1. Sauté onions, garlic, and ginger. 2. Add curry paste and coconut milk. 3. Simmer with eggplant and vegetables."
    },
    {
      name: "Eggplant Rollatini",
      ingredients: ["Eggplant", "Ricotta cheese", "Spinach", "Tomato sauce", "Mozzarella cheese", "Parmesan cheese"],
      preparation: "1. Slice and grill eggplant. 2. Fill with ricotta and spinach. 3. Roll and bake with tomato sauce and cheese."
    },
    {
      name: "Eggplant Pizza",
      ingredients: ["Eggplant", "Pizza dough", "Tomato sauce", "Mozzarella cheese", "Basil", "Olive oil"],
      preparation: "1. Slice and roast eggplant. 2. Spread dough with tomato sauce and cheese. 3. Top with eggplant and bake at 475°F (245°C) for 10-12 minutes."
    },
    {
      name: "Eggplant Chips",
      ingredients: ["Eggplant", "Olive oil", "Salt", "Pepper", "Paprika"],
      preparation: "1. Slice eggplant thinly. 2. Toss with olive oil and seasonings. 3. Bake at 400°F (200°C) until crispy."
    },
    {
      name: "Eggplant Fritters",
      ingredients: ["Eggplant", "Flour", "Eggs", "Breadcrumbs", "Oil for frying", "Salt", "Pepper"],
      preparation: "1. Slice eggplant and coat in flour, eggs, and breadcrumbs. 2. Fry until golden."
    },
    {
      name: "Eggplant Stew",
      ingredients: ["Eggplant", "Tomatoes", "Onion", "Garlic", "Bell peppers", "Olive oil", "Herbs"],
      preparation: "1. Sauté eggplant, onions, and peppers. 2. Add tomatoes and herbs. 3. Simmer until tender."
    },
    {
      name: "Eggplant Kebabs",
      ingredients: ["Eggplant", "Bell peppers", "Onion", "Garlic", "Olive oil", "Paprika", "Cumin", "Salt", "Pepper"],
      preparation: "1. Marinate eggplant with garlic, olive oil, and spices. 2. Skewer with peppers and onions. 3. Grill until cooked."
    },
    {
      name: "Eggplant Pasta",
      ingredients: ["Eggplant", "Pasta", "Tomato sauce", "Garlic", "Basil", "Parmesan cheese", "Olive oil"],
      preparation: "1. Roast eggplant until soft. 2. Cook pasta and toss with tomato sauce, eggplant, and garlic. 3. Garnish with basil and Parmesan."
    },
    {
      name: "Eggplant Soup",
      ingredients: ["Eggplant", "Onion", "Garlic", "Tomatoes", "Vegetable broth", "Olive oil", "Herbs"],
      preparation: "1. Sauté eggplant, onions, and garlic. 2. Add tomatoes and broth. 3. Simmer and blend until smooth."
    },
    {
      name: "Eggplant Tacos",
      ingredients: ["Eggplant", "Tortillas", "Lettuce", "Tomatoes", "Cheese", "Sour cream", "Salsa"],
      preparation: "1. Roast eggplant until tender. 2. Fill tortillas with eggplant, lettuce, tomatoes, and cheese. 3. Top with sour cream and salsa."
    },
    {
      name: "Eggplant Wraps",
      ingredients: ["Eggplant", "Tortillas", "Hummus", "Lettuce", "Tomatoes", "Cucumber"],
      preparation: "1. Roast eggplant slices. 2. Spread tortillas with hummus. 3. Fill with eggplant, lettuce, tomatoes, and cucumber."
    },
    {
      name: "Eggplant Gratin",
      ingredients: ["Eggplant", "Tomato sauce", "Breadcrumbs", "Parmesan cheese", "Mozzarella cheese", "Olive oil"],
      preparation: "1. Slice and roast eggplant. 2. Layer with tomato sauce and cheeses. 3. Top with breadcrumbs and bake at 375°F (190°C) for 25-30 minutes."
    },
    {
      name: "Eggplant Quiche",
      ingredients: ["Eggplant", "Pie crust", "Eggs", "Cream", "Cheese", "Onion", "Salt", "Pepper"],
      preparation: "1. Roast eggplant slices. 2. Fill pie crust with eggplant, onions, and cheese. 3. Mix eggs and cream, then pour over. 4. Bake at 350°F (175°C) for 30-35 minutes."
    },
    {
      name: "Eggplant Risotto",
      ingredients: ["Eggplant", "Arborio rice", "Onion", "Garlic", "Vegetable broth", "Parmesan cheese", "Olive oil"],
      preparation: "1. Roast eggplant until soft. 2. Sauté onions and garlic. 3. Add rice and broth. 4. Stir in eggplant and Parmesan."
    },
    {
      name: "Eggplant Sushi",
      ingredients: ["Eggplant", "Sushi rice", "Nori", "Cucumber", "Avocado", "Soy sauce"],
      preparation: "1. Roast eggplant slices. 2. Layer rice, eggplant, cucumber, and avocado on nori. 3. Roll and slice."
    },
    {
      name: "Eggplant Tempura",
      ingredients: ["Eggplant", "Tempura batter", "Oil for frying", "Soy sauce", "Ginger"],
      preparation: "1. Slice eggplant thinly. 2. Coat in tempura batter. 3. Fry until golden. 4. Serve with soy sauce and ginger."
    },
    {
      name: "Eggplant Tart",
      ingredients: ["Eggplant", "Puff pastry", "Tomato sauce", "Mozzarella cheese", "Basil", "Olive oil"],
      preparation: "1. Roast eggplant slices. 2. Spread puff pastry with tomato sauce. 3. Top with eggplant and cheese. 4. Bake at 400°F (200°C) for 20-25 minutes."
    },
    {
      name: "Eggplant Udon",
      ingredients: ["Eggplant", "Udon noodles", "Broth", "Green onions", "Mushrooms", "Soy sauce"],
      preparation: "1. Roast eggplant slices. 2. Cook noodles and assemble with broth, green onions, and mushrooms. 3. Top with eggplant and drizzle with soy sauce."
    },
    {
      name: "Eggplant Vindaloo",
      ingredients: ["Eggplant", "Vindaloo paste", "Onion", "Garlic", "Ginger", "Tomatoes", "Coconut milk"],
      preparation: "1. Sauté onions, garlic, and ginger. 2. Add vindaloo paste and tomatoes. 3. Simmer with eggplant and coconut milk."
    },
    {
      name: "Eggplant Wontons",
      ingredients: ["Eggplant", "Wonton wrappers", "Green onions", "Ginger", "Soy sauce", "Sesame oil"],
      preparation: "1. Roast eggplant and mash. 2. Mix with green onions, ginger, and soy sauce. 3. Fill wonton wrappers. 4. Steam or fry until cooked."
    },
    {
      name: "Eggplant Yakitori",
      ingredients: ["Eggplant", "Soy sauce", "Mirin", "Sugar", "Garlic", "Green onions"],
      preparation: "1. Skewer eggplant slices. 2. Grill and baste with soy sauce, mirin, and sugar. 3. Garnish with green onions."
    },
    {
      name: "Eggplant Ziti",
      ingredients: ["Eggplant", "Ziti pasta", "Tomato sauce", "Mozzarella cheese", "Parmesan cheese", "Basil"],
      preparation: "1. Roast eggplant slices. 2. Cook pasta and mix with tomato sauce and cheeses. 3. Layer with eggplant and bake at 375°F (190°C) for 20-25 minutes."
    }
  ];

  const f = [
    {
      name: "French Toast",
      ingredients: ["Bread", "Eggs", "Milk", "Cinnamon", "Vanilla extract", "Butter", "Maple syrup"],
      preparation: "1. Whisk eggs, milk, cinnamon, and vanilla. 2. Soak bread in the mixture. 3. Cook on a buttered skillet until golden. 4. Serve with maple syrup."
    },
    {
      name: "Fish Tacos",
      ingredients: ["White fish", "Tortillas", "Cabbage slaw", "Lime", "Cilantro", "Salsa", "Sour cream"],
      preparation: "1. Grill or fry fish. 2. Fill tortillas with fish, slaw, and salsa. 3. Garnish with lime and cilantro."
    },
    {
      name: "Fettuccine Alfredo",
      ingredients: ["Fettuccine pasta", "Heavy cream", "Butter", "Parmesan cheese", "Garlic", "Salt", "Pepper"],
      preparation: "1. Cook pasta. 2. Make sauce with cream, butter, garlic, and Parmesan. 3. Toss pasta in sauce."
    },
    {
      name: "Fried Rice",
      ingredients: ["Cooked rice", "Eggs", "Vegetables", "Soy sauce", "Garlic", "Ginger", "Green onions"],
      preparation: "1. Sauté garlic and ginger. 2. Add rice and vegetables. 3. Stir in scrambled eggs and soy sauce. 4. Garnish with green onions."
    },
    {
      name: "Falafel",
      ingredients: ["Chickpeas", "Onion", "Garlic", "Parsley", "Cumin", "Coriander", "Flour", "Oil for frying"],
      preparation: "1. Blend chickpeas, onion, garlic, and herbs. 2. Form into balls and coat with flour. 3. Fry until golden."
    },
    {
      name: "French Onion Soup",
      ingredients: ["Onions", "Beef broth", "Butter", "Thyme", "Bay leaves", "Baguette", "Gruyere cheese"],
      preparation: "1. Caramelize onions in butter. 2. Add broth, thyme, and bay leaves. 3. Simmer and serve with toasted baguette and melted cheese."
    },
    {
      name: "Fried Chicken",
      ingredients: ["Chicken", "Flour", "Eggs", "Buttermilk", "Paprika", "Garlic powder", "Salt", "Pepper", "Oil for frying"],
      preparation: "1. Marinate chicken in buttermilk. 2. Coat in seasoned flour. 3. Fry until golden and crispy."
    },
    {
      name: "Fruit Salad",
      ingredients: ["Assorted fruits", "Honey", "Lime juice", "Mint leaves"],
      preparation: "1. Chop fruits into bite-sized pieces. 2. Toss with honey and lime juice. 3. Garnish with mint leaves."
    },
    {
      name: "Fish and Chips",
      ingredients: ["White fish", "Potatoes", "Flour", "Beer", "Baking powder", "Salt", "Pepper", "Oil for frying"],
      preparation: "1. Cut potatoes into fries and fry. 2. Coat fish in beer batter and fry until golden. 3. Serve with fries and tartar sauce."
    },
    {
      name: "Fajitas",
      ingredients: ["Chicken or beef", "Bell peppers", "Onion", "Tortillas", "Cumin", "Paprika", "Lime juice", "Sour cream", "Salsa"],
      preparation: "1. Cook meat with spices. 2. Sauté peppers and onions. 3. Serve with tortillas, sour cream, and salsa."
    },
    {
      name: "Flan",
      ingredients: ["Eggs", "Milk", "Sugar", "Vanilla extract"],
      preparation: "1. Caramelize sugar and pour into a mold. 2. Mix eggs, milk, and vanilla. 3. Bake in a water bath until set."
    },
    {
      name: "Fried Calamari",
      ingredients: ["Calamari", "Flour", "Eggs", "Breadcrumbs", "Oil for frying", "Lemon", "Marinara sauce"],
      preparation: "1. Coat calamari in flour, eggs, and breadcrumbs. 2. Fry until golden. 3. Serve with lemon and marinara sauce."
    },
    {
      name: "Frittata",
      ingredients: ["Eggs", "Potatoes", "Onion", "Bell peppers", "Cheese", "Salt", "Pepper"],
      preparation: "1. Sauté potatoes, onions, and peppers. 2. Pour beaten eggs over the mixture. 3. Cook until set and top with cheese."
    },
    {
      name: "Fried Plantains",
      ingredients: ["Plantains", "Oil for frying", "Salt"],
      preparation: "1. Slice plantains. 2. Fry until golden and crispy. 3. Sprinkle with salt."
    },
    {
      name: "Fondue",
      ingredients: ["Cheese", "White wine", "Garlic", "Bread", "Vegetables"],
      preparation: "1. Melt cheese with wine and garlic. 2. Serve with bread and vegetables for dipping."
    },
    {
      name: "Falafel Wrap",
      ingredients: ["Falafel", "Tortilla", "Hummus", "Lettuce", "Tomatoes", "Cucumber", "Tahini sauce"],
      preparation: "1. Spread tortilla with hummus. 2. Fill with falafel, lettuce, tomatoes, and cucumber. 3. Drizzle with tahini sauce."
    },
    {
      name: "Fried Dumplings",
      ingredients: ["Dumpling wrappers", "Ground meat", "Cabbage", "Garlic", "Ginger", "Soy sauce", "Oil for frying"],
      preparation: "1. Fill wrappers with meat and cabbage mixture. 2. Fry until golden and crispy."
    },
    {
      name: "Fried Green Tomatoes",
      ingredients: ["Green tomatoes", "Cornmeal", "Flour", "Eggs", "Oil for frying", "Salt", "Pepper"],
      preparation: "1. Slice tomatoes. 2. Coat in flour, eggs, and cornmeal. 3. Fry until golden."
    },
    {
      name: "Fried Shrimp",
      ingredients: ["Shrimp", "Flour", "Eggs", "Breadcrumbs", "Oil for frying", "Lemon", "Tartar sauce"],
      preparation: "1. Coat shrimp in flour, eggs, and breadcrumbs. 2. Fry until golden. 3. Serve with lemon and tartar sauce."
    },
    {
      name: "Fried Mozzarella Sticks",
      ingredients: ["Mozzarella cheese", "Flour", "Eggs", "Breadcrumbs", "Oil for frying", "Marinara sauce"],
      preparation: "1. Coat cheese sticks in flour, eggs, and breadcrumbs. 2. Fry until golden. 3. Serve with marinara sauce."
    },
    {
      name: "Fried Okra",
      ingredients: ["Okra", "Cornmeal", "Flour", "Eggs", "Oil for frying", "Salt", "Pepper"],
      preparation: "1. Slice okra. 2. Coat in flour, eggs, and cornmeal. 3. Fry until crispy."
    },
    {
      name: "Fried Pickles",
      ingredients: ["Pickles", "Flour", "Eggs", "Breadcrumbs", "Oil for frying", "Ranch dressing"],
      preparation: "1. Coat pickles in flour, eggs, and breadcrumbs. 2. Fry until golden. 3. Serve with ranch dressing."
    },
    {
      name: "Fried Zucchini",
      ingredients: ["Zucchini", "Flour", "Eggs", "Breadcrumbs", "Oil for frying", "Salt", "Pepper"],
      preparation: "1. Slice zucchini. 2. Coat in flour, eggs, and breadcrumbs. 3. Fry until golden."
    },
    {
      name: "Fried Rice Noodles",
      ingredients: ["Rice noodles", "Eggs", "Vegetables", "Soy sauce", "Garlic", "Ginger", "Green onions"],
      preparation: "1. Sauté garlic and ginger. 2. Add noodles and vegetables. 3. Stir in scrambled eggs and soy sauce. 4. Garnish with green onions."
    },
    {
      name: "Fried Spring Rolls",
      ingredients: ["Spring roll wrappers", "Ground meat", "Vegetables", "Oil for frying", "Soy sauce"],
      preparation: "1. Fill wrappers with meat and vegetables. 2. Fry until golden and crispy. 3. Serve with soy sauce."
    },
    {
      name: "Fried Tofu",
      ingredients: ["Tofu", "Cornstarch", "Oil for frying", "Soy sauce", "Sesame oil"],
      preparation: "1. Coat tofu in cornstarch. 2. Fry until crispy. 3. Serve with soy sauce and sesame oil."
    },
    {
      name: "Fried Wontons",
      ingredients: ["Wonton wrappers", "Ground meat", "Vegetables", "Oil for frying", "Sweet chili sauce"],
      preparation: "1. Fill wrappers with meat and vegetables. 2. Fry until golden. 3. Serve with sweet chili sauce."
    },
    {
      name: "Fried Yam",
      ingredients: ["Yam", "Oil for frying", "Salt"],
      preparation: "1. Slice yam. 2. Fry until golden and crispy. 3. Sprinkle with salt."
    },
    {
      name: "Fried Bananas",
      ingredients: ["Bananas", "Flour", "Eggs", "Breadcrumbs", "Oil for frying", "Honey"],
      preparation: "1. Coat banana slices in flour, eggs, and breadcrumbs. 2. Fry until golden. 3. Drizzle with honey."
    },
    {
      name: "Fried Cheese Balls",
      ingredients: ["Cheese", "Flour", "Eggs", "Breadcrumbs", "Oil for frying", "Marinara sauce"],
      preparation: "1. Coat cheese balls in flour, eggs, and breadcrumbs. 2. Fry until golden. 3. Serve with marinara sauce."
    },
    {
      name: "Fried Cauliflower",
      ingredients: ["Cauliflower", "Flour", "Eggs", "Breadcrumbs", "Oil for frying", "Salt", "Pepper"],
      preparation: "1. Coat cauliflower in flour, eggs, and breadcrumbs. 2. Fry until golden."
    },
    {
      name: "Fried Mushrooms",
      ingredients: ["Mushrooms", "Flour", "Eggs", "Breadcrumbs", "Oil for frying", "Garlic aioli"],
      preparation: "1. Coat mushrooms in flour, eggs, and breadcrumbs. 2. Fry until golden. 3. Serve with garlic aioli."
    },
    {
      name: "Fried Eggplant",
      ingredients: ["Eggplant", "Flour", "Eggs", "Breadcrumbs", "Oil for frying", "Salt", "Pepper"],
      preparation: "1. Slice eggplant. 2. Coat in flour, eggs, and breadcrumbs. 3. Fry until golden."
    },
    {
      name: "Fried Avocado",
      ingredients: ["Avocado", "Flour", "Eggs", "Breadcrumbs", "Oil for frying", "Ranch dressing"],
      preparation: "1. Coat avocado slices in flour, eggs, and breadcrumbs. 2. Fry until golden. 3. Serve with ranch dressing."
    },
    {
      name: "Fried Artichokes",
      ingredients: ["Artichokes", "Flour", "Eggs", "Breadcrumbs", "Oil for frying", "Lemon aioli"],
      preparation: "1. Coat artichokes in flour, eggs, and breadcrumbs. 2. Fry until golden. 3. Serve with lemon aioli."
    },
    {
      name: "Fried Olives",
      ingredients: ["Olives", "Flour", "Eggs", "Breadcrumbs", "Oil for frying", "Marinara sauce"],
      preparation: "1. Coat olives in flour, eggs, and breadcrumbs. 2. Fry until golden. 3. Serve with marinara sauce."
    },
    {
      name: "Fried Anchovies",
      ingredients: ["Anchovies", "Flour", "Eggs", "Breadcrumbs", "Oil for frying", "Lemon"],
      preparation: "1. Coat anchovies in flour, eggs, and breadcrumbs. 2. Fry until crispy. 3. Serve with lemon."
    },
    {
      name: "Fried Clams",
      ingredients: ["Clams", "Flour", "Eggs", "Breadcrumbs", "Oil for frying", "Tartar sauce"],
      preparation: "1. Coat clams in flour, eggs, and breadcrumbs. 2. Fry until golden. 3. Serve with tartar sauce."
    },
    {
      name: "Fried Oysters",
      ingredients: ["Oysters", "Flour", "Eggs", "Breadcrumbs", "Oil for frying", "Lemon"],
      preparation: "1. Coat oysters in flour, eggs, and breadcrumbs. 2. Fry until golden. 3. Serve with lemon."
    },
    {
      name: "Fried Scallops",
      ingredients: ["Scallops", "Flour", "Eggs", "Breadcrumbs", "Oil for frying", "Lemon aioli"],
      preparation: "1. Coat scallops in flour, eggs, and breadcrumbs. 2. Fry until golden. 3. Serve with lemon aioli."
    },
    {
      name: "Fried Crab Cakes",
      ingredients: ["Crab meat", "Breadcrumbs", "Eggs", "Mayonnaise", "Mustard", "Old Bay seasoning", "Oil for frying"],
      preparation: "1. Mix crab, breadcrumbs, eggs, and seasonings. 2. Form into patties. 3. Fry until golden."
    },
    {
      name: "Fried Lobster",
      ingredients: ["Lobster", "Flour", "Eggs", "Breadcrumbs", "Oil for frying", "Lemon butter"],
      preparation: "1. Coat lobster in flour, eggs, and breadcrumbs. 2. Fry until golden. 3. Serve with lemon butter."
    },
    {
      name: "Fried Mussels",
      ingredients: ["Mussels", "Flour", "Eggs", "Breadcrumbs", "Oil for frying", "Garlic aioli"],
      preparation: "1. Coat mussels in flour, eggs, and breadcrumbs. 2. Fry until golden. 3. Serve with garlic aioli."
    },
    {
      name: "Fried Shrimp Tacos",
      ingredients: ["Shrimp", "Tortillas", "Cabbage slaw", "Lime", "Cilantro", "Salsa", "Sour cream"],
      preparation: "1. Fry shrimp until golden. 2. Fill tortillas with shrimp, slaw, and salsa. 3. Garnish with lime and cilantro."
    }
  ];