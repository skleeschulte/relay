(self.webpackChunk=self.webpackChunk||[]).push([[26138],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),h=a,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},57918:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>c,toc:()=>p,default:()=>u});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o=["components"],l={id:"upgrading-setvariables",title:"Upgrading setVariables",original_id:"upgrading-setvariables"},s=void 0,c={unversionedId:"upgrading-setvariables",id:"version-v10.1.2/upgrading-setvariables",isDocsHomePage:!1,title:"Upgrading setVariables",description:"Examples on how to migrate this.props.setVariables calls from the old API.",source:"@site/versioned_docs/version-v10.1.2/Modern-UpgradingSetVariables.md",sourceDirName:".",slug:"/upgrading-setvariables",permalink:"/docs/v10.1.2/upgrading-setvariables",editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v10.1.2/Modern-UpgradingSetVariables.md",version:"v10.1.2",lastUpdatedBy:"Jianfeng Chen",lastUpdatedAt:1635518653,formattedLastUpdatedAt:"10/29/2021",frontMatter:{id:"upgrading-setvariables",title:"Upgrading setVariables",original_id:"upgrading-setvariables"}},p=[{value:"<code>initialVariables</code>",id:"initialvariables",children:[]},{value:"Pagination",id:"pagination",children:[]},{value:"Changing Arguments",id:"changing-arguments",children:[]},{value:"Show More",id:"show-more",children:[]}],d={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,"Examples on how to migrate ",(0,i.kt)("code",null,"this.props.setVariables")," calls from the old API."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"this.props.setVariables")," from the old API does not have a direct equivalent in the new API. A big reason for this change is that the new core no longer tracks how to refetch any specific sub-tree from the query. This makes the new core a lot faster, but requires explicit queries for how to fetch new data. Check out these four different scenarios:"),(0,i.kt)("h2",{id:"initialvariables"},(0,i.kt)("inlineCode",{parentName:"h2"},"initialVariables")),(0,i.kt)("p",null,"If the component doesn't actually use ",(0,i.kt)("inlineCode",{parentName:"p"},"setVariables()"),", and just uses ",(0,i.kt)("inlineCode",{parentName:"p"},"initialVariables")," to share values between JS and GraphQL, there are two alternative approaches:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Inline the value in the GraphQL query, potentially annotating with a GraphQL comment (i.e. ",(0,i.kt)("inlineCode",{parentName:"li"},"# PAGE_SIZE"),")."),(0,i.kt)("li",{parentName:"ul"},"Add the variable to the queries that use the fragment and pass it in when fetching the query. For this it can be useful to have a module with a collection of variables for your product.")),(0,i.kt)("h2",{id:"pagination"},"Pagination"),(0,i.kt)("p",null,"Typical Relay Classic code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\n// counterexample\nthis.props.relay.setVariables({\n  count: count + 10,\n});\n\ninitialVariables: {\n  count: 10,\n},\n\nfragment on User {\n  friends(first: $count) {\n    # ...\n  }\n}\n")),(0,i.kt)("p",null,"This should be upgraded to use a ",(0,i.kt)("a",{parentName:"p",href:"./pagination-container"},(0,i.kt)("inlineCode",{parentName:"a"},"PaginationContainer")),"."),(0,i.kt)("h2",{id:"changing-arguments"},"Changing Arguments"),(0,i.kt)("p",null,"Typical old code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\n// counterexample\nthis.props.relay.setVariables({\n  search: newSearchTerm,\n});\n\ninitialVariables: {\n  search: '',\n}\n\nfragment on User {\n  friends(named: $search, first: 10) {\n    # ...\n  }\n}\n")),(0,i.kt)("p",null,"This can be upgraded by using a ",(0,i.kt)("a",{parentName:"p",href:"./refetch-container"},(0,i.kt)("inlineCode",{parentName:"a"},"RefetchContainer"))," which allows you to specify the exact query to use to fetch the new data."),(0,i.kt)("h2",{id:"show-more"},"Show More"),(0,i.kt)("p",null,"Typical old code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\n// counterexample\nthis.props.relay.setVariables({\n  showComments: true,\n});\n\ninitialVariables: {\n  showComments: false,\n}\n\nfragment on FeedbackTarget {\n  comments(first: 10) @include(if: $showComments) {\n    # ...\n  }\n}\n")),(0,i.kt)("p",null,"This can be upgraded by conditionally rendering a ",(0,i.kt)("a",{parentName:"p",href:"./query-renderer"},(0,i.kt)("inlineCode",{parentName:"a"},"QueryRenderer"))," which will load the data once it is rendered. The code overhead of doing this is dramatically reduced with the new API."),(0,i.kt)("p",null,"Alternatively a ",(0,i.kt)("a",{parentName:"p",href:"./refetch-container"},(0,i.kt)("inlineCode",{parentName:"a"},"RefetchContainer"))," can also be used."))}u.isMDXComponent=!0}}]);