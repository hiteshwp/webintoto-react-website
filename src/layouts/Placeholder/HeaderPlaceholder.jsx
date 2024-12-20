import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function HeaderPlaceholder() {
  return (
    <>
      <div className="container-fluid">
        <div className="row py-2">
          <div className="col-md-12">
            <Skeleton height={50} borderRadius="15px"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderPlaceholder;
