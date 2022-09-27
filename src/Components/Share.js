import React from 'react'
import {
    FacebookShareButton,
    FacebookIcon,
    WhatsappShareButton,
    WhatsappIcon,
    LinkedInShareButton,
    LinkedInIcon,
} from "react-share";

const Share = () => {

    const shareUrl = 'http://www.google.com.ar/'

    return (
        <>
            <FacebookShareButton url={shareUrl}>
                <FacebookIcon size={40} round={true} />
            </FacebookShareButton>

            <WhatsappShareButton url={shareUrl}>
                <WhatsappIcon size={40} round={true} />
            </WhatsappShareButton>

            <LinkedInShareButton url={shareUrl}>
                <LinkedInIcon size={40} round={true} />
            </LinkedInShareButton>
        </>
    )
}

export default Share