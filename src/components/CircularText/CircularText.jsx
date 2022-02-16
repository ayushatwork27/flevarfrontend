import React from "react";
import PropTypes from "prop-types";
import "./Circle.css";
function Circle({ text, arc, radius }) {
  const characters = text.split("");
  const degree = arc / characters.length;

  return (
    <h1>
      {characters.map((char, i) => (
        <span
          key={`heading-span-${i}`}
          style={{
            display: "inline-block",
            height: `${radius}px`,
            transform: `rotate(${degree * i - arc / 50}deg)`,
            transformOrigin: `0 ${radius - 2}px 0`,
          }}
        >
          {char}
        </span>
      ))}
    </h1>
  );
}

Circle.propTypes = {
  text: PropTypes.string.isRequired,
  arc: PropTypes.number,
  radius: PropTypes.number,
};

Circle.defaultProps = {
  arc: 120,
  radius: 400,
};

export default Circle;

//   <Box className="wrapper">
//                 <Circle text="GLreetings bfgdff ffdfdf ffhjkjkgkjfkb" arc={360} radius={100} />
//             </Box>
