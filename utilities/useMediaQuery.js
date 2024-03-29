import { useState, useCallback, useEffect } from "react";

const useMediaQuery = (width) => {
	const [targetReached, setTargetReached] = useState(false);

	const updateTarget = useCallback((e) => {
		if (e.matches) {
			setTargetReached(true);
		} else {
			setTargetReached(false);
		}
	}, []);

	useEffect(() => {
		const media = window.matchMedia(`(min-width: ${width}px)`);
		media.addEventListener("change", (e) => updateTarget(e));

		if (media.matches) {
			setTargetReached(true);
		}

		return () => media.removeEventListener("change", (e) => updateTarget(e));
	}, [updateTarget, width]);

	return targetReached;
};

export default useMediaQuery;

// Source: https://github.com/vercel/next.js/discussions/14810
