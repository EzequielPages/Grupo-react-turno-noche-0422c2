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

    // 
    return (
        <>
            <div class='bg-third-color text-seventh-color dark:bg-sixth-color dark:text-seventh-night-color' style={{
                backgroundImage: `url('https://i.imgur.com/Y76wfux.png')`
            }}>
                <div class='text-center'><p class='font-bold underline'>COMPARTIR</p></div>
                <div class='flex items-center justify-center space-x-14 h-20 '>
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
            </div>
        </>
    )
}

export default Share