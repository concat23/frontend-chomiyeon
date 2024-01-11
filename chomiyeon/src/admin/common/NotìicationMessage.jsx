import React from 'react'
import '../components/style.css'
function NotìicationMessage(type, message){
  return (
    <div className={`custom-notification ${type}`}>
        <p>{message}</p>
    </div>
  )
}

export default NotìicationMessage
