import React from "react";

import { Text } from "@/components/atoms/Text";
import BlueGrayOrganism from "@/components/organisms/BlueGray";
import STBlueOrganism from "@/components/organisms/STBlue";
import WarmGrayOrganism from "@/components/organisms/WramGray";

const ColorsTemplate = () => {
  return (
    <>
      <div>
        <Text>BlueGray</Text>
        <BlueGrayOrganism />
      </div>
      <div>
        <Text>WarmGray</Text>
        <WarmGrayOrganism />
      </div>
      <div>
        <Text>STBlue</Text>
        <STBlueOrganism />
      </div>
    </>
  );
};

export default ColorsTemplate;
