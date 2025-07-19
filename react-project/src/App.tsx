// let language = 'TypeScript';
// let moon = 'Moon';

function Header({name, age}) {
  //console.log(props)
    return (
        <header>
            <h1>Welcome {name} with age is {age}</h1>
        </header>
    );
  }
function App() {
    return (
    <div>
    <Header name="Kartikeye" age = {24}/> 
    <main>
        <h1>Welcome to React Project</h1>
        </main>
        </div>
    );
}

export default App
