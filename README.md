<h1>Projeto test Sky</h1>
<p>
Criação da api como solicitado, API criada com framework express
teste criados com Jest, Usado o Faker para Criar um usuario "fake"
com o banco de dados MongoDB, Na Api com mongo Atlas e com os testes com
MongoDB em memória.
</p>
<p>
Foi realizado o Deploy no Heroku e suas rotas foram disponibilizadas pra 
os devidos testes
</p>
<h2>Rotas</h2>
<table class="table">
  <thead>
    <tr>
      <th scope="col">Tipo de Rota</th>
      <th scope="col">Rota</th>
      <th scope="col">Autenticação</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">SingUp</th>
      <td>https://testskyexpress.herokuapp.com/singUp</td>
      <td>Não</td>
    </tr>
    <tr>
      <th scope="row">SingIn</th>
      <td>https://testskyexpress.herokuapp.com/singIn</td>
      <td>Não</td>
    </tr>
     <tr>
      <th scope="row">Find User ID</th>
      <td>https://testskyexpress.herokuapp.com/user/:id</td>
      <td>Sim</td>
    </tr>
  </tbody>
</table>
<h2>Forma de envio para cada rota</h2>
<h3>Rota SingUp</h3>
<p> Rota de cadastro de usuário recebe json com os campos de:
<pre>
<code>
{
	"nome": "Fulano de Tal",
	"email": "fulano@gmail.com",
	"senha": "123456",
	"telefones": {
		"numero": "69985471",
		"ddd": "081"
	}
}
</code>
</pre>
Rota criada com validação do envio das informações, validação com o <a href="https://hapi.dev/module/joi/">@hapi/joi</a> 
Com duas camadas de validação uma já citada com o Joi e outra com o Model de Usuários.
Usuário e retornado com o status 201 de criação criando um token e persistido junto ao usuário na base dados
e com tempo de expiração de 30 minutos;
</p>
<h3>Rota SingIn</h3>
<p>
	Rota recebe json como os campos:
	<pre>
	<code>
	{
	"email": "fulano@gmail.com",
	"senha": "123456"
	}
	</code>
	</pre>
Rota criada para a autenticação do usuário com esses campos passados é retornado o usuário cadastrado na base de dados,
atualizando também o tempo de expiração do token;

<h3>Rota Find User ID</h3>
<p>
Rota responsável pela busca de usuários passando o id e o token via header.
	<code>
		https://testskyexpress.herokuapp.com/user/:id
	</code>	
Rota necessita autenticação com envio de token no cabecalho da requisição ex: Berear <token>
	
<h2>Pacotes relevantes usados</h2>
<p>
	<ul>
		<li><a href="https://www.npmjs.com/package/express">Express</a></li>
		<li><a href="https://www.npmjs.com/package/jsonwebtoken">Jsonwebtoken</a></li>
		<li><a href="https://hapi.dev/module/joi/">Joi</a></li>
		<li><a href="https://mongoosejs.com/">Mongoose</a></li>	
		<li><a href="https://jestjs.io/docs/en/api">Jest</a></li>
	</ul>
</p>

<h2>O porque dos pacotes</h2>
<h3>Express</h3>
<p>
	O Express é um framework para aplicativo da web do Node.js mínimo e flexível que fornece um conjunto robusto de recursos para aplicativos web e móvel.
</p>
<h3>Jsonwebtoken</h3>
<p>
	Usado pra criação do token, passando o nome e o email do usuário e criando uma sessão local quando se é criado um usuário,
	ou quando o usuario usa a rota singIn para se logar no sistema, a função verify da lib verifica se o token existe no cabecalho
	e caso exista verifica se existe o usuário com as mesmas credencias no banco, por fim verifica se o token expirou ou não.
</p>
<h3>Joi</h3>
<p>
	Usado para a validação antes do cadastro, ele recebe o objeto json e valida ou não, caso validado passa para o cadastro do banco.
</p>
<h3>Mongoose</h3>
<p>
Usado para criação dos modelos e/ou entidades para criação correta na hora da percistência junto ao banco, banco noSql MongoDB
</p>
<h3>Jest</h3>
<p>
Lib criada pelo Facebook primordialmente para teste de framework front-end, para um bom funcinamento do uso dos teste junto ao mongoose, foi istalado 
banco de dados Mongo em memória para não interferir na base de dados do sistema, e feitas algumas alterações para o bom funcionamento dos testes.
	Mais informações <a href="https://jestjs.io/docs/en/mongodb">Aqui</a>
</p>








