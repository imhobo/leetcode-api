const proxyAgent = require('proxy-agent');

const dispatcher = new proxyAgent.ProxyAgent()

// const freeProxy = require('free-proxy-nodejs');

// async function myfunction() {
//   const proxies = await freeProxy.getProxies();
//   console.log(proxies)
//   return proxies;
// }



const problemFetch = async (res, formatData, query, variable) => {
  await fetch("https://leetcode.com/graphql", {
    dispatcher,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Referer: "https://leetcode.com",
    },
    body: JSON.stringify({
      query: query,
      variables: {
        titleSlug: variable, //search question using titleSlug
      },
    }),
  })
    .then((result) => result.json())
    .then((data) => {
      if (data.errors) {
        res.send(data);
      } else {
        res.json(formatData(data.data));
      }
    })
    .catch((err) => {
      console.error("Error", err);
      res.send(err);
    });
};

module.exports = problemFetch;
