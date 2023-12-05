export const API = process.env.REACT_APP_API_URL;

export const handleApiError = async (error) => {
    try {
      const errorMessage =
        error.response?.data?.message || "An unexpected error occurred.";
      const response = null;
      return { response , error: errorMessage };
    } catch (err) {
      throw new Error("An unexpected error occurred.");
    }
  };