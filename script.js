const { useState } = React;

/* ── SVG Icons ── */
const Icon = {
  dashboard: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
      <rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
    </svg>
  ),
  patients: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  calendar: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/>
      <line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  ),
  clipboard: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
      <rect x="8" y="2" width="8" height="4" rx="1"/>
      <line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="16" x2="13" y2="16"/>
    </svg>
  ),
  logout: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
      <polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
    </svg>
  ),
  check: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  ),
  stethoscope: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6 6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/>
      <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"/>
      <circle cx="20" cy="10" r="2"/>
    </svg>
  ),
  heart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  ),
  trend: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
    </svg>
  ),
  plus: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
    </svg>
  ),
  save: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/>
      <polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/>
    </svg>
  ),
  logo: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
    </svg>
  ),
};

/* ── Toast notification ── */
function Toast({ msg, onClose }) {
  React.useEffect(() => {
    const t = setTimeout(onClose, 3000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{
      position: 'fixed', bottom: 28, right: 28, zIndex: 999,
      background: '#0F172A', color: '#fff',
      padding: '12px 20px', borderRadius: 10,
      boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
      display: 'flex', alignItems: 'center', gap: 10,
      fontSize: '0.875rem', fontWeight: 500,
      animation: 'slideUp 0.25s ease',
    }}>
      <span style={{ color: '#4ADE80', display: 'flex' }}>{Icon.check}</span>
      {msg}
    </div>
  );
}

/* ── Dashboard ── */
function Dashboard() {
  const cards = [
    { label: 'Consultas Hoje',       value: 12,  icon: 'clock',       color: 'blue'   },
    { label: 'Pacientes',             value: 248, icon: 'patients',    color: 'purple' },
    { label: 'Consultas do Mês',      value: 97,  icon: 'trend',       color: 'green'  },
    { label: 'Próximos Atendimentos', value: 5,   icon: 'calendar',    color: 'amber'  },
  ];

  return (
    <div>
      <div className="page-header">
        <h1>Dashboard</h1>
        <p>Resumo das atividades de hoje</p>
      </div>

      <div className="cards">
        {cards.map(c => (
          <div className="card" key={c.label}>
            <div className={`card-icon ${c.color}`}>{Icon[c.icon]}</div>
            <h3>{c.label}</h3>
            <p>{c.value}</p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 32, background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 14, padding: 24, boxShadow: 'var(--shadow-sm)' }}>
        <h3 style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 16 }}>
          Próximas Consultas
        </h3>
        {[
          { time: '08:00', name: 'Maria Clara',   doctor: 'Dr. Lucas', status: 'agendada'  },
          { time: '09:30', name: 'Carlos Mendes', doctor: 'Dra. Ana',  status: 'agendada'  },
          { time: '10:00', name: 'João Silva',    doctor: 'Dr. Lucas', status: 'realizada' },
          { time: '11:30', name: 'Ana Ferreira',  doctor: 'Dra. Ana',  status: 'cancelada' },
          { time: '14:00', name: 'Pedro Lima',    doctor: 'Dr. Lucas', status: 'agendada'  },
        ].map((c, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: 16,
            padding: '10px 0', borderBottom: i < 4 ? '1px solid var(--border)' : 'none',
          }}>
            <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.8rem', color: 'var(--text-muted)', minWidth: 40 }}>
              {c.time}
            </span>
            <div style={{ flex: 1 }}>
              <span style={{ fontWeight: 500, fontSize: '0.9rem' }}>{c.name}</span>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginLeft: 8 }}>{c.doctor}</span>
            </div>
            <span className={`status ${c.status}`}>
              {c.status.charAt(0).toUpperCase() + c.status.slice(1)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Pacientes ── */
function Pacientes() {
  const [pacientes, setPacientes] = useState([
    { id: 1, nome: 'João Silva', cpf: '123.456.789-00', nascimento: '1985-03-12', telefone: '(83) 99999-9999', convenio: 'Unimed' },
  ]);
  const [busca, setBusca] = useState('');
  const [form, setForm] = useState({ nome: '', cpf: '', nascimento: '', telefone: '', convenio: '' });
  const [toast, setToast] = useState(null);
  const [editId, setEditId] = useState(null);

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const formatCPF = v => {
    const d = v.replace(/\D/g, '').slice(0, 11);
    return d.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
            .replace(/(\d{3})(\d{3})(\d{3})/, '$1.$2.$3')
            .replace(/(\d{3})(\d{3})/, '$1.$2')
            .replace(/(\d{3})/, '$1');
  };

  const formatTel = v => {
    const d = v.replace(/\D/g, '').slice(0, 11);
    if (d.length >= 11) return d.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    if (d.length >= 10) return d.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    return d;
  };

  const salvar = () => {
    const { nome, cpf, telefone, convenio } = form;
    if (!nome || !cpf || !telefone || !convenio) { setToast('Preencha todos os campos obrigatórios.'); return; }
    const cpfNum = cpf.replace(/\D/g, '');
    const telNum = telefone.replace(/\D/g, '');
    if (cpfNum.length < 11) { setToast('CPF inválido.'); return; }
    if (telNum.length < 10) { setToast('Telefone inválido.'); return; }

    if (editId) {
      setPacientes(p => p.map(x => x.id === editId ? { ...form, id: editId } : x));
      setEditId(null);
      setToast('Paciente atualizado com sucesso!');
    } else {
      setPacientes(p => [...p, { ...form, id: Date.now() }]);
      setToast('Paciente cadastrado com sucesso!');
    }
    setForm({ nome: '', cpf: '', nascimento: '', telefone: '', convenio: '' });
  };

  const editar = p => { setForm(p); setEditId(p.id); };
  const excluir = id => setPacientes(p => p.filter(x => x.id !== id));

  const filtrados = pacientes.filter(p =>
    p.nome.toLowerCase().includes(busca.toLowerCase()) ||
    p.cpf.includes(busca)
  );

  return (
    <div>
      {toast && <Toast msg={toast} onClose={() => setToast(null)} />}
      <div className="page-header">
        <h1>{editId ? 'Editar Paciente' : 'Cadastro de Pacientes'}</h1>
        <p>Gerencie os pacientes da clínica</p>
      </div>

      <div className="form-card">
        <h3>{editId ? 'Editar dados' : 'Novo paciente'}</h3>
        <div className="form">
          <input placeholder="Nome completo *" value={form.nome} onChange={e => set('nome', e.target.value)} />
          <input placeholder="CPF *" value={form.cpf} onChange={e => set('cpf', formatCPF(e.target.value))} />
          <input type="date" title="Data de nascimento" value={form.nascimento} onChange={e => set('nascimento', e.target.value)} />
          <input placeholder="Telefone *" value={form.telefone} onChange={e => set('telefone', formatTel(e.target.value))} />
          <input placeholder="Convênio *" value={form.convenio} onChange={e => set('convenio', e.target.value)} />
          <div style={{ display: 'flex', gap: 8 }}>
            <button onClick={salvar}>
              {Icon.plus} {editId ? 'Salvar Alterações' : 'Cadastrar Paciente'}
            </button>
            {editId && (
              <button className="btn-secondary" onClick={() => { setEditId(null); setForm({ nome: '', cpf: '', nascimento: '', telefone: '', convenio: '' }); }}>
                Cancelar
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="topo">
        <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
          {filtrados.length} paciente{filtrados.length !== 1 ? 's' : ''}
        </span>
        <input className="busca" placeholder="Buscar por nome ou CPF…" value={busca} onChange={e => setBusca(e.target.value)} />
      </div>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Nome</th><th>CPF</th><th>Telefone</th><th>Convênio</th><th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {filtrados.length === 0 ? (
              <tr><td colSpan={5}>
                <div className="empty-state">
                  {Icon.patients}
                  <p>Nenhum paciente encontrado.</p>
                </div>
              </td></tr>
            ) : filtrados.map(p => (
              <tr key={p.id}>
                <td style={{ fontWeight: 500 }}>{p.nome}</td>
                <td style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.825rem' }}>{p.cpf}</td>
                <td>{p.telefone}</td>
                <td>
                  <span style={{ background: 'var(--brand-subtle)', color: 'var(--brand)', padding: '2px 10px', borderRadius: 20, fontSize: '0.775rem', fontWeight: 500 }}>
                    {p.convenio}
                  </span>
                </td>
                <td>
                  <div style={{ display: 'flex', gap: 6 }}>
                    <button className="btn-secondary btn-sm" onClick={() => editar(p)}>Editar</button>
                    <button className="btn-danger btn-sm" onClick={() => excluir(p.id)}>Excluir</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ── Agendamentos ── */
function Agendamentos() {
  const [consultas, setConsultas] = useState([
    { id: 1, paciente: 'Maria Clara', medico: 'Dr. Lucas', data: '2026-05-26', horario: '08:00', status: 'Agendada' },
  ]);
  const [form, setForm] = useState({ paciente: '', medico: '', data: '', horario: '', status: 'Agendada' });
  const [toast, setToast] = useState(null);

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const agendar = () => {
    const { paciente, medico, data, horario } = form;
    if (!paciente || !medico || !data || !horario) { setToast('Preencha todos os campos!'); return; }
    setConsultas(c => [...c, { ...form, id: Date.now() }]);
    setToast('Consulta agendada com sucesso!');
    setForm({ paciente: '', medico: '', data: '', horario: '', status: 'Agendada' });
  };

  const statusClass = s => ({ 'Agendada': 'agendada', 'Realizada': 'realizada', 'Cancelada': 'cancelada' }[s] || 'agendada');

  const ordenadas = [...consultas].sort((a, b) => {
    const da = `${a.data}T${a.horario}`;
    const db = `${b.data}T${b.horario}`;
    return da.localeCompare(db);
  });

  return (
    <div>
      {toast && <Toast msg={toast} onClose={() => setToast(null)} />}
      <div className="page-header">
        <h1>Agendamento de Consultas</h1>
        <p>Gerencie os horários e compromissos</p>
      </div>

      <div className="form-card">
        <h3>Nova Consulta</h3>
        <div className="form">
          <input placeholder="Nome do paciente" value={form.paciente} onChange={e => set('paciente', e.target.value)} />
          <select value={form.medico} onChange={e => set('medico', e.target.value)}>
            <option value="">Selecionar Médico</option>
            <option>Dr. Lucas</option>
            <option>Dra. Ana</option>
            <option>Dr. Rafael</option>
          </select>
          <input type="date" value={form.data} onChange={e => set('data', e.target.value)} />
          <input type="time" value={form.horario} onChange={e => set('horario', e.target.value)} />
          <select value={form.status} onChange={e => set('status', e.target.value)}>
            <option>Agendada</option>
            <option>Realizada</option>
            <option>Cancelada</option>
          </select>
          <button onClick={agendar}>{Icon.plus} Agendar Consulta</button>
        </div>
      </div>

      <div className="agenda">
        {ordenadas.length === 0 ? (
          <div className="empty-state">{Icon.calendar}<p>Nenhuma consulta agendada.</p></div>
        ) : ordenadas.map(c => (
          <div className="consulta" key={c.id}>
            <div className="consulta-info">
              <strong>{c.horario} — {c.paciente}</strong>
              <p>{c.medico} · {c.data ? new Date(c.data + 'T00:00').toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' }) : ''}</p>
            </div>
            <span className={`status ${statusClass(c.status)}`}>{c.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Prontuário ── */
function Prontuario() {
  const [registros, setRegistros] = useState([
    { id: 1, data: '10/05/2026', queixa: 'Consulta de rotina', diagnostico: 'Saudável', prescricao: '', obs: '' },
  ]);
  const [form, setForm] = useState({ queixa: '', diagnostico: '', prescricao: '', obs: '' });
  const [toast, setToast] = useState(null);

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const salvar = () => {
    if (!form.queixa) { setToast('Informe a queixa principal.'); return; }
    const hoje = new Date().toLocaleDateString('pt-BR');
    setRegistros(r => [{ ...form, id: Date.now(), data: hoje }, ...r]);
    setToast('Prontuário salvo com sucesso!');
    setForm({ queixa: '', diagnostico: '', prescricao: '', obs: '' });
  };

  return (
    <div>
      {toast && <Toast msg={toast} onClose={() => setToast(null)} />}
      <div className="page-header">
        <h1>Prontuário Eletrônico</h1>
        <p>Histórico e registros clínicos</p>
      </div>

      <div className="prontuario">
        <div className="historico">
          <h3>Histórico Clínico</h3>
          {registros.length === 0 ? (
            <div className="empty-state" style={{ padding: 24 }}>
              <p>Nenhum registro ainda.</p>
            </div>
          ) : registros.map(r => (
            <div className="registro" key={r.id}>
              <strong>{r.data}</strong>
              <p>{r.queixa}</p>
              {r.diagnostico && <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: 2 }}>Diag.: {r.diagnostico}</p>}
            </div>
          ))}
        </div>

        <div className="area-form">
          <div className="area-form-card">
            <h3 style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 16, paddingBottom: 12, borderBottom: '1px solid var(--border)' }}>
              Nova Consulta
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <textarea placeholder="Queixa principal *" value={form.queixa}      onChange={e => set('queixa', e.target.value)} />
              <textarea placeholder="Diagnóstico"        value={form.diagnostico} onChange={e => set('diagnostico', e.target.value)} />
              <textarea placeholder="Prescrição"         value={form.prescricao}  onChange={e => set('prescricao', e.target.value)} />
              <textarea placeholder="Observações"        value={form.obs}         onChange={e => set('obs', e.target.value)} />
              <button onClick={salvar} style={{ alignSelf: 'flex-start' }}>
                {Icon.save} Salvar Prontuário
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Landing Page ── */
function Landing({ onEntrar }) {
  const [aba, setAba] = useState('anual');

  const atendimentos = [
    {
      icon: 'patients',
      titulo: 'Clínica Geral',
      desc: 'Consultas de rotina, check-ups e acompanhamento contínuo de pacientes com histórico completo.',
      cor: 'blue',
    },
    {
      icon: 'heart',
      titulo: 'Cardiologia',
      desc: 'Gestão de laudos, exames e acompanhamento de pacientes com condições cardíacas.',
      cor: 'coral',
    },
    {
      icon: 'clipboard',
      titulo: 'Pediatria',
      desc: 'Controle de vacinação, curvas de crescimento e prontuários especializados para crianças.',
      cor: 'green',
    },
    {
      icon: 'stethoscope',
      titulo: 'Especialidades',
      desc: 'Dermatologia, ortopedia, neurologia e mais — cada especialidade com fluxos customizados.',
      cor: 'purple',
    },
  ];

  const funcionalidades = [
    { icon: 'clipboard',    titulo: 'Prontuário Eletrônico', desc: 'Histórico clínico completo, prescrições e diagnósticos em um só lugar.' },
    { icon: 'calendar',     titulo: 'Agendamento Online',    desc: 'Agenda integrada com confirmação automática e lembretes para pacientes.' },
    { icon: 'patients',     titulo: 'Gestão de Pacientes',   desc: 'Cadastro completo com busca rápida por nome, CPF ou convênio.' },
    { icon: 'dashboard',    titulo: 'Dashboard em Tempo Real', desc: 'Métricas de consultas, ocupação e desempenho sempre atualizadas.' },
    { icon: 'trend',        titulo: 'Relatórios Avançados',  desc: 'Exportação e análise de dados clínicos e financeiros por período.' },
    { icon: 'clock',        titulo: 'Multi-perfil',          desc: 'Acesso controlado para médicos, secretaria e administração.' },
  ];

  const planos = [
    {
      nome: 'Starter',
      mensal: 149,
      anual: 119,
      desc: 'Ideal para consultórios individuais',
      itens: ['1 médico', 'Até 200 pacientes', 'Agendamento básico', 'Prontuário eletrônico', 'Suporte por e-mail'],
      destaque: false,
    },
    {
      nome: 'Pro',
      mensal: 299,
      anual: 239,
      desc: 'Para clínicas em crescimento',
      itens: ['Até 5 médicos', 'Pacientes ilimitados', 'Agendamento online', 'Relatórios avançados', 'Integração com convênios', 'Suporte prioritário'],
      destaque: true,
    },
    {
      nome: 'Enterprise',
      mensal: 599,
      anual: 479,
      desc: 'Para grandes redes e hospitais',
      itens: ['Médicos ilimitados', 'Multi-unidade', 'API e integrações', 'Gestor dedicado', 'SLA 99,9%', 'Treinamento presencial'],
      destaque: false,
    },
  ];

  const corMap = { blue: '#2563EB', coral: '#E05A3A', green: '#16A34A', purple: '#7C3AED' };
  const bgMap  = { blue: 'rgba(37,99,235,0.12)', coral: 'rgba(224,90,58,0.12)', green: 'rgba(22,163,74,0.12)', purple: 'rgba(124,58,237,0.12)' };

  return (
    <div className="landing">

      {/* NAV */}
      <nav className="land-nav">
        <div className="land-nav-inner">
          <div className="land-logo">
            <div className="land-logo-icon">{Icon.logo}</div>
            <span>MedSync</span>
          </div>
          <div className="land-nav-links">
            <a href="#atendimentos">Atendimentos</a>
            <a href="#funcionalidades">Funcionalidades</a>
            <a href="#planos">Planos</a>
          </div>
          <button className="btn-land-login" onClick={onEntrar}>Entrar</button>
        </div>
      </nav>

      {/* HERO */}
      <section className="land-hero">
        <div className="land-hero-glow land-glow-1" />
        <div className="land-hero-glow land-glow-2" />
        <div className="land-hero-split">
          <div className="land-hero-left">
            <div className="land-tag">Plataforma de gestão clínica</div>
            <h1 className="land-hero-title">
              Sua clínica,<br />
              <span className="land-hero-accent">no próximo nível.</span>
            </h1>
            <p className="land-hero-sub">
              Prontuário eletrônico, agendamento e gestão de pacientes — tudo integrado numa plataforma moderna feita para profissionais de saúde.
            </p>
            <div className="land-hero-ctas">
              <button className="btn-cta-primary" onClick={onEntrar}>
                Começar agora {Icon.plus}
              </button>
              <a href="#planos" className="btn-cta-ghost">Ver planos</a>
            </div>
            <div className="land-hero-stats">
              {[['+12 mil', 'Médicos ativos'], ['98%', 'Satisfação'], ['24/7', 'Suporte']].map(([n, l]) => (
                <div key={l} className="land-stat">
                  <strong>{n}</strong>
                  <span>{l}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="land-hero-right">
            <div className="land-mascot-wrap">
              <img src="BUFALLO_BIL.png" alt="Dr. Bogo mascote MedSync" className="land-mascot" />
              <div className="land-mascot-bubble">
                Bem-vindo ao<br /><strong>MedSync!</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ATENDIMENTOS */}
      <section className="land-section" id="atendimentos">
        <div className="land-section-inner">
          <div className="land-section-header">
            <div className="land-tag">Especialidades</div>
            <h2>Tipos de atendimento</h2>
            <p>Fluxos adaptados para cada especialidade médica</p>
          </div>
          <div className="land-grid-4">
            {atendimentos.map(a => (
              <div className="land-card" key={a.titulo}>
                <div className="land-card-icon" style={{ background: bgMap[a.cor], color: corMap[a.cor] }}>
                  {Icon[a.icon]}
                </div>
                <h3>{a.titulo}</h3>
                <p>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FUNCIONALIDADES */}
      <section className="land-section land-section-alt" id="funcionalidades">
        <div className="land-section-inner">
          <div className="land-section-header">
            <div className="land-tag">Plataforma</div>
            <h2>Tudo que você precisa</h2>
            <p>Ferramentas pensadas para o dia a dia clínico</p>
          </div>
          <div className="land-grid-3">
            {funcionalidades.map(f => (
              <div className="land-feat" key={f.titulo}>
                <div className="land-feat-icon">{Icon[f.icon]}</div>
                <div>
                  <h4>{f.titulo}</h4>
                  <p>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLANOS */}
      <section className="land-section" id="planos">
        <div className="land-section-inner">
          <div className="land-section-header">
            <div className="land-tag">Preços</div>
            <h2>Planos e preços</h2>
            <p>Sem taxas ocultas. Cancele quando quiser.</p>
          </div>

          <div className="land-toggle">
            <button className={aba === 'mensal' ? 'active' : ''} onClick={() => setAba('mensal')}>Mensal</button>
            <button className={aba === 'anual'  ? 'active' : ''} onClick={() => setAba('anual')}>Anual <span className="land-desconto">−20%</span></button>
          </div>

          <div className="land-planos">
            {planos.map(p => (
              <div className={`land-plano ${p.destaque ? 'land-plano-dest' : ''}`} key={p.nome}>
                {p.destaque && <div className="land-plano-badge">Mais popular</div>}
                <h3>{p.nome}</h3>
                <p className="land-plano-desc">{p.desc}</p>
                <div className="land-plano-preco">
                  <span className="land-preco-val">R$ {aba === 'anual' ? p.anual : p.mensal}</span>
                  <span className="land-preco-per">/mês</span>
                </div>
                {aba === 'anual' && <p className="land-plano-economia">Economia de R$ {(p.mensal - p.anual) * 12}/ano</p>}
                <ul className="land-plano-itens">
                  {p.itens.map(i => (
                    <li key={i}>
                      <span className="land-check">{Icon.check}</span>
                      {i}
                    </li>
                  ))}
                </ul>
                <button
                  className={p.destaque ? 'btn-cta-primary' : 'btn-cta-outline'}
                  onClick={onEntrar}
                  style={{ width: '100%', justifyContent: 'center', marginTop: 'auto' }}
                >
                  Começar com {p.nome}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="land-footer">
        <div className="land-logo" style={{ justifyContent: 'center', marginBottom: 8 }}>
          <div className="land-logo-icon">{Icon.logo}</div>
          <span>MedSync</span>
        </div>
        <p>© 2026 MedSync. Todos os direitos reservados.</p>
      </footer>

    </div>
  );
}

/* ── App ── */
function App() {
  const [tela, setTela] = useState('landing');
  const [logado, setLogado] = useState(false);
  const [perfil, setPerfil] = useState('admin');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [paginaAtual, setPaginaAtual] = useState('dashboard');

  const nomePerfil = { admin: 'Administrador', medico: 'Médico', secretaria: 'Secretaria' }[perfil];

  const menus = {
    admin:      ['dashboard', 'pacientes', 'agendamentos', 'prontuario'],
    medico:     ['dashboard', 'agendamentos', 'prontuario'],
    secretaria: ['dashboard', 'pacientes', 'agendamentos'],
  };

  const menuItems = [
    { key: 'dashboard',    label: 'Dashboard',    icon: 'dashboard'  },
    { key: 'pacientes',    label: 'Pacientes',    icon: 'patients'   },
    { key: 'agendamentos', label: 'Agendamentos', icon: 'calendar'   },
    { key: 'prontuario',   label: 'Prontuário',   icon: 'clipboard'  },
  ];

  const login = () => {
    if (!email || !senha) { alert('Preencha e-mail e senha!'); return; }
    setTela('app');
    setPaginaAtual('dashboard');
  };

  if (tela === 'landing') return <Landing onEntrar={() => setTela('login')} />;

  if (tela === 'login') {
    return (
      <div className="login-container">
        <div className="login-box">
          <div className="login-logo">
            <div className="logo-icon">{Icon.logo}</div>
            <h1>MedSync</h1>
            <p>Plataforma de Gestão Clínica</p>
          </div>
          <div>
            <div className="login-label">E-mail</div>
            <input type="email" placeholder="seu@email.com" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div>
            <div className="login-label">Senha</div>
            <input type="password" placeholder="••••••••" value={senha} onChange={e => setSenha(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && login()} />
          </div>
          <div>
            <div className="login-label">Perfil de Acesso</div>
            <select value={perfil} onChange={e => setPerfil(e.target.value)}>
              <option value="admin">Administrador</option>
              <option value="medico">Médico</option>
              <option value="secretaria">Secretaria</option>
            </select>
          </div>
          <button className="btn-login" onClick={login}>Entrar</button>
          <button style={{ background: 'transparent', color: 'rgba(255,255,255,0.4)', border: 'none', fontSize: '0.8rem', cursor: 'pointer', padding: '4px 0' }}
            onClick={() => setTela('landing')}>← Voltar ao início</button>
        </div>
      </div>
    );
  }

  const pages = { dashboard: <Dashboard />, pacientes: <Pacientes />, agendamentos: <Agendamentos />, prontuario: <Prontuario /> };

  return (
    <div className="container">
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2>MedSync</h2>
          <span className="sidebar-badge">{nomePerfil}</span>
        </div>

        <nav className="sidebar-nav">
          <div className="nav-label">Menu</div>
          {menuItems
            .filter(m => menus[perfil].includes(m.key))
            .map(m => (
              <button
                key={m.key}
                className={paginaAtual === m.key ? 'active' : ''}
                onClick={() => setPaginaAtual(m.key)}
              >
                {Icon[m.icon]}
                {m.label}
              </button>
            ))}
        </nav>

        <div className="sidebar-footer">
          <button onClick={() => setTela('landing')}>
            {Icon.logout} Sair
          </button>
        </div>
      </aside>

      <main className="content" key={paginaAtual}>
        {pages[paginaAtual]}
      </main>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
