import MonitorFrame from "../../../../../ui/MonitorFrame";
import LinkButton from "../../../../../ui/LinkButton";

export default function Home() {
  const headerContent = (
    <>
      <LinkButton href='/'>ホーム</LinkButton>
    </>
  )
  return (
    <MonitorFrame
      headerContent={ headerContent }
      // leftContent={ leftContent }
      // rightContent={ rightContent }
      // footerContent={ footerContent }
    />
  );
};