const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json()); 

mongoose.connect('mongodb://localhost:27017/mydb')
.then(()=>{console.log('Mongodb is connected')})
.catch((err) =>{console.error(err)})

const HabitSchema = new mongoose.Schema(
    {
        title :{ type:String, required:true },
        completed :{ type:Boolean , default :false }
    }
)
const Habit = mongoose.model('Habit',HabitSchema);

app.post('/habit' ,async(req,res) =>{
await new Habit(req.body).save();
res.send('Habit is saved ')
})

app.get('/habits',async(req,res)=>{
    const habits = await Habit.find();
    res.json(habits)
})

app.patch('/habit/:id',async(req,res)=>{
    try{
        const updateHabit = await Habit.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true } 
        )
        if(!updateHabit){
        return res.status(404).send("Habit not found")
    };
    res.json(updateHabit);
    }
    
    catch(err){
    res.status(500).send("Error updating Habit ")
    }
})
app.delete('/habit/:id',async(req,res)=>{
    try{
        const deleteHabit = await Habit.findByIdAndDelete(req.params.id)
        
        if(!deleteHabit){
            res.status(404).send("Habit not found")
        }
        res.send('Habit has been deleted Successfully')
    }
    catch(err){
        res.status(500).send('Error deleting Habit')
    }
})
app.listen(3000, () => {
console.log(" Server running ");
});
