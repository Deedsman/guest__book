import React from "react";

const Message = ({ name, message }) => {
  return (
    <div className='row messageBlock'>
      <div className='col s12'>
        <div className='container-user'>
          <div className='row valign-wrapper'>
            <div className='col s2 nameUser'>{name}</div>
            <div className='col s8 messageUser'>
              <div className='messageText'>{message}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Message);
