"use strict";(self.webpackChunk_pixi_react_docs=self.webpackChunk_pixi_react_docs||[]).push([[73],{5036:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7896),r=(n(2784),n(3905));const i={slug:"/",sidebar_position:1},o="About",l={unversionedId:"about",id:"about",title:"About",description:"Pixi React",source:"@site/docs/about.mdx",sourceDirName:".",slug:"/",permalink:"/",draft:!1,editUrl:"https://github.com/pixijs/pixi-react/tree/master/packages/docs/docs/about.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"AnimatedSprite",permalink:"/components/AnimatedSprite"}},s={},p=[{value:"News!",id:"news",level:2},{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"Example",id:"example",level:2},{value:"Components",id:"components",level:2},{value:"Donate",id:"donate",level:2},{value:"Join us",id:"join-us",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"about"},"About"),(0,r.kt)("p",null,(0,r.kt)("h1",{align:"center",hidden:!0},"Pixi React"),(0,r.kt)("img",{src:"/img/pixi-react-rainbow.png",alt:"pixi-react",width:"310"})),(0,r.kt)("p",null,(0,r.kt)("strong",null,"Simply the best way to write PIXI applications in React"),(0,r.kt)("br",null),(0,r.kt)("sub",null,"Write ",(0,r.kt)("a",{href:"http://www.pixijs.com/"},"PIXI")," applications using React declarative style \ud83d\udc4c")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/github/v/release/pixijs/pixi-react",alt:"release"})," ","\xa0","\xa0"," ",(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/npm/dm/@pixi/react",alt:"downloads"})," ","\xa0","\xa0"," ",(0,r.kt)("a",{parentName:"p",href:"https://circleci.com/gh/pixijs/pixi-react"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/circleci/project/github/pixijs/pixi-react/master.svg",alt:"CircleCI"}))," ","\xa0","\xa0"," ",(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/license-MIT-green.svg",alt:"license"})," ","\xa0","\xa0"," ",(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/react-latest-ff69b4.svg",alt:"react"})," ","\xa0","\xa0"," ",(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/pixi-v6+-ff69b4.svg",alt:"pixi"})),(0,r.kt)("h2",{id:"news"},"News!"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ReactPixi will be a first-party React layer for PIXI and maintained by the core devs of PIXI!")),(0,r.kt)("p",null,"Dear ReactPixi community,"),(0,r.kt)("p",null,"I am thrilled to announce that ReactPixi, the premier library for using Pixi.js with React, is being officially transferred to the Pixi team! This project started as a passion of mine, and it quickly grew into a beloved resource for the Pixi community thanks to all of your support.\nWe are excited to be working closely with the team at Pixi, to continue improving and supporting the library. We want to extend a huge thank you to everyone who has supported ReactPixi over the years, and we especially want to thank Mat Groves for making this transfer possible.\nWe can't wait to see what the future holds for the library under the stewardship of the Pixi team. Stay tuned for updates and new developments as we work together to take ReactPixi to the next level!"),(0,r.kt)("p",null,"Sincerely,\nPatrick Brouwer"),(0,r.kt)("h2",{id:"install"},"Install"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @pixi/react --save\n")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { Stage, Sprite } from '@pixi/react';\n\nconst App = () => (\n  <Stage>\n    <Sprite image=\"./bunny.png\" x={100} y={100} />\n  </Stage>\n);\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://codepen.io/collection/XPpGdb/"},"Codepen examples")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live noInline",live:!0,noInline:!0},"const reducer = (_, { data }) => data;\n\nconst Bunny = () => {\n  const [motion, update] = useReducer(reducer);\n  const iter = useRef(0);\n\n  useTick((delta) => {\n    const i = (iter.current += 0.05 * delta);\n\n    update({\n      type: 'update',\n      data: {\n        x: Math.sin(i) * 100,\n        y: Math.sin(i / 1.5) * 100,\n        rotation: Math.sin(i) * Math.PI,\n        anchor: Math.sin(i / 2),\n      },\n    });\n  });\n\n  return <Sprite image=\"/img/bunny.png\" {...motion} />;\n};\n\nrender(\n  <Stage width={300} height={300} options={{ backgroundAlpha: 0 }}>\n    <Container x={150} y={150}>\n      <Bunny />\n    </Container>\n  </Stage>,\n);\n")),(0,r.kt)("h2",{id:"components"},"Components"),(0,r.kt)("p",null,"Pass PIXI properties directly as component props, example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { Sprite } from '@pixi/react'\n\nconst MyComponent = () => (\n  <Sprite\n    texture={myTexture}\n    anchor={0.5}\n    position={[100, 200]}\n    blendMode={PIXI.BLEND_MODES.ADD}\n    roundPixels={true}\n    filters={[blurFilter, matrixFilter]}\n  />;\n);\n")),(0,r.kt)("h2",{id:"donate"},"Donate"),(0,r.kt)("p",null,"If you are enthusiast and this project helps reducing your development time, or you just want to show your gratitude to the creator and maintainer of the project, please buy me a coffee, thanks so much!"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.paypal.me/donatepatrick"},"Make a donation")),(0,r.kt)("h2",{id:"join-us"},"Join us"),(0,r.kt)("p",null,"You're missing an amazing feature? Or just want to get in touch with fellow developers\nand have a chat? Feel free to join our Discord channel."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://discord.com/channels/734147990985375826/968068526566965279"},"Join us on Discord")))}u.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);