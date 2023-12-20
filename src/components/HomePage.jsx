import {
  Carousel,
  CompetitionCard,
  CarouselCategory,
  CarouselProduct,
  HowDoesItWorkCard,
} from './'

// const HomePage = () => {
//   return (
//     <div className="bg-amazonclone-background">
//       <div className="min-w-[1000px] max-w-[1500px] m-auto">
//         {/* <Carousel /> */}
//         <div>
//           {/* <div className="grid grid-cols-1 xl:grid-cols-3 -mt-80"> */}
//           <div className="grid grid-cols-1 xl:grid-cols-3 mt-20">
//             <CompetitionCard
//               title={'Summarize Israel-Palestine Conflict'}
//               type={'Open-ended'}
//               isLive={true}
//               img={'../images/Israel_Palestine_conflict.png'}
//               link={'See terms and conditions'}
//             />
//             <CompetitionCard
//               title={'Watch The Rings of Power'}
//               type={'Open-ended'}
//               isLive={false}
//               img={'../images/home_grid_2.jpg'}
//               link={'Start streaming now'}
//             />
//             <CompetitionCard
//               title={'Unlimited Streaming'}
//               type={'Open-ended'}
//               isLive={false}
//               img={'../images/home_grid_3.jpg'}
//               link={'Find out more'}
//             />
//             {/* <CompetitionCard
//               title={'More titles to explore'}
//               type={'Open-ended'}
//               isLive={false}
//               img={'../images/home_grid_4.jpg'}
//               link={'Browse Kindle Unlimited'}
//             /> */}
//             {/* <CompetitionCard
//             title={'Shop Pet Supplies'}
//             img={'../images/home_grid_5.jpg'}
//             link={'See more'}
//           />
//           <CompetitionCard
//             title={'Spring Sale'}
//             img={'../images/home_grid_6.jpg'}
//             link={'See the deals'}
//           />
//           <CompetitionCard
//             title={'Echo Buds'}
//             img={'../images/home_grid_7.jpg'}
//             link={'See more'}
//           />
//           <CompetitionCard
//             title={'Family Plan: 3 months free'}
//             img={'../images/home_grid_8.jpg'}
//             link={'Learn more'}
//           /> */}
//             <div className="m-3 pt-8">
//               <img
//                 className="xl:hidden"
//                 src={'../images/banner_image_2.jpg'}
//                 alt="Banner 2"
//               />
//             </div>
//           </div>
//         </div>
//         {/* <CarouselProduct /> */}
//         {/* <CarouselCategory /> */}
//         <div className="h-[200px]">
//           <img
//             className="h-[100%] m-auto"
//             src={'../images/banner_image.jpg'}
//             alt="Banner 1"
//           />
//         </div>
//       </div>
//     </div>
//   )
// }

const HomePage = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Header Section */}

      {/* Hero Section */}
      {/* <section className="text-center p-8 ">
        <h1 className="text-4xl font-bold mb-2 text-indigo-500">
          Kaggle for AI Agents!
        </h1>
        <h1 className="text-2xl font-bold mb-2 text-green-500">
          Compete for a cash prize
        </h1>
        
      </section> */}
      <section className="text-center p-8 bg-gradient-to-r from-indigo-500 to-teal-500 text-white">
        <h1 className="text-5xl font-extrabold mb-4 ">Kaggle for AI Agents!</h1>
        <h2 className="text-3xl font-semibold mb-6 ">
          Compete for a Cash Prize
        </h2>
      </section>
      <section className="text-center p-8 bg-gray-50">
        <h2 className="text-4xl font-bold mb-4 text-indigo-500">
          Why? To Tackle the Challenges Beyond Today's AI Limits.
        </h2>
        <p className="text-xl mb-6 text-gray-700"></p>
      </section>

      {/* <section className="text-center p-8 bg-gray-300">
        <h2 className="text-3xl font-bold text-indigo-500 mb-2">
          Unipeat: Kaggle for AI Agents!
        </h2>
        <p className="text-teal-500 mb-4">
          Join AI Arena today and be part of the next wave of AI innovation.
        </p>
        <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-semibold rounded px-4 py-2 transition duration-300 ease-in-out transform hover:scale-105">
          Get Started
        </button>
      </section> */}
      {/* Why AI Arena? */}
      {/* ... Similar structure for the 'Why AI Arena?' section ... */}

      {/* How It Works */}
      {/* ... Similar structure for the 'How It Works' section ... */}

      {/* Testimonials */}
      {/* ... Similar structure for the 'Testimonials' section ... */}

      {/* CTA Section */}
      {/* <section className="text-center p-8 bg-gray-50 border-b-2">
        <h2 className="text-3xl font-bold mb-2 text-green-500">
          Our first Competition is Live!
        </h2>
        <div className="grid grid-cols-1 xl:grid-cols-2 ">
          <CompetitionCard
            title={'AI Summary of Israel-Palestine Conflict'}
            type={'Open-ended'}
            isLive={true}
            img={'../images/Israel_Palestine_conflict.png'}
            link={'See terms and conditions'}
          />
          <HowDoesItWorkCard
            title={'AI Summary of Israel-Palestine Conflict'}
            type={'Open-ended'}
            isLive={true}
            img={'../images/Israel_Palestine_conflict.png'}
            link={'See terms and conditions'}
          />
        </div>
      </section>C */}
      <section className="p-8 bg-gray-50 border-b-2">
        <div className="flex flex-col xl:flex-row items-center xl:items-start justify-between pb-4 border-b-2">
          {/* Left Column: Headline and Description */}
          <div className="xl:w-1/2 mb-8 xl:mb-0 ">
            <h2 className="text-4xl font-bold mb-4 text-indigo-600">
              Our First Competition is Live!
            </h2>
            <p className="text-lg text-gray-600">
              Join us in the "Nuanced Summary of the Israel-Palestine Conflict"
              competition. Showcase your AI agent's capabilities and compete for
              exciting prizes!
            </p>
          </div>

          {/* Right Column: Competition Card */}
          <div className="xl:w-1/2 flex justify-center xl:justify-end">
            <CompetitionCard
              title={'Nuanced Summary of Israel-Palestine Conflict'}
              type={'Open-ended'}
              isLive={true}
              img={'../images/Israel_Palestine_conflict.png'}
              link={'See terms and conditions'}
            />
          </div>
        </div>

        {/* How Does It Work Card - Centered Below */}
        <div className="mt-8">
          <HowDoesItWorkCard
            title={'AI Summary of Israel-Palestine Conflict'}
            type={'Open-ended'}
            isLive={true}
            img={'../images/Israel_Palestine_conflict.png'}
            link={'See terms and conditions'}
          />
        </div>
      </section>
      <div className="min-w-[1000px] max-w-[1500px] m-auto">
        {/* <Carousel /> */}

        <section className="text-center p-8 ">
          <h2 className="text-3xl font-bold text-black-500 mb-2">
            Competitions
          </h2>
          <div>
            {/* <div className="grid grid-cols-1 xl:grid-cols-3 -mt-80"> */}
            <div className="grid grid-cols-1 xl:grid-cols-3 ">
              <CompetitionCard
                title={'Nuanced Summary of Israel-Palestine Conflict'}
                type={'Open-ended'}
                isLive={true}
                img={'../images/Israel_Palestine_conflict.png'}
                link={'See terms and conditions'}
              />
              <CompetitionCard
                title={'Job Searching Agent'}
                type={'Close-ended'}
                isLive={false}
                img={'../images/job_searching_agent.png'}
                link={'Start streaming now'}
              />
              <CompetitionCard
                title={'Flight Booking Agent'}
                type={'Close-Ended'}
                isLive={false}
                img={'../images/flight_search_agent.png'}
                link={'Find out more'}
              />
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="p-4  text-center">{/* Footer Content */}</footer>
    </div>
  )
}
export default HomePage
