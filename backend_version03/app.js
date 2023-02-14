var express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

var app = express()
.use(cors({credentials: true, origin: 'http://localhost:4200'
}))
.use(bodyParser.json())
.use(bodyParser.urlencoded({ extended: true })); 

//ruta que recibe un formulario de registro
app.post('/register', function (req, res) {
  let password = req.body.password;
  let email = req.body.email;
  let nombres = req.body.nombres;
  let apellidos = req.body.apellidos;
  let ciudad = req.body.ciudad;
  return res.status(200).json({"Status": "ok registrado", 
    nombres: nombres, apellidos: apellidos});
});

//ruta que recibe un objeto json para registro
app.post('/registerjson', function (req, res) {
  let password = req.body.password;
  let email = req.body.email;
  let nombres = req.body.nombres;
  let apellidos = req.body.apellidos;
  let ciudad = req.body.ciudad;
  return res.status(200).json({"Status": "ok registrado con json", 
    nombres: nombres, apellidos: apellidos});
});

//ruta que recibe string query para registro
app.get('/parametros-consulta', function (req, res) {
  let nombres = req.query.nombres;
  let apellidos = req.query.apellidos;
  console.log("----", nombres, apellidos)
  return res.status(200).json({"Status": "ok registrado con params", 
    nombres: nombres, apellidos: apellidos});
});

//ruta que recibe parametros de ruta para registro
app.get('/parametros-ruta/:id', function (req, res) {
  let id = req.params.id;
  return res.status(200).json({"Status": "ok params", 
    id: id});
});

//ruta que recibe cabecera
app.get('/cabeceras', function (req, res) {
  let cabecera = req.header("Authorization");
  return res.status(200).json({"Status": "ok cabecera", 
    cabecera: cabecera});
});
app.post('/registro-usuario/:domicilio', function (req, res){
  const {nombres, apellidos, cc} = req.query;
  let domicilio = req.params.domicilio;
  console.log("---", nombres, apellidos, cc, domicilio);

  if(!nombres || !apellidos || !cc){
    return res.status(400).json({"Status":"Missing fields"})
  }

  return res.status(200).json({"Status":"ok",
domicilio: domicilio});

})

app.post('/registro-articulo/:id/:peso', (req, res)=>{
  const {ancho, alto} = req.body;
  if(!ancho || !alto){
    return res.status(400).json({"Status":"Missing fields"})
  }
  return res.status(200).json({"Status":"Ok"})
})

app.delete('/actualizacion', (req, res)=>{
  let cc = req.query.cc;
  let motivo = req.body.motivo;
  let cabecera = req.header("Authorization");
  if(!cc || !motivo || !cabecera){
    return res.status(400).json({"Status":"Missing fields"})
  }
  return res.status(200).json({"Status":"Ok"})
})

app.get('/actualizacion-registro-usuario/:cantidad/:marca', (req, res)=>{
  let precio = req.query.precio;
  let domicilio = req.header("Authorization");
   if(!precio || !domicilio){
     return res.status(400).json({"Status":"Missing fields"}) 
   }

   return res.status(200).json ({"Status":"Ok"})

})

app.listen(10101, function () {
  console.log('Example app listening on port 10101!');
});
