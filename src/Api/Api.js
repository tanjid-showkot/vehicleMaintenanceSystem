const url = "https://ncmeq.pythonanywhere.com/api/"
function getErrorMessage(response) {
    const { status } = response;

    switch (status) {
        case 400:
            return "Please check your input and try again.";
        case 401:
            return "You must be logged in to perform this action.";
        case 403:
            return "You don't have permission to access this resource.";
        case 404:
            return "The requested resource could not be found.";
        case 500:
            return "Something went wrong on our end. Please try again later.";
        default:
            return "An unexpected error occurred. Please try again.";
    }
}

const handleResponse = async (response) => {
    if (!response.ok) {
        // const errorData = await response.json();
        // const message = JSON.stringify(errorData);
        // console.log(message);
        // throw new Error(message);
        const message = getErrorMessage(response);
        throw new Error(message);
    }
    return response;
};
// export const signIn = async (data) => {
//     try {
//         const startTime = performance.now();
//         const response = await fetch(`${url}account/login/`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(data),
//         });
//         const endTime = performance.now(); // End measuring
//         console.log(`API Response Time: ${(endTime - startTime).toFixed(2)}ms`);

//         return handleResponse(response);
//     } catch (error) {
//         console.error("API Error:", error.message);
//         throw error;
//     }
// };

// export const VerifyToken = async (token) => {
//     try {
//         const startTime = performance.now(); // Start measuring
//         const response = await fetch(`${url}account/verify-token/`, {
//             method: "GET",
//             headers: {
//                 "content-type": "application/json",
//                 Authorization: `Token ${token}`,
//             },
//         });
//         const endTime = performance.now();
//         console.log(`API Response Time: ${(endTime - startTime).toFixed(2)}ms`);
//         return handleResponse(response);
//     } catch (error) {
//         console.error("API Error:", error.message);
//         throw error;
//     }
// };


export const vehicleList = async () => {
    try {
        const response = await fetch(`${url}vehicles/`, {
            method: "GET",
            headers: {
                "content-type": "application/json",

            },

        });
        return handleResponse(response);
    } catch (error) {
        console.error("API Error:", error.message);
        throw error;
    }
};

export const deleteVehicle = async (id) => {
    try {
        const response = await fetch(`${url}vehicles/${id}/`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json",

            },
        });
        return handleResponse(response);
    } catch (error) {
        console.error("API Error:", error.message);
        throw error;
    }
};

export const createVehicleMaintenance = async (data) => {
    try {
        const response = await fetch(`${url}maintenance/`, {
            method: "POST",
            headers: {
                "content-type": "application/json",

            },
            body: JSON.stringify(data),
        });
        return handleResponse(response);
    } catch (error) {
        console.error("API Error:", error.message);
        throw error;
    }
};

