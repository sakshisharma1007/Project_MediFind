const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const shops = require("../models/shops");



// GET route to fetch all shops from the database
router.get("/", async (req, res) => {
  try {
    const Shop = await shops.find();
    res.json(Shop);
  } catch (err) {
    console.error("Error fetching shops:", err);
    res.status(500).json({ error: "Error fetching shops" });
  }
});

//  route to post the data
router.post("/", (req, res) => {
  const { ShopName, OpeningTime, ClosingTime, Location, MedicineName, Price } =
    req.body;

  const shop = new shops({
    ShopName,
    OpeningTime,
    ClosingTime,
    Location,
    MedicineName,
    Price,
  });

  shop
    .save()
    .then(() => {
      res.status(201).json({ message: "Data added successfully" });
    })
    .catch((err) => {
      res.status(500).json({ error: "Error adding data." });
    });
});
router.put("/:id", async (req, res) => {
  try {
    const shopID = req.params.id;
    console.log("Received shopID:", shopID);

    // Check if shopID is a valid ObjectID
    if (!mongoose.Types.ObjectId.isValid(shopID)) {
      console.log("Invalid shop ID");
      return res.status(400).json({ success: false, message: "Invalid shop ID" });
    }

    const { MedicineName, Price } = req.body;

    // Add validation to check if MedicineName and Price are provided
    if (!MedicineName || !Price) {
      return res.status(400).json({ success: false, message: "MedicineName and Price are required" });
    }


    const updateData = {
      MedicineName,
      Price,
    };

    const updatedShop = await shops.findByIdAndUpdate(shopID, updateData, { new: true });

    if (updatedShop) {
      res.json({ success: true, message: "Shop updated successfully", shop: updatedShop });
    } else {
      res.json({ success: false, message: "Shop not found" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "Error updating shop", error: error.message });
  }
});



router.delete('/delete/:id',(req,res)=>{
  const shopID = req.params.id;
  shops.findByIdAndDelete(shopID).then((deletedShop)=>{
    if(deletedShop){
      res.json({message:'Shop deleted successfully.'});
    }else{
      res.status(404).json({error:'Shop not found.'});
    }
  })
  .catch((err)=>{
    res.status(500).json({error:'Failed to delete the shop.'});
  });
});



module.exports = router;
