import React, { useState, useEffect } from 'react'
import { db } from '../../firebase/Firebase';


const AboutUsRead = () => {

    const [about, setAbout] = useState();


    useEffect(() => {
        db.collection('about').orderBy('createAt', 'desc').limit(1).onSnapshot(snapshot =>{
            setAbout(snapshot.docs.map(doc => doc.data()))
            console.log(`Data: ${snapshot.docs}`);
        })
    }, [])

  return (
    
    <div className="w-full p-2 border-2 h-40">    
        {about?.map(({ id, uid, email, about, createAt}) =>
            <div key={id}>
               <p className="text-2xl">{about}</p>
            </div>
    )}
    </div>
  )
}

export default AboutUsRead