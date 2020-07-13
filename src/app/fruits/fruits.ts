export interface Fruits {
    genus: string;
    name: string;
    id: number;
    family: string;
    order: string;
    imageUrl: string;
    nutritions: {
        carbohydrates: number,
        protein: number,
        fat: number,
        calories: number,
        sugar: number
    };
}

export interface FruitsResolved {
    fruit: Fruits;
    error?: any;
  }
