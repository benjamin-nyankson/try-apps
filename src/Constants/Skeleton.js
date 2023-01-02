import React, { useState } from "react";
import { Stack, Skeleton, Container, Grid, Paper } from "@mui/material";

function UiSkeleton() {
  const [skele] = useState(new Array(12).fill(""));

  return (
    <Container>
      <Grid container >
        {skele.map(() => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Paper style={{ margin: "10px", padding:'10px', }} >
                <Stack spacing={1} >
                  <Skeleton
                    variant="circular"
                    width={40}
                    height={40}
                    animation="wave"
                  />
                  <Skeleton width={100}  />
                  <Skeleton variant="text" />
                  <Skeleton
                    variant="rectangular"
                    height={200}
                    animation="wave"
                    fullwidth
                  />
                </Stack>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

export default UiSkeleton;
