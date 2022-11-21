import './App.css';
import Button from './componentes/Button/Button';
import Main from './componentes/Main/Main';
import Header from './componentes/Header/Header';
import { useEffect, useState } from 'react';

function App() {
  const API = 'https://rickandmortyapi.com/api/character/'
  let [data, setData] = useState()

  const loadData = (link) => {
    const ApiLink = link ? link : API
    fetch(ApiLink)
      .then(res => res.json())
      .then(res => {
        setData(res)
      })
  }
  const loadNext = () => {
    if (data.info.next != null) {
      loadData(data.info.next)
    }
  }

  const loadPrev = () => {
    if (data.info.prev != null) {
      loadData(data.info.prev)
    }
  }
  useEffect(() => {
    if (data != undefined) {
    }
  }, [data])


  return (
    <div className="App">
      <Header />
      {data != undefined ?
        <>
          <Button  eleClass={"btn_Prev"} func={() => loadPrev()} link={API} btnText={"Load Prev"} />
          <Button  eleClass={"btn_Next"} func={() => loadNext()} link={API} btnText={"Load Next"} />
        </>
        : <></> }
      {data != undefined ? <Main data={data.results} /> : <Button eleClass={"btn_Load"} func={loadData} link={API} btnText={"Cargar personajes"} />}
    </div>
  );
}

export default App;
