import User from "../models/user.model.js";
import Message from './../models/message.model.js';

export const getChatUsers = async (rea, res) => {
    try {
        const loggedInUserId = req.user._id;
        const filteredUsers = await User.find({ _id: {$ne: loggedInUserId}}).select("-password");

        res.status(200).json(filteredUsers);
    } catch (error) {
        console.error("Error in the getChatUsers controller: ", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const getChats = async (req, res) => {
    try {
        const { id: userToChatId } = req.params;
        const myId = req.user._id;

        const messages = await Message.find({
            $or: [
                {senderId: myId, receiverId: userToChatId},
                {senderId: userToChatId, receiverId: myId}
            ]
        });

        res.status(200).json({ messages });
    } catch (error) {
        console.log("Error in the getChats controller: ", error.message);
        req.status(500).json({ message: "Internal Server Error" });
    }
};


export const sendChat = async (req, res) => {
    try {
        const {text, image} = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id;

        let imageUrl;
        if(image) {
            const uploadResponse = await cloudinary.uploader.upload(image);
            imageUrl = uploadResponse.secure_url;
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            text,
            image: imageUrl,
        })

        await newMessage.save();

        // Realtime Functionality

        res.status(200).json(newMessage);
    } catch (error) {
        console.log("Error in the sendChat controller: ", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};