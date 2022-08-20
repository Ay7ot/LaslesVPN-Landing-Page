import React from 'react';
import WhatWeDoImg from "../../src/assets/lasles2.png"

const WhatWeDo = () => {
    return (
        <>
        <div className='WhatWeDo'>
            <div className="WhatWeDoImg">
                <img src={WhatWeDoImg} />
            </div>
            <div className='WhatWeDoTalk'>
                <h2>
                    We Provide Many Features You Can Use
                </h2>
                <p>
                    You can explore the features that we provide with fun and have their own functions each feature.
                </p>
                <ul>
                    <li>Powerful online protection.</li>
                    <li>Internet without borders.</li>
                    <li>Supercharged VPN</li>
                    <li>No specific time limits.</li>
                </ul>
            </div>
            
        </div>
    </>
    );
}

export default WhatWeDo;
