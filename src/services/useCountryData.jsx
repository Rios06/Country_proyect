import { useState, useEffect } from "react";

export function useCountryData() {
  const [country, setCountry] = useState({});
  const [code, setCode] = useState("");
  useEffect(() => {
    fetch("https://countries.trevorblades.com/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
              query Country($code: ID!) {
                country(code: $code) {
                  code
                  name
                  capital
                  continent {
                    code
                    name
                  }
                  currency
                  languages {
                    name
                  }
                }
              }`,
        variables: { code: code },
      }),
    })
      .then((res) => res.json())
      .then((data) => setCountry(data.data.country));
  }, [code]);

  return {
    country,
    setCode,
  };
}