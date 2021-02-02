import React from 'react';

const Testimonials = () => {
  const testimonialsItems = [
    {
      star: 4.5,
      comment:
        "The CEO's role in raising a company's corporate IQ is sharing and collaboration.",
      user: 'Chief Executive Officer',
    },
    {
      star: 4.5,
      comment:
        "The CEO's role in raising a company's corporate IQ is sharing and collaboration.",
      user: 'Chief Executive Officer',
    },
    {
      star: 4.5,
      comment:
        "The CEO's role in raising a company's corporate IQ is sharing and collaboration.",
      user: 'Chief Executive Officer',
    },
  ];
  return (
    <div className="bg-gray-100 py-10 mt-20">
      <div className="container flex justify-center mx-auto pt-16">
        <div>
          <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-3 sm:w-4/6 w-5/6 mx-auto">
            Testimonials
          </h1>
          <p className="text-black text-lg text-center font-normal pb-3">
            See what our customers have to say!
          </p>
        </div>
      </div>
      <div className="container flex justify-center mx-auto pt-10">
        <div className="">
          <h3 className="text-gray-500 text-lg text-center font-normal flex justify-center items-center font-bold">
            <span className="text-4xl mx-2">4.8</span>
            <div className="flex ">
              {[...Array(4)].map((el, index) => (
                <a key={index + 11} href="#" className="mx-0">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      className="fill-current text-green-400 stroke-2"
                      fill="green"
                      className="bi bi-star-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  </div>
                </a>
              ))}

              <a href="#" className="mx-0">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="green"
                    className="bi bi-star-half"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.354 5.119L7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.519.519 0 0 1-.146.05c-.341.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.171-.403.59.59 0 0 1 .084-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027c.08 0 .16.018.232.056l3.686 1.894-.694-3.957a.564.564 0 0 1 .163-.505l2.906-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.002 2.223 8 2.226v9.8z" />
                  </svg>
                </div>
              </a>
            </div>
          </h3>
          <p className="text-gray text-lg text-center font-normal pb-3 flex items-center">
            Reviews powered by
            {' '}
            <img
              width="150"
              src="https://i.pinimg.com/originals/2e/df/ff/2edfffaa872309704dfea5ac3463cccb.png"
            />
          </p>
        </div>
      </div>
      <div className="w-full  px-10 pt-0">
        <div className="container mx-auto">
          <div className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
            {testimonialsItems.map((item, index) => (
              <div
                key={index}
                className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 md:mb-32 sm:mb-8 xl:max-w-sm lg:w-2/5"
              >
                <div className="rounded overflow-hidden shadow-md bg-white">
                  <div className="px-6 mt-4">
                    <div className="w-full flex  pt-5 pb-5">
                      {[...Array(5)].map((el, index) => (
                        <a key={index} href="#" className="mx-1">
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              className="fill-current text-green-400 stroke-2"
                              fill="green"
                              className="bi bi-star-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                          </div>
                        </a>
                      ))}
                    </div>
                    <p className="text-left text-black text-base pt-3 font-normal mt-4">
                      {item.comment}
                    </p>
                    <p className="text-gray-500 text-sm text-left mb-8 mt-20">
                      {item.user}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
