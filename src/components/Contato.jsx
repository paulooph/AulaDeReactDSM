export default function Contato(){
    return(
        <section id="contato" className="contato">  
            <div className="container">
                <header className="contato__cabeca">
                    <span className="eyebrow">Fale comigo</span>
                    <h2 className="contato__titulo">Contato</h2>
                    <p className="contato__sub">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum nemo earum excepturi qui non reiciendis ratione ea optio vero beatae, asperiores alias dolorum quasi! Rem non voluptatem eaque possimus neque!
                    </p>
                </header>
                <div className="contato__grid">
                    <div className="contato__infos">
                        <p><strong>E-mail:</strong>seuemail@exemplo.com</p>
                        <p><strong>Linkedin:</strong>linkedin.com/in/perfil</p>
                        <p><strong>Github:</strong>github.com/perfil</p>
                        <p><strong>WhatsApp:</strong>+55 11 99999-9999</p>
                        <div className="contato__endereco">
                            <p><strong>Endereço:</strong>
                            Exemplo, 123 - Bairro Centro. Cidade/UF - Brasil
                            </p>
                        </div>
                    </div>
                    <form
                        className="contato__form"
                        onSubmit={(e) => {
                            e.preventDefault();
                            alert("Mensagem enviada com sucesso!");
                        }}
                    >
                        <div className="campo">
                            <label htmlFor="nome">Nome</label>
                            <input id="nome" name="nome" type="text" placeholder="Seu nome" required/>
                        </div>
                        
                        <div className="campo">
                            <label htmlFor="email">E-mail</label>
                            <input id="email" name="email" type="email" placeholder="Seu email" required/>
                        </div>
                    
                        <div className="campo">
                            <label htmlFor="assunto">Assunto</label>
                            <input id="assunto" name="assunto" type="text" placeholder="Assunto da mensagem" required/>
                        </div>
                        
                        <div className="campo">
                            <label htmlFor="mensagem">Mensagem</label>
                            <textarea id="mensagem" name="mensagem"
                            rows="5" placeholder="Assunto da mensagem" required />
                        </div>

                        <button className="botao botao--primario" type="submit">
                            Enviar mensagem
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}