import { useContext, createContext, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import CodeIcon from "@mui/icons-material/Code";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import { getAllDepartments } from "../api/api";

const DepartmentContext = createContext();

export const DepartmentProvider = ({ children }) => {
  const {
    data: allDepartmentsData,
    isLoading: isAllDepartmentsDataLoading,
    isError: isAllDepartmentDataError,
  } = useQuery({
    queryKey: ["departments"],
    queryFn: getAllDepartments,
  });

  const departmentLogo = {
    1: <CodeIcon />,
    2: <AddBusinessIcon className="text-green-600" />,
    3: <MonetizationOnIcon className="text-yellow-600" />,
    4: <ManageAccountsIcon className="text-orange-600" />,
    5: <DesignServicesIcon className="text-red-600" />,
  };

  const value = useMemo(
    () => ({
      departmentLogo,
      allDepartmentsData,
      isAllDepartmentsDataLoading,
      isAllDepartmentDataError,
    }),
    [
      departmentLogo,
      allDepartmentsData,
      isAllDepartmentsDataLoading,
      isAllDepartmentDataError,
    ]
  );

  return (
    <DepartmentContext.Provider value={value}>
      {children}
    </DepartmentContext.Provider>
  );
};

export const useDepartments = () => {
  const context = useContext(DepartmentContext);
  if (context === undefined) {
    throw new Error("useDepartments must be used within a DepartmentProvider");
  }
  return context;
};
