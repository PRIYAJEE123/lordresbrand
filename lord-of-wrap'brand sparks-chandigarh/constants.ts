import { MenuItem } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'The Lord’s Special Paneer Wrap',
    description: 'Smoked cottage cheese, secret makhani sauce, crunchy veggies, wrapped in a beetroot tortilla.',
    price: 249,
    image: 'https://picsum.photos/400/400?random=1',
    category: 'Veg',
    isBestseller: true,
    spicinessLevel: 2,
  },
  {
    id: '2',
    name: 'Fiery Chicken Tikka Wrap',
    description: 'Charcoal grilled chicken chunks, spicy mint chutney, onions, and lime zest.',
    price: 299,
    image: 'https://picsum.photos/400/400?random=2',
    category: 'Non-Veg',
    isBestseller: true,
    spicinessLevel: 3,
  },
  {
    id: '3',
    name: 'Cheesy Corn & Spinach Blast',
    description: 'Melting mozzarella, sweet corn, fresh spinach, and jalapeños.',
    price: 219,
    image: 'https://picsum.photos/400/400?random=3',
    category: 'Veg',
    spicinessLevel: 1,
  },
  {
    id: '4',
    name: 'Mutton Seekh Kebab Roll',
    description: 'Juicy mutton seekh, rumali roti, pickled onions, and special masala.',
    price: 349,
    image: 'https://picsum.photos/400/400?random=4',
    category: 'Non-Veg',
    spicinessLevel: 2,
  },
  {
    id: '5',
    name: 'Falafel Hummus Wrap',
    description: 'Crispy falafel, creamy hummus, tahini sauce, and pickled veggies.',
    price: 229,
    image: 'https://picsum.photos/400/400?random=5',
    category: 'Veg',
    spicinessLevel: 1,
  },
  {
    id: '6',
    name: 'Butter Chicken Bomb',
    description: 'Classic butter chicken gravy, shredded chicken, heavy cream drizzle.',
    price: 319,
    image: 'https://picsum.photos/400/400?random=6',
    category: 'Non-Veg',
    isBestseller: true,
    spicinessLevel: 1,
  },
  {
    id: '7',
    name: 'Mexican Salsa Bean Wrap',
    description: 'Kidney beans, salsa sauce, nachos crunch inside, spicy cheese dip.',
    price: 209,
    image: 'https://picsum.photos/400/400?random=7',
    category: 'Veg',
    spicinessLevel: 2,
  },
  {
    id: '8',
    name: 'Egg & Cheese Sunrise',
    description: 'Double egg omelette, cheddar slice, mayo, and black pepper.',
    price: 189,
    image: 'https://picsum.photos/400/400?random=8',
    category: 'Non-Veg',
    spicinessLevel: 1,
  },
];

export const CONTACT_INFO = {
  phone: '8264093595',
  email: 'arminders422@gmail.com',
  address: 'Sector 35, Chandigarh',
};

export const CHAT_SYSTEM_INSTRUCTION = `
You are the AI assistant for 'Lord of Wrap's' in Chandigarh. 
Tone: Friendly, energetic, appetizing, and premium.
Key Info:
- Fast delivery (approx 30 mins).
- Best wraps in Tricity (Chandigarh, Mohali, Panchkula).
- Fresh ingredients, hygienic kitchen.
- Suggest wraps based on Veg/Non-Veg preference and spiciness.
- Do not process payments directly, guide them to the menu.
- Keep answers short and punchy (under 50 words usually).
`;