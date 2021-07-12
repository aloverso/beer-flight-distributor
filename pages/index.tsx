import {ReactElement, useEffect, useState} from "react";
import axios from "axios";

const HomePage = (): ReactElement => {
  const [serverHello, setServerHello] = useState<string>("");

  useEffect((): void => {
    axios.get("/api/health").then((response) => {
      setServerHello(response.data);
    });
  }, []);

  return (
    <div>
      <h1>server says: {serverHello}</h1>
    </div>
  );
}

export default HomePage;