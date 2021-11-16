import React,{useState} from 'react'
import Image from 'next/image'
import { SearchIcon, GlobeAltIcon,MenuAlt1Icon,UserCircleIcon,UserIcon } from '@heroicons/react/solid'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { motion } from "framer-motion"
import { useRouter } from 'next/dist/client/router';


function Header(props) {
    const [searchInput, setSearchInput] = useState('')
    const[startDate, setStartDate] = useState(new Date())
    const[endDate, setEndDate] = useState(new Date())
    const[noOfGuests, setNoOfGuests] = useState('1')
    const router = useRouter();
    const handleSelect = (ranges) =>{
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
        console.log(ranges); // native Date object
      }
    const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
    }
    
    const searchPage = () =>{
        router.push({
            pathname:'/search',
            query:{
                location: searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                noOfGuests
            }
        })
    }
    return (
        <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10'>
            {/* Left Side */}
            <div onClick={()=>router.push('/')} className='hidden md:inline-flex relative flex items-center h-10 cursor-pointer my-auto'>
                <Image
                src={props.ImageSource}
                layout='fill'
                objectFit='contain'
                objectPosition='left'
                />
            </div>

            {/* middle  */}
            <div className='flex md:border-2  rounded-full items-center md:shadow-sm'>
                <input 
                value={searchInput} 
                onChange={(e)=>setSearchInput(e.target.value)} 
                className='bg-transparent pl-5 flex-grow outline-none' 
                type='text' 
                placeholder={props.placeholder || 'Start your search'}/>
                <SearchIcon className='hidden md:inline-flex cursor-pointer md:mx-2 h-8 bg-red-400 text-white rounded-full p-2'/>
            </div>

            {/* right */}
            <div className='hidden md:inline-flex flex justify-end text-gray-500 items-center space-x-4'>
                 <p className='cursor-pointer'>{props.HeaderTitle}</p>
                <GlobeAltIcon className='h-6 cursor-pointer'/>

                <div className='flex border-2 p-2 rounded-full space-x-2'>
                    <MenuAlt1Icon className='h-6 cursor-pointer'/>
                    <UserCircleIcon className='h-6 cursor-pointer'/>
                </div>
            </div>

            {searchInput && 
            <motion.div
            animate={{ x: 450 }}
            transition={{ type: "spring", stiffness: 100 }}
            >
            <div className='flex flex-col col-span-3 mx-auto '>
                <DateRangePicker
                    ranges={[selectionRange]}
                    onChange={handleSelect}
                    minDate={new Date()}
                    rangeColors={['#FD5B61']}
                />
                <div className='flex items-center border-b mb-4'>
                    <h2 className='text-2xl pl-2 flex-grow font-semibold'>Number of guests</h2>
                    <UserIcon className='h-5'/>
                    <input type='number'
                    min={1}
                    value={noOfGuests} 
                    onChange={(e)=>setNoOfGuests(e.target.value)} 
                     className='w-12 pl-2 text-lg outline-none text-red-400' defaultValue='1'/>
                </div>
                <div className='flex items-center '>
                    <button className='flex-grow' onClick={()=>setSearchInput('')}>Cancel</button>
                    <button onClick={searchPage} className='flex-grow text-red-400'>Search</button>
                </div>
            </div>
            </motion.div>
            }
        </header>
    )
}

export default Header
