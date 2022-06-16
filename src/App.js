import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import data from '/home/vibhor/Documents/projects/reactProjects/staticPages/my-travel-journal/src/components/datafile.js'
function App() {
  let elements = data.map(
    (item) => {
      return (
        <Card
          img={item.img}
          loc={item.loc}
          place={item.place}
          date={item.date}
          content={item.content}
          loclink={item.loclink}></Card>)
    }
  )
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className='wrapper'>
        {elements}
      </div>
    </div>
  );
}

export default App;
