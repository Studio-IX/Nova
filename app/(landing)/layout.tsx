const LandingLayout = ({
    children
  }: {
    children: React.ReactNode;
  }) => {
    return (
      <main className="h-full bg-background overflow-hidden">
        <div className="mx-auto max-w-screen-4xl h-full w-full">
          {children}
        </div>
      </main>
     );
  }
   
  export default LandingLayout;