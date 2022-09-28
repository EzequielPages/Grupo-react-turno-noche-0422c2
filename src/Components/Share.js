import React from 'react'
import {
    FacebookShareButton,
    FacebookIcon,
    WhatsappShareButton,
    WhatsappIcon,
    EmailShareButton,
    EmailIcon,
    TwitterShareButton,
    TwitterIcon,
    TelegramShareButton,
    TelegramIcon,
    RedditShareButton,
    RedditIcon,
    FacebookMessengerShareButton,
    FacebookMessengerIcon
} from "react-share";

const Share = () => {

    const shareUrl = 'http://www.google.com.ar/'

    return (
        <>
            <div class="flex items-center justify-center space-x-14 h-44  bg-third-color dark:bg-sixth-color ">

                <FacebookShareButton url={shareUrl}>
                    <FacebookIcon size={40} round={true} />
                </FacebookShareButton>

                <TwitterShareButton url={shareUrl}>
                    <TwitterIcon size={40} round={true} />
                </TwitterShareButton>

                <WhatsappShareButton url={shareUrl}>
                    <WhatsappIcon size={40} round={true} />
                </WhatsappShareButton>

                <FacebookMessengerShareButton url={shareUrl}>
                    <FacebookMessengerIcon size={40} round={true} />
                </FacebookMessengerShareButton>

                <TelegramShareButton url={shareUrl}>
                    <TelegramIcon size={40} round={true} />
                </TelegramShareButton>

                <RedditShareButton url={shareUrl}>
                    <RedditIcon size={40} round={true} />
                </RedditShareButton>

                <EmailShareButton url={shareUrl}>
                    <EmailIcon size={40} round={true} />
                </EmailShareButton>
            </div>
        </>
    )
}

export default Share