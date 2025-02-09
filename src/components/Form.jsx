import React, { useEffect, useRef, useState } from "react";

import {
  Box,
  Typography,
  TextField,
  Button,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import { data } from "../data.js";

const wilayaInfo = [
  { name: "A Coruña" },
  { name: "Álava" },
  { name: "Albacete" },
  { name: "Alicante" },
  { name: "Almería" },
  { name: "Asturias" },
  { name: "Ávila" },
  { name: "Badajoz" },
  { name: "Balears" },
  { name: "Barcelona" },
  { name: "Burgos" },
  { name: "Cáceres" },
  { name: "Cádiz" },
  { name: "Cantabria" },
  { name: "Castellón" },
  { name: "Ciudad Real" },
  { name: "Córdoba" },
  { name: "Cuenca" },
  { name: "Guipúzcoa" },
  { name: "Girona" },
  { name: "Granada" },
  { name: "Guadalajara" },
  { name: "Huelva" },
  { name: "Huesca" },
  { name: "Jaén" },
  { name: "La Rioja" },
  { name: "León" },
  { name: "Lleida" },
  { name: "Lugo" },
  { name: "Madrid" },
  { name: "Málaga" },
  { name: "Murcia" },
  { name: "Navarra" },
  { name: "Ourense" },
  { name: "Palencia" },
  { name: "Pontevedra" },
  { name: "Salamanca" },
  { name: "Segovia" },
  { name: "Sevilla" },
  { name: "Soria" },
  { name: "Tarragona" },
  { name: "Teruel" },
  { name: "Toledo" },
  { name: "Valencia" },
  { name: "Valladolid" },
  { name: "Vizcaya" },
  { name: "Zamora" },
  { name: "Zaragoza" },
];

export default function Form({ id }) {
  const sendNotification = async (newOrder) => {
    const url = `https://api.telegram.org/bot${"7808946507:AAH0OwNAaL15AAsouO602jhC8qHHU7PcWbE"}/sendMessage`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: 5591540987,
          text: `
<b>${newOrder.msg}</b>

`,
          parse_mode: "HTML",
        }),
      });

      if (response.ok) {
        console.log("Notification sent successfully!");
      } else {
        console.error("Failed to send notification:", response.statusText);
      }
    } catch (error) {
      console.error("Error sending notification:", error);
    }
  };

  const [btnDisebled, setBtnDisebled] = useState(false);

  const [purchaise, setPurchaise] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [wilaya, setWilaya] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [modelColr, setModelColr] = useState("");
  const [modelSize, setModelSize] = useState("");
  const [fakeBtn, setFakeBtn] = useState(false);
  const [correctNumber, setCorrectNumber] = useState(false);

  const { price, delevery } = data.filter((item) => item.id === id)[0];

  const handleSubmitOrder = async (e) => {
    e.preventDefault();

    setBtnDisebled(true);

    try {
      const data = new FormData();
      data.append(
        "date",
        `${new Date().getDate()}/${
          new Date().getMonth() + 1
        } - ${new Date().getHours()}H : ${new Date().getMinutes()}M`
      );

      data.append("product", document.getElementById("title")?.innerHTML);
      data.append("name", name);
      data.append("phone", `${phone}`);
      data.append("wilaya", wilaya);
      data.append("city", city);
      data.append("zipcode", zipCode);
      data.append("quantity", quantity.toString());
      data.append("prix", `${price} / ${delevery} / ${price + delevery}`);

      await fetch(
        "https://script.google.com/macros/s/AKfycbyeyChCTIKVL0GO44S5YVikOUrqF_Kg3a1MrKrS9QIQQU5-W8ZMHVNUOxRdIzvn98ry/exec",
        {
          method: "POST",
          body: data,
        }
      );

      setBtnDisebled(false);

      setPurchaise(true);
      window.scrollTo({
        top: 500,
        behavior: "smooth", // Smooth scrolling animation
      });
      const newOrder = {
        msg: `*New Order Received!* ${price + delevery}`,
      };

      localStorage.setItem(
        "makeOrder",
        JSON.stringify({
          value: 1,
          expire: new Date().getTime() + 15 * 60 * 60 * 1000,
        })
      );

      sendNotification(newOrder);
    } catch (error) {
      console.log(error);
    }
  };
  //console.log(window.location.href[window.location.href.length - 1]);

  return (
    <Box>
      {purchaise ? (
        <Box margin={"50px 0"}>
          <Typography sx={{ fontSize: "32px", textAlign: "center" }}>
            Tu pedido ha sido realizado con éxito. Te contactaremos pronto para
            confirmar tu pedido.
          </Typography>
          <Typography sx={{ fontSize: "32px", textAlign: "center" }}>
            ¡Gracias! 😊
          </Typography>
        </Box>
      ) : (
        <form
          style={{
            border: "3px rgba(107, 107, 224, 0.623) solid",
            borderRadius: "8px",
            padding: "7px",
            marginTop: "10px",
            marginBottom: "10px",
          }}
          onSubmit={handleSubmitOrder}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <TextField
              required
              sx={{
                width: "49%",
                marginBottom: "10px",
                "@media(max-width:700px)": {
                  width: "100%",
                },
              }}
              placeholder={"Nombre completo"}
              label={"Nombre completo"}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              required
              type="number"
              sx={{
                width: "49%",
                marginBottom: "10px",
                "@media(max-width:700px)": {
                  width: "100%",
                },
              }}
              placeholder={"Número de teléfono"}
              label={"Número de teléfono"}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <FormControl fullWidth sx={{ marginBottom: "15px" }}>
              <InputLabel>{"provincia"}</InputLabel>
              <Select
                sx={{ direction: "ltr" }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={wilaya}
                label="Wilaya"
                onChange={(e) => setWilaya(e.target.value)}
              >
                {wilayaInfo.map((item, index) => {
                  return (
                    <MenuItem
                      required
                      sx={{ direction: "ltr" }}
                      key={index}
                      value={item.name}
                    >
                      {item.name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <TextField
              required
              sx={{
                width: "49%",
                marginBottom: "10px",
                "@media(max-width:700px)": {
                  width: "100%",
                },
              }}
              placeholder={"Ciudad"}
              label={"Ciudad"}
              onChange={(e) => setCity(e.target.value)}
            />
            <TextField
              required
              type="number"
              sx={{
                width: "49%",
                marginBottom: "10px",
                "@media(max-width:700px)": {
                  width: "100%",
                },
              }}
              placeholder={"código postal"}
              label={"código postal"}
              onChange={(e) => setZipCode(e.target.value)}
            />
          </Box>
          <Box
            sx={{
              padding: "15px",
              marginTop: "12px",
              marginBottom: "12px",
              width: "100%",
              backgroundColor: "#dbeafe",
              borderRadius: "12px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Custom shadow
            }}
          >
            <Box
              sx={{
                direction: "rtl",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <Typography sx={{ fontWeight: "bold", fontSize: "22px" }}>
                {price}
              </Typography>
              <Typography sx={{ fontWeight: "bold", fontSize: "22px" }}>
                {"Precio del producto"}
              </Typography>
            </Box>
            <Box
              sx={{
                direction: "rtl",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <Typography sx={{ fontWeight: "bold", fontSize: "22px" }}>
                {quantity}
              </Typography>
              <Typography sx={{ fontWeight: "bold", fontSize: "22px" }}>
                {"Cantidad"}
              </Typography>
            </Box>
            <Box
              sx={{
                direction: "rtl",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <Typography
                id="priceDelevery"
                sx={{ fontWeight: "bold", fontSize: "22px" }}
              >
                {quantity === 1 ? delevery : 0}
              </Typography>
              <Typography sx={{ fontWeight: "bold", fontSize: "22px" }}>
                {"Precio de envío"}
              </Typography>
            </Box>
            <Box
              sx={{
                direction: "rtl",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <Box display={"flex"} gap={"6px"} justifyContent={"flex-start"}>
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
                <Typography
                  id="price"
                  sx={{
                    fontWeight: "bold",
                    fontSize: "32px",
                    color: "rgb(135 96 161)",
                  }}
                >
                  {quantity === 1
                    ? +quantity * price + delevery
                    : +quantity * price}{" "}
                </Typography>
              </Box>

              <Typography sx={{ fontWeight: "bold", fontSize: "22px" }}>
                {"Total"}
              </Typography>
            </Box>
          </Box>
          <Box
            flexDirection={"row"}
            sx={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "2px",
            }}
          ></Box>

          <Box
            sx={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Button
              disabled={btnDisebled}
              sx={{
                fontWeight: "bold",
                width: "55%",
                margin: "8px 2px",
                color: "#000",
                backgroundColor: "#dbeafe",
                "&:hover": {
                  backgroundColor: "#dbeafe",
                },
              }}
              variant="contained"
              type="submit"
            >
              {"Comprar ahora"}
            </Button>
            <Box
              sx={{
                width: "45%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderRadius: "15px ",
                padding: "15px",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  fontWeight: "bold",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  color: "#000",
                  backgroundColor: "#dbeafe",
                  "&:hover": {
                    backgroundColor: "#dbeafe",
                  },
                  marginTop: "0px",
                  padding: "8px 15px",
                }}
              >
                <Typography
                  sx={{ fontWeight: "bold" }}
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </Typography>
                <Typography sx={{ fontWeight: "bold" }}>{quantity}</Typography>
                <Typography
                  sx={{ fontWeight: "bold" }}
                  onClick={() => {
                    if (quantity === 1) {
                      setQuantity(quantity);
                    } else {
                      setQuantity(quantity - 1);
                    }
                  }}
                >
                  -
                </Typography>
              </Button>
            </Box>
          </Box>
        </form>
      )}
    </Box>
  );
}
