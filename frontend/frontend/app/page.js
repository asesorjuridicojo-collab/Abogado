export default async function Home() {
  return (
    <div style={{
      height:"100vh",
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
      background:"#0B1F3B",
      color:"white",
      textAlign:"center"
    }}>
      
      <h1 style={{fontSize:40}}>
        Jonathan Osiel de la Cruz A.
      </h1>

      <p style={{marginTop:10}}>
        Asesor Legal y Soluciones Jurídicas Premium
      </p>

      <p style={{marginTop:10, color:"#C8A24A"}}>
        Civil | Familiar | Amparo | Migratorio
      </p>

      <a
        href="https://wa.me/525551925864"
        style={{
          marginTop:20,
          padding:12,
          background:"green",
          color:"white",
          borderRadius:8
        }}
      >
        Contactar por WhatsApp
      </a>

    </div>
  );
}
