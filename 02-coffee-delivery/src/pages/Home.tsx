import { Trash } from "phosphor-react";
import { Button } from "../components/ui/Button/Button";

export const Home = () => {
  return (
    <div>
      <Button variant="icon" icon={<Trash />} />
    </div>
  );
};
