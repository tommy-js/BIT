import { NavBar } from "../../../../components/navigation/NavBar/NavBar";
import { Update01Page } from "../../../../components/updates/buttermilk/Update01Page/Update01Page";
const test = require("../../../../public/test_climb.jpg");

export default function Update01() {
  const data = {
    timestamp: 3242422,
    title: "Testing",
    imageURL: test,
    version: "0.1",
    text: [
      {
        id: 0,
        val: "This is a test of the system",
      },
      {
        id: 1,
        val: "This is the second paragraph test",
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
