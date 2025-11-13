const projetos = [
    {
        titulo: "Landing Page Pessoal",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        imagem: "/projects/p1.png",
        site : "#",
        codigo: "https://github.com/user/projeto" 
    },
    {
        titulo: "Catálogo de filmes",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        imagem: "/projects/p2.png",
        site : "#",
        codigo: "https://github.com/user/projeto2" 
    },
    {
        titulo: "Dashboard financeiro",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        imagem: "/projects/p2.png",
        site : "#",
        codigo: "https://github.com/user/projeto4" 
    },
];

export default function Projetos(){
    return(
        <section id="projetos" className="projetos">
            <div className="container">
                <header className="projetos__cabeca">
                    <span className="eyebrow">Portfólio</span>
                    <h2 className="projetos__titulo">Projetos</h2>
                </header>
                <div className="projetos__grid">
                    {projetos.map((p) => (
                        <article className="projeto" key={p.titulo}>
                            <div className="projeto_tumb">
                                <img src={p.imagem} alt={`Imagem do projeto ${p.titulo}`}/>
                            </div>
                            <div className="projeto__corpo">
                                <h3 className="projeto__titulo">{p.titulo}</h3>
                                <p className="projeto__descricao">{p.descricao}</p>
                                <div className="projeto__acoes">
                                    <a 
                                        className="botao botao--primario"
                                        href={p.site}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`Abrir site do projeto ${p.titulo}`}
                                    >
                                        Ver site
                                    </a>
                                    <a 
                                        className="botao"
                                        href={p.codigo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`Abrir código do projeto ${p.titulo}`}
                                    >
                                        GitHub 
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

            </div>
        </section>
    );
} 