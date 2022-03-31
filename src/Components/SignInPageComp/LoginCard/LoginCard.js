import React from "react";
import "./LoginCard.css";
import { loginUrl } from "../../../Constants/spotifyConst";

export const LoginCard = () => {
    return (
        <div className="login-container">
            <div className="login-container container">
                <img
                    className="spotify-logo"
                    src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
                />
                <div>
                    <a href={loginUrl} className="login-bton">
                     
                        LOGIN IN WITH SPOTIFY
                    </a>
                </div>
            </div>
        </div>
    );
};
