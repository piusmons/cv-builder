import {useState} from "react";
import SubmitButton from "./Submit.js";

export default function BioData() {
    const [personData, setPersonData] = useState({
      firstName:'',
      lastName:'',
      email:''
    });
  
    function handleChange(e) {
      setPersonData({
        ...personData,
        [e.target.name]: e.target.value
      });
    }
   
  
    return (
      
      <div class="flex justify-center">
        <label class="mb-3 block text-base font-medium text-[#07074D]">
          First Name:
          <input class=" w-full rounded-md border border-[#e0e0e0] bg-white py-1 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            name='firstName'
            value={personData.firstName}
            onChange={handleChange}
          />
        </label>
        <label class="mb-3 block text-base font-medium text-[#07074D]">
          Last Name:
          <input class="mx-1 w-full rounded-md border border-[#e0e0e0] bg-white py-1 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            name='lastName'
            value={personData.lastName}
            onChange={handleChange}
          />
        </label>
        <label class="mb-3 block text-base font-medium text-[#07074D]">
          Email:
          <input class="mx-2 w-full rounded-md border border-[#e0e0e0] bg-white py-1 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            name='email'
            value={personData.email}
            onChange={handleChange}
          />
        </label>
        
      </div>
    )
  }
  