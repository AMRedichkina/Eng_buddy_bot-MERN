const Messages = require("../models/messageModel");
const User = require("../models/userModel")

module.exports.getMessages = async (req, res, next) => {
  try {
    const { from, to } = req.body;

    const user = await User.findById(from);
    const chatType = user.englishLevel === 'beginner' ? 'beginner' : 'general';


    const messages = await Messages.find({
      users: {
        $all: [from, to],
        chat: chatType,
      },
    }).sort({ updatedAt: 1 });

    const projectedMessages = messages.map((msg) => {
      return {
        fromSelf: msg.sender.toString() === from,
        message: msg.message.text,
      };
    });
    res.json(projectedMessages);
  } catch (ex) {
    next(ex);
  }
};

module.exports.addMessage = async (req, res, next) => {
  try {
    const { from, to, message } = req.body;
    const sender = await User.findById(from);
    const chat = sender.englishLevel === 'beginner' ? 'beginner' : 'general';

    const data = await Messages.create({
      message: { text: message },
      users: [from, to],
      sender: from,
      chat: chat,
    });

    if (data) return res.json({ msg: "Message added successfully." });
    else return res.json({ msg: "Failed to add message to the database" });
  } catch (ex) {
    next(ex);
  }
};
