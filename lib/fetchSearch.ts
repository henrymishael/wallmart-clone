import { Result } from "@/typings/searchTypings";

interface FetchData {
  method: string;
  body: string;
  headers: {
    "Content-Type": string;
    Authorization: string;
  };
}

function fetchSearch(searchTerm: String) {
  const username = process.env.OXYLABS_USERNAME;
  const password = process.env.OXYLABS_PASSWORD;

  const newUrl = new URL(`https://www.walmart.com/search?q=${searchTerm}`);

  const body = {
    source: "universal_ecommerce",
    url: newUrl.toString(),
    geo_location: "United States",
    parse: true,
  };

  const fetchData: FetchData = {
    method: "post",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${Buffer.from(`${username}:${password}`).toString(
        "base64"
      )}`,
    },
  };

  return fetch("https://realtime.oxylabs.io/v1/queries", fetchData)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      if (Array.isArray(data.results) && data.results.length > 0) {
        return data.results[0];
      }
      return;
    })
    .catch((err) => {
      console.error(`Download error: ${err.message}`);
      return;
    });
}

export default fetchSearch;

//   const response = fetch("https://realtime.oxylabs.io/v1/queries", {
//     method: "post",
//     body: JSON.stringify(body),
//     headers: {
//       "Content-Type": "application/json",
//       Authorization:
//         "Basic" + Buffer.from(`${username}:${password}`).toString("base64"),
//     },
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       if (data.results.length === 0) return;
//       const result: Result = data.results[0];

//       return result;
//     })
//     .catch((err) => console.log(err));

//   return response;
// }

// export default fetchSearch;
