import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";

const ErrorPage = () => {
  const [errorMsg, setErrorMsg] = useState("Page not found");
  const router = useRouter();
  const routeArr = router.asPath.split("/");

  useEffect(() => {
    if (routeArr[1] === "person") {
      setErrorMsg("Person couldn't be found");
    }
  }, [routeArr]);

  return (
    <div className="error-page">
      <div className="container">
        <h1>{errorMsg}</h1>

        <button className="home" onClick={() => router.push("/")}>
          Go home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
