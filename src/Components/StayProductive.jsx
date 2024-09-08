function StayProductive() {
  return (
    <section className="mb-[150px]">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-[30px] place-items-center">
        <div>
          <img src="/src/assets/illustration-stay-productive.png" alt="img" />
        </div>
        <div className="text-white">
          <h3 className="font-medium text-[35px] leading-[50px]">
            Stay productive
            <br />
            wherever you are
          </h3>
          <div className="my-[15px] font-medium text-sm tracking-[0.8px]">
            <p className="mb-[15px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi,
              optio. Nulla commodi perferendis voluptates omnis nesciunt vel at,
              a nemo.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              consectetur nam magnam assumenda ducimus a odio unde impedit enim
              ut!
            </p>
          </div>
          <a
            href="/"
            className="text-primary  hover:text-[#42b0d1] transition-color duration-200 border-b-2 border-primary border-solid pb-[5px] flex items-center gap-[15px] w-fit "
          >
            See hoe Fylo works
            <img
              src="/src/assets/icon-arrow.svg"
              alt="arrow-icon"
              className="w-[20px] h-[20px] object-contain animate-[moveRight_1s_ease-in-out_infinite]"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default StayProductive;
