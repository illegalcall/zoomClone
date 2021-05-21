import React from 'react'

const Video = ({srcObject}) => {
    console.log(srcObject,"srcobj Video")
    return (
        <div>
            <video ref={srcObject} onLoadedMetadata={(e)=>{
                e.play()
            }}>
                
            </video>
        </div>
    )
}

export default Video
