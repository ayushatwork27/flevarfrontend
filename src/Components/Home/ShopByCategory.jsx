import React, { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
function MasonryGallary() {
  const data = [
    {
      img: "/assets/images/category1.png",
      rowspan: "w-2",
      colspan: "h-2",
    },
    {
      img: "/assets/images/category2.png",
      rowspan: "w-2",
      colspan: "h-1",
    },
    {
      img: "/assets/images/category3.png",
      rowspan: "w-2",
      colspan: "h-1",
    },
    {
      img: "/assets/images/category4.png",
      rowspan: "w-2",
      colspan: "h-1",
    },
    {
      img: "/assets/images/category5.png",
      rowspan: "w-2",
      colspan: "h-1",
    },
    {
      img: "/assets/images/category2.png",
      rowspan: "w-2",
      colspan: "h-1",
    },
    {
      img: "/assets/images/category3.png",
      rowspan: "w-2",
      colspan: "h-1",
    },
    {
      img: "/assets/images/category4.png",
      rowspan: "w-2",
      colspan: "h-2",
    },
    {
      img: "/assets/images/category5.png",
      rowspan: "w-2",
      colspan: "h-1",
    },
    {
      img: "/assets/images/category1.png",
      rowspan: "w-2",
      colspan: "h-2",
    },

    // {
    //   img: "/assets/images/category3.png",
    //   rowspan: "w-2",
    //   colspan: "h-1",
    // },
    // {
    //   img: "/assets/images/category4.png",
    //   rowspan: "w-2",
    //   colspan: "h-1",
    // },
    // {
    //   img: "/assets/images/category5.png",
    //   rowspan: "w-2",
    //   colspan: "h-1",
    // },
  ];

  const [openModal, setopenModal] = useState(false);
  const [getimage, setImage] = useState();
  const getImage = (img) => {
    setImage(img);
    setopenModal(!openModal);
  };
  return (
    <div>
      <div className={openModal ? "modal open" : "modal"}>
        <div className="blowupimage-container">
          <img src={getimage} alt={getimage} />
          <CloseIcon
            className="close-icon"
            onClick={() => setopenModal(false)}
          />
        </div>
      </div>
      <div className="grid">
        {data.map((val, i) => {
          return (
            <div
              className={`single-grid grid-item ${
                true ? `${val.rowspan} ${val.colspan}` : ""
              } `}
              key={i}
              onClick={() => getImage(val.img)}
            >
              <img src={val.img} alt={val.img} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MasonryGallary;
