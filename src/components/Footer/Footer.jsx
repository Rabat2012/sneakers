import React from "react";
import facebook from "../../assets/f_logo.webp";
import instagramm from "../../assets/inst_logo.png";
import telegramm from "../../assets/tg_logo.png";
import visa from "../../assets/visa_logo.png";
import mastercard from "../../assets/mastercard_logo.png";
import paypal from "../../assets/paypal_logo.png";
import american from "../../assets/american_logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <hr />
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}>
        <div>
          <p
            style={{
              fontSize: "25px",
              fontWeight: "bold",
              paddingLeft: "60px",
            }}>
            The Sneaker Shop
          </p>
          <ul style={{ listStyle: "none" }}>
            <li>
              The Sneaker shop is a research laboratory that constantly selects
              the most <br /> exclusive sneakers all over the world. After the
              retail experience
              <br /> of the eponymous stores, The Sneaker Shop
              <br />
              opens its doors to online customers around the world.
            </li>
          </ul>
        </div>
        <div>
          <p
            style={{
              fontSize: "25px",
              fontWeight: "bold",
              paddingLeft: "60px",
            }}>
            Support
          </p>
          <ul style={{ listStyle: "none" }}>
            <li>Sales conditions</li>
            <br />
            <li>Resolution of disputes</li>
            <br />
            <li>Right of withdrawal</li>
            <br />
            <li>Delivery time</li>
          </ul>
        </div>

        <div>
          <p
            style={{
              fontSize: "25px",
              fontWeight: "bold",
              paddingLeft: "60px",
            }}>
            Company
          </p>
          <ul style={{ listStyle: "none" }}>
            <li>About us</li>
            <br />
            <li>Contact us</li>
          </ul>
        </div>
      </div>
      <div>
        <p
          style={{
            fontSize: "25px",
            fontWeight: "bold",
            paddingLeft: "60px",
          }}>
          Follow us
        </p>
        <img
          style={{ paddingLeft: "60px" }}
          src={facebook}
          width={"25px"}
          height={"25px"}
          alt=""
        />
        <img
          style={{ paddingLeft: "15px" }}
          src={instagramm}
          width={"30px"}
          height={"30px"}
          alt=""
        />
        <img
          style={{ paddingLeft: "15px" }}
          src={telegramm}
          width={"35px"}
          height={"35px"}
          alt=""
        />
      </div>
      <div>
        <p style={{ paddingTop: "50px", fontSize: "10px" }}>
          © 2018 GRUPPO PRITELLI. VIA RESPIGHI 54 INT 4 - 47841 CATTOLICA
          (ITALY) P.IVA 02600380402
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
              paddingRight: "50px",
            }}>
            <img src={visa} alt="" width={"50px"} />
            <img
              src={mastercard}
              alt=""
              width={"50px"}
              style={{ marginRight: "20px", marginLeft: "20px" }}
            />
            <img
              src={paypal}
              alt=""
              width={"50px"}
              style={{ marginRight: "20px" }}
            />
            <img src={american} alt="american" width={"50px"} />
          </div>
        </p>
      </div>
    </div>
  );
};

export default Footer;
