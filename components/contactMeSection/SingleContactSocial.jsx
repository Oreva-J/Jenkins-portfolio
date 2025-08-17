const SingleContactSocial = ({ Icon, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-2xl h-10 w-10 border border-accent text-accent rounded-full flex items-center justify-center hover:bg-accent hover:text-dark transition-all duration-300 shadow"
    >
      <Icon />
    </a>
  );
};

export default SingleContactSocial;
