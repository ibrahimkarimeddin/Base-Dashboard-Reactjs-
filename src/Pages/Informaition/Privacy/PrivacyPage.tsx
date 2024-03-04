import React, { FC } from "react";

import PageStructure from "../../../Layout/Dashboard/PageStructure";
import PrivacyForm from "./PrivacyForm";
import { useGetPrivacy } from "../../../api/app_info";

const PrivacyPage: FC = () => {
  const { data, isLoading, isError } = useGetPrivacy();
  
  
  const privacy: any = data?.translations;
  console.log(privacy);
  return (
    <PageStructure
      title="privacy"
      data={privacy}
      isLoading={isLoading}
      isError={isError}
    >
      <PrivacyForm privacy={privacy} />
    </PageStructure>
  );
};

export default PrivacyPage;