import data from './data';
import Card from './components/Card'
import Header from './components/Header'
import './style.css';


export default function App(){
  const newData = data.map(item => {
    return (
      <Card 
      key = {item.id}
      data = {item}/>
      
    )
  })

  return (
    <div className="container">
      <Header/>
      {newData}
    </div>
  )
}
