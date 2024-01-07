import { ChangeEvent, useState } from "react";
import { API } from "../../api";

export const VolumeRange = () => {
  const [volume, setVolume] = useState("100");

  const handleVolumeChange = async (e: ChangeEvent<HTMLInputElement>) => {
    setVolume(e.target.value);
    API.SetVolume(e.target.value);
  };

  return (
    <div className="p-2 m-2 border border-green-500">
      <label className="block text-sm font-medium text-gray-900 dark:text-white">
        Volume
      </label>
      <input
        type="range"
        value={volume}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        onChange={handleVolumeChange}
        min="0"
        max="100"
      />
    </div>
  );
};
