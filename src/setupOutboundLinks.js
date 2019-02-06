export default () => {
  const outboundLinks = document.querySelectorAll(".link");

  outboundLinks.forEach(link => {
    link.addEventListener("click", () => {
      const outboundLink = link.getAttribute("data-href");

      window.open(outboundLink);
    });
  });
};
