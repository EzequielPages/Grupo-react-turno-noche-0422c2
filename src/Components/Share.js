import React from 'react'
import { FacebookShareButton, FacebookIcon } from "react-share";

const Share = () => {

    const shareUrl = 'http://google.com.ar/'

    return (
        <FacebookShareButton url={shareUrl}>
            <FacebookIcon size={40} />
        </FacebookShareButton>
    )
}

export default Share