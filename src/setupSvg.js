import githubSvg from "./svg/github.svg";
import codingBlogSvg from "./svg/coding.svg";
import exploringBlogSvg from "./svg/exploring.svg";
import instagramSvg from "./svg/instagram.svg";
import fiveHundredPixelsSvg from "./svg/500px.svg";

export default () => {
  const codingBlogIconContainer = document.querySelector("#icon-blog-code");
  const exploringBlogIconContainer = document.querySelector(
    "#icon-blog-exploring"
  );
  const githubIconContainer = document.querySelector("#icon-github");
  const instagramIconContainer = document.querySelector("#icon-instagram");
  const fiveHundredPixelsIconContainer = document.querySelector(
    "#icon-five-hundred-pixels"
  );

  codingBlogIconContainer.innerHTML = codingBlogSvg;
  exploringBlogIconContainer.innerHTML = exploringBlogSvg;
  githubIconContainer.innerHTML = githubSvg;
  instagramIconContainer.innerHTML = instagramSvg;
  fiveHundredPixelsIconContainer.innerHTML = fiveHundredPixelsSvg;
};
