export const onNavigate = ({ navigate, navigationPath, onLinkClick }) => {
  navigate(navigationPath);
  onLinkClick();
};
