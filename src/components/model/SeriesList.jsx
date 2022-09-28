import SeriesCard from '../model/SeriesCard'

export default function SeriesList(props) {
    return (
        <div className="row container justify-content-around">
            {props.series.map((s, indice) => {
                return <SeriesCard key={indice} nome={s.nome} pais={s.pais} mediaVotos={s.mediaVotos} contagemVotos={s.contagemVotos}
                  sinopse={s.sinopse}
                />
            })}
        </div>
    )
}