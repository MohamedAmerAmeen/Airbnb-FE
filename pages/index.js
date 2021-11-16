import Head from 'next/head'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import LargeCard from '../components/LargeCard'
import MediumCard from '../components/MediumCard'
import SmallCard from '../components/SmallCard'

export default function Home({exploreData, cardsData}) {
  return (
    <div className="">
      <Head>
        <title>Airbnb - Front End</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header HeaderTitle='Become a host' ImageSource='https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg' />
      <Banner/>

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        {/* Start Of Small Card Section With Recommended Location */}
        <section className='pt-6'>
          <h2 className='text-4xl pb-5 font-semibold font'>Explore Nearby</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {exploreData?.map(item=>(
            <SmallCard key={Math.random()} TheLocation={item.location} TheTiming={item.distance} TheImage={item.img}/>
          ))}
          </div>
        </section>
        {/* End Of Small Cards Section With Recommended Location */}
      
        {/* Start Of Small Card Section With Recommended Location */}
        <section className='pt-6'>
          <h2 className='text-4xl pb-5 font-semibold font'>Live anywhere</h2>
          <div className='flex space-x-4 overflow-scroll scrollbar-hide p-3 ml-3'>
          {cardsData?.map(item=>(
            <MediumCard key={Math.random()} TheImage={item.img} TheTitle={item.title}/>
          ))}
          </div>
        </section>
        {/* End Of Small Cards Section With Recommended Location */}

        {/* Start Of Large Card Component */}
        <section>
          <LargeCard TheImage={'https://links.papareact.com/4cj'}/>
        </section>

      </main>


      <Footer/>
    </div>
  )
}

export async function getStaticProps(){
  const exploreData = await fetch('https://links.papareact.com/pyp')
  .then((res) => res.json())
  
  const cardsData = await fetch('https://links.papareact.com/zp1')
  .then((res) => res.json())

  return{
    props:{exploreData,cardsData}
  }
}
