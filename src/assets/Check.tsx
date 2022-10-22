import {SVGAttributes} from "react";

// import * as React from "react";

export function Check(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={10}
      height={7}
      viewBox="0 0 10 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.431.342L4.1 4.674 1.617 2.192l-.836.835 3.318 3.319 5.168-5.168-.836-.836z"
        fill="#F2F2F2"
      />
    </svg>
  );
}
