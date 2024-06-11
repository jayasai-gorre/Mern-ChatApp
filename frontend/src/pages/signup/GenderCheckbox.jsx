import React from 'react'

const GenderCheckbox = () => {
  return (
    <div className='flex'>
        <div className='form-control'>
            <label className={'label gap-2 cursor-pointer'}>
                <span className='text-gray-100 label-text'>Male</span>
                <input type="checkbox" className='checkbox checkbox-info' border-slate-900/>
            </label>
        </div>

        <div className='form-control'>
            <label className={'label gap-2 cursor-pointer'}>
                <span className='text-gray-100 label-text'>Female</span> 
                <input type="checkbox" className='checkbox checkbox-info' border-slate-900/>
            </label>
        </div>
    </div>
  )
}


// STATER CODE FOR GENDERCHECKBOX PAGE
// const GenderCheckbox = () => {
//     return (
//       <div className='flex'>
//           <div className='form-control'>
//               <label className={'label gap-2 cursor-pointer'}>
//                   <span className='text-gray-100 label-text'>Male</span>
//                   <input type="checkbox" className='checkbox checkbox-info' border-slate-900/>
//               </label>
//           </div>
  
//           <div className='form-control'>
//               <label className={'label gap-2 cursor-pointer'}>
//                   <span className='text-gray-100 label-text'>Female</span> 
//                   <input type="checkbox" className='checkbox checkbox-info' border-slate-900/>
//               </label>
//           </div>
//       </div>
//     )
//   }
export default GenderCheckbox