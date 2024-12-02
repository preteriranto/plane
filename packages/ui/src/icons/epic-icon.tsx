import * as React from "react";

export type Props = {
  className?: string;
  width?: string | number;
  height?: string | number;
  color?: string;
};

export const EpicIcon: React.FC<Props> = ({ width = "16", height = "16", className }) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.900146 9.33203V12.0142C0.900146 12.3736 1.17392 12.6654 1.51126 12.6654H14.9557C15.1178 12.6654 15.2732 12.5968 15.3878 12.4746C15.5024 12.3525 15.5668 12.1869 15.5668 12.0142V10.3299L13.375 7.99523C13.1458 7.75134 12.8351 7.61436 12.5113 7.61436C12.1874 7.61436 11.8767 7.75134 11.6476 7.99523L10.1257 9.35919L10.2534 9.56204L11.7209 9.60056C11.7809 9.66017 11.8291 9.73206 11.8625 9.81194C11.8959 9.89181 11.9138 9.97804 11.9153 10.0655C11.9167 10.1529 11.9017 10.2397 11.8709 10.3208C11.8402 10.4019 11.7944 10.4756 11.7364 10.5374C11.6784 10.5992 11.6092 10.648 11.5332 10.6807C11.4571 10.7135 11.3756 10.7296 11.2935 10.728C11.2114 10.7265 11.1305 10.7073 11.0556 10.6717C10.9806 10.6362 10.9131 10.5848 10.8572 10.5209L10.2534 9.56204L6.60385 3.76614C6.37468 3.52226 6.11293 3.33203 5.78904 3.33203C5.46515 3.33203 5.20339 3.52226 4.97422 3.76614L0.900146 9.33203Z"
      fill="currentColor"
    />
    <path
      d="M11.7209 9.60056L10.2534 9.56204L10.8572 10.5209C10.9131 10.5848 10.9806 10.6362 11.0556 10.6717C11.1305 10.7073 11.2114 10.7265 11.2935 10.728C11.3756 10.7296 11.4571 10.7135 11.5332 10.6807C11.6092 10.648 11.6784 10.5992 11.7364 10.5374C11.7944 10.4756 11.8402 10.4019 11.8709 10.3208C11.9017 10.2397 11.9167 10.1529 11.9153 10.0655C11.9138 9.97804 11.8959 9.89181 11.8625 9.81194C11.8291 9.73206 11.7809 9.66017 11.7209 9.60056Z"
      fill="currentColor"
    />
  </svg>
);