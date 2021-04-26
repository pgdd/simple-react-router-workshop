const Greeting = ({ name, age }) => {
  return <h1>Hello {name} {age} </h1>
}

const Home = (props) => {

    const persons = [
      {
        name: "Gege", 
        age: 23
      }, 
      {
        name: "Pierre", 
        age: 32
      }
    ];
    const person = 'Gege'
    return(
    <>
      <h1>Home</h1>
      {persons.map((person) => <Greeting {...person}/> )}
    </>

    )
}

export default Home;