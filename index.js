import express from "express";
import postRoutes from "./routes/post.js";
import authRoutes from "./routes/auth.js";
import usersRoutes from "./routes/users.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const PORT = process.env.PORT || 3030;
const app = express();
app.use(cors());

app.use(express.json());
app.use(cookieParser());
app.use("/api/post", postRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", usersRoutes);

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
});