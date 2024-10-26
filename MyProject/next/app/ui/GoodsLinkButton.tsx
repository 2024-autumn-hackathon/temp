import LinkButton from "./LinkButton";

export default function GoodsLinkButton({ children, href }) {
  const addClass = 'goods-link-button';
  return (
    <LinkButton
      href={ href }
      addClass={ addClass }
    >
      { children }
    </LinkButton>
  );
};