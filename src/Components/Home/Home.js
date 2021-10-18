import React from 'react';
import AboutInfo from './AboutInfo/AboutInfo';
import Banner from './Banner/Banner';
import MemberShip from './MemberShip/MemberShip';
import Progress from './Progress/Progress';

const Home = () => {
    return (
        <div className="">
          <Banner></Banner>
          <Progress></Progress>
          <AboutInfo></AboutInfo>
          <MemberShip></MemberShip>
        </div>
    );
};

export default Home;