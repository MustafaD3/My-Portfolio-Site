import express from "express"
import dotenv from "dotenv"
import { dirname } from 'path';
import { fileURLToPath } from 'url';
dotenv.config()
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express()
//Server Creation
app.listen(process.env.PORT,()=>{
    console.log(`Sunucu ${process.env.PORT} Portundan Dinleniyor.`)
        //Set View Engine Ejs
        app.set('view engine', "ejs");
        app.set('views',__dirname+'/views');
        //Static Public Folder
        app.use("/public",express.static("./public"))
        //Main Page Request
        app.get("/",(req,res,next)=>{
            res.statusCode = 200
            res.render("index",{
                title:"Mustafa Dalkılıç "
            })
        })
        //About Page Request
        app.get("/about",(req,res,next)=>{
            res.statusCode = 200
            res.render("about",{
                title:"Mustafa Dalkılıç | Hakkında"
            })
        })
        //Contact Page Request
        app.get("/contact",(req,res,next)=>{
            res.statusCode = 200
            res.render("contact",{
                title:"Mustafa Dalkılıç | İletişim"
            })
        })
        app.use((req,res,next)=>{
            res.statusCode = 404
            res.render("404",{
                title:"Mustafa Dalkılıç | 404"
            })
        })

    })
