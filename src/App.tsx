import './App.css'
import Header from './Header'

function App() {
  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <Header/>
      <div className="w-screen h-screen flex justify-center items-center overflow-hidden bg-transparent m-0 p-0 mt-5">
        <iframe
          className="w-full h-full max-w-full border border-gray-300 bg-transparent -ml-4 p-0 overflow-hidden"
          src="https://airtable.com/embed/appsmsu6EeTscG5Nt/shrxNGfPzR8sx2keR?layout=card&viewControls=on"
        />
      </div>
    </div>
  )
}

export default App
