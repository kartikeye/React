// let language = 'TypeScript';
// let moon = 'Moon';

function Header(props) {
  console.log(props)
    return (
        <header>
            <h1>Welcome {props.name} with age is {props.age}</h1>
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
