import React from "react";
import "./App.css";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Box from "@material-ui/core/Box";

const Pricing = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <Box width="200px" marginX="20px">
        <Card>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Free
            </Typography>
          </CardContent>
          <CardActions>
            <Button>Sign up</Button>
          </CardActions>
        </Card>
      </Box>
      <Box width="200px" marginX="20px">
        <Card>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Free
            </Typography>
          </CardContent>
          <CardActions>
            <Button>Sign up</Button>
          </CardActions>
        </Card>
      </Box>
      <Box width="200px" marginX="20px">
        <Card>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Free
            </Typography>
          </CardContent>
          <CardActions>
            <Button>Sign up</Button>
          </CardActions>
        </Card>
      </Box>
    </Box>
  );
};

export default Pricing;
