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
            <div style={{
                backgroundImage: `url("https://i.imgur.com/h9KiCHb.png")`
            }}>
                <div className='text-center'><p className='[text-shadow:_0_3px_0_rgb(0_0_0_/_100%)] text-2xl tracking-widest font-bold text-seventh-night-color'>COMPARTIR</p></div>
                <div className='flex justify-evenly lg:justify-center lg:space-x-10 h-32'>
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