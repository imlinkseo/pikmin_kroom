import { Route, Routes } from "react-router-dom";
import { Global } from "@emotion/react";
import Wrap from "@components/ui/wrap/Wrap";
import "reset-css";
import { globalStyles } from "@common/globalStyles";
import Layout from "./layouts/Layout";

export default function App() {
  return (
    <>
      <Global styles={globalStyles} />
      <Wrap>
        <Routes>
          <Route path="/*" element={<Layout />} />
        </Routes>
      </Wrap>
    </>
  );
}
