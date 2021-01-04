import Head from "next/head";
import { NavBar } from "../components/navigation/NavBar/NavBar";
import { Homepage } from "../components/main/Homepage/Homepage";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Homepage />
    </div>
  );
}
