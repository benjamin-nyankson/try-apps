import React from "react";
import {
  CardHeader,
  Card,
  IconButton,
  CardContent,
  Typography,
} from "@mui/material";
import { DeleteOutlineOutlined } from "@mui/icons-material";
function UserCard({ user, handleDelete }) {
  return (
    <div>
      <Card elevation={4}>
        <CardHeader
          action={
            <IconButton onClick={() => handleDelete(user.id)}>
              <DeleteOutlineOutlined />
            </IconButton>
          }
          title={user.lname}
          subheader={user.fname}
        />
        <CardContent>
          <Typography color="textSecondary">{user.text}</Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default UserCard;
