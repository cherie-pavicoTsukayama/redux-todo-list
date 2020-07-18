import React from 'react';
const Link = ({ active, children, onClick }) => {
  let style = "montserrat-400"
  if (active) {
    style = "selected-border montserrat-600 "
  }
  return (
    <div className="col-12">
      <h6
        className={`col pointer my-2 text-center py-2 ${style}`}
        onClick={onClick}
        disabled={active}
      >
        {children}
      </h6>
    </div>

  )
}



export default Link;
