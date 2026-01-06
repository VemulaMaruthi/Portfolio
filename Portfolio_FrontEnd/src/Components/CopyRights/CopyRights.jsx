import Recat from 'react';
import { FaRegCopyright } from "react-icons/fa";
function CopyRights () {
  const name = "Maruthi Vemula";
    return (
        <>
        <div className="w-full h-full mt-20 flex flex-col items-center border-t">
  <div className="flex items-center gap-2 my-4">
    <FaRegCopyright size={12} />
    <p>2025 {name}. All rights reserved.</p>
  </div>
</div>
        </>
    )
}
export default CopyRights;