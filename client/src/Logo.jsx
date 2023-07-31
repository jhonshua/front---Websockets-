import logo from '../src/assets/logos/LogoApp.png'



export default function Logo() {
  return (
    <div className="text-blue-600 font-bold flex gap-2 p-4">
      <img src={logo} className='h-9 w-9' alt="no found" />
      Clound-Chat
    </div>
  );
}