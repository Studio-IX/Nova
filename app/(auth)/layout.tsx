const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center justify-center h-[100vh] bg-bg">
      {children}
    </div>
  );
};

export default AuthLayout;
