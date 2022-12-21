import React from 'react'

function Alert(props) {
  return (
    <div><div className="alert alert-warning alert-dismissible fade show" role="alert">
        {props.alert}
    <strong>HELP CHINA PROTEST AGAING  CCP</strong> Hope you like our service.
    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div></div>
  )
}

export default Alert