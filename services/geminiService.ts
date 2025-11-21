import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export interface MockProduct {
  name: string;
  storeName: string;
  price: string;
  rating: number;
  description: string;
  tags: string[];
}

export const generateMockProducts = async (query: string): Promise<MockProduct[]> => {
  if (!process.env.API_KEY) {
    console.warn("No API Key found for Gemini");
    return fallbackProducts;
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Generate 3 realistic product listings for a local university marketplace called 'Supplify' in the Philippines (CMU ecosystem) based on the search query: "${query}". 
      The products should look like they are sold by local sari-sari stores, school supply shops, or bookstores near campus.
      Include a price in Philippine Peso (₱), a star rating (1-5), a short description relevant to students (mentioning 'urgent' or specific academic use cases), and a store name (e.g., "Ate Joy's Supplies", "Campus Merch").`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              name: { type: Type.STRING },
              storeName: { type: Type.STRING },
              price: { type: Type.STRING },
              rating: { type: Type.NUMBER },
              description: { type: Type.STRING },
              tags: { type: Type.ARRAY, items: { type: Type.STRING } }
            },
            required: ["name", "storeName", "price", "rating", "description", "tags"]
          }
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text) as MockProduct[];
    }
    return fallbackProducts;

  } catch (error) {
    console.error("Error generating mock products:", error);
    return fallbackProducts;
  }
};

const fallbackProducts: MockProduct[] = [
  {
    name: "Yellow Pad (Whole)",
    storeName: "Kuya Ben's School Supplies",
    price: "₱45.00",
    rating: 4.8,
    description: "Standard yellow pad for quizzes. Bulk discounts available.",
    tags: ["Stationery", "Essentials"]
  },
  {
    name: "Scientific Calculator (Casio fx-991ES)",
    storeName: "CMU Multipurpose Coop",
    price: "₱1,250.00",
    rating: 4.9,
    description: "Board exam approved. Essential for Engineering students.",
    tags: ["Tech", "Essentials"]
  },
  {
    name: "0.5 Gel Pen (Black)",
    storeName: "Ate Len's Sari-Sari",
    price: "₱15.00",
    rating: 4.5,
    description: "Smooth writing, doesn't smudge. Perfect for long exams.",
    tags: ["Accessories", "Writing"]
  }
];