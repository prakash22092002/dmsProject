import React from "react";
import { useDepartments } from "../context/context.jsx";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";

const DepartmentCompo = () => {
  // this is the data got from the context
  const {
    departmentLogo,
    allDepartmentsData,
    isAllDepartmentsDataLoading,
    isAllDepartmentDataError,
  } = useDepartments();

  if (isAllDepartmentsDataLoading) {
    return (
      <div>
        <p>
          LOADING...
          <HourglassEmptyIcon />
        </p>
      </div>
    );
  }

  if (isAllDepartmentDataError) {
    return (
      <div>
        <p>There is an error ...</p>
      </div>
    );
  }

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
