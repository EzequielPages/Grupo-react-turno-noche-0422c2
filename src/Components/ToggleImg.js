import React from 'react'
import { ThemeContext } from './ThemeContext'
import Logo1 from "..//asset/logo1.png";
import Logo2 from "..//asset/logo23.png";

const ToggleImg = () => {
    const { theme, setTheme } = React.useContext(ThemeContext)

    return (
        <div>
            {theme === 'dark' ? (
                 <img src={Logo2} alt="logo" width={150} />
            ) : (
                <img src={Logo1} alt="logo" width={150} />
            )}
        </div>
    )
}

export default ToggleImg