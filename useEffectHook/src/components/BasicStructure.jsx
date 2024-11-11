import { useEffect } from "react";

const BasicStructure = () => {
  useEffect(
    () => {
      // side effect code goes here
      return () => {
        // cleanup code (optional)
        // Runs on component unmount or before re-runs
      };
    },
    [
      // dependencies
    ]
  );
};
