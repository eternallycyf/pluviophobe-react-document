(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{481:function(e,t,r){"use strict";r.r(t),function(e){r.d(t,"default",(function(){return v}));var o,n=r(148),s=(r(381),r(0)),i=r.n(s),l=r(149),a=["components"];function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},s=Object.keys(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var b,d,p=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(l.b)("div",t)}},f=p("RcCard"),m={};function v(e){var t=e.components,r=u(e,a);return Object(l.b)("wrapper",c({},m,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{className:"__internal",id:"useisvisible"},"useIsVisible",Object(l.b)("a",{parentName:"h1",href:"#useisvisible","aria-hidden":!0,className:"anchor"},"#")),Object(l.b)(f,{cardTitle:"usage",cardExtra:"useIsVisible",content:"import useIsVisible from './useIsVisible'\nconst elemRef = useRef();\nconst isVisible = useVisible(elemRef);\n<div style={{ height: \"145vh\", width: '100%' }}>1</div>\n<div ref={elemRef}>hello {isVisible && console.log(\"visible\")}</div>",code:'import { useState, useEffect } from "react";\nconst OPTIONS = {\n  root: null,\n  rootMargin: "0px 0px 0px 0px",\n  threshold: 0,\n};\nconst useIsVisible = (elementRef) => {\n  const [isVisible, setIsVisible] = useState(false);\n  useEffect(() => {\n    if (elementRef.current) {\n      const observer = new IntersectionObserver((entries, observer) => {\n        entries.forEach((entry) => {\n          if (entry.isIntersecting) {\n            setIsVisible(true);\n            observer.unobserve(elementRef.current);\n          }\n        });\n      }, OPTIONS);\n      observer.observe(elementRef.current);\n    }\n  }, [elementRef]);\n  return isVisible;\n};\nexport default useIsVisible;',descriptionTitle:"useIsVisible-Hook SoundCode",description:Object(l.b)(i.a.Fragment,null,Object(l.b)("h3",null,"Usage scenario"),Object(l.b)("span",null,"1: virtual rendering"),Object(l.b)("span",null,"2: Lazy loading")),mdxType:"RcCard"}))}v.isMDXComponent=!0,v=Object(n.hot)(e)(v),(b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(b.register(p,"makeShortcode","/Users/eternallycyf/Documents/GitHub/case/pluviophobe-react-document/docs/more/react-hook/use-is-visible/README.md"),b.register(f,"RcCard","/Users/eternallycyf/Documents/GitHub/case/pluviophobe-react-document/docs/more/react-hook/use-is-visible/README.md"),b.register(m,"layoutProps","/Users/eternallycyf/Documents/GitHub/case/pluviophobe-react-document/docs/more/react-hook/use-is-visible/README.md"),b.register("wrapper","MDXLayout","/Users/eternallycyf/Documents/GitHub/case/pluviophobe-react-document/docs/more/react-hook/use-is-visible/README.md"),b.register(v,"MDXContent","/Users/eternallycyf/Documents/GitHub/case/pluviophobe-react-document/docs/more/react-hook/use-is-visible/README.md")),(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&d(e)}.call(this,r(5)(e))}}]);