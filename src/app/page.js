import Wrapper from "@/components/common/Wrapper";
import PageTitle from "@/components/common/titles/PageTitle";

export default function Home() {
  return (
    <>
      <Wrapper className="pageTitle-wrapper border-b border-b-primarylight md:pl-12 lg:pl-5">
        <PageTitle text="Dashboard" />
      </Wrapper>
    </>
  )
}
