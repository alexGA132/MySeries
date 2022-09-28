import React from 'react';

const SeriesCard = (props) => {
	return (
		<div className="card">
			<div className="card-body">
				<h5 className="card-title">{props.nome}</h5>
				<h6 className="card-subtitle mb-2 text-muted"> Média de aprovação: {props.mediaVotos}</h6>
				<h6 className="card-subtitle mb-2 text-muted">Contagem de votos: {props.contagemVotos}</h6>
				<h6 className="card-subtitle mb-2 text-muted">País de origem: {props.pais}</h6>
				<p className="card-text">{props.sinopse}</p>
			</div>
		</div>
	);
};

export default SeriesCard;