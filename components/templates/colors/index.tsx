import React from "react";

import { Text } from "@/components/atoms/Text";

import PrimaryOrganism from "@/components/organisms/Primary";
import SuccessOrganism from "@/components/organisms/Success";
import { ColorContext } from "@/contexts/color.context";
import { themes } from "@/styles/theme";

const ColorsTemplate = () => {
  console.log(themes)
  return (
    <ColorContext.Provider value={themes}>
      <div>
        <Text>Primary</Text>
        <PrimaryOrganism />
      </div>
      <div>
        <Text>Success</Text>
        <SuccessOrganism />
      </div>
    </ColorContext.Provider>
  );
};

export default ColorsTemplate;
