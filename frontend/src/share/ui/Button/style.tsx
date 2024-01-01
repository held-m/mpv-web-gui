import { Props } from "./index";

export const styles = {
  container: () => {
    const border = "border-2 border-solid";
    return border;
  },

  size: (size: Props["size"]) => {
    switch (size) {
      case "sm":
        return "text-sm p-1";
      case "md":
        return "text-sm w-26 h-10 p-2";
      case "lg":
        return "text-lg w-16 h-16";
      case "full-sm":
        return "text-sm w-full p-1";
      case "full-md":
        return "text-md w-full p-2";
      case "full-lg":
        return "text-lg w-full h-16";
      default:
        return "text-base w-12 h-12";
    }
  },

  type: (type: Props["type"]) => {
    switch (type) {
      case "info":
        return "bg-info text-info border-info bg-info-hover bg-info-disabled bg-info-disabled-hover";
      case "warn":
        return "bg-warn text-warn border-watn";
      case "danger":
        return "bg-red-500 text-white border-red-500 hover:border-red-600 hover:bg-red-600 active:bg-red-700";
      case "save":
        return "bg-green-600 text-white border-green-600 hover:border-green-700 hover:bg-green-700 active:bg-green-800";
      case "edit":
        return "bg-[#c59b62] text-white border-[#c59b62] hover:border-yesllo-600 hover:bg-yellow-600 active:bg-yeallow-700";
      case "cancel":
        return "bg-gray-500 text-white border-gray-500 hover:border-gray-600 hover:bg-gray-600 active:bg-gray-700";
      case "delete":
        return "bg-red-600 text-white border-red-600 hover:border-red-700 hover:bg-red-700 active:bg-red-800";
      default:
        return "bg-info text-info border-info";
    }
  },
};
