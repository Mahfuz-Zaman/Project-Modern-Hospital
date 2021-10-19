import React from 'react';
import pageNotFound from "./../assets/images/pageNotFound.jpg"
import BgThree from "./../assets/images/bg-3.jpg";
const PageNotFound = () => {
    return (
        <div className="text-center" style={{ background: `url(${BgThree})`, backgroundAttachment: "fixed" }}>
            <img width="50%" src={pageNotFound} alt="" />
        </div>
    );
};

export default PageNotFound;