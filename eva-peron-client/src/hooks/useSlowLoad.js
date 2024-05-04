import { useEffect, useState } from "react";

export const useSlowLoad = () => {
    const [isLoaded, setIsLoaded] = useState(false)

    const onLoad = () => {
        setIsLoaded(true);
    }


    useEffect(() => {
      onLoad();
    }, [])

  return {
    isLoaded
  }
}
