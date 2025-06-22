import { Link } from "wouter";

export function Footer() {
  return (
    <footer 
      className="text-[#2C2C2C] py-8"
      style={{ 
        backgroundColor: '#E6E6FA'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
          
          {/* Left Side - About Næstir */}
          <div className="mb-6 md:mb-0">
            <h4 className="text-lg font-bold text-[#4B0082] mb-4">About Næstir</h4>
            <div className="space-y-1 text-sm text-[#2C2C2C]">
              <p>Kt: 0123456</p>
              <p>Location: Hátún 8</p>
              <p>Zip Code: 105 Reykjavík</p>
              <p>Phone Number: 776-0552</p>
              <p>
                Email: <a href="mailto:Næstir@gmail.is" className="hover:text-[#6A0DAD] transition-colors">Næstir@gmail.is</a>
              </p>
            </div>
          </div>

          {/* Right Side - Company Name */}
          <div className="text-right">
            <h2 
              className="text-[#4B0082] font-playfair italic"
              style={{ fontSize: '40px', lineHeight: '1.2' }}
            >
              Næstir
            </h2>
          </div>
        </div>
      </div>
    </footer>
  );
}