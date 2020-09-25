import React from "react";
import Input from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useEditPageStyles } from "../../helpers/styles";
import { Typography } from "@material-ui/core";

const Edit = ({ data }) => {
  const classes = useEditPageStyles();

  return (
    <form>
      <div className={classes.resetContainer}>
        <div className={classes.resetSubContainer}>
          <img
            className={classes.resetImage}
            src={data.profile_image}
            alt={data.username}
          />
          <div>
            <Typography variant="h6">{data.username}</Typography>
            <Button
              className={classes.changeProfileImg}
              size="small"
              color="primary"
              variant="text"
            >
              Change Profile Photo
            </Button>
          </div>
        </div>
        <div>
          <Input
            variant="outlined"
            size="small"
            fullWidth
            placeholder="Name"
            className={classes.inputWhite}
          />
        </div>
        <div>
          <Input
            variant="outlined"
            size="small"
            fullWidth
            placeholder="Username"
            className={classes.inputWhite}
          />
        </div>
        <div>
          <Input
            multiline
            rowsMax={5}
            rows={5}
            variant="outlined"
            size="small"
            fullWidth
            placeholder="Bio"
            className={classes.inputWhite}
          />
        </div>
        <div>
          <Input
            variant="outlined"
            size="small"
            fullWidth
            placeholder="Email"
            className={classes.inputWhite}
          />
        </div>
        <div>
          <Input
            variant="outlined"
            size="small"
            fullWidth
            placeholder="Phone Number"
            className={classes.inputWhite}
          />
        </div>
        <div>
          <Input
            variant="outlined"
            size="small"
            fullWidth
            placeholder="Gender"
            className={classes.inputWhite}
          />
        </div>
        <div className={classes.Button}>
          <Button type="submit" color="primary" variant="contained">
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
};

export default Edit;
