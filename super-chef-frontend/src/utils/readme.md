The utils folder is short for the utility folder. You see those functions you use all the time and don’t want to repeat them throughout your application, well this is where they go. In the folder below you can see errorHandler.ts, this file can contain functions to handle errors. Let’s take a look at the function handleAPIError(). The first section always checks if the app environment is not in production before it logs errors. This simple code can prevent your app from logging errors that are not for users to see in production. It also has a displayError Parameter which you can pass a boolean state of true to intentionally log errors. Another important thing is that it is getting the error message and returning it. I really do not have the time to repeat this throughout the application so this is one of the best ways to handle it. You can build your error handlers to incoperate other functionalities like navigate to 500 page when there is a server error and so on.

//example
export const handleAPIError = (error:any, displayError = false) => {
 if (process.env.NODE_ENV !== "production") {
  console.log(error);
 }
 if (error &&Object.getOwnPropertyNames(error).includes("response"))   {
 const message = error?.response?.data?.message;
if (displayError) {
 console.log("message", message)
}
return message
}
};