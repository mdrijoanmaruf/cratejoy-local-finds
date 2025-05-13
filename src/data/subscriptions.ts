
export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  avatar?: string;
}

export interface Subscription {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  frequency: 'Monthly' | 'Bi-Monthly' | 'Quarterly';
  thumbnail: string;
  images: string[];
  features: string[];
  details: string;
  reviews: Review[];
}

export const subscriptions: Subscription[] = [
  {
    id: "1",
    name: "Tech Enthusiast Box",
    category: "Electronics",
    description: "A monthly box filled with the latest tech gadgets, accessories, and innovative products for tech lovers.",
    price: 49.99,
    frequency: "Monthly",
    thumbnail: "https://i.postimg.cc/Qd1S82vp/tech-box.jpg",
    images: [
      "https://i.postimg.cc/Qd1S82vp/tech-box.jpg",
      "https://i.postimg.cc/Y06Lz4gT/tech-gadgets.jpg",
      "https://i.postimg.cc/FRVDQzd6/tech-accessories.jpg",
    ],
    features: [
      "4-6 tech products each month",
      "Exclusive early-access gadgets",
      "Mobile accessories",
      "Smart home products",
      "Free shipping"
    ],
    details: "The Tech Enthusiast Box brings you the latest innovations in technology every month. From smartphone accessories to smart home gadgets, each box is carefully curated to surprise and delight tech enthusiasts. Discover products before they hit the mainstream market and stay ahead of the tech curve with our expert selections.",
    reviews: [
      {
        id: "t1",
        name: "Alex Johnson",
        rating: 5,
        comment: "I've been subscribed for 6 months and every box has been amazing! Found some really unique gadgets I wouldn't have discovered otherwise.",
        date: "2023-04-15",
        avatar: "https://i.pravatar.cc/150?u=alex"
      },
      {
        id: "t2",
        name: "Sarah Miller",
        rating: 4,
        comment: "Great selection of products, though occasionally I get items I already own. Overall very satisfied with the quality.",
        date: "2023-03-22",
        avatar: "https://i.pravatar.cc/150?u=sarah"
      }
    ]
  },
  {
    id: "2",
    name: "Gourmet Snack Box",
    category: "Food & Beverage",
    description: "Discover gourmet snacks from around the world delivered to your door every month.",
    price: 34.99,
    frequency: "Monthly",
    thumbnail: "https://i.postimg.cc/05LwzXzp/food-box.jpg",
    images: [
      "https://i.postimg.cc/05LwzXzp/food-box.jpg",
      "https://i.postimg.cc/L57w0jvm/snacks.jpg",
      "https://i.postimg.cc/3JCLPsXr/gourmet.jpg",
    ],
    features: [
      "8-10 gourmet snacks per box",
      "International flavors each month",
      "Mix of sweet and savory",
      "Artisan and small-batch products",
      "Recipe cards included"
    ],
    details: "Our Gourmet Snack Box brings you on a culinary journey around the world. Each month, we curate a selection of premium snacks from different countries, introducing you to unique flavors and artisanal treats you won't find in local stores. From sweet to savory, each box is thoughtfully assembled to provide a diverse tasting experience.",
    reviews: [
      {
        id: "f1",
        name: "Michael Chen",
        rating: 5,
        comment: "The variety is incredible! I've tried snacks from countries I've never even visited. Great way to experience global flavors.",
        date: "2023-05-02",
        avatar: "https://i.pravatar.cc/150?u=michael"
      },
      {
        id: "f2",
        name: "Emily Rodriguez",
        rating: 3,
        comment: "Some items are amazing, others not to my taste. I appreciate the diversity though.",
        date: "2023-04-18",
        avatar: "https://i.pravatar.cc/150?u=emily"
      }
    ]
  },
  {
    id: "3",
    name: "Book Lovers Club",
    category: "Literature",
    description: "A curated selection of new releases and classics based on your reading preferences.",
    price: 29.99,
    frequency: "Monthly",
    thumbnail: "https://i.postimg.cc/ZKTWdGK2/book-box.jpg",
    images: [
      "https://i.postimg.cc/ZKTWdGK2/book-box.jpg",
      "https://i.postimg.cc/7ZLPXzpJ/books.jpg",
      "https://i.postimg.cc/MKTRXQ3L/reading-accessories.jpg",
    ],
    features: [
      "2 hardcover books per month",
      "Personalized to your preferences",
      "Author spotlights",
      "Reading accessories",
      "Access to exclusive online book club"
    ],
    details: "Book Lovers Club delivers reading joy every month with carefully selected books based on your preferences. Whether you're into thrilling mysteries, heartwarming fiction, or insightful non-fiction, we have you covered. Each box includes two hardcover books and special reading accessories that enhance your reading experience. Join our community of readers and discover your next favorite book!",
    reviews: [
      {
        id: "b1",
        name: "Jessica Adams",
        rating: 5,
        comment: "The curation is spot on! They really pay attention to my preferences and I've loved almost every book they've sent.",
        date: "2023-04-30",
        avatar: "https://i.pravatar.cc/150?u=jessica"
      },
      {
        id: "b2",
        name: "David Wilson",
        rating: 4,
        comment: "Great way to discover new authors. The additional goodies like bookmarks and teas make it even more special.",
        date: "2023-03-15",
        avatar: "https://i.pravatar.cc/150?u=david"
      }
    ]
  },
  {
    id: "4",
    name: "Self-Care Ritual Box",
    category: "Wellness",
    description: "Luxury self-care and wellness products for your mind, body, and soul.",
    price: 45.99,
    frequency: "Monthly",
    thumbnail: "https://i.postimg.cc/gjRmqFXk/wellness-box.jpg",
    images: [
      "https://i.postimg.cc/gjRmqFXk/wellness-box.jpg",
      "https://i.postimg.cc/MTpCJHfY/spa.jpg",
      "https://i.postimg.cc/SsX3dYvb/selfcare.jpg",
    ],
    features: [
      "5-7 premium wellness products",
      "Organic and natural ingredients",
      "Aromatherapy items",
      "Skincare products",
      "Stress-relief tools"
    ],
    details: "The Self-Care Ritual Box is your monthly reminder to take time for yourself. Each box contains thoughtfully selected wellness products that promote relaxation, mindfulness, and self-nurturing. From luxurious bath products to aromatherapy and mindfulness tools, we bring spa-quality self-care to your home. All products are cruelty-free and feature natural, high-quality ingredients.",
    reviews: [
      {
        id: "w1",
        name: "Olivia Parker",
        rating: 5,
        comment: "This subscription has transformed my self-care routine. The products are high quality and I love the theme each month.",
        date: "2023-05-10",
        avatar: "https://i.pravatar.cc/150?u=olivia"
      },
      {
        id: "w2",
        name: "Grace Kim",
        rating: 4,
        comment: "Perfect treat for myself! The bath products and candles are my favorites so far.",
        date: "2023-04-05",
        avatar: "https://i.pravatar.cc/150?u=grace"
      }
    ]
  },
  {
    id: "5",
    name: "Fitness Fanatic Box",
    category: "Fitness",
    description: "Everything you need to support your fitness journey and active lifestyle.",
    price: 39.99,
    frequency: "Monthly",
    thumbnail: "https://i.postimg.cc/g0jbpQcR/fitness-box.jpg",
    images: [
      "https://i.postimg.cc/g0jbpQcR/fitness-box.jpg",
      "https://i.postimg.cc/1XHT7c4c/workout-accessories.jpg",
      "https://i.postimg.cc/CxX9Cvnv/fitness-nutrition.jpg",
    ],
    features: [
      "Workout accessories",
      "Nutritional supplements",
      "Healthy snacks",
      "Fitness apparel items",
      "Training guides"
    ],
    details: "The Fitness Fanatic Box keeps you motivated and equipped for your fitness journey. Each month, receive workout gear, nutritional supplements, healthy snacks, and training resources tailored to your fitness level and goals. Whether you're a beginner or advanced athlete, our fitness experts select products that will enhance your workouts and support your active lifestyle.",
    reviews: [
      {
        id: "fit1",
        name: "Ryan Taylor",
        rating: 4,
        comment: "Great motivation to keep up with my fitness routine! The resistance bands and protein bars were awesome.",
        date: "2023-04-22",
        avatar: "https://i.pravatar.cc/150?u=ryan"
      },
      {
        id: "fit2",
        name: "Sophia Martinez",
        rating: 5,
        comment: "Such a great value for the price. I've discovered some amazing workout accessories and nutrition products.",
        date: "2023-03-30",
        avatar: "https://i.pravatar.cc/150?u=sophia"
      }
    ]
  },
  {
    id: "6",
    name: "Pet Happiness Box",
    category: "Pets",
    description: "Monthly box of treats, toys, and accessories for your furry friend.",
    price: 32.99,
    frequency: "Monthly",
    thumbnail: "https://i.postimg.cc/FKHRzCWr/pet-box.jpg",
    images: [
      "https://i.postimg.cc/FKHRzCWr/pet-box.jpg",
      "https://i.postimg.cc/4d8Ptdr5/pet-toys.jpg",
      "https://i.postimg.cc/PqDGk9zB/pet-treats.jpg",
    ],
    features: [
      "5-7 premium pet items",
      "Durable toys",
      "Healthy treats",
      "Grooming products",
      "Seasonal accessories"
    ],
    details: "Make your pet's month with the Pet Happiness Box! Tailored for dogs or cats, each box includes a variety of toys, treats, and accessories that are sure to delight your furry friend. We focus on high-quality, safe products that promote your pet's well-being and happiness. Each item is carefully selected by pet experts and tested by real pets to ensure satisfaction.",
    reviews: [
      {
        id: "p1",
        name: "Thomas Brown",
        rating: 5,
        comment: "My dog goes crazy every time the box arrives! The toys are durable and the treats are healthy - couldn't ask for more.",
        date: "2023-05-05",
        avatar: "https://i.pravatar.cc/150?u=thomas"
      },
      {
        id: "p2",
        name: "Hannah Lee",
        rating: 4,
        comment: "Great value and my cat loves the toys. Some treats weren't her favorite but overall it's a great subscription.",
        date: "2023-04-12",
        avatar: "https://i.pravatar.cc/150?u=hannah"
      }
    ]
  }
];
