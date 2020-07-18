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
Usuário e retornado com o status 201 de criação criando um token e persistiondo junto ao usuário na base dados
e com tempo de expiração de 30 minutos do token;
</p>
<h3>Rota SingIn</h3>
<p>
	Rota recebe json como os campos:
	<pre>
	<code>
	{
	"email": "wilk@hotmail.com",
	"senha": "123456"
	}
	</code>
	</pre>
Rota criada para a autenticação do usuário com esses campos passados é retornado o usuário cadastrado na base de dados,
atualizando também o tempo de expiração do token
