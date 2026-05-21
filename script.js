function Dashboard() {

  return (
    <div>

      <h1>Dashboard</h1>

      <div className="cards">

        <div className="card">
          <h3>Consultas Hoje</h3>
          <p>12</p>
        </div>

        <div className="card">
          <h3>Pacientes</h3>
          <p>248</p>
        </div>

        <div className="card">
          <h3>Consultas do Mês</h3>
          <p>97</p>
        </div>

        <div className="card">
          <h3>Próximos Atendimentos</h3>
          <p>5</p>
        </div>

      </div>

    </div>
  );
}

function Pacientes() {

  function cadastrarPaciente(){

    const nome = document.getElementById("nome").value;
    const cpf = document.getElementById("cpf").value;
    const telefone = document.getElementById("telefone").value;
    const convenio = document.getElementById("convenio").value;

    if(
      nome === "" ||
      cpf === "" ||
      telefone === "" ||
      convenio === ""
    ){
      alert("Preencha todos os campos!");
      return;
    }

    if(cpf.length < 11){
      alert("CPF inválido!");
      return;
    }

    if(telefone.length < 10){
      alert("Telefone inválido!");
      return;
    }

    const tabela = document.getElementById("tabelaPacientes");

    tabela.innerHTML += `
      <tr>
        <td>${nome}</td>
        <td>${cpf}</td>
        <td>${telefone}</td>
        <td>${convenio}</td>
        <td>
          <button>Editar</button>
        </td>
      </tr>
    `;

    alert("Paciente cadastrado com sucesso!");

    document.getElementById("nome").value = "";
    document.getElementById("cpf").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("convenio").value = "";
  }

  return (
    <div>

      <div className="topo">

        <h1>Cadastro de Pacientes</h1>

        <input
          className="busca"
          type="text"
          placeholder="Buscar por nome ou CPF"
        />

      </div>

      <div className="form">

        <input
          id="nome"
          type="text"
          placeholder="Nome completo"
        />

        <input type="date"/>

        <input
          id="cpf"
          type="text"
          placeholder="CPF"
        />

        <input
          id="telefone"
          type="text"
          placeholder="Telefone"
        />

        <input
          id="convenio"
          type="text"
          placeholder="Convênio"
        />

        <button onClick={cadastrarPaciente}>
          Cadastrar Paciente
        </button>

      </div>

      <table>

        <thead>

          <tr>
            <th>Nome</th>
            <th>CPF</th>
            <th>Telefone</th>
            <th>Convênio</th>
            <th>Ações</th>
          </tr>

        </thead>

        <tbody id="tabelaPacientes">

          <tr>
            <td>João Silva</td>
            <td>123.456.789-00</td>
            <td>(83) 99999-9999</td>
            <td>Unimed</td>
            <td>
              <button>Editar</button>
            </td>
          </tr>

        </tbody>

      </table>

    </div>
  );
}

function Agendamentos() {

  function agendarConsulta(){

    const paciente = document.getElementById("paciente").value;
    const medico = document.getElementById("medico").value;
    const data = document.getElementById("data").value;
    const horario = document.getElementById("horario").value;
    const status = document.getElementById("status").value;

    if(
      paciente === "" ||
      medico === "" ||
      data === "" ||
      horario === ""
    ){
      alert("Preencha todos os campos!");
      return;
    }

    const agenda = document.getElementById("agenda");

    agenda.innerHTML += `
      <div class="consulta">

        <strong>${horario} - ${paciente}</strong>

        <p>Médico: ${medico}</p>

        <p>Data: ${data}</p>

        <span class="status agendada">
          ${status}
        </span>

      </div>
    `;

    alert("Consulta agendada com sucesso!");
  }

  return (
    <div>

      <h1>Agendamento de Consultas</h1>

      <div className="form">

        <input
          id="paciente"
          type="text"
          placeholder="Paciente"
        />

        <select id="medico">
          <option value="">Selecione o Médico</option>
          <option>Dr. Lucas</option>
          <option>Dra. Ana</option>
        </select>

        <input id="data" type="date"/>

        <input id="horario" type="time"/>

        <select id="status">
          <option>Agendada</option>
          <option>Realizada</option>
          <option>Cancelada</option>
        </select>

        <button onClick={agendarConsulta}>
          Agendar Consulta
        </button>

      </div>

      <div className="agenda" id="agenda">

        <div className="consulta">

          <strong>08:00 - Maria Clara</strong>

          <p>Médico: Dr. Lucas</p>

          <span className="status agendada">
            Agendada
          </span>

        </div>

      </div>

    </div>
  );
}

function Prontuario() {

  function salvarProntuario(){

    const queixa = document.getElementById("queixa").value;

    if(queixa === ""){
      alert("Preencha o prontuário!");
      return;
    }

    const historico = document.getElementById("historico");

    historico.innerHTML += `
      <div class="registro">
        <strong>Nova Consulta</strong>
        <p>${queixa}</p>
      </div>
    `;

    alert("Prontuário salvo com sucesso!");
  }

  return (
    <div>

      <h1>Prontuário Eletrônico</h1>

      <div className="prontuario">

        <div className="historico">

          <h3>Histórico Clínico</h3>

          <div id="historico">

            <div className="registro">
              <strong>10/05/2026</strong>
              <p>Consulta de rotina</p>
            </div>

          </div>

        </div>

        <div className="area-form">

          <textarea
            id="queixa"
            placeholder="Queixa principal"
          ></textarea>

          <textarea placeholder="Diagnóstico"></textarea>

          <textarea placeholder="Prescrição"></textarea>

          <textarea placeholder="Observações"></textarea>

          <button onClick={salvarProntuario}>
            Salvar Prontuário
          </button>

        </div>

      </div>

    </div>
  );
}

function App() {

  function abrirDashboard(){
    ReactDOM.createRoot(document.getElementById("content"))
    .render(<Dashboard />);
  }

  function abrirPacientes(){
    ReactDOM.createRoot(document.getElementById("content"))
    .render(<Pacientes />);
  }

  function abrirAgendamentos(){
    ReactDOM.createRoot(document.getElementById("content"))
    .render(<Agendamentos />);
  }

  function abrirProntuario(){
    ReactDOM.createRoot(document.getElementById("content"))
    .render(<Prontuario />);
  }

  function voltarLogin(){
    location.reload();
  }

  function fazerLogin(){

    const email =
      document.getElementById("email").value;

    const senha =
      document.getElementById("senha").value;

    const perfil =
      document.getElementById("perfil").value;

    if(email === "" || senha === ""){
      alert("Preencha e-mail e senha!");
      return;
    }

    const root =
      document.getElementById("root");

    let menu = "";

    let nomePerfil = "";

    if(perfil === "admin"){

      nomePerfil = "Administrador";

      menu = `
        <button onclick="abrirDashboardGlobal()">
          Dashboard
        </button>

        <button onclick="abrirPacientesGlobal()">
          Pacientes
        </button>

        <button onclick="abrirAgendamentosGlobal()">
          Agendamentos
        </button>

        <button onclick="abrirProntuarioGlobal()">
          Prontuário
        </button>
      `;
    }

    if(perfil === "medico"){

      nomePerfil = "Médico";

      menu = `
        <button onclick="abrirDashboardGlobal()">
          Dashboard
        </button>

        <button onclick="abrirAgendamentosGlobal()">
          Agendamentos
        </button>

        <button onclick="abrirProntuarioGlobal()">
          Prontuário
        </button>
      `;
    }

    if(perfil === "secretaria"){

      nomePerfil = "Secretaria";

      menu = `
        <button onclick="abrirDashboardGlobal()">
          Dashboard
        </button>

        <button onclick="abrirPacientesGlobal()">
          Pacientes
        </button>

        <button onclick="abrirAgendamentosGlobal()">
          Agendamentos
        </button>
      `;
    }

    root.innerHTML = `
      <div class="container">

        <div class="sidebar">

          <h2>MedSync</h2>

          <p class="perfil-logado">
            ${nomePerfil}
          </p>

          ${menu}

          <button onclick="voltarLoginGlobal()">
            Sair
          </button>

        </div>

        <div class="content" id="content"></div>

      </div>
    `;

    abrirDashboard();
  }

  window.abrirDashboardGlobal = abrirDashboard;
  window.abrirPacientesGlobal = abrirPacientes;
  window.abrirAgendamentosGlobal = abrirAgendamentos;
  window.abrirProntuarioGlobal = abrirProntuario;
  window.voltarLoginGlobal = voltarLogin;

  return (

    <div className="login-container">

      <div className="login-box">

        <h1>MedSync</h1>

        <input
          id="email"
          type="email"
          placeholder="E-mail"
        />

        <input
          id="senha"
          type="password"
          placeholder="Senha"
        />

        <select id="perfil">

          <option value="admin">
            Admin
          </option>

          <option value="medico">
            Médico
          </option>

          <option value="secretaria">
            Secretaria
          </option>

        </select>

        <button onClick={fazerLogin}>
          Entrar
        </button>

      </div>

    </div>

  );
}

ReactDOM
.createRoot(document.getElementById("root"))
.render(<App />);