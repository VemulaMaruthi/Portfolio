import Recat from 'react';
import { FaRegCopyright } from "react-icons/fa";
function CopyRights () {
  const name = "Maruthi Vemula";
    return (
        <>
        <div className="w-full h-full mt-10 flex flex-col items-center">
  <div className="flex items-center gap-2 my-4 text-white">
    <FaRegCopyright size={12} />
    <p>2026 {name}. All rights reserved.</p>
  </div>
</div>
        </>
    )
}
export default CopyRights;