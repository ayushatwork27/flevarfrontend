import React, { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
import CmnButton from "../../components/CmnButton/CmnButton";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { Link } from "react-router-dom";
import { Box } from "@material-ui/core";

function MasonryGallary({ categories }) {
    const data = [
        {
            img: "/assets/images/category1.png",
            rowspan: "w-2",
            colspan: "h-2",
            btntitle: "Chocolate Cake",
        },
        {
            img: "/assets/images/category2.png",
            rowspan: "w-2",
            colspan: "h-1",
            btntitle: "Red Velvet",
        },
        {
            img: "/assets/images/category3.png",
            rowspan: "w-2",
            colspan: "h-1",
            btntitle: "Strawberry",
        },
        {
            img: "/assets/images/category4.png",
            rowspan: "w-2",
            colspan: "h-1",
            btntitle: "Mango Cake",
        },
        {
            img: "/assets/images/category5.png",
            rowspan: "w-2",
            colspan: "h-1",
            btntitle: "Black Forest",
        },
        {
            img: "/assets/images/category2.png",
            rowspan: "w-2",
            colspan: "h-1",
            btntitle: "Red Velvet",
        },
        {
            img: "/assets/images/category3.png",
            rowspan: "w-2",
            colspan: "h-1",
            btntitle: "Strawberry",
        },
        {
            img: "/assets/images/category4.png",
            rowspan: "w-2",
            colspan: "h-2",
            btntitle: "Mango Cake",
        },
        {
            img: "/assets/images/category5.png",
            rowspan: "w-2",
            colspan: "h-1",
            btntitle: "Black Forest",
        },
        {
            img: "/assets/images/category1.png",
            rowspan: "w-2",
            colspan: "h-2",
            btntitle: "Mango Cake",
        }
    ];

    const [openModal, setopenModal] = useState(false);
    const [getimage, setImage] = useState();
    const getImage = (img) => {
        setImage(img);
        setopenModal(!openModal);
    };
    return (
        <div>
            <div className="grid">
                {data.map((val, i) => {
                    return (
                        <div
                            className={`single-grid grid-item ${true ? `${val.rowspan} ${val.colspan}` : ""
                                } `}
                            key={i}
                            onClick={() => getImage(val.img)}
                        >
                            <img src={val.img} alt={val.img} />
                            <Box
                                className="category-image-with-btn"
                            >
                                <CmnButton
                                    className="cmn-categotybtn"
                                    variant="contained"
                                    endIcon={<ChevronRightIcon />}
                                    btntitle={val.btntitle}
                                />
                            </Box>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default MasonryGallary;
