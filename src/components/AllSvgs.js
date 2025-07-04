export const PowerBtn = (props) => {
  return (
    <svg
      aria-hidden="true"
      data-prefix="fas"
      data-icon="power-off"
      className="prefix__svg-inline--fa prefix__fa-power-off prefix__fa-w-16"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      {...props}
    >
      <path
        fill={props.fill}
        d="M400 54.1c63 45 104 118.6 104 201.9 0 136.8-110.8 247.7-247.5 248C120 504.3 8.2 393 8 256.4 7.9 173.1 48.9 99.3 111.8 54.2c11.7-8.3 28-4.8 35 7.7L162.6 90c5.9 10.5 3.1 23.8-6.6 31-41.5 30.8-68 79.6-68 134.9-.1 92.3 74.5 168.1 168 168.1 91.6 0 168.6-74.2 168-169.1-.3-51.8-24.7-101.8-68.1-134-9.7-7.2-12.4-20.5-6.5-30.9l15.8-28.1c7-12.4 23.2-16.1 34.8-7.8zM296 264V24c0-13.3-10.7-24-24-24h-32c-13.3 0-24 10.7-24 24v240c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24z"
      />
    </svg>
  );
};

export const GeeksforGeeks = (props) => {
  const isDark = props.fill === "#FCF6F4"; // from DarkTheme.text

  return (
    <img
      src="https://media.geeksforgeeks.org/gfg-gg-logo.svg"
      alt="GeeksforGeeks"
      width={props.width || 28}
      height={props.height || 28}
      style={{
        objectFit: "contain",
        // Simulate black in light theme, white in dark theme
        filter: isDark
          ? "brightness(0) invert(1)" // white logo for dark theme
          : "brightness(0) saturate(100%)", // black logo for light theme
        ...props.style,
      }}
    />
  );
};

export const Github = (props) => {
  return (
    <svg
      aria-hidden="true"
      data-prefix="fab"
      data-icon="github"
      className="prefix__svg-inline--fa prefix__fa-github prefix__fa-w-16"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 496 512"
      {...props}
    >
      <path
        fill={props.fill}
        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
      />
    </svg>
  );
};

export const Twitter = (props) => {
  return (
    <svg
      aria-hidden="true"
      data-prefix="fab"
      data-icon="twitter"
      className="prefix__svg-inline--fa prefix__fa-twitter prefix__fa-w-16"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      {...props}
    >
      <path
        fill={props.fill}
        d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z"
      />
    </svg>
  );
};

export const LeetCode = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
      id="leetcode"
      {...props}
    >
      <path d="M22,14.355c0-0.742-0.564-1.346-1.26-1.346H10.676c-0.696,0-1.26,0.604-1.26,1.346s0.563,1.346,1.26,1.346H20.74C21.436,15.702,22,15.098,22,14.355z"></path>
      <path d="M3.482,18.187l4.313,4.361C8.768,23.527,10.113,24,11.598,24c1.485,0,2.83-0.512,3.805-1.494l2.588-2.637c0.51-0.514,0.492-1.365-0.039-1.9c-0.531-0.535-1.375-0.553-1.884-0.039l-2.676,2.607c-0.462,0.467-1.102,0.662-1.809,0.662s-1.346-0.195-1.81-0.662l-4.298-4.363c-0.463-0.467-0.696-1.15-0.696-1.863c0-0.713,0.233-1.357,0.696-1.824l4.285-4.38c0.463-0.467,1.116-0.645,1.822-0.645s1.346,0.195,1.809,0.662l2.676,2.606c0.51,0.515,1.354,0.497,1.885-0.038c0.531-0.536,0.549-1.387,0.039-1.901l-2.588-2.636c-0.649-0.646-1.471-1.116-2.392-1.33l-0.034-0.007l2.447-2.503c0.512-0.514,0.494-1.366-0.037-1.901c-0.531-0.535-1.376-0.552-1.887-0.038L3.482,10.476C2.509,11.458,2,12.813,2,14.311C2,15.809,2.509,17.207,3.482,18.187z"></path>
    </svg>
  );
};


export const YinYang = (props) => {
  return (
    <svg
      aria-hidden="true"
      data-prefix="fas"
      data-icon="yin-yang"
      className="prefix__svg-inline--fa prefix__fa-yin-yang prefix__fa-w-16"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 496 512"
      {...props}
    >
      <path
        fill={props.fill}
        d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 376c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm0-128c-53.02 0-96 42.98-96 96s42.98 96 96 96c-106.04 0-192-85.96-192-192S141.96 64 248 64c53.02 0 96 42.98 96 96s-42.98 96-96 96zm0-128c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.33-32-32-32z"
      />
    </svg>
  );
};

export const Linkedin = (props) => {
  return (
    <svg
      aria-hidden="true"
      data-prefix="fab"
      data-icon="linkedin"
      className="prefix__svg-inline--fa prefix__fa-github prefix__fa-w-16"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill={props.fill}
        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
      />
    </svg>
  );
};

export const Facebook = (props) => {
  return (
    <svg
      aria-hidden="true"
      data-prefix="fab"
      data-icon="facebook"
      className="prefix__svg-inline--fa prefix__fa-facebook prefix__fa-w-16"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      {...props}
    >
      <path
        fill={props.fill}
        d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
      />
    </svg>
  );
};

export const Medium = (props) => {
  return (
    <svg
      aria-hidden="true"
      data-prefix="fab"
      data-icon="medium"
      className="prefix__svg-inline--fa prefix__fa-facebook prefix__fa-w-16"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 512"
      {...props}
    >
      <path
        fill={props.fill}
        d="M180.5,74.262C80.813,74.262,0,155.633,0,256S80.819,437.738,180.5,437.738,361,356.373,361,256,280.191,74.262,180.5,74.262Zm288.25,10.646c-49.845,0-90.245,76.619-90.245,171.095s40.406,171.1,90.251,171.1,90.251-76.619,90.251-171.1H559C559,161.5,518.6,84.908,468.752,84.908Zm139.506,17.821c-17.526,0-31.735,68.628-31.735,153.274s14.2,153.274,31.735,153.274S640,340.631,640,256C640,171.351,625.785,102.729,608.258,102.729Z"
      />
    </svg>
  );
};



export const Anchor = (props) => {
  return (
    <svg
      aria-hidden="true"
      data-prefix="fas"
      data-icon="anchor"
      className="prefix__svg-inline--fa prefix__fa-anchor prefix__fa-w-18"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
      {...props}
    >
      <path
        fill={props.fill}
        d="M12.971 352h32.394C67.172 454.735 181.944 512 288 512c106.229 0 220.853-57.38 242.635-160h32.394c10.691 0 16.045-12.926 8.485-20.485l-67.029-67.029c-4.686-4.686-12.284-4.686-16.971 0l-67.029 67.029c-7.56 7.56-2.206 20.485 8.485 20.485h35.146c-20.29 54.317-84.963 86.588-144.117 94.015V256h52c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-52v-5.47c37.281-13.178 63.995-48.725 64-90.518C384.005 43.772 341.605.738 289.37.01 235.723-.739 192 42.525 192 96c0 41.798 26.716 77.35 64 90.53V192h-52c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h52v190.015c-58.936-7.399-123.82-39.679-144.117-94.015h35.146c10.691 0 16.045-12.926 8.485-20.485l-67.029-67.029c-4.686-4.686-12.284-4.686-16.971 0L4.485 331.515C-3.074 339.074 2.28 352 12.971 352zM288 64c17.645 0 32 14.355 32 32s-14.355 32-32 32-32-14.355-32-32 14.355-32 32-32z"
      />
    </svg>
  );
};

export const Link = (props) => {
  return (
    <svg
      aria-hidden="true"
      data-prefix="fas"
      data-icon="link"
      className="prefix__svg-inline--fa prefix__fa-link prefix__fa-w-16"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      {...props}
    >
      <path
        fill={props.fill}
        d="M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"
      />
    </svg>
  );
};

export const Design = (props) => {
  return (
    <svg
      aria-hidden="true"
      data-prefix="fas"
      data-icon="palette"
      className="prefix__svg-inline--fa prefix__fa-palette prefix__fa-w-16"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      {...props}
    >
      <path
        fill={props.fill}
        d="M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"
      />
    </svg>
  );
};

export const Develope = (props) => {
  return (
    <svg
      aria-hidden="true"
      data-prefix="fas"
      data-icon="laptop-code"
      className="prefix__svg-inline--fa prefix__fa-laptop-code prefix__fa-w-20"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 512"
      {...props}
    >
      <path
        fill={props.fill}
        d="M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"
      />
    </svg>
  );
};

export const Antd = (props) => {
  return (
    <svg
      height="256"
      viewBox="0 0 256 256"
      width="256"
      xmlns="http://www.w3.org/2000/svg"
    >
      <linearGradient
        id="a"
        x1="62.102327%"
        x2="108.19718%"
        y1="0%"
        y2="37.863576%"
      >
        <stop offset="0" stopColor="#4285eb" />
        <stop offset="1" stopColor="#2ec7ff" />
      </linearGradient>
      <linearGradient
        id="b"
        x1="69.644116%"
        x2="54.042898%"
        y1="0%"
        y2="108.456714%"
      >
        <stop offset="0" stopColor="#29cdff" />
        <stop offset=".378600687" stopColor="#148eff" />
        <stop offset="1" stopColor="#0a60ff" />
      </linearGradient>
      <linearGradient
        id="c"
        x1="69.690817%"
        x2="16.722898%"
        y1="-12.974359%"
        y2="117.391248%"
      >
        <stop offset="0" stopColor="#fa816e" />
        <stop offset=".41472606" stopColor="#f74a5c" />
        <stop offset="1" stopColor="#f51d2c" />
      </linearGradient>
      <linearGradient
        id="d"
        x1="68.127987%"
        x2="30.440091%"
        y1="-35.690574%"
        y2="114.942679%"
      >
        <stop offset="0" stopColor="#fa8e7d" />
        <stop offset=".512635191" stopColor="#f74a5c" />
        <stop offset="1" stopColor="#f51d2c" />
      </linearGradient>
      <g fill="none">
        <path
          d="m116.850078 4.54548777-112.32114907 112.22878723c-6.03857191 6.033606-6.03857191 15.778899 0 21.812506l112.32114907 112.228787c6.038572 6.033607 15.791886 6.033607 21.830458 0l47.094654-47.055927c5.407982-5.403535 5.407982-14.164396 0-19.56793-5.407982-5.403536-14.176054-5.403536-19.584036 0l-35.702079 35.672721c-1.502991 1.501755-3.784086 1.501755-5.287077 0l-89.6964602-89.622703c-1.5029909-1.501755-1.5029909-3.780974 0-5.282729l89.6964602-89.6227024c1.502991-1.5017551 3.784086-1.5017551 5.287077 0l35.702079 35.6727214c5.407982 5.4035349 14.176054 5.4035349 19.584036 0 5.407982-5.403535 5.407982-14.1643962 0-19.5679311l-47.089463-47.05080777c-6.063366-5.90303668-15.820247-5.85524816-21.835649.15520764z"
          fill="url(#a)"
        />
        <path
          d="m116.850078 4.54548777-112.32114907 112.22878723c-6.03857191 6.033606-6.03857191 15.778899 0 21.812506l112.32114907 112.228787c6.038572 6.033607 15.791886 6.033607 21.830458 0l47.094654-47.055927c5.407982-5.403535 5.407982-14.164396 0-19.56793-5.407982-5.403536-14.176054-5.403536-19.584036 0l-35.702079 35.672721c-1.502991 1.501755-3.784086 1.501755-5.287077 0l-89.6964602-89.622703c-1.5029909-1.501755-1.5029909-3.780974 0-5.282729l89.6964602-89.6227024c3.742399-3.2262971 9.848527-9.7610839 18.815407-11.2894545 6.664025-1.1358578 13.949616 1.364145 21.856772 7.5000089-5.28643-5.2820901-14.349247-14.3342807-27.18845-27.15657187-6.063366-5.90303668-15.820247-5.85524816-21.835649.15520764z"
          fill="url(#b)"
        />
        <path
          d="m196.646643 173.754365c5.407982 5.403534 14.176053 5.403534 19.584034 0l34.739327-34.710761c6.038572-6.033606 6.038572-15.7789.000707-21.811803l-35.042164-34.889186c-5.420784-5.397121-14.191639-5.389338-19.602822.0173949-5.407982 5.403535-5.407982 14.1643961 0 19.5679311l23.667671 23.648209c1.502991 1.501755 1.502991 3.780974 0 5.282729l-23.346753 23.327554c-5.407983 5.403535-5.407983 14.164396 0 19.567932z"
          fill="url(#c)"
        />
        <ellipse
          cx="128.326913"
          cy="128.241672"
          fill="url(#d)"
          rx="30.32671"
          ry="30.301772"
        />
      </g>
    </svg>
  );
};

export const Slack = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0 0 48 48"
    >
      <path
        fill="#33d375"
        d="M33,8c0-2.209-1.791-4-4-4s-4,1.791-4,4c0,1.254,0,9.741,0,11c0,2.209,1.791,4,4,4s4-1.791,4-4	C33,17.741,33,9.254,33,8z"
      ></path>
      <path
        fill="#33d375"
        d="M43,19c0,2.209-1.791,4-4,4c-1.195,0-4,0-4,0s0-2.986,0-4c0-2.209,1.791-4,4-4S43,16.791,43,19z"
      ></path>
      <path
        fill="#40c4ff"
        d="M8,14c-2.209,0-4,1.791-4,4s1.791,4,4,4c1.254,0,9.741,0,11,0c2.209,0,4-1.791,4-4s-1.791-4-4-4	C17.741,14,9.254,14,8,14z"
      ></path>
      <path
        fill="#40c4ff"
        d="M19,4c2.209,0,4,1.791,4,4c0,1.195,0,4,0,4s-2.986,0-4,0c-2.209,0-4-1.791-4-4S16.791,4,19,4z"
      ></path>
      <path
        fill="#e91e63"
        d="M14,39.006C14,41.212,15.791,43,18,43s4-1.788,4-3.994c0-1.252,0-9.727,0-10.984	c0-2.206-1.791-3.994-4-3.994s-4,1.788-4,3.994C14,29.279,14,37.754,14,39.006z"
      ></path>
      <path
        fill="#e91e63"
        d="M4,28.022c0-2.206,1.791-3.994,4-3.994c1.195,0,4,0,4,0s0,2.981,0,3.994c0,2.206-1.791,3.994-4,3.994	S4,30.228,4,28.022z"
      ></path>
      <path
        fill="#ffc107"
        d="M39,33c2.209,0,4-1.791,4-4s-1.791-4-4-4c-1.254,0-9.741,0-11,0c-2.209,0-4,1.791-4,4s1.791,4,4,4	C29.258,33,37.746,33,39,33z"
      ></path>
      <path
        fill="#ffc107"
        d="M28,43c-2.209,0-4-1.791-4-4c0-1.195,0-4,0-4s2.986,0,4,0c2.209,0,4,1.791,4,4S30.209,43,28,43z"
      ></path>
    </svg>
  );
};

export const Figma = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0 0 48 48"
    >
      <path
        fill="#e64a19"
        d="M26,17h-8c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h8V17z"
      ></path>
      <path
        fill="#7c4dff"
        d="M25,31h-7c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7V31z"
      ></path>
      <path
        fill="#66bb6a"
        d="M18,45L18,45c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7v7C25,41.866,21.866,45,18,45z"
      ></path>
      <path
        fill="#ff7043"
        d="M32,17h-7V3h7c3.866,0,7,3.134,7,7v0C39,13.866,35.866,17,32,17z"
      ></path>
      <circle cx="32" cy="24" r="7" fill="#29b6f6"></circle>
    </svg>
  );
};

export const Babel = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 419.63 512">
      <title>Minimal Babel Logo</title>
      <path
        d="M133.29,111.06l-.07,0h.17Z"
        transform="translate(-46.19)"
        fill="none"
      />
      <path
        d="M141.82,442a32.06,32.06,0,0,0,3.53-1.27Z"
        transform="translate(-46.19)"
        fill="none"
      />
      <path
        d="M123.86,117.7c-1.21.93-2.41,1.89-3.59,2.86s-2.12,1.79-3.17,2.71l8.49-6.88Z"
        transform="translate(-46.19)"
        fill="none"
      />
      <path
        d="M305.05,239.56l-10.45.9q-63.84,25.12-93.51,27.68-53,105.35-65.76,133.27Q158.85,395,226.07,358q3.8-.33,52.91-32.53l44.11-34.94q14.31-6,26.19-40.16l-.16-1.89Q333.4,237.13,305.05,239.56Z"
        transform="translate(-46.19)"
        fill="none"
      />
      <path
        d="M393.83,98.54l.81-10,3.57-.31c.28,3.29,1.53,4.83,3.74,4.64q8-10.16,7.38-17.1a16.56,16.56,0,0,0-.43-2.55,34.19,34.19,0,0,0-8.74-6.55L396.6,67l.71,8.28-3.32.29a16.43,16.43,0,0,0-2.82-8.14l-1.68.14A20.12,20.12,0,0,0,389.1,65q-10-9.6-40.39-7-5.7.48-29.3,4.1l-.4-4.7-5.23.45q-24,4.1-23.38,11.71L254,151.69q-6.13,3.69-11.22,30.74-7.17,11.06-8.31,19.17a13.09,13.09,0,0,1,2.64.91Q302.75,173.85,313,173q30.81-19.8,37.75-28.07,2.15-.18,11.13-12.46Q371.8,131.56,393.83,98.54Z"
        transform="translate(-46.19)"
        fill="none"
      />
      <path
        d="M98.89,133.91l1.93,3c2.2-2,4.08-3.69,5.66-5l-2.71-4.07A70.8,70.8,0,0,0,98.89,133.91Z"
        transform="translate(-46.19)"
        fill="#010101"
      />
      <path
        d="M162.94,72.18,162.83,71c-3.14,1.83-6.32,3.65-9.59,5.47l.29,3.36a7.85,7.85,0,0,0,1.92-.49Q163,73.32,162.94,72.18Z"
        transform="translate(-46.19)"
        fill="#010101"
      />
      <path
        d="M254,151.69,290.4,69.58q-.66-7.6,23.38-11.71l5.23-.45.4,4.7Q343,58.51,348.71,58q30.36-2.62,40.39,7Q385,46.52,344.21,50q-5.68.49-29.3,4.1l-.4-4.7-5.22.45q-24,4.1-23.39,11.72l-36.45,82.1q-6.13,3.69-11.22,30.75-9.28,14.33-8.48,23.74l.27,3.13a14.23,14.23,0,0,1,4.4.29q1.16-8.11,8.31-19.17Q247.82,155.39,254,151.69Z"
        transform="translate(-46.19)"
        fill="#010101"
      />
      <path
        d="M397.31,75.26,396.6,67l3.56-.31a34.19,34.19,0,0,1,8.74,6.55q-2.1-8.43-13.24-14.55L392.1,59l.71,8.28-1.64.15A16.43,16.43,0,0,1,394,75.55Z"
        transform="translate(-46.19)"
        fill="#010101"
      />
      <path
        d="M294.6,240.46l10.45-.9q28.35-2.44,44.07,8.92l-.4-4.6q-15.89-15.1-48.17-12.32l-10.45.9q-63.84,25.13-93.51,27.69-67.38,134-69.73,142.72l1.9-.16a39.41,39.41,0,0,0,6.57-1.3q12.78-27.93,65.76-133.27Q230.76,265.59,294.6,240.46Z"
        transform="translate(-46.19)"
        fill="#010101"
      />
      <path
        d="M404.52,178.42l43.8-38.52Q462.95,121,465.81,79.29l-.56-6.5a43.49,43.49,0,0,0-7.91-21.51,43.12,43.12,0,0,1,3.42,13.51l.55,6.5q-2.85,41.76-17.49,60.62L400,170.42q-23.28,13.07-22.67,20,2.58,2.87,5,5.53Q385.12,189.32,404.52,178.42Z"
        transform="translate(-46.19)"
        fill="#010101"
      />
      <path
        d="M108.06,123.55c-.63.54-1.25,1.11-1.87,1.71a7.49,7.49,0,0,1,2-.53Z"
        transform="translate(-46.19)"
        fill="#010101"
      />
      <path
        d="M339.42,338.53q-24.5,15.44-72.27,52.25-9.4,7.37-34,11.05l.16,1.79,1.89-.16,8.4-2.53.15,1.79q-17.4,14.58-50.87,17.47Q174,430.33,145.35,440.7a32.06,32.06,0,0,1-3.53,1.27q-13.45,4.78-29,9.62-7.77,2.42-16.06,4.86Q87.2,476.3,69.87,497c-1.56,3.78-3.15,8.25-4.78,13.45l.13,1.57,3.32-.29q21.6-24.19,32.76-47.26,63-18.52,96.12-36.26,33.48-2.88,50.87-17.47l-.16-1.79-8.39,2.53-1.9.16-.15-1.79q24.56-3.69,34-11.05,47.78-36.82,72.27-52.25Q419.49,291.06,415.09,240q-.16-1.92-4.49-7.81Q414.86,283.16,339.42,338.53Z"
        transform="translate(-46.19)"
        fill="#010101"
      />
      <path
        d="M220.71,73.75q-37.89,12.73-76.55,41.33l-3.57.31q-.21-2.44-7.2-4.3h-.17q-3.91,2.5-7.63,5.29l-8.49,6.88c-1.66,1.47-3.28,3-4.88,4.53h0l.43,4.93a15.06,15.06,0,0,0-5.09,2l4.12,6.19a133.79,133.79,0,0,1,26.09-21.88q7.09,1.88,7.31,4.34l3.56-.31Q181.9,98.5,214.57,85.64A66.4,66.4,0,0,0,221,77.1Z"
        transform="translate(-46.19)"
        fill="#010101"
      />
      <path
        d="M77.86,461.47l-.24-2.78-.05-.58c-1.64.14-2.7-.06-3.17-.61a1.14,1.14,0,0,1-.29-.68l-3.42,1.88-3.32.29-.29-3.36-1.9.16c-1.87,1.71-5.81,3.41-11.78,5.09-.91,1.53-1.82,3.06-2.71,4.54a11.7,11.7,0,0,0,2.08,4.79q13.36-3.18,16.91-6.42l1.89-.17.29,3.36,3.33-.28,2.18-1.2A12.05,12.05,0,0,0,77.86,461.47Z"
        transform="translate(-46.19)"
        fill="#010101"
      />
      <path
        d="M400,170.42l43.79-38.51Q458.46,113,461.31,71.29l-.55-6.5a43.12,43.12,0,0,0-3.42-13.51q-8.79-20.22-39.18-34Q394.54,1.25,333,0q-51,4.4-133,36.05a504.74,504.74,0,0,1-51.25,32.39L149,71.8a13.43,13.43,0,0,0,5.08-2q3.33-.28,3.6,2.85l3.42-1.87,1.66-.15,0,.36.11,1.21q.09,1.14-7.49,7.13-8.89,7-28.37,20.78l1.93,3-1.66.14-3.7-1.26q.13,1.58-5.08,2l.15,1.79,4,4.4a13.48,13.48,0,0,1-5.36-1.12q-11.64,1-22.94,16.86l1.93,3q9.75-9,11.41-9.11l.33,3.75.1,1.18a7.49,7.49,0,0,0-2,.53,27,27,0,0,0-3.12,1.49l.7,1,2.71,4.07.71,1.07q2.46-2.64,5-5.13c1.6-1.55,3.22-3.06,4.88-4.53,1.05-.92,2.1-1.82,3.17-2.71s2.38-1.93,3.59-2.86l1.73-1.31q3.72-2.77,7.63-5.29l.07,0,.1,0q7,1.86,7.2,4.3l3.57-.31q38.66-28.59,76.55-41.33L221,77.1a66.4,66.4,0,0,1-6.43,8.54c-1.34,1.41-2.4,2.15-3.17,2.22a11.65,11.65,0,0,0,2.46,6.33q.55,6.5-34.36,86.89Q100.18,368,46.19,457.43a11.72,11.72,0,0,0,2.08,4.78c1.86-.44,3.56-.88,5.13-1.33,6-1.68,9.91-3.38,11.78-5.09l1.9-.16.29,3.36,3.32-.29,3.42-1.88a1.14,1.14,0,0,0,.29.68c.47.55,1.53.75,3.17.61l.05.58.24,2.78a12.05,12.05,0,0,1-.49,4,46.77,46.77,0,0,1-5.14,11.11q-5.45,6.12-11.64,25.83l.13,1.56,3.33-.28c2-2.26,3.94-4.5,5.82-6.74Q87.2,476.29,96.8,456.45q8.3-2.44,16.06-4.86,15.51-4.84,29-9.62l3.53-1.27q28.65-10.38,47.57-20.51,33.48-2.88,50.87-17.47l-.15-1.79-8.4,2.53-1.89.16-.16-1.79q24.56-3.69,34-11.05,47.78-36.82,72.27-52.25,75.43-55.36,71.18-106.34a1.09,1.09,0,0,0,0-.18q-.42-4.95-28.26-36.06-2.38-2.67-5-5.53Q376.76,183.49,400,170.42ZM323.09,290.53,279,325.47q-49.11,32.2-52.91,32.53-67.24,37-90.74,43.41a39.41,39.41,0,0,1-6.57,1.3l-1.9.16q2.36-8.78,69.73-142.72,29.67-2.56,93.51-27.69l10.45-.9q32.28-2.77,48.17,12.32l.4,4.6.16,1.89Q337.4,284.57,323.09,290.53Zm27.62-145.64Q343.78,153.16,313,173q-10.21.89-75.9,29.55a13.09,13.09,0,0,0-2.64-.91,14.23,14.23,0,0,0-4.4-.29l-.27-3.13q-.81-9.41,8.48-23.74,5.09-27.06,11.22-30.75l36.45-82.1q-.64-7.62,23.39-11.72l5.22-.45.4,4.7q23.61-3.6,29.3-4.1Q385,46.51,389.1,65a20.12,20.12,0,0,1,.39,2.54l1.68-.14,1.64-.15L392.1,59l3.56-.31q11.14,6.12,13.24,14.55a16.56,16.56,0,0,1,.43,2.55q.6,6.95-7.38,17.1c-2.21.19-3.46-1.35-3.74-4.64l-3.57.31-.81,10q-22,33-32,33.89Q352.86,144.7,350.71,144.89Z"
        transform="translate(-46.19)"
        fill="#f5dc5e"
      />
    </svg>
  );
};

export const Cplusplus = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0 0 48 48"
    >
      <path
        fill="#00549d"
        fillRule="evenodd"
        d="M22.903,3.286c0.679-0.381,1.515-0.381,2.193,0 c3.355,1.883,13.451,7.551,16.807,9.434C42.582,13.1,43,13.804,43,14.566c0,3.766,0,15.101,0,18.867 c0,0.762-0.418,1.466-1.097,1.847c-3.355,1.883-13.451,7.551-16.807,9.434c-0.679,0.381-1.515,0.381-2.193,0 c-3.355-1.883-13.451-7.551-16.807-9.434C5.418,34.899,5,34.196,5,33.434c0-3.766,0-15.101,0-18.867 c0-0.762,0.418-1.466,1.097-1.847C9.451,10.837,19.549,5.169,22.903,3.286z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#0086d4"
        fillRule="evenodd"
        d="M5.304,34.404C5.038,34.048,5,33.71,5,33.255 c0-3.744,0-15.014,0-18.759c0-0.758,0.417-1.458,1.094-1.836c3.343-1.872,13.405-7.507,16.748-9.38 c0.677-0.379,1.594-0.371,2.271,0.008c3.343,1.872,13.371,7.459,16.714,9.331c0.27,0.152,0.476,0.335,0.66,0.576L5.304,34.404z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M24,10c7.727,0,14,6.273,14,14s-6.273,14-14,14 s-14-6.273-14-14S16.273,10,24,10z M24,17c3.863,0,7,3.136,7,7c0,3.863-3.137,7-7,7s-7-3.137-7-7C17,20.136,20.136,17,24,17z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#0075c0"
        fillRule="evenodd"
        d="M42.485,13.205c0.516,0.483,0.506,1.211,0.506,1.784 c0,3.795-0.032,14.589,0.009,18.384c0.004,0.396-0.127,0.813-0.323,1.127L23.593,24L42.485,13.205z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M31 21H33V27H31zM38 21H40V27H38z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M29 23H35V25H29zM36 23H42V25H36z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export const Python = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0 0 48 48"
    >
      <linearGradient
        id="goqfu1ZNmEnUrQDJEQ1bUa_l75OEUJkPAk4_gr1"
        x1="10.458"
        x2="26.314"
        y1="12.972"
        y2="26.277"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#26abe7"></stop>
        <stop offset="1" stopColor="#086dbf"></stop>
      </linearGradient>
      <path
        fill="url(#goqfu1ZNmEnUrQDJEQ1bUa_l75OEUJkPAk4_gr1)"
        d="M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2 H15.22h-4.35c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104 c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672 C27.406,5.359,25.589,4.994,24.047,5z M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498-1.5,1.498 c-0.837,0-1.5-0.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z"
      ></path>
      <linearGradient
        id="goqfu1ZNmEnUrQDJEQ1bUb_l75OEUJkPAk4_gr2"
        x1="35.334"
        x2="23.517"
        y1="37.911"
        y2="21.034"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#feb705"></stop>
        <stop offset="1" stopColor="#ffda1c"></stop>
      </linearGradient>
      <path
        fill="url(#goqfu1ZNmEnUrQDJEQ1bUb_l75OEUJkPAk4_gr2)"
        d="M23.078,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2 h9.343h4.35c2.636,0,4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104 c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672 C19.719,42.641,21.536,43.006,23.078,43z M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498 c0.837,0,1.5,0.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z"
      ></path>
    </svg>
  );
};

export const Mysql = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0 0 48 48"
    >
      <path
        fill="#00796b"
        d="M0.002,35.041h1.92v-7.085l2.667,6.057c0.329,0.755,0.779,1.022,1.662,1.022 s1.315-0.267,1.644-1.022l2.667-5.902v6.93h1.92v-7.258c0-0.697-0.277-1.035-0.849-1.209c-1.367-0.43-2.285-0.059-2.7,0.872 l-2.735,6.16l-2.649-6.16c-0.398-0.93-1.332-1.302-2.7-0.872C0.277,26.748,0,27.085,0,27.782v7.258H0.002z"
      ></path>
      <path
        fill="#00796b"
        d="M13.441,29.281h1.92v4.055c-0.015,0.2,0.064,0.731,0.99,0.745c0.472,0.008,2.821,0,2.85,0v-4.8h1.92 c0.008,0,0,5.968,0,5.993c0.01,1.472-1.828,1.662-2.673,1.687h-5.006v-0.96c0.01,0,4.787,0.001,4.801,0 c1.088-0.115,0.959-0.714,0.959-0.896v-0.064H16.19c-1.67-0.015-2.735-0.751-2.747-1.59C13.441,33.373,13.479,29.317,13.441,29.281 z"
      ></path>
      <path
        fill="#f57f17"
        d="M22.081,35.041h4.807c0.63,0,1.242-0.132,1.728-0.36c0.81-0.372,1.144-0.875,1.144-1.536v-1.368 c0-1.476-1.83-1.536-2.88-1.536h-1.92c-0.755,0-0.87-0.456-0.96-0.96v-0.96c0.09-0.384,0.258-0.9,0.923-0.96 c0.773,0,4.836,0,4.836,0v-0.96h-4.566c-0.755,0-3.114,0.09-3.114,1.92v1.187c0,0.84,0.738,1.524,2.34,1.692 c0.18,0.012,0.36,0.024,0.539,0.024c0,0,1.866-0.036,1.92-0.024c1.08,0,0.96,0.84,0.96,0.96v0.96c0,0.132-0.03,0.96-0.971,0.96 c-0.072,0-4.789,0-4.789,0V35.041z"
      ></path>
      <path
        fill="#f57f17"
        d="M40.32,33.08c0,1.159,0.655,1.809,2.392,1.939c0.162,0.011,0.325,0.021,0.488,0.021H48v-0.96h-4.435 c-0.991,0-1.325-0.416-1.325-1.011v-6.669h-1.92V33.08z"
      ></path>
      <path
        fill="#f57f17"
        d="M30.704,33.121v-4.8c0-1.02,0.5-1.724,1.916-1.92h0.672h3.447h0.525 c1.416,0.196,2.08,0.899,2.08,1.92v4.782c0,0.827-0.215,1.271-0.916,1.559L39.916,36h-2.16l-1.07-0.96h-1.257l-2.136,0.012 c-0.309,0-0.635-0.043-0.993-0.141C31.226,34.618,30.704,34.054,30.704,33.121z M32.624,33.121c0.098,0.467,0.473,0.96,1.14,0.96 h1.864l-1.068-0.96h2.175l0.519,0.482c0,0,0.186-0.152,0.186-0.482c0-0.33-0.016-4.8-0.016-4.8c-0.098-0.434-0.538-0.96-1.188-0.96 h-2.471c-0.749,0-1.14,0.548-1.14,1.058L32.624,33.121L32.624,33.121z"
      ></path>
      <path
        fill="#00796b"
        d="M46.199,25.389c-1.031-0.028-1.818,0.068-2.491,0.351c-0.191,0.081-0.496,0.083-0.528,0.323 c0.105,0.11,0.121,0.275,0.205,0.41c0.16,0.26,0.432,0.609,0.674,0.791c0.265,0.2,0.538,0.414,0.821,0.587 c0.504,0.307,1.067,0.483,1.553,0.791c0.286,0.181,0.57,0.411,0.85,0.615c0.138,0.102,0.23,0.259,0.41,0.323 c0-0.01,0-0.019,0-0.029c-0.094-0.12-0.119-0.285-0.205-0.411c-0.127-0.127-0.254-0.254-0.381-0.381 c-0.372-0.494-0.846-0.929-1.348-1.289c-0.401-0.288-1.298-0.677-1.466-1.143c-0.01-0.01-0.019-0.019-0.03-0.03 c0.284-0.032,0.617-0.135,0.879-0.205c0.441-0.118,0.834-0.087,1.289-0.205c0.205-0.059,0.41-0.117,0.615-0.176 c0-0.039,0-0.078,0-0.117c-0.23-0.236-0.395-0.548-0.645-0.762c-0.657-0.559-1.373-1.117-2.11-1.583 c-0.409-0.258-0.915-0.426-1.348-0.645c-0.146-0.074-0.402-0.112-0.498-0.234c-0.228-0.29-0.351-0.659-0.527-0.996 c-0.368-0.708-0.73-1.482-1.055-2.227c-0.223-0.508-0.368-1.01-0.645-1.466c-1.331-2.188-2.764-3.509-4.982-4.807 c-0.472-0.276-1.041-0.385-1.642-0.528c-0.323-0.019-0.645-0.039-0.968-0.059c-0.197-0.083-0.401-0.323-0.587-0.44 c-0.735-0.465-2.621-1.475-3.165-0.147c-0.344,0.838,0.514,1.656,0.821,2.081c0.215,0.298,0.491,0.632,0.645,0.968 c0.101,0.22,0.119,0.441,0.205,0.674c0.213,0.574,0.55,1.228,0.826,1.759c0.139,0.269,0.293,0.551,0.469,0.791 c0.108,0.147,0.293,0.212,0.323,0.44c-0.181,0.253-0.191,0.646-0.293,0.968c-0.458,1.445-0.285,3.24,0.381,4.308 c0.204,0.328,0.686,1.032,1.348,0.762c0.579-0.236,0.45-0.967,0.615-1.612c0.037-0.146,0.014-0.253,0.088-0.351 c0,0.01,0,0.019,0,0.03c0.176,0.351,0.351,0.704,0.528,1.055c0.391,0.629,1.084,1.286,1.67,1.73 c0.304,0.23,0.544,0.628,0.938,0.762c0-0.01,0-0.019,0-0.03c-0.01,0-0.019,0-0.03,0c-0.076-0.119-0.196-0.168-0.293-0.264 c-0.229-0.225-0.485-0.504-0.674-0.762c-0.534-0.725-1.006-1.519-1.436-2.345c-0.205-0.395-0.384-0.829-0.557-1.231 c-0.067-0.155-0.066-0.389-0.205-0.469c-0.19,0.294-0.468,0.532-0.615,0.879c-0.234,0.555-0.265,1.233-0.351,1.934 c-0.052,0.018-0.029,0.006-0.059,0.029c-0.408-0.099-0.552-0.518-0.704-0.879c-0.384-0.912-0.455-2.38-0.117-3.429 c0.087-0.272,0.482-1.127,0.323-1.378c-0.076-0.251-0.328-0.396-0.468-0.587c-0.175-0.236-0.348-0.548-0.469-0.821 c-0.314-0.711-0.612-1.538-0.943-2.257c-0.158-0.344-0.425-0.691-0.645-0.996c-0.243-0.338-0.516-0.587-0.704-0.996 c-0.067-0.145-0.158-0.378-0.059-0.528c0.032-0.101,0.076-0.143,0.176-0.176c0.17-0.132,0.643,0.043,0.821,0.117 c0.47,0.195,0.862,0.381,1.26,0.645c0.191,0.127,0.384,0.372,0.615,0.44c0.088,0,0.176,0,0.264,0 c0.413,0.095,0.875,0.03,1.26,0.147c0.682,0.207,1.292,0.529,1.846,0.879c1.69,1.067,3.071,2.585,4.016,4.397 c0.152,0.292,0.218,0.57,0.351,0.879c0.27,0.624,0.611,1.266,0.879,1.876c0.268,0.609,0.53,1.223,0.909,1.73 c0.2,0.266,0.97,0.409,1.319,0.557c0.245,0.104,0.647,0.211,0.879,0.351c0.444,0.268,0.874,0.587,1.289,0.879 C45.528,24.803,46.167,25.124,46.199,25.389z"
      ></path>
      <path
        fill="#00796b"
        d="M33.098,14.223c-0.215-0.004-0.367,0.023-0.528,0.059c0,0.01,0,0.019,0,0.03c0.01,0,0.019,0,0.03,0 c0.103,0.21,0.283,0.347,0.41,0.528c0.098,0.205,0.195,0.41,0.293,0.615c0.01-0.01,0.019-0.019,0.029-0.029 c0.181-0.128,0.265-0.332,0.264-0.645c-0.073-0.077-0.084-0.173-0.147-0.264C33.365,14.394,33.203,14.325,33.098,14.223z"
      ></path>
    </svg>
  );
};

export const ScrollReveal = (props) => {
  return (
    <svg
      width="42px"
      height="32px"
      viewBox="2 2 42 32"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        stroke="none"
        fill="#FFCB36"
        fillRule="evenodd"
        x="2"
        y="2"
        width="6"
        height="18"
        rx="3"
      ></rect>
      <rect
        stroke="none"
        fill="#007D97"
        fillRule="evenodd"
        x="26"
        y="2"
        width="6"
        height="32"
        rx="3"
      ></rect>
      <rect
        stroke="none"
        fill="#2EAD6D"
        fillRule="evenodd"
        x="14"
        y="2"
        width="6"
        height="8"
        rx="3"
      ></rect>
      <rect
        stroke="none"
        fill="#E31D65"
        fillRule="evenodd"
        x="14"
        y="16"
        width="6"
        height="18"
        rx="3"
      ></rect>
      <rect
        stroke="none"
        fill="#E31D65"
        fillRule="evenodd"
        x="38"
        y="2"
        width="6"
        height="18"
        rx="3"
      ></rect>
      <rect
        stroke="none"
        fill="#FF7C35"
        fillRule="evenodd"
        x="2"
        y="26"
        width="6"
        height="8"
        rx="3"
      ></rect>
      <rect
        stroke="none"
        fill="#553BB8"
        fillRule="evenodd"
        x="38"
        y="26"
        width="6"
        height="8"
        rx="3"
      ></rect>
    </svg>
  );
};

export const C_lang = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0 0 48 48"
    >
      <path
        fill="#283593"
        fillRule="evenodd"
        d="M22.903,3.286c0.679-0.381,1.515-0.381,2.193,0 c3.355,1.883,13.451,7.551,16.807,9.434C42.582,13.1,43,13.804,43,14.566c0,3.766,0,15.101,0,18.867 c0,0.762-0.418,1.466-1.097,1.847c-3.355,1.883-13.451,7.551-16.807,9.434c-0.679,0.381-1.515,0.381-2.193,0 c-3.355-1.883-13.451-7.551-16.807-9.434C5.418,34.899,5,34.196,5,33.434c0-3.766,0-15.101,0-18.867 c0-0.762,0.418-1.466,1.097-1.847C9.451,10.837,19.549,5.169,22.903,3.286z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#5c6bc0"
        fillRule="evenodd"
        d="M5.304,34.404C5.038,34.048,5,33.71,5,33.255 c0-3.744,0-15.014,0-18.759c0-0.758,0.417-1.458,1.094-1.836c3.343-1.872,13.405-7.507,16.748-9.38 c0.677-0.379,1.594-0.371,2.271,0.008c3.343,1.872,13.371,7.459,16.714,9.331c0.27,0.152,0.476,0.335,0.66,0.576L5.304,34.404z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M24,10c7.727,0,14,6.273,14,14s-6.273,14-14,14 s-14-6.273-14-14S16.273,10,24,10z M24,17c3.863,0,7,3.136,7,7c0,3.863-3.137,7-7,7s-7-3.137-7-7C17,20.136,20.136,17,24,17z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#3949ab"
        fillRule="evenodd"
        d="M42.485,13.205c0.516,0.483,0.506,1.211,0.506,1.784 c0,3.795-0.032,14.589,0.009,18.384c0.004,0.396-0.127,0.813-0.323,1.127L23.593,24L42.485,13.205z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};
