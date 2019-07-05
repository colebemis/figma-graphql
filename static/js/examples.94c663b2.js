(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"./docs/examples.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return r});var a=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=(t("./node_modules/react/index.js"),t("./node_modules/@mdx-js/react/dist/index.es.js")),s={},l="wrapper";function r(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)(l,Object.assign({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"practical-examples"},"Practical examples"),Object(o.b)("p",null,"Let's look at some practical examples in the perspective of designers, developers and product managers."),Object(o.b)("h2",{id:"designers"},"Designers"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Get all text styles in a specific frame")),Object(o.b)("p",null,"This example tries to follow the structure of the file to get the information we need."),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-gql"}),'{\n    file(id: "fileID") {\n        pages(name: "styles") {\n            frames(name: "typography") {\n                groups {\n                    name\n                    texts {\n                        name\n                        styles {\n                            fontSize\n                            fontFamily\n                            fontWeight\n                            ...\n                        }\n                    }\n                }\n            }\n        }\n    }\n}\n')),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Get the background colours of all the global styles to update their Design System documentation")),Object(o.b)("p",null,"We can now use the power of the shortcuts to get that information easily."),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-gql"}),'{\n    file(id: "fileID") {\n        styles(type: FILL) {\n            name\n            styles {\n                color {\n                    r\n                    g\n                    b\n                }\n            }\n        }\n    }\n}\n')),Object(o.b)("h2",{id:"developers"},"Developers"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Export all icons in a design document to generate up-to-date React components")),Object(o.b)("p",null,"We want to export the components in SVG format."),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-gql"}),'{\n    file(id: \u201cfileID\u201d) {\n        pages(name: "Icons") {\n            components {\n                name\n                size {\n                    width\n                    height\n                }\n                export(format: svg)\n            }\n        }\n    }\n}\n')),Object(o.b)("h2",{id:"product-managers"},"Product Managers"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Get the screenshots of the prototype screens for a few different features to present at a product meeting")),Object(o.b)("p",null,"We need to go through all the files inside the team projects so we'll be using aliases. "),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-gql"}),'{\n    projects(teamId: "teamID") {\n        featureA: files(name: "Feature A") {\n            pages(name: "Prototype") {\n                frames {\n                    name\n                    export(format: jpg)\n                }\n            }\n        },\n        featureB: files(name: "Feature B") {\n            pages(name: "Prototype") {\n                frames {\n                    name\n                    export(format: jpg)\n                }\n            }\n        }\n    }\n}\n')))}r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"docs/examples.mdx"}}),r.isMDXComponent=!0}}]);
//# sourceMappingURL=examples.4640da8f88dd86756cc4.js.map