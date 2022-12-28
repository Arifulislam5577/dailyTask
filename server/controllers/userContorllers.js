import userModel from "../models/userModel.js";
import asynHandler from "express-async-handler";

export const authenticateUser = asynHandler(async (req, res) => {
  const { email, name, picture } = req.user;
  const findUser = await userModel.findOne({ userEmail: email });
  if (Object.keys(findUser ? findUser : {}).length) {
    const user = await userModel.findByIdAndUpdate(findUser._id, {
      userImg: picture,
      userName: name,
    });
    return res.status(200).json(user);
  } else {
    const user = await userModel.create({
      userEmail: email,
      userImg: picture,
      userName: name,
    });

    if (!user) {
      res.status(500).json({ message: "User Not Created" });
    }
    res.status(201).json(user);
  }
});
