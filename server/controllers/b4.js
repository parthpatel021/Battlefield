import soldierModel from "../models/b4/soldierModel.js"
import storeModel from "../models/b4/storeModel.js";

// Controller soldier - info (B4)
export const getSoldierInfoController = async (req, res) => {
    try {
        var soldierInfo = await soldierModel.find({});
        res.status(200).send({
            success: true,
            message: 'BattleField 4 - Soldier Info',
            soldierInfo
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Erorr in getting soldierInfo",
            error: error.message,
        });
    }
}

export const addSoldierInfoContaroller = async (req,res) => {
    try {
        const soldierInfo = new soldierModel(req.body);
        await soldierInfo.save();

        res.status(201).send({
            success: true,
            message: "soldierInfo Created Successfully",
            soldierInfo,
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Error in crearing soldierInfo",
        });

    }
};

export const getStoreInfoController = async (req,res) => {
    try {
        var storeInfo = await storeModel.find({});
        res.status(200).send({
            success: true,
            message: 'BattleField 4 - Store Info',
            storeInfo
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Erorr in getting StoreInfo",
            error: error.message,
        });
    }
}