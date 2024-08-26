import MyComponent from "./MyComponent"
import MyComponent2 from "./MyComponent2"
import MyComponent3 from "./MyComponent3"
import MyList1 from "./MyList1"
import MyList2 from "./MyList2"


function App() {


  return (
    <>
      <p> empezamos la clase </p>
       <hr/>
       <ul>
           <li> item 11</li>
           <li> item 22</li>
           <li> item 33</li>
        </ul>

      <MyComponent/>
      <MyComponent2/>
      <MyComponent3/>
      <MyList1/>
      <MyList2/>
    </>
  )
}

export default App
