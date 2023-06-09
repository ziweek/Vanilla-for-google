import { useTheme } from "@nextui-org/react";

function IconUser(props) {
  const { theme } = useTheme();
  return (
    <>
      {props.isActivated ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="48"
          width="48"
          viewBox="0 0 24 24"
          fill="#0975F4"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="48"
          width="48"
          viewBox="0 0 24 24"
          fill="#C3D3E5"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
      )}
    </>
  );
}

function IconHome(props) {
  const { theme } = useTheme();
  return (
    <>
      {props.isActivated ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enableBackground="new 0 0 24 24"
          height="48"
          width="48"
          viewBox="0 0 24 24"
          fill="#0975F4"
        >
          <g>
            <rect fill="none" height="48" width="48" x="0" y="0" />
          </g>
          <g>
            <g>
              <path d="M19,13H5c-1.1,0-2,0.9-2,2v4c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2v-4C21,13.9,20.1,13,19,13z" />
              <path d="M19,3H5C3.9,3,3,3.9,3,5v4c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z" />
            </g>
          </g>
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enableBackground="new 0 0 24 24"
          height="48"
          width="48"
          viewBox="0 0 24 24"
          fill="#C3D3E5"
        >
          <g>
            <rect fill="none" height="48" width="48" x="0" y="0" />
          </g>
          <g>
            <g>
              <path d="M19,13H5c-1.1,0-2,0.9-2,2v4c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2v-4C21,13.9,20.1,13,19,13z M19,19H5v-4h14V19z" />
              <path d="M19,3H5C3.9,3,3,3.9,3,5v4c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,9H5V5h14V9z" />
            </g>
          </g>
        </svg>
      )}
    </>
  );
}

function IconSetting(props) {
  const { isDark } = useTheme();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      height="42"
      width="42"
      viewBox="0 0 24 24"
      fill={isDark ? "#C3D3E5" : "#000000"}
    >
      <g>
        <path d="M0,0h24v24H0V0z" fill="none" />
        <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z" />
      </g>
    </svg>
  );
}

function IconSleepy() {
  return (
    <div>
      <svg
        width="56"
        height="56"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 24C6 14.0589 14.0589 6 24 6V8C15.1634 8 8 15.1634 8 24C8 32.8366 15.1634 40 24 40C32.8366 40 40 32.8366 40 24C40 22.4015 39.7656 20.8577 39.3293 19.4012L41.2454 18.8264C41.7363 20.4649 42 22.2017 42 24C42 33.9411 33.9411 42 24 42C14.0589 42 6 33.9411 6 24Z"
          fill="#333333"
        />
        <path
          d="M18.5301 13.9516C18.0518 14.2278 17.8879 14.8394 18.164 15.3177C18.4402 15.796 19.0518 15.9598 19.5301 15.6837L20.4665 15.143L20.0147 18.8934C19.9694 19.2694 20.1404 19.6388 20.4565 19.8475C20.7726 20.0562 21.1795 20.0684 21.5075 19.879L24.5095 18.1458C24.9878 17.8696 25.1517 17.2581 24.8756 16.7798C24.5994 16.3015 23.9878 16.1376 23.5095 16.4137L22.2395 17.147L22.6914 13.3966C22.7367 13.0206 22.5656 12.6512 22.2495 12.4425C21.9335 12.2338 21.5266 12.2216 21.1986 12.411L18.5301 13.9516Z"
          fill="#333333"
        />
        <path
          d="M25.8172 9.29408C25.6743 8.76062 25.9909 8.21228 26.5244 8.06934L30.3881 7.03406C30.7539 6.93603 31.1438 7.05312 31.3951 7.33652C31.6464 7.61992 31.716 8.02097 31.5749 8.37249L29.5262 13.4767L31.941 12.8296C32.4744 12.6867 33.0228 13.0033 33.1657 13.5367C33.3087 14.0702 32.9921 14.6185 32.4586 14.7615L28.1119 15.9262C27.7461 16.0242 27.3562 15.9071 27.1049 15.6237C26.8536 15.3403 26.784 14.9392 26.9251 14.5877L28.9738 9.48355L27.042 10.0012C26.5085 10.1441 25.9602 9.82755 25.8172 9.29408Z"
          fill="#333333"
        />
        <path
          d="M36.5556 6C36.0033 6 35.5556 6.44772 35.5556 7C35.5556 7.55228 36.0033 8 36.5556 8H39.1958L35.152 14.47C34.9593 14.7783 34.9491 15.1668 35.1254 15.4848C35.3016 15.8027 35.6365 16 36 16H41C41.5523 16 42 15.5523 42 15C42 14.4477 41.5523 14 41 14H37.8042L41.848 7.53C42.0407 7.22173 42.0509 6.83319 41.8746 6.51523C41.6984 6.19728 41.3635 6 41 6H36.5556Z"
          fill="#333333"
        />
        <path
          d="M12.8884 27.1057C12.9643 27.849 13.6309 28.4029 14.4039 28.6487C15.2116 28.9055 16.2592 28.8836 17.371 28.4025C18.5269 27.9024 19.2033 27.0055 19.503 26.1071C19.7926 25.2391 19.7526 24.2876 19.3505 23.6822C19.256 23.54 19.0955 23.4558 18.9248 23.459C18.7541 23.4621 18.5968 23.5521 18.5076 23.6977C17.2142 25.8092 15.3637 26.7386 13.4326 26.5571C13.2837 26.5431 13.1363 26.5965 13.0309 26.7028C12.9255 26.809 12.8732 26.9568 12.8884 27.1057Z"
          fill="#333333"
        />
        <path
          d="M32.2802 21.9097C32.5862 22.5914 32.2859 23.4043 31.7393 24.0037C31.1682 24.63 30.25 25.1348 29.0466 25.2741C27.7955 25.4189 26.7612 24.9803 26.0525 24.3522C25.3677 23.7453 24.9266 22.9012 24.9722 22.1759C24.9829 22.0055 25.0798 21.8523 25.2292 21.7697C25.3786 21.6871 25.5598 21.6864 25.7099 21.7679C27.8858 22.9497 29.953 22.8293 31.5346 21.7067C31.6566 21.6201 31.811 21.5926 31.9554 21.6319C32.0998 21.6713 32.2189 21.7732 32.2802 21.9097Z"
          fill="#333333"
        />
        <path
          d="M32.4478 31.855C30.1969 28.7708 26.8611 27.1403 23.7407 27.9764C20.6203 28.8125 18.5467 31.8924 18.1395 35.6889C18.0249 36.7578 19.0627 37.512 20.1011 37.2338L31.5215 34.1737C32.5599 33.8955 33.0815 32.7233 32.4478 31.855Z"
          fill="#333333"
        />
      </svg>
    </div>
  );
}

function IconLevel(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={props.height}
      viewBox="0 0 24 24"
      width={props.width}
      fill="transparent"
    >
      <path d="M0 0h24v24H0z" />
      <path
        fill={props.fill}
        d="M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h14V5H7zm0 14h14v-2H7v2zm0-6h14v-2H7v2z"
      />
    </svg>
  );
}

function IconHistory(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      height={props.height}
      viewBox="0 0 24 24"
      width={props.width}
      fill="transparent"
    >
      <g>
        <rect height="24" width="24" />
      </g>
      <g>
        <path
          fill={props.fill}
          d="M19,4h-1V2h-2v2H8V2H6v2H5C3.89,4,3.01,4.9,3.01,6L3,20c0,1.1,0.89,2,2,2h14c1.1,0,2-0.9,2-2V6C21,4.9,20.1,4,19,4z M19,20 H5V10h14V20z M9,14H7v-2h2V14z M13,14h-2v-2h2V14z M17,14h-2v-2h2V14z M9,18H7v-2h2V18z M13,18h-2v-2h2V18z M17,18h-2v-2h2V18z"
        />
      </g>
    </svg>
  );
}

function IconPose(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={props.height}
      viewBox="0 0 24 24"
      width={props.width}
      fill="transparent"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path
        fill={props.fill}
        d="M20.5 6c-2.61.7-5.67 1-8.5 1s-5.89-.3-8.5-1L3 8c1.86.5 4 .83 6 1v13h2v-6h2v6h2V9c2-.17 4.14-.5 6-1l-.5-2zM12 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
      />
    </svg>
  );
}

function IconAssistant(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={props.height}
      viewBox="0 0 24 24"
      width={props.width}
      fill="transparent"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path
        fill={props.fill}
        d="M19 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h4l3 3 3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5.12 10.88L12 17l-1.88-4.12L6 11l4.12-1.88L12 5l1.88 4.12L18 11l-4.12 1.88z"
      />
    </svg>
  );
}

function IconInfo(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={props.height}
      viewBox="0 0 24 24"
      width={props.width}
      fill="transparent"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path
        fill={props.fill}
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
      />
    </svg>
  );
}

function IconHelp(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      height={props.height}
      viewBox="0 0 24 24"
      width={props.width}
      fill="transparent"
    >
      <g>
        <rect fill="none" height="24" width="24" />
        <path
          fill={props.fill}
          d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M12.01,18 c-0.7,0-1.26-0.56-1.26-1.26c0-0.71,0.56-1.25,1.26-1.25c0.71,0,1.25,0.54,1.25,1.25C13.25,17.43,12.72,18,12.01,18z M15.02,10.6 c-0.76,1.11-1.48,1.46-1.87,2.17c-0.16,0.29-0.22,0.48-0.22,1.41h-1.82c0-0.49-0.08-1.29,0.31-1.98c0.49-0.87,1.42-1.39,1.96-2.16 c0.57-0.81,0.25-2.33-1.37-2.33c-1.06,0-1.58,0.8-1.8,1.48L8.56,8.49C9.01,7.15,10.22,6,11.99,6c1.48,0,2.49,0.67,3.01,1.52 C15.44,8.24,15.7,9.59,15.02,10.6z"
        />
      </g>
    </svg>
  );
}

export {
  IconHome,
  IconSetting,
  IconUser,
  IconSleepy,
  IconHistory,
  IconLevel,
  IconInfo,
  IconHelp,
  IconPose,
  IconAssistant,
};
