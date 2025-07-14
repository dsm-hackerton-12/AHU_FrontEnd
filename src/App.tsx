import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <span>
        선우가 과연 리액트를 잘할 수 있을 것인가?? {count}
      </span>
      <button onClick={() => setCount(count+1)}>
        count += 1
      </button>
    </>
  )
}

export default App;