const express = require("express"); //determinando a utlizacao do express

const app = express();

const path = require('path'); //endereco de cada rota

//const router=express.Router(); //trabalha com rotas

const routesAdmin = require('./routes/routesAdmin');

const{engine} = require("express-handlebars");

app.engine('handlebars', engine({
    defaultLayout: 'main',
    runtimeOptions:{
            allowProtoMethodsByDefault: true,
            allowProtoMethodsByDefault: true,
    },
}))

app.set('view engine', 'handlebars');

app.use('/',routesAdmin)

// router.get('/', function(req, res){
//     res.render('index');
// })
// router.get('/about', function(req, res){
//     res.sendFile(path.join(__dirname+ '/about.html'));
// })

app.listen(process.env.port||3000);
console.log("Servidor Rodando na porta 3000");