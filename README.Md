Projeto de Chat em Tempo Real com Node.js e Socket.IO

Este projeto implementa um sistema de chat em tempo real usando Node.js e Socket.IO. O servidor centraliza as comunicações e distribui as mensagens entre os dispositivos conectados (clientes). Cada cliente conectado ao servidor pode enviar e receber mensagens de outros clientes.

Tecnologias Utilizadas

	•	Node.js: Plataforma de execução do servidor.
	•	Express: Framework para facilitar a criação de APIs e a configuração do servidor.
	•	Socket.IO: Biblioteca que permite comunicação em tempo real entre servidor e clientes.
	•	readline: Módulo do Node.js para capturar entrada de dados do terminal.

Estrutura do Projeto

	•	Servidor (script.js): Arquivo principal que configura o servidor e a comunicação com os clientes via Socket.IO.
	•	Cliente (client.js): Cada dispositivo que se conecta ao servidor é considerado um cliente e deve executar o código em client.js para se conectar e trocar mensagens.

Configuração e Execução

1. Executando o Servidor (script.js)

	•	Apenas um dispositivo deve rodar o servidor, pois ele centraliza a comunicação. Este dispositivo executará o script.js, que estará escutando conexões na porta especificada (por padrão, 3000).
	•	O servidor é iniciado executando o seguinte comando no terminal:

node script.js


	•	Uma vez iniciado, o servidor exibirá uma mensagem de confirmação e aguardará conexões dos clientes.

2. Executando o Cliente (client.js)

	•	Cada dispositivo que deseja participar do chat deve executar o client.js, que se conecta ao servidor.
	•	O cliente deve ser configurado para se conectar ao IP do servidor na porta especificada. O cliente é iniciado com o seguinte comando:

node client.js


	•	Uma vez conectado, o cliente pode enviar e receber mensagens através do servidor.

Fluxo de Comunicação

	1.	Conexão Inicial: Quando o cliente se conecta ao servidor, ambos recebem uma confirmação de conexão.
	2.	Envio de Mensagens:
	•	O cliente envia mensagens ao servidor.
	•	O servidor recebe essas mensagens e as distribui para todos os outros clientes conectados.
	3.	Desconexão: Se um cliente se desconectar, o servidor pode identificar e notificar a saída desse cliente.

Principais Funções e Eventos

	•	io.on("connection", ...): Evento que ocorre quando um cliente se conecta ao servidor.
	•	socket.on("message", ...): Evento para escutar e receber mensagens enviadas por um cliente.
	•	io.emit("message", ...): Evento utilizado pelo servidor para distribuir uma mensagem para todos os clientes conectados.
	•	readline: Interface para capturar e enviar mensagens diretamente do terminal onde o servidor está sendo executado.

Observações

	•	Certifique-se de que todos os clientes estão apontando para o endereço IP e a porta do servidor.
	•	O servidor é responsável por gerenciar a comunicação; assim, não é necessário que os clientes se comuniquem diretamente entre si.