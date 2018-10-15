import githubSvg from './svg/github.svg';
import codingBlogSvg from './svg/coding.svg';
import exploringBlogSvg from './svg/exploring.svg';

export default () => {
  const codingBlogIconContainer = document.querySelector('#icon-blog-code');
  const exploringBlogIconContainer = document.querySelector('#icon-blog-exploring');
  const githubIconContainer = document.querySelector('#icon-github');

  codingBlogIconContainer.innerHTML = codingBlogSvg;
  exploringBlogIconContainer.innerHTML = exploringBlogSvg;
  githubIconContainer.innerHTML = githubSvg;
};
