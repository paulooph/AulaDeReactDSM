const skills = [
    {nome: "React" , nivel : 90},
    {nome: "JavaScript" , nivel : 85},
    {nome: "TypeScript" , nivel : 70},
    {nome: "Node.js" , nivel : 65},
    {nome: "Java" , nivel : 100},
    {nome: "C#" , nivel : 95},
    {nome: "Python" , nivel : 30},
    {nome: "Angular" , nivel : 10},
    {nome: "MySQL" , nivel : 75},
];

const tecnologias = [
    "React", "JavaScript", "TypeScript", "Node.js", "Angular",
    "Java", "C#", "Python", "SQL Server", "MySQL", "PostgreSQL",
    "Git", "HTML", "CSS"
];

export default function Habilidades(){
    return(
        <section id="habilidades" className="habilidades">
            <div className="container">
                <header className="habilidades__cabeca">
                    <span className="eyebrow">O que sei fazer</span>
                    <h2 className="habilidades__titulo">Habilidades</h2>
                </header>
                <ul className="habilidades__barras" aria-label="Barras de proficiência">
                    {skills.map((s) => (
                        <li key={s.nome} className="habilidade">
                            <div className="habilidade__topo">
                                <span className="habilidade__nome">
                                    {s.nome}
                                </span>
                                <span className="habilidade__percentual" aria-hidden="true">
                                    {s.nivel}%
                                </span>
                            </div>
                            <div className="habilidade__bar" role="progressbar"
                            aria-valuemin={0} aria-valuemax={100} aria-valuenow={s.nivel} aria-label={`Proficência em ${s.nome}:${s.nivel}%`}
                            >
                            <div className="habilidade__fill" style={{width: `${s.nivel}%`}}/>
                            </div>
                        </li>
                    ))}
                </ul>
                <div className="habilidades__tecnologias">
                    {tecnologias.map((t) => (
                        <span key={t} className="tech">{t}</span>
                    ))}
                </div>
            </div>
        </section>
    );
}


