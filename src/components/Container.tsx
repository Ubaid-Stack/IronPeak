const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto px-5 md:px-10 lg:px-15 w-full">
      {children}
    </div>
  );
};
export default Container;