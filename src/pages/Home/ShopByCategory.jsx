import CmnButton from "../../components/CmnButton/CmnButton";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { Box } from "@material-ui/core";
import { Link } from "react-router-dom";

function MasonryGallary({ categories }) {
    return (
        <div>
            <div className="grid">
                {categories.map((val, i) => {
                    return (
                        <div
                            className={`single-grid grid-item ${i === 0 ? "w-2 h-2" : "w-2 h-1"} `}
                            key={i}
                        >
                            <img src={val.category_images[0] && val.category_images[0]['url']} alt={val.category_images[0] && val.category_images[0]['name']} />
                            <Box
                                className="category-image-with-btn"
                            >
                                <Link to={`/categories_details/${val.id}`}>
                                    <CmnButton
                                        className="cmn-categotybtn"
                                        variant="contained"
                                        endIcon={<ChevronRightIcon />}
                                        btntitle={val.name}
                                    />
                                </Link>
                            </Box>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default MasonryGallary;
