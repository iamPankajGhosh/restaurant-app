const catagories = [
  "Biriyani",
  "Rasgulla",
  "Ice Cream",
  "Poori",
  "Paratha",
  "Omelette",
  "Kebabs",
  "Lassi",
  "Chinese",
  "Gulab Jamun",
  "Cakes",
  "Pizza",
  "Rolls",
  "Dosa",
  "Pav Bhaji",
  "Pastry",
  "Noodles",
  "Pasta",
  "North Indian",
  "Khichdi",
];

const foodItems = [
  // Biriyani
  {
    id: 1,
    name: "Hyderabadi Biryani",
    category: "Biriyani",
    price: 299,
    image:
      "https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg",
  },
  {
    id: 2,
    name: "Chicken Biryani",
    category: "Biriyani",
    price: 349,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Gvw3ZWiy7-mueQ6BxN1rH4UBEbE2T1anZPqzPE2PzQ&s",
  },
  {
    id: 3,
    name: "Mutton Biryani",
    category: "Biriyani",
    price: 399,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR85pEoXpvCDNE-pTHbXJfmSX02eEG9qd0Q35apF56wUA&s",
  },
  {
    id: 4,
    name: "Vegetable Biryani",
    category: "Biriyani",
    price: 249,
    image:
      "https://www.madhuseverydayindian.com/wp-content/uploads/2022/11/easy-vegetable-biryani.jpg",
  },
  {
    id: 5,
    name: "Egg Biryani",
    category: "Biriyani",
    price: 279,
    image:
      "https://spicecravings.com/wp-content/uploads/2020/10/Egg-Biryani-Featured-1.jpg",
  },

  // Rasgulla
  {
    id: 6,
    name: "Nolen Gur Rasgulla",
    category: "Rasgulla",
    price: 149,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjQQtdH0-7su540R114nHHyh5jrGniwuNUqyWnyOhqNQ&s",
  },
  {
    id: 7,
    name: "Spongy Rasgulla",
    category: "Rasgulla",
    price: 99,
    image:
      "https://i0.wp.com/muditaskitchen.com/wp-content/uploads/2021/01/DSC_9387.jpg?resize=530%2C530&ssl=1",
  },
  {
    id: 8,
    name: "Malai Rasgulla",
    category: "Rasgulla",
    price: 179,
    image: "https://premsweets.co.in/wp-content/uploads/2021/12/Rasgulla1.webp",
  },
  {
    id: 9,
    name: "Mini Rasgulla",
    category: "Rasgulla",
    price: 89,
    image:
      "https://i0.wp.com/binjalsvegkitchen.com/wp-content/uploads/2015/11/Chena-Angoor-L1.jpg?resize=600%2C900&ssl=1",
  },
  {
    id: 10,
    name: "Chocolate Rasgulla",
    category: "Rasgulla",
    price: 199,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhZUhUWf8Jeii3hxGtYMFc36YV4ZEE5gbzFmAgUg9yMg&s",
  },

  // Ice Cream
  {
    id: 11,
    name: "Kulfi Ice Cream",
    category: "Ice Cream",
    price: 99,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXISmX6J35SXH40rF-guRemJdAjJcxLXwjKSwo-WvY6A&s",
  },
  {
    id: 12,
    name: "Mango Ice Cream",
    category: "Ice Cream",
    price: 149,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcWt059l6z093pETF38sexE5VNRxdYZ74iV6Qv2mg3Jw&s",
  },
  {
    id: 13,
    name: "Strawberry Ice Cream",
    category: "Ice Cream",
    price: 149,
    image:
      "https://www.recipetineats.com/wp-content/uploads/2018/07/Strawberry-Ice-Cream-No-Churn_3b.jpg",
  },
  {
    id: 14,
    name: "Vanilla Ice Cream",
    category: "Ice Cream",
    price: 129,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQJymoi1lPqDDJs5y7aX7v43-qVGF0Je9up7Q1cT-EgQ&s",
  },
  {
    id: 15,
    name: "Chocolate Ice Cream",
    category: "Ice Cream",
    price: 149,
    image:
      "https://www.milkmaid.in/sites/default/files/2022-12/Chocolate-Ice-Cream-335x300.jpg",
  },

  // Poori
  {
    id: 16,
    name: "Aloo Poori",
    category: "Poori",
    price: 99,
    image:
      "https://www.whiskaffair.com/wp-content/uploads/2020/02/Aloo-Puri-1-3.jpg",
  },
  {
    id: 17,
    name: "Masala Poori",
    category: "Poori",
    price: 119,
    image:
      "https://www.aayisrecipes.com/wp-content/uploads/2010/03/masala-puri2.jpg",
  },
  {
    id: 18,
    name: "Paneer Poori",
    category: "Poori",
    price: 149,
    image: "https://slurrp.club/wp-content/uploads/2019/03/DSC_0980.jpg",
  },
  {
    id: 19,
    name: "Chana Poori",
    category: "Poori",
    price: 129,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ39CYrluYuFE6hefwGaJIKE1vITWtKMeULna1z_IPJuw&s",
  },
  {
    id: 20,
    name: "Plain Poori",
    category: "Poori",
    price: 79,
    image:
      "https://c.ndtvimg.com/2023-05/8fkuk11o_poori_625x300_25_May_23.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=675",
  },

  // Paratha
  {
    id: 21,
    name: "Aloo Paratha",
    category: "Paratha",
    price: 79,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRWYMl7-_1l2xTUyyXY_0raGEazjJRgTPzuLcnFr6HAg&s",
  },
  {
    id: 22,
    name: "Paneer Paratha",
    category: "Paratha",
    price: 129,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnzvCzHR3tktK2FVZEVtQ8ySdIYb3RqZrbasiuQx1FGQ&s",
  },
  {
    id: 23,
    name: "Gobi Paratha",
    category: "Paratha",
    price: 99,
    image:
      "https://vismaifood.com/storage/app/uploads/public/09f/365/666/thumb__700_0_0_0_auto.jpg",
  },
  {
    id: 24,
    name: "Pudina Paratha",
    category: "Paratha",
    price: 89,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJJFGchfqry_0EixaBBTgmTojVWy9atjy_Eix7M-I4XA&s",
  },
  {
    id: 25,
    name: "Lachha Paratha",
    category: "Paratha",
    price: 99,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFHUbevL8dDUtWJpYfG3uM32_-K9c-RDuAZRoK6lCAYg&s",
  },

  // Omelette
  {
    id: 26,
    name: "Masala Omelette",
    category: "Omelette",
    price: 99,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPicW_DNHmB-rRxWa585XcfE1JB5ErqTLYWLTttbK5tg&s ",
  },
  {
    id: 27,
    name: "Cheese Omelette",
    category: "Omelette",
    price: 129,
    image:
      "https://bellyfull.net/wp-content/uploads/2020/08/Omelette-blog-3.jpg",
  },
  {
    id: 28,
    name: "Vegetable Omelette",
    category: "Omelette",
    price: 119,
    image:
      "https://www.liveeatlearn.com/wp-content/uploads/2020/12/vegetarian-denver-omelette-vert.jpg",
  },
  {
    id: 29,
    name: "Plain Omelette",
    category: "Omelette",
    price: 79,
    image:
      "https://cdn11.bigcommerce.com/s-5vfc75n1yv/product_images/uploaded_images/plain-omelette.jpg",
  },
  {
    id: 30,
    name: "Egg Bhurji",
    category: "Omelette",
    price: 99,
    image:
      "https://www.whiskaffair.com/wp-content/uploads/2020/07/Egg-Bhurji-2-3.jpg",
  },
];

export const data = { catagories, foodItems };
