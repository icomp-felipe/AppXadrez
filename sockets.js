// Disponibilizando os modelos para uso
const models = require("./app/models/index");

// Disponibilizando os modelos utilizados nas views
const Partida  = models.partida;

const socket = function(client) {

    // O cliente solicita a configuração do jogo toda vez que a página '/partida' é carregada
    client.on("recuperar-jogo", async (jogo) => {

        // Se o jogo é novo...
        if (jogo.novo) {

            // ...instancio uma nova partida no BD...
            let novaPartida = await Partida.create({
                user_id_1: jogo.user,
                fen      : "start"
            });

            // ...crio uma sala (identificada pelo ID da partida no BD) e...
            client.join(novaPartida.id);

            // ...e envio a configuração criada ao cliente.
            client.emit("jogo-recuperado", {
                color  : "w",               // A cor branca é sempre do jogador que cria a partida
                partida: novaPartida.id,
                fen    : "start"
            });

        }

        // ...senão...
        else {

            // ...recupero a partida da base de dados, ...
            let partida = await Partida.findOne({ where: { id: jogo.partida }});

            // ...verifico se fui eu quem criou a partida, ...
            let souEu = (partida.user_id_1 === jogo.user);

            // ...entro na sala (identificada pelo ID da partida no BD) e...
            client.join(partida.id);

            // ...envio esta partida ao cliente.
            client.emit("jogo-recuperado", {

                // se estou tentando acessar uma partida que eu criei, logo, as minhas peças são brancas
                color  : (souEu) ? "w" : "b",
                partida: partida.id,
                fen    : partida.fen

            });

            // Caso eu não tenha criado o jogo, me cadastro na partida do meu oponente
            if (!souEu)
                await Partida.update(
                    { user_id_2: jogo.user },
                    { where: { id: jogo.partida }}
                );

        }
        

    });

    // Quando o cliente realiza um movimento de peças...
    client.on("client-move", async (move) => {

        // ...recupero a sala...
        let sala = move.partida;

        // ...salva o movimento no banco de dados e...
        await Partida.update(
            { fen: move.fen },
            { where: {id: move.partida}}
        )

        // ...rebato o movimento ao meu oponente.
        client.to(sala).broadcast.emit("server-move", {
            from     : move.from,
            to       : move.to,
            promotion: move.promotion
        });

    });


    


    
    client.on("oi", (msg) => {
        console.log(msg);
        client.emit("oi", `:: Você disse: '${msg}'`);
        client.to(sala).broadcast.emit("oi", `O usuário ${user_id} disse: '${msg}'`)
    })
    
    client.on("mudarSala", (s) => {
        sala = s;
        client.leaveAll();
        client.join(sala);
        console.log(`:: Usuário ${user_id} entrou na sala ${sala}`);
    });

}

module.exports = socket;