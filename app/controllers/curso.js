// Disponibilizando os modelos para uso
const models = require("../models/index");

// Disponibilizando os modelos utilizados nas views
const Curso  = models.curso;
const Area   = models.area;

// Página principal da modelagem de cursos
const index = async function(req, res) {

    // Usuário está logado?
    if (req.session.uid) {

        // Buscando todos os cursos do banco de dados
        const cursos = await Curso.findAll();
        
        // Chamando a view e passando os dados do BD
        res.render("pages/curso/index", { cursos, csrf: req.csrfToken() });

    }
    else
        res.redirect("/login");

}

// Cria um novo curso
const create = async function(req, res) {

    // Usuário está logado?
    if (req.session.uid) {

        // Se a requisição for 'GET', mostro a página de cadastro
        if (req.route.methods.get) {

            let areas = await Area.findAll();
            res.render("pages/curso/create", { areas, csrf: req.csrfToken() });

        }

        // Senão, insiro os dados vindos via POST no banco de dados
        else {
            
            try {
                await Curso.create(req.body);
                res.redirect("/curso");
            }
            catch (exception) {
                console.log(exception);
            }
            
        }
    }
    else 
        res.redirect("/login");

}

// Atualiza um curso
const update = async function(req, res) {

    // Usuário está logado?
    if (req.session.uid) {

        // Aqui recupero o curso identificado pelo ID na URL ou no form do POST + todas as áreas de curso
        let curso = await Curso.findByPk(req.params.id || req.body.id);
        let areas = await Area.findAll();

        // Se a requisição for 'GET', mostro a página de atualização
        if (req.route.methods.get)
            res.render("pages/curso/update", { curso, areas, csrf: req.csrfToken() });
        
        // Caso a requisição seja 'POST'...
        else {

            // ...atualizo meu objeto curso com os dados vindos da view e...
            curso.sigla     = req.body.sigla;
            curso.nome      = req.body.nome;
            curso.descricao = req.body.descricao;
            curso.area_id   = req.body.area_id;

            // ...tento atualizar os dados no banco.
            try {
                
                await curso.save();
                res.redirect("/curso");

            }

            // Caso dê algum erro, indico na view
            catch (exception) {

                res.render("pages/curso/update", { curso, areas, erros: exception.errors, csrf: req.csrfToken() });

            }
            
        }
    }
    else
        res.redirect("/login");

}

// Apaga um curso (utilizada apenas pelo AJAX)
const remove = async function(req, res) {

    // Usuário está logado?
    if (req.session.uid) {

        await Curso.destroy({ where: { id: req.body.id }});
        res.end(`:: Removido curso com id: ${req.body.id}`);

    }
    else
        res.end(`:: O curso com id: ${req.body.id} não pôde ser removido!`);

}

module.exports = {
	index, create, update, delete: remove
}