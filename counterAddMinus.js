function PlusButton({action}) {
	return (
    <button onClick={action}>+</button>
  );
}

function MinusButton({action}) {
  return (
    <button onClick={action}>-</button>
  );
}

function Display({message}) {
  return (
    <div>{message}</div>
  )
}

function App() {
  const [counter, setCounter] = useState(0);
  
  const addCounter = () => setCounter(counter + 1);
  const minusCounter = () => setCounter(counter - 1);
  
  return (
    <div>
      <MinusButton action={minusCounter}/>
      <Display message={counter} />
      <PlusButton action={addCounter}/>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('mountNode'),
);

// *** The React 18 way:
// root.render(
//   <Button />,
// );