import React from "react";

import { Text } from "@/components/atoms/Text";
import {
  ChipBackgropund,
  ChipColorBackground,
  ChipColorInfoBox,
} from "./style";

interface Props {
  title: string;
  subTitle: string;
}

const chipAtom = ({ title, subTitle }: Props) => {
  return (
    <ChipBackgropund>
      <ChipColorBackground />
      <ChipColorInfoBox>
        <Text>{title}</Text>
        <Text>{subTitle}</Text>
      </ChipColorInfoBox>
    </ChipBackgropund>
  );
};

export default chipAtom;
