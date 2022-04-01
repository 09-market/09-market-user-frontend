import { useState, useEffect } from "react";
import { defaultAxios } from "utils/axiosFunc";

function App() {
  const [test, setTest] = useState("");

  useEffect(() => {
    defaultAxios
      .get({
        url: "/test",
      })
      .then(({ data }) => setTest(data));
  }, []);

  return <div>{test}</div>;
}

export default App;
