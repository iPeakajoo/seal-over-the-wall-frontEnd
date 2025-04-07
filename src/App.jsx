import { Button } from "@/components/ui/button"
import MUIButton from '@mui/material/Button';


export default function App() {



  return (
    <div className="h-screen flex justify-center bg-blue-950">
      <div className="p-6 gap-y-6 flex flex-col justify-start w-[80%] lg:w-[70%]">
        <h1 className="w-full p-6 bg-amber-100 font-extrabold">
          React App Starter
        </h1>
        <Button>Button from ShadCn</Button>
        <MUIButton>Button from MUI</MUIButton>
      </div>
    </div>
  );
}
