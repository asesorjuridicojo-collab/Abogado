const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

// 👨‍⚖️ PERFIL ABOGADO
app.get("/api/profile", (req,res)=>{
  res.json({
    name: "Jonathan Osiel de la Cruz A.",
    title: "Asesor Legal y Soluciones Jurídicas Premium",
    specialties: ["Civil","Familiar","Amparo","Migratorio"],
    phone: "+52 55 51925864",
    whatsapp: "https://wa.me/525551925864",
    email: "acesorjuridicoj.o@gmail.com",
    address: "Insurgentes Sur 716 Piso 8, CDMX"
  });
});

// 📩 CONTACTO
app.post("/api/contact", (req,res)=>{
  res.json({
    ok:true,
    message:"Mensaje recibido correctamente"
  });
});

// 📅 CITAS
app.post("/api/appointments", (req,res)=>{
  res.json({
    ok:true,
    message:"Cita registrada correctamente"
  });
});

app.listen(process.env.PORT || 5000, ()=>{
  console.log("Backend online");
});
