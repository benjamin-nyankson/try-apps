import React from 'react'

function UploadImagePage(props) {
  return (
    <div>
        <img src={props.image} alt="" />
        <p>Welcome</p>
        {props.image}
    </div>
  )
}

export default UploadImagePage