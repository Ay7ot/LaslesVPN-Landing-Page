import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className='footer-left'>
                <div className='footer-logo'>
                    <img src='lasleslogo.svg'/>
                    <h4>LaslesVPN</h4>
                </div>
                <p className='footer-info'>
                    <span>LaslesVPN</span> is a private virtual network that has unique features and has high security.
                </p>
                <div className='footer-images'>
                    <img src='Facebook.svg'/>
                    <img src='Twitter.svg'/>
                    <img src='Instagram.svg'/>
                </div>
                <p className='copyright'>&copy; 2020LaslesVPN</p>
            </div>

            <div className='footer-right'>
                <table>
                    <tr>
                        <th>Product</th>
                        <th>Engage</th>
                        <th>Earn Money</th>
                    </tr>
                    <tr>
                        <td>Download</td>
                        <td>LaslesVPN?</td>
                        <td>Affliate</td>
                    </tr>
                    <tr>
                        <td>Pricing</td>
                        <td>FAQ</td>
                        <td>Become Partner</td>
                    </tr>
                    <tr>
                        <td>Locations</td>
                        <td>Tutorials</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Server</td>
                        <td>About Us</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Countries</td>
                        <td>Privacy Policy</td>
                        <td></td>
                    </tr>
                </table>
            </div>
        </footer>
    );
}

export default Footer;
