import React, { Component, useState } from "react";
import ColorLine from "./ColorLine";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import { useHistory } from "react-router-dom";

export default function GetAccess() {

	const [code, setCode] = useState('');
	const history = useHistory();

	const onAccessClicked = () => {
		if(code === '1234321') {
			localStorage.setItem('passed', 'true');
			history.push('/home');
		}
	}

	return (<Fade bottom delay={500}>
		<div className="get-access-div">
			<img className={'get-access-logo'} src="imgs/logo.png" alt="Logo" />
		</div>
		<div className="get-access-side">
			<div className="get-access-title">
				<span className="d-font-bold d-white">Exclusive Real Estate Investment</span><span
					className="d-font-bold d-highlight">.</span>
			</div>
			<div className="get-access-content d-font-bold d-white">
				Revolutionizing <span className="d-font-book d-highlight">property ownership</span><br />
				Powered by <span className="d-font-book d-highlight">Blockchain</span><br />
				Rental Income Up to <span className="d-font-book d-highlight">12% Yield</span><br />
			</div>
			<div style={{ width: "70px", marginTop: "25px" }}>
				<ColorLine />
			</div>
			<div style={{ marginTop: 20, marginBottom: 30 }}>
				<input className="get-access-invitation d-font-book" value={code} onChange={val => setCode(val.target.value)} placeholder={'Invitation code'} />
				<Button onClick={onAccessClicked} className="get-access-btn d-font-black d-text-24">
					Get me access
				</Button>
			</div>
		</div>
	</Fade>)

}
