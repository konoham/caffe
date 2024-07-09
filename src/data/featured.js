const featured = [
  {
    name: "Black Coffee",
    price: 20000,
    images:
      "https://images.unsplash.com/photo-1562447457-579fc34967fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29mZmVlJTIwYWVzdGhldGljfGVufDB8fDB8fHww",
    id: 1,
    country: "Ethiopia",
    qty: 1,
  },
  {
    name: "Latte",
    price: 25000,
    images:
      "https://plus.unsplash.com/premium_photo-1671088575920-09f2a5970574?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29mZmVlJTIwYWVzdGhldGljfGVufDB8fDB8fHww",
    id: 2,
    country: "Italy",
    qty: 1,
  },
  {
    name: "Caramel Latte",
    price: 27000,
    images:
      "https://images.unsplash.com/photo-1621135177072-57c9b6242e7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29mZmVlJTIwYWVzdGhldGljfGVufDB8fDB8fHww",
    id: 3,
    country: "United States",
    qty: 1,
  },
  {
    name: "Cappuccino",
    price: 24000,
    images:
      "https://images.unsplash.com/photo-1512311734173-51a49c854e78?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGNvZmZlZSUyMGFlc3RoZXRpY3xlbnwwfHwwfHx8MA%3D%3D",
    id: 4,
    country: "Italy",
    qty: 1,
  },
  {
    name: "Americano",
    price: 18000,
    images:
      "https://plus.unsplash.com/premium_photo-1712736395870-ab6ad709760f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNvZmZlZSUyMGFlc3RoZXRpY3xlbnwwfHwwfHx8MA%3D%3D",
    id: 5,
    country: "United States",
    qty: 1,
  },
  {
    name: "Espresso",
    price: 15000,
    images:
      "https://images.unsplash.com/photo-1556216700-7b0f3a2e3625?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGNvZmZlZSUyMGFlc3RoZXRpY3xlbnwwfHwwfHx8MA%3D%3D",
    id: 6,
    country: "Italy",
    qty: 1,
  },
  {
    name: "Macchiato",
    price: 23000,
    images:
      "https://images.unsplash.com/photo-1535302665683-92c2b2e4d039?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fGNvZmZlZSUyMGFlc3RoZXRpY3xlbnwwfHwwfHx8MA%3D%3D",
    id: 7,
    country: "Italy",
    qty: 1,
  },
  {
    name: "Mocha",
    price: 26000,
    images:
      "https://images.unsplash.com/photo-1521401292936-0a2129a30b1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fGNvZmZlZSUyMGFlc3RoZXRpY3xlbnwwfHwwfHx8MA%3D%3D",
    id: 8,
    country: "Yemen",
    qty: 1,
  },
  {
    name: "Hot Chocolate",
    price: 22000,
    images:
      "https://images.unsplash.com/photo-1538169885362-e2908f1c7c94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fGNvZmZlZSUyMGFlc3RoZXRpY3xlbnwwfHwwfHx8MA%3D%3D",
    id: 9,
    country: "Mexico",
    qty: 1,
  },
  {
    name: "Chai Latte",
    price: 24000,
    images:
      "https://images.unsplash.com/photo-1549652127-2e5e59e86a7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTV8fGNvZmZlZSUyMGFlc3RoZXRpY3xlbnwwfHwwfHx8MA%3D%3D",
    id: 10,
    country: "India",
    qty: 1,
  },
  {
    name: "Matcha Latte",
    price: 26000,
    images:
      "https://images.unsplash.com/photo-1495751664589-2e3f1b434989?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA3fHxjb2ZmZWUlMjBhZXN0aGV0aWN8ZW58MHx8MHx8fDA%3D",
    id: 11,
    country: "Japan",
    qty: 1,
  },
  {
    name: "Seasonal Brew",
    price: 28000,
    images:
      "https://plus.unsplash.com/premium_photo-1672192164411-15349b84bc76?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ1fHxjb2ZmZWUlMjBhZXN0aGV0aWN8ZW58MHx8MHx8fDA%3D",
    id: 12,
    country: "Varies",
    qty: 1,
  },
  {
    name: "Svart Te",
    price: 15000,
    images:
      "https://images.unsplash.com/photo-1582572430474-3acf30221916?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIwfHxjb2ZmZWUlMjBhZXN0aGV0aWN8ZW58MHx8MHx8fDA%3D",
    id: 13,
    country: "China",
    qty: 1,
  },
  {
    name: "Islatte",
    price: 23000,
    images:
      "https://images.unsplash.com/photo-1532004491497-ba35c367d634?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMxfHxjb2ZmZWUlMjBhZXN0aGV0aWN8ZW58MHx8MHx8fDA%3D",
    id: 14,
    country: "Italy",
    qty: 1,
  },
  {
    name: "Islatte Mocha",
    price: 24000,
    images:
      "https://images.unsplash.com/photo-1627730777809-a58f70612247?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ2fHxjb2ZmZWUlMjBhZXN0aGV0aWN8ZW58MHx8MHx8fDA%3D",
    id: 15,
    country: "Yemen",
    qty: 1,
  },
];

export default featured;
