export function Destaque(){
    return(
        <section id="destaque" className="destaque">
            <div className="container destaque__conteudo">
                <div className="destaque__texto">
                    <p className="destaque__intro">Desenvolvedor Front-End</p>
                    <h1 className="destaque__titulo">Olá, eu sou <span className="destaque__nome">Seu Nome</span></h1>
                    <p className="destaque__descricao">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis veritatis excepturi delectus, autem quae cum vero, quasi doloremque rerum, dolores voluptate suscipit dolor. Cum quia ipsa similique possimus doloremque aperiam.<br/>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam sint explicabo doloribus animi, expedita placeat labore minus culpa quam quia laboriosam quae officia maiores rem fugiat quasi ab perferendis ipsam!
                    </p>
                    <div className="destaque__botoes">
                        <a href="#projetos" className="botao botao--primario">Ver Projetos</a>
                        <a href="#" className="botao" target="_blank">GitHub</a>
                    </div>
                </div>
                <div className="destaque__foto">
                    <img src="/profile.jpg" alt="Foto de perfil"/>
                </div>
            </div> 
    </section>
    );
}