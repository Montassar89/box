export const GridItem = ({ sites }) => {
  console.log(sites)
  return (
    <>
      <div className="m-4 py-10 rounded-lg overflow-hidden mx-auto md:w-2/4">
          <section className="p-8 bg-white">
              <h1 className="text-xl text-teal-600 font-semibold">Join our community</h1>
              <h2 className="text-blue-500 font-semibold pt-4">30-day hassel free money back guarentee</h2>
              <p className="pt-2 text-gray-500">Gain access to our library of tutorials along with expert code reviews.  Perfect for any developers who are serious about honing their skills</p>
          </section>
          <section className="text-white md:flex md:flex-row">
            <div className="bg-green-400 p-8 md:w-1/2">
              <h2 className="text-lg font-semibold">Money Subscription</h2>
              <div className="flex item-center pt-2">
                <p className="text-2xl font-semibold">$29</p>
                <p className="ml-2 font-hairline">per month</p>
              </div>
              <p className="font-light text-sm">Full access for less than $1 a day</p>
              <button className="bg-yellow-600 w-full text-white shadow-md font-bold py-2 px-4 rounded mt-6">
                  Sign Up
              </button>
            </div>
            <div className="bg-green-300 p-8 md:w-1/2">
              <h2 className="font-semibold text-lg">Why Us</h2>
              <div className="text-xs font-light pt-2">
                <p>Tutorials by industry experts</p>
                <p>Coding exercises Access</p>
                <p>Peer & expert code review</p>
                <p>Access to our Github repos</p>
                <p>Community forum</p>
                <p>Flashcard decks</p>
                <p>New videos every week</p>
              </div>
            </div>
          </section>
      </div>
    </>
  )
}