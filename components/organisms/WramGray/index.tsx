import React from "react";

import { Text } from "@/components/atoms/Text";
import {
  ChipBackgropund,
  ChipColorBackground,
  ChipColorInfoBox,
} from "@/components/atoms/chip/style";

import { styled } from "@/styles/stitches.config";
import { WramGrayColors } from "@/styles/theme";

const WarmGrayOrganism = () => {
  return (
    <ChipWrap>
      {Object.entries(WramGrayColors).map((color, index) => {
        return (
          <ChipBackgropund key={`${color[0]}-${index}`}>
            <ChipColorBackground css={{ backgroundColor: color[1] }} />
            <ChipColorInfoBox>
              <Text css={{ margin: "0px", marginLeft: "12px" }}>
                {color[0]}
              </Text>
              <Text css={{ margin: "0px", marginLeft: "12px" }}>
                {color[1]}
              </Text>
            </ChipColorInfoBox>
          </ChipBackgropund>
        );
      })}
    </ChipWrap>
  );
};

export default WarmGrayOrganism;

const ChipWrap = styled("div", {
  width: "100%",
  height: "auto",
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
  gap: "0px 16px",
});
