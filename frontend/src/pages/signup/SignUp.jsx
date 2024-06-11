import React from 'react'
import GenderCheckbox from './GenderCheckbox'

const SignUp = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <h1 className='text-3xl font-semibold text-center text-gray-300'>
                Sign Up <span className='text-blue-500'>ChatApp</span>
            </h1>

            <form action="">
                <div>
                    <label className='label p-2'>
                        <span className='text-base text-gray-100 label-text'>Full Name</span>
                    </label>
                    <input type="text" placeholder='John Deo' className='w-full input input-bordered h-10 bg-black text-white' />
                </div>

                <div>
                    <label className='label p-2'>
                        <span className='text-base text-gray-100 label-text'>Username</span>
                    </label>
                    <input type="text" placeholder='johndeo' className='w-full input input-bordered h-10 bg-black text-white' />
                </div>

                <div>
                    <label className='label p-2'>
                        <span className='text-base text-gray-100 label-text'>Password</span>
                    </label>
                    <input type="password" placeholder='Password' className='w-full input input-bordered h-10 bg-black text-white' />
                </div>

                <div>
                    <label className='label p-2'>
                        <span className='text-base text-gray-100 label-text'>Confirm Password</span>
                    </label>
                    <input type="password" placeholder='Confirm Password' className='w-full input input-bordered h-10 bg-black text-white' />
                </div>

                <GenderCheckbox />
                {/* {GENDER CHECKBOX GOES HERE} */}
                
                <a href="#" className='text-white text-sm hover:underline hover:text-grey-200 mt-2 inline-block'>
                       Already have an account
                </a>

                <div className='align-middle text-center mt-5'>
                    <button className='btn btn-block btn-sm w-20 '>Sign Up</button>
                </div>
            </form>
        </div>
    </div>
  )
}

// STATER CODE FOR THE SIGNUP
// const SignUp = () => {
//     return (
//       <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//           <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//               <h1 className='text-3xl font-semibold text-center text-gray-300'>
//                   Sign Up <span className='text-blue-500'>ChatApp</span>
//               </h1>
  
//               <form action="">
//                   <div>
//                       <label className='label p-2'>
//                           <span className='text-base text-gray-100 label-text'>Full Name</span>
//                       </label>
//                       <input type="text" placeholder='John Deo' className='w-full input input-bordered h-10 bg-black text-white' />
//                   </div>
  
//                   <div>
//                       <label className='label p-2'>
//                           <span className='text-base text-gray-100 label-text'>Username</span>
//                       </label>
//                       <input type="text" placeholder='johndeo' className='w-full input input-bordered h-10 bg-black text-white' />
//                   </div>
  
//                   <div>
//                       <label className='label p-2'>
//                           <span className='text-base text-gray-100 label-text'>Password</span>
//                       </label>
//                       <input type="password" placeholder='Password' className='w-full input input-bordered h-10 bg-black text-white' />
//                   </div>
  
//                   <div>
//                       <label className='label p-2'>
//                           <span className='text-base text-gray-100 label-text'>Confirm Password</span>
//                       </label>
//                       <input type="password" placeholder='Confirm Password' className='w-full input input-bordered h-10 bg-black text-white' />
//                   </div>
  
//                   <GenderCheckbox />
//                   {/* {GENDER CHECKBOX GOES HERE} */}
                  
//                   <a href="#" className='text-white text-sm hover:underline hover:text-grey-200 mt-2 inline-block'>
//                          Already have an account
//                   </a>
  
//                   <div className='align-middle text-center mt-5'>
//                       <button className='btn btn-block btn-sm w-20 '>Sign Up</button>
//                   </div>
//               </form>
//           </div>
//       </div>
//     )
//   }
export default SignUp