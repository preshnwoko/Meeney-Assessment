import { useState } from "react"

const SwitchAccount = () =>{
    const [switchedOption, setSwitchedOption] = useState('social')
    const notificationCount = '50+'
    return(
        <div className='first'>
            <div className='firstTitle'>
                <p>
                    Switch Account
                </p>
            </div>
            <div className="switchOptions">
                <div onClick={()=>setSwitchedOption('social')} className={`switchOption one ${switchedOption==='social'&&'active'}`}>
                    Social
                    <span className="notification">
                        {notificationCount}
                    </span>
                </div>
                <div onClick={()=>setSwitchedOption('business')} className={`switchOption two ${switchedOption==='business'&&'active'}`}>
                    Business
                    <span className="notification">
                        {notificationCount}
                    </span>
                </div>
            </div>
        </div>
    )
}
export default SwitchAccount