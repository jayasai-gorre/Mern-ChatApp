import React from 'react'

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 max-auto'>

        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <h1 className='text-3xl font-semibold text-center text-gray-300'>
                Login
                &nbsp;<span className='text-blue-500'>ChatApp</span>
            </h1>

            <form action="">
                <div>
                    <label className='label p-2'>
                        <span className='text-gray-100 text-base label-text'>Username</span>
                    </label>
                    <input type="text" placeholder='Enter username' className='w-full input input-bordered h-10  bg-black text-white'/>
                </div>

                <div>
                    <label className='label p-2'>
                        <span className='text-gray-100 text-base label-text'>Password</span>
                    </label>
                    <input type="password" placeholder='Enter Password' className='w-full input input-bordered h-10 bg-black text-white'/>
                </div>

                <a href="#" className='text-white text-sm hover:underline hover:text-grey-200 mt-2 inline-block'>
                    {"Don't have an account"}
                </a>

                <div className='align-middle text-center mt-5'>
                    <button className='btn btn-block btn-sm w-20 '>Login</button>
                </div>
            </form>

        </div>
    </div>
  )
}


// STATER CODE FOR THIS FILE
// const Login = () => {
//     return (
//       <div className='flex flex-col items-center justify-center min-w-96 max-auto'>
  
//           <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//               <h1 className='text-3xl font-semibold text-center text-gray-300'>
//                   Login
//                   &nbsp;<span className='text-blue-500'>ChatApp</span>
//               </h1>
  
//               <form action="">
//                   <div>
//                       <label className='label p-2'>
//                           <span className='text-gray-100 text-base label-text'>Username</span>
//                       </label>
//                       <input type="text" placeholder='Enter username' className='w-full input input-bordered h-10  bg-black text-white'/>
//                   </div>
  
//                   <div>
//                       <label className='label p-2'>
//                           <span className='text-gray-100 text-base label-text'>Password</span>
//                       </label>
//                       <input type="password" placeholder='Enter Password' className='w-full input input-bordered h-10 bg-black text-white'/>
//                   </div>
  
//                   <a href="#" className='text-white text-sm hover:underline hover:text-grey-200 mt-2 inline-block'>
//                       {"Don't have an account"}
//                   </a>
  
//                   <div className='align-middle text-center mt-5'>
//                       <button className='btn btn-block btn-sm w-20 '>Login</button>
//                   </div>
//               </form>
  
//           </div>
//       </div>
//     )
//   }

export default Login