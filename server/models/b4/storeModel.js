import mongoose from "mongoose";

const storeSchema = new mongoose.Schema(
    {
        level: {
            type: {},
            require: true,
        },
        menu: {
            type: [],
            require: true,
        }
    },
    { timestamps: true }
)
export default mongoose.model("stores", storeSchema);