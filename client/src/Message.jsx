import React from "react";

const Message = ({ name, message, date }) => {
  return (
    <div className='messageBlock'>
      <div className='col s12'>
        <div className='card-panel grey lighten-5 z-depth-1'>
          <div className='row valign-wrapper'>
            <div className='col s2 nameUser'>{name} :</div>
            <div className='col s10'>
              <div className='black-text messageUser'>{message}</div>
            </div>
            <div className='col s2 dateUser'>{date}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Message);
