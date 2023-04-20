import React from "react";
import {
  AiFillLike,
  AiOutlineCompass,
  AiOutlineHeart,
  AiOutlinePicture,
  AiOutlineTransaction
} from "react-icons/ai";
import {
  BsArrowUpRightSquare,
  BsBagCheck,
  BsBarChart,
  BsCalendar2Month,
  BsChatDots,
  BsEye,
  BsFillPlayFill,
  BsGear,
  BsInfinity,
  BsInstagram,
  BsLightningCharge,
  BsLinkedin,
  BsPinAngle,
  BsTwitter,
  BsYoutube
} from "react-icons/bs";
import {
  FaFacebookF,
  FaFacebookSquare,
  FaLinkedinIn,
  FaTasks,
  FaTwitterSquare
} from "react-icons/fa";
import {
  MdAirplay,
  MdOutlineAutoFixHigh,
  MdOutlineConnectWithoutContact,
  MdOutlineContentCut,
  MdOutlineRestaurant,
  MdScreenSearchDesktop
} from "react-icons/md";
import { BiAnalyse, BiBarChart, BiBookBookmark, BiCabinet, BiMoviePlay, BiTimeFive } from "react-icons/bi";
import { TbArrowsDoubleNeSw, TbHanger, TbHomeStats, TbTargetArrow } from "react-icons/tb";
import { HiOutlineBadgeCheck, HiOutlineCode, HiOutlineSpeakerphone, HiOutlineUsers } from "react-icons/hi";
import { TiCameraOutline, TiSocialTwitterCircular } from "react-icons/ti";
import { TfiShield } from "react-icons/tfi";
import { RiAliensLine } from "react-icons/ri";
import { HiOutlineChatBubbleLeftRight, HiOutlineSignal, HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { FiLayers } from "react-icons/fi";
import { CgCamera } from "react-icons/cg"
import { SiGoogleoptimize, SiPeertube } from "react-icons/si"
import { IoShareSocialOutline } from "react-icons/io5"
import { SlNotebook } from "react-icons/sl"
import { GiIsland } from "react-icons/gi"
export const socialArr = [
  {
    social: "facebook",
    icon: <FaFacebookF />,
    iconMain: <FaFacebookSquare />,
    sub: "The most popular social media in the world",
    activeUsers: "2.96",
    population: "37",
    compare: "1.58",
    menOnly: "30",
    yearsOld: "25 & 34",
    men: "56",
    women: "43",
    tips: [
      {
        tip: "Use Facebook's advertising tool",
        icon: <BsEye />
      },
      {
        tip: "Try to create virality and reactions by includuing users and using humour",
        icon: <BsChatDots />
      },
      {
        tip: "Prefer the publication of visual content & use Facebook's live features",
        icon: <AiOutlinePicture />
      }
    ],
    goals: [
      {
        goal: "Create a community",
        sub: "and build loyality",
        icon: <HiOutlineWrenchScrewdriver/>
      },
      {
        goal: "Take advantage of Facebook's",
        sub: "tools to distribute your products",
        icon: <BiCabinet/>
      },
      {
        goal: "Promote your products",
        sub: "with visual communication",
        icon: <TbTargetArrow/>
      },
      {
        goal: "Take advantage of Meta's",
        sub: "marketing tools to target your customers",
        icon: <BsArrowUpRightSquare/>
      }
    ],
    tools: [
      {
        tool: "Facebook Ads Manager",
        sub: "Ad network",
        icon: <AiOutlineTransaction />
      },
      {
        tool: "Facebook Commerce Manager",
        sub: "E-commerce platform",
        icon: <TbHomeStats />
      },
      {
        tool: "Meta Foresight",
        sub: "Professional blog",
        icon: <HiOutlineCode />
      }
    ],
    sectors: [
      {
        sector: "Food",
        icon: <MdOutlineRestaurant />
      },
      {
        sector: "Fashion",
        icon: <TbHanger />
      },
      {
        sector: "Entertaiment",
        icon: <BiMoviePlay />
      }
    ],
    brands: [
      {
        brand: "@NYXCosmeticsUK",
        followers: "3.2",
        logo: "https://logos-world.net/wp-content/uploads/2020/11/NYX-Logo.png",
        icon: <AiFillLike />
      },
      {
        brand: "@zarahome",
        followers: "3.1",
        logo: "https://www.kindpng.com/picc/m/112-1127946_zara-home-logos-brands-zara-home-hd-png.png",
        icon: <AiFillLike />
      },
      {
        brand: "@justhype",
        followers: "1.2",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShWXxnvvL64F7S1IJepwm47OFB-v_VPcpMdHVSqaGVf6cpwJ1OiqJkAQdpowy1IHVmeM0&usqp=CAU",
        icon: <AiFillLike />
      },
      {
        brand: "@innocent.drinks",
        followers: "0.6",
        logo: "https://www.logodesignlove.com/images/logos/innocent-halo.jpg",
        icon: <AiFillLike />
      }
    ]
  },
  {
    social: "instagram",
    icon: <BsInstagram />,
    iconMain: <BsInstagram />,
    sub: "Meta's Visual inclination",
    activeUsers: "2.00",
    population: "25",
    compare: "35.32",
    menOnly: "15",
    yearsOld: "18 & 24",
    men: "52",
    women: "48",
    tips: [
      {
        tip: "Be authentic and spontaneous with Stories and Reels",
        icon: <BsEye />
      },
      {
        tip: "Communicate through influencers",
        icon: <BsChatDots />
      },
      {
        tip: "Develop your visual identity and create a strong & complete universe",
        icon: <AiOutlinePicture />
      }
    ],
    goals: [
      {
        goal: "Create a visual",
        sub: "universe around your brand",
        icon: <BsLightningCharge/>
      },
      {
        goal: "Promote your products",
        sub: "with attractive visuals",
        icon: <HiOutlineSpeakerphone/>
      },
      {
        goal: "Bond",
        sub: "with a young audience",
        icon: <HiOutlineChatBubbleLeftRight/>
      },
      {
        goal: "Approach",
        sub: "influencers",
        icon: <AiOutlineHeart/>
      }
    ],
    tools: [
      {
        tool: "Instagram Shopping",
        sub: "E-commerce platform",
        icon: <BsBagCheck />
      },
      {
        tool: "Instagram Business",
        sub: "Create paid campaigns",
        icon: <TiCameraOutline />
      },
      {
        tool: "Favikon",
        sub: "Search & evaluate influencers",
        icon: <MdScreenSearchDesktop />
      },
      {
        tool: "Mojo",
        sub: "Create original content & videos",
        icon: <TbArrowsDoubleNeSw />
      },
      {
        tool: "Capcut",
        sub: "Video editing tool",
        icon: <MdOutlineContentCut />
      }
    ],
    sectors: [
      {
        sector: "Food",
        icon: <MdOutlineRestaurant />
      },
      {
        sector: "Fashion",
        icon: <TbHanger />
      },
      {
        sector: "Tourism",
        icon: <GiIsland />
      }
    ],
    brands: [
      {
        brand: "@oreo",
        followers: "3.5",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_Oreo_alt.svg/2560px-Logo_Oreo_alt.svg.png",
        icon: "Follow"
      },
      {
        brand: "@glossier",
        followers: "2.7",
        logo: "https://cdn.worldvectorlogo.com/logos/glossier-1.svg",
        icon: "Follow"
      },
      {
        brand: "@telfarglobal",
        followers: "1.4",
        logo: "https://handbag.yournextshoes.com/wp-content/uploads/2021/02/Telfar-Clemens-logo.jpg",
        icon: "Follow"
      },
      {
        brand: "@privacypls",
        followers: "0.14",
        logo: "https://i.pinimg.com/236x/86/99/58/869958ed8963babe96b4abf7b7c8f94d.jpg",
        icon: "Follow"
      }
    ]
  },
  {
    social: "linkedin",
    icon: <FaLinkedinIn />,
    iconMain: <BsLinkedin />,
    sub: "The professional network",
    activeUsers: "900",
    population: "11",
    compare: "11.39",
    menOnly: "34.3",
    yearsOld: "25 & 34",
    men: "56",
    women: "44",
    tips: [
      {
        tip: "Pay attention to the headlines of your publications to arouse curiosity",
        icon: <BsPinAngle />
      },
      {
        tip: "Publish regularly",
        icon: <BiTimeFive />
      },
      {
        tip: "Develop a storytelling strategy",
        icon: <BsChatDots />
      }
    ],
    goals: [
      {
        goal: "Deploy personal",
        sub: "branding and employee advocacy",
        icon: <SlNotebook/>
      },
      {
        goal: "Promote your activity",
        sub: "& show your expertise",
        icon: <HiOutlineSpeakerphone/>
      },
      {
        goal: "Recruiting employees",
        sub: "and developing your network",
        icon: <HiOutlineUsers/>
      },
      {
        goal: "Increase the visibility",
        sub: "of your company",
        icon: <BsEye/>
      }
    ],
    tools: [
      {
        tool: "Shield",
        sub: "Analyse your profile",
        icon: <TfiShield />
      },
      {
        tool: "Perfect Post",
        sub: "Create quality content",
        icon: <HiOutlineBadgeCheck />
      },
      {
        tool: "Sales Navigator",
        sub: "Find more people",
        icon: <AiOutlineCompass />
      },
      {
        tool: "Campaign Manager",
        sub: "Create campaigns",
        icon: <BsInfinity />
      },
      {
        tool: "Waalaxy",
        sub: "Automate your sales processes",
        icon: <RiAliensLine />
      }
    ],
    sectors: [
      {
        sector: "Information & technology services",
        icon: <BiMoviePlay />
      },
      {
        sector: "Hospital & health care",
        icon: <AiOutlineHeart />
      },
      {
        sector: "Construction",
        icon: <HiOutlineWrenchScrewdriver />
      }
    ],
    brands: [
      {
        brand: "@oreo",
        followers: "3.5",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_Oreo_alt.svg/2560px-Logo_Oreo_alt.svg.png",
        icon: "Follow"
      },
      {
        brand: "@glossier",
        followers: "2.7",
        logo: "https://cdn.worldvectorlogo.com/logos/glossier-1.svg",
        icon: "Follow"
      },
      {
        brand: "@telfarglobal",
        followers: "1.4",
        logo: "https://handbag.yournextshoes.com/wp-content/uploads/2021/02/Telfar-Clemens-logo.jpg",
        icon: "Follow"
      },
      {
        brand: "@privacypls",
        followers: "0.14",
        logo: "https://i.pinimg.com/236x/86/99/58/869958ed8963babe96b4abf7b7c8f94d.jpg",
        icon: "Follow"
      }
    ]
  },
  {
    social: "twitter",
    icon: <BsTwitter />,
    iconMain: <FaTwitterSquare />,
    sub: "Real-time information",
    activeUsers: "556",
    population: "7",
    compare: "27.52",
    menOnly: "38.5",
    yearsOld: "25 & 34",
    men: "63",
    women: "37",
    tips: [
      {
        tip: "Use Twitter as a customer relations channel",
        icon: <BsEye />
      },
      {
        tip: "Avoid overly advertising or commercial publications",
        icon: <BsChatDots />
      },
      {
        tip: "Use humour in your communication",
        icon: <AiOutlinePicture />
      }
    ],
    goals: [
      {
        goal: "Develop and share",
        sub: "with your community",
        icon: <HiOutlineChatBubbleLeftRight/>
      },
      {
        goal: "Develop",
        sub: "your brand's image",
        icon: <BsEye/>
      },
      {
        goal: "Humanise",
        sub: "your company",
        icon: <HiOutlineUsers/>
      },
      {
        goal: "React",
        sub: "to recent content",
        icon: <IoShareSocialOutline/>
      }
    ],
    tools: [
      {
        tool: "Twitter business",
        sub: "Create & share",
        icon: <FaTwitterSquare />
      },
      {
        tool: "Tweetdeck",
        sub: "Manage",
        icon: <TiSocialTwitterCircular />
      },
      {
        tool: "Buffer",
        sub: "publish on the platform & schedule posts",
        icon: <FiLayers />
      },
      {
        tool: "Audiense Connect",
        sub: "marketing management & targeting tool",
        icon: <MdOutlineConnectWithoutContact />
      },
      {
        tool: "Twitonomy",
        sub: "analytics tool",
        icon: <BiAnalyse />
      }
    ],
    sectors: [
      {
        sector: "Music",
        icon: <MdOutlineRestaurant />
      },
      {
        sector: "Video games",
        icon: <TbHanger />
      },
      {
        sector: "Information & technology services",
        icon: <BiMoviePlay />
      }
    ],
    brands: [
      {
        brand: "@oreo",
        followers: "3.5",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_Oreo_alt.svg/2560px-Logo_Oreo_alt.svg.png",
        icon: "Follow"
      },
      {
        brand: "@glossier",
        followers: "2.7",
        logo: "https://cdn.worldvectorlogo.com/logos/glossier-1.svg",
        icon: "Follow"
      },
      {
        brand: "@telfarglobal",
        followers: "1.4",
        logo: "https://handbag.yournextshoes.com/wp-content/uploads/2021/02/Telfar-Clemens-logo.jpg",
        icon: "Follow"
      },
      {
        brand: "@privacypls",
        followers: "0.14",
        logo: "https://i.pinimg.com/236x/86/99/58/869958ed8963babe96b4abf7b7c8f94d.jpg",
        icon: "Follow"
      }
    ]
  },
  {
    social: "youtube",
    icon: <BsFillPlayFill />,
    iconMain: <BsYoutube />,
    sub: "Google’s very own video platform",
    activeUsers: "2.6",
    population: "31",
    compare: "0.56",
    menOnly: "20.7",
    yearsOld: "25 & 34",
    men: "54",
    women: "46",
    tips: [
      {
        tip: "Invest in good filming equipment",
        icon: <CgCamera />
      },
      {
        tip: "Develop a strong and recognisable visual identity",
        icon: <AiOutlinePicture />
      },
      {
        tip: "Create playlists and collaborate with creators",
        icon: <FaTasks />
      }
    ],
    goals: [
      {
        goal: "Develop",
        sub: "your brand’s universe",
        icon: <MdAirplay/>
      },
      {
        goal: "Find",
        sub: "new customers",
        icon: <HiOutlineSignal/>
      },
      {
        goal: "Give a new",
        sub: "dimension to your products",
        icon: <BsBarChart/>
      },
      {
        goal: "Unite your community",
        sub: "and humanise your brand",
        icon: <BsGear/>
      }
    ],
    tools: [
      {
        tool: "YouTube Studio",
        sub: "Back office",
        icon: <BiBarChart />
      },
      {
        tool: "TubeBuddy",
        sub: "Diagnostic",
        icon: <SiPeertube />
      },
      {
        tool: "VidIQ",
        sub: "Optimize",
        icon: <SiGoogleoptimize />
      },
      {
        tool: "Filmora",
        sub: "Editing tool",
        icon: <MdOutlineAutoFixHigh />
      }
    ],
    sectors: [
      {
        sector: "News",
        icon: <BsCalendar2Month />
      },
      {
        sector: "Entertaiment",
        icon: <BiMoviePlay />
      },
      {
        sector: "Education",
        icon: <BiBookBookmark />
      }
    ],
    brands: [
      {
        brand: "@oreo",
        followers: "3.5",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_Oreo_alt.svg/2560px-Logo_Oreo_alt.svg.png",
        icon: "Follow"
      },
      {
        brand: "@glossier",
        followers: "2.7",
        logo: "https://cdn.worldvectorlogo.com/logos/glossier-1.svg",
        icon: "Follow"
      },
      {
        brand: "@telfarglobal",
        followers: "1.4",
        logo: "https://handbag.yournextshoes.com/wp-content/uploads/2021/02/Telfar-Clemens-logo.jpg",
        icon: "Follow"
      },
      {
        brand: "@privacypls",
        followers: "0.14",
        logo: "https://i.pinimg.com/236x/86/99/58/869958ed8963babe96b4abf7b7c8f94d.jpg",
        icon: "Follow"
      }
    ]
  } 
];
