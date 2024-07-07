import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema(
  {
    content : {
      type: String,
      required : true
    },
    complete : {
      type : Boolean,
      default : false
    },
    createdBy: {
       type : mongoose.Schema.Types.ObjectId,
       ref:"User"   // remember ke ref me jo naam de rhe ho vo same hona chahiye uske model ke naam ke 
       // jesa yha pr hus ref="User" ye exact whi naam h jo User model me use kra h 
    },
    subTodos : [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref : "SubTodo"
      }
    ]// Array of subtodos 
  }, { timestamps: true });

export const Todo = mongoose.model('Todo', todoSchema);
