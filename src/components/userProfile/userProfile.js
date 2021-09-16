import React, { Component } from 'react';
import "./userProfile.css";
import Nis from "./../../images/nis.jpg";
class userProfile extends Component 
{
    toggleInfo = (e) => {
        e.target.parentNode.classList.toggle("open");
      };
    render() {
        return (
            <div className="main__userprofile">
            <div className="profile__card user__profile__image">
              <div className="profile__image">
                <img src={Nis} />
              </div>
              <h4>Nishar Ramesh</h4>
              <p>Software Engineer</p>
            </div>
            <div className="profile__card">
              <div className="card__header" onClick={this.toggleInfo}>
                <h4>Information</h4>
                <i className="fa fa-angle-down"></i>
              </div>
              <div className="card__content">
                This is Nishar..Working in valuebound..
                email:nishar.r@valuebound.com
                phone:8248948248
              </div>
            </div>
          </div>
        );
    }
}

export default userProfile;