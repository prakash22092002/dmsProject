import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getAllDepartments } from "../api/api.js";
import CodeIcon from "@mui/icons-material/Code";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import DesignServicesIcon from "@mui/icons-material/DesignServices";

const DepartmentCompo = () => {
  const {
    data: allDepartmentsData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["departments"],
    queryFn: getAllDepartments,
  });

  if (isLoading) {
    return (
      <div>
        <p>LOADING ...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <p>There is an error ...</p>
      </div>
    );
  }

  const departmentLogo = {
    1: <CodeIcon />,
    2: <AddBusinessIcon className="text-green-600" />,
    3: <MonetizationOnIcon className="text-yellow-600" />,
    4: <ManageAccountsIcon className="text-orange-600" />,
    5: <DesignServicesIcon className="text-red-600" />,
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-[#3a9c88]">Departments</h1>
      <ul className="mt-4 space-y-2">
        {allDepartmentsData.map((el, i) => {
          return (
            <React.Fragment key={i}>
              <li
                className="border-b py-5 flex border-gray-200 hover:bg-gray-200 transition-all duration-500 cursor-pointer"
                key={i}
                onClick={() => console.log(i)}
              >
                <div className="departmentLogo px-5 ">
                  {departmentLogo[el.id] ?? ""}
                </div>
                <div className="border-r border-gray-200 min-w-[200px] pr-2">
                  <p className="text-xl">{el?.name}</p>
                </div>
              </li>
              <div></div>
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
};

export default DepartmentCompo;
