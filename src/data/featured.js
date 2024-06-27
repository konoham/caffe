const featured = [
  {
    title: "Black Coffee",
    description:
      "Svart kaffe är så enkelt som det kan bli med malda…kalla svart kaffe med sitt rätta namn: café noir.",
    ingredients: ["Coffee"],
    image:
      "https://images.unsplash.com/photo-1494314671902-39…xMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    id: 1,
    price: 20000,
  },
  {
    title: "Latte",
    description:
      "Som den mest populära kaffedrycken där ute består … med smak av allt från vanilj till pumpa kryddor.",
    ingredients: ["Espresso", "Milk"],
    image:
      "https://images.unsplash.com/photo-1561882468-9110e…xMjA3fDB8MHxzZWFyY2h8MTl8fGxhdHRlfGVufDB8fDB8fHww",
    id: 2,
    price: 25000,
  },
  {
    title: "Caramel Latte",
    description:
      "Om du gillar latte med en speciell smak kan karame…man och krämigheten hos ångad mjölk och karamell.",
    ingredients: ["Espresso", "Milk", "Caramel"],
    image:
      "https://images.unsplash.com/photo-1599398054066-84…xMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    id: 3,
    price: 27000,
  },
  {
    title: "Cappuccino",
    description:
      "Cappuccino är en latte som är gjord med mer skum ä…jölk eller sådana som tillsätter smakämnen också.",
    ingredients: ["Espresso", "Milk", "Foam"],
    image:
      "https://images.unsplash.com/photo-1557006021-b85fa…xMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    id: 4,
    price: 24000,
  },
  {
    title: "Americano",
    description:
      "Med en liknande smak som svart kaffe består americano av en espresso skott utspätt med hett vatten.",
    ingredients: ["Espresso", "Water"],
    image:
      "https://images.unsplash.com/photo-1532004491497-ba…xMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    id: 5,
    price: 18000,
  },
  {
    title: "Espresso",
    description:
      "Ett espressoskott kan serveras ensamt eller använd… de flesta kaffedrycker, som latte och macchiato.",
    ingredients: ["Espresso"],
    image:
      "https://images.unsplash.com/photo-1579992357154-fa…xMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    id: 6,
    price: 15000,
  },
  {
    title: "Macchiato",
    description:
      "Macchiaton är en annan espresso-baserad dryck som … mellanrummet mellan en cappuccino och en doppio.",
    ingredients: ["Espresso", "Foam"],
    image:
      "https://images.unsplash.com/photo-1557772611-722da…xMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    id: 7,
    price: 23000,
  },
  {
    title: "Mocha",
    description:
      "För alla chokladälskare där ute kommer ni att bli …n choklad-espressodryck med ångad mjölk och skum.",
    ingredients: ["Espresso", "Milk", "Chocolate"],
    image:
      "https://images.unsplash.com/photo-1607260550778-aa…xMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    id: 8,
    price: 26000,
  },
  {
    title: "Hot Chocolate",
    description:
      "Under kalla vinterdagar får en kopp varm choklad d…ra eftersom den innehåller energigivande koffein.",
    ingredients: ["Milk", "Chocolate"],
    image:
      "https://images.unsplash.com/photo-1542990253-0d0f5…8NDh8fGhvdCUyMGNob2NvbGF0ZXxlbnwwfHwwfHx8MA%3D%3D",
    id: 9,
    price: 22000,
  },
  {
    title: "Chai Latte",
    description:
      "Om du letar efter en smakfull varm dryck mitt i vi…nen av kardemumma och kanel ger en underbar smak.",
    ingredients: ["Tea", "Milk", "Cinnamon", "Cardamom", "Sugar"],
    image:
      "https://images.unsplash.com/photo-1578899952107-9c…yY2h8MTJ8fGNoYWklMjBsYXR0ZXxlbnwwfHwwfHx8MA%3D%3D",
    id: 10,
    price: 24000,
  },
  {
    title: "Matcha Latte",
    description:
      "Matcha latte är en grön, hälsosam kaffedryck med f…mild sötma, en unik smak och en mild koffeinkick.",
    ingredients: ["Matcha", "Milk", "Sugar"],
    image:
      "https://images.unsplash.com/photo-1536256263959-77…WFyY2h8M3x8bWF0Y2hhJTIwbGF0dGV8ZW58MHx8MHx8fDA%3D",
    id: 11,
    price: 26000,
  },
  {
    title: "Seasonal Brew",
    description:
      "Säsongs kaffe med olika smaktoner som karamell, frukt och choklad",
    ingredients: ["Coffee"],
    image:
      "https://images.unsplash.com/photo-1611162458324-aa…8MTg1fHxibGFjayUyMGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D",
    id: 12,
    price: 28000,
  },
  {
    title: "Svart Te",
    description:
      "Svart te föddes i Kina. Det är tillverkat av blad …ull och aromatisk dryck som passar till vardagen.",
    ingredients: ["Tea"],
    image:
      "https://images.unsplash.com/photo-1576092768241-de…3fDB8MHxzZWFyY2h8MjB8fHRlYXxlbnwwfHwwfHx8MA%3D%3D",
    id: 13,
    price: 15000,
  },
  {
    title: "Islatte",
    description:
      "Iced latte är en kyld kaffedryck som görs genom at…änd som cafè latte iced eller latte on the rocks.",
    ingredients: ["Espresso", "Milk", "Ice", "Sugar"],
    image:
      "https://images.unsplash.com/photo-1517701550927-30…8MHxzZWFyY2h8NHx8aWNlZCUyMGxhdHRlfGVufDB8fDB8fHww",
    id: 14,
    price: 23000,
  },
  {
    title: "Islatte Mocha",
    description:
      "Iced latte Mocha är en kombination av latte och mo…lskare en läcker upplevelse av choklad och kaffe.",
    ingredients: ["Espresso", "Milk", "Ice", "Chocolate"],
    image:
      "https://images.unsplash.com/photo-1642647391072-6a…8Mzh8fGljZWQlMjBtb2NoYSUyMGxhdHRlfGVufDB8fDB8fHww",
    id: 15,
    price: 24000,
  },
];

export default featured;
