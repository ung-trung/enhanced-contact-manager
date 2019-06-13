import React from 'react';

const About = () => {
  return (
    <>
      <h1 className="header">About this App</h1>
      <p>This is a full stack MERN app to manage contacts</p>
      <p>
        <strong>Version: </strong> 1.0.0
      </p>
      <p>
        If you feel lazy to register for a new account. you can just use the
        default account:
      </p>
      <div className="ui header label">admin@admin.com</div>
      <div className="ui fade reveal">
        <div className="visible content">
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/31Gj4aaf4GL.jpg"
            className="ui small image"
            alt=""
          />
        </div>
        <div className="hidden content">
          <img
            src="https://image.itmedia.co.jp/nl/articles/1812/14/kuro_181214password01.jpg"
            className="ui small image"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default About;
