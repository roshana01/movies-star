import React, { useEffect, useState } from "react";
import Header from "./Header";
import Logo from "./Logo";
import SearchInput from "./SearchInput";
import NumberResult from "./NumberResult";
import Main from "./Main";

export default function App() {
  const [valInput, setValInput] = useState("");



  return (
    <>
      <Header>
        <Logo />
        <SearchInput valInput={valInput} setValInput={setValInput} />
        <NumberResult />
      </Header>
      {/* Component Main */}
      
    </>
  );
}
