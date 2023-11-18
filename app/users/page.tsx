import EmptyState from '../components/EmptyState';
import { Metadata } from "next";
export const metadata:Metadata={
  title:"messganegr chatt with your users",
  description:"chatt only with users not with users",
 
}

const People = () => {
  return (
    <div className="hidden lg:block lg:pl-80 h-full">
      <EmptyState />
    </div>
   );
}
 
export default People;
