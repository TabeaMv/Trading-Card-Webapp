import { Schema, model } from 'mongoose'

const CardSchema = new Schema({
    name: {
        type: String,
    },
    team: {
        type: String,
    },
    stars: {
        type: Number,
    },
    division: {
        type: Number,
    },
    macro: {
        type: Number,
    },
    mechanics: {
        type: Number,
    },
    gold: {
        type: Number,
    },
    rarity: {
        type: String
    },
    rating: {
        type: Number,
    },
});
export const Card =  model<any>('Card', CardSchema);

export default defineEventHandler(async (event) => {
    const cards = await Card.find();

    return {
        cards,
    };
});