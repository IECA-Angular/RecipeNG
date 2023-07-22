export interface IRecipe {
  title: string;
  category: string;
  minutes: number;
  indredients: string[];
  instructions: string[];
  prompt: string;
  stars: number;
  imageUrl: string;
}
