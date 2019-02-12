import React from "react";

// The Header creates links that can be used to navigate
// between routes.
const Popups = () => (
    <div>
    <div id='userMarket_popup' className="popup">
    <b>User Market</b><br></br><br></br>
    Please choose your default user market:
    <div className="selectWrapper">
        <select className="selectBox selectBoxMarket" name="market" id="cboMarket_popup">
            <option>Static Sweden</option>
            <option>France</option>
        </select>

    </div>
    <div>
        <button type="button" className='grey' id='btnUserMarketOK'>OK</button>&nbsp;
    </div>
</div>


<div id='login_popup'>
    <div className='label'>Welcome to</div>
    <div className='title'>Media Library</div>
    <table>
        <tbody>

        <tr className='fluffy'>
            <td>
                <div className='label'>Username:</div>
            </td>
            <td className='center' width='50%'><input type="text" name="username"></input></td>
            <td>&nbsp;</td>
        </tr>
        <tr className='fluffy'>
            <td>
                <div className='label'>Password:</div>
            </td>
            <td className='center'><input type="password" name="password"></input></td>
            <td>
                <button type="button" className='green' id='btnLogin'>Enter</button>
            </td>
        </tr>
        <tr className='fluffy'>
            <td>&nbsp;</td>
            <td className=''>
                <button type="button" className='grey' id='btnShowForgotPassword'>Reset password</button>
            </td>
        </tr>
        <tr className='fluffy'>
            <td>&nbsp;</td>
            <td className=''>
                <button type="button" className='grey' id='btnOpenRequestAccount'>Request account</button>
            </td>
            <td>&nbsp;</td>
        </tr>
        </tbody>

    </table>
    <br></br>
</div>

<div id='licens_popup' className="popup">
    <b>License agreement</b><br></br><br></br>
    The intellectual property rights in and to the enclosed digital images are the sole property of Inter IKEA
    Systems
    B.V.
    Ordered images from IKEA Image House are for one time only use. After using the digital images for the purpose
    intended, they should be deleted from any storage media.
    It is not permitted to store the digital images in order to use them on later occasions. A new order must then
    be
    placed with the Inter IKEA Systems B.V. IKEA Image House.<br></br>
    <br></br>
    As a user of the IKEA Image House I am aware there are some images in the database who might not yet been
    published.
    I understand that publishing before this date is not allowed without permission from Inter IKEA Systems B.V.<br></br>
    <div className='center'>
        <button type="button" className='grey' id='btnLicenseOK'>I agree</button>&nbsp;
        <button type="button" className='grey' id='btnLicenseCancel'>I disagree</button>
    </div>
</div>

<div id='requestAccount_popup' className="popup">
    <b>Request account</b><br></br><br></br>
    <div id="arGDPR" className="info"></div>
    <br></br>
    <table>
        <tbody>
        <tr>
            <td>Username :</td>
            <td><input type="text" name="arUsername" className="w200"></input></td>
        </tr>
        <tr>
            <td>Password :</td>
            <td><input type="password" name="arPassword" className="w200"></input>
                <div id="info">&nbsp</div>
            </td>
        </tr>
        <tr>
            <td>Email :</td>
            <td><input type="text" name="arEmail" className="w200"></input></td>
        </tr>
        <tr>
            <td>First name :</td>
            <td><input type="text" name="arFirstname" className="w200"></input></td>
        </tr>
        <tr>
            <td>Last name :</td>
            <td><input type="text" name="arLastname" className="w200"></input></td>
        </tr>

    <tr><td>Company :</td><td><input type="text" name="arCompany" className="w200"></input></td></tr>
    <tr><td>Address :</td><td><input type="text" name="arAddress" className="w300"></input></td></tr>
    <tr><td>Zip code :</td><td><input type="text" name="arZipcode" className="w100"></input></td></tr>
    <tr><td>City :</td><td><input type="text" name="arCity" className="w200"></input></td></tr>
    <tr><td>Country :</td><td><input type="text" name="arCountry" className="w200"></input></td></tr>
    <tr><td>Phone number :</td><td><input type="text" name="arPhone" className="w200"></input></td></tr>

        </tbody>


    </table>
    <br></br>
    <div className='right'>
        <button type="button" className='green' id='btnRaSend'>Send request</button>&nbsp;
        <button type="button" className='grey' id='btnRaCancel'>Cancel</button>&nbsp;
    </div>
</div>

<div id='generic_popup' className="popup"></div>

<div id='wait' className="popup">
    <div className="meter animate">
        <span><span></span></span>
    </div>
    <div className='title'>Loading. Please wait...</div>
    <br></br>
</div>
</div>

);

export default Popups;
