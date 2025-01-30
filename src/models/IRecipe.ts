export interface IRecipe {
    id: number;
    name: string;
    image: string;
    tags: string[];
    description: string;
    ingredients: string[];
    instructions: string;
    authorId: number;
}