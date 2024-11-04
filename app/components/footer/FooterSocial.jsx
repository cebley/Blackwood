const FooterSocial = ({ linkedin, twitter }) => {
  return (
    <>
      <h3 className="footer-headline">Follow us</h3>
      <div className="flex space-x-3">
        <a href={linkedin.url} target="_blank" rel="noopener noreferrer">
          <img src="/images/linkedin.svg" alt="linkedin" />
        </a>
        <a href={twitter.url} target="_blank" rel="noopener noreferrer">
          twitter
          <img src="/images/twitter.svg" alt="twitter" />
        </a>
      </div>
    </>
  );
};

export default FooterSocial;
