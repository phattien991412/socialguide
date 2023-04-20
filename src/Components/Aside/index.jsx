import React from "react";
import "./index.scss";
import { BsThreeDots } from "react-icons/bs";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box
} from "@chakra-ui/react";
import {
  HiOutlineUserCircle,
  HiOutlineWrenchScrewdriver
} from "react-icons/hi2";
import { FaBattleNet } from "react-icons/fa";
import { AiOutlineBell } from "react-icons/ai";

const Aside = ({ social, selectSocial }) => {
  return (
    <div data-paint={selectSocial} className="aside">
      <div className="aside_head">
        <p>
          <FaBattleNet />
        </p>
        <p>
          <AiOutlineBell />
        </p>
        <p>
          <HiOutlineUserCircle />
        </p>
      </div>
      <div className="aside_tools">
        <div className="aside_tools_title">
          <h3>
            {" "}
            <span>{social.social}</span> tools
          </h3>
          <p data-paint={selectSocial}>
            <BsThreeDots />
          </p>
        </div>
        <div className="aside_tools_content">
          <Accordion allowToggle allowMultiple>
            {social.tools.map((item) => (
              <AccordionItem
                key={item.tool}
                bgColor={"#fff"}
                marginBottom={"1rem"}
                borderRadius={"16px"}
              >
                <h2>
                  <AccordionButton>
                    <Box as="div" lineHeight={1.25} flex="1" textAlign="left">
                      <Box
                        as="div"
                        display="flex"
                        gap="1rem"
                        alignItems={"center"}
                      >
                        <Box
                          className="aside_icon"
                          data-paint={selectSocial}
                          as="div"
                        >
                          {item.icon}
                        </Box>
                        <Box as="div">
                          <Box as="h4" fontWeight={600} fontSize={"22px"}>
                            {item.tool}
                          </Box>
                          <Box as="span">{item.sub}</Box>
                        </Box>
                      </Box>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      <div className="aside_brands">
        <div className="aside_brands_title">
          <h3>Brands to watch</h3>
          <p data-paint={selectSocial}>
            <BsThreeDots />
          </p>
        </div>
        <div className="aside_brands_content">
          {social.brands.map((item) => (
            <div key={item.brand} className="aside_brands_content_item">
              <div className="img">
                <img src={item.logo} alt="brands" />
              </div>
              <p data-paint={selectSocial}>
                {item.brand}
                <br /> <span>{item.followers}M followers</span>
              </p>
              <p data-paint={selectSocial}>{item.icon}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Aside;
