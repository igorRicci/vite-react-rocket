export function Note() {
  return (
    <div id="personal-notes">
      <h2>Personal notes</h2>
      <div className="notes">
        <h2 className="border-b">useQuery</h2>

        <p>É um <strong>hook</strong> do React.</p>
        <p>Hooks são que funções que <strong>adicionam algum comportamento ao componente</strong>.</p>
        <p>Ex.: Buscar dados de alguma API</p>
        <p>O nome desses hooks geralmente começa com use</p>
      </div>

      <div className="notes">
        <h2 className="border-b">ApolloProvider</h2>

        <p>É um <strong>context provider</strong></p>
        <p>Usa uma API do React chamada Context API</p>
        <p>Necessita de um atributo chamado <em>client</em></p>
      </div>

      <div className="notes">
        <h2 className="border-b">Converter para React</h2>

        <p>Sempre começar pensando em componentes</p>
        <p><strong>Componentes</strong> são pedaços da interface</p>
        <p>São criados quando <em>aquilo</em> se repete na interface, ou quando <em>aquilo</em> pode ser desacoplado sem influenciar no restante do projeto</p>
      </div>

      <div className="notes">
        <h2 className="border-b">Propriedades</h2>

        <p>Torna um componente variável, <strong>condicional a alguma informação</strong></p>
        <p>Isso é feito utilizando propriedades. Modificam o comportamento eou visual de um componente baseado em alguma info</p>
      </div>
    </div>
  )
}
