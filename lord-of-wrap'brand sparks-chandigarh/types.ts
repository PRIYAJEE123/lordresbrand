export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'Veg' | 'Non-Veg';
  isBestseller?: boolean;
  spicinessLevel?: 1 | 2 | 3;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isStreaming?: boolean;
}

export interface DeliveryLocation {
  sector: string;
  pincode: string;
  lat?: number;
  lng?: number;
}