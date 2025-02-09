import { Box, Divider, Rating, Typography } from "@mui/material";
import Form from "./components/Form";
import { data } from "./data";

function Kimono() {
  const id = "l-2";
  const {
    price,
    name,
    descImag1,
    descImag2,
    descImag3,
    descImag4,
    themImg,
    imageRev,
  } = data.filter((item) => item?.id === id)[0];
  return (
    <Box>
      <Box
        sx={{
          padding: "12px",
          backgroundColor: "rgb(135 96 161)",
          fontWeight: "bold",
          textAlign: "center",
          color: "white",
        }}
      >
        ¡Bienvenidos a la tienda Jawaher!
      </Box>

      <Divider />

      <Box
        padding={"12px 250px"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"start"}
        flexWrap={"wrap-reverse"}
        sx={{
          "@media(max-width:1600px)": {
            padding: "12px 180px",
          },
          "@media(max-width:1300px)": {
            padding: "12px 120px",
          },
          "@media(max-width:1100px)": {
            padding: "12px 80px",
          },
          "@media(max-width:900px)": {
            padding: "12px 5px",
          },
        }}
      >
        <Box
          sx={{
            width: "49%",
            padding: "10px",
            backgroundColor: "#eee",
            borderRadius: "12px",
            "@media(max-width:900px)": {
              width: "100%",
            },
          }}
        >
          <Typography
            id="title"
            sx={{
              textAlign: "left",
              fontWeight: "bold",
              fontSize: "29px",
              marginBottom: "8px",
            }}
          >
            {name}
          </Typography>
          <Typography sx={{ marginBottom: "2px", textAlign: "left" }}>
            <Rating value={5} readOnly />
          </Typography>
          <Box display={"flex"} gap={"6px"} justifyContent={"flex-start"}>
            <Typography
              id="price"
              sx={{
                fontWeight: "bold",
                fontSize: "32px",
                color: "rgb(135 96 161)",
              }}
            >
              {price}
            </Typography>
            <Typography
              sx={{
                fontWeight: "bold",
                marginTop: "6px",
                fontSize: "26px",
                color: "rgb(135 96 161)",
              }}
            >
              EURO
            </Typography>
          </Box>
          <Form id={id} />
          <Divider />

          <Box marginTop={"50px"}>
            <Box marginTop={"50px"} width={"100%"}>
              <img
                src={descImag1}
                alt=""
                style={{ margin: "8px 0", width: "100%", objectFit: "cover" }}
              />
            </Box>
            <Box marginTop={"50px"} width={"100%"}>
              <img
                src={descImag2}
                alt=""
                style={{ margin: "8px 0", width: "100%", objectFit: "cover" }}
              />
            </Box>
            <Box marginTop={"50px"} width={"100%"}>
              <img
                src={descImag3}
                alt=""
                style={{ margin: "8px 0", width: "100%", objectFit: "cover" }}
              />
            </Box>
            <Box marginTop={"50px"} width={"100%"}>
              <img
                src={descImag4}
                alt=""
                style={{ margin: "8px 0", width: "100%", objectFit: "cover" }}
              />
            </Box>
            <Box marginTop={"50px"} width={"100%"}>
              <img
                src={imageRev}
                alt=""
                style={{ margin: "8px 0", width: "100%", objectFit: "cover" }}
              />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            position: "sticky",
            top: "50px",
            width: "49%",
            "@media(max-width:900px)": {
              width: "100%",
              marginBottom: "20px",
              position: "unset",
            },
          }}
        >
          <Box marginBottom={"15px"}>
            <img
              id="mainImg"
              style={{ width: "100%", objectFit: "cover", height: "100%" }}
              src={themImg}
              alt="img"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Kimono;
