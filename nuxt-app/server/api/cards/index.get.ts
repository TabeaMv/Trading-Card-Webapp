import { Schema, model } from 'mongoose'

const CardSchema = new Schema({
    name: {
        type: String,
    },
    team: {
        type: String,
    },
    stars: {
        type: String,
    },
    division: {
        type: String,
    },
    macro: {
        type: String,
    },
    mechanics: {
        type: String,
    },
    gold: {
        type: String,
    },
});
export const Card =  model<any>('Card', CardSchema);

export default defineEventHandler(async (event) => {
    const cards = await Card.find();

    return {
        cards,
    };
});