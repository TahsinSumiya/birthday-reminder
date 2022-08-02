import React ,{useState} from "react";
import './list'
import './data'
import List from "./list";

function App() {
  const [people,setPeople] = useState()
 return <main>
<section className="container">
  <h3>0 birthdays today</h3>
  <List/>
  <button onClick={()=>console.log('click me')}>Clear all</button>
</section>
 
 </main>
}

export default App;
