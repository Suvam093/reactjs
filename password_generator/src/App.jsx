import { useCallback, useEffect, useRef, useState } from 'react'

function App() {

  const [length, setlength] = useState(8)
  const [n_allowed , setallowed] = useState(false)
  const [characters, setcharacter] = useState(false)
  const [password , setpassword] = useState("")

  const passwordgenerated = useCallback(() => {
    let pass = ""
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"

    if(n_allowed) str += "0123456789" 
    if(characters) str += "!@#$%^&*()_+-=,./;'[]\<>?:`~{}|"

    for(let i=1; i<= length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      setpassword(pass)
    }


  }, [length, n_allowed,  characters])       
  
  //iss array ke andar jo kuch bhi ha agr unme change notice hota ha toh wapis se function run kr dena aur usko cache me rakh dena
  // *uss cache me rakhne ko hum memoize krna bolte ha memoization



  const passref = useRef(null);    // ye hook reference lene ke liye use hota ha

  const copycontent = useCallback(() => {
    passref.current?.select()                            //ye par hmlog uss value ka ref lekr usko select kr rhe ha
    window.navigator.clipboard.writeText(password)       //copy krne ka command
  }, [])


  useEffect(() => {passwordgenerated()}, [length, n_allowed, characters, passwordgenerated])

  // use effect me jo array ha woh ye bolta ha ki agr inme koi bhi changes ho toh dubara se run kr do bas isme memoization ni hota

  

  return (
    <>
      <div className="w-100% h-screen"
      style={{backgroundColor: 'black'}}>j
        <div className='w-full max-w-md mx-auto showdow-md
        rounded-xl px-4 my-8 text-orange-500 bg-gray-600 text-center'>
          <h1 className='text-4xl text-center text-white pt-5'>Password Generator</h1>
          <div className='flex shwodow-rounded-lg overflow-hidden mb-4'>
            <input type="text" 
            value={password}
            className='outline-none w-full py-1 px-3 m-5 rounded-lg'
            placeholder='Password'
            readOnly
            ref={passref}                   // yahan par humne uss reference ko pass bhi kia wrna ye upar kaam ni krta
            />


            <button onClick={copycontent} className='w-md rounded-lg shadow-md px-2 h-8 mt-5'
            style={{backgroundColor:"black"}}>Copy</button>
          </div>
          <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1 mb-5'>
              <input 
              type="range"
              min={4} max={20}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {setlength (e.target.value) }}
              />
              <label>Length: {length}</label>
            </div>
            <div className='flex item-center gap-x-1 mb-5'>
              <input type="checkbox"
              className='cursor-pointer'
              defaultChecked={n_allowed}
              id='numberInput'
              onChange={()=>{
                setallowed((prev)=>!prev);
              }}
              />
              <label htmlFor="numberInput">Numbers</label>
            </div>
            <div className='flex item-center gap-x-1 mb-5'>
              <input type="checkbox"
              className='cursor-pointer'
              defaultChecked={characters}
              id='characterInput'
              onChange={()=>{
                setcharacter((previous)=>!previous);                  //ye interview question wala concept use hua ha yahan ki previous value ko  
                                                                      //update krne ke liye phle call krna pdega phir update kr sakte ha usse
              }}
              />
              <label htmlFor="characterInput">Character</label>
            </div>
          </div>
        </div>
      </div>

      
    </>
  )
}

export default App
