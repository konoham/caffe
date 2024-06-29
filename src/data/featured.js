const featured = [
  {
    title: "Black Coffee",
    description:
      "Svart kaffe är så enkelt som det kan bli med malda…kalla svart kaffe med sitt rätta namn: café noir.",
    ingredients: ["Coffee"],
    image:
      "https://images.unsplash.com/photo-1562447457-579fc34967fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29mZmVlJTIwYWVzdGhldGljfGVufDB8fDB8fHww",
    id: 1,
    price: 20000,
  },
  {
    title: "Latte",
    description:
      "Som den mest populära kaffedrycken där ute består … med smak av allt från vanilj till pumpa kryddor.",
    ingredients: ["Espresso", "Milk"],
    image:
      "https://plus.unsplash.com/premium_photo-1671088575920-09f2a5970574?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29mZmVlJTIwYWVzdGhldGljfGVufDB8fDB8fHww",
    id: 2,
    price: 25000,
  },
  {
    title: "Caramel Latte",
    description:
      "Om du gillar latte med en speciell smak kan karame…man och krämigheten hos ångad mjölk och karamell.",
    ingredients: ["Espresso", "Milk", "Caramel"],
    image:
      "https://images.unsplash.com/photo-1621135177072-57c9b6242e7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29mZmVlJTIwYWVzdGhldGljfGVufDB8fDB8fHww",
    id: 3,
    price: 27000,
  },
  {
    title: "Cappuccino",
    description:
      "Cappuccino är en latte som är gjord med mer skum ä…jölk eller sådana som tillsätter smakämnen också.",
    ingredients: ["Espresso", "Milk", "Foam"],
    image:
      "https://images.unsplash.com/photo-1512311734173-51a49c854e78?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGNvZmZlZSUyMGFlc3RoZXRpY3xlbnwwfHwwfHx8MA%3D%3D",
    id: 4,
    price: 24000,
  },
  {
    title: "Americano",
    description:
      "Med en liknande smak som svart kaffe består americano av en espresso skott utspätt med hett vatten.",
    ingredients: ["Espresso", "Water"],
    image:
      "https://plus.unsplash.com/premium_photo-1712736395870-ab6ad709760f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNvZmZlZSUyMGFlc3RoZXRpY3xlbnwwfHwwfHx8MA%3D%3D",
    id: 5,
    price: 18000,
  },
  {
    title: "Espresso",
    description:
      "Ett espressoskott kan serveras ensamt eller använd… de flesta kaffedrycker, som latte och macchiato.",
    ingredients: ["Espresso"],
    image:
      "https://images.unsplash.com/photo-1556216700-7b0f3a2e3625?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGNvZmZlZSUyMGFlc3RoZXRpY3xlbnwwfHwwfHx8MA%3D%3D",
    id: 6,
    price: 15000,
  },
  {
    title: "Macchiato",
    description:
      "Macchiaton är en annan espresso-baserad dryck som … mellanrummet mellan en cappuccino och en doppio.",
    ingredients: ["Espresso", "Foam"],
    image:
      "https://images.unsplash.com/photo-1535302665683-92c2b2e4d039?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fGNvZmZlZSUyMGFlc3RoZXRpY3xlbnwwfHwwfHx8MA%3D%3D",
    id: 7,
    price: 23000,
  },
  {
    title: "Mocha",
    description:
      "För alla chokladälskare där ute kommer ni att bli …n choklad-espressodryck med ångad mjölk och skum.",
    ingredients: ["Espresso", "Milk", "Chocolate"],
    image:
      "https://images.unsplash.com/photo-1521401292936-0a2129a30b1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fGNvZmZlZSUyMGFlc3RoZXRpY3xlbnwwfHwwfHx8MA%3D%3D",
    id: 8,
    price: 26000,
  },
  {
    title: "Hot Chocolate",
    description:
      "Under kalla vinterdagar får en kopp varm choklad d…ra eftersom den innehåller energigivande koffein.",
    ingredients: ["Milk", "Chocolate"],
    image:
      "https://images.unsplash.com/photo-1538169885362-e2908f1c7c94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fGNvZmZlZSUyMGFlc3RoZXRpY3xlbnwwfHwwfHx8MA%3D%3D",
    id: 9,
    price: 22000,
  },
  {
    title: "Chai Latte",
    description:
      "Om du letar efter en smakfull varm dryck mitt i vi…nen av kardemumma och kanel ger en underbar smak.",
    ingredients: ["Tea", "Milk", "Cinnamon", "Cardamom", "Sugar"],
    image:
      "https://images.unsplash.com/photo-1549652127-2e5e59e86a7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTV8fGNvZmZlZSUyMGFlc3RoZXRpY3xlbnwwfHwwfHx8MA%3D%3D",
    id: 10,
    price: 24000,
  },
  {
    title: "Matcha Latte",
    description:
      "Matcha latte är en grön, hälsosam kaffedryck med f…mild sötma, en unik smak och en mild koffeinkick.",
    ingredients: ["Matcha", "Milk", "Sugar"],
    image:
      "https://images.unsplash.com/photo-1495751664589-2e3f1b434989?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA3fHxjb2ZmZWUlMjBhZXN0aGV0aWN8ZW58MHx8MHx8fDA%3D",
    id: 11,
    price: 26000,
  },
  {
    title: "Seasonal Brew",
    description:
      "Säsongs kaffe med olika smaktoner som karamell, frukt och choklad",
    ingredients: ["Coffee"],
    image:
      "https://plus.unsplash.com/premium_photo-1672192164411-15349b84bc76?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ1fHxjb2ZmZWUlMjBhZXN0aGV0aWN8ZW58MHx8MHx8fDA%3D",
    id: 12,
    price: 28000,
  },
  {
    title: "Svart Te",
    description:
      "Svart te föddes i Kina. Det är tillverkat av blad …ull och aromatisk dryck som passar till vardagen.",
    ingredients: ["Tea"],
    image:
      "https://images.unsplash.com/photo-1582572430474-3acf30221916?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIwfHxjb2ZmZWUlMjBhZXN0aGV0aWN8ZW58MHx8MHx8fDA%3D",
    id: 13,
    price: 15000,
  },
  {
    title: "Islatte",
    description:
      "Iced latte är en kyld kaffedryck som görs genom at…änd som cafè latte iced eller latte on the rocks.",
    ingredients: ["Espresso", "Milk", "Ice", "Sugar"],
    image:
      "https://images.unsplash.com/photo-1532004491497-ba35c367d634?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMxfHxjb2ZmZWUlMjBhZXN0aGV0aWN8ZW58MHx8MHx8fDA%3D",
    id: 14,
    price: 23000,
  },
  {
    title: "Islatte Mocha",
    description:
      "Iced latte Mocha är en kombination av latte och mo…lskare en läcker upplevelse av choklad och kaffe.",
    ingredients: ["Espresso", "Milk", "Ice", "Chocolate"],
    image:
      "https://images.unsplash.com/photo-1627730777809-a58f70612247?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ2fHxjb2ZmZWUlMjBhZXN0aGV0aWN8ZW58MHx8MHx8fDA%3D",
    id: 15,
    price: 24000,
  },
];

export default featured;
