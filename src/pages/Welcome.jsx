import React from "react";
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import { loginRequest } from "../authConfig";
import './Home.css';
import { Link } from 'react-router-dom'

export const WelcomePage = () => {
    const authRequest = {
        ...loginRequest
    };

    return (
        <>
        <AuthenticatedTemplate>
            <div className="Home">
                <div className="Welcome">
                    Welcome to Smart Office.
                </div>
                <div className="text">Find vacant huddle nearby, at one click (bookmark us?)</div>
                <div className="Buildings">
                    <div className="HRHWrap">
                        <h2 className="name">Harindhorn building</h2>
                        <div className="floors">
                            <Link className="HRH" to="/hrh?floor=3">3<sup>rd</sup> Floor</Link>
                        </div>
                        <div className="floors">
                            <Link className="HRH" to="/">6<sup>th</sup> Floor</Link>
                        </div>
                        <div className="floors">
                            <Link className="HRH" to="/">8<sup>th</sup> Floor</Link>
                        </div>
                        <div className="floors">
                            <Link className="HRH" to="/hrh?floor=11">11<sup>th</sup> Floor</Link>
                        </div>
                        <div className="floors">
                            <Link className="HRH" to="/hrh?floor=12">12<sup>th</sup> Floor</Link>
                        </div>

                    </div>
                    <div className="QHLWrap">
                        <h2 className="name">Q House Lumpini Building</h2>
                        <div className="floors">
                            <Link className="QHL" to="/">21<sup>st</sup> Floor</Link>
                        </div>
                    </div>
                    <div className="VTTWrap">
                        <h2 className="name">Vibulthani Tower</h2>
                        <div className="floors">
                            <Link className="VTT" to="/">21<sup>st</sup> Floor</Link>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedTemplate>
        <UnauthenticatedTemplate>
            <div className="Welcome">
                Please sign in.
            </div>
        </UnauthenticatedTemplate>
        </>
      )
};