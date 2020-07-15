import React, { useState, useCallback, useContext, useEffect } from 'react'
import {useHttp} from '../hooks/http.hook'
import {useParams} from "react-router-dom"
import {Loader} from '../components/Loader'
import {AuthContext} from '../context/AuthContext'
import {LinkCard} from '../components/LinkCard'



export const DetailPage = () => {
    const {token} = useContext(AuthContext)
    const {request, loading} = useHttp()
    const [link, setLink] = useState(null)
    const LinkId = useParams().id

    
    const getLink = useCallback(async ()=>{
        try {
            const fetched = await request(`/api/link/${LinkId}`, 'GET', null, {
                Authorization: `Bearer ${token}`
            })
            console.log(fetched)
            setLink(fetched)
        } catch (error) {
            console.log(error)
        }

    }, [token, LinkId, request])

    useEffect(()=>{
        getLink()
    }, [getLink])

    if (loading) {
        return <Loader />
    }


    return (
        <div>
            { !loading && link && <LinkCard link={link}/>}
        </div>
    )
}