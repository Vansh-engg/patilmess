export interface MenuItem {
  day: string;
  isToday?: boolean;
  lunch: {
    sabzi: string;
    specialDish?: string;
    dal: string;
    bread: string;
    rice: string;
    sides: string;
  };
  dinner: {
    sabzi: string;
    specialDish?: string;
    dal: string;
    bread: string;
    rice: string;
    sides: string;
  };
  specialHighlight: string;
}

export const WEEKLY_MENU: MenuItem[] = [
  {
    day: "Monday",
    lunch: {
      sabzi: "Homestyle Aloo Gobi Matar (Mildly Spiced)",
      specialDish: "Koshimbir (Cucumber & Peanut Salad)",
      dal: "Classic Yellow Dal Tadka with Jeera & Hing",
      bread: "4 Soft Phulkas brushed with Desi Ghee",
      rice: "Steamed Fragrant Kolam Rice",
      sides: "Green Chili Lemon Pickle & Fresh Onions",
    },
    dinner: {
      sabzi: "Lauki Chana Dal Masala (Nutritious & Light)",
      dal: "Moong Dal Fry with Tomato & Ginger",
      bread: "4 Soft Whole Wheat Phulkas",
      rice: "Steamed Rice",
      sides: "Homestyle Mint Cucumber Raita",
    },
    specialHighlight: "Comforting start to the work week with light digestion.",
  },
  {
    day: "Tuesday",
    lunch: {
      sabzi: "Fresh Homestyle Paneer Bhurji / Matar Paneer",
      specialDish: "Special Kadai Paneer on request",
      dal: "Punjabi Dal Tadka with Garlic & Mustard",
      bread: "4 Soft Ghee Phulkas",
      rice: "Fragrant Jeera Rice",
      sides: "Sliced Onion, Lemon & Roasted Papad",
    },
    dinner: {
      sabzi: "Mix Vegetable Poriyal / Dry Bhaji",
      dal: "Homestyle Toor Dal with Curry Leaves",
      bread: "4 Soft Phulkas",
      rice: "Steamed Rice",
      sides: "Green Chutney & Salad",
    },
    specialHighlight: "Paneer Tuesday - Protein rich and hearty.",
  },
  {
    day: "Wednesday",
    lunch: {
      sabzi: "Pindi Chole Masala (Slow Cooked with Spices)",
      specialDish: "Punjabi Masala Onion Salad",
      dal: "Homestyle Yellow Dal Fry",
      bread: "4 Fresh Phulkas with Ghee",
      rice: "Steamed Long-Grain Rice",
      sides: "Mixed Veg Pickle & Roasted Green Chili",
    },
    dinner: {
      sabzi: "Bhindi Do Pyaza (Crispy Okra with Caramelized Onions)",
      dal: "Comforting Masoor Dal Tadka",
      bread: "4 Soft Phulkas",
      rice: "Steamed Rice",
      sides: "Dahi Koshimbir",
    },
    specialHighlight: "Slow-cooked Chole cooked without baking soda.",
  },
  {
    day: "Thursday",
    lunch: {
      sabzi: "Smoky Baingan Bharta (Roasted over open flame)",
      specialDish: "Maharashtrian Special Varan Bhaat with Ghee",
      dal: "Sweet & Sour Gujarati Style Toor Dal or Plain Varan",
      bread: "4 Hot Phulkas / Jowar Bhakri (on advance order)",
      rice: "Hot Steamed Rice with Toop (Ghee)",
      sides: "Crunchy Roasted Papad & Achar",
    },
    dinner: {
      sabzi: "Aloo Methi (Fresh Fenugreek Leaves & Potatoes)",
      dal: "Yellow Moong Dal with Jeera",
      bread: "4 Soft Phulkas",
      rice: "Steamed Rice",
      sides: "Fresh Sliced Cucumber & Tomato",
    },
    specialHighlight: "Authentic Baingan Bharta & Maharashtrian Varan Bhaat comfort.",
  },
  {
    day: "Friday",
    lunch: {
      sabzi: "Homestyle Rajma Masala (Soft, creamy & light)",
      specialDish: "Laccha Onions with Chaat Masala",
      dal: "Yellow Tadka Dal",
      bread: "4 Soft Ghee Phulkas",
      rice: "Steamed Jeera Basmati Rice",
      sides: "Aam ka Achar & Lemon Wedge",
    },
    dinner: {
      sabzi: "Dum Aloo Kashmiri / Soya Chaap Bhurji",
      dal: "Dal Fry with Fresh Coriander",
      bread: "4 Soft Phulkas",
      rice: "Steamed Rice",
      sides: "Cucumber Salad & Green Chili",
    },
    specialHighlight: "Friday Rajma Chawal special — homestyle comfort without restaurant heaviness.",
  },
  {
    day: "Saturday",
    lunch: {
      sabzi: "Spicy Kolhapuri Usal (Sprouted Moth Beans / Matki)",
      specialDish: "Maharashtrian Garlic Thecha (spicy)",
      dal: "Thick Homestyle Varan",
      bread: "4 Ghee Phulkas / 2 Hot Chapatis",
      rice: "Steamed Rice",
      sides: "Koshimbir & Roasted Udad Papad",
    },
    dinner: {
      sabzi: "Shahi Paneer / Paneer Butter Masala",
      dal: "Panchmel Mixed Dal",
      bread: "4 Soft Phulkas",
      rice: "Steamed Rice",
      sides: "Green Salad & Pickle",
    },
    specialHighlight: "Maharashtrian Saturday Usal & Fresh Paneer Feast.",
  },
  {
    day: "Sunday",
    lunch: {
      sabzi: "Special Paneer Makhani + Mixed Veg Korma",
      specialDish: "Gulab Jamun (2 pcs) or Homemade Sooji Sheera",
      dal: "Slow Cooked Homestyle Dal Makhani",
      bread: "4 Soft Phulkas with Pure Cow Ghee",
      rice: "Shahi Vegetable Pulao with Fried Cashews",
      sides: "Boondi Raita, Roasted Papad, Thecha & Pickles",
    },
    dinner: {
      sabzi: "Aloo Palak / Palak Paneer",
      dal: "Yellow Dal Tadka",
      bread: "4 Soft Phulkas",
      rice: "Steamed Rice",
      sides: "Fresh Salad",
    },
    specialHighlight: "Sunday Grand Feast with complimentary homemade dessert!",
  },
];

export interface MealPlan {
  id: string;
  name: string;
  tagline: string;
  price: number;
  originalPrice: number;
  period: string;
  perMealCost: number;
  popular?: boolean;
  features: string[];
  description: string;
}

export const MEAL_PLANS: MealPlan[] = [
  {
    id: "single-trial",
    name: "Single Trial Dabba",
    tagline: "Taste the quality with no commitment",
    price: 90,
    originalPrice: 110,
    period: "Per Meal",
    perMealCost: 90,
    popular: false,
    description: "Try one freshly cooked meal delivered to your doorstep in Thane West before taking a subscription.",
    features: [
      "4 Fresh Phulkas with pure Desi Ghee",
      "Daily Special Sabzi (different daily)",
      "Piping hot Dal Tadka / Dal Fry",
      "Steamed Fragrant Rice",
      "Fresh Salad & Lemon Pickle",
      "Choice of Lunch or Dinner slot",
      "Free Delivery in Shastri Nagar & nearby",
    ],
  },
  {
    id: "weekly-pass",
    name: "Weekly Work Pass (6 Days)",
    tagline: "Perfect for working bachelors & students",
    price: 520,
    originalPrice: 600,
    period: "6 Days (Mon - Sat)",
    perMealCost: 86,
    popular: false,
    description: "Hassle-free 6 days of daily hot lunch or dinner for busy workweeks.",
    features: [
      "Full daily rotating menu with zero repeat sabzis",
      "4 Phulkas with Ghee + Sabzi + Dal + Rice + Salad",
      "Flexible pause option (notify 3 hrs prior)",
      "Delivered right to your office desk or PG flat",
      "Stainless Steel Dabba or spill-proof disposable box",
      "Includes 1 Special Paneer meal in the week",
    ],
  },
  {
    id: "monthly-regular",
    name: "Monthly Ghar Ka Khana (26 Meals)",
    tagline: "Our most loved plan in Thane West",
    price: 2250,
    originalPrice: 2600,
    period: "26 Days (Mon - Sat)",
    perMealCost: 86,
    popular: true,
    description: "Wholesome, home-cooked daily meal that keeps you healthy month after month. Less oil, zero soda.",
    features: [
      "26 Days of Fresh Daily Lunch or Dinner",
      "4 Phulkas + 2 Sabzis / Paneer special + Dal + Rice",
      "Free carry bag / returnable steel tiffin",
      "Pause up to 4 days during travel/holidays",
      "Includes 4 weekly Sunday special sweets",
      "Priority delivery slot before 1:00 PM / 8:30 PM",
      "Direct WhatsApp support with mess owner",
    ],
  },
  {
    id: "monthly-full",
    name: "Monthly Full Board (Lunch + Dinner)",
    tagline: "Zero cooking stress all month long",
    price: 4350,
    originalPrice: 5100,
    period: "52 Meals (2 Meals/Day)",
    perMealCost: 83,
    popular: false,
    description: "Both lunch and dinner taken care of. Healthy, clean, balanced homestyle meals morning and evening.",
    features: [
      "52 Total Fresh Meals (Lunch & Dinner)",
      "Different menu for lunch and dinner every day",
      "Zero oil heaviness, zero digestive issues",
      "Pause up to 7 days with carryover balance",
      "Includes all Sunday feasts & sweets",
      "Special festival sweets on festive occasions",
      "Free doorstep delivery across all Thane West hubs",
    ],
  },
];

export const THANE_LOCALITIES = [
  { name: "Shastri Nagar, Thane West", eta: "15-25 mins", freeDelivery: true, landmark: "Near Patil Mess Center" },
  { name: "Panch Pakhadi, Thane West", eta: "20-30 mins", freeDelivery: true, landmark: "Near TMC Office / Service Road" },
  { name: "Naupada, Thane West", eta: "20-35 mins", freeDelivery: true, landmark: "Near Gokhale Road / Alok Hotel" },
  { name: "Teen Hath Naka, Thane West", eta: "20-30 mins", freeDelivery: true, landmark: "Near Eternity Mall / Highway" },
  { name: "Charai & Talao Pali, Thane West", eta: "25-35 mins", freeDelivery: true, landmark: "Near Lake & Market" },
  { name: "Khopat & Kolbad, Thane West", eta: "25-35 mins", freeDelivery: true, landmark: "Near ST Workshop / Cadbury" },
  { name: "Vartak Nagar, Thane West", eta: "25-35 mins", freeDelivery: true, landmark: "Near Korum Mall / Pokhran Rd" },
  { name: "Majiwada, Thane West", eta: "30-40 mins", freeDelivery: true, landmark: "Near Lodha Paradise / Majiwada Flyover" },
  { name: "Ghodbunder Road (Kapurbawdi to Manpada)", eta: "35-45 mins", freeDelivery: true, landmark: "Near D-Mart / Meadows" },
  { name: "Hiranandani Meadows, Thane West", eta: "30-45 mins", freeDelivery: true, landmark: "Residential Towers" },
  { name: "Wagle Industrial Estate, Thane West", eta: "25-35 mins", freeDelivery: true, landmark: "Corporate IT Parks & Offices" },
];

export const TESTIMONIALS = [
  {
    name: "Rohit Deshmukh",
    role: "Senior Software Engineer, Ashar IT Park, Wagle Estate",
    location: "Staying at Panch Pakhadi, Thane West",
    quote:
      "I have been taking lunch dabba from Patil Mess for the last 8 months. The biggest difference is ZERO indigestion. Outside hotel food ruins your stomach after 3 days, but Patil Mess feels genuinely like home food. Phulkas are always soft, and dal has that authentic hing-jeera tadka.",
    rating: 5,
    tag: "8-Month Subscriber",
  },
  {
    name: "Neha Kulkarni",
    role: "MPSC Aspirant & Library Student",
    location: "Staying near Talao Pali, Thane West",
    quote:
      "As a student from Kolhapur living in a PG, good food was my biggest struggle until someone recommended Patil Mess in Shastri Nagar. Very pocket friendly (₹90 per meal), hygienic, and the Sunday sweet with Varan Bhaat makes my week. Uncle is very polite on WhatsApp.",
    rating: 5,
    tag: "Student Plan",
  },
  {
    name: "Amit & Sunita Shah",
    role: "Retired Bank Manager",
    location: "Shastri Nagar, Thane West",
    quote:
      "We take the evening dinner tiffin since my wife had knee surgery. Patil Mess delivers sharp at 7:45 PM hot in steel tiffin. Very low oil, mild spices just like we requested, and completely pure vegetarian. Highly recommended to families in Thane West.",
    rating: 5,
    tag: "Family Dinner Plan",
  },
];
