import React from "react";

export default function Login(){





    return(
        <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 flex flex-col justify-center">
                <form className="max-w-[400px] w-full mx-auto bg-gray-300 p-8 px-8 rounded-lg">
                    <h2 className="text-4xl dark:text-white font-bold text-center">SIGN IN</h2>
                    <div>
                        <label className="flex flx-col dark:text-white py-2">
                            Username
                            </label>
                        <input type="text"/>
                    </div>
                    <div>
                        <label className="flex flex-col dark:text-white py-2">
                            Password
                        </label>
                        <input type="password"/>
                    </div>
                    <button >Sign In</button>
                </form>
            </div>

        </div>

    )

}
