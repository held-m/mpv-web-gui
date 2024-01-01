type Props = {
  isLoading?: boolean;
};

export const Loading = (props: Props) => {
  if (!props.isLoading && props.isLoading !== undefined) {
    return null;
  }
  return (
    <div className="p-4 mx-auto w-full max-w-sm rounded-md border border-blue-300 shadow">
      <div className="flex space-x-4 animate-pulse">
        <div className="w-10 h-10 rounded-full bg-slate-700"></div>
        <div className="flex-1 py-1 space-y-6">
          <div className="h-2 rounded bg-slate-700"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2 h-2 rounded bg-slate-700"></div>
              <div className="col-span-1 h-2 rounded bg-slate-700"></div>
            </div>
            <div className="h-2 rounded bg-slate-700"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const LoadingSpinner = (props: Props) => {
  if (!props.isLoading && props.isLoading !== undefined) {
    return null;
  }
  return (
    <div className="flex justify-center items-center p-2 my-4 mx-auto w-10 h-10 bg-white rounded-full ring-1 shadow-lg animate-bounce ring-slate-900 dark:bg-slate-300 dark:ring-slate-800/20">
      <svg
        className="w-6 h-6 text-gray-500"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
      </svg>
    </div>
  );
};

type ButtonProps = {
  label: string;
};

export const LoadingButton = (props: ButtonProps) => {
  return (
    <button
      type="button"
      className="inline-flex items-center py-2 px-4 text-sm font-semibold leading-6 text-white bg-indigo-500 rounded-md shadow transition duration-150 ease-in-out cursor-not-allowed hover:bg-indigo-400"
      disabled={false}
    >
      <svg
        className="mr-3 -ml-1 w-5 h-5 text-white animate-spin"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
      {props.label}
    </button>
  );
};
