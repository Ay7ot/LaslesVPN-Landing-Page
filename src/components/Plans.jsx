import React from 'react';
import free from '../assets/Free.png'
import standard from '../assets/Standard.png'
import premium from '../assets/Premium.png'

const Plans = () => {
    return (
        <div className='plans'>
            <div className='plans-item free'>
                <img src={free}/>
                <p>Free Plan</p>
                <ul>
                    <li>Unlimited Bandwitch</li>
                    <li>Encrypted Connection</li>
                    <li>No Traffic Logs</li>
                    <li>Works on All Devices</li>
                </ul>
                <h3>Free</h3>
                <button>Select</button>
            </div>
           
            <div className='plans-item nineDollars'>
                <img src={standard}/>
                <p>Standard Plan</p>
                <ul>
                    <li>Unlimited Bandwitch</li>
                    <li>Encrypted Connection</li>
                    <li>Yes Traffic Logs</li>
                    <li>Works on All Devices</li>
                    <li>Connect Anywhere</li>
                </ul>
                <h3>$9 / <span>mo</span></h3>
                <button>Select</button>
            </div>

            <div className='plans-item twelveDollars'>
                <img src={premium}/>
                <p>Premium Plan</p>
                <ul>
                    <li>Unlimited Bandwitch</li>
                    <li>Encrypted Connection</li>
                    <li>No Traffic Logs</li>
                    <li>Works on All Devices</li>
                    <li>Connect Anywhere</li>
                    <li>Get New Features</li>
                </ul>
                <h3>$9 / <span>mo</span></h3>
                <button>Select</button>
            </div>
           
        </div>
    );
}

export default Plans;
