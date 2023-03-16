import {useState} from "react";


let nextId = 0;

export default function Education() {

    const [inputFields, setInputFields] = useState([{
        id: 0,
        institution:'',
        qualification:'',
        dateStarted:'',
        dateEnded:''
    }]);

    function handleChange(index, e) {
        let data = [...inputFields,];
        data[index][e.target.name] = e.target.value;
        setInputFields(data)
      }

    function handleAdd(){
        setInputFields([...inputFields, {
        id: nextId++,
        institution:'',
        qualification:'',
        dateStarted:'',
        dateEnded:''
        }])

    }

    function removeButton(index) {
        let data = [...inputFields]
        data.splice(index, 1)
        setInputFields(data)
    }


    return (
        <div class='flex justify-center space-x-4'>
        <button  class="block uppercase  shadow bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-1 px-2 rounded" onClick={handleAdd}>+</button>
           {inputFields.map((field, index)=> {
            return (
            <div key={index}>
                
                
                <label class="mb-3 block text-base font-medium text-[#07074D]">
                Institution:
                <input class=" w-full rounded-md border border-[#e0e0e0] bg-white py-1 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    name='institution'
                    value={field.institution}
                    onChange={e => handleChange(index, e)}
                />
                </label>

                <label class="mb-3 block text-base font-medium text-[#07074D]">
                Qualification:
                <input class="w-full rounded-md border border-[#e0e0e0] bg-white py-1 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    name='qualification'
                    value={field.qualification}
                    onChange={e => handleChange(index, e)}
                
                />
                </label>

                <label class="mb-3 block text-base font-medium text-[#07074D]">
                Date Started:
                <input class="w-full rounded-md border border-[#e0e0e0] bg-white py-1 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    name='dateStarted'
                    value={field.dateStarted}
                    onChange={e => handleChange(index, e)}
                    
                />
                </label>

                <label class="mb-3 block text-base font-medium text-[#07074D]">
                Date Ended:
                <input class="w-full rounded-md border border-[#e0e0e0] bg-white py-1 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    name='dateEnded'
                    value={field.dateEnded}
                    onChange={e => handleChange(index, e)}
                />  
                <button class="block uppercase  shadow bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-1 px-2 rounded" onClick={e => removeButton(index)}>Remove</button>
                </label>
            </div>
        )})}   
        </div>     
             
    )

}