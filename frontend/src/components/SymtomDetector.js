import React from "react";
import "../styles/App.css";
import { Card, CardContent, Typography, CardMedia, Grid } from "@mui/material";
import appoint from "../images/tb.jpg";
import news from "../images/bone.jpg";
import monitor from "../images/mut.jpg";

export default function SYMPTOMDETECT() {
  const handleCardClick = () => {
    window.location.href = "http://localhost:8000";
  };
  return (
    <div className="container">
      <Grid item xs={12}>
        <Card sx={{ opacity: "93%", maxWidth: 900, margin: "0 auto" }}>
          <CardContent>
            <Typography variant="h4">symptoms Detector</Typography>
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                sm={4}
                onClick={handleCardClick}
                style={{ cursor: "pointer" }}
              >
                <Card>
                  <CardMedia
                    component="img"
                    height="200"
                    image={appoint}
                    alt="feature1"
                  />
                  <CardContent>
                    <Typography variant="h5">Tuberculosis Detector</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Card>
                  <CardMedia
                    component="img"
                    height="200"
                    image={monitor}
                    alt="feature3"
                  />
                  <CardContent>
                    <Typography variant="h5">Urine Test</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Card>
                  <CardMedia
                    component="img"
                    height="200"
                    image={news}
                    alt="feature2"
                  />
                  <CardContent>
                    <Typography variant="h5">Bone Injury Test</Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </CardContent>
          <div className="card-footer text-center"></div>
        </Card>
      </Grid>
    </div>
  );
}
