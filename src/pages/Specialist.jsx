import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

// import ordinator from "../images/ordinator.jpg";
import "./Specialist.css";

export default function ActionAreaCard() {
  return (
    <div>
      <div className="logo">
        <h1>Наши специалисты</h1>
      </div>
      <div className="products">
        <Card sx={{ maxWidth: 500 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="340"
              image="https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-over-white-background_1368-5790.jpg?w=2000"
              alt="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ textAlign: "center" }}
              >
                Усеналиев Чолпонбек Эркинбекович
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ textAlign: "center" }}
              >
                Врач анестезиолог-реаниматолог
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{}}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="340"
              image="https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-over-white-background_1368-5790.jpg?w=2000"
              alt="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ textAlign: "center" }}
              >
                Матиев Ысакбек Рашидович
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ textAlign: "center" }}
              >
                Врач анестезиолог-реаниматолог
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{}}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="340"
              image="https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-over-white-background_1368-5790.jpg?w=2000"
              alt="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ textAlign: "center" }}
              >
                Тынчтыкбеков Талант Тынчтыкбекович{" "}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ textAlign: "center" }}
              >
                Врач анестезиолог-реаниматолог
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{}}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="340"
              image="https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-over-white-background_1368-5790.jpg?w=2000"
              alt="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ textAlign: "center" }}
              >
                Жаманкулова Фарида Ахмеджановна
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ textAlign: "center" }}
              >
                Заведующая отделением Врач анестезиолог-реаниматолог
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{}}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="340"
              image="https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-over-white-background_1368-5790.jpg?w=2000"
              alt="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ textAlign: "center" }}
              >
                Исаева Айгерим Сапаргалиевна{" "}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ textAlign: "center" }}
              >
                Врач анестезиолог-реаниматолог
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{}}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="340"
              image="https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-over-white-background_1368-5790.jpg?w=2000"
              alt="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ textAlign: "center" }}
              >
                Ишембиева Даяна Куванычпековна{" "}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ textAlign: "center" }}
              >
                Клинический ординатор АиР
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{}}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="340"
              image="https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-over-white-background_1368-5790.jpg?w=2000"
              alt="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ textAlign: "center" }}
              >
                Мусаев Алишер Дамирович{" "}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ textAlign: "center" }}
              >
                Клинический ординатор АиР{" "}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{}}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="340"
              image="https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-over-white-background_1368-5790.jpg?w=2000"
              alt="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ textAlign: "center" }}
              >
                Умиров Чынгыз рахматович{" "}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ textAlign: "center" }}
              >
                Клинический ординатор АиР{" "}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{}}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="340"
              // image={ordinator}
              alt="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ textAlign: "center" }}
              >
                Мамбетакунов Жолдош Алмазбекович{" "}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ textAlign: "center" }}
              >
                Клинический ординатор АиР{" "}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{}}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="340"
              image="https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-over-white-background_1368-5790.jpg?w=2000"
              alt="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ textAlign: "center" }}
              >
                Урбаев Эржан Эрланбекович{" "}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ textAlign: "center" }}
              >
                Клинический ординатор АиР{" "}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
}
