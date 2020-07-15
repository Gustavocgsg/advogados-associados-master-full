export default function SectionEquipe(props) {
    return (
        <div className="container is-light has-text-centered">
            <h1 className="is-size-2 has-text-centered">{ props.maintitle }Conheça nossos advogados</h1>
            <h2 className="is-size-5 has-text-weight-light has-text-centered mb-3">{ props.subtitle }Uma equipe de sucesso</h2>
            <p className="subtitle is-size-5 is-size-7-mobile has-text-black">
                { props.description } Valorizamos os membros de nossa equipe, seu intelecto e caráter decisório. Estamos orgulhosos de termos conseguido reunir funcionários inteligentes, talentosos e orientados para o cliente, e estamos felizes em apresentá-los a nossos clientes!
            </p>
            <div className="columns">
                <div className="column">
                    <div className="card">
                        <div className="card-image">
                            <figure className="image is-4by1">
                                <img src="../assets/images/lawyer-men-group.svg" alt="Nossa Equipe de Advogados" />
                            </figure>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <div className="card-image">
                            <figure className="image is-4by1">
                                <img src="../assets/images/lawyer-woman-group.svg" alt="Nossa Equipe de Advogados" />
                            </figure>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <div className="card-image">
                            <figure className="image is-4by1">
                                <img src="../assets/images/lawyer-men-group_2.svg" alt="Nossa Equipe de Advogados" />
                            </figure>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <div className="card-image">
                            <figure className="image is-4by1">
                                <img src="../assets/images/lawyer_woman_group_2.svg" alt="Nossa Equipe de Advogados" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}