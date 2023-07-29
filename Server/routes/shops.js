const express = require("express");
const router = express.Router();
const shops = require("../models/shops");

/**
 * 
 * 
 */

// GET route to fetch all shops from the database
router.get("/", async (req, res) => getShopsRoutes(req, res)) ;

getShopsRoutes = async (req, res) =>  {
  try {
    const Shop = await shops.find();
    res.json(Shop);
  } catch (err) {
    console.error("Error fetching shops:", err);
    res.status(500).json({ error: "Error fetching shops" });
  }
}

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

router.patch("/update/:id", (req, res) => {
  try {
    const shopID = req.params.id;
    console.log(shopID);
    const { MedicineName, Price } = req.body;

    const shop = shops.findOne({ _id: shopID });

    if (shop) {
      shop.MedicineName = MedicineName;
      shop.Price = Price;
      const updatedShop = shops.save();

      res.json({ msg: updatedShop });
    } else {
      return res.status(404).json({ msg: "Shop not found" });
    }
  } catch (err) {
    console.log("Error:", err);

    res.status(500).json({ error: "Internal Server Error" });
  }
});


module.exports = router;
