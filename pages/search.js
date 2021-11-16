import { useRouter } from 'next/dist/client/router'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import {format} from 'date-fns'
import { it } from 'date-fns/locale'
import InfoCard from '../components/InfoCard'
function search({searchResults}) {
    const router = useRouter();
    const {location,startDate,endDate,noOfGuests} = router.query;
    // const startDateFormatted = format(new Date("2015"), "MMMM dd");
    // const endDateFormatted = format(new Date(endDate), "dd")
    // const range = `${startDate} - ${endDate}`

    return (
        <div>
            <Header placeholder={`${location} | ${noOfGuests}`} HeaderTitle='This is Changeable' ImageSource='https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg' />
            <main className='flex'>
                <section className='flex-grow pt-14 px-6'>
                    <p className='text-sm'>300+ stays . {noOfGuests} guests </p>
                    <h1 className='font-semibold text-3xl mt-2 mb-6'>Stays in {location}</h1>

                    <div className=' hidden lg:inline-flex space-x-3 mb-5 text-gray-800'>
                        <p className='button'>Wifi</p>
                        <p className='button'>Kitchen</p>
                        <p className='button'>Washer</p>
                        <p className='button'>Free parking</p>
                        <p className='button'>Pets allowed</p>
                    </div>
            
                    <div className='flex flex-col'>
                    {searchResults.map(item=>(
                    <InfoCard key={item.img} 
                    img={item.img} 
                    location={item.location}
                    title={item.title}
                    description={item.description}
                    star={item.star}
                    price={item.price}
                    total={item.total}/>    
                    ))}
                </div>
            
                </section>

            </main>
            <Footer/>
        </div>
    )
}

export default search

export async function getServerSideProps(){
    const searchResults = await fetch('https://links.papareact.com/isz')
    .then((res) => res.json())
      
    return{
      props:{searchResults}
    }
  }
  