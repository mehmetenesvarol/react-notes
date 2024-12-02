import './App.css'
import Props from './props'

function App() {
  return (
    <>
      <div className='cards'>
        <Props name="Enes" surName="Varol" age={21} isStudent={true}/>
      </div>
      <div className='cards'>
        <Props name="Fuat" surName="Tas" age={13} isStudent={true}/>
      </div>
      <div className='cards'>
        <Props name="Murat" surName="Kurum" age={46} isStudent={false}/>
      </div>
      <div className='cards'>
        <Props name="Fatma" surName="Kaya" age={39} isStudent={false}/>
      </div>
      <div className='cards'>
        <Props/>
      </div>
    </>
  )
}

export default App
