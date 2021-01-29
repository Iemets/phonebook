export const error = message => {
    return {
        title: "An error occurred.",
        position: "bottom-right",
        description: message,
        status: "error",
        duration: 5000,
        isClosable: true,
    }
};

export const success = message => {
    return {
        // title: "Welcome!",
        position: "bottom-right",
        description: message,
        status: "success",
        duration: 5000,
        isClosable: true,
    }
};