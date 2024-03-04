import React, { FC } from "react";

import PageStructure from "../../../Layout/Dashboard/PageStructure";
import AboutUsForm from "./AboutUsForm";
import { useGetAboutUs } from "../../../api/app_info";

const AboutUsPage: FC = () => {
  const { data, isLoading, isError } = useGetAboutUs();

  const about_us: any = data?.translations;
  console.log(about_us);
  

  return (
    <PageStructure
      title="about_us"
      data={about_us}
      isLoading={isLoading}
      isError={isError}
    >
      <AboutUsForm about_us={about_us} />
    </PageStructure>
  );
};

export default AboutUsPage;