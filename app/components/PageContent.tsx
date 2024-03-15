"use client";

import dynamic from "next/dynamic";
import { lazy } from 'react';

const WithInlineStyle = dynamic(() => import("./WithInlineStyle"));
const WithJustCSS = dynamic(() => import("./WithJustCSS"));
// const WithTailwind = dynamic(() => import("./WithTailwind"));
// const WithTailwindStyledComponents = dynamic(
//   () => import("./WithTailwindStyledComponents"),
// );

const WithCSSModule = lazy(() => import("./WithCSSModule"));

const ComponentDynamic = () => (
  <>
    <WithInlineStyle />
    <WithJustCSS />
    {/* <WithTailwind /> */}
    {/* <WithTailwindStyledComponents /> */}
    <WithCSSModule />
  </>
);

export default ComponentDynamic;
