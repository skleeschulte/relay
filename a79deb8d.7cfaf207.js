(window.webpackJsonp=window.webpackJsonp||[]).push([[662],{1069:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return b}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),s=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},u=function(e){var t=s(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(a),d=n,b=u["".concat(i,".").concat(d)]||u[d]||h[d]||o;return a?r.a.createElement(b,p(p({ref:t},c),{},{components:a})):r.a.createElement(b,p({ref:t},c))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var c=2;c<o;c++)i[c]=a[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},738:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(7),o=(a(0),a(1069)),i={id:"step-by-step",title:"A Step By Step Guide",original_id:"step-by-step"},p={unversionedId:"step-by-step",id:"version-experimental/step-by-step",isDocsHomePage:!1,title:"A Step By Step Guide",description:"Relay is a framework for managing and declaratively fetching GraphQL data. It allows developers to declare what data each component needs via GraphQL, and then aggregate these dependencies and efficiently fetch the data in fewer round trips. In this guide we'll introduce the key concepts for using Relay in a React app one at a time.",source:"@site/versioned_docs/version-experimental/RelayHooks-StepByStep.md",slug:"/step-by-step",permalink:"/docs/experimental/step-by-step",editUrl:"https://github.com/facebook/relay/edit/master/website-v2/docs/versioned_docs/version-experimental/RelayHooks-StepByStep.md",version:"experimental",lastUpdatedBy:"Jan Kassens",lastUpdatedAt:1614825009,sidebar:"version-experimental/docs",previous:{title:"Introduction to Relay",permalink:"/docs/experimental/"},next:{title:"A Guided Tour",permalink:"/docs/experimental/a-guided-tour-of-relay"}},l=[{value:"Step 1: Create React App",id:"step-1-create-react-app",children:[]},{value:"Step 2: Fetch GraphQL (without Relay)",id:"step-2-fetch-graphql-without-relay",children:[{value:"2.1: GitHub GraphQL Authentication",id:"21-github-graphql-authentication",children:[]},{value:"2.2: A fetchGraphQL Helper",id:"22-a-fetchgraphql-helper",children:[]},{value:"2.3: Fetching GraphQL From React",id:"23-fetching-graphql-from-react",children:[]}]},{value:"Step 3: When To Use Relay",id:"step-3-when-to-use-relay",children:[]},{value:"Step 4: Adding Relay To Our Project",id:"step-4-adding-relay-to-our-project",children:[{value:"4.1 Configure Relay Compiler",id:"41-configure-relay-compiler",children:[]},{value:"4.2 Configure Relay Runtime",id:"42-configure-relay-runtime",children:[]}]},{value:"Step 5: Fetching a Query With Relay",id:"step-5-fetching-a-query-with-relay",children:[]},{value:"Step 6: Explore!",id:"step-6-explore",children:[]}],c={toc:l};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://relay.dev/"}),"Relay")," is a framework for managing and declaratively fetching GraphQL data. It allows developers to declare ",Object(o.b)("em",{parentName:"p"},"what")," data each component needs via GraphQL, and then aggregate these dependencies and efficiently fetch the data in fewer round trips. In this guide we'll introduce the key concepts for using Relay in a React app one at a time."),Object(o.b)("h2",{id:"step-1-create-react-app"},"Step 1: Create React App"),Object(o.b)("p",null,"For this example we'll use start with a standard install of ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://create-react-app.dev"}),"Create React App"),". Create React App makes it easy to get a fully configured React app up and running and also supports configuring Relay. To get started, create a new app with:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"\n# NPM\nnpx create-react-app your-app-name\n\n# Yarn\nyarn create react-app your-app-name\n\n")),Object(o.b)("p",null,"At this point we should be able to change to the app's directory and run it:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"\n# NPM\ncd your-app-name\nnpm start\n\n# Yarn\ncd your-app-name\nyarn start\n\n")),Object(o.b)("p",null,"For troubleshooting and more setup options, see the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://create-react-app.dev/docs/getting-started"}),"Create React App documentation"),"."),Object(o.b)("h2",{id:"step-2-fetch-graphql-without-relay"},"Step 2: Fetch GraphQL (without Relay)"),Object(o.b)("p",null,"If you're exploring using GraphQL with Relay, we highly recommend starting with a basic approach and using as few libraries as possible. GraphQL servers can generally be accessed using plain-old HTTP requests, so we can use the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"}),Object(o.b)("inlineCode",{parentName:"a"},"fetch")," API")," to request some data from our server. For this guide we'll use GitHub's GraphQL API as the server, but if you already have a GraphQL server feel free to use that instead."),Object(o.b)("h3",{id:"21-github-graphql-authentication"},"2.1: GitHub GraphQL Authentication"),Object(o.b)("p",null,"To start we'll need an authentication token for the GitHub API (if you're using your own GraphQL endpoint, you can skip this step):"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Open ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/settings/tokens"}),"github.com/settings/tokens"),"."),Object(o.b)("li",{parentName:"ul"},"Ensure that at least the ",Object(o.b)("inlineCode",{parentName:"li"},"repo")," scope is selected."),Object(o.b)("li",{parentName:"ul"},"Generate a token"),Object(o.b)("li",{parentName:"ul"},"Create a file ",Object(o.b)("inlineCode",{parentName:"li"},"./your-app-name/.env.local")," and add the following contents, replacing ",Object(o.b)("inlineCode",{parentName:"li"},"<TOKEN>")," with your authentication token:")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"\n# your-app-name/.env.local\nREACT_APP_GITHUB_AUTH_TOKEN=<TOKEN>\n\n")),Object(o.b)("h3",{id:"22-a-fetchgraphql-helper"},"2.2: A fetchGraphQL Helper"),Object(o.b)("p",null,"Next let's update the home screen of our app to show the name of the Relay repository. We'll start with a common approach to fetching data in React, calling our fetch function after the component mounts (note: later we'll see some limitations of this approach and a better alternative that works with React Concurrent Mode and Suspense). First we'll create a helper function to load data from the server. Again, this example will use the GitHub API, but feel free to replace it with the appropriate URL and authentication mechanism for your own GraphQL server:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"\n// your-app-name/src/fetchGraphQL.js\nasync function fetchGraphQL(text, variables) {\n  const REACT_APP_GITHUB_AUTH_TOKEN = process.env.REACT_APP_GITHUB_AUTH_TOKEN;\n\n  // Fetch data from GitHub's GraphQL API:\n  const response = await fetch('https://api.github.com/graphql', {\n    method: 'POST',\n    headers: {\n      Authorization: `bearer ${REACT_APP_GITHUB_AUTH_TOKEN}`,\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify({\n      query: text,\n      variables,\n    }),\n  });\n\n  // Get the response as JSON\n  return await response.json();\n}\n\nexport default fetchGraphQL;\n\n")),Object(o.b)("h3",{id:"23-fetching-graphql-from-react"},"2.3: Fetching GraphQL From React"),Object(o.b)("p",null,"Now we can use our ",Object(o.b)("inlineCode",{parentName:"p"},"fetchGraphQL")," function to fetch some data in our app. Open ",Object(o.b)("inlineCode",{parentName:"p"},"src/App.js")," and edit it as follows:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'\n// your-app-name/src/App.js\nimport React from \'react\';\nimport \'./App.css\';\nimport fetchGraphQL from \'./fetchGraphQL\';\n\nconst { useState, useEffect } = React;\n\nfunction App() {\n  // We\'ll load the name of a repository, initially setting it to null\n  const [name, setName] = useState(null);\n\n  // When the component mounts we\'ll fetch a repository name\n  useEffect(() => {\n    let isMounted = true;\n    fetchGraphQL(`\n      query RepositoryNameQuery {\n        # feel free to change owner/name here\n        repository(owner: "facebook" name: "relay") {\n          name\n        }\n      }\n    `).then(response => {\n      // Avoid updating state if the component unmounted before the fetch completes\n      if (!isMounted) {\n        return;\n      }\n      const data = response.data;\n      setName(data.repository.name);\n    }).catch(error => {\n      console.error(error);\n    });\n\n    return () => {\n      isMounted = false;\n    };\n  }, [fetchGraphQL]);\n\n  // Render "Loading" until the query completes\n  return (\n    <div className="App">\n      <header className="App-header">\n        <p>\n          {name != null ? `Repository: ${name}` : "Loading"}\n        </p>\n      </header>\n    </div>\n  );\n}\n\nexport default App;\n\n')),Object(o.b)("h2",{id:"step-3-when-to-use-relay"},"Step 3: When To Use Relay"),Object(o.b)("p",null,"At this point we can fetch data with GraphQL and render it with React. This is a reasonable solution that can be sufficient for many apps. However, this approach doesn't necessarily scale. As our app grows in size and complexity, or the number of people working on the app grows, a simple approach like this can become limiting. Relay provides a number of features designed to help keep applications fast and reliable even as they grow in size and complexity: colocating data dependencies in components with GraphQL fragments, data consistency, mutations, etc. Check out ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"./thinking-in-graphql"}),"Thinking in GraphQL")," and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"./thinking-in-relay"}),"Thinking in Relay")," for an overview of how Relay makes it easier to work with GraphQL."),Object(o.b)("h2",{id:"step-4-adding-relay-to-our-project"},"Step 4: Adding Relay To Our Project"),Object(o.b)("p",null,"In this guide we'll demonstrate installing the ",Object(o.b)("em",{parentName:"p"},"experimental")," release of Relay Hooks, a new, hooks-based Relay API that supports React Concurrent Mode and Suspense."),Object(o.b)("p",null,"First we'll add the necessary packages. Note that Relay is comprised of three key pieces: a compiler (which is used at build time), a core runtime (that is React agnostic), and a React integration layer."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"\n# NPM Users\nnpm install --save relay-runtime react-relay@experimental\nnpm install --save-dev relay-compiler graphql babel-plugin-relay\n\n# Yarn Users\nyarn add relay-runtime react-relay@experimental\nyarn add --dev relay-compiler graphql babel-plugin-relay\n\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Note"),": You may get a notice asking you to choose which version of ",Object(o.b)("inlineCode",{parentName:"p"},"relay-runtime")," to use - if so, specify version 7.0.x (e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"7.0.0"),")."),Object(o.b)("h3",{id:"41-configure-relay-compiler"},"4.1 Configure Relay Compiler"),Object(o.b)("p",null,"Next let's configure Relay compiler. We'll need a copy of the schema as a ",Object(o.b)("inlineCode",{parentName:"p"},".graphql")," file. If you're using the GitHub GraphQL API, you can download a copy directly from the Relay example app:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"\ncd your-app-name\ncurl https://raw.githubusercontent.com/relayjs/relay-examples/master/issue-tracker/schema/schema.graphql > schema.graphql\n\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Note:")," On Windows, the ",Object(o.b)("inlineCode",{parentName:"p"},".graphql")," file has to be explicitly saved with UTF-8 encoding, not the default UTF-16. See this ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/prisma-labs/get-graphql-schema/issues/30"}),"issue")," for more details."),Object(o.b)("p",null,"If you're using your own API we suggest using the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.npmjs.com/package/get-graphql-schema"}),Object(o.b)("inlineCode",{parentName:"a"},"get-graphql-schema"))," utility to download your schema into a ",Object(o.b)("inlineCode",{parentName:"p"},".graphql")," file."),Object(o.b)("p",null,"Now that we have a schema we can modify ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," to run the compiler first whenever we build or start our app:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'\n// your-app-name/package.json\n{\n  ...\n  "scripts": {\n    ...\n    "start": "yarn run relay && react-scripts start",\n    "build": "yarn run relay && react-scripts build",\n    "relay": "yarn run relay-compiler --schema schema.graphql --src ./src/ --watchman false $@"\n    ...\n  },\n  ...\n}\n\n')),Object(o.b)("p",null,"At this point, you should be able to run the following successfully:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"\ncd your-app-name\nyarn start\n\n")),Object(o.b)("p",null,"If it works, your app will open at ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://localhost:3000"}),"localhost:3000"),". Now when we write GraphQL in our app, Relay will detect it and generate code to represent our queries in ",Object(o.b)("inlineCode",{parentName:"p"},"your-app-name/src/__generated__/"),". We recommend checking in these generated files to source control."),Object(o.b)("h3",{id:"42-configure-relay-runtime"},"4.2 Configure Relay Runtime"),Object(o.b)("p",null,"Now that the compiler is configured we can set up the runtime - we have to tell Relay how to connect to our GraphQL server. We'll reuse the ",Object(o.b)("inlineCode",{parentName:"p"},"fetchGraphQL")," utility we built above. Assuming you haven't modified it (or at least that it still takes ",Object(o.b)("inlineCode",{parentName:"p"},"text")," and ",Object(o.b)("inlineCode",{parentName:"p"},"variables")," as arguments), we can now define a Relay ",Object(o.b)("inlineCode",{parentName:"p"},"Environment"),". An ",Object(o.b)("inlineCode",{parentName:"p"},"Environment")," encapsulates how to talk to our server (a Relay ",Object(o.b)("inlineCode",{parentName:"p"},"Network"),") with a cache of data retrieved from that server. We'll create a new file, ",Object(o.b)("inlineCode",{parentName:"p"},"src/RelayEnvironment.js")," and add the following:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"\n// your-app-name/src/RelayEnvironment.js\nimport { Environment, Network, RecordSource, Store } from 'relay-runtime';\nimport fetchGraphQL from './fetchGraphQL';\n\n// Relay passes a \"params\" object with the query name and text. So we define a helper function\n// to call our fetchGraphQL utility with params.text.\nasync function fetchRelay(params, variables) {\n  console.log(`fetching query ${params.name} with ${JSON.stringify(variables)}`);\n  return fetchGraphQL(params.text, variables);\n}\n\n// Export a singleton instance of Relay Environment configured with our network function:\nexport default new Environment({\n  network: Network.create(fetchRelay),\n  store: new Store(new RecordSource()),\n});\n\n")),Object(o.b)("h2",{id:"step-5-fetching-a-query-with-relay"},"Step 5: Fetching a Query With Relay"),Object(o.b)("p",null,"Now that Relay is installed and configured we can change ",Object(o.b)("inlineCode",{parentName:"p"},"App.js")," to use it instead. We'll prepare our data as the app starts, and wait for it to be ready in ",Object(o.b)("inlineCode",{parentName:"p"},"<App>"),". Replace the contents of ",Object(o.b)("inlineCode",{parentName:"p"},"src/App.js")," with the following:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"\nimport React from 'react';\nimport './App.css';\nimport fetchGraphQL from './fetchGraphQL';\nimport graphql from 'babel-plugin-relay/macro';\nimport {\n  RelayEnvironmentProvider,\n  preloadQuery,\n  usePreloadedQuery,\n} from 'react-relay/hooks';\nimport RelayEnvironment from './RelayEnvironment';\n\nconst { Suspense } = React;\n\n// Define a query\nconst RepositoryNameQuery = graphql`\n  query AppRepositoryNameQuery {\n    repository(owner: \"facebook\", name: \"relay\") {\n      name\n    }\n  }\n`;\n\n// Immediately load the query as our app starts. For a real app, we'd move this\n// into our routing configuration, preloading data as we transition to new routes.\nconst preloadedQuery = preloadQuery(RelayEnvironment, RepositoryNameQuery, {\n  /* query variables */\n});\n\n// Inner component that reads the preloaded query results via `usePreloadedQuery()`.\n// This works as follows:\n// - If the query has completed, it returns the results of the query.\n// - If the query is still pending, it \"suspends\" (indicates to React is isn't\n//   ready to render yet). This will show the nearest <Suspense> fallback.\n// - If the query failed, it throws the failure error. For simplicity we aren't\n//   handling the failure case here.\nfunction App(props) {\n  const data = usePreloadedQuery(RepositoryNameQuery, props.preloadedQuery);\n\n  return (\n    <div className=\"App\">\n      <header className=\"App-header\">\n        <p>{data.repository.name}</p>\n      </header>\n    </div>\n  );\n}\n\n// The above component needs to know how to access the Relay environment, and we\n// need to specify a fallback in case it suspends:\n// - <RelayEnvironmentProvider> tells child components how to talk to the current\n//   Relay Environment instance\n// - <Suspense> specifies a fallback in case a child suspends.\nfunction AppRoot(props) {\n  return (\n    <RelayEnvironmentProvider environment={RelayEnvironment}>\n      <Suspense fallback={'Loading...'}>\n        <App preloadedQuery={preloadedQuery} />\n      </Suspense>\n    </RelayEnvironmentProvider>\n  );\n}\n\nexport default AppRoot;\n\n")),Object(o.b)("p",null,"Note that you'll have to restart the app - ",Object(o.b)("inlineCode",{parentName:"p"},"yarn start")," - so that Relay compiler can see the new query and generate code for it. See the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"./installation-and-setup#set-up-relay-compiler"}),"Relay Compiler setup docs")," for how to run Relay Compiler in watch mode, to regenerate code as you modify queries."),Object(o.b)("h2",{id:"step-6-explore"},"Step 6: Explore!"),Object(o.b)("p",null,"At this point we have an app configured to use Relay. We recommend checking out the following for information and ideas about where to go next:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"./a-guided-tour-of-relay"}),"Guided Tour")," describes how to implement many common use-cases."),Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"./api-reference"}),"API Reference")," has full details on the Relay Hooks APIs."),Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/relayjs/relay-examples/tree/master/issue-tracker"}),"Example App")," is a more sophisticated version of what we've started building here. It includes routing integration and uses React Concurrent Mode and Suspense for smooth transitions between pages.")))}s.isMDXComponent=!0}}]);