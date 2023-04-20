import React, { useEffect, useRef, useState } from "react";
import "./index.scss";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  CircularProgress
} from "@chakra-ui/react";
import { BsSearch, BsThreeDots } from "react-icons/bs";

const Main = ({ selectSocial, social, setSeclectSocial }) => {
  const arrSocial = [
    { social: "facebook" },
    { social: "instagram" },
    { social: "linkedin" },
    { social: "twitter" },
    { social: "youtube" }
  ];
  const [wordEnter, setWordEnter] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedItemIndex, setSelectedItemIndex] = useState(-1);
  const [isEnter, setIsEnter] = useState(false)
  const inputRef = useRef(null);

  const handleInputChange = (event) => {
    const newQuery = event.target.value;
    setWordEnter(newQuery);
  };

  useEffect(() => {
    const newFilteredItems = arrSocial.filter((item) => {
      return item.social.toLowerCase().includes(wordEnter.toLowerCase());
    });
    if (wordEnter === "" || isEnter) {
      setFilteredItems([]);
    } else {
      setFilteredItems(newFilteredItems);
    }
    setSelectedItemIndex(-1);
    setIsEnter(false)
  }, [wordEnter]);

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowUp') {
      event.preventDefault();
      if (selectedItemIndex > 0) {
        setSelectedItemIndex(selectedItemIndex - 1);
      } else {
        setSelectedItemIndex(filteredItems.length - 1);
      }
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      if (selectedItemIndex < filteredItems.length - 1) {
        setSelectedItemIndex(selectedItemIndex + 1);
      }  else {
        setSelectedItemIndex(0);
      }
    } else if (event.key === 'Enter') {
      event.preventDefault();
      if (selectedItemIndex !== -1) {
        const selectedValue = filteredItems[selectedItemIndex].social;
        setWordEnter(selectedValue);
        setSeclectSocial(selectedValue)
        setFilteredItems([])
        setIsEnter(true)
        setSelectedItemIndex(-1);
      }
    }
  };

  const handleItemClick = (index) => {
    setSelectedItemIndex(index);
  };

  const handleItemSelect = () => {
    if (selectedItemIndex !== -1) {
      setWordEnter("");
      setSelectedItemIndex(-1);
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="main">
      <div className="main_head">
        <h3><i>2023</i></h3>
        <div className="main_head_search">
          <input
            onKeyDown={handleKeyDown}
            onChange={handleInputChange}
            value={wordEnter}
            type="text"
            placeholder="SOCIAL MEDIA GUIDE 2023"
            ref={inputRef}
          />
          <span>
            {" "}
            <BsSearch />{" "}
          </span>

          {filteredItems.length !== 0 && (
            <div
              data-paint={selectSocial}
              className="box_search"
              onKeyDown={handleItemSelect}
            >
              {filteredItems?.map((item, index) => {
                return (
                  <p
                    className={selectedItemIndex === index ? 'selected' : ''}
                    key={item.social}
                    onClick={() => {
                      setSeclectSocial(item.social);
                      setFilteredItems([]);
                      setWordEnter(item.social);
                      handleItemClick(index);
                      setIsEnter(true)
                    }}
                    
                  >
                    {item?.social}
                  </p>
                );
              })}
            </div>
          )}
        </div>
      </div>

      <div className="main_title">
        <div className="main_title_social">
          <p data-paint={selectSocial}> {social.iconMain} </p>
          <h3 data-paint={selectSocial}>
            {social.social} <p>{social.sub}</p>
          </h3>
        </div>
        <div data-paint={selectSocial} className="main_title_toggle">
          <button data-paint={selectSocial}>Figures</button>
          <button>Format</button>
        </div>
      </div>

      <div className="main_body">
        <div className="main_body_top">
          <div className="main_body_top_audience">
            <div className="main_body_top_audience_title">
              <h3>Audience</h3>
              <p data-paint={selectSocial}>
                <BsThreeDots />
              </p>
            </div>
            <div className="main_body_top_audience_content1">
              <div
                data-paint={selectSocial}
                className="main_body_top_audience_content1_item1"
              >
                <p>Monthly active users</p>
                <h4 data-paint={selectSocial}>
                  {social.activeUsers} <p> {social.social === "linkedin" || social.social === "twitter" ? "million" : "billion"} </p>
                </h4>
              </div>
              <div className="main_body_top_audience_content1_item2">
                <div className="population">
                  <div className="chart">
                    <div data-paint={selectSocial} className="col1"></div>
                    <div data-paint={selectSocial} className="col2"></div>
                    <p data-paint={selectSocial}>
                      {social.population}
                      <span>%</span>
                    </p>
                  </div>
                  <p>of the population</p>
                </div>

                <div className="compare">
                  <p data-paint={selectSocial}>
                    +{social.compare}
                    <span>%</span>
                  </p>
                  <p>compare to 2022</p>
                </div>
              </div>
              <div className="main_body_top_audience_content1_item3">
                <p>
                  <span data-paint={selectSocial}>{social.menOnly}% </span>{" "}
                  <br /> of users are <br /> men <br />
                  between
                </p>
                <CircularProgress
                  data-paint={selectSocial}
                  padding={"16px 0"}
                  trackColor="#000"
                  color={
                    selectSocial === "facebook"
                      ? "#1877f2"
                      : selectSocial === "instagram"
                      ? "#B01676"
                      : selectSocial === "linkedin"
                      ? "#03749e"
                      : selectSocial === "twitter"
                      ? "#1B8DDE"
                      : selectSocial === "youtube" ? "#E01D0D" : ""
                  }
                  value={30}
                  size="80px"
                />
                <p>
                  <span data-paint={selectSocial}>{social.yearsOld}</span>{" "}
                  <br /> years old
                </p>
              </div>
              <div
                data-paint={selectSocial}
                className="main_body_top_audience_content1_item4"
              >
                <div className="detail">
                  <h4>Gender repartition</h4>
                  <p>
                    Women <br />{" "}
                    <span data-paint={selectSocial}>{social.women}%</span>
                  </p>
                  <CircularProgress
                    data-paint={selectSocial}
                    padding={"16px 0"}
                    trackColor="#000"
                    color={
                      selectSocial === "facebook"
                        ? "#1877f2"
                        : selectSocial === "instagram"
                        ? "#B01676"
                        : selectSocial === "linkedin"
                        ? "#03749e"
                        : selectSocial === "twitter"
                        ? "#1B8DDE"
                        : selectSocial === "youtube" ? "#E01D0D" : ""
                    }
                    value={43}
                    size="120px"
                  />
                  <p data-paint={selectSocial}>
                    <span>{social.men}%</span> <br /> Men
                  </p>
                </div>
              </div>
            </div>
            <div className="main_body_top_audience_content2"></div>
          </div>
          <div className="main_body_top_tips">
            <div className="main_body_top_tips_title">
              <h3>Tips</h3>
              <p data-paint={selectSocial}>{<BsThreeDots />}</p>
            </div>
            {social.tips.map((item) => (
              <div
                data-paint={selectSocial}
                key={item.tip}
                className="main_body_top_tips_item"
              >
                <p data-paint={selectSocial}>{item.icon}</p>
                <p>{item.tip}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="main_body_bottom">
          <div className="main_body_bottom_goals">
            <div className="main_body_bottom_goals_title">
              <h3>Goals</h3>
              <p data-paint={selectSocial}>
                <BsThreeDots />
              </p>
            </div>
            <Accordion allowToggle>
              {social.goals.map((item) => (
                <AccordionItem
                  key={item.goal}
                  data-paint={selectSocial}
                  marginBottom={"1rem"}
                  borderRadius={"16px"}
                >
                  <h2>
                    <AccordionButton>
                      <Box as="p" lineHeight={1} flex="1" textAlign="left">
                        <Box
                          display={"flex"}
                          gap={"8px"}
                          alignItems={"center"}
                          as="div"
                        >
                          <Box fontSize={20}>
                            {item.icon}
                          </Box>
                          <Box as="div">
                            <Box as="p" fontWeight={600} fontSize={18}>
                              {item.goal}
                            </Box>
                            <Box
                              as="p"
                              fontSize={14}
                              fontWeight={"normal"}
                              color={"grey"}
                            >
                              {item.sub}
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                      <AccordionIcon data-paint={selectSocial} />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="main_body_bottom_sectors">
            <div className="main_body_bottom_sectors_title">
              <h3>
                Leading <br /> sectors
              </h3>
              <p data-paint={selectSocial}>
                <BsThreeDots />
              </p>
            </div>
            <div className="main_body_bottom_sectors_content">
              {social.sectors.map((item, index) => (
                <div
                  key={item.sector}
                  className="main_body_bottom_sectors_content_item"
                >
                  <p>
                    {item.icon}{" "}
                    <span data-paint={selectSocial}>{item.sector}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
