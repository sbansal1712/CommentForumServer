const mongoose = require("mongoose");
const Mst_User = require("./users");


const ConversationSchema = new mongoose.Schema(
  {
    
    ConversationTitle: { type: String },
    username : {type : String},
    Responses : [
      {
        comment : {type : String},
        
        username : {type : String, ref : Mst_User},
        Replies : [{
          username : {type : String, ref : Mst_User},
          comment :  {type : String}
        }]
      }
    ]
  },
  { collection: "Mst_Conversation" }
);


const Mst_Conversation = mongoose.model("Mst_Conversation", ConversationSchema);
module.exports = Mst_Conversation;
