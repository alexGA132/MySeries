import { useEffect, useState } from 'react'
import SeriesList from './components/model/SeriesList';
import 'bootstrap/dist/css/bootstrap.min.css'
import SearchBox from './components/SearchBox';
import Title from './components/Title';



function App() {

  const [series, setSeries] = useState([]);
  const [filtro,setFiltro] = useState('')
  const [seriesFiltradas,setSeriesFiltradas] = useState([])

  useEffect(() => {
    const chamadaSeries = async () => { 
      const resposta = await fetch('https://api.themoviedb.org/3/tv/popular?api_key=a2180a3381b73941d6b74ddf5782bf72')
      const respostaJson = await resposta.json()
      const seriesRecebidas =  respostaJson.results.map(data => {
        return {
          'nome': data.original_name, 'sinopse': data.overview,
          'mediaVotos': data.vote_average, 'contagemVotos': data.vote_count, 'pais': data.origin_country
        }
      })
        setSeries(seriesRecebidas)
        setSeriesFiltradas(seriesRecebidas)
        
      }
      
      chamadaSeries().catch(err => console.log("erro:" + err))

  }, []);
  
  function filtragem(valor){
    setFiltro(valor)
    const sf = series.filter(serie => { return serie.nome.toLowerCase().includes(valor.toLowerCase())})
    setSeriesFiltradas(sf)
  }

  return (
    <div className="App">
      <div className="container">
        <div className="d-flex justify-content-center">
          <Title/>
        </div>
          <SearchBox onChangeFilterValue={filtragem}/>
          <SeriesList series={seriesFiltradas} />
      </div>

    </div>
  )
}

export default App
