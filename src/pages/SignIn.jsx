import { useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import EmptyShadowCircle from '../components/auth/EmptyShadowCircle';
import { useDispatch, useSelector } from 'react-redux';
import {toggleThemeMethod} from "../redux/slices/themeSlice"





export default function SignIn() {
  const isDark=useSelector((state)=>state.theme.isDark)
  // const { isDark, toggleTheme } = useThemeStore()
  const dispatch= useDispatch()
  const toggleTheme=()=>{
   dispatch(toggleThemeMethod())
  }
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("Login:", data);
    

  };
  const onError=(errors)=>{
    if (errors.email) console.log("Email Error:", errors.email.message);
    if (errors.password) console.log("Password Error:", errors.password.message);
  }
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">

      <div className={`absolute inset-0 bg-no-repeat bg-top bg-cover bg-[url("/background/signin-light.png")]
      transition-opacity duration-700 ${isDark ? 'opacity-0' : 'opacity-100'}`}
      />

      <div className={`absolute inset-0 bg-slate-950
      transition-opacity duration-700 ${isDark ? 'opacity-100' : 'opacity-0'}`}
      />



      {isDark && (
        <>
          {/* <div className="absolute -top-[40rem] -left-80"> */}
          <div className="absolute -top-80 -left-72">
            <EmptyShadowCircle sizeClass="h-[400px] w-[800px] " borderClass="border-2" />
          </div>


          <div className="absolute -bottom-5/8 -right-96">
            <EmptyShadowCircle sizeClass="h-[800px] w-[800px] " borderClass="border-2" />
          </div>

        </>
      )}

      <button
        onClick={() => toggleTheme()}
        className="absolute top-8 right-8 p-3 rounded-full bg-white/90 hover:bg-white transition-all z-50 shadow-lg"
      >
        {isDark ? (
          <Sun className="w-6 h-6 text-yellow-500" />
        ) : (
          <Moon className="w-6 h-6 text-slate-700" />
        )}
      </button>

      <div className="relative w-2/3 xl:w-2/5 h-[600px] transition-all duration-700">

        {isDark ? (
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="absolute inset-0 rounded-4xl bg-linear-to-br from-blue-500/30 via-cyan-500/20 to-blue-600/30 blur-3xl animate-pulse"></div>

            <div className="absolute inset-0 rounded-[80px] p-[3px] bg-linear-to-br from-blue-400 via-cyan-400 to-blue-500 shadow-[0_0_80px_rgba(59,130,246,0.8)] ">

              <div className="w-full h-full rounded-[78px] bg-slate-950/95 backdrop-blur-xl flex items-center justify-center">
                <div className="text-center px-16">
                  <h1 className=" text-5xl xl:text-8xl h1-anta tracking-tight font-bold mb-6  text-white"
                  >
                    FLOWBIT
                  </h1>

                  <p className='text-white text-xl xl:text-4xl'>Let Your <span className='text-blue-600'> Work</span> Flow <span className='text-blue-600'>smater</span></p>

                  <form onSubmit={handleSubmit(onSubmit, onError)} className="space-y-3 w-full mt-10">
                    <input
                      type="text"
                      placeholder="Email / User ID"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Please enter a valid email"
                        }
                      })}
                      className="w-full px-5 py-3 rounded-full bg-white/95 text-gray-800 placeholder-gray-400
                                 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all text-center
                                 shadow-lg border-2 border-black/30"
                    />

                    <input
                      type="password"
                      placeholder="Password"
                      {...register("password", { required: "Password is required" })}
                      className="w-full px-5 py-3 rounded-full bg-white/95 text-gray-800 placeholder-gray-400
                                 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all text-center
                                 shadow-lg border-2 border-black/30"
                    />

                    <div className="flex items-center justify-center">
                      <button
                     
                      
                        type='submit'
                        className="w-48 mt-5 block py-2.5 rounded-full bg-blue-600 text-white font-bold text-base
                                 hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(59,130,246,0.5)]
                                 hover:shadow-[0_0_30px_rgba(59,130,246,0.7)] hover:scale-105 active:scale-95"
                      >
                        LOGIN
                      </button>
                    </div>
                  </form>

                  <div className="flex justify-center items-center gap-6 mt-6 text-sm">
                    <button
                      className="text-white hover:text-blue-400 transition-colors font-medium"
                      style={{
                        WebkitTextStroke: '0.5px rgba(255,50,50,0.8)',
                        textShadow: '0 0 8px rgba(255,50,50,0.3)'
                      }}>
                      Forgot Password?
                    </button>
                    <span className="text-white text-xl">|</span>
                    <Link to={"/sign-up"}
                      className="text-white hover:text-blue-400 transition-colors font-medium"
                      style={{
                        WebkitTextStroke: '0.5px rgba(0,0,0,0.8)',
                        textShadow: '0 0 6px rgba(0,0,0,0.2)'
                      }}>
                      Create Account
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-8xl  h1-anta font-bold mb-6 tracking-tight text-stroke-white-fill">
                FLOWBIT
              </h1>


              <p className='text-white text-4xl font-bold'>Let Your <span className='text-blue-600'> Work</span> Flow <span className='text-blue-600'>smater</span></p>
              <form onSubmit={handleSubmit(onSubmit, onError)} className="space-y-3 w-full mt-10">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Email / User ID"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Please enter a valid email"
                      }
                    })}
                    className="w-full px-5 py-3 rounded-full bg-white/90 text-gray-700 placeholder-gray-400
                               focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all text-center
                               shadow-lg border-2 border-black/50"
                  />
                </div>

                <div className="relative">
                  <input
                    type="password"
                    placeholder="Password"
                    {...register("password", { required: "Password is required" })}
                    className="w-full px-5 py-3 rounded-full bg-white/90 text-gray-700 placeholder-gray-400
                               focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all text-center
                               shadow-lg border-2 border-black/50"
                  />
                </div>

                <button
                  type='submit'
                  className="w-48 mx-auto block py-2.5 rounded-full bg-blue-600 text-white font-bold text-base
                             hover:bg-blue-500 transition-all hover:scale-105 active:scale-95"

                >
                  LOGIN
                </button>
              </form>

              <div className="flex justify-center items-center gap-6 mt-6 text-sm">
                <button className="text-stroke-red text-sm hover:text-orange-600 transition-colors font-medium">
                  Forgot Password?
                </button>

                <span className="text-black text-xl font-light">|</span>
                <Link
                  to="/sign-up"
                  className="text-stroke-green text-sm text-white hover:text-gray-700 transition-colors font-bold"

                >
                  Create Account
                </Link>

              </div>
            </div>
          </div>
        )}
      </div>
    </div>

  );
}