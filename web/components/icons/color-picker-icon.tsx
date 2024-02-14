import React from "react";

import type { Props } from "./types";

export const ColorPickerIcon: React.FC<Props> = ({ width = 14, height = 14, className }) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0.8125 13.7508C0.65 13.7508 0.515625 13.6977 0.409375 13.5914C0.303125 13.4852 0.25 13.3508 0.25 13.1883V10.8258C0.25 10.7508 0.2625 10.682 0.2875 10.6195C0.3125 10.557 0.35625 10.4945 0.41875 10.432L7.31875 3.53203L6.34375 2.55703C6.24375 2.45703 6.19688 2.32891 6.20312 2.17266C6.20938 2.01641 6.2625 1.88828 6.3625 1.78828C6.4625 1.68828 6.59063 1.63828 6.74688 1.63828C6.90313 1.63828 7.03125 1.68828 7.13125 1.78828L8.4625 3.13828L11.125 0.475781C11.2625 0.338281 11.4094 0.269531 11.5656 0.269531C11.7219 0.269531 11.8688 0.338281 12.0063 0.475781L13.525 1.99453C13.6625 2.13203 13.7313 2.27891 13.7313 2.43516C13.7313 2.59141 13.6625 2.73828 13.525 2.87578L10.8625 5.53828L12.2125 6.88828C12.3125 6.98828 12.3625 7.11328 12.3625 7.26328C12.3625 7.41328 12.3125 7.53828 12.2125 7.63828C12.1125 7.73828 11.9844 7.78828 11.8281 7.78828C11.6719 7.78828 11.5438 7.73828 11.4438 7.63828L10.4688 6.68203L3.56875 13.582C3.50625 13.6445 3.44375 13.6883 3.38125 13.7133C3.31875 13.7383 3.25 13.7508 3.175 13.7508H0.8125ZM1.375 12.6258H3.00625L9.6625 5.96953L8.03125 4.33828L1.375 10.9945V12.6258ZM10.0563 4.75078L12.3813 2.42578L11.575 1.61953L9.25 3.94453L10.0563 4.75078Z" />
  </svg>
);