import React, {useState, useEffect, useContext} from 'react'
import  {useHttp} from '../hooks/http.hook'
import { AuthContext } from '../context/AuthContext'

export const CreatePage = () => {
    const auth = useContext(AuthContext)
    const [link, setLink] = useState('')
    const {request} = useHttp()

    console.log(auth)

    const pressHandler = async (event) => {
        if (event.key === 'Enter') {
            try {
                const data = await request('/api/link/generate', 'POST', {from: link}, {authorization: `Bearer ${auth.token}`})
                console.log(data)
            } catch (e) {}
        }
    }

    useEffect(()=>{
        window.M.updateTextFields()
      })

    return (
        <div className='row'>
            <div className='col s8 offset-s2' style={{paddingTop: '2 rem'}}>

            <div className="input-field">
                <input
                  placeholder="Enter url"
                  id="link"
                  type="text"
                  value={link}
                  onChange={e=>setLink(e.target.value)}
                  onKeyPress={pressHandler}
                />
                <label htmlFor="link">Put a link here:</label>
              </div>

            </div>
        </div>
    )
}