import './css/MonitorFrame.css';

export default function MonitorFrame({
  headerContent,
  leftContent,
  rightContent,
  footerContent
}) {
  return (
    <>
      <section className='header-container'>
        { headerContent }
      </section>
      <section className='display-left-container'>
        { leftContent }
      </section>
      <section className='display-right-container'>
        { rightContent }
      </section>
      <section className='footer-container'>
        { footerContent }
      </section>
    </>
  );
};