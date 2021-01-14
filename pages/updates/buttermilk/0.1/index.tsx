import { NavBar } from "../../../../components/navigation/NavBar/NavBar";
import { Update01Page } from "../../../../components/updates/buttermilk/Update01Page/Update01Page";
const test = require("../../../../public/test_climb.jpg");
const gif = require("../../../../public/test_gif.gif");
const icon = require("../../../../public/buttermilk_logo.png");

export default function Update01() {
  const data = {
    timestamp: 3242422,
    title: "Notice of Development",
    productInfo: {
      product: "Buttermilk",
      productLink: "/products/buttermilk",
      icon: icon,
    },
    imageURL: test,
    version: "0.1",
    text: [
      {
        id: 0,
        val:
          "Buttermilk is a webapp built to support the needs of today's adventurers. It provides a modern website experience for those who want to share stories of their travels, read and upload guides on specific endeavors, and take note of locations where an activity may be performed.",
      },
      {
        id: 1,
        val:
          "If you are interested in knowing about this app in greater detail, head over to our product page for a ful list of info on the current project.",
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
          "Follow users and be followed by others; build communities around your personality or experiences and follow those who interest you.",
      },
      {
        id: 1,
        val:
          "Modern search experience for user-uploaded stories, guides, and locations.",
      },
      {
        id: 2,
        val:
          "Index locations to keep track of places you'd like to go and things you would like to do.",
      },
      {
        id: 3,
        val: "Keep track of everything with an in-depth history section",
      },
      {
        id: 4,
        val:
          "Built for climbing; Get bouldering beta and images of every climb.",
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
