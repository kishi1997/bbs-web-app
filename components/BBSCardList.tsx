import React from "react";
import BBSCard from "./BBSCard";
import { BBSData } from "../app/types/type";
type BBSAllDataProps = {
  BBSAllData: BBSData[];
};
export const BBSCardList = ({ BBSAllData }: BBSAllDataProps) => {
  return (
    <div className="grid lg:grid-cols-3 px-4 py-4 gap-4">
      {BBSAllData.map((BBSData: BBSData) => (
        <BBSCard key={BBSData.id} BBSData={BBSData} />
      ))}
    </div>
  );
};

export default BBSCardList;
