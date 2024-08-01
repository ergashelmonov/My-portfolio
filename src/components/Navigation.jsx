const Navigation = ({ path, des }) => {
  return (
    <div className="p-[53px_0_68px] self-start max-w-5xl mx-auto w-full">
      <h2 className="font-medium text-[32px] text-white mb-3">
        <span className="text-primary">/</span>
        {path}
      </h2>
      <p className="font-normal text-base text-white">{des}</p>
    </div>
  );
};

export default Navigation;
