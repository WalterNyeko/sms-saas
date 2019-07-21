import Routes from "../components/helpers/routes";
export const setBodyClasses = pathname => {
  var classes =
    "d-flex align-items-center bg-auth border-top border-top-2 border-primary";
  if (
    pathname.includes(`${Routes.signup}`) ||
    pathname.includes(`${Routes.signin}`)
  ) {
    $("body").addClass(classes);
    $(".main-content").hide();
  } else {
    $("body").removeClass(classes);
    $(".main-content").show();
  }
};

export const isHeadlessPage = pathname => {
  return [
    `${Routes.signin}`,
    `${Routes.signup}`,
    `${Routes.resetPassword}`,
    `${Routes.verifyToken}`
  ].includes(pathname);
};
