import { NavBar } from "../../../../components/navigation/NavBar/NavBar";
import { Update01Page } from "../../../../components/updates/greenstack/Update01Page/Update01Page";
const test = require("../../../../public/test_climb.jpg");
const gif = require("../../../../public/test_gif.gif");
const icon = require("../../../../public/greenstack_logo.png");

export default function Update01() {
  const data = {
    timestamp: 3242422,
    title: "Pre-Release Features",
    productInfo: {
      product: "GreenStack",
      productLink: "/products/greenstack",
      icon: icon,
    },
    imageURL: test,
    version: "0.1",
    text: [
      {
        id: 0,
        val:
          "GreenStack is a social media and education platform designed to introduce new investors to the stock market, and to get them up to speed with common terms and concepts. If you need a higher-level explanation of features and motivation, check out our GreenStack product page.",
      },
      {
        id: 1,
        val:
          "In this update we are announcing the project. It is unclear when GreenStack will be online and available for broad use, but we are aiming for sometime during 2021.",
      },
    ],
    gifs: [
      {
        gif: gif,
        alt: test,
      },
    ],
    features: [
      {
        id: 0,
        val:
          "In-depth tutorial system covering topics from stock market basics to options.",
      },
      {
        id: 1,
        val: "Posting system with likes, notifications, and user tagging.",
      },
      {
        id: 2,
        val: "Long list of interesting companies and stocks to explore.",
      },
      {
        id: 3,
        val: "Interactive charts to help you analyze stock performance.",
      },
    ],
  };

  return (
    <div>
      <NavBar />
      <Update01Page data={data} />
    </div>
  );
}
