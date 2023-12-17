import mongoose from "mongoose";

const soldierSchema = new mongoose.Schema(
    {
        level: {
            type: {},
            require: true,
        },
        menu: {
            type: [],
            require: true,
        },
        stats: {
            type: {},
            require: true,
        },
        tops: {
            type: [],
            require: true,
        }
    },
    { timestamps: true }
)
export default mongoose.model("soldiers", soldierSchema);