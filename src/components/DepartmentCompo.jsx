import React from "react";
import { useDepartments } from "../context/context.jsx";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

const DepartmentCompo = () => {
  // this is the data got from the context
  const {
    departmentLogo,
    allDepartmentsData,
    isAllDepartmentsDataLoading,
    isAllDepartmentDataError,
  } = useDepartments();

  function allSkeletonLoadingEffect() {
    return [...Array(9)].map((_, i) => {
      return <Skeleton animation={"wave"} height={"3em"} key={i} />;
    });
  }

  if (isAllDepartmentsDataLoading) {
    return (
      <div className="p-6">
        <Box sx={{ width: "100%" }}>
          <Skeleton width={"10%"} height={"3em"} animation={"pulse"} />
          <div className="mt-4 flex flex-col gap-5">
            {allSkeletonLoadingEffect()}
          </div>
        </Box>
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
