import { useToast } from "@chakra-ui/react";
import { useState, useEffect } from "react";

function useToastHook() {
  const [state, setState] = useState(undefined);
  const toast = useToast();

  useEffect(() => {
    if (state) {
      const { message, type, id = undefined } = state;
      const toastConfig = {
        id,
        description: message,
        status: type,
        position: "top-right",
        variant: "left-accent",
        isClosable: true,
        containerStyle: {
          maxWidth: "350px",
        },
      };

      switch (type) {
        case "success":
          toastConfig.title = "Success";
          toast(toastConfig);
          break;
        case "warning":
          toastConfig.title = "Warning";
          toast(toastConfig);
          break;
        case "error":
          toastConfig.title = "Something went wrong";
          toast(toastConfig);
          break;
        default:
          toastConfig.title = "Default";
          toast(toastConfig);
          break;
      }
    }
  }, [state, toast]);

  return [state, setState];
}

export default useToastHook;
