export const setBodyClasses = pathname => {
  var classes =
    "d-flex align-items-center bg-auth border-top border-top-2 border-primary";
  if (pathname.includes("signup") || pathname.includes("signin")) {
    $("body").addClass(classes);
    $(".main-content").hide();
  } else {
    $("body").removeClass(classes);
    $(".main-content").show();
  }
};

export const isHeadlessPage = pathname => {
  return ["/signin", "/signup"].includes(pathname);
};
