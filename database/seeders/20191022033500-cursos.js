'use strict';

module.exports = {

    up: (queryInterface, Sequelize) => {

        return queryInterface.bulkInsert('curso', [

            {
                sigla: 'FT05',
                nome: 'Engenharia da Computação',
                descricao: '* Versão do Currículo: 2009/1\n* Carga Horária Total: 3675\n* Total de Créditos: 222\n* Número de Períodos: 10\n',
                id_area: 3,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                sigla: 'FA60',
                nome: 'Administração',
                descricao: '* Versão do Currículo: 2013/1\n* Carga Horária Total: 3120\n* Total de Créditos: 183\n* Número de Períodos: 8\n',
                id_area: 4,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                sigla: 'IA01',
                nome: 'Agronomia',
                descricao: '* Versão do Currículo: 2014/2\n* Carga Horária Total: 4065\n* Total de Créditos: 212\n* Número de Períodos: 10\n',
                id_area: 1,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                sigla: 'IN03',
                nome: 'Antropologia',
                descricao: '* Versão do Currículo: 2006/2\n* Carga Horária Total: 2760\n* Total de Créditos: 163\n* Número de Períodos: 9\n',
                id_area: 4,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                sigla: 'FT10',
                nome: 'Arquitetura e Urbanismo',
                descricao: '* Versão do Currículo: 2010/1\n* Carga Horária Total: 4185\n* Total de Créditos: 208\n* Número de Períodos: 10\n',
                id_area: 3,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                sigla: 'IH25',
                nome: 'Arquivologia',
                descricao: '* Versão do Currículo: 2009/1\n* Carga Horária Total: 2595\n* Total de Créditos: 142\n* Número de Períodos: 9\n',
                id_area: 4,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                sigla: 'FA66',
                nome: 'Bacharelado em Administração Pública',
                descricao: '* Versão do Currículo: 2017/2\n* Carga Horária Total: 3000\n* Total de Créditos: 182\n* Número de Períodos: 8\n',
                id_area: 4,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                sigla: 'IH01',
                nome: 'Biblioteconomia',
                descricao: '* Versão do Currículo: 2009/1\n* Carga Horária Total: 2715\n* Total de Créditos: 148\n* Número de Períodos: 8\n',
                id_area: 4,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                sigla: 'IS02',
                nome: 'Biotecnologia',
                descricao: '* Versão do Currículo: 2014/2\n* Carga Horária Total: 3615\n* Total de Créditos: 171\n* Número de Períodos: 8\n',
                id_area: 2,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                sigla: 'IE08',
                nome: 'Ciência da Computação',
                descricao: '* Versão do Currículo: 2016/1\n* Carga Horária Total: 3200\n* Total de Créditos: 185\n* Número de Períodos: 8\n',
                id_area: 3,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                sigla: 'IN04',
                nome: 'Ciências Agrárias e do Ambiente',
                descricao: '* Versão do Currículo: 2006/2\n* Carga Horária Total: 4385\n* Total de Créditos: 228\n* Número de Períodos: 10\n',
                id_area: 1,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                sigla: 'FA03',
                nome: 'Ciências Contábeis',
                descricao: '* Versão do Currículo: 2011/1\n* Carga Horária Total: 3350\n* Total de Créditos: 201\n* Número de Períodos: 9\n',
                id_area: 4,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                sigla: 'FA05',
                nome: 'Ciências Econômicas',
                descricao: '* Versão do Currículo: 2009/1\n* Carga Horária Total: 3020\n* Total de Créditos: 188\n* Número de Períodos: 8\n',
                id_area: 4,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                sigla: 'IH10',
                nome: 'Ciências Sociais - Bacharelado',
                descricao: '* Versão do Currículo: 2019/1\n* Carga Horária Total: 2400\n* Total de Créditos: 136\n* Número de Períodos: 8\n',
                id_area: 4,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                sigla: 'IP02',
                nome: 'Comunicação Social - Jornalismo',
                descricao: '* Versão do Currículo: 2012/2\n* Carga Horária Total: 2730\n* Total de Créditos: 168\n* Número de Períodos: 8\n',
                id_area: 4,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                sigla: 'IH12',
                nome: 'Comunicação Social - Relações Públicas',
                descricao: '* Versão do Currículo: 2012/1\n* Carga Horária Total: 3230\n* Total de Créditos: 171\n* Número de Períodos: 8\n',
                id_area: 4,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                sigla: 'FT07',
                nome: 'Design',
                descricao: '* Versão do Currículo: 2007/2\n* Carga Horária Total: 3105\n* Total de Créditos: 172\n* Número de Períodos: 8\n',
                id_area: 3,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                sigla: 'FD01',
                nome: 'Direito',
                descricao: '* Versão do Currículo: 2009/1\n* Carga Horária Total: 3945\n* Total de Créditos: 245\n* Número de Períodos: 10\n',
                id_area: 4,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                sigla: 'IB06',
                nome: 'Educação Física - Promoção em Saúde e Lazer',
                descricao: '* Versão do Currículo: 2006/2\n* Carga Horária Total: 3220\n* Total de Créditos: 167\n* Número de Períodos: 8\n',
                id_area: 4,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                sigla: 'IB07',
                nome: 'Educação Física - Treinamento Esportivo',
                descricao: '* Versão do Currículo: 2006/2\n* Carga Horária Total: 3300\n* Total de Créditos: 164\n* Número de Períodos: 8\n',
                id_area: 4,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                sigla: 'EM01',
                nome: 'Enfermagem',
                descricao: '* Versão do Currículo: 2019/1\n* Carga Horária Total: 4050\n* Total de Créditos: 192\n* Número de Períodos: 8\n',
                id_area: 2,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                sigla: 'IA02',
                nome: 'Engenharia Ambiental',
                descricao: '* Versão do Currículo: 2018/2\n* Carga Horária Total: 3915\n* Total de Créditos: 211\n* Número de Períodos: 10\n',
                id_area: 3,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                sigla: 'FT01',
                nome: 'Engenharia Civil',
                descricao: '* Versão do Currículo: 2010/1\n* Carga Horária Total: 4050\n* Total de Créditos: 236\n* Número de Períodos: 10\n',
                id_area: 3,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                sigla: 'FG05',
                nome: 'Engenharia de Alimentos',
                descricao: '* Versão do Currículo: 2012/1\n* Carga Horária Total: 3750\n* Total de Créditos: 191\n* Número de Períodos: 10\n',
                id_area: 3,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                sigla: 'FT08',
                nome: 'Engenharia de Materiais',
                descricao: '* Versão do Currículo: 2009/1\n* Carga Horária Total: 3895\n* Total de Créditos: 228\n* Número de Períodos: 10\n',
                id_area: 3,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                sigla: 'FG03',
                nome: 'Engenharia de Pesca',
                descricao: '* Versão do Currículo: 2011/1\n* Carga Horária Total: 3855\n* Total de Créditos: 202\n* Número de Períodos: 10\n',
                id_area: 3,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                sigla: 'FT11',
                nome: 'Engenharia de Petróleo e Gás',
                descricao: '* Versão do Currículo: 2010/1\n* Carga Horária Total: 4125\n* Total de Créditos: 244\n* Número de Períodos: 10\n',
                id_area: 3,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                sigla: 'FT06',
                nome: 'Engenharia de Produção',
                descricao: '* Versão do Currículo: 2019/1\n* Carga Horária Total: 3865\n* Total de Créditos: 236\n* Número de Períodos: 10\n',
                id_area: 3,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                sigla: 'IE17',
                nome: 'Engenharia de Software',
                descricao: '* Versão do Currículo: 2018/1\n* Carga Horária Total: 3200\n* Total de Créditos: 170\n* Número de Períodos: 8\n',
                id_area: 3,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                sigla: 'FG02',
                nome: 'Engenharia Florestal',
                descricao: '* Versão do Currículo: 2004/1\n* Carga Horária Total: 4080\n* Total de Créditos: 207\n* Número de Períodos: 9\n',
                id_area: 3,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                sigla: 'FT09',
                nome: 'Engenharia Mecânica',
                descricao: '* Versão do Currículo: 2009/1\n* Carga Horária Total: 3915\n* Total de Créditos: 235\n* Número de Períodos: 10\n',
                id_area: 3,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                sigla: 'FT12',
                nome: 'Engenharia Química',
                descricao: '* Versão do Currículo: 2010/1\n* Carga Horária Total: 3930\n* Total de Créditos: 225\n* Número de Períodos: 10\n',
                id_area: 3,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                sigla: 'IT17',
                nome: 'Engenharia Sanitária',
                descricao: '* Versão do Currículo: 2012/2\n* Carga Horária Total: 3945\n* Total de Créditos: 234\n* Número de Períodos: 10\n',
                id_area: 3,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                sigla: 'IE01',
                nome: 'Estatística',
                descricao: '* Versão do Currículo: 2018/1\n* Carga Horária Total: 3000\n* Total de Créditos: 150\n* Número de Períodos: 8\n',
                id_area: 3,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                sigla: 'FS01',
                nome: 'Farmácia',
                descricao: '* Versão do Currículo: 2011/1\n* Carga Horária Total: 4770\n* Total de Créditos: 226\n* Número de Períodos: 11\n',
                id_area: 2,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                sigla: 'IE14',
                nome: 'Física - Bacharelado',
                descricao: '* Versão do Currículo: 2005/2\n* Carga Horária Total: 2765\n* Total de Créditos: 157\n* Número de Períodos: 8\n',
                id_area: 3,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                sigla: 'IB08',
                nome: 'Fisioterapia',
                descricao: '* Versão do Currículo: 2017/2\n* Carga Horária Total: 4160\n* Total de Créditos: 193\n* Número de Períodos: 10\n',
                id_area: 4,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                sigla: 'IE02',
                nome: 'Geologia',
                descricao: '* Versão do Currículo: 2018/1\n* Carga Horária Total: 3885\n* Total de Créditos: 189\n* Número de Períodos: 10\n',
                id_area: 1,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                sigla: 'IH56',
                nome: 'Licenciatura em Artes Visuais',
                descricao: '* Versão do Currículo: 2011/1\n* Carga Horária Total: 2940\n* Total de Créditos: 136\n* Número de Períodos: 8\n',
                id_area: 4,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                sigla: 'FG62',
                nome: 'Licenciatura em Ciências Agrárias',
                descricao: '* Versão do Currículo: 2017/2\n* Carga Horária Total: 3200\n* Total de Créditos: 170\n* Número de Períodos: 8\n',
                id_area: 1,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                sigla: 'SM18',
                nome: 'Licenciatura em Geografia - Manaus',
                descricao: '* Versão do Currículo: 1992/1\n* Carga Horária Total: 2580\n* Total de Créditos: 146\n* Número de Períodos: 8\n',
                id_area: 4,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                sigla: 'SM16',
                nome: 'Licenciatura em História - Manaus',
                descricao: '* Versão do Currículo: 1998/1\n* Carga Horária Total: 2505\n* Total de Créditos: 160\n* Número de Períodos: 8\n',
                id_area: 4,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                sigla: 'IH33',
                nome: 'Licenciatura Indígena Políticas Educacionais e Desenvolvimento Sustentável',
                descricao: '* Versão do Currículo: 2016/1\n* Carga Horária Total:\n* Total de Créditos:\n* Número de Períodos: 8\n',
                id_area: 4,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                sigla: 'IN06',
                nome: 'Licenciatura Plena em Ciências - Biologia e Química',
                descricao: '* Versão do Currículo: 2014/3\n* Carga Horária Total: 4130\n* Total de Créditos: 219\n* Número de Períodos: 10\n',
                id_area: 4,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                sigla: 'IA06',
                nome: 'Licenciatura Plena em Ciências - Matemática e Física',
                descricao: '* Versão do Currículo: 2014/2\n* Carga Horária Total: 3440\n* Total de Créditos: 179\n* Número de Períodos: 10\n',
                id_area: 4,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                sigla: 'IN07',
                nome: 'Licenciatura Plena em Ciências Agrárias e do Ambiente',
                descricao: '* Versão do Currículo: 2010-2\n* Carga Horária Total: 3260\n* Total de Créditos: 163\n* Número de Períodos: 8\n',
                id_area: 4,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                sigla: 'IB13',
                nome: 'Licenciatura Plena em Ciências Biológicas',
                descricao: '* Versão do Currículo: 2013/1\n* Carga Horária Total: 3320\n* Total de Créditos: 173\n* Número de Períodos: 9\n',
                id_area: 2,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                sigla: 'IB14',
                nome: 'Licenciatura Plena em Ciências Naturais',
                descricao: '* Versão do Currículo: 2010/1\n* Carga Horária Total: 2855\n* Total de Créditos: 142\n* Número de Períodos: 9\n',
                id_area: 2,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                sigla: 'IP03',
                nome: 'Licenciatura Plena em Educação Física',
                descricao: '* Versão do Currículo: 2013/2\n* Carga Horária Total: 2960\n* Total de Créditos: 160\n* Número de Períodos: 8\n',
                id_area: 4,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                sigla: 'IH14',
                nome: 'Licenciatura Plena em Filosofia',
                descricao: '* Versão do Currículo: 2011/1\n* Carga Horária Total: 3410\n* Total de Créditos: 174\n* Número de Períodos: 8\n',
                id_area: 4,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                sigla: 'IE10',
                nome: 'Licenciatura Plena em Física',
                descricao: '* Versão do Currículo: 2005/2\n* Carga Horária Total: 3050\n* Total de Créditos: 160\n* Número de Períodos: 9\n',
                id_area: 3,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                sigla: 'FE17',
                nome: 'Licenciatura Plena em Formação de Professores Indígenas',
                descricao: '* Versão do Currículo: 2015/1\n* Carga Horária Total: 3165\n* Total de Créditos: 202\n* Número de Períodos: 10\n',
                id_area: 4,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                sigla: 'IH22',
                nome: 'Licenciatura Plena em Geografia',
                descricao: '* Versão do Currículo: 2011/1\n* Carga Horária Total: 3080\n* Total de Créditos: 159\n* Número de Períodos: 8\n',
                id_area: 4,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                sigla: 'IH08',
                nome: 'Licenciatura Plena em História',
                descricao: '* Versão do Currículo: 2019/1\n* Carga Horária Total: 3350\n* Total de Créditos: 163\n* Número de Períodos: 8\n',
                id_area: 4,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                sigla: 'IH32',
                nome: 'Licenciatura Plena em Letras - Língua Brasileira de Sinais/LIBRAS',
                descricao: '* Versão do Currículo: 2014/1\n* Carga Horária Total: 3080\n* Total de Créditos: 162\n* Número de Períodos: 8\n',
                id_area: 4,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                sigla: 'IH16',
                nome: 'Licenciatura Plena em Letras - Língua e Literatura Francesa',
                descricao: '* Versão do Currículo: 2016/1\n* Carga Horária Total: 3230\n* Total de Créditos: 175\n* Número de Períodos: 8\n',
                id_area: 4,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                sigla: 'IH15',
                nome: 'Licenciatura Plena em Letras - Língua e Literatura Inglesa',
                descricao: '* Versão do Currículo: 2019/1\n* Carga Horária Total: 3245\n* Total de Créditos: 179\n* Número de Períodos: 8\n',
                id_area: 4,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                sigla: 'IH29',
                nome: 'Licenciatura Plena em Letras - Língua e Literatura Japonesa',
                descricao: '* Versão do Currículo: 2011/1\n* Carga Horária Total: 2840\n* Total de Créditos: 145\n* Número de Períodos: 9\n',
                id_area: 4,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                sigla: 'IH13',
                nome: 'Licenciatura Plena em Letras - Língua e Literatura Portuguesa',
                descricao: '* Versão do Currículo: 2010/1\n* Carga Horária Total: 3125\n* Total de Créditos: 167\n* Número de Períodos: 9\n',
                id_area: 4,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                sigla: 'IN05',
                nome: 'Licenciatura Plena em Letras - Língua e Literatura Portuguesa e Língua e Literatura Espanhola',
                descricao: '* Versão do Currículo: 2013/2\n* Carga Horária Total: 3440\n* Total de Créditos: 187\n* Número de Períodos: 8\n',
                id_area: 4,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                sigla: 'IH21',
                nome: 'Licenciatura Plena em Letras - Língua Espanhola',
                descricao: '* Versão do Currículo: 2003/2\n* Carga Horária Total: 3470\n* Total de Créditos: 192\n* Número de Períodos: 8\n',
                id_area: 4,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                sigla: 'IA05',
                nome: 'Licenciatura Plena em Letras - Língua Portuguesa e Língua Inglesa',
                descricao: '* Versão do Currículo: 2019/2\n* Carga Horária Total: 3665\n* Total de Créditos: 208\n* Número de Períodos: 8\n',
                id_area: 4,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                sigla: 'IE07',
                nome: 'Licenciatura Plena em Matemática',
                descricao: '* Versão do Currículo: 2011/2\n* Carga Horária Total: 2750\n* Total de Créditos: 141\n* Número de Períodos: 9\n',
                id_area: 3,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                sigla: 'IH28',
                nome: 'Licenciatura Plena em Música',
                descricao: '* Versão do Currículo: 2019/1\n* Carga Horária Total: 3275\n* Total de Créditos: 161\n* Número de Períodos: 8\n',
                id_area: 4,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                sigla: 'IP04',
                nome: 'Licenciatura Plena em Pedagogia',
                descricao: '* Versão do Currículo: 2012/1\n* Carga Horária Total: 3440\n* Total de Créditos: 194\n* Número de Períodos: 9\n',
                id_area: 4,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                sigla: 'IE12',
                nome: 'Licenciatura Plena em Química',
                descricao: '* Versão do Currículo: 2005/3\n* Carga Horária Total: 2940\n* Total de Créditos: 147\n* Número de Períodos: 8\n',
                id_area: 3,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                sigla: 'IE16',
                nome: 'Matemática Aplicada',
                descricao: '* Versão do Currículo: 2011/1\n* Carga Horária Total: 2475\n* Total de Créditos: 136\n* Número de Períodos: 8\n',
                id_area: 3,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                sigla: 'FS02',
                nome: 'Medicina',
                descricao: '* Versão do Currículo: 2010/1\n* Carga Horária Total: 8785\n* Total de Créditos: 356\n* Número de Períodos: 12\n',
                id_area: 2,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                sigla: 'IS01',
                nome: 'Nutrição',
                descricao: '* Versão do Currículo: 2012/2\n* Carga Horária Total: 4040\n* Total de Créditos: 210\n* Número de Períodos: 10\n',
                id_area: 2,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                sigla: 'FS03',
                nome: 'Odontologia',
                descricao: '* Versão do Currículo: 2012/1\n* Carga Horária Total: 3945\n* Total de Créditos: 186\n* Número de Períodos: 10\n',
                id_area: 2,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                sigla: 'FE01',
                nome: 'Pedagogia',
                descricao: '* Versão do Currículo: 1965/2\n* Carga Horária Total: 2595\n* Total de Créditos: 172\n* Número de Períodos: 8\n',
                id_area: 4,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                sigla: 'SE65',
                nome: 'Plenificação em História',
                descricao: '* Versão do Currículo: 1998/1\n* Carga Horária Total: 2505\n* Total de Créditos: 160\n* Número de Períodos: 8\n',
                id_area: 4,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                sigla: 'SE24',
                nome: 'Plenificação em Letras',
                descricao: '* Versão do Currículo: 2000/1\n* Carga Horária Total: 2400\n* Total de Créditos: 132\n* Número de Períodos: 8\n',
                id_area: 4,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                sigla: 'SE78',
                nome: 'Plenificação em Matemática - Licenciatura em Matemática-Manaus',
                descricao: '* Versão do Currículo: 1993/1\n* Carga Horária Total: 2280\n* Total de Créditos: 142\n* Número de Períodos: 8\n',
                id_area: 3,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                sigla: 'IE11',
                nome: 'Química - Bacharelado',
                descricao: '* Versão do Currículo: 2009/2\n* Carga Horária Total: 3240\n* Total de Créditos: 159\n* Número de Períodos: 9\n',
                id_area: 3,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                sigla: 'IT06',
                nome: 'Química Industrial',
                descricao: '* Versão do Currículo: 2018/2\n* Carga Horária Total: 3220\n* Total de Créditos: 180\n* Número de Períodos: 9\n',
                id_area: 3,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                sigla: 'IP05',
                nome: 'Serviço Social',
                descricao: '* Versão do Currículo: 2012/2\n* Carga Horária Total: 3025\n* Total de Créditos: 174\n* Número de Períodos: 8\n',
                id_area: 4,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                sigla: 'IT01',
                nome: 'Sistemas de Informação',
                descricao: '* Versão do Currículo: 2007/2\n* Carga Horária Total: 3550\n* Total de Créditos: 204\n* Número de Períodos: 10\n',
                id_area: 3,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                sigla: 'IP06',
                nome: 'Zootecnia',
                descricao: '* Versão do Currículo: 2013/2\n* Carga Horária Total: 3765\n* Total de Créditos: 205\n* Número de Períodos: 10\n',
                id_area: 1,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                sigla: 'FG04',
                nome: 'Zootecnia',
                descricao: '* Versão do Currículo: 2003/1\n* Carga Horária Total: 3840\n* Total de Créditos: 191\n* Número de Períodos: 10\n',
                id_area: 1,
                created_at: new Date(),
                updated_at: new Date()
            },


        ], {});
    },

    down: (queryInterface, Sequelize) => {

        return queryInterface.bulkDelete('curso', null, {});

    }
};
