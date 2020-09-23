import React from "react";
import Typography from "@material-ui/core/Typography";
import SliderContent from "../shared/SuggestionCard";
import Slider from "react-slick";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";

const CustomSlider = ({ data: users }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <React.Fragment>
      <div style={{ marginBottom: "40px" }}>
        <Typography style={{ fontSize: "16px", color: "#999" }} variant="h6">
          Suggestions For You
        </Typography>
        <Slider
          infinite={true}
          speed={1000}
          slidesToShow={matches ? 1 : 3}
          slidesToScroll={matches ? 1 : 3}
          touchThreshold={100}
          variableWidth={true}
          easing="ease-in-out"
        >
          {users.map((data) => (
            <div key={data.id}>
              <SliderContent data={data} />
            </div>
          ))}
        </Slider>
      </div>
    </React.Fragment>
  );
};
export default CustomSlider;
