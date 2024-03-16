export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className="flex-center items-center min-h-screen">   
           {children}
      </div>
    );
  }
  