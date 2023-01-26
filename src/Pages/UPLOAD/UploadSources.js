import React from 'react'
import {UploadStyle} from '../../Styles/style'
import { Link } from 'react-router-dom'

function UploadSources() {
  return (
    <div style={UploadStyle}>
        <Link to='/drive'>Google Drive</Link><br />
        <Link to='/storage'>Device Storage</Link>
        <Link to='/dropbox'>Dropbox</Link>
        <Link to='/onedrive'>One Drive</Link>
    </div>
  )
}

export default UploadSources