
import React from 'react'
import Experiencia from '../../types/Experiencia'
import { ChamarDadosTs } from '../../types/ChamarTs'

function Experience(props: ChamarDadosTs) {
    const { experiencia } = props.resposta

    return (
        <>
            <div className="experience">
                <h2>Experiência Profissional</h2>

                {experiencia.map((item: Experiencia) => (
                    <div className="experience-item" key={item.id}>
                        <div>
                            <h4>{item.cargo}</h4>
                            <span>{item.periodo}</span>

                            <strong>{item.empresa}</strong>
                            <span className="final">{item.local}</span>
                        </div>
                        <p>
                            {item.conteudo}
                        </p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Experience