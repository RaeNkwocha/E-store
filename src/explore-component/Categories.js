import {
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";

import "../explore-css/explore.css";
import Button from "@mui/material/Button";

import SimpleBottomNavigation from "../component/Bottomnav";
import { Link } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <>
      <section className="explore-flex-3">
        {categories &&
          categories.map((item) => {
            return (
              <Link
                style={{ textDecoration: "none" }}
                to={`/explore/${item.idMeal}`}
              >
                <div
                  key={item.idMeal}
                  sx={{ maxWidth: 345 }}
                  style={{ height: "400px" }}
                >
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="200"
                    image={item.strMealThumb}
                    // style={{ width: "350px" }}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      style={{ fontSize: "1.2rem" }}
                      component="div"
                    >
                      {item.strMeal}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </div>
              </Link>
            );
          })}
      </section>
      {/* </section>
      </section> */}

      <div className="bottom-nav">
        <SimpleBottomNavigation></SimpleBottomNavigation>
      </div>
    </>
  );
};

export default Categories;
