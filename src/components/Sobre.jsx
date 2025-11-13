export default function Sobre(){
    return(
        <section id="sobre" className="sobre">
            <div className="container sobre__conteudo">
                <header className="sobre__cabeca">
                    <span className="eyebrow">Quem sou</span>
                    <h2 className="sobre__titulo"> Sobre mim</h2>
                </header>
                <div className="sobre__texto">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta reprehenderit saepe consectetur voluptas neque, ducimus sit impedit, ullam nihil qui quasi ab totam repellendus quia nesciunt ut quos quaerat eveniet.<br/> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error consequuntur fugit aliquam repudiandae doloribus quam explicabo, adipisci delectus quasi soluta optio quaerat pariatur voluptatum voluptatibus facilis eveniet et dolorem sit.
                </div>
                <ul className="sobre__infos">
                    <li><span><strong>Foco</strong><p>Front-end - React</p></span></li>
                    <li><span><strong>Local</strong><p>Brasil - Remoto / Presencial</p></span></li>
                    <li><span><strong>Stack</strong><p>HTML, CSS, JS, React</p></span></li>
                    <li><span><strong>Estudando</strong><p>Acessibilidade e UI</p></span></li>
                </ul>

            </div>
        </section>    
    );
}