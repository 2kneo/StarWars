import React from "react";
import style from "./Loading.module.scss";

const Loading = props => {
  return (
    <div className="text-center">
      <div className={style.fix_loading}>
        <div className={style.lds_ripple}>
          <div></div>
          <div></div>
        </div>
      </div>
      <p>Loading...</p>
    </div>
  );
};

export default Loading;
