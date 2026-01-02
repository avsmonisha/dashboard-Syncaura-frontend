import { useState } from "react";
import { Mail, Eye, EyeOff, Moon, Sun, User2 } from "lucide-react";
import { Link } from "react-router-dom";
import EmptyShadowCircle from "../components/auth/EmptyShadowCircle";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {  toggleThemeMethod } from "../redux/slices/themeSlice";

export default function SignUp() {
  const dark=useSelector((state)=>state.theme.isDark)
  const dispatch=useDispatch()

  const setDark=()=>{
    dispatch(toggleThemeMethod())
  }
  // const {isDark: dark, toggleTheme: setDark }=useThemeStore();
  const [showPwd, setShowPwd] = useState(false);
  const [showCpwd, setShowCpwd] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Signup Data:", data);
  };

  const onError=(error)=>{
    console.log("Error : ", error);
    
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div
        className={`absolute inset-0 bg-no-repeat bg-top bg-cover bg-[url("/background/signin-light.png")]
      transition-opacity duration-700 ${dark ? "opacity-0" : "opacity-100"}`}
      />

      <div
        className={`absolute inset-0 bg-slate-950
      transition-opacity duration-700 ${dark ? "opacity-100" : "opacity-0"}`}
      />
      <div
        className={`absolute z-10 top-0 left-0 h-16 flex items-center justify-center ${!dark ? "bg-[#F3F8FF]" : "bg-[#1E293B]"
          } w-full `}
      >
        <h1
          className={`text-3xl font-bold tracking-tight font-poppin-reg transition-all ${dark ? "text-white" : "text-[#1E40AF]"
            }`}
        >
          FLOWBIT
        </h1>
      </div>

      <button
        onClick={() => setDark(!dark)}
        className={`absolute z-20 top-2 right-6 p-2.5 rounded-full transition shadow-md ${!dark ? "bg-slate-900 text-black" : "bg-white text-yellow-500"
          }`}
      >
        {dark ? <Sun size={25} className="fill-yellow-500"  /> : <Moon size={30} className="fill-yellow-300" />}
      </button>

      {dark && (
        <>
          <div className="absolute -top-72 -left-72">
            <EmptyShadowCircle
              sizeClass="h-[400px] w-[800px] "
              borderClass="border-2"
            />
          </div>

          <div className="absolute -bottom-5/8 -right-96">
            <EmptyShadowCircle
              sizeClass="h-[800px] w-[800px] "
              borderClass="border-2"
            />
          </div>
        </>
      )}

      <div className="relative top-10 w-4/5 lg:w-3/5 xl:w-1/2 2xl:w-2/5 h-[650px] transition-all duration-700">
        {dark ? (
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="absolute top-10 inset-0 rounded-4xl bg-linear-to-br from-blue-500/30 via-cyan-500/20 to-blue-600/30 blur-3xl animate-pulse"></div>
            <div className="absolute inset-0 rounded-[80px] p-[3px] bg-linear-to-br from-blue-400 via-cyan-400 to-blue-500 shadow-[0_0_80px_rgba(59,130,246,0.8)] ">
              <div className="w-full  rounded-[78px] bg-slate-950/95 backdrop-blur-xl flex items-center justify-center px-30 py-25">
                <div className=" bg-[#FFFFFF] w-full  px-4 py-5 rounded-2xl ">
                  <div className="flex flex-col items-center gap-3 justify-center">
                    <h1 className="text-[#111827] text-2xl font-semibold">
                      Create Account
                    </h1>
                    <p className="text-[#4B5563] text-sm font-semibold">
                      Welcome! Create your account.
                    </p>
                  </div>
                  <form
                    onSubmit={handleSubmit(onSubmit, onError)}
                    className="grid grid-rows-5 px-5 gap-5 mt-5"
                  >
                    <div className="grid grid-cols-5 items-center gap-4">
                      <h2 className="text-[#4B5563] text-sm font-semibold col-span-1">
                        Full Name
                      </h2>

                      <div className="col-span-4 relative">
                        <input
                          type="text"
                          placeholder="John Doe"
                          {...register("name", {
                            required: "Full name is required",
                          })}
                          className="
        w-full
        rounded-lg
        bg-gray-100
        px-4 py-2
        pr-10
        text-sm text-gray-700
        placeholder-gray-400
        focus:outline-none
        focus:ring-2
        focus:ring-blue-500
        transition-all
      "
                        />

                        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                          <User2 className="w-4 h-4 text-gray-500" />
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-5 items-center gap-4">
                      <h2 className="text-[#4B5563] text-sm font-semibold col-span-1">
                        Email
                      </h2>

                      <div className="col-span-4 relative">
                        <input
                          type="text"
                          placeholder="jhngmail.com"
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                              message: "Enter a valid email",
                            },
                          })}
                          className="
        w-full
        rounded-lg
        bg-gray-100
        px-4 py-2
        pr-10
        text-sm text-gray-700
        placeholder-gray-400
        focus:outline-none
        focus:ring-2
        focus:ring-blue-500
        transition-all
      "
                        />

                        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                          <Mail className="w-4 h-4 text-gray-500" />
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-5 items-center gap-4">
                      <h2 className="text-[#4B5563] text-sm font-semibold col-span-1">
                        Password
                      </h2>

                      <div className="col-span-4 relative">
                        <input
                          type={showPwd ? "text" : "password"}
                          {...register("password", {
                            required: "Password is required",
                            minLength: {
                              value: 6,
                              message: "Password must be at least 6 characters",
                            },
                          })}
                          placeholder="Password"
                          className="
        w-full
        rounded-lg
        bg-gray-100
        px-4 py-2
        pr-12
        text-sm text-gray-700
        placeholder-gray-400
        focus:outline-none
        focus:ring-2
        focus:ring-blue-500
        transition-all
      "
                        />

                        {/* Clickable icon */}
                        <button
                          type="button"
                          onClick={() => setShowPwd(!showPwd)}
                          className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-blue-500 transition-colors"
                        >
                          {showPwd ? (
                            <Eye className="w-4 h-4" />
                          ) : (
                            <EyeOff className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-5 items-center gap-4">
                      <h2 className="text-[#4B5563] text-sm font-semibold col-span-1">
                        Confirm Password:
                      </h2>

                      <div className="col-span-4 relative">
                        <input
                          type={showCpwd ? "text" : "password"}
                          placeholder="Confirm password"
                          {...register("confirmPassword", {
                            required: "Confirm password is required",
                            validate: (value) =>
                              value === watch("password") ||
                              "Passwords do not match",
                          })}
                          className="
        w-full
        rounded-lg
        bg-gray-100
        px-4 py-2
        pr-12
        text-sm text-gray-700
        placeholder-gray-400
        focus:outline-none
        focus:ring-2
        focus:ring-blue-500
        transition-all
      "
                        />

                        {/* Clickable icon */}
                        <button
                          type="button"
                          onClick={() => setShowCpwd(!showCpwd)}
                          className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-blue-500 transition-colors"
                        >
                          {showCpwd ? (
                            <Eye className="w-4 h-4" />
                          ) : (
                            <EyeOff className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="w-full flex items-center justify-center">
                      <button
                        type="submit"
                        className="bg-[#2563EB] rounded-full font-semibold px-5 py-2"
                      >
                        CREATE ACCOUNT
                      </button>
                    </div>
                  </form>
                  <div className="w-full flex items-center justify-center text-black mt-5 font-semibold">
                    <Link
                      to={"/sign-in"}
                      className="hover:underline hover:text-blue-600"
                    >
                      Already have an account? Login →
                    </Link>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
        ) : (<div className=" h-full w-full flex items-center justify-center" >
          <div className=" bg-[#FFFFFF] w-2/3  px-4 py-5 rounded-2xl ">
            <div className="flex flex-col items-center gap-3 justify-center">
              <h1 className="text-[#111827] text-2xl font-semibold">
                Create Account
              </h1>
              <p className="text-[#4B5563] text-sm font-semibold">
                Welcome! Create your account.
              </p>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit, onError)}
              className="grid grid-rows-5 px-5 gap-5 mt-5"
            >
              <div className="grid grid-cols-5 items-center gap-4">
                <h2 className="text-[#4B5563] text-sm font-semibold col-span-1">
                  Full Name
                </h2>

                <div className="col-span-4 relative">
                  <input
                    type="text"
                    placeholder="John Doe"
                    {...register("name", {
                      required: "Full name is required",
                    })}
                    className="
        w-full
        rounded-lg
        bg-gray-100
        px-4 py-2
        pr-10
        text-sm text-gray-700
        placeholder-gray-400
        focus:outline-none
        focus:ring-2
        focus:ring-blue-500
        transition-all
      "
                  />

                  <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                    <User2 className="w-4 h-4 text-gray-500" />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-5 items-center gap-4">
                <h2 className="text-[#4B5563] text-sm font-semibold col-span-1">
                  Email
                </h2>

                <div className="col-span-4 relative">
                  <input
                    type="text"
                    placeholder="jhngmail.com"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid email",
                      },
                    })}
                    className="
        w-full
        rounded-lg
        bg-gray-100
        px-4 py-2
        pr-10
        text-sm text-gray-700
        placeholder-gray-400
        focus:outline-none
        focus:ring-2
        focus:ring-blue-500
        transition-all
      "
                  />

                  <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                    <Mail className="w-4 h-4 text-gray-500" />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-5 items-center gap-4">
                <h2 className="text-[#4B5563] text-sm font-semibold col-span-1">
                  Password
                </h2>

                <div className="col-span-4 relative">
                  <input
                    type={showPwd ? "text" : "password"}
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                    })}
                    placeholder="Password"
                    className="
        w-full
        rounded-lg
        bg-gray-100
        px-4 py-2
        pr-12
        text-sm text-gray-700
        placeholder-gray-400
        focus:outline-none
        focus:ring-2
        focus:ring-blue-500
        transition-all
      "
                  />

                  {/* Clickable icon */}
                  <button
                    type="button"
                    onClick={() => setShowPwd(!showPwd)}
                    className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-blue-500 transition-colors"
                  >
                    {showPwd ? (
                      <Eye className="w-4 h-4" />
                    ) : (
                      <EyeOff className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-5 items-center gap-4">
                <h2 className="text-[#4B5563] text-sm font-semibold col-span-1">
                  Confirm Password:
                </h2>

                <div className="col-span-4 relative">
                  <input
                    type={showCpwd ? "text" : "password"}
                    placeholder="Confirm password"
                    {...register("confirmPassword", {
                      required: "Confirm password is required",
                      validate: (value) =>
                        value === watch("password") ||
                        "Passwords do not match",
                    })}
                    className="
        w-full
        rounded-lg
        bg-gray-100
        px-4 py-2
        pr-12
        text-sm text-gray-700
        placeholder-gray-400
        focus:outline-none
        focus:ring-2
        focus:ring-blue-500
        transition-all
      "
                  />

                  {/* Clickable icon */}
                  <button
                    type="button"
                    onClick={() => setShowCpwd(!showCpwd)}
                    className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-blue-500 transition-colors"
                  >
                    {showCpwd ? (
                      <Eye className="w-4 h-4" />
                    ) : (
                      <EyeOff className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              <div className="w-full flex items-center justify-center">
                <button
                  type="submit"
                  className="bg-[#2563EB] rounded-full font-semibold px-5 py-2"
                >
                  CREATE ACCOUNT
                </button>
              </div>
            </form>
            <div className="w-full flex items-center justify-center text-black mt-5 font-semibold">
              <Link
                to={"/sign-in"}
                className="hover:underline hover:text-blue-600"
              >
                Already have an account? Login →
              </Link>
            </div>
          </div>
        </div>)}
      </div>
    </div>
  );
}
