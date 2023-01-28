const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const port = 3000;

mongoose.set("strictQuery", false);

// Declare the Schema of the Mongo model
const blogSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

//Export the model
const Blogs = mongoose.model("Blogs", blogSchema);

app.get("/blogs", async (req, res) => {
  try {
    const data = await Blogs.find();
    res.send(data);
  } catch (error) {
    res.send({ message: "error" });
  }
});

app.post("/blogs", async (req, res) => {
  try {
    const newBlog = new Blogs(req.body);
    newBlog.save();
  } catch (error) {
    res.send({ message: "error" });
  }
});

app.get("/blogs/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Blogs.findById(id);
    res.send(data);
  } catch (error) {
    res.send({ message: "error" });
  }
});

app.delete("/blogs/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Blogs.findByIdAndDelete(id);
    res.send({ message: "SUCCESS" });
  } catch (error) {
    res.send({ message: "error" });
  }
});

// Connect MongoDB at default port 27017.
mongoose.connect(
  "mongodb+srv://abilovv599:cemi2002@cluster0.bh7quof.mongodb.net/?retryWrites=true&w=majority",
  (err) => {
    if (!err) {
      console.log("MongoDB Connection Succeeded.");
    } else {
      console.log("Error in DB connection: " + err);
    }
  },
  app.listen(port, () =>
    console.log(`Example app listening on  http://localhost:${port}/blogs`)
  )
);
